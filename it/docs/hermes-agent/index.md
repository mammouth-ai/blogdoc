# Come usare l'API Mammouth in Hermes

## Requisiti

- Un'istanza di Hermes in esecuzione (per l'installazione consulta [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/))
- Un account Mammouth con accesso API attivato
- La tua chiave API Mammouth (puoi ottenerla da [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api))

## Passaggio 1 — Ottieni la chiave API Mammouth

1. Vai su [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api).
2. Genera una nuova chiave API.
3. Copiala e conservala in un luogo sicuro: ti servirà nel passaggio successivo.

## Passaggio 2 — Configura Hermes

1. Esegui `hermes model` per aprire la configurazione del modello.
2. Seleziona **Custom endpoint**.
3. Quando viene richiesto l'URL di base dell'API, inserisci `https://api.mammouth.ai/v1`.
4. Inserisci la chiave API Mammouth.
5. Seleziona uno dei modelli disponibili tramite l'API Mammouth. Scegli quello più adatto alle tue esigenze e consulta la documentazione di Hermes per i suggerimenti di configurazione. A seconda del modello e della configurazione scelti, Hermes può consumare un numero significativo di token.

## Passaggio 3 — Verifica la connessione

Esegui il comando seguente per verificare che Hermes sia connesso:

```bash
hermes status
```

L'output dovrebbe essere simile a questo:

```text
┌─────────────────────────────────────────────────────────┐
│                 ☤ Hermes Agent Status                  │
└─────────────────────────────────────────────────────────┘

  Model:        claude-opus-5
  Provider:     custom
  Providers:    Api.mammouth.ai
  Gateway:      ✓ running
  Platforms:    none configured
  Jobs:         0

  Run 'hermes status --full' for every section

```

## Monitorare l'utilizzo dell'API

Controlla il consumo dell'API dalla [dashboard Mammouth](https://mammouth.ai/app/account/settings/api).

## Vedi anche

- [Guida rapida all'API](/it/docs/api-quick-start/index.md) — documentazione generale dell'API Mammouth
- [Come usare Mammouth con Cline](/it/docs/cline/index.md) — configurazione simile per VS Code / Cursor
- [Documentazione del provider LiteLLM di Hermes](https://docs.openclaw.ai/providers/litellm)
