# Note di rilascio – Mammouth AI

## 9 novembre 2026

### Aggiornamenti dei modelli

- **FLUX 3** sostituisce FLUX 2.
- **Muse Spark** sostituisce Llama 4 Maverick.
- **Muse Glimmer** è il modello leggero di Muse.
- **Muse Wonder** è il modello di ragionamento di Muse.
- **GPT Transcribe** sostituisce Whisper per la dettatura.

### App iOS

Mammouth è disponibile sull'[Apple App Store](https://apps.apple.com/fr/app/mammouth/id6761525677).

### Generazione di immagini

- GPT Image può generare immagini con sfondo trasparente.
- Le immagini SVG generate dai modelli di testo vengono visualizzate nell'interfaccia.

### Generazione di video

- È supportata la generazione di video in formato verticale.
- La durata massima dei video generati è passata da 5 a 10 secondi.

### Mammouth come motore di ricerca

Puoi usare Mammouth come motore di ricerca nel browser. [Scopri come fare](/it/docs/browser-search-shortcut/).

### Mammouth per i team di sviluppo

L'offerta per sviluppatori (API Mammouth e Mammouth Code) è compatibile con i piani Team.

Gli amministratori possono distribuire crediti API al team, impostare un budget mensile per membro e configurare un limite di utilizzo per ogni sessione di 3 ore.

Ogni membro può gestire le proprie chiavi API e monitorare il proprio utilizzo.

È disponibile l'endpoint `v1/images/edits` e le versioni dei modelli sono state aggiornate.

### Altri miglioramenti

- La ricerca Web offre funzionalità agentiche per ricerche più approfondite con Claude, Mistral, Kimi, DeepSeek, GLM e Muse.
- Seleziona una parte di una risposta dell'IA e scegli «Fai una domanda a riguardo».

## 21 ottobre 2026

### ⭐ Aggiornamenti dei modelli

- **Mistral Large 4**
- **GPT-6.1 Sol** sostituisce GPT-6 Sol
- **Claude 5.5 Sonnet** sostituisce Claude 5 Sonnet
- **Gemini 3.8 Flash** sostituisce Gemini 3.7
- **Gemini 4 Argon** sostituisce Gemini 3.1 Pro
- **Claude Haiku 5.5** sostituisce Haiku 4.5
- **Nano Banana 2.1** sostituisce Nano Banana 2

### 🔈 Chat vocale

La chat vocale è stata migliorata in modo significativo:

- Usa il modello GPT-Live più recente.
- Puoi cercare sul Web durante una conversazione per ottenere informazioni aggiornate.
- La chat vocale può accedere alla cronologia della conversazione, così è più facile passare dal testo alla voce nella stessa chat.
- Sono disponibili i sottotitoli.
- Lo schermo del dispositivo mobile resta acceso durante la chat vocale e la riproduzione Text-to-Speech.
- Le transizioni sono più fluide.

### 📄 Più funzionalità per i documenti

- Il numero massimo di documenti per conversazione è passato da **20 a 50**.
- L'OCR dei PDF è gestito da **Mistral OCR 4.1**.
- Abbiamo corretto errori e migliorato i messaggi d'errore per spiegare meglio perché un file è stato rifiutato.

### 🎨 Impostazioni riprogettate

Abbiamo rinnovato le pagine delle impostazioni e aggiunto un menu di navigazione. Ora puoi gestire più facilmente le impostazioni dell'account, le chiavi API, i connettori, l'abbonamento e il team.

### ✨ Inoltre

