# How to connect OpenClaw to the Mammouth API

[OpenClaw](https://openclaw.ai) is a personal AI assistant platform that runs on your own infrastructure. It supports multiple LLM providers, including any LiteLLM-compatible gateway — which is exactly what the Mammouth API is built on.

This tutorial walks you through connecting your OpenClaw instance to `api.mammouth.ai` so your agent uses your Mammouth subscription to power its conversations.

## Prerequisites

- A running OpenClaw instance (see [openclaw.ai](https://openclaw.ai) for installation)
- A Mammouth account with API access enabled
- Your Mammouth API key (get it from [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api))

## Step 1 — Get your Mammouth API key

1. Go to [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)
2. Generate a new API key
3. Copy and store it somewhere safe — you'll need it in the next step

## Step 2 — Check available models

The Mammouth API exposes the list of available models at:

```
https://api.mammouth.ai/public/models
```

Pick the model IDs you want to use in your OpenClaw config. For example: `gpt-4.1`, `claude-opus-4-6`, etc.

## Step 3 — Configure OpenClaw

Open your OpenClaw config file (usually `~/.openclaw/config.json5` or via `openclaw config edit`) and add the Mammouth provider under `models.providers`:

```json5
{
  "models": {
    "providers": {
      "litellm": {
        "baseUrl": "https://api.mammouth.ai",
        "apiKey": "${MAMMOUTH_API_KEY}",
        "api": "openai-completions",
        "models": [
          {
            "id": "gpt-4.1",
            "name": "GPT-4.1 (Mammouth)",
            "reasoning": false,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 32768,
          },
          {
            "id": "claude-opus-4-6",
            "name": "Claude Opus 4.6 (Mammouth)",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 200000,
            "maxTokens": 64000,
          },
          {
            "id": "kimi-k2.5",
            "name": "Kimi K2.5 (Mammouth)",
            "reasoning": false,
            "input": ["text", "image"],
            "contextWindow": 262144,
            "maxTokens": 262144,
          },
        ],
      },
    },
  },
  "agents": {
    "defaults": {
      "model": { "primary": "litellm/gpt-4.1" },
    },
  },
}
```

> **Note:** The Mammouth API is fully OpenAI-compatible. OpenClaw connects to it via the `/v1/chat/completions` endpoint, exactly like any LiteLLM proxy.

## Step 4 — Set your API key as an environment variable

The config above references `${MAMMOUTH_API_KEY}`. Export it before starting OpenClaw:

```bash
export MAMMOUTH_API_KEY="your-mammouth-api-key-here"
openclaw
```

Or add it permanently to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
echo 'export MAMMOUTH_API_KEY="your-mammouth-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

## Step 5 — Verify the connection

Once OpenClaw is running, start a new session and ask something simple. If everything is wired up correctly, your agent will respond using the Mammouth API.

You can also confirm from the CLI:

```bash
openclaw status
```

Look for the active provider — it should show `litellm` pointing to `api.mammouth.ai`.

## Monitoring usage

Keep an eye on your API consumption from your Mammouth dashboard:

👉 [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)

You can also query the endpoint directly:

```bash
curl https://api.mammouth.ai/chat/completions \
  -H "Authorization: Bearer $MAMMOUTH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

## See also

- [API Quick Start](/api-quick-start) — general Mammouth API docs
- [How to use Mammouth with Cline](/cline) — similar setup for VS Code / Cursor
- [OpenClaw LiteLLM provider docs](https://docs.openclaw.ai/providers/litellm)
