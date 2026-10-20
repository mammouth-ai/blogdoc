# Connecter Meta Ads (MCP)

Meta propose un serveur MCP officiel pour Meta Ads : il permet à Mammouth de lire les performances de vos campagnes et, si vous l'autorisez, de créer et gérer campagnes, ensembles de publicités et publicités. Ce tutoriel montre comment le connecter à Mammouth en tant que [connecteur MCP personnalisé](../../#custom-mcp).

::: tip Avant de commencer
Il vous faut :
- Un compte Facebook ayant accès aux comptes publicitaires que vous voulez utiliser
- Un compte [Meta for Developers](https://developers.facebook.com/) (gratuit, connectez-vous avec le même compte Facebook)
:::

## URL du serveur

Utilisez `https://mcp.facebook.com/ads`, exactement comme écrit : n'ajoutez pas `/mcp` à la fin, sinon Meta répond que le serveur n'existe pas.

---

## Connexion automatique (OAuth)

Non disponible. Meta n'accepte l'enregistrement automatique que pour les clients MCP qu'il a validés un par un (Claude, ChatGPT, Cursor, Codex…), et Mammouth ne fait pas encore partie de cette liste. Si vous essayez, la connexion échoue avec `Dynamic registration is not available for this client`. Utilisez plutôt la **connexion manuelle** ci-dessous.

## Connexion manuelle (ID client) — recommandée

Vous créez une seule fois votre propre application Meta, puis vous vous connectez avec Facebook. Mammouth renouvelle ensuite l'accès automatiquement.

### 1. Créer l'application Meta

1. Rendez-vous sur [developers.facebook.com/apps](https://developers.facebook.com/apps) et cliquez sur **Create App**.
2. Donnez un nom à l'application (par exemple `Mammouth Meta Ads`) et continuez.
3. À l'étape **Use cases**, choisissez **Ads and monetization** → **Create & manage ads with ads MCP server**.
4. À l'étape **Business**, sélectionnez le portefeuille business qui possède vos comptes publicitaires. Si vos comptes publicitaires ne sont pas gérés via un portefeuille business, choisissez **I don't want to connect a business portfolio yet** : vous pourrez en ajouter un plus tard.
5. Terminez l'assistant pour créer l'application.

<!-- screenshot: use case selection -->

::: info
Le cas d'usage ads MCP ajoute aussi **Facebook Login for Business** à votre application, que vous configurerez à l'étape 3.
:::

### 2. Vérifier les permissions {#permissions}

Dans votre application, ouvrez **Use cases**, cliquez sur **Customize** sur le cas d'usage ads MCP server, puis ouvrez l'onglet **Permissions and features**. Vérifiez que ces permissions sont ajoutées :

- `ads_mcp_management` (obligatoire)
- `ads_read` et `ads_management`
- `business_management`, `catalog_management`
- `pages_show_list`, `pages_manage_ads`
- `instagram_basic`, `instagram_branded_content_ads_brand`

Mammouth demande toutes les permissions que Meta liste pour son serveur MCP : s'il en manque une, la fenêtre de connexion Facebook peut échouer.

<!-- screenshot: permissions and features tab -->

L'**Advanced Access** n'est nécessaire que si vous gérez des publicités pour le compte d'autres entreprises (agences, partenaires). Il nécessite l'App Review de Meta. Pour vos propres comptes publicitaires, l'accès par défaut suffit.

### 3. Ajouter l'URI de redirection de Mammouth

1. Dans Mammouth, ajoutez un connecteur MCP personnalisé avec l'URL de serveur ci-dessus et choisissez **Connexion manuelle**.
2. Copiez l'**URI de redirection** affichée dans le formulaire. Gardez le formulaire ouvert.
3. Dans votre application Meta, ouvrez **Facebook Login for Business** → **Settings**.
4. Activez **Client OAuth login** et **Web OAuth login**.
5. Collez l'URI de redirection dans **Valid OAuth Redirect URIs**, au caractère près, puis cliquez sur **Save Changes**.

<!-- screenshot: Facebook Login for Business settings -->

### 4. Se connecter dans Mammouth

1. Dans votre application Meta, ouvrez **App settings** → **Basic** et copiez l'**App ID**.
2. De retour dans le formulaire de connexion manuelle de Mammouth, collez-le comme **ID client** et **laissez le secret client vide**.
3. Cliquez sur **Connecter**, connectez-vous avec Facebook, acceptez toutes les permissions demandées et sélectionnez les comptes publicitaires que Mammouth peut utiliser.

<!-- screenshot: Mammouth manual connection form -->

::: warning Ne saisissez pas l'App Secret
Votre application Meta a un **App Secret**, mais le serveur MCP de Meta ne l'utilise pas : l'authentification repose sur PKCE. Si vous remplissez le champ secret client, Mammouth le refuse avec `This server does not support the submitted client authentication method`.
:::

::: info Mode Développement
Tant que votre application Meta est en mode **Development**, seules les personnes ayant un rôle sur l'application (admin, développeur, testeur) peuvent se connecter. Pour que vos collègues utilisent votre application, ajoutez-les dans **App roles** → **Roles**.
:::

## Clé API (jeton d'accès)

Meta accepte aussi un jeton d'accès envoyé comme bearer token. C'est plus rapide à mettre en place, mais il faudra remplacer le jeton quand il expire.

1. Générez un jeton, au choix :
   - un **user access token** avec le [Graph API Explorer](https://developers.facebook.com/tools/explorer/), en incluant les permissions listées ci-dessus. Il expire au bout d'une heure environ, ou de 60 jours environ une fois échangé contre un jeton longue durée.
   - un **system user access token**, depuis votre portefeuille business ([guide de Meta](https://developers.facebook.com/docs/business-management-apis/system-users)). Seuls les system users avec le rôle **Employee** fonctionnent : les jetons de system users Admin sont refusés.
2. Dans Mammouth, ajoutez un connecteur MCP personnalisé avec l'URL de serveur ci-dessus, choisissez **Clé API** et collez le jeton.

---

## Dépannage

| Message | Solution |
| --- | --- |
| `Dynamic registration is not available for this client` | Vous avez choisi la connexion automatique. Utilisez la **connexion manuelle**. |
| `MCP server not found for path: /ads/mcp` | Retirez `/mcp` de l'URL du serveur. |
| Facebook indique que l'URI de redirection n'est pas autorisée | L'URI saisie dans **Valid OAuth Redirect URIs** ne correspond pas exactement à celle de Mammouth. Copiez-la à nouveau depuis le formulaire de connexion manuelle. |
| Facebook indique que certaines permissions ou scopes sont invalides | Il manque une permission à votre application. Voir l'[étape 2](#permissions). |
| `This server does not support the submitted client authentication method` | Laissez le **secret client** vide. |
| `Error POSTing to endpoint` (souvent avec une 502) | La connexion a fonctionné, mais Meta refuse les requêtes : il manque généralement `ads_mcp_management`. Ajoutez le cas d'usage ads MCP (étape 1), puis déconnectez et reconnectez le connecteur dans Mammouth pour que la nouvelle permission soit accordée. |

---

## ➡️ Et ensuite ?

👉 **[Retour à Connecteurs (MCP)](../../)**
