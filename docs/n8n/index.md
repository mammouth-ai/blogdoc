# Use Mammouth in n8n

Connect the Mammouth API to your n8n workflows to automate tasks with AI: summarize text, translate a message, or draft a reply using data from your other tools.

::: info Integration in development
This guide describes the development version of the **Mammouth** node, which has not been published yet. To follow the configuration steps, your administrator must have already installed this node on your self-hosted n8n instance. Availability in the n8n catalog or on n8n Cloud is not guaranteed.
:::

## What is n8n?

[n8n](https://n8n.io/) is an automation tool that lets you connect applications and services in a visual editor.

An automation, called a **workflow**, consists of **nodes**. Each node performs a step: triggering the workflow, retrieving data, calling an API, or sending a result to another application.

For example: **form submission → summary with Mammouth → send the summary by email**. You configure the steps and the data passed between them without having to develop the entire integration yourself.

## How do I install n8n?

To install and configure n8n, follow the [official n8n self-hosting documentation](https://docs.n8n.io/hosting/). It covers the available methods, their prerequisites, and security recommendations.

n8n also offers a hosted service, **n8n Cloud**, which requires no installation on your part. However, having an n8n Cloud account does not automatically give you access to the Mammouth node in development.

**Installing n8n and adding the Mammouth node are two separate steps.** Before continuing, check that **Mammouth** appears in your instance's node picker. If it does not, contact your administrator about loading the development version.

## What can the Mammouth integration do?

The **Mammouth** node calls the Mammouth API from a workflow. You can use data from a previous node in your prompt, choose a model, and pass the response to subsequent steps.

Start with **Chat → Complete** to:

- **Summarize** messages, meeting notes, or documents already converted to text.
- **Draft or rewrite** content according to your instructions.
- **Translate** text or **classify** requests by category.

The development version exposes the following resources:

| Resource | Operation | Purpose |
| --- | --- | --- |
| **Chat** | **Complete** | Generate a response from messages and instructions. |
| **Image** | **Create** | Request image generation from a prompt, if supported by the model and API. |
| **Text** | **Complete**, **Edit**, **Moderate** | Call text completion, editing, or moderation endpoints, if supported by the API. |

::: warning Operation compatibility
An operation appearing in the node does not guarantee support by the Mammouth API. **Image** and **Text** operations and their options must be checked with the selected model. The model list is not filtered by operation: choose a model suitable for your task.

This is an **action node**, not a **Chat Model** sub-node that connects to the model port of an n8n **AI Agent**.
:::

## Step 1 — Generate an API key in Mammouth

To connect Mammouth to n8n, you use a **Mammouth API key**, not your login password. In n8n, this key is stored in **credentials**: a reusable authentication configuration for your nodes.

1. Sign in to your Mammouth account.
2. Open the [Mammouth API settings](https://mammouth.ai/app/account/settings/api).
3. Generate a new API key. Use a dedicated key for your n8n automations to make their usage easier to track.
4. Copy the key and keep it somewhere safe for the next step.
5. Check that you have **API credits**. You can view your balance and buy credits on the same page.

Calls made by n8n consume your Mammouth API credits. See the [API documentation](/docs/api-quick-start/) for access details and pricing.

::: warning Protect your API key
Never share your key in a prompt, screenshot, workflow export, or code repository. Store it only in the dedicated field in n8n credentials. If it has been exposed, revoke it in Mammouth and replace it in n8n.
:::

## Step 2 — Add credentials in n8n

1. Open or create a workflow in n8n.
2. Add a **Mammouth** node.
3. In the node's credentials selector, create new **Mammouth API** credentials.
4. Give them a recognizable name, such as **Mammouth — n8n**.
5. Fill in the following two fields:

| Field | Value |
| --- | --- |
| **API Base URL** | `https://api.mammouth.ai/v1` |
| **API Key** | The API key generated in Mammouth, without adding the `Bearer` prefix. |

6. Click **Save**, then check the connection test result. Run the test again if needed.
7. Select these credentials in your **Mammouth** node.

The base URL is not prefilled: enter the full address including `/v1`, without appending `/chat/completions`. The node adds each operation's path and the `Bearer` authentication prefix automatically.

The credentials test calls `GET https://api.mammouth.ai/v1/models`. A successful test validates access to the model list, not compatibility with every operation. You can then reuse the same credentials in your other Mammouth nodes.

## Step 3 — Test your first workflow

1. Add a **Manual Trigger** and connect it to the **Mammouth** node.
2. Select your **Mammouth API** credentials.
3. Choose **Resource → Chat**, then **Operation → Complete**.
4. Under **Model**, select an available chat model from the list.
5. Under **Prompt**, click **Add Message**, choose **Role → User**, and enter in **Content**: “Explain what an n8n workflow is in three sentences.”
6. Run the workflow and check the Mammouth node's output.

With **Simplify** enabled, the response text is in `message.content`. You can pass it to another node, for example to send it by email or save it in your work tools.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| The **Mammouth** node cannot be found | Ask your administrator to check that the integration is installed and loaded, then refresh the n8n interface. |
| The credentials test fails | Check the base URL, the key without `Bearer` or extra whitespace, and network access from your instance to the Mammouth API. |
| No models appear | Check the credentials and access to `/v1/models`. |
| Execution fails despite a successful test | Check your API credit balance, the selected model, and the operation's parameters. The credentials test does not perform generation. |
| An **Image** or **Text** operation fails | Check that its endpoint and parameters are supported by the API and model; start with **Chat → Complete** to test text generation. |

## See also

- [Official n8n documentation](https://docs.n8n.io/)
- [Install and host n8n](https://docs.n8n.io/hosting/)
- [Mammouth API documentation](/docs/api-quick-start/)
- [Manage your API keys and credits](https://mammouth.ai/app/account/settings/api)