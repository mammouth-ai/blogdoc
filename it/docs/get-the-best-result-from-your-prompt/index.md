# Ottieni il risultato migliore dal tuo prompt

## Non si può sapere quale IA risponderà meglio al tuo prompt senza confrontarle

Le classifiche attuali delle prestazioni degli LLM, come quelle disponibili su [lmsys.org](http://lmsys.org) o [livebench.ai](http://livebench.ai), stimano la probabilità che un modello superi un altro in categorie specifiche. In particolare, il modello in cima alla classifica ha solo una probabilità di poco superiore al 50% di superare quello al secondo posto.

Anche con algoritmi sofisticati che considerano le classifiche per categoria (ad esempio ragionamento, programmazione, scrittura, lingue e così via), le differenze di prestazioni non sono significative.

Di conseguenza, l'approccio migliore consiste nel riproporre la richiesta ad altri modelli e confrontare le risposte:

- Invia lo stesso prompt a un secondo modello.
- Avere più proposte dell'IA permette di selezionare il risultato migliore.

## Dati empirici da Mammouth

### **Dati sull'invio a più modelli raccolti da Mammouth AI**

| **Numero di modelli di testo interrogati per prompt** | **% del totale dei prompt** |
| ----------------------------------------------------- | --------------------------- |
| >= 4                                                  | 7 %                         |
| >= 3                                                  | 12 %                        |
| >= 2                                                  | 34 %                        |
| = 1                                                   | 66 %                        |

| **Numero di modelli di immagini interrogati per prompt** | **% del totale dei prompt** |
| -------------------------------------------------------- | --------------------------- |
| >= 3                                                     | 19 %                        |
| >= 2                                                     | 41 %                        |
| = 1                                                      | 59 %                        |

### Per il 66% delle richieste di testo giornaliere, gli utenti interrogano un solo modello

- Il 66% delle richieste degli utenti non richiede di inviare il prompt ad altri modelli (in base ai dati di [Mammouth.ai](http://Mammouth.ai)).

### Per il 34% delle richieste di testo giornaliere, gli utenti interrogano più di un modello

- Di conseguenza, il 34% delle richieste totali beneficia del confronto tra modelli. Si tratta di richieste di alto valore, più creative e complesse.
  - Il 24% dei prompt totali viene inviato esattamente a 1 modello aggiuntivo.
  - Il 12% dei prompt totali viene inviato a 2 o più modelli aggiuntivi.
  - Il 7% dei prompt totali viene inviato a più di 3 modelli aggiuntivi.

## Il confronto tra modelli è ancora più diffuso con gli strumenti di generazione delle immagini

- Il 41% delle richieste di immagini viene inviato ad almeno un altro modello.
- Il 19% di queste richieste viene inviato a più di due modelli.

## Più i modelli di IA diventano capaci, più la definizione del risultato migliore diventa soggettiva

Ci sono due ragioni per preferire il risultato di un modello a quello di un altro:

- **Ragione oggettiva**: l'utente preferisce il modello che rispetta le istruzioni del prompt e fornisce la risposta corretta.
- **Ragione soggettiva**: quando due IA forniscono una risposta oggettivamente corretta, l'utente può preferire una delle due per motivi soggettivi.

→ Con il miglioramento delle prestazioni dell'IA, la differenza si sposta gradualmente dall'oggettivo al soggettivo. Per questo confrontare più modelli diventa ancora più utile. Da qui nasce l'[Indice di popolarità degli LLM](../introducing-llm-popularity-index/).
