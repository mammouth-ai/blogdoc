# Perché i modelli indicano la versione sbagliata

Questo articolo spiega perché Claude, GPT o DeepSeek non indicano correttamente la propria versione e perché la risposta può essere diversa su altre piattaforme (ad esempio Claude).

Hai mai chiesto a Claude o GPT quale versione fossero e ricevuto una risposta confusa? Non sei il solo.

> Quando chiedo a Mammouth, Claude dice di essere Claude 3 Opus.

> Quando chiedo a Mammouth, GPT dice che le sue conoscenze arrivano fino a ottobre 2023.

→ Ci viene chiesto spesso. Ecco cosa devi sapere:

## I modelli di base non conoscono la propria versione né la data corrente

Per risolvere questo problema, fornitori come Anthropic per Claude o OpenAI per GPT hanno aggiunto alle proprie interfacce un prompt di sistema (un messaggio iniziale che indica al modello come comportarsi).

Su [Claude.ai](http://Claude.ai), l'inizio del prompt di sistema è simile a questo:

```html
The assistant is Claude, created by Anthropic. The current date is {}. Claude’s knowledge base was last updated at the end of October 2024. ...
```
Puoi trovare [qui il prompt di sistema completo](https://docs.anthropic.com/en/release-notes/system-prompts#feb-24th-2025).

<details>
    <summary>Come provare personalmente il prompt di sistema</summary>

- Se sai usare un'API: <br>
    Puoi provarlo direttamente nell'[Anthropic Workbench](https://console.anthropic.com/workbench/).\
    Dopo aver aggiunto il prompt di sistema, le risposte saranno come quelle su Claude.ai.

- Se non sai usare un'API:
   Puoi creare un Mammouth personalizzato, inserire la parte del prompt di sistema relativa alla versione del modello e vedere Claude riconoscere improvvisamente la propria versione.

Con OpenAI funziona allo stesso modo.
</details>

**Su [mammouth.ai](http://mammouth.ai)** forniamo il modello senza modificarlo e senza prompt di sistema. Per questo le risposte sono diverse: è normale.

## **Perché non utilizziamo prompt di sistema su Mammouth?**

Bella domanda! Non lo facciamo perché, a differenza dei fornitori dei modelli, dovremmo pagare per quel lungo prompt di sistema aggiunto a ogni richiesta inviata da Mammouth. Non sarebbe compatibile con il nostro obiettivo di rendere accessibili i modelli premium a partire da 10 $ con il piano Starter. Almeno così non dovrai leggere contributi di questo tipo — ma non osare dirmi che sono noioso!! 😉

## ChatGPT-4o non conosce ancora se stesso

Su ChatGPT, GPT-4o non conosce la propria identità. Conosce solo le versioni precedenti.

![Sei GPT-4o?](/docs/model-self-awareness/Are_you_GPT-4o.png)

Fonte: chatgpt.com

![Quale versione di quale modello sei?](/docs/model-self-awareness/image.png)

Fonte: chatgpt.com

Nota: GPT-4-Turbo (aprile 2024) precede GPT-4o (giugno 2024). [Consulta i modelli OpenAI.](https://platform.openai.com/docs/models)

Alla domanda «Sei GPT-4o?» la risposta può variare. Tuttavia il modello continuerà a indicare una versione precedente, a meno che OpenAI non decida di inserire questa informazione nel prompt di sistema, come ha fatto Anthropic.

## DeepSeek si crede ChatGPT

Hai chiesto a DeepSeek «Chi sei?» e ti ha risposto «Sono OpenAI GPT-4»? Non preoccuparti, non sei il solo.

Scopri di più:
[Perché DeepSeek pensa di essere ChatGPT?](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/)

Nel marzo 2025 DeepSeek ha infine aggiunto un prompt di sistema alla propria piattaforma. Da allora la chat non dice più «Sono OpenAI GPT-4».

## Questo significa che le IA non sono consapevoli di sé e rispondono solo in base alle istruzioni ricevute?
Sì.

![Quale modello sei?](/docs/model-self-awareness/I_am_Regis.png)
