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
5. Name your connector, enter your MCP server URL and click **Add Custom MCP**
6. Your custom connector is now available in your chats.

::: tip
Your server must be publicly accessible: local addresses (`localhost`, `127.0.0.1`) and private IPs are refused. An active subscription is required to add a custom connector. Check the [Model Context Protocol documentation](https://modelcontextprotocol.io/) for more details on setting up your own server.
:::

### Server requirements

Mammouth uses the **Streamable HTTP** transport only and calls `initialize` then `tools/list`. Every tool needs an `inputSchema` of type `object`.

When you add it, Mammouth calls `tools/list` once. If your server answers, the connector is ready.

### Protected servers

If your server answers 401 or 403, the connector is created pending authorization. The OAuth flow starts when you click **Connect**.

Your server must then be served over HTTPS, accept **dynamic client registration** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) and accept the user being sent back to `https://mammouth.ai/api/mcp/oauth/callback`.

Mammouth looks for your OAuth addresses at the conventional locations: `/authorize`, `/token` and `/register`.

If they are somewhere else, publish `/.well-known/oauth-authorization-server`. The file must be complete: Mammouth follows it without falling back to the conventional locations.

```json
{
  "issuer": "https://example.com",
  "authorization_endpoint": "https://example.com/oauth/authorize",
  "token_endpoint": "https://example.com/oauth/token",
  "registration_endpoint": "https://example.com/oauth/register",
  "response_types_supported": ["code"]
}
```

If your authorization server sits on another domain, also publish `/.well-known/oauth-protected-resource`. Its `resource` field repeats your MCP server URL and `authorization_servers` points at that domain.

::: warning
**You cannot supply credentials yourself.** Mammouth can only obtain a token through the OAuth flow above and has no field for an API key or for an existing `client_id`.
:::

### If the connection is refused

When you add the connector:

| Message | Cause |
| --- | --- |
| This server URL is not allowed. | Local address, private IP, credentials in the URL, or a protocol other than `http` / `https` |
| The MCP server took too long to respond. | More than 10 seconds to accept the connection or to answer `tools/list` |
| This MCP server returned too much metadata. | More than 100 tools, a schema over 32 KB, or a tool name over 200 characters |
| Choose a different name for this MCP connector. | A name with no alphanumeric character, or one reserved by a built-in connector |
| Could not connect to this MCP server. | The server is unreachable or answered unexpectedly |
| Could not connect to this MCP server. Check the URL and try again. | Default message: a URL with no scheme (`example.com/mcp`), an inactive subscription, personal connectors disabled by your team, a name already used by one of your connectors, or more than five additions in a minute |

When you click **Connect**, Mammouth opens a window to your authorization server. If the requirements above are not met, that window never completes and Mammouth reports **Connection cancelled** once you close it. Go back through the requirements one by one.

---

## 💡 Example Use Cases

- **"Find the last email from Alice about the Q3 report"** — Microsoft 365 connector searches your inbox
- **"Summarize the open issues in the frontend repo"** — GitHub connector pulls issue data
- **"What does our product roadmap say about the next release?"** — Notion connector searches your workspace
- **"What's the status of ticket PROJ-1234?"** — Atlassian connector looks up the Jira issue

---

## ⚠️ Good to Know

- Connectors only access data when you explicitly ask a question that requires it.
- You can disconnect a connector at any time from your account settings.
- For Teams: the **main owner** can configure and deploy connectors for all team members via the **Permissions** page. See [Teams & Business](../teams/).

---

## ➡️ What's Next?

👉 **[Get Started with Mammouth](../introduction-to-mammouth/)**

👉 **[Choose the right AI model](../choosing-the-right-ai-model/)**