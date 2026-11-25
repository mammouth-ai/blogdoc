# Come usare Mammouth in VS Code, JetBrains o Cursor con l'estensione Cline

Cline è un'estensione di assistente IA disponibile per VS Code, JetBrains e Cursor. Collegandola al tuo account Mammouth, puoi accedere a tutti i modelli della piattaforma direttamente dal tuo editor di codice.

## Requisiti

- Un account Mammouth AI con un abbonamento attivo o crediti disponibili
- VS Code, JetBrains o Cursor installato
- L'estensione Cline installata dal marketplace del tuo editor

## Configurare l'estensione

- **API Provider**: seleziona `OpenAI Compatible`
- **Base URL**: inserisci `https://api.mammouth.ai/v1`
- **API Key**: recupera la chiave dalla [dashboard Mammouth](https://mammouth.ai/app/account/settings/api) e incollala nel campo corrispondente.
- **Model ID**: scegli un modello dall'[elenco dei modelli disponibili](https://model-explorer.mammouth.ai/) e inseriscine l'identificativo nella configurazione.

![Configurazione di Cline](/docs/cline/cline_api_setup.png)

## Utilizzo

Ora puoi usare Cline con la tua chiave API Mammouth.

### Interfaccia e token

Nella parte superiore dell'interfaccia di Cline puoi vedere:
- Il numero di **token inviati** e **ricevuti**
- Il **totale gestito** dal modello selezionato
- Il **nome dell'attività**, che corrisponde al tuo primo prompt

### Monitorare i costi

Per monitorare le spese direttamente in Cline:

1. Copia i prezzi del tuo modello dall'[elenco dei modelli](https://model-explorer.mammouth.ai/).
2. Inseriscili nella sezione **Model Configuration** di Cline.

Per una panoramica dell'utilizzo dell'API, consulta la [dashboard Mammouth](https://mammouth.ai/app/account/settings/api).

### Altro
- Al momento la memorizzazione nella cache dei prompt non è supportata.
- Modifica `temperature` nelle impostazioni avanzate di Model Configuration in Cline per controllare la creatività (0.0 per risultati deterministici, fino a 2.0 per una maggiore creatività).

![Esempio di utilizzo di Cline](/docs/cline/cline_usage_example.png)
