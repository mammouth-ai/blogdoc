# Utiliser Mammouth dans n8n

Connectez l'API Mammouth à vos workflows n8n pour automatiser des tâches avec l'IA : résumer un texte, traduire un message ou préparer une réponse à partir des données de vos autres outils.

::: info Mammouth sur n8n Cloud

Un administrateur peut installer **Mammouth** depuis le panneau des nœuds communautaires. Le package fournit deux nœuds : **Mammouth** pour les actions et **Mammouth Chat Model** pour les agents et les chaînes.

:::

## Qu'est-ce que n8n ?

[n8n](https://n8n.io/) est un outil d'automatisation qui permet de relier des applications et des services dans un éditeur visuel.

Une automatisation, appelée **workflow**, est composée de **nœuds** (*nodes*). Chaque nœud réalise une étape : déclencher le workflow, récupérer des données, appeler une API ou envoyer un résultat vers une autre application.

Par exemple : **réception d'un formulaire → résumé avec Mammouth → envoi du résumé par e-mail**. Vous configurez les étapes et les données à transmettre entre elles, sans avoir à développer toute l'intégration vous-même.

## Comment installer le nœud Mammouth ?

### Sur n8n Cloud

Dans l'éditeur de workflow, ouvrez le panneau des nœuds et recherchez **Mammouth**. Sélectionnez-le dans **More from the community**, puis cliquez sur **Install**. Seuls le propriétaire de l'instance et les administrateurs peuvent l'installer ; une fois installé, les nœuds sont disponibles pour tous les membres de l'instance.

### Sur une instance n8n auto-hébergée

Sur une instance qui autorise les nœuds communautaires, accédez à **Settings → Community Nodes → Install**, saisissez `n8n-nodes-mammouth` et confirmez. Pour les autres méthodes, consultez la [documentation officielle d'auto-hébergement de n8n](https://docs.n8n.io/hosting/).

## Que permettent les nœuds Mammouth ?

Le package fournit deux nœuds. Utilisez **Mammouth** pour appeler des opérations d'API dans un workflow, ou **Mammouth Chat Model** comme modèle de langage d'un **AI Agent** ou d'une **Chain** n8n.

### Nœud d'actions Mammouth

| Ressource → Opération | Fonction |
| --- | --- |
| **Chat → Send Message** | Envoyer une conversation à un modèle pour rédiger, résumer, traduire, classer ou extraire des informations. Ajoutez des messages **Instructions (System)**, **User** et **AI (Assistant)** précédents ; utilisez les expressions n8n pour insérer les données des nœuds précédents. |
| **Image → Analyze** | Envoyer du texte avec une ou plusieurs images : toutes les pièces jointes image du nœud précédent, des champs binaires spécifiques, des URL d'images publiques ou du texte seul. Pratique pour lire ou résumer des pièces jointes. |
| **Image → Generate** | Créer des images à partir d'une description et les récupérer sous forme de fichiers binaires ou d'URL temporaires. |
| **Text → Continue** | Continuer un texte (autocomplétion) ; cette opération ne suit pas de consignes. |
| **Text → Edit** | Réécrire un texte selon une consigne, si l'API prend en charge l'endpoint `/edits`. |
| **Text → Check Content Safety** | Détecter les contenus à risque par catégorie ; cette opération ne génère pas de réponse et nécessite un modèle de modération compatible. |

La liste des modèles est chargée depuis votre API. Les réponses Chat peuvent être simplifiées dans `message.content` ; l'analyse d'image peut renvoyer sa réponse dans `content`. Les options Chat et Text comprennent la créativité (**Temperature**), la diversité du vocabulaire (**Top P**), les pénalités de répétition et de sujet, la longueur maximale et le nombre de réponses. La génération d'images peut en renvoyer plusieurs ; les options **Quality**, **Resolution** et **Style** dépendent du modèle DALL·E sélectionné.

### Mammouth Chat Model

Connectez ce sous-nœud **Chat Model** à un **AI Agent** ou à une **Chain** n8n. Il propose des modèles chargés dynamiquement et des options pour la longueur de réponse, le format texte ou JSON, la créativité, les pénalités, le délai d'attente et les nouvelles tentatives.

::: warning Compatibilité des opérations

La liste des modèles n'est pas filtrée par opération. La présence d'une opération dans n8n ne garantit pas sa prise en charge par votre API ou le modèle choisi : l'analyse et la génération d'images ainsi que les anciens endpoints Text dépendent notamment du support de l'API. Pour générer du texte, privilégiez **Chat → Send Message**. **Text → Edit** et **Text → Check Content Safety** nécessitent les endpoints `/edits` et `/moderations` ; saisissez manuellement les identifiants de modèles compatibles.

:::

## Étape 1 — Générer une clé API dans Mammouth

Pour connecter Mammouth à n8n, vous utilisez une **clé API Mammouth**, et non votre mot de passe de connexion. Dans n8n, cette clé sera enregistrée dans des **credentials** : une configuration d'authentification réutilisable par vos nœuds.

1. Connectez-vous à votre compte Mammouth.
2. Ouvrez les [paramètres de l'API Mammouth](https://mammouth.ai/app/account/settings/api).
3. Générez une nouvelle clé API. Privilégiez une clé dédiée à vos automatisations n8n pour faciliter le suivi de leur utilisation.
4. Copiez la clé et conservez-la en lieu sûr pour l'étape suivante.
5. Vérifiez que vous disposez de **crédits API**. Vous pouvez consulter votre solde et acheter des crédits depuis cette même page.

Les appels réalisés par n8n consomment vos crédits API Mammouth. Consultez la [documentation API](/fr/docs/api-quick-start/) pour les modalités d'accès et les tarifs.

::: warning Protégez votre clé API

Ne partagez jamais votre clé dans un prompt, une capture d'écran, un export de workflow ou un dépôt de code. Enregistrez-la uniquement dans le champ prévu dans les credentials n8n. Si elle a été exposée, révoquez-la dans Mammouth et remplacez-la dans n8n.

:::

## Étape 2 — Ajouter les credentials dans n8n

1. Ouvrez ou créez un workflow dans n8n.
2. Ajoutez un nœud **Mammouth**.
3. Dans le sélecteur d'identifiants du nœud, créez de nouveaux credentials de type **Mammouth API**.
4. Donnez-leur un nom reconnaissable, par exemple **Mammouth — n8n**.
5. Renseignez les deux champs suivants :

| Champ | Valeur |
| --- | --- |
| **API Base URL** | `https://api.mammouth.ai/v1` |
| **API Key** | La clé API générée dans Mammouth, sans ajouter le préfixe `Bearer`. |

6. Enregistrez avec **Save**, puis vérifiez le résultat du test de connexion. Relancez le test si nécessaire.
7. Sélectionnez ces credentials dans votre nœud **Mammouth**.

L'URL de base n'est pas préremplie : saisissez l'adresse complète avec `/v1`, sans ajouter le chemin d'une opération comme `/chat/completions`. Le nœud ajoute le chemin requis et le préfixe d'authentification `Bearer`. Ces credentials acceptent aussi l'URL de base et la clé d'une API compatible avec le protocole OpenAI ; utilisez la clé de ce fournisseur et vérifiez qu'il prend en charge les endpoints et modèles souhaités.

Le test des credentials appelle `GET <API Base URL>/models`. Un test réussi valide l'accès à la liste des modèles, pas la compatibilité de toutes les opérations. Vous pouvez ensuite réutiliser les mêmes credentials dans les deux nœuds Mammouth.

## Étape 3 — Tester votre premier workflow

1. Ajoutez un déclencheur manuel (**Manual Trigger**) et reliez-le au nœud **Mammouth**.
2. Sélectionnez vos credentials **Mammouth API**.
3. Choisissez **Resource → Chat**, puis **Operation → Send Message**.
4. Dans **Model**, sélectionnez un modèle de chat disponible dans la liste.
5. Dans **Messages**, cliquez sur **Add Message**, choisissez **From → User** et saisissez dans **Text** : « Explique en trois phrases ce qu'est un workflow n8n. »
6. Exécutez le workflow et consultez la sortie du nœud Mammouth.

Avec **Return Only the Reply** activé, le texte de la réponse se trouve dans `message.content`. Vous pouvez le transmettre à un autre nœud, par exemple pour l'envoyer par e-mail ou l'enregistrer dans votre outil de travail.

## En cas de problème

| Problème | Vérification |
| --- | --- |
| Le nœud **Mammouth** est introuvable | Sur n8n Cloud, demandez au propriétaire ou à un administrateur de l'installer depuis **More from the community**. Sur une instance auto-hébergée, vérifiez que les nœuds communautaires sont autorisés et que le package est installé, puis rechargez l'éditeur. |
| Le test des credentials échoue | Vérifiez l'URL de base, la clé sans `Bearer` ni espaces superflus et l'accès réseau de votre instance à l'API Mammouth. |
| Aucun modèle ne s'affiche | Vérifiez les credentials et l'accès à `/v1/models`. |
| L'exécution échoue malgré un test réussi | Vérifiez le solde de crédits API, le modèle choisi et les paramètres de l'opération. Le test des credentials n'effectue pas de génération. |
| Une opération **Image** ou **Text** échoue | Vérifiez que son endpoint et ses paramètres sont pris en charge par l'API et le modèle ; commencez par **Chat → Send Message** pour tester la génération de texte. |

## Voir aussi

- [Documentation officielle n8n](https://docs.n8n.io/)
- [Installer et héberger n8n](https://docs.n8n.io/hosting/)
- [Documentation de l'API Mammouth](/fr/docs/api-quick-start/)
- [Gérer vos clés et crédits API](https://mammouth.ai/app/account/settings/api)
- [Code source de l'intégration n8n Mammouth](https://github.com/mammouth-ai/n8n-integration)
- [NPM Packages](https://www.npmjs.com/package/n8n-nodes-mammouth)