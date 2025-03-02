# Why Models Tell the Wrong Version

Ever asked Claude or GPT what version they are and gotten a confusing answer? You're not alone.

> When I ask on Mammouth, Claude tells me its version is Claude 3 Opus

or

> When I ask on Mammouth, GPT it says its knowledge cutoff year is october 2023

→ We are asked frequently about this. You need to know that:

## Base models don’t know their version, nor the current date

To remediate this issue, providers like Anthropic for Claude, or OpenAI for GPT, have added a system prompt (a first message instructing the model to behave in a certain way) in their interface

On [Claude.ai](http://Claude.ai) the beginning of the  system prompt looks like that:

```html
The assistant is Claude, created by Anthropic. The current date is {}. Claude’s knowledge base was last updated at the end of October 2024. ...
```
You can find the [full system prompt here](https://docs.anthropic.com/en/release-notes/system-prompts#feb-24th-2025). 

<details>
    <summary>How to test the system prompt yourself</summary>

- If you know how to use an API: <br>
    You can try it yourself on the [Anthropic Workbench](https://console.anthropic.com/workbench/).\
    After you add the system prompt, answers will be the same as on Claude.ai.

- If you don't know how to use an API: 
   You can create a custom mammouth, paste the part of the system prompt about the model version and you'll see that miraculously Claude knows its own version.

Something similar for OpenAI (if you find the system prompt they use please send it to us at contact@mammouth.ai).
</details>

**On [mammouth.ai](http://mammouth.ai)** we serve the raw model without the system prompt. Hence answers will be different and that’s normal.

## **Why don't we use system prompts on Mammouth?** 

Good question! We are not doing it because, contrary to the models providers, we have to pay for this long system prompt, that would be added to every request mammouth does. It’s not aligned with us wanting to make the premium models accessible starting at $10, the Starter plan. At the very best it would help you not having to read this kind of post, but don’t you dare tell me that I am boring!! 😉

## ChatGPT-4o does not (yet) know himself

On chatGPT, GPT-4o doesn’t know itself. It only knows previous versions.

![Are you GPT4o?](Are_you_GPT-4o.png)

Source : chatgpt.com

![Which version of which model are you ?](image.png)

Source : chatgpt.com

Note : GPT-4-Turbo (Apr-2024) is the predecessor of GPT-4o (June-2024). [See OpenAI models.](https://platform.openai.com/docs/models)

When asking the question “Are you GPT-4o?”, the answer will vary. However, it will still mention a previous version to the current model. Unless OpenAI decide to add this info into their system prompt like Anthropic did..


## DeepSeek believes it is chatGPT

You asked DeepSeek "Who are you?" and it answered "I am OpenAI GPT-4" ? No worry, you're not the only one.

Check out: 
[Why DeepSeek thinks it is chatGPT ?](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/)

As of March 2023, DeepSeek finally added a system prompt on their platform, and now, their chat doesn't say anymore "I am OpenAI GPT-4."

## Does this mean that AIs are not self-aware and only answer based on whatever instruction they receive?
Yes.

![Which model are you ?](I_am_Regis.png)