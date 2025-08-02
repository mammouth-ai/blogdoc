# Get the best result from your prompt

## Nobody knows which AI model will give the best result to your prompt before you compare them

Current LLM performance rankings, such as those found on [lmsys.org](http://lmsys.org) or [livebench.ai](http://livebench.ai), estimate the probability of one model outperforming another one in specific categories. Notably, the top-ranked LLM only has a slightly better than 50% chance of outperforming the second-ranked one.

Even with sophisticated algorithms that consider category-specific rankings (e.g. reasoning, coding, writing, languages, …), the difference in performance is not significant.

Therefore, the best approach is to reprompt and compare the models:

- Reprompting with a second LLM to verify an AI assertion.
- Having multiple AI proposals help select the best outcome.

## Empirical data from Mammouth

### **Reprompting Data from Mammouth AI**

| **Number of Text models solicited per prompts** | **% of total prompts** |
| ---------------------------------------- | ---------------------- |
| > = 4                                    | 7%                     |
| >= 3                                     | 12%                    |
| >= 2                                     | 34%                    |
| = 1                                      | 66%                    |

| **Number of Image Models solicited per prompts** | **% of total prompts** |
| -------------------------------------------- | ---------------------- |
| >= 3                                         | 19%                    |
| >= 2                                         | 41%                    |
| = 1                                          | 59%                    |

### For 66% of daily text queries, users solicit one model

- 66% of user’s queries do not need a reprompting (based on [Mammouth.ai](http://Mammouth.ai) data).

### For 34% of daily text queries, users solicit more than one model

- As a consequence, 34% of total queries benefit from reprompting. Those 34% correspond to the high-value queries. Those queries are more creative and more complex.
  - 24% of total prompts are reprompted with exactly 1 model
  - 12% of total prompts are reprompted with 2 models or more.
  - 7% of total prompts are reprompted with more than 3 models

## Reprompting is even more popular with Image generation tools

- Indeed, 41% of image queries are reprompted with at least one model.
- 19% of those queries are reprompted with more than two models.

## As AI models are getting more performant, the definition of the best result is becoming more subjective and less objective

There are two reasons to favor one model result to another:

- **The objective reason** : User favors the model that respects the rule of his prompt and provide the correct answer.
- **The subjective reason** : When both AIs give an objectively correct answer, one model can be favored by the user for subjective reason.

—> As AI performance improves, the differentiation progressively moves from objective to subjective. It makes reprompting even more relevant. Hence this [LLM popularity Index](../introducing-llm-popularity-index/).
