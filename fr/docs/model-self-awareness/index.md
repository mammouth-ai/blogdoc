# Pourquoi les modèles indiquent la mauvaise version

Cet article explique pourquoi Claude, GPT ou Deepseek ne répondent pas correctement à propos de leur propre version et pourquoi elle peut être différente sur d'autres plateformes (comme Claude).

Vous avez déjà demandé à Claude ou GPT quelle version ils sont et vous avez obtenu une réponse confuse ? Vous n'êtes pas seul.

> Quand je demande sur Mammouth, Claude me dit que sa version est Claude 3 Opus

> Quand je demande sur Mammouth, GPT dit que sa limite de connaissances est octobre 2023

→ On nous pose souvent des questions à ce sujet. Vous devez savoir que :

## A l'état brut, les modèles ne connaissent ni leur version, ni la date actuelle

Pour remédier à ce problème, les fournisseurs comme Anthropic pour Claude, ou OpenAI pour GPT, ont ajouté un prompt système (un premier message instruisant le modèle à se comporter d'une certaine manière) dans leur interface

Sur [Claude.ai](http://Claude.ai) le début du prompt système ressemble à ceci :

```html
L'assistant est Claude, créé par Anthropic. La date actuelle est {}. La base de connaissances de Claude a été mise à jour pour la dernière fois fin octobre 2024. ...
```
Vous pouvez trouver le [prompt système complet ici](https://docs.anthropic.com/en/release-notes/system-prompts#feb-24th-2025). 

<details>
    <summary>Comment tester le prompt système vous-même</summary>

- Si vous savez comment utiliser une API : <br>
    Vous pouvez l'essayer vous-même sur l'[Anthropic Workbench](https://console.anthropic.com/workbench/).\
    Après avoir ajouté le prompt système, les réponses seront identiques à celles sur Claude.ai.

- Si vous ne savez pas comment utiliser une API : 
   Vous pouvez créer un mammouth personnalisé, coller la partie du prompt système concernant la version du modèle et vous verrez que miraculeusement Claude connaît sa propre version.

Quelque chose de similaire pour OpenAI (si vous trouvez le prompt système qu'ils utilisent, veuillez nous l'envoyer à contact@mammouth.ai).
</details>

**Sur [mammouth.ai](http://mammouth.ai)** nous servons le modèle brut sans le prompt système. Par conséquent, les réponses seront différentes et c'est normal.

## **Pourquoi n'utilisons-nous pas de prompts système sur Mammouth ?** 

Bonne question ! Nous ne le faisons pas car, contrairement aux fournisseurs de modèles, nous devons payer pour ce long prompt système, qui serait ajouté à chaque requête que mammouth fait. Ce n'est pas aligné avec notre volonté de rendre les modèles premium accessibles à partir de 10 $, le plan Starter. Au mieux, cela vous éviterait de lire ce genre d'article, mais n'osez pas me dire que je suis ennuyeux !! 😉

## ChatGPT-4o ne se connaît pas (encore) lui-même

Sur chatGPT, GPT-4o ne se connaît pas lui-même. Il ne connaît que les versions précédentes.

![Êtes-vous GPT4o ?](Are_you_GPT-4o.png)

Source : chatgpt.com

![Quelle version de quel modèle êtes-vous ?](image.png)

Source : chatgpt.com

Note : GPT-4-Turbo (avril 2024) est le prédécesseur de GPT-4o (juin 2024). [Voir les modèles OpenAI.](https://platform.openai.com/docs/models)

Lorsqu'on pose la question "Êtes-vous GPT-4o ?", la réponse varie. Cependant, il mentionnera toujours une version précédente au modèle actuel. À moins qu'OpenAI décide d'ajouter cette information dans leur prompt système comme l'a fait Anthropic...

## DeepSeek croit qu'il est chatGPT

Vous avez demandé à DeepSeek "Qui êtes-vous ?" et il a répondu "Je suis OpenAI GPT-4" ? Pas d'inquiétude, vous n'êtes pas le seul.

Consultez : 
[Pourquoi DeepSeek pense qu'il est chatGPT ?](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/)

En mars 2025, DeepSeek a finalement ajouté un prompt système sur leur plateforme, et maintenant, leur chat ne dit plus "Je suis OpenAI GPT-4."

## Cela signifie-t-il que les IA ne sont pas conscientes d'elles-mêmes et ne répondent qu'en fonction des instructions qu'elles reçoivent ?
Oui.

![Quel modèle êtes-vous ?](I_am_Regis.png)