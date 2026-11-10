# Connettori (MCP)

I connettori permettono a Mammouth di interagire con i tuoi strumenti e servizi esterni direttamente dalla chat. Si basano sul **Model Context Protocol (MCP)** e consentono all'IA di leggere e utilizzare i tuoi dati in tempo reale, senza doverli copiare e incollare.

---

## 🔌 Che cos'è un connettore?

Un connettore collega Mammouth a un servizio esterno. Una volta stabilita la connessione, l'IA può:

- **Cercare documenti, ticket o pagine**
- **Leggere file o record specifici**
- **Creare o aggiornare elementi**, se supportato dal connettore

È come dare all'IA accesso diretto al tuo spazio di lavoro, così può recuperare il contesto necessario senza che tu debba inserire le informazioni manualmente.

---

## ✅ Connettori preconfigurati

Mammouth offre quattro connettori preconfigurati, attivabili con un clic:

| Connettore | Funzione |
|---|---|
| **Microsoft 365** | Cerca e legge email di Outlook, file di OneDrive e altro |
| **GitHub** | Cerca repository, legge issue e consulta codice e pull request |
| **Notion** | Cerca e legge pagine e database di Notion |
| **Atlassian** | Cerca e legge pagine Confluence e issue Jira |

Non è necessaria alcuna configurazione: accedi al tuo account e il connettore è pronto.

---

## 🔧 Attivare un connettore

