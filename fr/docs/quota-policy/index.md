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

## Limitations liées aux documents

### Taille et volume des entrées
- Longueur maximale des entrées : 4 000 000 caractères
- Cette longueur inclut :
  - le contenu du document
  - le message de l'utilisateur
  - les instructions contextuelles (mammouth personnalisé)

### Extraction du contenu
- Pour les documents très longs ou multiples :
  - une extraction intelligente du contenu le plus pertinent est effectuée
  - taille maximale de l'extrait :
    - 30 000 caractères (standard)
    - 150 000 caractères (mode grand contexte)

### Fichiers supportés
- 200 formats de fichiers sont pris en charge
[Voir la liste détaillée ici](/docs/supported-file-extensions/).

### Limites de fichiers par conversation
- Maximum 20 fichiers
- Taille totale maximale : 32 Mo (tous fichiers confondus)
- Taille maximale par fichier : 20 Mo

### Cas particuliers
- Les PDFs contenant uniquement des images (ex. : PDFs scannés):
  - limités à 50 pages

> 💡 Pour les fichiers volumineux, compressez-les ou divisez-les avant de les téléverser. Pour les PDFs de plus de 20 Mo, téléversez le fichier au format docx ou txt.

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
