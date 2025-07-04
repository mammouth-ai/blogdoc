# How to Use the Mammouth API with Cline

Mammouth AI provides a powerful API to access large language models (LLMs) through a simple and efficient interface. This guide explains how to configure and use the Mammouth API with **Cline**, enabling you to integrate advanced AI capabilities into your development environment seamlessly.

## What is the Mammouth API?

The Mammouth API provides access to Mammouth AI's chat completion models, compatible with standard API formats. It allows you to send conversational prompts and receive AI-generated responses, making it ideal for chatbots, assistants, content generation, and more.

## Getting Started: API Key

To use the Mammouth API, you need a Mammouth AI subscription and an API key:

1. Visit [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)
2. Create or retrieve your API key
3. Keep your API key secure and do not share it publicly

## Configuring Cline with Mammouth API

1. Ensure you have the Cline extension installed in your editor of choice (e.g., Visual Studio Code).
   - If you haven't installed Cline yet, you can find it in your editor's extension marketplace.
   - If you can't find Cline it may not be available in your editor yet. Check Cline's official website: [cline.bot/](https://cline.bot/).
2. Open the Cline settings in VSCode by navigating to Extensions > Cline > Extension Settings.
3. Set the API Provider to **LiteLLM**.
4. Use the following settings:
   - **Base URL**: `api.mammouth.ai`
   - **API Key**: Enter the API key you retrieved from your Mammouth AI account.
   - **Model ID**: Obtain the specific Model ID from [api.mammouth.ai/models](https://api.mammouth.ai/models) and input it in the configuration.

## Tips for Best Results

- Experiment with different models available in Mammouth AI for various use cases by checking the Model IDs at [api.mammouth.ai/models](https://api.mammouth.ai/models).
- Use the `temperature` parameter in Cline's Model Configuration advanced settings to control creativity (0.0 for deterministic, up to 2.0 for more creative).

## Conclusion

The Mammouth API offers a powerful and flexible way to access advanced language models. Combined with Cline as a VSCode extension, it provides a seamless experience for developers to harness AI capabilities directly within their coding environment.

Start exploring today by configuring Cline with the Mammouth API settings and integrating AI assistance into your VSCode workflows!

---

For more detailed API documentation, visit the [Mammouth AI API Quick Start Guide](https://mammouth.ai/docs/api-quick-start).
