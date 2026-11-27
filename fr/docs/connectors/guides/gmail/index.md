# Connecter Gmail à Mammouth

## 1. Ajouter le connecteur

- Ouvrez les **paramètres des connecteurs** dans Mammouth.
- Cliquez sur **Ajouter un MCP personnalisé**, cochez la case de confiance, puis continuez.
- Saisissez **Gmail** comme nom et `https://gmailmcp.googleapis.com/mcp/v1` comme URL du serveur.
- Sélectionnez **Connexion manuelle (ID client et secret)**.

## 2. Configurer Google Cloud

- Ouvrez la [console Google Cloud](https://console.cloud.google.com/) et créez un projet ou sélectionnez-en un.
- Dans **API et services**, activez **Gmail API** et **Gmail MCP API** (`gmailmcp.googleapis.com`).

## 3. Créer les identifiants OAuth

- Accédez à **API et services → Identifiants → Créer des identifiants → ID client OAuth**.
- Choisissez **Application Web** et donnez-lui un nom, par exemple *Mammouth Gmail*.
- Ajoutez cet URI de redirection autorisé :  
  `https://mammouth.ai/api/mcp/oauth/callback`
- Cochez **Utiliser ce client avec un agent IA** (requis pour Gmail MCP).
- Créez le client, puis copiez son **ID client** et son **secret client**.

## 4. Se connecter dans Mammouth

- Revenez à la configuration du connecteur et saisissez l'ID client et le secret client.
- Cliquez sur **Connecter**, puis autorisez Gmail dans la fenêtre Google.
- Testez avec : « Trouve le dernier e-mail de [nom]. »

**Gardez votre secret client privé. Saisissez-le uniquement dans Mammouth.**

## Autres services Google disponibles via MCP

Pour chaque service que vous souhaitez utiliser, activez **à la fois** son API produit et son API MCP dans la **[console Google Cloud](https://console.cloud.google.com/) → API et services**. Utilisez l'URL du serveur MCP correspondante dans Mammouth.

| Service | URL du serveur MCP | API à activer |
|---|---|---|
| Gmail | `https://gmailmcp.googleapis.com/mcp/v1` | Gmail API (`gmail.googleapis.com`) ; Gmail MCP API (`gmailmcp.googleapis.com`) |
| Drive | `https://drivemcp.googleapis.com/mcp/v1` | Google Drive API (`drive.googleapis.com`) ; Drive MCP API (`drivemcp.googleapis.com`) |
| Docs | `https://docsmcp.googleapis.com/mcp/v1` | Google Docs API (`docs.googleapis.com`) ; Docs MCP API (`docsmcp.googleapis.com`) |
| Sheets | `https://sheetsmcp.googleapis.com/mcp/v1` | Google Sheets API (`sheets.googleapis.com`) ; Sheets MCP API (`sheetsmcp.googleapis.com`) |
| Slides | `https://slidesmcp.googleapis.com/mcp/v1` | Google Slides API (`slides.googleapis.com`) ; Slides MCP API (`slidesmcp.googleapis.com`) |
| Calendar | `https://calendarmcp.googleapis.com/mcp/v1` | Google Calendar API (`calendar-json.googleapis.com`) ; Calendar MCP API (`calendarmcp.googleapis.com`) |
| Chat | `https://chatmcp.googleapis.com/mcp/v1` | Google Chat API (`chat.googleapis.com`) ; Chat MCP API (`chatmcp.googleapis.com`) |
| Tasks | `https://tasksmcp.googleapis.com/mcp/v1` | Tasks MCP API (`tasksmcp.googleapis.com`) |

**Remarque :** Tasks ne nécessite pas d'API produit distincte. Google répertorie également People API, Classroom et Universal Search en tant qu'aperçus développeur ; leur disponibilité peut varier. [Guide de configuration de Google](https://developers.google.com/workspace/guides/configure-mcp-servers).
