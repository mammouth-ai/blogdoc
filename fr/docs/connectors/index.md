# Connecteurs (MCP)

Les connecteurs permettent à Mammouth d'interagir avec vos outils et services externes directement depuis le chat. Propulsés par le **Model Context Protocol (MCP)**, ils permettent à l'IA de lire et d'agir sur vos données en temps réel — sans copier-coller.

---

## 🔌 Qu'est-ce qu'un connecteur ?

Un connecteur est un pont entre Mammouth et un service externe. Une fois connecté, l'IA peut :

- **Rechercher** vos documents, tickets ou pages
- **Lire** des fichiers ou des enregistrements spécifiques
- **Créer ou mettre à jour** des éléments (lorsque le connecteur le supporte)

Pensez-y comme donner à l'IA un accès direct à votre espace de travail, pour qu'elle puisse récupérer le contexte dont elle a besoin sans que vous ayez à copier manuellement les informations.

---

## ✅ Connecteurs pré-construits

Mammouth propose 4 connecteurs pré-construits que vous pouvez activer en un clic :

| Connecteur | Ce qu'il fait |
|---|---|
| **Microsoft 365** | Rechercher et lire vos emails Outlook, fichiers OneDrive et plus |
| **GitHub** | Rechercher des dépôts, lire les tickets, parcourir le code et les pull requests |
| **Notion** | Rechercher et lire vos pages et bases de données Notion |
| **Atlassian** | Rechercher et lire vos pages Confluence et tickets Jira |

Aucune configuration nécessaire — il suffit de vous connecter avec votre compte et le connecteur est prêt à l'emploi.

---

## 🔧 Comment activer un connecteur

