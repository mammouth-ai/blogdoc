# Use Mammouth in n8n

Connect the Mammouth API to your n8n workflows to automate tasks with AI: summarize text, translate a message, or draft a reply using data from your other tools.

::: info Available on n8n Cloud
Install **Mammouth** from the community nodes panel in n8n Cloud, or install the `n8n-nodes-mammouth` package on a self-hosted instance. The package includes both the **Mammouth** action node and the **Mammouth Chat Model** AI sub-node.
:::

## What is n8n?

[n8n](https://n8n.io/) is an automation tool that lets you connect applications and services in a visual editor.

An automation, called a **workflow**, consists of **nodes**. Each node performs a step: triggering the workflow, retrieving data, calling an API, or sending a result to another application.

For example: **form submission → summary with Mammouth → send the summary by email**. You configure the steps and the data passed between them without having to develop the entire integration yourself.

## How do I install the Mammouth node?

### On n8n Cloud

In the workflow editor, open the node panel and search for **Mammouth**. Select it under **More from the community**, then choose **Install**. Only the instance owner and administrators can install it; once installed, the nodes are available to everyone on the instance.

### On self-hosted n8n

On an instance that allows community nodes, go to **Settings → Community Nodes → Install**, enter `n8n-nodes-mammouth`, and confirm. For other installation methods, see the [official n8n self-hosting documentation](https://docs.n8n.io/hosting/).

## What can the Mammouth nodes do?

The package provides two nodes. Use **Mammouth** for API actions in a workflow, or **Mammouth Chat Model** as the language model for an n8n **AI Agent** or **Chain**.

### Mammouth action node

| Resource → Operation | What it does |
| --- | --- |
| **Chat → Send Message** | Send a conversation to a model to draft, summarize, translate, classify, or extract information. Add **Instructions (System)**, **User**, and previous **AI (Assistant)** messages; use n8n expressions to include data from earlier nodes. |
| **Image → Analyze** | Send text together with one or more images. Choose all image attachments from the previous node, specific binary fields, public image URLs, or text only. Useful for reading or summarizing image attachments. |
| **Image → Generate** | Create images from a description and return them as binary files or temporary image URLs. |
| **Text → Continue** | Continue a text prompt (autocomplete); this does not follow instructions. |
| **Text → Edit** | Rewrite text according to an instruction, when the API supports the `/edits` endpoint. |
| **Text → Check Content Safety** | Check text for unsafe content by category; this does not generate a reply and requires a compatible moderation model. |

The model list is loaded from your API. Chat responses can be simplified to `message.content`; image analysis can return its answer in `content`. Chat and Text options include creativity (**Temperature**), word-choice diversity (**Top P**), repetition and topic penalties, maximum response length, and the number of replies. Image generation can return multiple images; **Quality**, **Resolution**, and **Style** options depend on the selected DALL·E model.

### Mammouth Chat Model

Connect this **Chat Model** sub-node to an **AI Agent** or an n8n **Chain**. It provides dynamically loaded models and options for response length, text or JSON output, creativity, penalties, request timeout, and retries.

::: warning Operation compatibility
The available models are not filtered by operation. An operation shown in n8n is not necessarily supported by your API or selected model: in particular, image analysis/generation and the legacy Text endpoints depend on API support. Use **Chat → Send Message** for general text generation. **Text → Edit** and **Text → Check Content Safety** require compatible `/edits` and `/moderations` endpoints; enter their supported model IDs manually.
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

The base URL is not prefilled: enter the full address including `/v1`, without appending an operation path such as `/chat/completions`. The node adds the required path and the `Bearer` authentication prefix automatically. The credentials also accept the base URL and key of an OpenAI-compatible API; use that provider's key and check that it supports the endpoints and models you need.

The credentials test calls `GET <API Base URL>/models`. A successful test validates access to the model list, not compatibility with every operation. You can then reuse the same credentials in both Mammouth nodes.

## Step 3 — Test your first workflow

1. Add a **Manual Trigger** and connect it to the **Mammouth** node.
2. Select your **Mammouth API** credentials.
3. Choose **Resource → Chat**, then **Operation → Send Message**.
4. Under **Model**, select an available chat model from the list.
5. Under **Prompt**, click **Add Message**, choose **Role → User**, and enter in **Content**: “Explain what an n8n workflow is in three sentences.”
6. Run the workflow and check the Mammouth node's output.

With **Simplify** enabled, the response text is in `message.content`. You can pass it to another node, for example to send it by email or save it in your work tools.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| The **Mammouth** node cannot be found | On n8n Cloud, ask an instance owner or administrator to install it from **More from the community**. On self-hosted n8n, check that community nodes are enabled and the package is installed, then refresh the editor. |
| The credentials test fails | Check the base URL, the key without `Bearer` or extra whitespace, and network access from your instance to the Mammouth API. |
| No models appear | Check the credentials and access to `/v1/models`. |
| Execution fails despite a successful test | Check your API credit balance, the selected model, and the operation's parameters. The credentials test does not perform generation. |
| An **Image** or **Text** operation fails | Check that its endpoint and parameters are supported by the API and model; start with **Chat → Send Message** to test text generation. |

## See also

- [Official n8n documentation](https://docs.n8n.io/)
- [Install and host n8n](https://docs.n8n.io/hosting/)
- [Mammouth API documentation](/docs/api-quick-start/)
- [Manage your API keys and credits](https://mammouth.ai/app/account/settings/api)
- [Mammouth n8n integration source code](https://github.com/mammouth-ai/n8n-integration)
- [npm package](https://www.npmjs.com/package/n8n-nodes-mammouth)