# Connect Meta Ads (MCP)

Meta ships an official MCP server for Meta Ads: it lets Mammouth read your campaign performance and, if you allow it, create and manage campaigns, ad sets and ads. This guide shows how to connect it to Mammouth as a [custom MCP connector](../../#custom-mcp).

::: tip Before you start
You'll need:
- A Facebook account with access to the ad accounts you want to use
- A [Meta for Developers](https://developers.facebook.com/) account (free, sign in with the same Facebook account)
:::

## Server URL

Use `https://mcp.facebook.com/ads`, exactly as written: don't add `/mcp` at the end, or Meta answers that the server doesn't exist.

---

## Automatic connection (OAuth)

Not available. Meta only accepts automatic registration from the MCP clients it has approved one by one (Claude, ChatGPT, Cursor, Codex…), and Mammouth isn't on that list yet. If you try it, the connection fails with `Dynamic registration is not available for this client`. Use **Manual connection** below instead.

## Manual connection (client ID) — recommended

You create your own Meta app once, then sign in with Facebook. Mammouth renews the access automatically.

### 1. Create the Meta app

1. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps) and click **Create App**.
2. Enter an app name (for example `Mammouth Meta Ads`) and continue.
3. At the **Use cases** step, choose **Ads and monetization** → **Create & manage ads with ads MCP server**.
4. At the **Business** step, select the business portfolio that owns your ad accounts. If your ad accounts aren't managed through a business portfolio, choose **I don't want to connect a business portfolio yet**: you can add one later.
5. Finish the wizard to create the app.

<!-- screenshot: use case selection -->

::: info
The ads MCP use case also adds **Facebook Login for Business** to your app, which you'll configure in step 3.
:::

### 2. Check the permissions {#permissions}

In your app, open **Use cases**, click **Customize** on the ads MCP server use case, then open the **Permissions and features** tab. Make sure these permissions are added:

- `ads_mcp_management` (required)
- `ads_read` and `ads_management`
- `business_management`, `catalog_management`
- `pages_show_list`, `pages_manage_ads`
- `instagram_basic`, `instagram_branded_content_ads_brand`

Mammouth requests every permission Meta lists for its MCP server, so a missing one can make the Facebook sign-in window fail.

<!-- screenshot: permissions and features tab -->

**Advanced Access** is only needed if you manage ads on behalf of other businesses (agencies, partners). It requires Meta's App Review. For your own ad accounts, the default access is enough.

### 3. Add Mammouth's redirect URI

1. In Mammouth, add a custom MCP connector with the server URL above and choose **Manual connection**.
2. Copy the **Redirect URI** shown in the form. Keep the form open.
3. In your Meta app, open **Facebook Login for Business** → **Settings**.
4. Turn on **Client OAuth login** and **Web OAuth login**.
5. Paste the redirect URI into **Valid OAuth Redirect URIs**, character for character, then click **Save Changes**.

<!-- screenshot: Facebook Login for Business settings -->

### 4. Connect in Mammouth

1. In your Meta app, open **App settings** → **Basic** and copy the **App ID**.
2. Back in Mammouth's Manual connection form, paste it as the **Client ID** and **leave Client secret blank**.
3. Click **Connect**, sign in with Facebook, accept every requested permission and select the ad accounts Mammouth may use.

<!-- screenshot: Mammouth manual connection form -->

::: warning Don't enter the App Secret
Your Meta app has an **App Secret**, but Meta's MCP server doesn't use it: authentication relies on PKCE instead. If you fill the Client secret field, Mammouth rejects it with `This server does not support the submitted client authentication method`.
:::

::: info Development mode
While your Meta app is in **Development** mode, only people with a role on the app (admin, developer, tester) can connect. To let teammates use your app, add them under **App roles** → **Roles**.
:::

## API key (access token)

Meta also accepts an access token sent as a bearer token. It's quicker to set up, but you'll need to replace the token when it expires.

1. Generate a token, either:
   - a **user access token** with the [Graph API Explorer](https://developers.facebook.com/tools/explorer/), including the permissions listed above. It expires after about an hour, or about 60 days once exchanged for a long-lived token.
   - a **system user access token**, from your business portfolio ([Meta's guide](https://developers.facebook.com/docs/business-management-apis/system-users)). Only system users with the **Employee** role work: tokens from Admin system users are refused.
2. In Mammouth, add a custom MCP connector with the server URL above, choose **API key**, and paste the token.

---

## Troubleshooting

| Message | Fix |
| --- | --- |
| `Dynamic registration is not available for this client` | You chose Automatic connection. Use **Manual connection**. |
| `MCP server not found for path: /ads/mcp` | Remove `/mcp` from the server URL. |
| Facebook says the redirect URI isn't allowed | The redirect URI in **Valid OAuth Redirect URIs** doesn't match Mammouth's exactly. Copy it again from the Manual connection form. |
| Facebook says some permissions or scopes are invalid | A permission is missing from your app. See [step 2](#permissions). |
| `This server does not support the submitted client authentication method` | Leave **Client secret** blank. |
| `Error POSTing to endpoint` (often with a 502) | The connection worked, but Meta refuses the requests: `ads_mcp_management` is usually missing. Add the ads MCP use case (step 1), then disconnect and reconnect the connector in Mammouth so the new permission is granted. |

---

## ➡️ What's Next?

👉 **[Back to Connectors (MCPs)](../../)**
