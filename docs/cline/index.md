# How to use Mammouth in VS Code, JetBrains or Cursor with the Cline Extension

Cline is an AI assistant extension available on VS Code, JetBrains, and Cursor. By connecting it to your Mammouth account, you get access to all the platform's models directly from your code editor.

## Prerequisite

- A Mammouth AI account with an active subscription or available credits
- VS Code, JetBrains, or Cursor installed
- The Cline extension installed from your editor's marketplace

## Setting up the extension

- **API Provider**: select `OpenAI Compatible`
- **Base URL**: enter `https://api.mammouth.ai/v1`
- **API Key**: retrieve your key from [your Mammouth dashboard](https://mammouth.ai/app/account/settings/api), then paste it into the corresponding field.
- **Model ID**: choose a model from [the available model list](https://model-explorer.mammouth.ai/) and enter its ID in the configuration

![Cline config setup](cline_api_setup.png)

## Usage

You can now use Cline with your Mammouth API Key.

### Interface and tokens

At the top of the Cline interface, you can see:
- The number of **tokens sent** and **received**
- The **total supported** by the selected model
- The **task name**, which corresponds to your first prompt

### Cost tracking

To track your spending directly in Cline:

1. Copy your model's pricing from [the models list](https://model-explorer.mammouth.ai/)
2. Enter it in the **Model Configuration** section of Cline

For an overall view of your API usage, visit [your Mammouth dashboard](https://mammouth.ai/app/account/settings/api).

### Other
- For now, prompt caching isn't supported.
- Use the `temperature` parameter in Cline's Model Configuration advanced settings to control creativity (0.0 for deterministic, up to 2.0 for more creative).

![Cline usage example](cline_usage_example.png)
