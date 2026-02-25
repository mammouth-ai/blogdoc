# Comment utiliser Cline avec Mammouth

## Configurer Mammouth sur VS Code, JetBrains ou Cursor via l'extension Cline

- Installer l'extension Cline

Dans les paramètres de Cline :

- Fournisseur d'API : OpenAI Compatible
- URL de base : https://api.mammouth.ai/v1
- Obtenez votre clé API Mammouth depuis [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api) <br>
    Entrez la clé API que vous avez récupérée depuis votre compte Mammouth AI
- Obtenez l'ID du modèle spécifique depuis https://api.mammouth.ai/public/models et saisissez-le dans la configuration

![Configuration de Cline](/docs/cline/cline_api_setup.png)

## Utilisation

Vous pouvez maintenant utiliser Cline avec votre clé API Mammouth.

En haut, vous voyez le nombre de tokens envoyés, reçus, et le total pris en charge par ce modèle, ainsi que le nom de la tâche (qui correspond à votre premier "prompt")

Obtenez les prix de votre modèle depuis https://api.mammouth.ai/public/models et ajoutez-les dans la section "Configuration du modèle" pour suivre les dépenses directement sur Cline.

Si vous souhaitez voir comment se passe l'utilisation de votre budget, veuillez consulter : [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)

Pour l'instant, la mise en cache des prompts n'est pas prise en charge.

Utilisez le paramètre `temperature` dans les paramètres avancés de Configuration du modèle de Cline pour contrôler la créativité (0.0 pour déterministe, jusqu'à 2.0 pour plus de créativité).

![Exemple d'utilisation de Cline](/docs/cline/cline_usage_example.png)
