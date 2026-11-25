# Collegare Meta Ads (MCP)

Meta offre un server MCP ufficiale per Meta Ads: Mammouth può leggere le prestazioni delle tue campagne e, se lo autorizzi, creare e gestire campagne, gruppi di inserzioni e inserzioni. Questa guida spiega come collegarlo a Mammouth come [connettore MCP personalizzato](../../#custom-mcp).

::: tip Prima di iniziare
Ti occorrono:
- Un account Facebook con accesso agli account pubblicitari che vuoi utilizzare
- Un account [Meta for Developers](https://developers.facebook.com/) (gratuito; accedi con lo stesso account Facebook)
:::

## URL del server

Usa esattamente `https://mcp.facebook.com/ads`: non aggiungere `/mcp`, altrimenti Meta segnala che il server non esiste.

---

## Connessione automatica (OAuth)

Non disponibile. Meta consente la registrazione automatica solo ai client MCP che ha approvato individualmente (Claude, ChatGPT, Cursor, Codex…). Mammouth non è ancora nell'elenco. Se provi a collegarti, riceverai l'errore `Dynamic registration is not available for this client`. Usa invece la **connessione manuale** descritta sotto.

## Connessione manuale (ID client) – consigliata

Crea una tua app Meta una sola volta, quindi accedi con Facebook. In seguito Mammouth rinnoverà automaticamente l'accesso.

### 1. Crea un'app Meta

1. Vai su [developers.facebook.com/apps](https://developers.facebook.com/apps) e fai clic su **Create App**.
2. Assegna un nome all'app (ad esempio `Mammouth Meta Ads`) e prosegui.
3. Nella sezione **Use cases**, seleziona **Ads and monetization** → **Create & manage ads with ads MCP server**.
4. Nella sezione **Business**, scegli il portfolio aziendale a cui appartengono i tuoi account pubblicitari. Se gli account non sono gestiti tramite un portfolio aziendale, seleziona **I don't want to connect a business portfolio yet**: potrai aggiungerne uno in seguito.
5. Completa la procedura guidata per creare l'app.

::: info
Il caso d'uso Ads MCP aggiunge anche **Facebook Login for Business** all'app: lo configurerai al passaggio 3.
:::

### 2. Verifica le autorizzazioni {#permissions}

Nell'app, apri **Use cases**, fai clic su **Customize** in corrispondenza del caso d'uso del server Ads MCP, poi apri la scheda **Permissions and features**. Verifica che siano state aggiunte le seguenti autorizzazioni:

- `ads_mcp_management` (obbligatoria)
- `ads_read` e `ads_management`
- `business_management`, `catalog_management`
- `pages_show_list`, `pages_manage_ads`
- `instagram_basic`, `instagram_branded_content_ads_brand`

Mammouth richiede tutte le autorizzazioni elencate da Meta per il suo server MCP. Se ne manca una, la finestra di accesso Facebook potrebbe non funzionare.

L'**Advanced Access** serve solo se gestisci inserzioni per conto di altre aziende (agenzie, partner). Richiede la revisione dell'app da parte di Meta. Per i tuoi account pubblicitari è sufficiente l'accesso standard.

### 3. Aggiungi l'URI di reindirizzamento di Mammouth

1. In Mammouth, aggiungi un connettore MCP personalizzato usando l'URL del server indicato sopra e seleziona **Connessione manuale**.
2. Copia l'**URI di reindirizzamento** mostrato nel modulo. Lascia il modulo aperto.
3. Nell'app Meta, apri **Facebook Login for Business** → **Settings**.
4. Abilita **Client OAuth login** e **Web OAuth login**.
5. Incolla l'URI di reindirizzamento, senza modificarlo, in **Valid OAuth Redirect URIs** e fai clic su **Save Changes**.

### 4. Collegati a Mammouth

1. Nell'app Meta, apri **App settings** → **Basic** e copia l'**App ID**.
2. Incollalo in Mammouth come **Client ID** nel modulo di connessione manuale e **lascia vuoto Client Secret**.
3. Fai clic su **Connetti**, accedi a Facebook, accetta tutte le autorizzazioni richieste e seleziona gli account pubblicitari che Mammouth può utilizzare.

::: warning Non inserire l'App Secret
La tua app Meta dispone di un **App Secret**, ma il server MCP di Meta non lo usa: l'autenticazione si basa su PKCE. Se compili il campo Client Secret, Mammouth lo rifiuterà con `This server does not support the submitted client authentication method`.
:::

::: info Modalità di sviluppo
Finché l'app Meta è in modalità **Development**, possono collegarsi solo le persone con un ruolo nell'app (amministratore, sviluppatore, tester). Per consentire ai membri del team di usare l'app, aggiungili in **App roles** → **Roles**.
:::

## Chiave API (token di accesso)

Meta accetta anche un token di accesso inviato come token Bearer. La configurazione è più rapida, ma dovrai sostituire il token quando scade.

1. Genera un token in uno dei seguenti modi:
   - Un **User Access Token** con [Graph API Explorer](https://developers.facebook.com/tools/explorer/), includendo le autorizzazioni elencate sopra. Scade dopo circa un'ora o dopo circa 60 giorni se lo scambi con un token a lunga durata.
   - Un **System User Access Token** dal tuo portfolio aziendale ([guida di Meta](https://developers.facebook.com/docs/business-management-apis/system-users)). Funzionano solo i System User con il ruolo **Employee**: i token degli amministratori System User vengono rifiutati.
2. In Mammouth, aggiungi un connettore MCP personalizzato usando l'URL del server indicato sopra, seleziona **Chiave API** e incolla il token.

---

## Risoluzione dei problemi

| Messaggio | Soluzione |
| --- | --- |
| `Dynamic registration is not available for this client` | Hai scelto la connessione automatica. Usa la **connessione manuale**. |
| `MCP server not found for path: /ads/mcp` | Rimuovi `/mcp` dall'URL del server. |
| Facebook segnala che l'URI di reindirizzamento non è consentito | L'URI in **Valid OAuth Redirect URIs** non corrisponde esattamente a quello di Mammouth. Copialo di nuovo dal modulo di connessione manuale. |
| Facebook segnala autorizzazioni o scope non validi | All'app manca un'autorizzazione. Consulta il [passaggio 2](#permissions). |
| `This server does not support the submitted client authentication method` | Lascia vuoto **Client Secret**. |
| `Error POSTing to endpoint` (spesso con 502) | La connessione è riuscita, ma Meta rifiuta le richieste: di solito manca `ads_mcp_management`. Aggiungi il caso d'uso Ads MCP (passaggio 1), poi scollega il connettore in Mammouth e ricollegalo per concedere la nuova autorizzazione. |

---

## ➡️ E adesso?

👉 **[Torna ai connettori (MCP)](../../)**
