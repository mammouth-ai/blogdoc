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

## 🛠️ Custom MCP Connectors

If the pre-built connectors don't cover your needs, you can set up your own **custom MCP server**. This is useful if you use a tool or service that isn't listed above, or if you want to connect to an internal API.

To configure a custom MCP:

1. Go to your **account settings**: [mammouth.ai/app/account/settings](https://mammouth.ai/app/account/settings)
2. Scroll to the **Connectors** section
3. Click **Add custom MCP**
4. Enter your MCP server URL and configuration
5. Save — your custom connector is now available in your chats.

::: tip
MCP servers must be accessible via a public URL or a local proxy. Check the [Model Context Protocol documentation](https://modelcontextprotocol.io/) for more details on setting up your own server.
:::

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
- For Teams: **Owners** can configure and deploy connectors for all team members via the **Permissions** page. See [Teams & Business](../teams/).

---

## ➡️ What's Next?

👉 **[Get Started with Mammouth](../introduction-to-mammouth/)**

👉 **[Choose the right AI model](../choosing-the-right-ai-model/)**