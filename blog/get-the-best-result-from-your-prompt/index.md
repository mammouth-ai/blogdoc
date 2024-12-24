# Get the best result from your prompt

## Nobody knows which AI model will give the best result to your prompt before you prompt them all

Current LLM performance rankings, such as those found on [lmsys.org](http://lmsys.org) or [livebench.ai](http://livebench.ai), estimate the probability of one model outperforming another one in specific categories. Notably, the top-ranked LLM only has a slightly better than 50% chance of outperforming the second-ranked one.

Even with sophisticated algorithms that consider category-specific rankings (e.g. reasoning, coding, writing, languages, …), the difference in performance is not significant.

Therefore, the best approach is to prompt and compare the models:
- Prompting a second LLM to verify an AI assertion.
- Having multiple AI proposals help select the best outcome.

## Empirical data from Mammouth

### **Reprompts on LLMs**

(GPT, Claude, Llama, Mistral & Gemini)

### **Reprompts on Image Models**

(Midjourney, Dall-E & Stable Diffusion)

| **Number of LLMs solicited per prompts** | **% of total prompts** |
| --- | --- |
| > = 4 | 7% |
| >= 3 | 12% |
| >= 2 | 34% |
| = 1 | 66% |

| **Number of AI Model solicited per prompts** | **% of total prompts** |
| --- | --- |
| >= 3 | 19% |
| >= 2 | 41% |
| = 1 | 59% |

### For 66% of daily LLM queries, users solicit one model

- 66% of user’s queries to LLMs are simple enough to not need a second LLM prompting. It shows that for this majority of queries, LLMs will provide very similar or sufficient answers that don’t justify multi-prompting.
- It is based on [Mammouth.ai](http://Mammouth.ai) data, that offers easy prompting to the top 5 LLMs.

### For 34% of daily LLM queries, users solicit two or more LLMs

- As a consequence, 34% of total queries benefit from multi-model prompting. Those 34% correspond to the high-value queries. Those queries are more creative and more complex.
    - 12% of total prompts are even reprompted to 3 LLMs or more.
    - 7% of total prompts are reprompted to more than 4 LLMs

## Multi-model is even more popular with Image generation tools

- Indeed, 41% of image prompts are sent to at least two models among Midjourney, Dall-E and Stable Diffusion (available models on [mammouth.ai](http://mammouth.ai)).
- 19% of those prompts are prompted on all three available models.

## As AI models are getting more performant, the definition of the best result is becoming more subjective and less objective

There are two reasons to favor one model result to another:
- **The objective reason** : User will favor the model that respects the rule of your prompt and provide the correct answer
- **The subjective reason** : When both LLM respect the prompt guidelines and give an objectively correct answer, one model can be favored by the user for subjective reason.

—> As LLM performance improves, the differentiation progressively moves from objective to subjective. It makes multi-llm prompting even more relevant. Hence this [LLM popularity Index](/blog/introducing-llm-popularity-index/).