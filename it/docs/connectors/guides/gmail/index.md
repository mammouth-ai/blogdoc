# Collegare Gmail a Mammouth

## 1. Aggiungere il connettore

- Apri le **impostazioni dei connettori** in Mammouth.
- Fai clic su **Aggiungi MCP personalizzato**, seleziona la casella di conferma della fiducia e continua.
- Inserisci **Gmail** come nome e `https://gmailmcp.googleapis.com/mcp/v1` come URL del server.
- Seleziona **Connessione manuale (ID client e secret)**.

## 2. Configurare Google Cloud

- Apri la Google Cloud Console e crea un progetto oppure selezionane uno.
- In **API e servizi**, abilita **Gmail API** e **Gmail MCP API** (`gmailmcp.googleapis.com`).

## 3. Creare le credenziali OAuth

- Vai a **API e servizi → Credenziali → Crea credenziali → ID client OAuth**.
- Scegli **Applicazione web** e assegnale un nome, ad esempio *Mammouth Gmail*.
- Aggiungi questo URI di reindirizzamento autorizzato:  
  `https://mammouth.ai/api/mcp/oauth/callback`
- Seleziona **Usa questo client con un agente IA** (necessario per Gmail MCP).
- Crea il client, quindi copia il relativo **ID client** e **Client secret**.

## 4. Connettersi a Mammouth

- Torna alla configurazione del connettore e inserisci l'ID client e il Client secret.
- Fai clic su **Connetti**, quindi autorizza Gmail nella finestra di Google.
- Prova con: «Trova l'ultima email di [nome]».

**Mantieni privato il Client secret. Inseriscilo solo in Mammouth.**

## Altri servizi Google disponibili tramite MCP

Per ogni servizio che vuoi usare, abilita **sia** la relativa API del prodotto sia l'API MCP in **Google Cloud Console → API e servizi**. Usa in Mammouth l'URL del server MCP corrispondente.

| Servizio | URL del server MCP | API da abilitare |
|---|---|---|
| Gmail | `https://gmailmcp.googleapis.com/mcp/v1` | Gmail API (`gmail.googleapis.com`); Gmail MCP API (`gmailmcp.googleapis.com`) |
| Drive | `https://drivemcp.googleapis.com/mcp/v1` | Google Drive API (`drive.googleapis.com`); Drive MCP API (`drivemcp.googleapis.com`) |
| Docs | `https://docsmcp.googleapis.com/mcp/v1` | Google Docs API (`docs.googleapis.com`); Docs MCP API (`docsmcp.googleapis.com`) |
| Sheets | `https://sheetsmcp.googleapis.com/mcp/v1` | Google Sheets API (`sheets.googleapis.com`); Sheets MCP API (`sheetsmcp.googleapis.com`) |
| Slides | `https://slidesmcp.googleapis.com/mcp/v1` | Google Slides API (`slides.googleapis.com`); Slides MCP API (`slidesmcp.googleapis.com`) |
| Calendar | `https://calendarmcp.googleapis.com/mcp/v1` | Google Calendar API (`calendar-json.googleapis.com`); Calendar MCP API (`calendarmcp.googleapis.com`) |
| Chat | `https://chatmcp.googleapis.com/mcp/v1` | Google Chat API (`chat.googleapis.com`); Chat MCP API (`chatmcp.googleapis.com`) |
| Tasks | `https://tasksmcp.googleapis.com/mcp/v1` | Tasks MCP API (`tasksmcp.googleapis.com`) |

**Nota:** Tasks non richiede un'API del prodotto separata. Google elenca anche People API, Classroom e Universal Search come anteprime per sviluppatori; la disponibilità può variare. [Guida alla configurazione di Google](https://developers.google.com/workspace/guides/configure-mcp-servers).
