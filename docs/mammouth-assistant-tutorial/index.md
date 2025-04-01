# Custom mammouths Tutorial

Quick link for subscribers : [Create a mammouth](https://mammouth.ai/app/assistants/)

## **What is a custom mammouth ?**

It is a mammouth with contextual instructions and files attached to all his queries.

> 💡*Good to know : engineers call this instruction "system prompt".*

![Custom Mammouth](mammouth_custom_view.png)

## **What is a good practice to instruct a mammouth ?**

:::info ✅ DO: Give 3 types of instructions:
- A role
- (optional) A specific knowledge
- (optional) A given methodology
:::

:::info 🚫 DON'T: Give a task (e.g. "correct my email"). 
The task is for the prompt.
:::

Example 1: a role with a given methodology
![Professional Writer](profesional_writer.png)

Example 2: a role with a specific knowledge
![SQLite Expert](instruction_sqlite_expert.png)


<!-- :::info _Example 1: A role with a given methodology_
**Act like a professional well-educated American English writer.**

**When you edit a text, you provide details in a table with three columns: Original Text, Suggested Correction, Explanation.**
::: -->

<!-- :::info _E.g: a role with a specific knowledge_
**You're my personal SQLite expert.**

**Here is the database structure:
User(id, email, password, role),
Candidate(id,user_id,cv),
Company(id, name, user_id),
Job(id, company_id, title, description),
Application(id, candidate_id, job_id, message)**
::: -->


## **📂 Organize your conversations**

You can use your mammouths to organize your conversations.

> Sort your conversations in projects

> Move conversations from a mammouth to another

![Move conversations between mammouths](move_to_conversations.png)

> Non-instructed mammouths behave the same as the default mammouth.

> Image models and OpenPerplex ignore the custom instructions.

### Enjoy on [Mammouth](http://chat.mammouth.ai) !

<br><br>

:::info 🕵️
A secret access to the feature is hidden on the interface, did you find it ?  …
:::

<iframe 
  style="width: 100%; min-height: 315px; max-width: 100vw;" 
  src="https://www.youtube.com/embed/8lkUVq0MMXE" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>