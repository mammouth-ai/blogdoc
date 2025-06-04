# Obtenez le meilleur résultat de votre prompt

## Personne ne sait quel modèle d'IA donnera le meilleur résultat à votre prompt avant de les avoir tous promptés

Les classements actuels de performance des LLM, tels que ceux que l'on trouve sur [lmsys.org](http://lmsys.org) ou [livebench.ai](http://livebench.ai), estiment la probabilité qu'un modèle surpasse un autre dans des catégories spécifiques. Notamment, le LLM le mieux classé n'a qu'une probabilité légèrement supérieure à 50% de surpasser le deuxième au classement.

Même avec des algorithmes sophistiqués qui prennent en compte les classements spécifiques par catégorie (ex. raisonnement, codage, écriture, langues, …), la différence de performance n'est pas significative.

Par conséquent, la meilleure approche est de prompter et comparer les modèles :

- Prompter un deuxième LLM pour vérifier une affirmation d'IA.
- Avoir plusieurs propositions d'IA aide à sélectionner le meilleur résultat.

## Données empiriques de Mammouth

### **Reprompts sur les LLM**

(GPT, Claude, Llama, Mistral et Gemini)

### **Reprompts sur les Modèles d'Images**

(Midjourney, Dall-E et Stable Diffusion)

| **Nombre de LLM sollicités par prompt** | **% du total des prompts** |
| ---------------------------------------- | --------------------------- |
| >= 4                                     | 7%                          |
| >= 3                                     | 12%                         |
| >= 2                                     | 34%                         |
| = 1                                      | 66%                         |

| **Nombre de Modèles d'IA sollicités par prompt** | **% du total des prompts** |
| ------------------------------------------------- | --------------------------- |
| >= 3                                              | 19%                         |
| >= 2                                              | 41%                         |
| = 1                                               | 59%                         |

### Pour 66% des requêtes LLM quotidiennes, les utilisateurs sollicitent un modèle

- 66% des requêtes des utilisateurs aux LLM sont suffisamment simples pour ne pas nécessiter un deuxième prompting de LLM. Cela montre que pour cette majorité de requêtes, les LLM fourniront des réponses très similaires ou suffisantes qui ne justifient pas le multi-prompting.
- C'est basé sur les données de [Mammouth.ai](http://Mammouth.ai), qui offre un prompting facile vers les 5 meilleurs LLM.

### Pour 34% des requêtes LLM quotidiennes, les utilisateurs sollicitent deux LLM ou plus

- En conséquence, 34% du total des requêtes bénéficient du prompting multi-modèles. Ces 34% correspondent aux requêtes à haute valeur. Ces requêtes sont plus créatives et plus complexes.
  - 12% du total des prompts sont même repromptés vers 3 LLM ou plus.
  - 7% du total des prompts sont repromptés vers plus de 4 LLM

## Le multi-modèles est encore plus populaire avec les outils de génération d'images

- En effet, 41% des prompts d'images sont envoyés à au moins deux modèles parmi Midjourney, Dall-E et Stable Diffusion (modèles disponibles sur [mammouth.ai](http://mammouth.ai)).
- 19% de ces prompts sont promptés sur les trois modèles disponibles.

## Alors que les modèles d'IA deviennent plus performants, la définition du meilleur résultat devient plus subjective et moins objective

Il y a deux raisons de favoriser le résultat d'un modèle par rapport à un autre :

- **La raison objective** : L'utilisateur favorisera le modèle qui respecte les règles de votre prompt et fournit la réponse correcte
- **La raison subjective** : Quand les deux LLM respectent les directives du prompt et donnent une réponse objectivement correcte, un modèle peut être favorisé par l'utilisateur pour une raison subjective.

—> Alors que la performance des LLM s'améliore, la différenciation passe progressivement de l'objectif au subjectif. Cela rend le prompting multi-llm encore plus pertinent. D'où cet [Index de popularité des LLM](../introducing-llm-popularity-index/).