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
5. Donnez un nom à votre connecteur, entrez l'URL de votre serveur MCP et cliquez sur **Ajouter un MCP personnalisé**
6. Votre connecteur personnalisé est maintenant disponible dans vos conversations.

::: tip
Votre serveur doit être accessible publiquement : les adresses locales (`localhost`, `127.0.0.1`) et les IP privées sont refusées. Un abonnement actif est nécessaire pour ajouter un connecteur personnalisé. Consultez la [documentation du Model Context Protocol](https://modelcontextprotocol.io/) pour plus de détails sur la configuration de votre propre serveur.
:::

### Prérequis du serveur

Mammouth utilise le transport **Streamable HTTP** uniquement et appelle `initialize` puis `tools/list`. Chaque outil doit déclarer un `inputSchema` de type `object`.

À l'ajout, Mammouth appelle `tools/list` une fois. Si votre serveur répond, le connecteur est prêt.

### Serveurs protégés

Si votre serveur répond 401 ou 403, le connecteur est créé en attente d'autorisation. Le flux OAuth démarre lorsque vous cliquez sur **Connecter**.

Votre serveur doit alors être servi en HTTPS, accepter l'**enregistrement dynamique de client** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) et le retour de l'utilisateur sur `https://mammouth.ai/api/mcp/oauth/callback`.

Mammouth cherche vos adresses OAuth aux emplacements conventionnels : `/authorize`, `/token` et `/register`.

Si elles sont ailleurs, publiez `/.well-known/oauth-authorization-server`. Le fichier doit être complet : Mammouth le suit sans revenir aux emplacements conventionnels.

```json
{
  "issuer": "https://exemple.fr",
  "authorization_endpoint": "https://exemple.fr/oauth/authorize",
  "token_endpoint": "https://exemple.fr/oauth/token",
  "registration_endpoint": "https://exemple.fr/oauth/register",
  "response_types_supported": ["code"]
}
```

Si votre serveur d'autorisation est sur un autre domaine, publiez en plus `/.well-known/oauth-protected-resource`. Son champ `resource` reprend l'URL de votre serveur MCP et `authorization_servers` désigne ce domaine.

::: warning
**Vous ne pouvez pas fournir d'identifiants vous-même.** Mammouth ne sait obtenir un jeton que par le flux OAuth ci-dessus et n'offre aucun champ pour une clé d'API ou un `client_id` déjà enregistré.
:::

### Si la connexion est refusée

Lorsque vous ajoutez le connecteur :

| Message | Cause |
| --- | --- |
| This server URL is not allowed. | Adresse locale, IP privée, identifiants dans l'URL, ou protocole autre que `http` / `https` |
| The MCP server took too long to respond. | Plus de 10 secondes pour accepter la connexion ou pour répondre à `tools/list` |
| This MCP server returned too much metadata. | Plus de 100 outils, un schéma de plus de 32 Ko, ou un nom d'outil de plus de 200 caractères |
| Choose a different name for this MCP connector. | Nom sans caractère alphanumérique, ou réservé par un connecteur intégré |
| Could not connect to this MCP server. | Serveur injoignable ou réponse inattendue |
| Impossible de se connecter à ce serveur MCP. Vérifiez l'URL et réessayez. | Message par défaut : URL sans schéma (`exemple.fr/mcp`), abonnement inactif, connecteurs personnels désactivés par votre équipe, nom déjà utilisé par un de vos connecteurs, ou plus de cinq ajouts en une minute |

Lorsque vous cliquez sur **Connecter**, Mammouth ouvre une fenêtre vers votre serveur d'autorisation. Si les prérequis ci-dessus ne sont pas réunis, cette fenêtre n'aboutit pas et Mammouth affiche **Connexion annulée** une fois que vous l'avez refermée. Reprenez alors les prérequis un à un.

---

## 💡 Exemples d'utilisation

- **« Trouve le dernier email d'Alice à propos du rapport Q3 »** — Le connecteur Microsoft 365 recherche dans votre boîte de réception
- **« Résume les tickets ouverts dans le dépôt frontend »** — Le connecteur GitHub récupère les données des tickets
- **« Que dit notre roadmap produit à propos de la prochaine release ? »** — Le connecteur Notion recherche dans votre espace de travail
- **« Quel est le statut du ticket PROJ-1234 ? »** — Le connecteur Atlassian recherche le ticket Jira

---

## ⚠️ Bon à savoir

- Les connecteurs n'accèdent aux données que lorsque vous posez explicitement une question qui le nécessite.
- Vous pouvez déconnecter un connecteur à tout moment depuis vos paramètres de compte.
- Pour les équipes : le **propriétaire principal** peut configurer et déployer des connecteurs pour tous les membres de l'équipe via la page **Permissions**. Voir [Equipes & Entreprises](../teams/).

---

## ➡️ Et ensuite ?

👉 **[Premiers pas avec Mammouth](../introduction-to-mammouth/)**

👉 **[Choisir le bon modèle d'IA](../choosing-the-right-ai-model/)**