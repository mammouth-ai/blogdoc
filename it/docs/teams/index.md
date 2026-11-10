# Per team e aziende

## 👥 Ruoli e autorizzazioni

Gli account Team si basano su tre livelli di ruolo:

| Ruolo | Autorizzazioni |
| --- | --- |
| **Proprietario** | Accesso completo a tutte le funzionalità della pagina Team, gestione del piano, della fatturazione e delle autorizzazioni |
| **Amministratore** | Può invitare, attivare e disattivare membri e altri amministratori. Non può modificare il piano, la fatturazione o le autorizzazioni |
| **Membro** | Nessun accesso alla pagina Team |

> 💡 **Consiglio:** gli amministratori possono disattivare la propria licenza e trasferirla a un altro membro, mantenendo un ruolo puramente amministrativo senza occupare una licenza.

### Gruppi

I proprietari del team possono creare gruppi con amministratori e autorizzazioni dedicate. Attiva i gruppi dalle [Autorizzazioni](https://mammouth.ai/app/account/settings/permissions).

### Inviti di gruppo

I membri possono essere invitati **singolarmente** o **in gruppi di 100 persone**, incollando un elenco di indirizzi email da un file CSV o un foglio di calcolo.

### Privacy degli utenti

Le conversazioni e i documenti di ciascun utente sono **strettamente riservati** e appartengono all'utente. Nessun membro del team può accedere ai dati degli altri, salvo condivisione esplicita tramite:

- condivisione di una conversazione;
- condivisione di un Mammouth.

![Schermata delle impostazioni del team](/docs/teams/teams_settings.png)

---

## 🔒 Autorizzazioni

I **proprietari** possono limitare alcune funzionalità per tutti i membri del team:

- Disattivare alcuni **fornitori di IA**
- Disattivare l'accesso all'**API**
- Disattivare la generazione di **video**
- **Connettori (MCP)**: configurare e distribuire connettori (Microsoft 365, GitHub, Notion, Atlassian o MCP personalizzati) a tutti i membri dalla pagina Autorizzazioni

![Schermata delle autorizzazioni](/docs/teams/permissions.png)

---

## 🦣 Mammouth condivisi

Un **Mammouth** (spazio di lavoro IA personalizzato) può essere condiviso nel team con due livelli di accesso:

- **Sola lettura**: i membri invitati possono usare il Mammouth senza modificare le istruzioni o i file associati.
- **Lettura e modifica**: i membri invitati possono modificare le istruzioni e i file associati.

> ⚠️ Condividere un Mammouth **non** significa condividere le conversazioni che vi si svolgono. Per impostazione predefinita, ogni conversazione resta privata.

### Condivisione delle conversazioni

È possibile condividere una conversazione, ma la condivisione deve essere **attivata esplicitamente** per la conversazione interessata. Si effettua tramite un **link URL**.

---

## 🔀 Opzione con piani misti

È possibile **combinare i piani** (Starter, Standard ed Expert) nello stesso team, adattando l'accesso alle esigenze effettive di ogni collaboratore.

---

## 💳 Pagamenti e fatturazione

### Pagamento online _(consigliato)_

Disponibile su [mammouth.ai/pricing](https://mammouth.ai/pricing), con i seguenti metodi di pagamento:

- 💳 Carta di credito o debito
- 🅿️ PayPal
- 🛍️ Klarna

Questi metodi consentono una **gestione autonoma al 100%** dell'abbonamento.

**Fatturazione:** la fattura viene inviata automaticamente via email a ogni pagamento ed è disponibile anche nell'area personale.

> 💡 Per le aziende: durante la registrazione sulla pagina di pagamento seleziona **«Acquisto come azienda»** e inserisci il numero di partita IVA europeo.

---

### Bonifico bancario o mandato amministrativo

Il pagamento tramite bonifico bancario è accettato alle seguenti condizioni:

- Impegno **annuale obbligatorio**

È accettato anche il pagamento tramite **mandato amministrativo (Chorus Pro)**.

**Per richiedere un preventivo**, compila il [**modulo di richiesta**](https://mammouth.ai/app/account/quote-request).

> ⏱️ Ogni aggiunta di licenza richiede un nuovo preventivo e viene elaborata **entro 72 ore lavorative**.

---

## 🔐 SSO (Single Sign-On)

L'integrazione **SSO** è disponibile con **Microsoft Entra ID, Okta, Keycloak** e altri provider di identità SAML 2.0. Semplifica la distribuzione di Mammouth nelle aziende e nelle università con **più di 50 licenze**.

Per saperne di più, consulta la [guida all'integrazione SSO](/docs/sso/).

## Crediti API e accesso a Mammouth Code per sviluppatori

Oltre alla chat, le organizzazioni possono assegnare a ogni membro un budget mensile di crediti API. È particolarmente utile per gli sviluppatori che desiderano usare [Mammouth Code](/it/docs/mammouth-code/index.md).
