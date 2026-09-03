# Connectors (MCPs)

Connectors allow Mammouth to interact with your external tools and services directly from the chat. Powered by the **Model Context Protocol (MCP)**, they let the AI read and act on your data in real time — no copy-pasting required.

---

## 🔌 What is a Connector?

A connector is a bridge between Mammouth and an external service. Once connected, the AI can:

- **Search** your documents, issues, or pages
- **Read** specific files or records
- **Create or update** items (when supported by the connector)

Think of it as giving the AI direct access to your workspace, so it can pull in the context it needs without you having to manually paste information.

---

## ✅ Pre-built Connectors

Mammouth offers 4 pre-built connectors you can activate in one click:

| Connector | What it does |
|---|---|
| **Microsoft 365** | Search and read your Outlook emails, OneDrive files, and more |
| **GitHub** | Search repositories, read issues, browse code and pull requests |
| **Notion** | Search and read your Notion pages and databases |
| **Atlassian** | Search and read your Confluence pages and Jira issues |

No configuration needed — just sign in with your account and the connector is ready to use.

---

## 🔧 How to Activate a Connector

1. Go to your **account settings**: [mammouth.ai/app/account/settings](https://mammouth.ai/app/account/settings)
2. Scroll to the **Connectors** section
3. Click **Connect** on the connector you want to activate
4. Sign in with your external service account
5. You're done! The connector is now available in your chats.

Once activated, Mammouth will automatically use the connector when relevant to your prompt.

---

## 🛠️ Custom MCP Connectors {#custom-mcp}

If the pre-built connectors don't cover your needs, you can set up your own **custom MCP server**. This is useful if you use a tool or service that isn't listed above, or if you want to connect to your own services.

To configure a custom MCP:

1. Go to your **account settings**: [mammouth.ai/app/account/settings](https://mammouth.ai/app/account/settings)
2. Scroll to the **Connectors** section
3. Click the **Custom MCP** tile
4. Tick **I understand and trust this server.** then **Continue**
5. Name your connector and enter your MCP server URL
6. If your server needs authentication, pick how it authenticates: **Automatic connection** (OAuth, recommended), **API key**, or **Manual connection (client ID and secret)** — see below
7. Click **Add Custom MCP**. Your custom connector is now available in your chats.

::: tip
Your server must be publicly accessible: local addresses (`localhost`, `127.0.0.1`) and private IPs are refused. An active subscription is required to add a custom connector. Check the [Model Context Protocol documentation](https://modelcontextprotocol.io/) for more details on setting up your own server.
:::

### Server requirements

Mammouth uses the **Streamable HTTP** transport only and calls `initialize` then `tools/list`.

When you add it, Mammouth calls `tools/list` once. If your server answers, the connector is ready.

If your server answers 401 or 403 and you don't provide an API key, the connector is created pending authorization: pick how to complete it below.

### Automatic connection (recommended)

**Automatic connection** covers most OAuth servers and needs no setup on your end. When you click **Connect**, Mammouth discovers your OAuth endpoints and registers itself as a client on the fly.

Your server must be served over HTTPS, accept **dynamic client registration** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) and accept the user being sent back to the redirect URI Mammouth shows you (`https://mammouth.ai/api/mcp/oauth/callback`).

Mammouth first checks `/.well-known/oauth-protected-resource` on your MCP server. If your authorization server sits on another domain, publish this file: its `resource` field repeats your MCP server URL and `authorization_servers` points at that domain.

If that file isn't published, or doesn't name an authorization server, Mammouth treats your MCP server's own domain as the authorization server and looks for its metadata at `/.well-known/oauth-authorization-server` (falling back to `/.well-known/openid-configuration` if that file is absent).

```json
{
  "issuer": "https://example.com",
  "authorization_endpoint": "https://example.com/oauth/authorize",
  "token_endpoint": "https://example.com/oauth/token",
  "registration_endpoint": "https://example.com/oauth/register",
  "response_types_supported": ["code"]
}
```

If Mammouth finds no `registration_endpoint` — whether no metadata file was found at all, or the one it found doesn't list one — it asks you for a client ID and secret instead — see **Manual connection** below. You don't need to start over.

### API key

If your server authenticates requests with a static key, choose **API key** and paste it in. Mammouth sends it as a bearer token (`Authorization: Bearer <key>`) on every request to your server. A server given an API key must be served over HTTPS.

You can change the key at any time from the connector's settings, including after disconnecting it.

### Manual connection (client ID and secret)

**Manual connection** is for servers that don't support dynamic client registration. Register Mammouth yourself on your server's developer console, then choose **Manual connection (client ID and secret)** and enter the **Client ID** and, if your server requires one, the **Client secret** (leave it blank for a public client). Use the same redirect URI shown in the form when registering Mammouth on your server.

You can edit a manually-registered client's ID and secret at any time from the connector's settings, including after disconnecting it.

### If the connection is refused

When you add the connector:

| Message | Cause |
| --- | --- |
| This server URL is not allowed. | Local address, private IP, credentials in the URL, or a protocol other than `http` / `https` |
| A server given an API key must use HTTPS. | You supplied an API key but the server URL uses `http` |
| The MCP server took too long to respond. | More than 10 seconds to accept the connection or to answer `tools/list` |
| This MCP server returned too much metadata. | More than 100 tools, a schema over 32 KB, or a tool name over 200 characters |
| Choose a different name for this MCP connector. | A name with no alphanumeric character, or one reserved by a built-in connector |
| MCP connector name is already in use. | You already have a connector with this name |
| Paid access required. Check your subscription state in your Account settings. | Your subscription is inactive |
| Your team does not allow personal custom MCP connectors. | Personal connectors have been disabled by your team |
| Too many custom MCP connection attempts. Please try again in a minute. | More than five additions in a minute |
| Could not connect to this MCP server. | The server is unreachable or answered unexpectedly |
| Could not connect to this MCP server. Check the URL and try again. | Default message for any other case, such as a URL with no scheme (`example.com/mcp`) |
| This server refused the API key. | Mammouth tested the key against your server and it was rejected |
| Could not save these credentials. | The client ID or client secret you submitted was rejected |

When you click **Connect**, Mammouth opens a window to your authorization server. If the requirements above are not met, that window never completes and Mammouth reports **Connection cancelled** once you close it. Go back through the requirements one by one.

---

## 💡 Example Use Cases

- **"Find the last email from Alice about the Q3 report"** — Microsoft 365 connector searches your inbox
- **"Summarize the open issues in the frontend repo"** — GitHub connector pulls issue data
- **"What does our product roadmap say about the next release?"** — Notion connector searches your workspace
- **"What's the status of ticket PROJ-1234?"** — Atlassian connector looks up the Jira issue

---

## 📚 Connection Guides

Step-by-step tutorials for connecting specific services as a [custom MCP connector](#custom-mcp):

- **[GitLab](./guides/gitlab/)**

More guides are coming.

---

## ⚠️ Good to Know

- Connectors only access data when you explicitly ask a question that requires it.
- You can disconnect a connector at any time from your account settings.
- For Teams: the **main owner** can configure and deploy connectors for all team members via the **Permissions** page. See [Teams & Business](../teams/).

---

## ➡️ What's Next?

👉 **[Get Started with Mammouth](../introduction-to-mammouth/)**

👉 **[Choose the right AI model](../choosing-the-right-ai-model/)**