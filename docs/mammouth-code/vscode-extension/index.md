# Mammouth Extension for VS Code

The **Mammouth** extension lets you use the AI models available on Mammouth API directly in **GitHub Copilot Chat**. After connecting to the Mammouth API, it adds your available models to Copilot’s model picker.

[Install the extension from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai)

## Requirements

- **Visual Studio Code 1.146.0 or later**
- **GitHub Copilot Chat** installed and enabled
- A [Mammouth API key](https://mammouth.ai/app/account/settings/api) and API credits

## Install and connect

1. Open the [Mammouth extension page on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai), then select **Install**. If prompted, confirm that you want to open VS Code.
2. In VS Code, open the **Mammouth AI** view using its icon in the Activity Bar.
3. Paste your API key and select **Connect**.
4. Select **Inject into Copilot configuration**.
5. Open Copilot Chat and choose a model from the **Mammouth** tab in the model picker.

When new models become available in your account, select **Inject into Copilot configuration** again to refresh the list.

## Choose a reasoning effort level

For models that support multiple reasoning levels, open the Copilot model picker, select the arrow next to the model, and choose an **Effort Level**. A higher level can help with complex tasks, but responses may take longer and use more credits.

## Customize models

In the Mammouth view, open **Model settings** to manage which models are offered in Copilot. For each model, you can:

- include it in Copilot or hide it;
- lower its context or output limits;
- enable or disable tool calling and image input;
- choose which reasoning effort levels are available.

Select **Save and inject** to apply your choices. They are retained when the list is refreshed. **Reset** restores the settings reported by Mammouth. Manually enabling a capability that a model does not support may cause requests to fail.

## View model details

Enable **Show model details** in the Mammouth view to display context size, capabilities, and prices in credits per million tokens. Expand **API details** under a model to see the full information provided by Mammouth. These details are shown in the extension view because Copilot’s model picker cannot display prices or multiple context-size options.

## API key and configuration

- Your Mammouth API key is stored in VS Code’s secure storage; it is not written in plain text to a file.
- The extension adds models to the **Mammouth** group in the Copilot configuration file `chatLanguageModels.json` for your current VS Code profile. Other Copilot models and providers are not changed.
- Select **How it works** for an overview, or **Open chatLanguageModels.json** to open the configuration file.
- **Disconnect** removes the key from the Mammouth view. Models already added to Copilot remain configured. To change or remove their key, use **Manage Language Models** in Copilot.

## Troubleshooting

- **No Mammouth models in Copilot**: make sure GitHub Copilot Chat is installed and enabled, then select **Inject into Copilot configuration** again.
- **Invalid API key**: select **Disconnect**, then reconnect using a valid key from your [Mammouth account](https://mammouth.ai/app/account/settings/api).
- **A model returns errors**: open **Model settings** and reset its settings, especially if you manually enabled tools or image input.
