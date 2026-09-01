# Connect GitLab (MCP)

GitLab ships an official MCP server built into your instance — no third-party bridge needed. This guide shows how to connect it to Mammouth as a [custom MCP connector](../../#custom-mcp), for each of the three authentication methods.

::: tip Before you start
On the GitLab side you'll need:
- GitLab 18.6 or later (the MCP server is in Beta; it reaches General Availability on the Free tier in GitLab 19.2)
- GitLab Duo set to **Always on** or **On by default**
- MCP server access allowed — at the instance level on Self-Managed/Dedicated, or for the top-level group on GitLab.com

See GitLab's [MCP server documentation](https://docs.gitlab.com/user/model_context_protocol/mcp_server/) for how to turn these on.
:::

## Server URL

Use `https://<your-gitlab-instance>/api/v4/mcp` on Self-Managed or Dedicated, or `https://gitlab.com/api/v4/mcp` on GitLab.com. This is the same URL for all three connection methods below.

---

## Automatic connection (OAuth)

GitLab's MCP server supports OAuth 2.0 **dynamic client registration**, so Automatic connection works with nothing to configure on the GitLab side.

1. In Mammouth, add a custom MCP connector with the server URL above.
2. Choose **Automatic connection**.
3. Click **Connect**. Mammouth registers itself with GitLab and opens the authorization window — sign in and approve access.

## API key

GitLab's MCP server only supports OAuth today — it does not accept a static API key or personal access token as a bearer credential ([GitLab is tracking PAT support as a feature request](https://gitlab.com/gitlab-org/gitlab/-/issues/586184), not yet shipped). Use **Automatic connection** or **Manual connection** instead.

## Manual connection (client ID and secret)

Use this if dynamic client registration is disabled on your GitLab instance, or if you'd rather register one shared OAuth application for your whole team instead of letting every user's Mammouth account register its own.

1. In GitLab, create an OAuth application:
   - **User level**: your avatar → **Edit profile** → **Access** → **Applications** → **Add new application**
   - **Group level**: the group's **Settings** → **Applications**
   - **Instance level** (Self-Managed admins): **Admin Area** → **Applications** → **New application**
2. Set **Redirect URI** to the one shown in Mammouth's Manual connection form.
3. Under **Scopes**, select **mcp**.
4. Clear the **Confidential** checkbox — Mammouth's manual connection sends no client secret, so the application must be registered as a public client.
5. Save the application and copy its **Application ID**.
6. In Mammouth, choose **Manual connection**, paste that ID as the **Client ID**, and leave **Client secret** blank.

::: warning
A single shared OAuth application can't serve MCP clients that use different redirect URIs. If Mammouth's redirect URI ever changes, you'll need to update the application in GitLab.
:::

---

## ➡️ What's Next?

👉 **[Back to Connectors (MCPs)](../../)**