1. Allez dans vos **paramètres de compte** : [mammouth.ai/app/account/settings](https://mammouth.ai/app/account/settings)
2. Descendez jusqu'à la section **Connecteurs**
3. Cliquez sur **Connecter** sur le connecteur que vous souhaitez activer
4. Connectez-vous avec votre compte de service externe
5. C'est tout ! Le connecteur est maintenant disponible dans vos conversations.

Une fois activé, Mammouth utilisera automatiquement le connecteur lorsque cela est pertinent par rapport à votre prompt.

---

## 🛠️ Connecteurs MCP personnalisés {#custom-mcp}

Si les connecteurs pré-construits ne couvrent pas vos besoins, vous pouvez configurer votre propre **serveur MCP personnalisé**. C'est utile si vous utilisez un outil ou service qui n'est pas listé ci-dessus, ou si vous souhaitez vous connecter à vos propres services.

Pour configurer un MCP personnalisé :

1. Allez dans vos **paramètres de compte** : [mammouth.ai/app/account/settings](https://mammouth.ai/app/account/settings)
2. Descendez jusqu'à la section **Connecteurs**
3. Cliquez sur la tuile **MCP personnalisé**
4. Cochez **Je comprends et je fais confiance à ce serveur.** puis **Continuer**
5. Donnez un nom à votre connecteur et entrez l'URL de votre serveur MCP
6. Si votre serveur nécessite une authentification, choisissez comment il s'authentifie : **Connexion automatique** (OAuth, recommandée), **Clé API**, ou **Connexion manuelle (ID client et secret)** — voir ci-dessous
7. Cliquez sur **Ajouter un MCP personnalisé**. Votre connecteur personnalisé est maintenant disponible dans vos conversations.

::: tip
Votre serveur doit être accessible publiquement : les adresses locales (`localhost`, `127.0.0.1`) et les IP privées sont refusées. Un abonnement actif est nécessaire pour ajouter un connecteur personnalisé. Consultez la [documentation du Model Context Protocol](https://modelcontextprotocol.io/) pour plus de détails sur la configuration de votre propre serveur.
:::

### Prérequis du serveur

Mammouth utilise le transport **Streamable HTTP** uniquement et appelle `initialize` puis `tools/list`.

À l'ajout, Mammouth appelle `tools/list` une fois. Si votre serveur répond, le connecteur est prêt.

Si votre serveur répond 401 ou 403 et que vous ne fournissez pas de clé API, le connecteur est créé en attente d'autorisation : choisissez ci-dessous comment la compléter.

### Connexion automatique (recommandée)

La **connexion automatique** couvre la plupart des serveurs OAuth et ne nécessite aucune configuration de votre côté. Lorsque vous cliquez sur **Connecter**, Mammouth découvre vos adresses OAuth et s'enregistre comme client à la volée.

Votre serveur doit être servi en HTTPS, accepter l'**enregistrement dynamique de client** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) et accepter le retour de l'utilisateur sur l'URI de redirection affichée par Mammouth (`https://mammouth.ai/api/mcp/oauth/callback`).

Mammouth vérifie d'abord `/.well-known/oauth-protected-resource` sur votre serveur MCP. Si votre serveur d'autorisation est sur un autre domaine, publiez ce fichier : son champ `resource` reprend l'URL de votre serveur MCP et `authorization_servers` désigne ce domaine.

Si ce fichier n'est pas publié, ou ne désigne aucun serveur d'autorisation, Mammouth considère le domaine de votre serveur MCP lui-même comme serveur d'autorisation et cherche ses métadonnées à `/.well-known/oauth-authorization-server` (avec repli sur `/.well-known/openid-configuration` si ce fichier est absent).

```json
{
  "issuer": "https://exemple.fr",
  "authorization_endpoint": "https://exemple.fr/oauth/authorize",
  "token_endpoint": "https://exemple.fr/oauth/token",
  "registration_endpoint": "https://exemple.fr/oauth/register",
  "response_types_supported": ["code"]
}
```

Si Mammouth ne trouve aucun `registration_endpoint` — que ce soit parce qu'aucun fichier de métadonnées n'a été trouvé, ou parce que celui trouvé n'en liste pas — il vous demande alors un ID client et un secret — voir **Connexion manuelle** ci-dessous. Pas besoin de recommencer depuis le début.

### Clé API

Si votre serveur authentifie les requêtes avec une clé statique, choisissez **Clé API** et collez-la. Mammouth l'envoie comme jeton porteur (`Authorization: Bearer <clé>`) sur chaque requête vers votre serveur. Un serveur auquel une clé API est fournie doit être servi en HTTPS.

Vous pouvez changer la clé à tout moment depuis les paramètres du connecteur, y compris après l'avoir déconnecté.

### Connexion manuelle (ID client et secret)

La **connexion manuelle** s'adresse aux serveurs qui ne supportent pas l'enregistrement dynamique de client. Enregistrez Mammouth vous-même dans la console développeur de votre serveur, puis choisissez **Connexion manuelle (ID client et secret)** et renseignez l'**ID client** ainsi que, si votre serveur en exige un, le **secret client** (laissez-le vide pour un client public). Utilisez l'URI de redirection affichée dans le formulaire lors de l'enregistrement de Mammouth sur votre serveur.

Vous pouvez modifier l'ID et le secret d'un client enregistré manuellement à tout moment depuis les paramètres du connecteur, y compris après l'avoir déconnecté.

### Si la connexion est refusée

Lorsque vous ajoutez le connecteur :

| Message | Cause |
| --- | --- |
| This server URL is not allowed. | Adresse locale, IP privée, identifiants dans l'URL, ou protocole autre que `http` / `https` |
| A server given an API key must use HTTPS. | Vous avez fourni une clé API mais l'URL du serveur utilise `http` |
| The MCP server took too long to respond. | Plus de 10 secondes pour accepter la connexion ou pour répondre à `tools/list` |
| This MCP server returned too much metadata. | Plus de 100 outils, un schéma de plus de 32 Ko, ou un nom d'outil de plus de 200 caractères |
| Choose a different name for this MCP connector. | Nom sans caractère alphanumérique, ou réservé par un connecteur intégré |
| MCP connector name is already in use. | Vous avez déjà un connecteur portant ce nom |
| Paid access required. Check your subscription state in your Account settings. | Votre abonnement est inactif |
| Your team does not allow personal custom MCP connectors. | Les connecteurs personnels ont été désactivés par votre équipe |
| Too many custom MCP connection attempts. Please try again in a minute. | Plus de cinq ajouts en une minute |
| Could not connect to this MCP server. | Serveur injoignable ou réponse inattendue |
| Impossible de se connecter à ce serveur MCP. Vérifiez l'URL et réessayez. | Message par défaut pour tout autre cas, par exemple une URL sans schéma (`exemple.fr/mcp`) |
| This server refused the API key. | Mammouth a testé la clé auprès de votre serveur et elle a été rejetée |
| Impossible d'enregistrer ces identifiants. | L'ID client ou le secret client soumis a été rejeté |

Lorsque vous cliquez sur **Connecter**, Mammouth ouvre une fenêtre vers votre serveur d'autorisation. Si les prérequis ci-dessus ne sont pas réunis, cette fenêtre n'aboutit pas et Mammouth affiche **Connexion annulée** une fois que vous l'avez refermée. Reprenez alors les prérequis un à un.

---

## 💡 Exemples d'utilisation

- **« Trouve le dernier email d'Alice à propos du rapport Q3 »** — Le connecteur Microsoft 365 recherche dans votre boîte de réception
- **« Résume les tickets ouverts dans le dépôt frontend »** — Le connecteur GitHub récupère les données des tickets
- **« Que dit notre roadmap produit à propos de la prochaine release ? »** — Le connecteur Notion recherche dans votre espace de travail
- **« Quel est le statut du ticket PROJ-1234 ? »** — Le connecteur Atlassian recherche le ticket Jira

---

## 📚 Tutoriels de connexion

Des tutoriels pas-à-pas pour connecter des services spécifiques en tant que [connecteur MCP personnalisé](#custom-mcp) :

- **[GitLab](./guides/gitlab/)**

D'autres tutoriels arrivent bientôt.

---

## ⚠️ Bon à savoir

- Les connecteurs n'accèdent aux données que lorsque vous posez explicitement une question qui le nécessite.
- Vous pouvez déconnecter un connecteur à tout moment depuis vos paramètres de compte.
- Pour les équipes : le **propriétaire principal** peut configurer et déployer des connecteurs pour tous les membres de l'équipe via la page **Permissions**. Voir [Equipes & Entreprises](../teams/).

---

## ➡️ Et ensuite ?

👉 **[Premiers pas avec Mammouth](../introduction-to-mammouth/)**

👉 **[Choisir le bon modèle d'IA](../choosing-the-right-ai-model/)**