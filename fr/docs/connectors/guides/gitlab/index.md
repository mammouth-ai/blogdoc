# Connecter GitLab (MCP)

GitLab embarque un serveur MCP officiel directement dans son instance, sans passerelle tierce nécessaire. Ce tutoriel montre comment le connecter à Mammouth en tant que [connecteur MCP personnalisé](../../#custom-mcp), pour chacune des trois méthodes d'authentification.

::: tip Avant de commencer
Côté GitLab, il vous faut :
- GitLab 18.6 ou supérieur (le serveur MCP est en Beta ; il atteint la disponibilité générale sur l'offre Free avec GitLab 19.2)
- GitLab Duo réglé sur **Always on** ou **On by default**
- L'accès au serveur MCP autorisé — au niveau de l'instance sur Self-Managed/Dedicated, ou pour le groupe de plus haut niveau sur GitLab.com

Consultez la [documentation du serveur MCP GitLab](https://docs.gitlab.com/user/model_context_protocol/mcp_server/) pour savoir comment activer ces options.
:::

## URL du serveur

Utilisez `https://<votre-instance-gitlab>/api/v4/mcp` sur Self-Managed ou Dedicated, ou `https://gitlab.com/api/v4/mcp` sur GitLab.com. C'est la même URL pour les trois méthodes de connexion ci-dessous.

---

## Connexion automatique (OAuth)

Le serveur MCP de GitLab supporte l'**enregistrement dynamique de client** OAuth 2.0 : la connexion automatique fonctionne donc sans rien configurer côté GitLab.

1. Dans Mammouth, ajoutez un connecteur MCP personnalisé avec l'URL de serveur ci-dessus.
2. Choisissez **Connexion automatique**.
3. Cliquez sur **Connecter**. Mammouth s'enregistre auprès de GitLab et ouvre la fenêtre d'autorisation — connectez-vous et approuvez l'accès.

## Clé API

Le serveur MCP de GitLab ne supporte aujourd'hui que l'OAuth : il n'accepte pas de clé API statique ni de personal access token comme identifiant ([GitLab suit le support des PAT comme demande de fonctionnalité](https://gitlab.com/gitlab-org/gitlab/-/issues/586184), pas encore livrée). Utilisez plutôt la **connexion automatique** ou la **connexion manuelle**.

## Connexion manuelle (ID client et secret)

Utilisez cette méthode si l'enregistrement dynamique de client est désactivé sur votre instance GitLab, ou si vous préférez enregistrer une seule application OAuth partagée pour toute votre équipe plutôt que de laisser chaque compte Mammouth enregistrer la sienne.

1. Dans GitLab, créez une application OAuth :
   - **Niveau utilisateur** : votre avatar → **Edit profile** → **Access** → **Applications** → **Add new application**
   - **Niveau groupe** : **Settings** → **Applications** du groupe
   - **Niveau instance** (administrateurs Self-Managed) : **Admin Area** → **Applications** → **New application**
2. Réglez le **Redirect URI** sur celui affiché dans le formulaire de connexion manuelle de Mammouth.
3. Dans **Scopes**, sélectionnez **mcp**.
4. Décochez la case **Confidential** — la connexion manuelle de Mammouth n'envoie aucun secret client, l'application doit donc être enregistrée comme client public.
5. Enregistrez l'application et copiez son **Application ID**.
6. Dans Mammouth, choisissez **Connexion manuelle**, collez cet ID comme **ID client**, et laissez le **secret client** vide.

::: warning
Une application OAuth partagée unique ne peut pas servir des clients MCP utilisant des URI de redirection différentes. Si l'URI de redirection de Mammouth change un jour, il faudra mettre à jour l'application dans GitLab.
:::

---

## ➡️ Et ensuite ?

👉 **[Retour à Connecteurs (MCP)](../../)**
