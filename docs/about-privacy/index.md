# About privacy

**Last updated: 10/09/2026**

Privacy matters to us.

We are **Mammouth AI**, a company based in Europe — the home of the GDPR 🙂. We make money on the subscription you pay us, not on anything else: we never sell or monetize your data.

We don't train any internal models, and we never use your conversations to train anything. Your prompts are stored only so you can revisit your history, and you can delete them at any time.

For the full picture on what data we collect, how long we keep it, your rights, and our security measures, please read our [privacy policy](../privacy-policy/). This page focuses on a question the privacy policy only covers at a high level: **what do the AI model providers do with your prompts?**

## What the model providers do with your prompts

When you chat with Mammouth, your prompts are sent to the AI model that powers the response. As we use proprietary AI models, we have to conform to their privacy policies, which differ depending on the provider. We've gone through them, and we enforce two guarantees across all of them:

- **No training**: models are never trained on prompts coming from Mammouth.
- **No long-term retention**: providers do not retain Mammouth prompts beyond 30 days, generally only to monitor service abuse via logs.

Here's a quick summary for the main ones:

1. **OpenAI**: "Your data is your data. Data sent to the OpenAI API is not used to train or improve OpenAI models." See [Privacy at OpenAI for API users](https://developers.openai.com/api/docs/guides/your-data).
2. **Mistral**: we pay for their API service. [Their policy](https://mistral.ai/fr/terms/#data-processing-agreement) (article `2.2.2.2 Our Paid Services`) states: "We do not use Your User Data to train, improve or enhance our Models." They only retain data for 30 days to monitor abuse. We love Mistral.
3. **Anthropic Claude**: we conform to the [Commercial Terms of Service](https://www.anthropic.com/legal/commercial-terms), which states (A. Service, 4.) "Anthropic may not train models on Customer Content from paid Services".
4. **Gemini**: We use it through the Google Cloud API, and their data governance doc states that "Gemini doesn't use your prompts or its responses as data to train its models." Learn more about [Gemini data governance](https://cloud.google.com/gemini/docs/discover/data-governance?hl=en).
5. **DeepSeek, Llama, GLM and Kimi** are open-source models. The provider we use to serve them is Fireworks (also for some OpenRouter routing, see below). Prompts sent are not used to improve the models and are not retained after generation. Read more about their privacy policy [here](https://docs.fireworks.ai/guides/security_compliance/data_handling#zero-data-retention).
6. **OpenRouter** is used as an API routing layer. By default, OpenRouter does not retain prompts or responses and does not use them to train models. It may transmit prompts and responses to downstream model providers, but we make sure they respect the no-training and no-retention policies mentioned above. See [OpenRouter's data collection documentation](https://openrouter.ai/docs/guides/privacy).

Please read our [privacy policy](../privacy-policy/) or [contact us](https://mammouth.ai/contact) if you need more information or guidance.

The Mammouth team
