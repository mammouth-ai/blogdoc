# Estensione Mammouth per VS Code

L’estensione **Mammouth** consente di usare i modelli IA disponibili nel proprio account Mammouth direttamente in **GitHub Copilot Chat**. Dopo aver effettuato l’accesso all’API Mammouth, aggiunge i modelli disponibili al selettore dei modelli di Copilot.

[Installa l’estensione dal Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai)

## Requisiti

- **Visual Studio Code 1.146.0 o versioni successive**
- **GitHub Copilot Chat** installato e attivato
- Una [chiave API Mammouth](https://mammouth.ai/app/account/settings/api) e crediti API

## Installazione e connessione

1. Apri la [pagina dell’estensione Mammouth nel Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai), quindi seleziona **Install**. Se richiesto, conferma l’apertura di VS Code.
2. In VS Code, apri la vista **Mammouth AI** usando la relativa icona nella barra delle attività.
3. Incolla la chiave API e seleziona **Connect**.
4. Seleziona **Inject into Copilot configuration**.
5. Apri Copilot Chat e scegli un modello dalla scheda **Mammouth** nel selettore dei modelli.

Quando diventano disponibili nuovi modelli nel tuo account, seleziona di nuovo **Inject into Copilot configuration** per aggiornare l’elenco.

## Scegliere il livello di ragionamento

Per i modelli che supportano più livelli di ragionamento, apri il selettore dei modelli di Copilot, seleziona la freccia accanto al modello e scegli un livello **Effort Level**. Un livello più alto può aiutare con le attività complesse, ma le risposte potrebbero richiedere più tempo e consumare più crediti.

## Personalizzare i modelli

Nella vista Mammouth, apri **Model settings** per gestire i modelli disponibili in Copilot. Per ogni modello puoi:

- includerlo in Copilot o nasconderlo;
- ridurne i limiti di contesto o di output;
- attivare o disattivare l’uso degli strumenti e l’input di immagini;
- scegliere i livelli di ragionamento disponibili.

Seleziona **Save and inject** per applicare le modifiche. Le preferenze vengono mantenute quando aggiorni l’elenco. **Reset** ripristina i valori comunicati da Mammouth. Attivare manualmente una funzionalità non supportata da un modello può causare errori nelle richieste.

## Visualizzare i dettagli dei modelli

Attiva **Show model details** nella vista Mammouth per visualizzare la dimensione del contesto, le funzionalità e i prezzi in crediti per milione di token. Espandi **API details** sotto un modello per consultare tutte le informazioni fornite da Mammouth. Questi dettagli sono disponibili nella vista dell’estensione perché il selettore dei modelli di Copilot non mostra i prezzi né più opzioni per la dimensione del contesto.

## Chiave API e configurazione

- La chiave API Mammouth viene conservata nell’archiviazione sicura di VS Code e non viene scritta in chiaro in un file.
- L’estensione aggiunge i modelli al gruppo **Mammouth** nel file di configurazione di Copilot `chatLanguageModels.json` relativo al profilo VS Code corrente. Gli altri modelli e provider Copilot non vengono modificati.
- Seleziona **How it works** per una breve spiegazione oppure **Open chatLanguageModels.json** per aprire il file di configurazione.
- **Disconnect** rimuove la chiave dalla vista Mammouth. I modelli già aggiunti a Copilot restano configurati. Per modificare o rimuovere la chiave associata, usa **Manage Language Models** in Copilot.

## Risoluzione dei problemi

- **Nessun modello Mammouth in Copilot**: verifica che GitHub Copilot Chat sia installato e attivato, quindi seleziona di nuovo **Inject into Copilot configuration**.
- **Chiave API non valida**: seleziona **Disconnect**, quindi connettiti di nuovo con una chiave valida dal tuo [account Mammouth](https://mammouth.ai/app/account/settings/api).
- **Un modello restituisce errori**: apri **Model settings** e ripristina le impostazioni, soprattutto se hai attivato manualmente gli strumenti o l’input di immagini.
