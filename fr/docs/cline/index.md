# Comment utiliser Mammouth dans VS Code, JetBrains ou Cursor avec l'extension Cline

Cline est une extension d'assistant IA disponible sur VS Code, JetBrains et Cursor. En la connectant à votre compte Mammouth, vous accédez à tous les modèles de la plateforme directement depuis votre éditeur de code.

## Prérequis

- Un compte Mammouth AI avec un abonnement actif ou des crédits disponibles
- VS Code, JetBrains ou Cursor installé
- L'extension Cline installée depuis la marketplace de votre éditeur

## Configuration de l'extension

- **API Provide** : sélectionnez `OpenAI Compatible`
- **Base URL** : entrez `https://api.mammouth.ai/v1`
- **API Key** : récupérez votre clé depuis [votre tableau de bord Mammouth](https://mammouth.ai/app/account/settings/api), puis collez-la dans le champ correspondant.
- **Model ID** : choisissez un modèle depuis [la liste des modèles disponibles](https://model-explorer.mammouth.ai/) et entrez son identifiant dans la configuration

![Configuration de Cline](/docs/cline/cline_api_setup.png)

## Utilisation

Vous pouvez maintenant utiliser Cline avec votre clé API Mammouth.

### Interface et tokens

En haut de l'interface Cline, vous pouvez voir :
- Le nombre de **tokens envoyés** et **reçus**
- Le **total pris en charge** par le modèle sélectionné
- Le **nom de la tâche**, qui correspond à votre premier prompt

### Suivi des coûts

Pour suivre vos dépenses directement dans Cline :

1. Copiez les tarifs de votre modèle depuis [la liste des modèles](https://model-explorer.mammouth.ai/)
2. Entrez-les dans la section **Configuration du modèle** de Cline

Pour une vue d'ensemble de votre utilisation de l'API, consultez [votre tableau de bord Mammouth](https://mammouth.ai/app/account/settings/api).

### Autre
- Pour l'instant, la mise en cache des prompts n'est pas prise en charge.
- Modifiez la `temperature` dans les paramètres avancés de la Configuration du modèle de Cline pour contrôler la créativité (0.0 pour déterministe, jusqu'à 2.0 pour plus de créativité).

![Exemple d'utilisation de Cline](/docs/cline/cline_usage_example.png)