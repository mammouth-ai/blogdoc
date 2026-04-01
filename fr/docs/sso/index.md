# SSO Integration Guide for Mammouth AI Business customers (per-IdP setup instructions)

This document is for IT administrators of organizations that want to enable Single Sign-On (SSO) for their users on [mammouth.ai](https://mammouth.ai).

You can find the Mammouth AI logo to add in your integrations [in the branding kit](/fr/docs/branding-kit/index.md)

To share any sensitive information, use [privatebin.mammouth.ai](https://privatebin.mammouth.ai/) for an encrypted, burn-after-reading way to share data. (This is our self-hosted endpoint of the open-source privatebin service).

## Microsoft Entra ID (formerly Azure AD)

#### 1. Register an application

1. Sign in to the [Azure portal](https://portal.azure.com) with an account that can register applications.
2. Go to **Microsoft Entra ID** → **App registrations** → **New registration**.
3. Fill in:
   - **Name**: `Mammouth AI SSO` (or any name you prefer)
   - **Supported account types**: `Single tenant only`
   - **Redirect URI**: Select **Web** and enter, the alias being a lowercase string without spaces that uniquely identifies your organization (simply respect your DNS, example `google-com`):
     ```
     https://sso.mammouth.ai/realms/mammouth/broker/<alias>/endpoint
     ```
4. Click **Register**.

#### 2. Note Tenant ID and Client ID

On the app's **Overview** page, copy:

- **Application (client) ID** → share this as **Client ID**
- **Directory (tenant) ID** → share this as **Entra Tenant ID**

#### 3. Grant API permissions

1. Go to **API permissions** → **Add a permission** → **Microsoft Graph** → **Delegated permissions**.
2. Add: `openid`, `profile`, `email`.
3. Click **Add permissions** and confirm.

#### 4. Create a client secret

1. Go to **Certificates & secrets** → **Client secrets** → **New client secret**.
2. Set a description "Client Secret for Mammouth AI SSO" and expiry (24 months recommended).
3. **Copy the secret value immediately** — it is not shown again!
4. Share this as the **Client Secret**.

#### What to send to Mammouth (use [privatebin.mammouth.ai](https://privatebin.mammouth.ai/) )

| Field           | Where to find it                                       |
| --------------- | ------------------------------------------------------ |
| Org. name       | Human-readable name for your company, like `Acme Corp` |
| Alias           | The alias derived from your domain, eg `acme-com`      |
| Client ID       | App registration → Overview → Application (client) ID  |
| Client Secret   | App registration → Certificates & secrets              |
| Entra Tenant ID | App registration → Overview → Directory (tenant) ID    |
| Email domain(s) | Your company's email domain(s)                         |

## Okta

#### 1. Create an OIDC application

1. Sign in to the Okta Admin Console.
2. Go to **Applications** → **Applications** → **Create App Integration**.
3. Select **OIDC - OpenID Connect** and **Web Application**.
4. Fill in:
   - **App integration name**: `Mammouth AI SSO`
   - **Grant type**: Authorization Code
   - **Sign-in redirect URI**, the alias being a lowercase string without spaces that uniquely identifies your organization (simply respect your DNS, example `google-com`):
     ```
     https://sso.mammouth.ai/realms/mammouth/broker/<alias>/endpoint
     ```
   - **Sign-out redirect URI**: `https://mammouth.ai`
5. Under **Assignments**, assign the app to the relevant groups or users.
6. Click **Save**.

#### 2. Note Client ID and Secret

On the application's **General** tab, copy:

- **Client ID**
- **Client secret**

Also note your **Okta domain** (e.g. `yourcompany.okta.com`).

#### What to send to Mammouth (use [privatebin.mammouth.ai](https://privatebin.mammouth.ai/) )

| Field           | Where to find it                                       |
| --------------- | ------------------------------------------------------ |
| Org. name       | Human-readable name for your company, like `Acme Corp` |
| Alias           | The alias derived from your domain, eg `acme-com`      |
| Client ID       | Application → General → Client Credentials             |
| Client Secret   | Application → General → Client Credentials             |
| Okta domain     | Your Okta admin URL hostname                           |
| Email domain(s) | Your company's email domain(s)                         |

## Google Workspace

#### 1. Create an OAuth 2.0 client

1. Sign in to [Google Cloud Console](https://console.cloud.google.com) in your organization's GCP project (or create one).
2. Go to **APIs & Services** → **Credentials** → **Create Credentials** → **OAuth client ID**.
3. Select **Web application**.
4. Fill in:
   - **Name**: `Mammouth AI SSO`
   - **Authorized redirect URIs**: Add:
     ```
     https://sso.mammouth.ai/realms/mammouth/broker/<alias>/endpoint
     ```
     the alias being a lowercase string without spaces that uniquely identifies your organization (simply respect your DNS, example `google-com`)
5. Click **Create**.

#### 2. Note Client ID and Secret

The dialog shows:

- **Client ID** (ends in `.apps.googleusercontent.com`)
- **Client Secret**

#### 3. Configure OAuth consent screen

1. Go to **APIs & Services** → **OAuth consent screen**.
2. Set **User type** to **Internal** (so only users in your Workspace org can authenticate).
3. Fill in App name, support email, and authorized domain.
4. Under **Scopes**, ensure `openid`, `email`, and `profile` are included.

#### What to send to Mammouth (use [privatebin.mammouth.ai](https://privatebin.mammouth.ai/) )

| Field           | Where to find it                                       |
| --------------- | ------------------------------------------------------ |
| Org. name       | Human-readable name for your company, like `Acme Corp` |
| Alias           | The alias derived from your domain, eg `acme-com`      |
| Client ID       | Credentials → OAuth 2.0 Client ID                      |
| Client Secret   | Credentials → OAuth 2.0 Client ID                      |
| Hosted domain   | Your Google Workspace domain (e.g. `acme.com`)         |
| Email domain(s) | Your company's email domain(s)                         |

## Keycloak

Client ID / Client Secret is needed for us (setup is really quick as we also use Keycloak)

## Generic SAML 2.0

Keycloak acts as the SAML **Service Provider (SP)**. Your IdP needs to trust this SP.

#### SP metadata URL

Provide this URL to your IdP:

```
https://sso.mammouth.ai/realms/mammouth/broker/<alias>/endpoint/descriptor
```

the alias being a lowercase string without spaces that uniquely identifies your organization (simply respect your DNS, example `google-com`)

This returns the SP metadata XML including the Entity ID, ACS URL, and signing certificate.

#### SP Entity ID (Issuer)

```
https://sso.mammouth.ai/realms/mammouth
```

#### ACS (Assertion Consumer Service) URL

```
https://sso.mammouth.ai/realms/mammouth/broker/<alias>/endpoint
```

#### Required attribute mappings

Your IdP must send the following attributes in the SAML assertion:

| SAML Attribute                                 | Description           | Example value    |
| ---------------------------------------------- | --------------------- | ---------------- |
| `email` or `urn:oid:0.9.2342.19200300.100.1.3` | User's email address  | `alice@acme.com` |
| `firstName` or `givenName`                     | (Optional) First name | `Alice`          |
| `lastName` or `sn`                             | (Optional) Last name  | `Smith`          |

#### What to send to Mammouth (use [privatebin.mammouth.ai](https://privatebin.mammouth.ai/) )

| Field                    | Where to find it                                       |
| ------------------------ | ------------------------------------------------------ |
| IdP Metadata URL         | Your IdP's SAML metadata URL, or the metadata XML file |
| Email domain(s)          | Your company's email domain(s)                         |
| Attribute name for email | The SAML attribute name used for the email claim       |
