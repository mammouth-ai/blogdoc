# Sistema delle quote e limiti di utilizzo

## Come funzionano le quote?

I limiti di utilizzo di Mammouth sono definiti **per sessione**. Le quote si ripristinano completamente ogni 3 ore.

I diversi piani di abbonamento (Starter, Standard ed Expert) includono quote di utilizzo differenti.

---

## Cosa consuma quote?

Il consumo durante una sessione dipende da diversi fattori:

| Fattore | Descrizione |
| --- | --- |
| **Lunghezza dei messaggi** | Più i messaggi sono lunghi, maggiore è il consumo. Anche la lunghezza delle risposte incide. |
| **Dimensione dei documenti** | I file e le immagini aggiunti alla conversazione influiscono sul consumo. |
| **Lunghezza della conversazione** | Più una conversazione si allunga, più ogni scambio diventa costoso (il contesto accumulato viene reinviato a ogni messaggio). |
| **Uso degli strumenti** | Strumenti come la ricerca Web o la generazione di documenti consumano quote aggiuntive. |
| **Modello scelto** | I modelli più potenti consumano più quote. |
| **Istruzioni del Mammouth** | Le istruzioni del Mammouth vengono incluse in ogni richiesta e incidono sul consumo. |

---

## Il principio delle soglie per modello

Mammouth è progettato affinché **il tuo lavoro non venga interrotto**. Quando raggiungi la quota di un modello, Mammouth passa automaticamente a un modello più leggero per gli scambi successivi.

**Esempio concreto:**

> Stai usando **Claude Opus** e raggiungi la soglia → subentra **Claude Sonnet** <br>
> Continui e raggiungi la soglia di **Claude Sonnet** → subentra **Claude Haiku**
>

Così puoi continuare a lavorare anche in caso di utilizzo intenso.

---

## Scegliere il piano giusto

Mammouth offre diversi piani, adatti a vari livelli di utilizzo:

| Piano | Quota | Per chi? |
| --- | --- | --- |
| 🌱 **Starter** | Riferimento | Uso quotidiano personale: l'80% degli utenti individuali preferisce questo piano. |
| ⚡ **Standard** | 3× Starter | Utenti assidui che desiderano più flessibilità senza preoccuparsi dei limiti per sessione: il 50% delle aziende preferisce questo piano. |
| 🚀 **Expert** | 10× Starter | Professionisti e utenti esperti con esigenze elevate e regolari. |

> 💡 Il rapporto tra quantità e prezzo migliora notevolmente con i piani superiori: Expert offre 10 volte la quota di Starter a sole 6 volte il prezzo.
>

---

## Limiti relativi ai documenti

### Dimensioni e volume degli input
- Massimo contenuto dei documenti per richiesta: 4.000.000 di caratteri (in totale per tutti i documenti elaborati)

### File supportati
- Sono supportati numerosi formati (documenti, fogli di calcolo, presentazioni, codice, immagini, audio, video e altro).  
[Consulta qui l'elenco dettagliato](/it/docs/supported-file-extensions/).

### Limiti dei file per conversazione
- Massimo 50 file
- Dimensione totale massima: 100 MB (per tutti i file)
- Dimensione massima per PDF: 100 MB
- Dimensione massima per immagine: 30 MB
- Dimensione massima per file non PDF (documenti, video, audio): 20 MB

### Casi particolari
- I PDF che contengono solo immagini (ad esempio PDF scansionati che richiedono OCR):
  - massimo 50 pagine
  - massimo 20 MB

> 💡 Comprimi o suddividi i file di grandi dimensioni prima di caricarli. Per i PDF superiori a 100 MB, carica invece il file in formato `docx` o `txt`.

---

## Consigli per ottimizzare il consumo

### 🎯 Sii preciso e conciso

Formula istruzioni chiare e dettagliate fin dal primo messaggio. Evita richieste vaghe che richiedono scambi di chiarimento: ogni messaggio aggiuntivo consuma quote.

### 💾 Usa i Mammouth personalizzati per conservare il contesto

Se vuoi utilizzare un documento o un'istruzione in più conversazioni o nel corso di una conversazione lunga, salvalo in un **Mammouth personalizzato**. Così eviterai di inviare ogni volta le stesse informazioni.

👉 [Scopri di più sui Mammouth personalizzati](/it/docs/mammouth-assistant-tutorial/)

### ✏️ Rileggi prima di inviare

Prima di inviare, prenditi un momento per verificare che il messaggio sia chiaro e completo. Un prompt ben formulato fin dall'inizio riduce il numero di messaggi necessari e preserva le quote.

> 💡 Se raggiungi regolarmente i limiti, valuta i piani Mammouth superiori, che offrono quote più ampie.