- Se hai un abbonamento, [mammouth.ai](https://mammouth.ai) ti porta direttamente alla chat.
- È possibile registrarsi e accedere con Apple.
- I modelli API sono stati aggiornati alle versioni più recenti. [Esplora i modelli](https://model-explorer.mammouth.ai/).
- L'assegnazione ai gruppi è disponibile per tutti i team. Attivala nelle [autorizzazioni](https://mammouth.dev/app/account/settings/permissions). I proprietari possono assegnare amministratori dedicati ai gruppi e impostare autorizzazioni per ciascun gruppo.

## 30 settembre 2026

### Aggiornamenti dei modelli

- **Claude Opus 5.5** sostituisce Claude Opus 5.
- **GPT-6 Sol** sostituisce GPT-5.6 Sol.
- **GPT-6 Luna** sostituisce GPT-5.6 Luna.
- **Grok 4.7** sostituisce Grok 4.6.

### Esplora tutti i modelli

Un pulsante in fondo all'elenco dei modelli, sotto l'area di input, permette di visualizzare tutti i modelli disponibili. È stata migliorata anche la navigazione su mobile.

### Più formati di documenti

Mammouth supporta ulteriori formati binari, tra cui `.xlsm`, `.docm`, `.jar` e `.nes`.

### Gruppi per i team più grandi

Tutti i proprietari dei team possono creare gruppi, ciascuno con amministratori e autorizzazioni specifici.

## 18 settembre 2026

### ⭐ Nuovi modelli

- **GPT-6 Astra**
- **Claude Fable 5.1**

### 🔄 Aggiornamenti dei modelli

**Testo:**

- **GLM 5.3 Flash**
- **DeepSeek v4.1 Flash**

**Immagini:**

- **GPT Image 2.5**
- **Grok Imagine Image 2**

### 📂 Il contesto dei documenti viene caricato integralmente

In precedenza, quando si caricavano documenti molto lunghi, veniva estratta solo una parte del contenuto, che poteva quindi risultare troncato.

Ora la modalità agente viene attivata automaticamente per i documenti con molto contesto, così è possibile caricare il documento completo insieme al relativo contesto.

### 🧠 La memoria della chat è più ampia per impostazione predefinita

Alcuni utenti hanno segnalato che la memoria della chat era troppo limitata anche senza averne modificato le impostazioni. La modalità «Memoria ampia» viene attivata automaticamente per le conversazioni della giornata corrente.

Per attivare la modalità «Memoria ampia» per tutte le conversazioni, comprese quelle dei giorni precedenti, puoi abilitare la modalità «Memoria estesa».

### 🤖 Un modello predefinito più intelligente

Se non viene selezionato esplicitamente un modello, il modello di testo predefinito non è più limitato a un modello Mistral: sceglie dinamicamente tra vari modelli in base al prompt.

È stato introdotto l'instradamento intelligente dei modelli di testo.

### 🔌 Connessione OAuth per i connettori personalizzati

Alcuni connettori richiedono o supportano l'autenticazione OAuth. Ora puoi collegarti e usarli direttamente.

### 📦 Inoltre

- Sora è stato ritirato dopo la chiusura del servizio da parte di OpenAI.
- Puoi caricare documenti direttamente da Google Drive o Dropbox, anche se non sono salvati localmente.
- I modelli API sono stati aggiornati.
- Mammouth Code è stato aggiornato alla versione 1.18.31.

## 20 agosto 2026

### 🔌 Connettori (MCP)

- **Connettori preconfigurati** – Quattro connettori (Microsoft 365, GitHub, Notion e Atlassian) sono disponibili direttamente nella chat.
- **MCP personalizzato** – Se non trovi il connettore che cerchi, puoi configurare un MCP personalizzato.

Puoi attivare i connettori dalle [impostazioni dei connettori](https://mammouth.ai/app/account/settings/connectors).

Per i team, gli amministratori possono definire i connettori disponibili nelle [impostazioni delle autorizzazioni](https://mammouth.ai/app/account/settings/permissions).

### 🔄 Aggiornamenti dei modelli

- **Claude Opus 5** sostituisce Opus 4.8 e Fable.
- **Gemini 3.7 Flash** sostituisce 3.6 Flash.
- **Grok 4.6**
- **GLM 5.3**
- **Qwen 3.8**

### 🛠️ Stabilità della piattaforma

Abbiamo investito molto nel miglioramento della stabilità generale della piattaforma. Sono stati corretti o ridotti diversi problemi, tra cui:

- **Prompt interrotti** – Alcuni prompt venivano interrotti prima che l'IA completasse la risposta. Il problema è stato risolto. Puoi anche ricaricare la pagina, chiudere il browser o mettere il computer in sospensione: lo streaming continua finché non fai clic sul pulsante per interrompere la generazione.
- **Caricamenti XLSX** – Alcuni file XLSX non venivano caricati correttamente.
- **File generati che bloccavano le conversazioni** – Alcuni file generati, soprattutto ZIP e TAR, potevano bloccare una conversazione e impedire l'invio di nuovi messaggi. Il problema è stato risolto.
- **Nuovi formati di file** – I file `.tar`, `.tgz` e `.tar.gz` sono supportati durante il caricamento di documenti.
- **File vuoti** – È stato risolto un problema che talvolta portava l'IA a generare file JSON vuoti.

### 🧷 Aggiornamenti API

- **Esperienza delle impostazioni API** – Le [impostazioni API](https://mammouth.ai/app/account/api) sono state aggiornate per rendere più chiari i movimenti del credito API.
- **Modelli API disponibili** – L'elenco è stato aggiornato con le nuove versioni: [model-explorer.mammouth.ai](https://model-explorer.mammouth.ai/).

## 24 luglio 2026

### 🧠 Nuovi modelli di ragionamento

- **Claude Fable**
- **GPT 5.6 Sol**
- **Kimi K3**
- **Grok 4.5 Reasoning**

### ⭐ Nuovi modelli standard

- **GPT 5.6 Luna**
- **Gemini 3.6 Flash**
- **Grok 4.5**

### ⚡ Nuovo modello leggero

- **Gemini 3.5 Flash Lite**

### 🧷 Per sviluppatori

**Nuovi modelli nell'API** – Kimi K3 e la maggior parte dei modelli elencati sopra sono stati aggiunti anche all'API Mammouth.

## 13 luglio 2026

### 🎵 Generazione musicale con Lyria

**Generazione musicale** – Puoi generare musica direttamente in Mammouth con Lyria.

### 🔄 Aggiornamenti dei modelli

- **Claude Sonnet 5** sostituisce Claude Sonnet 4.6.
- **GLM 5.2** sostituisce GLM 5.1.
- **Qwen 3.7** sostituisce Qwen 3.6.
- **Grok Imagine Image Quality** sostituisce Grok Imagine Image.
- **Recraft v4.1** sostituisce Recraft v4.
- **Recraft v4.1 SVG** sostituisce Recraft v4 SVG.

### ✨ Nuove funzionalità

**Modalità agente** – Puoi attivarla nell'area di input. È ideale per attività complesse come generare e modificare documenti o svolgere ricerche Web approfondite e documentate.

**Sintesi vocale IA** – La sintesi vocale di OpenAI supporta il tedesco e altre 10 lingue. Francese e inglese continuano a essere supportati da Voxtral. Sono stati risolti anche problemi tecnici relativi alla sintesi vocale.

### 🧷 Per sviluppatori

**Nuovi modelli nell'API** – Sono stati aggiunti nuovi modelli. Consultali su [model-explorer.mammouth.ai](https://model-explorer.mammouth.ai/).

**Modello consigliato in Mammouth Code** – Nel selettore dei modelli di Mammouth Code è disponibile `mammouth-recommended`, che usa il modello efficiente che utilizziamo internamente per programmare. Attualmente è GLM 5.2. La scelta viene aggiornata quando un nuovo modello offre un rapporto qualità-prezzo migliore.

## 12 giugno 2026

### ⭐ Nuovi modelli

- **Claude Opus 4.8**
- **Gemini 3.5 Flash**
- **Mistral Medium 3.5**
- **Grok 4.3**

### 📂 Importante aggiornamento dei documenti

**Modifica e generazione avanzata di documenti** – Mammouth supporta la modifica avanzata e la generazione complessa di documenti in tutti i formati supportati. L'IA può aprire un computer virtuale per modificare e generare direttamente file usando skill e subagent.

**PDF fino a 100 MB** – Sono supportati file PDF fino a 100 MB.

### 🌐 Integrazione della ricerca Web

**Funzionalità Web per tutti i modelli** – Le funzionalità Web sono integrate direttamente in Claude Sonnet e Claude Opus, nonché nei modelli Mistral, Kimi, DeepSeek, GLM e Qwen. Non esistono più modelli Web dedicati: la ricerca Web è uno strumento che puoi attivare dal selettore nell'area del prompt.

### 📊 Dashboard delle quote

**Monitoraggio per modello** – È disponibile una dashboard delle quote per monitorare l'utilizzo per modello.

### 🪛 Correzioni

**GPT Image 2** – Sono stati risolti alcuni problemi relativi a GPT Image 2.

### 🧷 Aggiornamenti API

**File più grandi nelle completions** – L'API supporta file più grandi nelle completions.

**Nuovi modelli** – Sono stati aggiunti nuovi modelli all'API.

### ⚽ Accessori Mammouth per la Coppa del Mondo

**Sostieni la tua nazionale!** – Segui la Coppa del Mondo e ottieni gli accessori Mammouth della squadra che sostieni. Ogni accessorio resta disponibile finché la squadra è in gara.

## 1 maggio 2026

### ⭐ Aggiornamenti dei modelli di punta

- **GPT 5.5**
- **Claude Opus 4.7**
- **DeepSeek v4 Pro**
- **Qwen 3.6 Plus**
- **Kimi K2.6**
- **GLM 5.1**

### 🖼️ Aggiornamenti dei modelli di immagini

- **Nano Banana 2**
- **GPT Image 2**

### ⚡ Aggiornamento del modello leggero

- **Gemini 3.1 Flash Lite**

### 🎨 Miglioramenti dell'interfaccia

**Elenco dei nuovi prompt riprogettato** – I modelli vengono mostrati nello stesso ordine scelto nella pagina della nuova conversazione. Il modello predefinito compare per primo. Trascina i modelli per scegliere quello predefinito.

**Area di input espandibile** – Per i prompt lunghi, puoi espandere l'area di input a schermo intero e modificarli più facilmente.

**Messaggi utente compressi** – I messaggi dell'utente sono compressi nella conversazione per facilitare la navigazione tra i messaggi precedenti.

### 📂 Aggiornamenti dei documenti

**Supporto ZIP** – È possibile caricare file ZIP.

**OCR PDF migliorato** – I PDF scansionati che richiedono OCR vengono elaborati fino a 50 pagine, rispetto alle 20 precedenti.

**Correzioni XLSX** – Sono stati risolti problemi che impedivano il caricamento corretto di alcuni file XLSX.

### 🔄 Altro

**Importazione delle conversazioni** – Puoi importare conversazioni da ChatGPT, Claude o da un altro account Mammouth direttamente dalle impostazioni.

**Mammouth Code** – È stato aggiornato e sono stati corretti problemi di installazione sui processori meno recenti. Per installare l'ultima versione, usa `curl -fsSL "https://code.mammouth.ai/install.sh" | bash` (Linux/Mac) oppure `irm "https://code.mammouth.ai/install.ps1" | iex` (Windows).

### 🧷 Aggiornamenti API

**Nuovi modelli** – I modelli elencati sopra sono stati aggiunti all'API.

**Model Explorer** – Grazie a nichu42 è disponibile una [panoramica dei modelli](https://model-explorer.mammouth.ai/). È [open source](https://codeberg.org/mammouth-ai/mammouth-model-explorer). Anche il [blog di documentazione](https://github.com/mammouth-ai/blogdoc) è open source: i contributi sono benvenuti.

**Più chiavi API** – Puoi creare più chiavi API per separare i progetti. Per facilitare il monitoraggio, i log possono essere filtrati per chiave API.

### 📱 App mobile

**App Android disponibile** – L'app è disponibile su Google Play: [https://play.google.com/store/apps/details?id=ai.mammouth.application](https://play.google.com/store/apps/details?id=ai.mammouth.application)

## 14 aprile 2026

### 🎬 Generazione di video

La generazione di brevi video è disponibile in Mammouth con quattro modelli: Veo 3.1 fast, Sora 2, Grok Video e Kling 2.5.

### ⭐ Nuovi modelli

**Grok 4.20** – Il nuovo modello Grok include una ricerca Web aggiornata, con ricerca mirata su x.com.

**Aggiornamenti dei modelli leggeri:**
- **Claude Haiku 4.5** è stato aggiunto.
- **GPT 5.4 nano** sostituisce GPT 5 mini.
- **Mistral Small 4** sostituisce Mistral Small 2.

### 👥 Nuove funzionalità per team e aziende

**Integrazione SSO** – Sono supportate integrazioni SSO con Microsoft Entra, Keycloak, Okta e altri. Questo semplifica la distribuzione di Mammouth nelle aziende e nelle università.

**Licenze combinabili** – Un team può combinare piani Starter, Standard ed Expert nello stesso abbonamento per rispondere alle diverse esigenze dei membri.

Ulteriori informazioni sui team: [info.mammouth.ai/docs/teams/](https://info.mammouth.ai/docs/teams/)

### 📊 Nuova politica delle quote e contesto più ampio

**Politica delle quote aggiornata:**
- Sono state eliminate le quote mensili per immagini e documenti.
- È stato eliminato anche il limite fisso di 50 messaggi.
- Tutti i limiti sono calcolati in base al consumo effettivo di IA nella quota di sessione di 3 ore (numero e lunghezza dei messaggi, modello selezionato, ragionamento e ricerca Web).
- Il passaggio a un altro modello al raggiungimento della quota è stato migliorato e avviene in modo più graduale.

**Contesto più ampio per i documenti** – Nelle [impostazioni](https://mammouth.ai/app/account/settings) è possibile ampliare il contesto dei documenti per esigenze specifiche e documenti molto lunghi.

**Memoria più ampia** – Nelle [impostazioni](https://mammouth.ai/app/account/settings) è possibile aumentare la quantità di contesto della memoria della conversazione inviata con ogni messaggio.

Maggiori dettagli: [La nuova politica delle quote: prima e dopo](https://public.mammouth.ai/evolution-des-quotas)

### Inoltre

- **Sintesi vocale** (con Voxtral) per far leggere ad alta voce le risposte dell'IA.
- **Nuove estensioni supportate:** `.ods`, `.odp`, `.odt`.
- **Design dei messaggi rinnovato**, con meno bordi e ottimizzato per dispositivi mobili.
- **Email transazionali** (verifica email, password dimenticate, inviti al team e così via) completamente riprogettate.
- **Filtri delle conversazioni** per Mammouth e data:
  - puoi selezionare, spostare o eliminare in blocco le conversazioni più vecchie di 3 mesi;
  - puoi selezionare, spostare o eliminare in blocco le conversazioni di un Mammouth personalizzato.
  ![Filtri delle conversazioni](/docs/release-notes/conversation_filter.png)

## 6 marzo 2026

### ⭐ Nuovi modelli

**Gemini 3.1 Pro**

**Recraft v4**

### 🦣 Mammouth condivisi

I Mammouth possono essere condivisi tramite un link pubblico, un invito email o all'interno del team.

### Inoltre

- Mentre la risposta dell'LLM è in streaming, puoi copiare blocchi di codice e tabelle oppure aprire link esterni.
- Sono supportate tutte le estensioni di file di testo, utile per gli sviluppatori che usano formati specifici come `.csproj` o `.mq4`.
- Sono stati aggiunti modelli all'API (GLM-5, Gemini 3.1 Pro, Claude Sonnet 4.6, gemini 2.5 flash lite); 13 modelli sono stati ritirati per mantenere l'elenco aggiornato.
- L'eliminazione delle chat avviene in background, così puoi continuare a lavorare senza attendere davanti a una schermata bloccata.

## 18 febbraio 2026

### ⭐ Nuovi modelli

**Claude Sonnet 4.6** – appena pubblicato!

**Grok Imagine** – sostituisce il precedente modello di immagini Grok 2.

### 🔄 Aggiornamenti dei modelli

- **GPT Image** – migliorata la visualizzazione del testo nelle immagini, soprattutto con prompt lunghi.

### ✨ Nuove funzionalità

- **Copia durante lo streaming** – puoi copiare il testo generato dall'IA mentre viene ancora trasmesso.
- **Generazione di documenti con modelli di ragionamento** – ora funziona anche nelle conversazioni con modelli come Gemini Pro o Claude Opus.

### ⚙️ Impostazioni e input

- **Nuova pagina delle impostazioni** – la [pagina delle impostazioni](https://mammouth.ai/app/account/settings/) è stata completamente rinnovata.
- **Modifica del comportamento del tasto INVIO** – scegli nelle [impostazioni](https://mammouth.ai/app/account/settings/) se inviare il prompt con INVIO, ALT+INVIO o CTRL+INVIO.

### 🎭 Nuovi accessori per Mammouth

Scopri i nuovi accessori Mammouth temporanei ⛷️

## 12 febbraio 2026

### ⭐ Nuovi modelli

**Claude Opus 4.6** e **Kimi K2.5**

### 👨‍💻 Mammouth Code

Consulta la nuova [documentazione di Mammouth Code](https://info.mammouth.ai/docs/mammouth-code/).

### 🌐 Aggiornamenti Web

- **Ricerca immagini**: le ricerche Web possono mostrare immagini.
- **Semplificazione**: la categoria Web è stata unita ai modelli di testo e OpenPerplex è stato rimosso. Puoi continuare a selezionare direttamente la categoria Web.
- **Perplexity**: mostra gli estratti con una nuova visualizzazione.

### Altro

- I **nuovi prompt** possono essere inoltrati tra più conversazioni.
- Copiando una risposta, viene mantenuta la formattazione Markdown (utile per email, documenti e altro).

## 23 gennaio 2026

### ⭐ Nuovo modello

**Mistral Large 3** – sostituisce Mistral Medium.

### 🔄 Aggiornamenti dei modelli

- **Gemini** – stabilità e affidabilità migliorate.
- **Gemini** – supporta l'analisi dei link ai video YouTube.

### 📂 Gestione delle conversazioni

- **Operazioni in blocco** – elimina o sposta più conversazioni contemporaneamente.
- **Ricerca migliorata** – trova le conversazioni per modello o nome del Mammouth.

### 🦣 Mammouth

- **Mammouth illimitati** – rimosso il limite di 15 Mammouth.
- **Mammouth preferiti** – aggiungi ai preferiti i Mammouth che usi più spesso.
- **Ordinamento intelligente** – l'ultimo Mammouth utilizzato sale automaticamente in cima all'elenco.
- **Navigazione laterale migliorata** – esplora più facilmente la tua raccolta di Mammouth.

### 🎭 Nuovi accessori per Mammouth

**Accessori stagionali** – raccogli accessori disponibili per un periodo limitato durante l'anno. Quanti ne otterrai?

### 📱 App mobile (utenti Chrome)

**Reinstalla per le nuove funzionalità** – aggiorna l'app per accedere alle funzionalità native:
- **Scorciatoie rapide** – tieni premuta l'icona dell'app per visualizzare i collegamenti alle azioni.
- **Condivisione migliorata** – condividi foto e file direttamente con Mammouth.

### Inoltre

- **Schede dinamiche del browser** – nelle schede del browser compaiono i nomi delle conversazioni e le icone dei Mammouth.
- **API Nano Banana** – aggiunta come primo modello di immagini nell'API Mammouth.
- **Miglioramenti di GPT Image** – qualità e funzionalità di generazione delle immagini migliorate.
- **Prezzi IVA inclusa** – i prezzi visualizzati nei paesi UE includono l'IVA.

## 1 gennaio 2026

### ⭐ Nuovo modello premium

**Claude Opus 4.5** – Il modello più potente di Anthropic è disponibile su Mammouth.

### 🔄 Aggiornamenti dei modelli

- **GPT 5.2** sostituisce GPT 5.1.
- **Gemini 3 Flash** sostituisce Gemini 2.5 Flash.
- **GPT Image 1.5** sostituisce GPT Image 1.

### 🌟 Nuovi marchi

**Kimi** – nuovo marchio con due modelli:
- Kimi K2
- Kimi K2 Thinking

**Qwen** – nuovo marchio con:
- Qwen 3 Coder

### 📂 Contesto dei documenti ampliato

**Estrazione del contesto 8 volte maggiore** – Il contesto estratto dai documenti nei Mammouth è stato moltiplicato per otto, raggiungendo la capacità di contesto delle conversazioni.

### ⚙️ Controlli avanzati delle impostazioni

- **Disattivazione delle impostazioni API** – disattiva l'accesso API direttamente dal menu.
- **Gestione dei marchi** – disattiva marchi specifici di modelli per te e per il team dalle [impostazioni delle autorizzazioni](https://mammouth.ai/app/account/settings/permissions).

### 🌎 Nuova lingua supportata

🇳🇱 **Mammouth parla olandese!**

## 24 dicembre 2025

### ✨ Nuovo design: Mammouth si rinnova!

Scopri la nuova identità visiva, più opzioni di personalizzazione e un'interfaccia riprogettata.

### 🎨 **Nuovo logo e Mammouth personalizzabili**

- **Nuovo logo**: forma e colori sono stati modernizzati per un aspetto più dinamico e attuale, mantenendo lo spirito distintivo e l'icona originale di Mammouth.
![Logo Mammouth](/docs/release-notes/mammouth_logo.png)

- **Esperienza con i Mammouth personalizzati**: personalizza il tuo Mammouth con più colori e accessori per renderlo unico.
![Nuova pagina di creazione dei Mammouth personalizzati](/docs/release-notes/custom_mammouths_new_creation_page.png)

### **📱 Esperienza utente migliorata, soprattutto su mobile**

- **Pulsanti più grandi** per una navigazione più semplice e intuitiva.
- **Nuova palette di colori** per un'interfaccia più fresca e armoniosa.
- **Completamente responsive su mobile** per un'esperienza fluida su ogni dispositivo.
- **Nuova modalità scura** con una visualizzazione più coerente e riposante.
![Design mobile](/docs/release-notes/mammouth_mobile_design.jpeg)

## 17 dicembre 2025

⭐ **Flux 2 Pro** – sostituisce Flux Kontext Pro.

⭐ **DeepSeek v3.2** – sostituisce DeepSeek v3.1.

**Inoltre**

📍 **Fissa le conversazioni preferite** per mantenerle in cima all'elenco.

🗃️ **Generazione di file** – il sistema di generazione dei file è stato migliorato.

⬇️ **Miglioramenti all'invio a più modelli**
- Perplexity è stato aggiunto all'elenco dei modelli disponibili.
- Inviando prompt a DeepSeek, Grok o Mistral, la ricerca Web si attiva automaticamente quando è pertinente.

🧷 **Aggiornamento API**: sono stati aggiunti Claude Opus 4.5, GPT 5.1, GPT 5.2, Gemini 3 Pro, Perplexity Sonar Pro, Perplexity Deep Research, Grok Code Fast, Claude 4.5 Haiku, Qwen3 Coder, Kimi K2, Mistral Large 3 e DeepSeek v3.2.

## 3 dicembre 2025

👥 **Ruoli del team** – Se usi Mammouth nella tua azienda, puoi:
- assegnare i ruoli di proprietario, amministratore (con gestione dei membri e possibilità di attivarli/disattivarli) e membro;
- trasferire la proprietà a un successore designato;
- usare un account amministratore senza assegnare una licenza al proprietario del piano;
- invitare più indirizzi email contemporaneamente.
![Aggiornamento dei ruoli del team](/docs/release-notes/team_updates_roles_EN.png)

**Inoltre**

**⭐ Grok 4.1 fast** – sostituisce Grok 4.

⬆️ **Esporta le conversazioni** – è disponibile l'esportazione in formato JSON.

⬇️ **Importa conversazioni da ChatGPT** – [dettagli qui](/it/docs/import-conversations/index.md).

💡 Un dettaglio del prodotto: chiedendo a un modello di testo come Mistral di generare un'immagine, crea un link per inviare rapidamente la richiesta a un modello di immagini.

🪛 Risolto un errore occasionale di GPT Image quando il prompt conteneva emoji.

## 21 novembre 2025

**⭐ Gemini 3 Pro** – sostituisce Gemini 2.5 Pro.

## 18 novembre 2025

**⭐ GPT 5.1** – GPT 5.1 e GPT 5.1 Thinking sostituiscono GPT 5. Il modello è più rapido mantenendo le prestazioni.

**⭐ Grok 4 fast** – Grok 4 è stato aggiornato con un modello di testo più rapido, un nuovo modello leggero e un modello di ragionamento.

**🍌 Nano Banana** – Nano Banana è stato aggiornato alla versione successiva alla preview. Supporta i [parametri di proporzione](/it/docs/aspect-ratio/index.md).

**🌐 Attivazione automatica della ricerca Web** – Mistral, Grok e DeepSeek cercano automaticamente sul Web quando pertinente. Puoi disattivare o forzare la ricerca facendo clic sull'icona Web durante la scrittura del prompt.

**Inoltre**

✉️ L'indirizzo email dell'account può essere modificato nelle [impostazioni](https://mammouth.ai/app/account/settings).

⏬ È stato aggiunto un pulsante per scorrere rapidamente alla fine della conversazione.

🪛 È stato corretto un problema nell'ultima versione di Safari che impediva alle IA di leggere documenti con accenti francesi nel titolo. È stato corretto anche un problema di visualizzazione di alcuni codici importati come documenti.

🧷 Gli embedding sono ora disponibili nell'API Mammouth.

## 5 novembre 2025

**⭐ Recraft Vectorize (da PNG a SVG) ⭐**

Recraft può convertire immagini PNG o JPEG in formato `.svg`. È l'unico modello in grado di farlo.

**🐳 DeepSeek v3.1 Terminus** – DeepSeek v3.1 è stato aggiornato all'ultima versione.

**🔉 Da audio a testo** – carica e analizza file audio con Gemini.

**📹 Da video a testo** – carica e analizza brevi video (meno di 20 MB) con Gemini.

**Inoltre**

💭 La modalità di ragionamento è meno invasiva grazie a un design più fluido. Viene mostrata anche la modalità di ricerca Web di GPT.

🦊 L'app è disponibile anche per gli utenti Firefox su Windows.

🪛 È stato corretto l'invio accidentale del prompt quando si rilasciava Shift prima di premere Invio (con Shift + Invio).

➗ Sono state corrette alcune formule LaTeX per migliorare la visualizzazione delle equazioni.

📋 Il caricamento della cronologia delle conversazioni nella barra laterale funziona meglio sugli schermi grandi.

## 8 ottobre 2025

**⭐ Claude Sonnet 4.5 ⭐**

Sostituisce Claude Sonnet 4. Consulta l'annuncio di Anthropic [qui](https://www.anthropic.com/news/claude-sonnet-4-5).

**🧠 Memoria della conversazione**

La memoria della conversazione è stata ampliata. Il modello ora accede a tutti i messaggi della cronologia, indipendentemente dalla lunghezza della conversazione.

**🎨 Design delle risposte dell'IA**

Il design delle risposte dell'IA è stato migliorato. La spaziatura tra paragrafi e titoli è più equilibrata e citazioni, tag e tabelle generate hanno colori migliori.

**⛵ Addio a Midjourney**

La scorsa settimana il nostro fornitore di Midjourney ha interrotto il servizio. Non abbiamo trovato un sostituto adeguato e Midjourney non offre ancora un'API ufficiale.
Anche se Midjourney è al quarto posto per utilizzo nella generazione di immagini (dopo Nano Banana, GPT Image e FLUX) e al quinto nei benchmark, continuerà a mancarci. Stiamo valutando di ricreare con altri modelli la visualizzazione a griglia di quattro immagini.

**Inoltre**

- **GPT Image** è completamente conversazionale, come Nano Banana.
- **Correzione di bug:** alcuni modelli tentavano talvolta di eseguire codice non richiesto durante l'analisi di documenti o grafici e non riuscivano. Il problema è stato risolto.
- **API Mammouth:** sono supportati Claude Sonnet 4.5, Grok-4, Grok-4-fast, DeepSeek-3.1-Terminus e DeepSeek-3.2-exp.

## 16 settembre 2025

**⭐ Nuovi modelli ⭐**

- **Nano Banana** (precedentemente Gemini 2.5 Flash Image): può modificare immagini e gestire conversazioni.
- **DeepSeek v3.1** sostituisce DeepSeek v3.

**⚡ Avvia conversazioni con modelli leggeri**

Puoi iniziare una nuova conversazione con qualsiasi modello leggero anche se non hai raggiunto il limite della quota.

**🧷 Servizi API per le automazioni**

- Acquista crediti aggiuntivi dalle [impostazioni API](https://mammouth.ai/app/account/settings/api).
- Puoi acquistare crediti anche senza abbonamento.
- Nuovi modelli supportati: GPT-5, GPT-5-mini, GPT-5-nano, Claude 4.1 Opus, Mistral 3.1 e DeepSeek v3.1.

**Inoltre**

- **Gestione migliorata di più documenti** nella stessa conversazione: i documenti brevi non vengono più ignorati quando sono presenti documenti lunghi.
- **Generazione di documenti**: risolto il problema per cui alcuni modelli rifiutavano occasionalmente di generare file PDF, DOCX o XLS.
- La [pagina dei prezzi](https://mammouth.ai/pricing) è stata aggiornata per mettere in evidenza l'offerta Team e fornire informazioni aggiornate sui servizi Mammouth (crediti API, Perplexity, modalità vocale e altro).
- Sono stati aggiornati i [Termini di servizio](https://info.mammouth.ai/docs/terms-of-service/).
- **GPT-5** offre una formattazione del testo migliore, una visualizzazione più accurata delle formule matematiche e un processo di ragionamento visibile.

## 25 agosto 2025

**⭐ Nuovo modello: Mistral Medium 3.1**

**📁 Contesto lungo e documenti**

La gestione di contesti lunghi (messaggi e documenti) è stata migliorata: più capacità di contesto, estrazione più accurata dei contenuti, migliore gestione di contesti di codice lunghi, prestazioni più rapide e meno errori.

**🎨 Miglioramenti dell'esperienza utente**

- Il pulsante per copiare il codice è flottante e più facile da raggiungere.
- Copiando e incollando email o contenuti HTML non vengono più aggiunti a capo indesiderati.
- La navigazione mobile è stata migliorata per un'esperienza più fluida.
- Nella barra laterale sono visibili più Mammouth personalizzati.
- Il numero massimo di Mammouth è passato da 12 a 16.

**🌐 Accesso Web per tutte le IA**

Le funzionalità Web sono state estese a Mistral, Claude, DeepSeek, Grok e Llama.

## 8 agosto 2025

**⭐ GPT-5**

- GPT-5 sostituisce GPT-4.1.
- GPT-5 mini sostituisce GPT-4.1 mini.
- GPT-5 Thinking (GPT-5 con ragionamento più sistematico) sostituisce o3 e o4-mini.

**🦣 Ogni Mammouth personalizzato ha il proprio modello predefinito** e un proprio ordine di visualizzazione dei modelli prima di premere Invio.

**✍️ Il prompt viene salvato come bozza** e resta disponibile quando cambi conversazione o aggiorni la pagina, fino al suo invio.


### ⭐ Nuovi modelli

**Nuovi modelli di punta**
- o3
- Magistral

**Nuovi modelli di immagini**
- Imagen 4.0 (di Gemini)
- Grok Images

**Nuovi modelli leggeri, rapidi e senza limiti**
- Mistral Small 32B
- Llama 4 Scout
- GPT-4.1-mini
- Grok-3-mini
- Gemini 2.5 Flash Lite

### ↪️ Reinviare messaggi di una conversazione

Ora puoi inviare di nuovo a un altro modello qualsiasi messaggio utente della conversazione, non solo il primo. La conversazione prosegue come un ramo separato.

### ✨ Conversazioni multimodello

Le conversazioni sono associate a un marchio anziché a un singolo modello: puoi passare da un modello di testo a uno di immagini o di ragionamento nella stessa conversazione.

### Inoltre

- Al raggiungimento di una quota, la conversazione continua con il modello illimitato del marchio: non serve iniziarne una nuova.
- Il logo di Grok è stato aggiornato, passando dal logo xAI al logo Grok.
- È possibile eliminare il messaggio precedente di una conversazione e tornare al messaggio n-2, continuando fino al primo.
- Nelle pagine di errore, compresa la 404, compare un mammut.

## 24 luglio 2025

### 🌟 Grok 4

### 📂 Documenti: analisi più rapida e più opzioni

- **Velocità:** l'analisi dei documenti è tre volte più rapida.
- I PDF scansionati e gli altri PDF composti da immagini vengono analizzati con Mistral OCR.
- Sono state aggiunte circa 80 estensioni: sono supportate [oltre 200 estensioni di file](https://info.mammouth.ai/docs/supported-file-extensions/).

### 📱 Installazione rapida dell'app

- L'app si installa con un clic dal menu del pannello laterale sinistro, in tutti i browser tranne Firefox e Safari.

### 🌍 Nuove lingue

🇵🇱 Mamut mówi teraz po polsku

🇷🇴 Mamutul vorbește acum românește

🇵🇹 O mamute fala agora português

🇦🇩 El mamut parla ara català

## 3 luglio 2025

### 🌟 Midjourney v7

### 🧷 API Mammouth

- **Crediti inclusi nell'abbonamento per tutti gli abbonati:** 2 $/4 $/10 $ al mese per Starter/Standard/Expert.
- **Compatibile con OpenAI:** può essere utilizzata in [n8n](https://public.mammouth.ai/How-to-use-Mammouth-in-n8n-226cf297c1ca80ab9f5dd999410884ee?pvs=74), Cline e altri strumenti con i plugin OpenAI.
- Sono disponibili 23 modelli di testo.
- [**Consulta la documentazione**](https://info.mammouth.ai/docs/api-quick-start/)

### 🧮 Visualizzazione delle quote e dell'utilizzo

- Puoi consultare le quote in qualsiasi momento dalle impostazioni dell'account.
- Puoi nascondere il banner delle quote nel pannello laterale.

### 📂 Documenti e cronologia

- Nelle conversazioni con documenti puoi disattivare i documenti della cronologia o degli assistenti, concentrarti sull'ultimo file caricato o restare sotto il limite di 32 MB.

![Gestione dei file nel prompt](/docs/release-notes/file_management_in_prompt.png)

- Nuova estensione di file: `.doc` (anche se è un'estensione MS Office ormai datata).

### 👷 Errori del server e documenti problematici

Sono stati corretti numerosi errori sporadici nelle risposte dell'IA: errori di Claude con immagini caricate, errori con documenti che superavano complessivamente 32 MB, documenti protetti da password, endpoint API non funzionanti e documenti eliminati o problematici che bloccavano le conversazioni reinviate.

### Altre funzionalità

- È possibile pagare con PayPal.
- È possibile accedere con Google e password usando lo stesso indirizzo email.
- Le conversazioni reinviate sono raggruppate nel pannello laterale.

![Conversazioni a fisarmonica](/docs/release-notes/Accordions_GIF.gif)

## 6 giugno 2025

### 🌟 Flux Kontext e DeepSeek R1

- **FLUX Kontext Pro** sostituisce FLUX Pro e Retexture.
- **DeepSeek R1 28.05** aggiorna DeepSeek R1.

### 🗃️ Generazione di file

- **Genera CSV, DOCX, PDF e altro** con tutti gli LLM.
- **Genera grafici come immagini** con tutti gli LLM.
- [Guarda l'esempio](https://mammouth.ai/shared/7fe819ad-5b61-4111-8f80-ab0521bbe848).

### 📱 App mobile riprogettata

- È stata aggiunta la **conversione della voce in testo** per dettare i prompt.
- **Input più fluido:** risolte le sovrapposizioni tra tastiera e modelli nella pagina della nuova conversazione.
- Corretti vari problemi minori dell'interfaccia (margini, bordi, popup e sovrapposizioni) per un'esperienza più intuitiva.

## 23 maggio 2025

### 🌟 Mistral 3 e Claude 4

- **Mistral Medium 3** sostituisce Mistral 24.11.
- **Claude Sonnet 4** sostituisce Claude 3.7.

### 🧠 Modifica intelligente delle immagini in conversazione

- I modelli di immagini comprendono le richieste di modifica basate sul messaggio precedente.
- Puoi vedere il prompt finale inviato all'IA dietro l'icona 🪄.

### ⚙️ [Impostazioni dell'account](https://mammouth.ai/app/account/settings) – pagina ridisegnata

- Puoi eliminare tutte le conversazioni in una volta.
- Puoi eliminare il tuo account.
- Nelle [impostazioni del team](https://mammouth.ai/app/account/team) gli indirizzi email degli utenti sono ordinati per dominio e poi per nome.

:::info Inoltre

⚡ **Navigazione più fluida tra le conversazioni** – caricamento progressivo dei contenuti con scheletro.

🖋️ **Modifica dell'ultimo messaggio** – ora puoi rimuovere il documento allegato quando modifichi l'ultimo messaggio.

🔏 **[Informativa sulla privacy](../privacy-policy/) aggiornata**

:::

## 9 maggio 2025

::: info Aggiornamenti dei modelli
🌟 **Perplexity Sonar Pro** è stato aggiunto.

🌟 **Gemini 2.5 Flash**
:::

Inoltre:

⚡ **Multi-prompting** – è possibile generare più risposte IA contemporaneamente.

🧠 **Assegnazione automatica dei nomi alle conversazioni**

🎨 **Il messaggio di input mantiene l'indentazione**

## 25 aprile 2025

::: info Aggiornamento dei modelli
🌟 **GPT Images** sostituisce DALL-E.
:::

Inoltre:

🔍 Ricerca testuale nella cronologia delle conversazioni.  
Premi CTRL+K o fai clic sull'icona di ricerca.

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/textual_search_record_2.mp4" type="video/mp4">
  Il browser non supporta il tag video.
</video>
</div>

## 17 aprile 2025

::: info Aggiornamenti dei modelli
🌟 **Gemini 2.5 Pro** sostituisce Gemini 2.0.

🌟 **Grok 3** sostituisce Grok 2.

🌟 **GPT-4.1** sostituisce GPT-4o.
:::

::: info Nuovi strumenti di fotoritocco
🖌️ **Rimozione dello sfondo** – carica una foto e l'IA ne rimuoverà lo sfondo.

🖌️ **Miglioramento della qualità** – l'IA aumenterà la qualità dell'immagine.
:::

::: info Contesto dei documenti ampliato
📁 **Lunghezza massima dell'input: 4.000.000 di caratteri**, invece di 1.000.000.

📁 **Massimo 20 file per conversazione**, invece di 10.
:::

Inoltre:

📁 **Più estensioni supportate:** `.fortran`, `.twig`, `.urdf`, `.hcl`, `.tsv`, `.geojson`, `.ass`, `.tf`, `.ps1`, `.scss`, `.ino`, `.pyw`, `.odt`.

🧮 **I file degli assistenti consumano meno quote:** non vengono conteggiati a ogni prompt.

**Altri miglioramenti alla qualità del prodotto:**

🦋 **Multitasking** – cambiando scheda durante la generazione, lo streaming continua.

## 7 aprile 2025

::: info Nuovi modelli
🌐🔭 **Perplexity Deep Research**

🌟✈️ **Llama 4.0 400B Maverick** sostituisce Llama 3.3 70B.
:::

🧮 **GPT-4o-mini per i documenti dopo aver raggiunto la quota** – puoi continuare a caricare documenti con GPT-4o-mini.

**Inoltre, miglioramenti del prodotto:**

🦋 **Spiegazione delle immagini non elaborate** – l'IA fornisce dettagli sul motivo per cui non è stato possibile elaborare un'immagine e su come risolvere il problema.

🦊 **Firefox è tornato:** sono stati risolti i problemi di esperienza utente.

🎨 **I collegamenti generati dall'IA si aprono in una nuova scheda**, senza interrompere lo streaming.

## 1 aprile 2025

::: info GPT e Gemini sul Web
🌐 **GPT-4o e Gemini** vengono indirizzati alla ricerca Web quando è pertinente.

🌐 **Progetti con Mammouth** – migliorano e sostituiscono gli assistenti.
:::

🐳 **DeepSeek V3-0324** sostituisce la versione di gennaio.

💾 **Memoria della conversazione:** ampliata per offrire un contesto migliore.

📍 **Conversazioni fissate:** i nuovi messaggi fissano la chat in cima all'elenco.

🌙 **Modalità scura automatica** quando il sistema è impostato sulla modalità scura.

🇪🇸 **El Mammouth habla español**

🇩🇪 **Das Mammouth spricht jetzt Deutsch**

## 18 marzo 2025

::: info GRANDE RINNOVAMENTO DEL DESIGN
🎨 **Interfaccia utente modernizzata** – riprogettazione complessiva dell'esperienza e dell'interfaccia.

📂 **Progetti con Mammouth** – migliorano e sostituiscono gli assistenti.
:::

### 🎨 **Interfaccia utente modernizzata**

✨ **Pulsanti dei modelli** – speriamo che ti piacciano quanto piacciono a noi.

🌙 **Modalità scura** – tutti i colori della modalità scura sono stati aggiornati.

🎨 **Colore della barra laterale** – ora è la chat a risaltare, non la barra laterale.

📝 **Input di testo:**
  > - Filtra i modelli per categoria (Web, testo, ragionamento, immagini).
  > - Trascina e rilascia i documenti.
  > - Caricamento dei documenti rinnovato, con colori per estensione.
  > - Icona nera a forma d'onda per la chat vocale.

🗨️ **Pagina della chat riprogettata per gli schermi grandi:**
  > - Intestazione: rimossa la riga *---messages---* e aggiornati i pulsanti.
  > - Barra di scorrimento spostata all'estrema destra.
  > - Larghezza massima aumentata da 768 px a 980 px.

### 📂 **Organizza i progetti con i Mammouth**

- **Accedi ai Mammouth dalla barra laterale** con un clic sui preferiti.
- **Sposta le conversazioni da un Mammouth all'altro.**
- **Modifica file e istruzioni dalla pagina del prompt.**

--> **Gli assistenti sono morti, lunga vita ai Mammouth 🦣🦣🦣!**

**Inoltre**

🖼️ **Pulsanti Midjourney**: puoi usare variazione e ingrandimento anche sui messaggi precedenti.

🗃️ **Errori dei documenti**: risolto il problema per cui l'IA talvolta ignorava i file caricati.

✴️ **Logo Claude aggiornato**, sostituendo il logo Anthropic.

## 5 marzo 2025

::: info Modalità vocale e nuovo Claude
🎙️ **Chat vocale** – modalità vocale avanzata di GPT.

⭐️ **Claude 3.7 Sonnet** sostituisce Claude 3.5.
:::

Inoltre:

🗃️ **Carica file nei tuoi Mammouth personalizzati.**

✨ **Abbonamenti annuali disponibili** – puoi cambiare piano dalle [impostazioni dell'account](https://mammouth.ai/app/account/settings/), selezionando *Gestisci abbonamento* e poi *Cambia abbonamento*.

## 17 febbraio 2025

::: info Più contesto!
⭐ **Lunghezza massima dell'input: 1.000.000 di caratteri**, invece di 300.000.
:::

Inoltre:

🗃️ **Massimo 10 documenti per chat**, invece di 3.

🦣 **Lunghezza massima delle istruzioni personalizzate Mammouth: 8.000 caratteri**, invece di 2.500.

🇫🇷 **Mammouth finalmente parla francese!**

🇮🇹 **Mammouth ora parla italiano!**

## 3 febbraio 2025

::: info Nuovi modelli di ragionamento!
⭐ **DeepSeek R1**

⭐ **OpenAI o3-mini** sostituisce o1 e o1-mini.
:::

Inoltre:

🧮 **Più quota giornaliera di ragionamento per o3 e R1** – per ora, come quella del testo.

📣 **Consigli Mammouth** – [6 consigli da conoscere su Mammouth](../six-useful-tips-about-mammouth/).

## 28 gennaio 2025

::: info Nuovo generatore di immagini
⭐ **Recraft V3**

⭐ **Recraft-svg** – primo generatore SVG.

> Perché abbiamo aggiunto Recraft? [Scoprilo qui](https://artificialanalysis.ai/text-to-image/arena?tab=Leaderboard)
:::

Inoltre:

🖼️ **Stable Diffusion comprende tutte le lingue.**

🏗️ **Gestione degli errori sconosciuti** – maggiori informazioni sugli errori dei prompt.

🧮 **Dettagli delle quote** – controlla quando si azzerano le quote mensili per immagini e documenti.  
*Nota: il conteggio delle quote è visibile solo quando supera il 50%.*

∑ **Equazioni matematiche con un design più gradevole**, in LaTeX.

## 14 gennaio 2025

::: info Nuovo modello!
🐋 **DeepSeek V3**
:::

Inoltre:

🛣 **Instradamento per modalità** – Mammouth determina automaticamente se usare un modello di testo, immagini o Web.

🎨 **Pagina della nuova conversazione riprogettata:**
- sugli schermi piccoli, i modelli sono nascosti per evitare ingombro;
- trascina i modelli per ordinarli e scegliere quello predefinito.

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/demo-drag-and-drop.mp4" type="video/mp4">
  Il browser non supporta il tag video.
</video>
</div>

## 7 gennaio 2025

::: info Mammouth per i team
⭐ **Interfaccia di amministrazione** – invita i membri del team.

⭐ **Fatturazione centralizzata**
:::

Inoltre:

🖋️ **Blog Mammouth** – proprio questo sito.

🏗️ **Accesso diretto alle impostazioni dell'account**, senza passare dai link email di Stripe.

## 24 dicembre 2024

::: info Aggiornamenti dei modelli
⭐ **o1** – non più in preview.

⭐ **Grok 2** – non più in beta.
:::

Inoltre:

🎨 **Nuovo design della pagina della conversazione.**

🏗️ **Aggiunto il pulsante per copiare l'output.**

## 17 dicembre 2024

::: info Aggiornamenti dei modelli
⭐ **Llama 3.3 70b**, fornito da Groq.

⭐ **Gemini 2.0 Flash**, versione sperimentale.
:::

Inoltre:

🦣 **Crea più Mammouth personalizzati** – fino a 8 invece di 4.

🪲 **Risolti alcuni bug che si verificavano quando:**
- si provava a visualizzare una matrice matematica in LaTeX;
- si usava o1 con un Mammouth personalizzato;
- si caricavano documenti con alfabeti non latini, come il persiano.

## 10 dicembre 2024

::: info Nuova funzionalità
⭐ **Condividi la conversazione tramite un link**
:::

Inoltre:

🏗️ **Copia e incolla dell'output**, mantenendo solo la formattazione pertinente.

🎨 **La barra laterale può essere compressa.**

🎨 **Nuovo menu dell'account con:**
- accesso ai Mammouth personalizzati;
- un link diretto a queste note di rilascio;
- un link al tutorial sulle proporzioni delle immagini e sui Mammouth personalizzati.

## 4 dicembre 2024

::: info Modelli di immagini
🪄 **Crea un'immagine a partire da un'altra** – con FLUX Redux.

🪄 **Cambia la texture dell'immagine** – con FLUX Depth.

> [Come usare Image to Image](/docs/how-to-use-image-to-image/)
:::

Inoltre:

📷 **Carica foto scattate con la fotocamera del telefono e immagini più grandi.**

⚡ **L'app funziona molto più velocemente quando passi da una conversazione all'altra.**

🎨 **Design migliorato per il caricamento e l'invio delle immagini.**

## 27 novembre 2024

::: info Nuovo modello!
⭐ **Grok 2** – nuovo marchio.
:::

## 20 novembre 2024

::: info Aggiornamenti dei modelli
⭐ **Mistral Large 2** – aggiornamento di novembre.

⭐ **GPT-o1 ora supporta lo streaming.**
:::

Inoltre:

✏️ **Modifica l'ultimo prompt.**

⏹️ **Interrompi la generazione del messaggio.**

🎨 **Aggiunta una freccia nel campo di input.**

📁 **Sono supportati i file `.srt`.**

## 15 novembre 2024

::: info Nuova dimensione del contesto
⭐ **Lunghezza massima dell'input: 300.000 caratteri**, invece di 10.000.
:::

Inoltre:

⚖️ È stato aggiunto un limite per i messaggi di input lunghi.  
> Vedi i [dettagli](https://mammouth.ai/pricing).

🏗️ Puoi scorrere tutta la cronologia delle conversazioni nella barra laterale.

🏗️ Quando apri una chat, il cursore si posiziona sull'ultimo messaggio.

🏗️ Dopo l'invio di un nuovo prompt, la chat scorre automaticamente verso l'alto.

🏗️ Incolla un file dagli appunti.

🎨 Nuovo font nativo.

## 24 ottobre 2024

::: info Modelli Web
🌐 **Ricerca Web** – nuova categoria.

⭐ **OpenPerplex** – nuovo marchio.
:::

Inoltre:

⭐ **Claude 3.5 Sonnet** – nuovo aggiornamento del modello.

⭐ **Stable Diffusion 3.5 Large** – aggiornamento del modello.

⭐ **GPT-o1 ora è conversazionale.**

🏗️ **Incolla immagini dagli appunti.**

## 19 ottobre 2024

🎨 **Formattazione dell'output**

- visualizzazione delle tabelle in Markdown;
- formattazione di spaziatura e dimensioni dei titoli;
- maggiore spazio tra i paragrafi.

**∑ Visualizzazione delle formule matematiche** in LaTeX.

## 10 ottobre 2024

::: info File
📂 **Xlsx, Xls, CSV** – nuove estensioni disponibili per il caricamento.

📂 **Pptx, Ppt** – nuove estensioni disponibili per il caricamento.
:::

🔗 **URL nel prompt**: gli LLM possono esaminare una pagina Web quando viene fornito un URL.

**🦣 Ogni Mammouth personalizzato ha il proprio modello predefinito** e un proprio ordine di visualizzazione dei modelli prima di premere Invio.

**✍️ Il prompt viene salvato come bozza** e resta disponibile quando cambi conversazione o aggiorni la pagina, fino al suo invio.

## 4 agosto 2025

### ⭐ Nuovi modelli

**Nuovi modelli di punta**
- o3
- Magistral

**Nuovi modelli di immagini**
- Imagen 4.0 (di Gemini)
- Grok Images

**Nuovi modelli leggeri, rapidi e senza limiti**
- Mistral Small 32B
- Llama 4 Scout
- GPT-4.1-mini
- Grok-3-mini
- Gemini 2.5 Flash Lite

### ↪️ Reinviare messaggi di una conversazione

Ora puoi inviare di nuovo a un altro modello qualsiasi messaggio utente della conversazione, non solo il primo. La conversazione prosegue come un ramo separato.

### ✨ Conversazioni multimodello

Le conversazioni sono associate a un marchio anziché a un singolo modello: puoi passare da un modello di testo a uno di immagini o di ragionamento nella stessa conversazione.

### Inoltre

- Al raggiungimento di una quota, la conversazione continua con il modello illimitato del marchio: non serve iniziarne una nuova.
- Il logo di Grok è stato aggiornato, passando dal logo xAI al logo Grok.
- È possibile eliminare il messaggio precedente di una conversazione e tornare al messaggio n-2, continuando fino al primo.
- Nella pagina di errore 404 e nelle altre pagine di errore compare un mammut.

## 24 luglio 2025

### 🌟 Grok 4

### 📂 Documenti: analisi più rapida e più opzioni

- **Velocità:** l'analisi dei documenti è tre volte più rapida.
- I PDF scansionati e gli altri PDF composti da immagini vengono analizzati con Mistral OCR.
- Sono state aggiunte circa 80 estensioni: sono supportate [oltre 200 estensioni di file](https://info.mammouth.ai/docs/supported-file-extensions/).

### 📱 Installazione rapida dell'app

- L'app si installa con un clic dal menu del pannello laterale sinistro, in tutti i browser tranne Firefox e Safari.

### 🌍 Nuove lingue

🇵🇱 Mamut mówi teraz po polsku

🇷🇴 Mamutul vorbește acum românește

🇵🇹 O mamute fala agora português

🇦🇩 El mamut parla ara català

## 3 luglio 2025

### 🌟 Midjourney v7

### 🧷 API Mammouth

- **Crediti inclusi nell'abbonamento per tutti gli abbonati:** 2 $/4 $/10 $ al mese per Starter/Standard/Expert.
- **Compatibile con OpenAI:** può essere utilizzata in [n8n](https://public.mammouth.ai/How-to-use-Mammouth-in-n8n-226cf297c1ca80ab9f5dd999410884ee?pvs=74), Cline e altri strumenti con i plugin OpenAI.
- Sono disponibili 23 modelli di testo.
- [**Consulta la documentazione**](https://info.mammouth.ai/docs/api-quick-start/)

### 🧮 Visualizzazione delle quote e dell'utilizzo

- Puoi consultare le quote in qualsiasi momento dalle impostazioni dell'account.
- Puoi nascondere il banner delle quote nel pannello laterale.

### 📂 Documenti e cronologia

- Nelle conversazioni con documenti puoi disattivare i documenti della cronologia o degli assistenti, concentrarti sull'ultimo file caricato o restare sotto il limite di 32 MB.

![Gestione dei file nel prompt](/docs/release-notes/file_management_in_prompt.png)

- Nuova estensione di file: `.doc` (anche se è un'estensione MS Office ormai datata).

### 👷 Errori del server e documenti problematici

Sono stati corretti numerosi errori sporadici nelle risposte dell'IA: errori di Claude con immagini caricate, errori con documenti che superavano complessivamente 32 MB, documenti protetti da password, endpoint API non funzionanti e documenti eliminati o problematici che bloccavano le conversazioni reinviate.

### Altre funzionalità

- È possibile pagare con PayPal.
- È possibile accedere con Google e password usando lo stesso indirizzo email.
- Le conversazioni reinviate sono raggruppate nel pannello laterale.

![Conversazioni a fisarmonica](/docs/release-notes/Accordions_GIF.gif)

## 6 giugno 2025

### 🌟 Flux Kontext e DeepSeek R1

- **FLUX Kontext Pro** sostituisce FLUX Pro e Retexture.
- **DeepSeek R1 28.05** aggiorna DeepSeek R1.

### 🗃️ Generazione di file

- **Genera CSV, DOCX, PDF e altro** con tutti gli LLM.
- **Genera grafici come immagini** con tutti gli LLM.
- [Guarda l'esempio](https://mammouth.ai/shared/7fe819ad-5b61-4111-8f80-ab0521bbe848).

### 📱 App mobile riprogettata

- È stata aggiunta la **conversione della voce in testo** per dettare i prompt.
- **Input più fluido:** risolte le sovrapposizioni tra tastiera e modelli nella pagina della nuova conversazione.
- Corretti vari problemi minori dell'interfaccia (margini, bordi, popup e sovrapposizioni) per un'esperienza più intuitiva.

## 23 maggio 2025

### 🌟 Mistral 3 e Claude 4

- **Mistral Medium 3** sostituisce Mistral 24.11.
- **Claude Sonnet 4** sostituisce Claude 3.7.

### 🧠 Modifica intelligente delle immagini in conversazione

- I modelli di immagini comprendono le richieste di modifica basate sul messaggio precedente.
- Puoi vedere il prompt finale inviato all'IA dietro l'icona 🪄.

### ⚙️ [Impostazioni dell'account](https://mammouth.ai/app/account/settings) – pagina ridisegnata

- Puoi eliminare tutte le conversazioni in una volta.
- Puoi eliminare il tuo account.
- Nelle [impostazioni del team](https://mammouth.ai/app/account/team) gli indirizzi email degli utenti sono ordinati per dominio e poi per nome.

:::info Inoltre

⚡ **Navigazione più fluida tra le conversazioni** – caricamento progressivo dei contenuti con scheletro.

🖋️ **Modifica dell'ultimo messaggio** – ora puoi rimuovere il documento allegato quando modifichi l'ultimo messaggio.

🔏 **[Informativa sulla privacy](../privacy-policy/) aggiornata**

:::

## 9 maggio 2025

::: info Aggiornamenti dei modelli
🌟 **Perplexity Sonar Pro** è stato aggiunto.

🌟 **Gemini 2.5 Flash**
:::

Inoltre:

⚡ **Multi-prompting** – è possibile generare più risposte IA contemporaneamente.

🧠 **Assegnazione automatica dei nomi alle conversazioni**

🎨 **Il messaggio di input mantiene l'indentazione**

## 25 aprile 2025

::: info Aggiornamento dei modelli
🌟 **GPT Images** sostituisce DALL-E.
:::

Inoltre:

🔍 Ricerca testuale nella cronologia delle conversazioni.  
Premi CTRL+K o fai clic sull'icona di ricerca.

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/textual_search_record_2.mp4" type="video/mp4">
  Il browser non supporta il tag video.
</video>
</div>

## 17 aprile 2025

::: info Aggiornamenti dei modelli
🌟 **Gemini 2.5 Pro** sostituisce Gemini 2.0.

🌟 **Grok 3** sostituisce Grok 2.

🌟 **GPT-4.1** sostituisce GPT-4o.
:::

::: info Nuovi strumenti di fotoritocco
🖌️ **Rimozione dello sfondo** – carica una foto e l'IA ne rimuoverà lo sfondo.

🖌️ **Miglioramento della qualità** – l'IA aumenterà la qualità dell'immagine.
:::

::: info Contesto dei documenti ampliato
📁 **Lunghezza massima dell'input: 4.000.000 di caratteri**, invece di 1.000.000.

📁 **Massimo 20 file per conversazione**, invece di 10.
:::

Inoltre:

📁 **Più estensioni supportate:** `.fortran`, `.twig`, `.urdf`, `.hcl`, `.tsv`, `.geojson`, `.ass`, `.tf`, `.ps1`, `.scss`, `.ino`, `.pyw`, `.odt`.

🧮 **I file degli assistenti consumano meno quote:** non vengono conteggiati a ogni prompt.

**Altri miglioramenti alla qualità del prodotto:**

🦋 **Multitasking** – cambiando scheda durante la generazione, lo streaming continua.

## 7 aprile 2025

::: info Nuovi modelli
🌐🔭 **Perplexity Deep Research**

🌟✈️ **Llama 4.0 400B Maverick** sostituisce Llama 3.3 70B.
:::

🧮 **GPT-4o-mini per i documenti dopo aver raggiunto la quota** – puoi continuare a caricare documenti con GPT-4o-mini.

**Inoltre, miglioramenti del prodotto:**

🦋 **Spiegazione delle immagini non elaborate** – l'IA fornisce dettagli sul motivo per cui non è stato possibile elaborare un'immagine e su come risolvere il problema.

🦊 **Firefox è tornato:** sono stati risolti i problemi di esperienza utente.

🎨 **I collegamenti generati dall'IA si aprono in una nuova scheda**, senza interrompere lo streaming.

## 1 aprile 2025

::: info GPT e Gemini sul Web
🌐 **GPT-4o e Gemini** vengono indirizzati alla ricerca Web quando è pertinente.

🌐 **Progetti con Mammouth** – migliorano e sostituiscono gli assistenti.
:::

🐳 **DeepSeek V3-0324** sostituisce la versione di gennaio.

💾 **Memoria della conversazione:** ampliata per offrire un contesto migliore.

📍 **Conversazioni fissate:** i nuovi messaggi fissano la chat in cima all'elenco.

🌙 **Modalità scura automatica** quando il sistema è impostato sulla modalità scura.

🇪🇸 **El Mammouth habla español**

🇩🇪 **Das Mammouth spricht jetzt Deutsch**

## 18 marzo 2025

::: info GRANDE RINNOVAMENTO DEL DESIGN
🎨 **Interfaccia utente modernizzata** – riprogettazione complessiva dell'esperienza e dell'interfaccia.

📂 **Progetti con Mammouth** – migliorano e sostituiscono gli assistenti.
:::

### 🎨 **Interfaccia utente modernizzata**

✨ **Pulsanti dei modelli** – speriamo che ti piacciano quanto piacciono a noi.

🌙 **Modalità scura** – tutti i colori della modalità scura sono stati aggiornati.

🎨 **Colore della barra laterale** – ora è la chat a risaltare, non la barra laterale.

📝 **Input di testo:**
  > - Filtra i modelli per categoria (Web, testo, ragionamento, immagini).
  > - Trascina e rilascia i documenti.
  > - Caricamento dei documenti rinnovato, con colori per estensione.
  > - Icona nera a forma d'onda per la chat vocale.

🗨️ **Pagina della chat riprogettata per gli schermi grandi:**
  > - Intestazione: rimossa la riga *---messages---* e aggiornati i pulsanti.
  > - Barra di scorrimento spostata all'estrema destra.
  > - Larghezza massima aumentata da 768 px a 980 px.

### 📂 **Organizza i progetti con i Mammouth**

- **Accedi ai Mammouth dalla barra laterale** con un clic sui preferiti.
- **Sposta le conversazioni da un Mammouth all'altro.**
- **Modifica file e istruzioni dalla pagina del prompt.**

--> **Gli assistenti sono morti, lunga vita ai Mammouth 🦣🦣🦣!**

**Inoltre**

🖼️ **Pulsanti Midjourney**: puoi usare variazione e ingrandimento anche sui messaggi precedenti.

🗃️ **Errori dei documenti**: risolto il problema per cui l'IA talvolta ignorava i file caricati.

✴️ **Logo Claude aggiornato**, sostituendo il logo Anthropic.

## 5 marzo 2025

::: info Modalità vocale e nuovo Claude
🎙️ **Chat vocale** – modalità vocale avanzata di GPT.

⭐️ **Claude 3.7 Sonnet** sostituisce Claude 3.5.
:::

Inoltre:

🗃️ **Carica file nei tuoi Mammouth personalizzati.**

✨ **Abbonamenti annuali disponibili** – puoi cambiare piano dalle [impostazioni dell'account](https://mammouth.ai/app/account/settings/), selezionando *Gestisci abbonamento* e poi *Cambia abbonamento*.

## 17 febbraio 2025

::: info Più contesto!
⭐ **Lunghezza massima dell'input: 1.000.000 di caratteri**, invece di 300.000.
:::

Inoltre:

🗃️ **Massimo 10 documenti per chat**, invece di 3.

🦣 **Lunghezza massima delle istruzioni personalizzate Mammouth: 8.000 caratteri**, invece di 2.500.

🇫🇷 **Mammouth finalmente parla francese!**

🇮🇹 **Mammouth ora parla italiano!**

## 3 febbraio 2025

::: info Nuovi modelli di ragionamento!
⭐ **DeepSeek R1**

⭐ **OpenAI o3-mini** sostituisce o1 e o1-mini.
:::

Inoltre:

🧮 **Più quota giornaliera di ragionamento per o3 e R1** – per ora, come quella del testo.

📣 **Consigli Mammouth** – [6 consigli da conoscere su Mammouth](../six-useful-tips-about-mammouth/).

## 28 gennaio 2025

::: info Nuovo generatore di immagini
⭐ **Recraft V3**

⭐ **Recraft-svg** – primo generatore SVG.

> Perché abbiamo aggiunto Recraft? [Scoprilo qui](https://artificialanalysis.ai/text-to-image/arena?tab=Leaderboard)
:::

Inoltre:

🖼️ **Stable Diffusion comprende tutte le lingue.**

🏗️ **Gestione degli errori sconosciuti** – maggiori informazioni sugli errori dei prompt.

🧮 **Dettagli delle quote** – controlla quando si azzerano le quote mensili per immagini e documenti.  
*Nota: il conteggio delle quote è visibile solo quando supera il 50%.*

∑ **Equazioni matematiche con un design più gradevole**, in LaTeX.

## 14 gennaio 2025

::: info Nuovo modello!
🐋 **DeepSeek V3**
:::

Inoltre:

🛣 **Instradamento per modalità** – Mammouth determina automaticamente se usare un modello di testo, immagini o Web.

🎨 **Pagina della nuova conversazione riprogettata:**
- sugli schermi piccoli, i modelli sono nascosti per evitare ingombro;
- trascina i modelli per ordinarli e scegliere quello predefinito.

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/demo-drag-and-drop.mp4" type="video/mp4">
  Il browser non supporta il tag video.
</video>
</div>

## 7 gennaio 2025

::: info Mammouth per i team
⭐ **Interfaccia di amministrazione** – invita i membri del team.

⭐ **Fatturazione centralizzata**
:::

Inoltre:

🖋️ **Blog Mammouth** – proprio questo sito.

🏗️ **Accesso diretto alle impostazioni dell'account**, senza passare dai link email di Stripe.

## 24 dicembre 2024

::: info Aggiornamenti dei modelli
⭐ **o1** – non più in preview.

⭐ **Grok 2** – non più in beta.
:::

Inoltre:

🎨 **Nuovo design della pagina della conversazione.**

🏗️ **Aggiunto il pulsante per copiare l'output.**

## 17 dicembre 2024

::: info Aggiornamenti dei modelli
⭐ **Llama 3.3 70b**, fornito da Groq.

⭐ **Gemini 2.0 Flash**, versione sperimentale.
:::

Inoltre:

🦣 **Crea più Mammouth personalizzati** – fino a 8 invece di 4.

🪲 **Risolti alcuni bug che si verificavano quando:**
- si provava a visualizzare una matrice matematica in LaTeX;
- si usava o1 con un Mammouth personalizzato;
- si caricavano documenti con alfabeti non latini, come il persiano.

## 10 dicembre 2024

::: info Nuova funzionalità
⭐ **Condividi la conversazione tramite un link**
:::

Inoltre:

🏗️ **Copia e incolla dell'output**, mantenendo solo la formattazione pertinente.

🎨 **La barra laterale può essere compressa.**

🎨 **Nuovo menu dell'account con:**
- accesso ai Mammouth personalizzati;
- un link diretto a queste note di rilascio;
- un link al tutorial sulle proporzioni delle immagini e sui Mammouth personalizzati.

## 4 dicembre 2024

::: info Modelli di immagini
🪄 **Crea un'immagine a partire da un'altra** – con FLUX Redux.

🪄 **Cambia la texture dell'immagine** – con FLUX Depth.

> [Come usare Image to Image](/docs/how-to-use-image-to-image/)
:::

Inoltre:

📷 **Carica foto scattate con la fotocamera del telefono e immagini più grandi.**

⚡ **L'app funziona molto più velocemente quando passi da una conversazione all'altra.**

🎨 **Design migliorato per il caricamento e l'invio delle immagini.**

## 27 novembre 2024

::: info Nuovo modello!
⭐ **Grok 2** – nuovo marchio.
:::

## 20 novembre 2024

::: info Aggiornamenti dei modelli
⭐ **Mistral Large 2** – aggiornamento di novembre.

⭐ **GPT-o1 ora supporta lo streaming.**
:::

Inoltre:

✏️ **Modifica l'ultimo prompt.**

⏹️ **Interrompi la generazione del messaggio.**

🎨 **Aggiunta una freccia nel campo di input.**

📁 **Sono supportati i file `.srt`.**

## 15 novembre 2024

::: info Nuova dimensione del contesto
⭐ **Lunghezza massima dell'input: 300.000 caratteri**, invece di 10.000.
:::

Inoltre:

⚖️ È stato aggiunto un limite per i messaggi di input lunghi.  
> Vedi i [dettagli](https://mammouth.ai/pricing).

🏗️ Puoi scorrere tutta la cronologia delle conversazioni nella barra laterale.

🏗️ Quando apri una chat, il cursore si posiziona sull'ultimo messaggio.

🏗️ Dopo l'invio di un nuovo prompt, la chat scorre automaticamente verso l'alto.

🏗️ Incolla un file dagli appunti.

🎨 Nuovo font nativo.

## 24 ottobre 2024

::: info Modelli Web
🌐 **Ricerca Web** – nuova categoria.

⭐ **OpenPerplex** – nuovo marchio.
:::

Inoltre:

⭐ **Claude 3.5 Sonnet** – nuovo aggiornamento del modello.

⭐ **Stable Diffusion 3.5 Large** – aggiornamento del modello.

⭐ **GPT-o1 ora è conversazionale.**

🏗️ **Incolla immagini dagli appunti.**

## 19 ottobre 2024

🎨 **Formattazione dell'output**

- visualizzazione delle tabelle in Markdown;
- formattazione di spaziatura e dimensioni dei titoli;
- maggiore spazio tra i paragrafi.

**∑ Visualizzazione delle formule matematiche** in LaTeX.

## 10 ottobre 2024

::: info File
📂 **Xlsx, Xls, CSV** – nuove estensioni disponibili per il caricamento.

📂 **Pptx, Ppt** – nuove estensioni disponibili per il caricamento.
:::

🔗 **URL nel prompt**: gli LLM possono esaminare una pagina Web quando viene fornito un URL.
