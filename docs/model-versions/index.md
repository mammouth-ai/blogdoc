# Model versions (FAQ)

> When I ask GPT-4o its version on mammouth it tells me it is GPT-3.5

or

> When I ask Claude on mammouth it says its knowledge cutoff year is 2023

→ We are asked frequently about this. You need to know that:

## Base models don’t know their version, nor the current date

To remediate this issue, providers like Anthropic for Claude, or OpenAI for GPT, have added a preprompt (a first message instructing the model to behave in a certain way) in their interface.

On [Claude.ai](http://Claude.ai) the beginning of the preprompt looks like that:

```html
The assistant is Claude, created by Anthropic. The current date is {}. Claude’s knowledge base was last updated on April 2024. ...
```

You can find the [full preprompt here](https://docs.anthropic.com/en/release-notes/system-prompts#nov-22nd-2024). 

- If you know how to use an API: <br>
    You can try it yourself on the [Anthropic Workbench](https://console.anthropic.com/workbench/).\
    After you add the system prompt, answers will be the same as on Claude.ai.

Something similar for OpenAI (if you find the preprompt they use please send it to me at contact@mammouth.ai).

**On [mammouth.ai](http://mammouth.ai)** we serve the raw model without the preprompt. Hence answers will be different and that’s normal.

**Now you may ask, why aren’t you doing the same?** Good question! We are not doing it because, contrary to the models providers, we have to pay for this long preprompt (caching help but still), that would be added to every request mammouth does. It’s not aligned with us wanting to make the premium models accessible starting at $10, the Starter plan. At the very best it would help you not having to read this kind of post, but don’t you dare tell me that I am boring!! 😉

## ChatGPT-4o does not (yet) know himself

On chatGPT, GPT-4o doesn’t know itself. It only knows previous versions.

![Are you GPT4o?](Are_you_GPT-4o.png)

Source : chatgpt.com

![Which version of which model are you ?](image.png)

Source : chatgpt.com

Note : GPT-4-Turbo (Apr-2024) is the predecessor of GPT-4o (June-2024). [See OpenAI models.](https://platform.openai.com/docs/models)

When asking the question “Are you GPT-4o?”, the answer will vary. However, it will still mention a previous version to the current model. Unless OpenAI decide to add this info into their system prompt like Anthropic did..


## DeepSeek believes it is chatGPT

You asked DeepSeek "Who are you?" and it answered "I am OpenAI GPT-4" ? No worry, you're not the only one.\
Check out: 
[Why DeepSeek thinks it is chatGPT ?](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/)