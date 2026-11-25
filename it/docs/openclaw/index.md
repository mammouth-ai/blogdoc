# Come usare l'API Mammouth in OpenClaw

## Requisiti

- Un'istanza OpenClaw in esecuzione (consulta [openclaw.ai](https://openclaw.ai) per l'installazione)
- Un account Mammouth con accesso API attivato
- La tua chiave API Mammouth (puoi ottenerla da [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api))

## Passaggio 1 — Ottieni la chiave API Mammouth

1. Vai su [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api).
2. Genera una nuova chiave API.
3. Copiala e conservala in un luogo sicuro: ti servirà nel passaggio successivo.

## Passaggio 2 — Verifica i modelli disponibili

L'API Mammouth espone l'elenco dei modelli disponibili all'indirizzo `https://api.mammouth.ai/public/models`.

Scegli gli ID dei modelli da usare nella configurazione di OpenClaw. Per esempio: `gpt-4.1`, `kimi-k2.5` e così via.

## Passaggio 3 — Configura OpenClaw

La configurazione di OpenClaw può variare, ma consigliamo di definire una variabile d'ambiente.

La configurazione seguente fa riferimento a `${MAMMOUTH_API_KEY}`.

**Esporta la variabile se esegui OpenClaw direttamente sul tuo computer.**

```bash
export MAMMOUTH_API_KEY="your-mammouth-api-key-here"
openclaw
```

Oppure aggiungila in modo permanente al profilo della shell (`~/.bashrc`, `~/.zshrc` e così via):

```bash
echo 'export MAMMOUTH_API_KEY="your-mammouth-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

**In alternativa, rendila disponibile nell'ambiente Docker, ad esempio con Docker Compose:**

```yaml
environment:
  - MAMMOUTH_API_KEY=${MAMMOUTH_API_KEY:-}
```

**Modifica quindi il file di configurazione di OpenClaw** (in genere `~/.openclaw/config.json5` oppure tramite `openclaw config edit`) in modo che contenga:

```json5
{
  models: {
    providers: {
      litellm: {
        baseUrl: "https://api.mammouth.ai",
        apiKey: "${MAMMOUTH_API_KEY}",
        api: "openai-completions",
        models: [
          {
            id: "gpt-4.1",
            name: "GPT-4.1 (Mammouth)",
            reasoning: false,
            input: ["text", "image"],
            contextWindow: 1000000,
            maxTokens: 32768,
          },
          {
            id: "claude-sonnet-4-6",
            name: "Claude Sonnet 4.6 (Mammouth)",
            reasoning: true,
            input: ["text", "image"],
            contextWindow: 200000,
            maxTokens: 64000,
          },
          {
            id: "kimi-k2.5",
            name: "Kimi K2.5 (Mammouth)",
            reasoning: false,
            input: ["text", "image"],
            contextWindow: 262144,
            maxTokens: 262144,
          },
        ],
      },
    },
  },
  agents: {
    defaults: {
      model: { primary: "litellm/kimi-k2.5" }, // scegli qui il modello predefinito
    },
    models: {
      "anthropic/claude-sonnet-4-6": {},
      "litellm/kimi-k2.5": {},          # importante: aggiungi i modelli qui per poter passare dinamicamente a un altro con il comando /models nell'app di chat
      "litellm/gpt-4.1": {},            # importante
      "litellm/claude-sonnet-4-6": {},  # importante
    },
  },
}
```

## Passaggio 4 — Verifica la connessione

Quando OpenClaw è in esecuzione, avvia una nuova sessione e fai una domanda semplice. Se la configurazione è corretta, l'agente risponderà tramite l'API Mammouth.

Usa `/models` nella chat per visualizzare i diversi provider e i relativi modelli.

Esempio (Anthropic come predefinito, con provider compatibile LiteLLM di Mammouth configurato):
![Comando /models di OpenClaw in Discord](/docs/openclaw/image.png)

Puoi anche verificare la connessione dalla CLI:

```bash
openclaw status
```

## Monitorare l'utilizzo

Monitora il consumo dell'API dalla dashboard Mammouth:

👉 [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)

## Vedi anche

- [Guida rapida all'API](/it/docs/api-quick-start/index.md) — documentazione generale dell'API Mammouth
- [Come usare Mammouth con Cline](/it/docs/cline/index.md) — configurazione simile per VS Code / Cursor
- [Documentazione del provider LiteLLM di OpenClaw](https://docs.openclaw.ai/providers/litellm)
