# Collegare GitLab (MCP)

GitLab include un server MCP ufficiale integrato direttamente nella tua istanza: non serve alcun bridge di terze parti. Questa guida spiega come collegarlo a Mammouth come [connettore MCP personalizzato](../../#custom-mcp), usando uno dei tre metodi di autenticazione.

::: tip Prima di iniziare
In GitLab ti occorrono:
- GitLab 18.6 o versione successiva (il server MCP è in beta ed è disponibile nel piano Free)
- GitLab Duo impostato su **Always on** oppure **On by default**
- Le funzionalità beta e sperimentali abilitate: a livello di istanza per Self-Managed/Dedicated oppure per il gruppo di primo livello su GitLab.com
- L'accesso al server MCP consentito: a livello di istanza per Self-Managed/Dedicated oppure per il gruppo di primo livello su GitLab.com

Consulta la [documentazione del server MCP di GitLab](https://docs.gitlab.com/user/model_context_protocol/mcp_server/) per scoprire come abilitare queste opzioni.
:::

## URL del server

Per Self-Managed o Dedicated usa `https://<your-gitlab-instance>/api/v4/mcp`; per GitLab.com usa `https://gitlab.com/api/v4/mcp`. Lo stesso URL vale per tutti e tre i metodi di connessione qui descritti.

---

## Connessione automatica (OAuth)

Il server MCP di GitLab supporta la **registrazione dinamica OAuth 2.0**. Per questo la connessione automatica funziona senza configurazioni da parte tua su GitLab.

1. Aggiungi in Mammouth un connettore MCP personalizzato usando l'URL del server indicato sopra.
2. Seleziona **Connessione automatica**.
3. Fai clic su **Connetti**. Mammouth si registra su GitLab e apre la finestra di autorizzazione: accedi e approva l'accesso.

## Chiave API

Al momento il server MCP di GitLab supporta solo OAuth: non accetta una chiave API statica né un token di accesso personale come credenziali Bearer ([GitLab sta valutando il supporto dei PAT come richiesta di funzionalità](https://gitlab.com/gitlab-org/gitlab/-/issues/586184), ma non è ancora stato implementato). Usa **Connessione automatica** o **Connessione manuale**.

## Connessione manuale (ID client e secret)

Richiede GitLab 19.3 o versione successiva: nelle versioni precedenti lo scope **mcp** non compare nel modulo dell'applicazione OAuth.

Usa questo metodo se la registrazione dinamica del client è disabilitata sulla tua istanza GitLab oppure se preferisci registrare un'applicazione OAuth condivisa per tutto il team, invece di lasciare che ogni account Mammouth ne registri una propria.

1. Crea un'applicazione OAuth in GitLab:
   - **A livello utente**: avatar → **Edit profile** → **Access** → **Applications** → **Add new application**
   - **A livello di gruppo**: **Settings** → **Applications** del gruppo
   - **A livello di istanza** (amministratori Self-Managed): **Admin Area** → **Applications** → **New application**
2. Imposta **Redirect URI** sul valore mostrato nel modulo di connessione manuale di Mammouth.
3. In **Scopes**, seleziona **mcp**.
4. Deseleziona **Confidential**: Mammouth non invia un secret client con la connessione manuale, quindi l'applicazione deve essere registrata come client pubblico.
5. Salva l'applicazione e copia il relativo **Application ID**.
6. In Mammouth, seleziona **Connessione manuale**, incolla l'ID in **Client ID** e lascia vuoto **Client Secret**.

::: warning
Una singola applicazione OAuth condivisa non può servire client MCP che usano URI di reindirizzamento differenti. Se l'URI di reindirizzamento di Mammouth dovesse cambiare, aggiorna l'applicazione in GitLab.
:::

---

## ➡️ E adesso?

👉 **[Torna ai connettori (MCP)](../../)**
