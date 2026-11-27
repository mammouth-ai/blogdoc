# Connettori (MCP)

I connettori permettono a Mammouth di interagire con i tuoi strumenti e servizi esterni direttamente dalla chat. Basati sul **Model Context Protocol (MCP)**, consentono all'IA di leggere e utilizzare i tuoi dati in tempo reale, senza doverli copiare e incollare.

---

## ✅ Connettori preconfigurati

Mammouth offre 4 connettori preconfigurati, attivabili con un clic dalle [impostazioni dei connettori](https://mammouth.ai/app/account/settings/connectors):

| Connettore | Funzione |
|---|---|
| **Microsoft 365** | Cerca e legge email di Outlook, file di OneDrive e altro |
| **GitHub** | Cerca repository, legge issue e consulta codice e pull request |
| **Notion** | Cerca e legge pagine e database di Notion |
| **Atlassian** | Cerca e legge pagine Confluence e issue Jira |

Non è necessaria alcuna configurazione: accedi al tuo account e il connettore è pronto.

---

## 🛠️ Connettori MCP personalizzati {#custom-mcp}

Se i connettori preconfigurati non bastano, puoi configurare il tuo **server MCP personalizzato**. È utile se utilizzi uno strumento o un servizio non elencato sopra o se vuoi collegare i tuoi servizi.

::: tip Ti serve aiuto per collegare un servizio?
Chiedi al nostro [Assistente MCP](https://mammouth.ai/app/assistants/join/b7e4fe25-aa1e-4fa3-9548-31ddabdad524) una guida passo passo per configurare il connettore.
:::

Per configurare un MCP personalizzato:

1. Seleziona **Aggiungi MCP personalizzato** dalla **pagina dei connettori**: [mammouth.ai/app/account/settings/connectors](https://mammouth.ai/app/account/settings/connectors)
2. Attiva **Comprendo e mi fido di questo server.**, quindi fai clic su **Continua**
3. Assegna un nome al connettore e inserisci l'URL del server MCP
4. Se il server richiede l'autenticazione, scegli un metodo: **Connessione automatica** (OAuth, consigliata), **Chiave API** oppure **Connessione manuale (ID client e secret)** — vedi sotto
5. Una volta convalidata la connessione, il connettore sarà disponibile nelle tue chat.

::: info Trovare l'URL (passaggio 3)
Consulta la documentazione MCP ufficiale dello strumento o del servizio che vuoi collegare. Ad esempio, cerca «MCP» insieme al nome dello strumento e copia l'URL indicato nella documentazione. Di solito è riportato esplicitamente, ad esempio `https://mcp.stripe.com` o `https://mapstools.googleapis.com/mcp`.
:::

::: tip
Il server deve essere accessibile pubblicamente: gli indirizzi locali (`localhost`, `127.0.0.1`) e gli IP privati vengono rifiutati. Per aggiungere un connettore personalizzato è necessario un abbonamento attivo. Consulta la [documentazione del Model Context Protocol](https://modelcontextprotocol.io/) per ulteriori informazioni sulla configurazione del tuo server.
:::

### Requisiti del server

Mammouth utilizza esclusivamente il trasporto **Streamable HTTP** e chiama prima `initialize`, poi `tools/list`.

Quando aggiungi il connettore, Mammouth chiama `tools/list` una volta. Se il server risponde, il connettore è pronto.

Se il server risponde con 401 o 403 e non fornisci una chiave API, il connettore viene creato in attesa di autorizzazione: scegli qui sotto come completarla.

### Connessione automatica (consigliata)

La **connessione automatica** funziona con la maggior parte dei server OAuth e non richiede configurazioni da parte tua. Quando fai clic su **Connetti**, Mammouth individua i tuoi endpoint OAuth e si registra automaticamente come client.

Il server deve essere raggiungibile tramite HTTPS, supportare la **registrazione dinamica dei client** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) e consentire di reindirizzare l'utente all'URI visualizzato da Mammouth (`https://mammouth.ai/api/mcp/oauth/callback`).

Per prima cosa Mammouth controlla `/.well-known/oauth-protected-resource` sul server MCP. Se il server di autorizzazione si trova su un altro dominio, pubblica questo file: il campo `resource` deve contenere di nuovo l'URL del server MCP, mentre `authorization_servers` rimanda a quel dominio.

Se il file non è pubblicato o non specifica un server di autorizzazione, Mammouth considera il dominio del server MCP come server di autorizzazione e cerca i relativi metadati in `/.well-known/oauth-authorization-server` (oppure, se il primo file non esiste, in `/.well-known/openid-configuration`).

```json
{
  "issuer": "https://example.com",
  "authorization_endpoint": "https://example.com/oauth/authorize",
  "token_endpoint": "https://example.com/oauth/token",
  "registration_endpoint": "https://example.com/oauth/register",
  "response_types_supported": ["code"]
}
```

Se Mammouth non trova un `registration_endpoint` — perché non è stato trovato alcun file di metadati o perché quello trovato non contiene tale endpoint — ti verranno richiesti un ID client e un secret. Consulta la sezione **Connessione manuale** qui sotto. Non dovrai ricominciare da capo.

### Chiave API

Se il server autentica le richieste con una chiave statica, seleziona **Chiave API** e inseriscila. Mammouth la invia al server a ogni richiesta come token Bearer (`Authorization: Bearer <key>`). Un server a cui viene fornita una chiave API deve essere raggiungibile tramite HTTPS.

Puoi modificare la chiave in qualsiasi momento nelle impostazioni del connettore, anche dopo averlo scollegato.

### Connessione manuale (ID client e secret)

La **connessione manuale** è pensata per i server che non supportano la registrazione dinamica dei client. Registra Mammouth nella console per sviluppatori del server, quindi seleziona **Connessione manuale (ID client e secret)** e inserisci il **Client ID** e, se richiesto dal server, il **Client Secret** (lascia il campo vuoto per un client pubblico). Usa l'URI di reindirizzamento mostrato nel modulo quando registri Mammouth sul server.

Puoi modificare in qualsiasi momento l'ID e il secret di un client registrato manualmente nelle impostazioni del connettore, anche dopo averlo scollegato.

### Se la connessione viene rifiutata

Quando aggiungi il connettore:

| Messaggio | Causa |
| --- | --- |
| This server URL is not allowed. | Indirizzo locale, IP privato, credenziali nell'URL o protocollo diverso da `http` / `https` |
| A server given an API key must use HTTPS. | Hai indicato una chiave API, ma l'URL del server usa `http` |
| The MCP server took too long to respond. | Oltre 10 secondi per accettare la connessione o rispondere a `tools/list` |
| This MCP server returned too much metadata. | Più di 100 strumenti, uno schema superiore a 32 KB o un nome di strumento superiore a 200 caratteri |
| Choose a different name for this MCP connector. | Il nome non contiene caratteri alfanumerici oppure è riservato a un connettore integrato |
| MCP connector name is already in use. | Esiste già un connettore con quel nome |
| Paid access required. Check your subscription state in your Account settings. | L'abbonamento non è attivo |
| Your team does not allow personal custom MCP connectors. | Il team ha disattivato i connettori MCP personalizzati personali |
| Too many custom MCP connection attempts. Please try again in a minute. | Più di cinque tentativi di aggiunta in un minuto |
| Could not connect to this MCP server. | Il server non è raggiungibile o ha risposto in modo inatteso |
| Could not connect to this MCP server. Check the URL and try again. | Messaggio predefinito per qualsiasi altro caso, ad esempio un URL senza schema (`example.com/mcp`) |
| This server refused the API key. | Mammouth ha verificato la chiave sul server, che l'ha rifiutata |
| Could not save these credentials. | L'ID client o il secret inviato è stato rifiutato |

Quando fai clic su **Connetti**, Mammouth apre una finestra sul server di autorizzazione. Se i requisiti indicati sopra non sono soddisfatti, il flusso non si completa; quando chiudi la finestra, Mammouth segnala **Connection cancelled**. Verifica i requisiti uno per uno.

---

## 💡 Esempi di utilizzo

- **«Trova l'ultima email di Alice sul rapporto Q3»** — Il connettore Microsoft 365 cerca nella posta in arrivo
- **«Riassumi le issue aperte nel repository frontend»** — Il connettore GitHub recupera i dati delle issue
- **«Cosa dice la nostra roadmap di prodotto sulla prossima versione?»** — Il connettore Notion cerca nel tuo spazio di lavoro
- **«Qual è lo stato del ticket PROJ-1234?»** — Il connettore Atlassian recupera l'issue Jira

---

## 📚 Guide di connessione

Guide dettagliate per collegare servizi specifici come [connettori MCP personalizzati](#custom-mcp):

- **[GitLab](./guides/gitlab/)**
- **[Meta Ads](./guides/meta-ads/)**

Altre guide saranno disponibili in seguito.

---

## ⚠️ Da sapere

- I connettori accedono ai dati solo quando poni esplicitamente una domanda che li richiede.
- Puoi scollegare un connettore in qualsiasi momento dalle impostazioni del tuo account.
- Per i team, il **proprietario principale** può configurare e distribuire i connettori a tutti i membri dalla pagina **Autorizzazioni**. Consulta [Team e aziende](../teams/).

---

## ➡️ E adesso?

👉 **[Per iniziare con Mammouth](../introduction-to-mammouth/)**

👉 **[Scegliere il modello di IA giusto](../choosing-the-right-ai-model/)**