1. Apri le [impostazioni dei connettori](https://mammouth.ai/app/account/settings/connectors).
2. Fai clic su **Connetti** accanto al connettore desiderato.
3. Accedi al servizio esterno.
4. Fatto! Il connettore è ora disponibile nelle tue chat.

Dopo l'attivazione, Mammouth utilizza automaticamente un connettore quando è pertinente al prompt.

---

## 🛠️ Connettori MCP personalizzati {#custom-mcp}

Se i connettori preconfigurati non bastano, puoi configurare il tuo **server MCP**. È utile per collegare strumenti o servizi non elencati sopra, oppure i tuoi servizi.

Per configurare un MCP personalizzato:

1. Apri le [impostazioni dei connettori](https://mammouth.ai/app/account/settings/connectors).
2. Fai clic sul riquadro **MCP personalizzato**.
3. Attiva **Comprendo e mi fido di questo server.**, quindi fai clic su **Continua**.
4. Assegna un nome al connettore e inserisci l'URL del server MCP.
5. Se il server richiede l'autenticazione, scegli un metodo: **Connessione automatica** (OAuth, consigliata), **Chiave API** oppure **Connessione manuale (ID client e secret)**. Vedi sotto.
6. Fai clic su **Aggiungi MCP personalizzato**. Il connettore è ora disponibile nelle tue chat.

::: tip
Il server deve essere accessibile pubblicamente: gli indirizzi locali (`localhost`, `127.0.0.1`) e gli IP privati vengono rifiutati. Per aggiungere un connettore personalizzato è necessario un abbonamento attivo. Consulta la [documentazione del Model Context Protocol](https://modelcontextprotocol.io/) per ulteriori informazioni sulla configurazione del server.
:::

### Requisiti del server

Mammouth utilizza esclusivamente il trasporto **Streamable HTTP** e chiama `initialize`, seguito da `tools/list`.

Durante l'aggiunta, Mammouth chiama `tools/list` una volta. Se il server risponde, il connettore è pronto.

Se il server risponde con 401 o 403 e non fornisci una chiave API, il connettore viene creato con l'autorizzazione in sospeso. Puoi scegliere qui sotto come completare l'autorizzazione.

### Connessione automatica (consigliata)

La **connessione automatica** funziona con la maggior parte dei server OAuth e non richiede configurazioni da parte tua. Quando fai clic su **Connetti**, Mammouth individua i tuoi endpoint OAuth e si registra automaticamente come client.

Il server deve essere raggiungibile tramite HTTPS, supportare la **registrazione dinamica dei client** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) e consentire di reindirizzare l'utente all'URI visualizzato da Mammouth (`https://mammouth.ai/api/mcp/oauth/callback`).

Per prima cosa Mammouth controlla `/.well-known/oauth-protected-resource` sul server MCP. Se il server di autorizzazione si trova su un altro dominio, pubblica questo file: il campo `resource` deve contenere di nuovo l'URL del server MCP, mentre `authorization_servers` rimanda all'altro dominio.

Se il file non è pubblicato o non specifica un server di autorizzazione, Mammouth considera il dominio del server MCP come server di autorizzazione e cerca i relativi metadati in `/.well-known/oauth-authorization-server` (oppure, se il file non esiste, in `/.well-known/openid-configuration`).

```json
{
  "issuer": "https://example.com",
  "authorization_endpoint": "https://example.com/oauth/authorize",
  "token_endpoint": "https://example.com/oauth/token",
  "registration_endpoint": "https://example.com/oauth/register",
  "response_types_supported": ["code"]
}
```

Se Mammouth non trova un `registration_endpoint` — perché non è stato trovato alcun file di metadati o perché il file non contiene tale endpoint — ti verranno richiesti un ID client e un secret. Consulta la sezione **Connessione manuale** qui sotto. Non dovrai ricominciare da capo.

### Chiave API

Se il server autentica le richieste con una chiave statica, seleziona **Chiave API** e inseriscila. Mammouth la invierà al server a ogni richiesta come token Bearer (`Authorization: Bearer <key>`). Un server configurato con una chiave API deve essere raggiungibile tramite HTTPS.

Puoi modificare la chiave in qualsiasi momento nelle impostazioni del connettore, anche dopo averlo scollegato.

### Connessione manuale (ID client e secret)

La **connessione manuale** è pensata per i server che non supportano la registrazione dinamica dei client. Registra Mammouth nella console per sviluppatori del server. Seleziona quindi **Connessione manuale (ID client e secret)** e inserisci **Client ID** e, se richiesto, **Client Secret** (per un client pubblico lascia il campo vuoto). Usa durante la registrazione l'URI di reindirizzamento mostrato nel modulo.

Puoi modificare in qualsiasi momento l'ID e il secret del client registrato manualmente nelle impostazioni del connettore, anche dopo averlo scollegato.

### Se la connessione viene rifiutata

Quando aggiungi il connettore, potrebbero comparire i seguenti messaggi:

| Messaggio | Causa |
| --- | --- |
| URL del server non consentito. | Indirizzo locale, IP privato, credenziali nell'URL o protocollo diverso da `http` / `https` |
| Un server con chiave API deve usare HTTPS. | Hai indicato una chiave API, ma l'URL del server usa `http` |
| Il server MCP ha impiegato troppo tempo a rispondere. | Oltre 10 secondi per accettare la connessione o rispondere a `tools/list` |
| Il server MCP ha restituito troppi metadati. | Più di 100 strumenti, uno schema superiore a 32 KB o un nome di strumento superiore a 200 caratteri |
| Scegli un altro nome per questo connettore MCP. | Il nome non contiene caratteri alfanumerici oppure è riservato a un connettore integrato |
| Il nome del connettore MCP è già in uso. | Esiste già un connettore con quel nome |
| È necessario un accesso a pagamento. Verifica lo stato dell'abbonamento nelle impostazioni dell'account. | L'abbonamento non è attivo |
| Il tuo team non consente connettori MCP personalizzati personali. | Il team ha disattivato i connettori personali |
| Troppi tentativi di connessione a un MCP personalizzato. Riprova tra un minuto. | Più di cinque tentativi di aggiunta in un minuto |
| Impossibile connettersi al server MCP. | Il server non è raggiungibile o ha risposto in modo inatteso |
| Impossibile connettersi a questo server MCP. Verifica l'URL e riprova. | Messaggio predefinito per gli altri casi, ad esempio URL privo di schema (`example.com/mcp`) |
| Il server ha rifiutato la chiave API. | Mammouth ha verificato la chiave sul server, che l'ha rifiutata |
| Impossibile salvare queste credenziali. | L'ID client o il secret fornito è stato rifiutato |

Quando fai clic su **Connetti**, Mammouth apre una finestra sul server di autorizzazione. Se i requisiti indicati sopra non sono soddisfatti, il flusso non si completa; chiudendo la finestra, Mammouth segnalerà **Connessione annullata**. Verifica i requisiti uno per uno.

---

## 💡 Esempi di utilizzo

- **«Trova l'ultima email di Alice sul rapporto Q3»**: il connettore Microsoft 365 cerca nella posta in arrivo.
- **«Riassumi le issue aperte nel repository frontend»**: il connettore GitHub recupera i dati delle issue.
- **«Cosa dice la nostra roadmap di prodotto sulla prossima versione?»**: il connettore Notion cerca nel tuo spazio di lavoro.
- **«Qual è lo stato del ticket PROJ-1234?»**: il connettore Atlassian recupera l'issue Jira.

---

## 📚 Guide di connessione

Guide dettagliate per collegare servizi specifici come [connettori MCP personalizzati](#custom-mcp):

- **[GitLab](/it/docs/connectors/guides/gitlab/)**
- **[Meta Ads](/it/docs/connectors/guides/meta-ads/)**

Altre guide saranno disponibili in seguito.

---

## ⚠️ Da sapere

- I connettori accedono ai dati solo quando chiedi esplicitamente qualcosa che li richiede.
- Puoi scollegare un connettore in qualsiasi momento dalle impostazioni dell'account.
- Per i team, il **proprietario principale** può configurare e distribuire i connettori a tutti i membri dalla pagina **Autorizzazioni**. Consulta [Team e aziende](/it/docs/teams/).

---

## ➡️ E adesso?

👉 **[Per iniziare con Mammouth](/it/docs/introduction-to-mammouth/)**

👉 **[Scegliere il modello di IA giusto](/it/docs/choosing-the-right-ai-model/)**
