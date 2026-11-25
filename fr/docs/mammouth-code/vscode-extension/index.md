# Extension Mammouth pour VS Code

L’extension **Mammouth** permet d’utiliser les modèles IA de votre compte Mammouth directement dans **GitHub Copilot Chat**. Elle ajoute les modèles disponibles dans votre sélecteur de modèles Copilot après connexion à l’API Mammouth.

[Installer l’extension depuis le Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai)

## Prérequis

- **Visual Studio Code 1.146.0 ou une version ultérieure**
- **GitHub Copilot Chat** installé et activé
- Une [clé API Mammouth](https://mammouth.ai/app/account/settings/api) et des crédits API

## Installation et connexion

1. Ouvrez la page de l’[extension Mammouth sur le Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai), puis sélectionnez **Install**. Confirmez l’ouverture de VS Code si votre navigateur le demande.
2. Dans VS Code, ouvrez la vue **Mammouth AI** à l’aide de son icône dans la barre d’activité.
3. Collez votre clé API et sélectionnez **Connect**.
4. Sélectionnez **Inject into Copilot configuration**.
5. Ouvrez Copilot Chat et choisissez un modèle dans l’onglet **Mammouth** du sélecteur de modèles.

Si de nouveaux modèles deviennent disponibles sur votre compte, sélectionnez de nouveau **Inject into Copilot configuration** pour actualiser la liste.

## Choisir un niveau de raisonnement

Pour les modèles qui proposent plusieurs niveaux de raisonnement, ouvrez le sélecteur de modèles Copilot, sélectionnez la flèche à côté du modèle, puis choisissez le niveau **Effort Level**. Un niveau plus élevé peut aider pour les tâches complexes, mais les réponses peuvent être plus lentes et consommer davantage de crédits.

## Personnaliser les modèles

Dans la vue Mammouth, ouvrez **Model settings** pour gérer les modèles proposés dans Copilot. Pour chaque modèle, vous pouvez :

- l’inclure dans Copilot ou le masquer ;
- réduire ses limites de contexte ou de sortie ;
- activer ou désactiver l’utilisation d’outils et l’analyse d’images ;
- choisir les niveaux de raisonnement proposés.

Sélectionnez **Save and inject** pour appliquer vos choix. Ils sont conservés lors des actualisations. **Reset** rétablit les paramètres communiqués par Mammouth. L’activation manuelle d’une capacité non prise en charge par un modèle peut provoquer l’échec des requêtes.

## Consulter les détails des modèles

Activez **Show model details** dans la vue Mammouth pour afficher la taille du contexte, les capacités et les tarifs en crédits par million de tokens. Ouvrez **API details** sous un modèle pour consulter les informations complètes fournies par Mammouth. Ces détails sont disponibles dans la vue de l’extension, car le sélecteur de modèles Copilot ne permet pas d’afficher les tarifs ni plusieurs options de taille de contexte.

## Clé API et configuration

- La clé API Mammouth est conservée dans le stockage sécurisé de VS Code ; elle n’est pas écrite en clair dans un fichier.
- L’extension ajoute les modèles dans le groupe **Mammouth** du fichier de configuration Copilot `chatLanguageModels.json` associé au profil VS Code courant. Les autres modèles et fournisseurs Copilot ne sont pas modifiés.
- Utilisez **How it works** pour consulter une explication du fonctionnement ou **Open chatLanguageModels.json** pour ouvrir le fichier de configuration.
- **Disconnect** retire la clé de la vue Mammouth. Les modèles déjà ajoutés à Copilot restent configurés. Pour modifier ou supprimer leur clé, utilisez **Manage Language Models** dans Copilot.

## Dépannage

- **Aucun modèle Mammouth dans Copilot** : vérifiez que GitHub Copilot Chat est installé et activé, puis sélectionnez à nouveau **Inject into Copilot configuration**.
- **Clé API invalide** : sélectionnez **Disconnect**, puis reconnectez-vous avec une clé valide depuis votre [compte Mammouth](https://mammouth.ai/app/account/settings/api).
- **Un modèle renvoie des erreurs** : ouvrez **Model settings** et rétablissez ses paramètres, notamment si vous avez activé manuellement les outils ou l’analyse d’images.
