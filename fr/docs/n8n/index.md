# Utiliser Mammouth dans n8n

Connectez l'API Mammouth à vos workflows n8n pour automatiser des tâches avec l'IA : résumer un texte, traduire un message ou préparer une réponse à partir des données de vos autres outils.

::: info Intégration en préparation
Ce guide décrit la version de développement du nœud **Mammouth**. Pour suivre les étapes de configuration, ce nœud doit déjà être installé sur votre instance n8n auto-hébergée par son administrateur. Sa disponibilité dans le catalogue n8n ou sur n8n Cloud n'est pas acquise.
:::

## Qu'est-ce que n8n ?

[n8n](https://n8n.io/) est un outil d'automatisation qui permet de relier des applications et des services dans un éditeur visuel.

Une automatisation, appelée **workflow**, est composée de **nœuds** (*nodes*). Chaque nœud réalise une étape : déclencher le workflow, récupérer des données, appeler une API ou envoyer un résultat vers une autre application.

Par exemple : **réception d'un formulaire → résumé avec Mammouth → envoi du résumé par e-mail**. Vous configurez les étapes et les données à transmettre entre elles, sans avoir à développer toute l'intégration vous-même.

## Comment installer n8n ?

Pour installer et configurer n8n, suivez la [documentation officielle d'auto-hébergement de n8n](https://docs.n8n.io/hosting/). Elle présente les méthodes disponibles, leurs prérequis et les recommandations de sécurité.

n8n propose aussi une offre hébergée, **n8n Cloud**, qui ne nécessite pas d'installation de votre part. Attention : disposer d'un compte n8n Cloud ne donne pas automatiquement accès au nœud Mammouth en développement.

**Installer n8n et ajouter le nœud Mammouth sont deux étapes distinctes.** Avant de poursuivre, vérifiez que **Mammouth** apparaît dans le sélecteur de nœuds de votre instance. Sinon, rapprochez-vous de votre administrateur pour le chargement de la version de développement.

## Que permet l'intégration Mammouth ?

Le nœud **Mammouth** appelle l'API Mammouth depuis un workflow. Vous pouvez utiliser les données d'un nœud précédent dans votre prompt, choisir un modèle et transmettre la réponse aux étapes suivantes.

Pour commencer, utilisez **Chat → Complete** afin de :

- **Résumer** des messages, des comptes rendus ou des documents déjà convertis en texte.
- **Rédiger ou reformuler** un contenu selon vos consignes.
- **Traduire** du texte ou **classer** des demandes par catégorie.

La version de développement expose les ressources suivantes :

| Ressource | Opération | Usage |
| --- | --- | --- |
| **Chat** | **Complete** | Générer une réponse à partir de messages et de consignes. |
| **Image** | **Create** | Demander la génération d'une image à partir d'un prompt, si le modèle et l'API le permettent. |
| **Text** | **Complete**, **Edit**, **Moderate** | Appeler les endpoints de complétion texte, d'édition ou de modération, s'ils sont pris en charge par l'API. |

::: warning Compatibilité des opérations
La présence d'une opération dans le nœud ne garantit pas sa prise en charge par l'API Mammouth. Les opérations **Image** et **Text**, ainsi que leurs options, doivent être vérifiées avec le modèle choisi. La liste des modèles n'est pas filtrée par opération : sélectionnez un modèle adapté à votre usage.

Ce nœud est un **nœud d'actions**, pas un sous-nœud **Chat Model** à connecter au port modèle d'un **AI Agent** n8n.
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

L'URL de base n'est pas préremplie : saisissez bien l'adresse complète avec `/v1`, sans ajouter `/chat/completions`. Le nœud ajoute lui-même le chemin de chaque opération et le préfixe d'authentification `Bearer`.

Le test des credentials appelle `GET https://api.mammouth.ai/v1/models`. Un test réussi valide l'accès à la liste des modèles, pas la compatibilité de toutes les opérations. Vous pouvez ensuite réutiliser les mêmes credentials dans vos autres nœuds Mammouth.

## Étape 3 — Tester votre premier workflow

1. Ajoutez un déclencheur manuel (**Manual Trigger**) et reliez-le au nœud **Mammouth**.
2. Sélectionnez vos credentials **Mammouth API**.
3. Choisissez **Resource → Chat**, puis **Operation → Complete**.
4. Dans **Model**, sélectionnez un modèle de chat disponible dans la liste.
5. Dans **Prompt**, cliquez sur **Add Message**, choisissez **Role → User** et saisissez dans **Content** : « Explique en trois phrases ce qu'est un workflow n8n. »
6. Exécutez le workflow et consultez la sortie du nœud Mammouth.

Avec **Simplify** activé, le texte de la réponse se trouve dans `message.content`. Vous pouvez le transmettre à un autre nœud, par exemple pour l'envoyer par e-mail ou l'enregistrer dans votre outil de travail.

## En cas de problème

| Problème | Vérification |
| --- | --- |
| Le nœud **Mammouth** est introuvable | Vérifiez auprès de l'administrateur que l'intégration est installée et chargée, puis rechargez l'interface n8n. |
| Le test des credentials échoue | Vérifiez l'URL de base, la clé sans `Bearer` ni espaces superflus et l'accès réseau de votre instance à l'API Mammouth. |
| Aucun modèle ne s'affiche | Vérifiez les credentials et l'accès à `/v1/models`. |
| L'exécution échoue malgré un test réussi | Vérifiez le solde de crédits API, le modèle choisi et les paramètres de l'opération. Le test des credentials n'effectue pas de génération. |
| Une opération **Image** ou **Text** échoue | Vérifiez que son endpoint et ses paramètres sont pris en charge par l'API et le modèle ; commencez par **Chat → Complete** pour tester la génération de texte. |

## Voir aussi

- [Documentation officielle n8n](https://docs.n8n.io/)
- [Installer et héberger n8n](https://docs.n8n.io/hosting/)
- [Documentation de l'API Mammouth](/fr/docs/api-quick-start/)
- [Gérer vos clés et crédits API](https://mammouth.ai/app/account/settings/api)
- [NPM Packages](https://www.npmjs.com/package/n8n-nodes-mammouth)