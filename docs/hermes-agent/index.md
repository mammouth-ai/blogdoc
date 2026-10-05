# How to use the Mammouth API in Hermes

## Prerequisites

- A running hermes instance (see [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/) for installation)
- A Mammouth account with API access enabled
- Your Mammouth API key (get it from [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api))

## Step 1 — Get your Mammouth API key

1. Go to [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)
2. Generate a new API key
3. Copy and store it somewhere safe — you'll need it in the next step

## Step 2 — Configure Hermes

If a provider is already configured, run `hermes model` to reopen the configuration and set up Mammouth.

1. In Hermes, select **Custom provider**.
2. When prompted for the API base URL, enter `https://api.mammouth.ai/v1`.
3. Enter your Mammouth API key.
4. Select a model from the models available through the Mammouth API. Choose one that fits your needs, and check the Hermes documentation for configuration advice. Hermes can use a significant number of tokens depending on your model and setup.

## Step 3 — Verify the connection

Run the following command to check that Hermes is connected:

```bash
hermes status
```

The output should look similar to this:

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

## Monitor your API usage

Check your API consumption in [your Mammouth dashboard](https://mammouth.ai/app/account/settings/api).

## See also

- [API Quick Start](/docs/api-quick-start/index.md) — general Mammouth API docs
- [How to use Mammouth with Cline](/docs/cline/index.md) — similar setup for VS Code / Cursor
- [OpenClaw LiteLLM provider docs](https://docs.openclaw.ai/providers/litellm)
