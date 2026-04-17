# Système de Quotas & Limitations d'usage

## Comment fonctionnent les quotas ?

Les limitations d'usage sur Mammouth sont définies **par session**. Les quotas sont entièrement renouvelés au bout de 3 heures.

Les différents plans d'abonnement (Starter, Standard et Expert) ont des allocations d'utilisation différentes.

---

## Qu'est-ce qui consomme des quotas ?

Votre consommation au sein d'une session dépend de plusieurs facteurs :

| Facteur | Description |
| --- | --- |
| **Longueur de message** | Plus vos messages sont longs, plus ils consomment. La longueur des réponses comptent également. |
| **Taille du document** | Les fichiers et images ajoutés à la conversation impactent votre consommation |
| **Longueur de la conversation** | Plus une conversation s'allonge, plus chaque échange devient coûteux (du contexte cumulé est renvoyé à chaque message) |
| **Utilisation d'outils** | Les outils comme la recherche web ou la génération de documents consomment du quota supplémentaire |
| **Modèle choisi** | Les modèles plus puissants consomment davantage de quota |
| **Instructions du mammouth** | Les instructions du mammouth sont incluses dans chaque requête et impactent la consommation |

---

## Le principe de seuils par modèle

Mammouth est conçu pour que **vous ne soyez pas interrompu dans votre travail**. Lorsque vous atteignez le quota d'un modèle, Mammouth bascule automatiquement vers le modèle plus léger pour la suite de vos échanges.

**Exemple concret :**

> Vous utilisez **Claude Opus** et atteignez le seuil → **Claude Sonnet** prend le relais <br>
> Vous continuez et atteignez le seuil de **Claude Sonnet** → **Claude Haiku** prend le relais
> 

Ainsi, vous pouvez toujours continuer à travailler, même en cas de forte utilisation.

---

## Choisir le bon plan

Mammouth propose plusieurs offres adaptées à différents niveaux d'usage :

| Plan | Quota | Pour qui ? |
| --- | --- | --- |
| 🌱 **Starter** | Référence | L'usage quotidien grand public — 80% des utilisateurs individuels privilégient ce plan |
| ⚡ **Standard** | 3× le Starter | Les utilisateurs intensifs qui souhaitent plus de flexibilité sans se soucier des limites par session — 50% des entreprises privilégient ce plan |
| 🚀 **Expert** | 10× le Starter | Les professionnels et power users avec des besoins importants et réguliers |

> 💡 Le rapport quantité/prix s'améliore significativement avec les plans supérieurs: le plan Expert offre 10 fois plus de quota pour seulement 6 fois le prix du Starter.
> 

---

## **Autres limitations relatives aux documents :**

- **Longueur maximale d'entrée : 4 000 000 caractères**
- **Extraction de documents :** Pour les très longs documents ou plusieurs documents, une extraction intelligente du contexte le plus pertinent est réalisée. Ces extraits ne dépassent pas 30 000 caractères. En mode contexte élargi, cet extrait peut atteindre jusqu'à 150,000 caractères.
- **Extensions de fichiers prises en charge :** Environ 200 extensions de fichiers sont prises en charge. [Voir la liste détaillée ici](/fr/docs/supported-file-extensions/).
- **La longueur d'entrée** est la somme de tous les caractères des documents joints avec les caractères du prompt utilisateur et l'instruction contextuelle du mammouth personnalisé.
- **Autres limitations de documents** : Maximum 20 fichiers par conversation. Maximum 32 Mo par conversation (somme des fichiers). Maximum 20 Mo par fichier. Les PDF contenant uniquement des images, comme les PDF scannés, sont limités à 20 pages. Veuillez compresser ou diviser vos fichiers plus volumineux avant de les soumettre.


---

## Conseils pour optimiser votre consommation

### 🎯 Soyez précis et concis

Formulez des instructions claires et détaillées dès le premier message. Évitez les requêtes vagues qui nécessitent des allers-retours de clarification — chaque message supplémentaire consomme des quotas.

### 💾 Utilisez les Mammouths personnalisés pour le contexte persistant

Si vous avez besoin qu'un document ou une instruction soit utilisé dans plusieurs conversations ou au fil d'une longue conversation, enregistrez-le dans un **Mammouth personnalisé**. Cela évite de renvoyer les mêmes informations à chaque fois.

👉 [En savoir plus sur les Mammouths personnalisés](https://info.mammouth.ai/fr/docs/mammouth-assistant-tutorial/)

### ✏️ Relisez-vous avant d'envoyer

Prenez un instant pour vérifier la clarté et la complétude de votre message avant de l'envoyer. Un prompt bien formulé du premier coup réduit le nombre de messages nécessaires et préserve votre quota.


> 💡 Si vous atteignez régulièrement vos limites, pensez à explorer les offres supérieures de Mammouth pour des quotas étendus.
