# SSO Integration Guide for Mammouth AI Business customers

This document is for IT administrators of organizations that want to enable Single Sign-On (SSO) for their users on [mammouth.ai](https://mammouth.ai).

You can find the Mammouth AI logo to add in your integrations here https://public.mammouth.ai/

## Per-IdP setup instructions

### Microsoft Entra ID (formerly Azure AD)

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

#### What to send Mammouth (via your preferred secure app)

| Field           | Where to find it                                       |
| --------------- | ------------------------------------------------------ |
| Org. name       | Human-readable name for your company, like `Acme Corp` |
| Alias           | The alias derived from your domain, eg `acme-com`      |
| Client ID       | App registration → Overview → Application (client) ID  |
| Client Secret   | App registration → Certificates & secrets              |
| Entra Tenant ID | App registration → Overview → Directory (tenant) ID    |
| Email domain(s) | Your company's email domain(s)                         |

### Okta

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

#### What to send Mammouth

| Field           | Where to find it                                       |
| --------------- | ------------------------------------------------------ |
| Org. name       | Human-readable name for your company, like `Acme Corp` |
| Alias           | The alias derived from your domain, eg `acme-com`      |
| Client ID       | Application → General → Client Credentials             |
| Client Secret   | Application → General → Client Credentials             |
| Okta domain     | Your Okta admin URL hostname                           |
| Email domain(s) | Your company's email domain(s)                         |

### Google Workspace

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

#### What to send Mammouth

| Field           | Where to find it                                       |
| --------------- | ------------------------------------------------------ |
| Org. name       | Human-readable name for your company, like `Acme Corp` |
| Alias           | The alias derived from your domain, eg `acme-com`      |
| Client ID       | Credentials → OAuth 2.0 Client ID                      |
| Client Secret   | Credentials → OAuth 2.0 Client ID                      |
| Hosted domain   | Your Google Workspace domain (e.g. `acme.com`)         |
| Email domain(s) | Your company's email domain(s)                         |

### Generic SAML 2.0

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

#### What to send Mammouth

| Field                    | Where to find it                                       |
| ------------------------ | ------------------------------------------------------ |
| IdP Metadata URL         | Your IdP's SAML metadata URL, or the metadata XML file |
| Email domain(s)          | Your company's email domain(s)                         |
| Attribute name for email | The SAML attribute name used for the email claim       |

## Security considerations

- **Domain restriction**: Only email addresses from your registered domain(s) are accepted by the SSO flow. Users with other domains reach the regular password login.
- **No Mammouth password**: SSO users never have a Mammouth password. Authentication is fully delegated to your IdP, so your MFA, conditional access policies, and session policies apply.
- **Admin console blocked**: The Keycloak Admin Console (`/admin`) and Account Console (`/realms/mammouth/account`) are blocked at the ingress level. SSO users cannot reach them regardless of their Keycloak roles.
- **Token handling**: Keycloak tokens are not stored in Mammouth's database. Mammouth issues its own short-lived encrypted session cookie after validating the Keycloak callback.
- **Secret rotation**: Client secrets can be rotated in your IdP at any time. Notify Mammouth so the new secret can be updated in Keycloak before the old one expires.

## Go-live checklist

### Business customer (you)

- [ ] Application registered in your IdP with the correct redirect URI
- [ ] Required scopes / attribute mappings configured
- [ ] Client secret / metadata URL securely shared with Mammouth
- [ ] App assigned to relevant users or groups in your IdP
- [ ] (Microsoft) Admin consent granted for `openid`, `profile`, `email`
- [ ] (Google) OAuth consent screen set to Internal

### Mammouth

- [ ] Keycloak Organization created with your email domain(s)
- [ ] Keycloak Identity Provider created and linked to the Organization
- [ ] Test login end-to-end with at least one of your user.

## Support

For questions or issues, contact your Mammouth AI account manager or email [contact@mammouth.ai](mailto:contact@mammouth.ai).

For urgent secret rotation, please email immediately — rotations can be applied within minutes.

## More details: How SSO works

Mammouth AI uses **Keycloak** as an SSO broker. Keycloak sits between Mammouth and your company's Identity Provider (IdP). This means:

- Mammouth app never receives your users' passwords or tokens.
- All standard enterprise protocols are supported: OIDC, OAuth 2.0, SAML 2.0.
- You only need to register one application in your IdP (pointing to Keycloak), regardless of how many products Mammouth adds later.

### End-to-end login flow

```
1. User visits mammouth.ai/login and types their email
2. Mammouth detects the email domain belongs to your organization
3. User is redirected to Keycloak (sso.mammouth.ai) with their email pre-filled
4. Keycloak immediately redirects to your IdP — the Keycloak login page is not shown
5. User authenticates with their normal corporate credentials (MFA applies as configured in your IdP)
6. Your IdP redirects back to Keycloak with an identity token
7. Keycloak validates the token and redirects back to Mammouth
8. Mammouth creates or updates the user account and logs the user in
```

The user experience: they type their email, click Continue, and land directly on your company's login page. No Mammouth password is ever set or needed.

## What you need to provide to Mammouth (see below more specific details depending on your Identity Provider)

Send the following to your Mammouth AI contact:

| Field                             | Description                                       | Example                                                      |
| --------------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| **Organization name**             | Human-readable name for your company              | `Acme Corp`                                                  |
| **Alias**                         | The alias derived from your domain, eg `acme-com` | `acme-com`                                                   |
| **Email domain(s)**               | Domain(s) whose users should be redirected to SSO | `acme.com`, `acme.eu`                                        |
| **IdP type**                      | Your identity provider                            | `Microsoft Entra ID`, `Okta`, `Google Workspace`, `SAML 2.0` |
| **Redirect URI for your IdP app** | You will register this in your IdP                | See per-IdP instructions below                               |

The Keycloak redirect URI you need to register in your IdP is:

```
https://sso.mammouth.ai/realms/mammouth/broker/<alias>/endpoint
```

where `<alias>` is a short slug that Mammouth assigns for your organization (e.g. `acme-com`).

## What Mammouth does (internal steps)

After receiving the information above, a Mammouth engineer will:

1. Create a **Keycloak Organization** for your company with the provided email domain(s).
2. Create a **Keycloak Identity Provider** (one per IdP type) with the credentials you provide.
3. Link the Identity Provider to the Organization so Keycloak can auto-select it from the email domain.
4. Confirm that the integration is active and provide a test account for validation.
