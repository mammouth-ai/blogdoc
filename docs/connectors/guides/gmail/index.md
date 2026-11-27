# Connect Gmail to Mammouth

## 1. Add the connector

- Open **Connector settings** in Mammouth.
- Click **Add custom MCP**, check the trust box, and continue.
- Enter **Gmail** as the name and `https://gmailmcp.googleapis.com/mcp/v1` as the server URL.
- Select **Manual Connection (Client ID and Secret)**.

## 2. Set up Google Cloud

- Open the [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
- Under **APIs & Services**, enable **Gmail API** and **Gmail MCP API** (`gmailmcp.googleapis.com`).

## 3. Create OAuth credentials

- Go to **APIs & Services → Credentials → Create credentials → OAuth client ID**.
- Choose **Web application** and give it a name, such as *Mammouth Gmail*.
- Add this authorized redirect URI:  
  `https://mammouth.ai/api/mcp/oauth/callback`
- Check **Use this client with an AI agent** (required for Gmail MCP).
- Create the client, then copy its **Client ID** and **Client secret**.

## 4. Connect in Mammouth

- Return to the connector setup and enter the Client ID and Client secret.
- Click **Connect**, then authorize Gmail in the Google window.
- Test it with: “Find the latest email from [name].”

**Keep your client secret private. Enter it only in Mammouth.**

## Other Google services available via MCP

For each service you want to use, enable **both** its product API and MCP API in **[Google Cloud Console](https://console.cloud.google.com/) → APIs & Services**. Use the matching MCP server URL in Mammouth.

| Service | MCP server URL | APIs to enable |
|---|---|---|
| Gmail | `https://gmailmcp.googleapis.com/mcp/v1` | Gmail API (`gmail.googleapis.com`); Gmail MCP API (`gmailmcp.googleapis.com`) |
| Drive | `https://drivemcp.googleapis.com/mcp/v1` | Google Drive API (`drive.googleapis.com`); Drive MCP API (`drivemcp.googleapis.com`) |
| Docs | `https://docsmcp.googleapis.com/mcp/v1` | Google Docs API (`docs.googleapis.com`); Docs MCP API (`docsmcp.googleapis.com`) |
| Sheets | `https://sheetsmcp.googleapis.com/mcp/v1` | Google Sheets API (`sheets.googleapis.com`); Sheets MCP API (`sheetsmcp.googleapis.com`) |
| Slides | `https://slidesmcp.googleapis.com/mcp/v1` | Google Slides API (`slides.googleapis.com`); Slides MCP API (`slidesmcp.googleapis.com`) |
| Calendar | `https://calendarmcp.googleapis.com/mcp/v1` | Google Calendar API (`calendar-json.googleapis.com`); Calendar MCP API (`calendarmcp.googleapis.com`) |
| Chat | `https://chatmcp.googleapis.com/mcp/v1` | Google Chat API (`chat.googleapis.com`); Chat MCP API (`chatmcp.googleapis.com`) |
| Tasks | `https://tasksmcp.googleapis.com/mcp/v1` | Tasks MCP API (`tasksmcp.googleapis.com`) |

**Note:** Tasks does not require a separate product API. Google also lists People API, Classroom, and Universal Search as developer previews; availability may vary. [Google’s setup guide](https://developers.google.com/workspace/guides/configure-mcp-servers).
