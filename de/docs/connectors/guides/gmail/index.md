# Gmail mit Mammouth verbinden

## 1. Konnektor hinzufügen

- Öffne die **Konnektor-Einstellungen** in Mammouth.
- Klicke auf **Benutzerdefinierten MCP hinzufügen**, bestätige das Kontrollkästchen für Vertrauen und fahre fort.
- Gib **Gmail** als Namen und `https://gmailmcp.googleapis.com/mcp/v1` als Server-URL ein.
- Wähle **Manuelle Verbindung (Client-ID und Secret)**.

## 2. Google Cloud einrichten

- Öffne die Google Cloud Console und erstelle ein Projekt oder wähle ein bestehendes aus.
- Aktiviere unter **APIs & Dienste** die **Gmail API** und die **Gmail MCP API** (`gmailmcp.googleapis.com`).

## 3. OAuth-Anmeldedaten erstellen

- Gehe zu **APIs & Dienste → Anmeldedaten → Anmeldedaten erstellen → OAuth-Client-ID**.
- Wähle **Webanwendung** und gib einen Namen ein, zum Beispiel *Mammouth Gmail*.
- Füge diese autorisierte Weiterleitungs-URI hinzu:  
  `https://mammouth.ai/api/mcp/oauth/callback`
- Aktiviere **Diesen Client mit einem KI-Agenten verwenden** (für Gmail MCP erforderlich).
- Erstelle den Client und kopiere anschließend die **Client-ID** und das **Client-Secret**.

## 4. Mit Mammouth verbinden

- Kehre zur Konnektor-Einrichtung zurück und gib die Client-ID und das Client-Secret ein.
- Klicke auf **Verbinden** und autorisiere Gmail im Google-Fenster.
- Teste die Verbindung mit: „Finde die neueste E-Mail von [Name].“

**Halte dein Client-Secret geheim. Gib es nur in Mammouth ein.**

## Weitere Google-Dienste, die über MCP verfügbar sind

Aktiviere für jeden gewünschten Dienst **sowohl** die Produkt-API als auch die MCP-API in der **Google Cloud Console → APIs & Dienste**. Verwende in Mammouth die passende MCP-Server-URL.

| Dienst | MCP-Server-URL | Zu aktivierende APIs |
|---|---|---|
| Gmail | `https://gmailmcp.googleapis.com/mcp/v1` | Gmail API (`gmail.googleapis.com`); Gmail MCP API (`gmailmcp.googleapis.com`) |
| Drive | `https://drivemcp.googleapis.com/mcp/v1` | Google Drive API (`drive.googleapis.com`); Drive MCP API (`drivemcp.googleapis.com`) |
| Docs | `https://docsmcp.googleapis.com/mcp/v1` | Google Docs API (`docs.googleapis.com`); Docs MCP API (`docsmcp.googleapis.com`) |
| Sheets | `https://sheetsmcp.googleapis.com/mcp/v1` | Google Sheets API (`sheets.googleapis.com`); Sheets MCP API (`sheetsmcp.googleapis.com`) |
| Slides | `https://slidesmcp.googleapis.com/mcp/v1` | Google Slides API (`slides.googleapis.com`); Slides MCP API (`slidesmcp.googleapis.com`) |
| Calendar | `https://calendarmcp.googleapis.com/mcp/v1` | Google Calendar API (`calendar-json.googleapis.com`); Calendar MCP API (`calendarmcp.googleapis.com`) |
| Chat | `https://chatmcp.googleapis.com/mcp/v1` | Google Chat API (`chat.googleapis.com`); Chat MCP API (`chatmcp.googleapis.com`) |
| Tasks | `https://tasksmcp.googleapis.com/mcp/v1` | Tasks MCP API (`tasksmcp.googleapis.com`) |

**Hinweis:** Für Tasks ist keine separate Produkt-API erforderlich. Google führt außerdem People API, Classroom und Universal Search als Entwicklervorschauen auf; die Verfügbarkeit kann variieren. [Googles Einrichtungsanleitung](https://developers.google.com/workspace/guides/configure-mcp-servers).
