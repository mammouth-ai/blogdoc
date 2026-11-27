# Connecteurs (MCP)

Les connecteurs permettent à Mammouth d'interagir avec vos outils et services externes directement depuis le chat. Propulsés par le **Model Context Protocol (MCP)**, ils permettent à l'IA de lire et d'utiliser vos données en temps réel, sans copier-coller.

---

## ✅ Connecteurs préconfigurés

Mammouth propose 4 connecteurs préconfigurés que vous pouvez activer en un clic depuis [les paramètres des connecteurs](https://mammouth.ai/app/account/settings/connectors) :

| Connecteur | Fonction |
|---|---|
| **Microsoft 365** | Rechercher et lire vos emails Outlook, fichiers OneDrive et plus encore |
| **GitHub** | Rechercher des dépôts, lire des tickets et parcourir le code et les pull requests |
| **Notion** | Rechercher et lire vos pages et bases de données Notion |
| **Atlassian** | Rechercher et lire vos pages Confluence et tickets Jira |

Aucune configuration n'est nécessaire : connectez-vous simplement avec votre compte et le connecteur est prêt à l'emploi.

---

## 🛠️ Connecteurs MCP personnalisés {#custom-mcp}

Si les connecteurs préconfigurés ne couvrent pas vos besoins, vous pouvez configurer votre propre **serveur MCP personnalisé**. C'est utile si vous utilisez un outil ou service qui n'est pas listé ci-dessus (comme [**Gmail**](./guides/gmail/), **Google Drive**, etc.) ou si vous souhaitez connecter vos propres services.

::: tip Besoin d’aide pour connecter un service ?
Demandez à notre [Assistant MCP](https://mammouth.ai/app/assistants/join/b7e4fe25-aa1e-4fa3-9548-31ddabdad524) de vous guider pas à pas dans la configuration de votre connecteur.
:::

Pour configurer un MCP personnalisé :

1. Sélectionnez **Ajouter un MCP personnalisé** sur la **page des connecteurs** : [mammouth.ai/app/account/settings/connectors](https://mammouth.ai/app/account/settings/connectors)
2. Cochez **Je comprends et je fais confiance à ce serveur.** puis cliquez sur **Continuer**
3. Donnez un nom à votre connecteur et saisissez l'URL de votre serveur MCP
4. Si votre serveur nécessite une authentification, choisissez la méthode : **Connexion automatique** (OAuth, recommandée), **Clé API** ou **Connexion manuelle (ID client et secret)** — voir ci-dessous
5. Une fois la connexion validée, votre connecteur est disponible dans vos conversations.

::: info Trouver l'URL (étape 3)
Consultez la documentation MCP officielle de l'outil ou du service à connecter. Recherchez par exemple « MCP » suivi du nom de l'outil, puis copiez l'URL indiquée dans sa documentation. Elle est généralement fournie explicitement, par exemple `https://mcp.stripe.com` ou `https://mapstools.googleapis.com/mcp`.
:::

::: tip
Votre serveur doit être accessible publiquement : les adresses locales (`localhost`, `127.0.0.1`) et les IP privées sont refusées. Un abonnement actif est nécessaire pour ajouter un connecteur personnalisé. Consultez la [documentation du Model Context Protocol](https://modelcontextprotocol.io/) pour en savoir plus sur la configuration de votre propre serveur.
:::

### Prérequis du serveur

Mammouth utilise uniquement le transport **Streamable HTTP** et appelle `initialize`, puis `tools/list`.

Lors de l'ajout, Mammouth appelle `tools/list` une fois. Si votre serveur répond, le connecteur est prêt.

Si votre serveur répond 401 ou 403 et que vous ne fournissez pas de clé API, le connecteur est créé en attente d'autorisation : choisissez ci-dessous comment la compléter.

### Connexion automatique (recommandée)

La **connexion automatique** fonctionne avec la plupart des serveurs OAuth et ne nécessite aucune configuration de votre part. Lorsque vous cliquez sur **Connecter**, Mammouth découvre vos points de terminaison OAuth et s'enregistre comme client à la volée.

Votre serveur doit être accessible en HTTPS, accepter l'**enregistrement dynamique de client** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) et autoriser le retour de l'utilisateur vers l'URI de redirection affichée par Mammouth (`https://mammouth.ai/api/mcp/oauth/callback`).

Mammouth vérifie d'abord `/.well-known/oauth-protected-resource` sur votre serveur MCP. Si votre serveur d'autorisation se trouve sur un autre domaine, publiez ce fichier : son champ `resource` reprend l'URL de votre serveur MCP et `authorization_servers` désigne ce domaine.

Si ce fichier n'est pas publié ou ne désigne aucun serveur d'autorisation, Mammouth considère le domaine de votre serveur MCP comme le serveur d'autorisation et recherche ses métadonnées à `/.well-known/oauth-authorization-server` (avec repli sur `/.well-known/openid-configuration` si le premier fichier est absent).

```json
{
  "issuer": "https://example.com",
  "authorization_endpoint": "https://example.com/oauth/authorize",
  "token_endpoint": "https://example.com/oauth/token",
  "registration_endpoint": "https://example.com/oauth/register",
  "response_types_supported": ["code"]
}
```

Si Mammouth ne trouve aucun `registration_endpoint` — qu'aucun fichier de métadonnées n'ait été trouvé ou que celui trouvé n'en contienne pas — il vous demande un ID client et un secret. Voir **Connexion manuelle** ci-dessous. Vous n'avez pas besoin de recommencer.

### Clé API

Si votre serveur authentifie les requêtes avec une clé statique, choisissez **Clé API** et collez-la. Mammouth l'envoie à chaque requête vers votre serveur sous forme de jeton porteur (`Authorization: Bearer <key>`). Un serveur auquel une clé API est fournie doit être accessible en HTTPS.

Vous pouvez modifier la clé à tout moment dans les paramètres du connecteur, y compris après l'avoir déconnecté.

### Connexion manuelle (ID client et secret)

La **connexion manuelle** s'adresse aux serveurs qui ne prennent pas en charge l'enregistrement dynamique de client. Enregistrez vous-même Mammouth dans la console développeur de votre serveur, puis choisissez **Connexion manuelle (ID client et secret)** et saisissez l'**ID client** et, si votre serveur en exige un, le **secret client** (laissez le champ vide pour un client public). Utilisez l'URI de redirection affichée dans le formulaire lors de l'enregistrement de Mammouth sur votre serveur.

Vous pouvez modifier à tout moment l'ID et le secret d'un client enregistré manuellement depuis les paramètres du connecteur, y compris après l'avoir déconnecté.

### Si la connexion est refusée

Lorsque vous ajoutez le connecteur :

| Message | Cause |
| --- | --- |
| This server URL is not allowed. | Adresse locale, IP privée, identifiants dans l'URL ou protocole autre que `http` / `https` |
| A server given an API key must use HTTPS. | Vous avez fourni une clé API, mais l'URL du serveur utilise `http` |
| The MCP server took too long to respond. | Plus de 10 secondes pour accepter la connexion ou répondre à `tools/list` |
| This MCP server returned too much metadata. | Plus de 100 outils, un schéma de plus de 32 Ko ou un nom d'outil de plus de 200 caractères |
| Choose a different name for this MCP connector. | Nom sans caractère alphanumérique ou réservé par un connecteur intégré |
| MCP connector name is already in use. | Vous avez déjà un connecteur portant ce nom |
| Paid access required. Check your subscription state in your Account settings. | Votre abonnement est inactif |
| Your team does not allow personal custom MCP connectors. | Votre équipe a désactivé les connecteurs MCP personnalisés personnels |
| Too many custom MCP connection attempts. Please try again in a minute. | Plus de cinq ajouts en une minute |
| Could not connect to this MCP server. | Le serveur est injoignable ou a répondu de manière inattendue |
| Could not connect to this MCP server. Check the URL and try again. | Message par défaut pour tout autre cas, par exemple une URL sans schéma (`example.com/mcp`) |
| This server refused the API key. | Mammouth a testé la clé auprès de votre serveur, qui l'a rejetée |
| Could not save these credentials. | L'ID client ou le secret client fourni a été rejeté |

Lorsque vous cliquez sur **Connecter**, Mammouth ouvre une fenêtre vers votre serveur d'autorisation. Si les prérequis ci-dessus ne sont pas réunis, le processus n'aboutit pas et Mammouth affiche **Connection cancelled** lorsque vous fermez la fenêtre. Vérifiez les prérequis un par un.

---

## 💡 Exemples d'utilisation

- **« Trouve le dernier email d'Alice à propos du rapport Q3 »** — Le connecteur Microsoft 365 recherche dans votre boîte de réception
- **« Résume les tickets ouverts dans le dépôt frontend »** — Le connecteur GitHub récupère les données des tickets
- **« Que dit notre feuille de route produit à propos de la prochaine version ? »** — Le connecteur Notion recherche dans votre espace de travail
- **« Quel est le statut du ticket PROJ-1234 ? »** — Le connecteur Atlassian recherche le ticket Jira

---

## 📚 Tutoriels de connexion

Des tutoriels pas à pas pour connecter des services spécifiques en tant que [connecteur MCP personnalisé](#custom-mcp) :

- **[Google : Gmail, Drive, Docs, Sheets, Slides, Calendar, Tasks et Chat](./guides/gmail/)**
- **[GitLab](./guides/gitlab/)**
- **[Meta Ads](./guides/meta-ads/)**

D'autres tutoriels arrivent bientôt.

---

## ⚠️ Bon à savoir

- Les connecteurs n'accèdent aux données que lorsque vous posez explicitement une question qui le nécessite.
- Vous pouvez déconnecter un connecteur à tout moment depuis les paramètres de votre compte.
- Pour les équipes : le **propriétaire principal** peut configurer et déployer des connecteurs pour tous les membres de l'équipe via la page **Permissions**. Voir [Équipes et entreprises](../teams/).

---

## ➡️ Et ensuite ?

👉 **[Premiers pas avec Mammouth](../introduction-to-mammouth/)**

👉 **[Choisir le bon modèle d'IA](../choosing-the-right-ai-model/)**
