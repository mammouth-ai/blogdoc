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

## 🛠️ Connecteurs MCP personnalisés

Si les connecteurs pré-construits ne couvrent pas vos besoins, vous pouvez configurer votre propre **serveur MCP personnalisé**. C'est utile si vous utilisez un outil ou service qui n'est pas listé ci-dessus, ou si vous souhaitez vous connecter à une API interne.

Pour configurer un MCP personnalisé :

1. Allez dans vos **paramètres de compte** : [mammouth.ai/app/account/settings](https://mammouth.ai/app/account/settings)
2. Descendez jusqu'à la section **Connecteurs**
3. Cliquez sur **Ajouter un MCP personnalisé**
4. Entrez l'URL de votre serveur MCP et sa configuration
5. Enregistrez — votre connecteur personnalisé est maintenant disponible dans vos conversations.

::: tip
Les serveurs MCP doivent être accessibles via une URL publique ou un proxy local. Consultez la [documentation du Model Context Protocol](https://modelcontextprotocol.io/) pour plus de détails sur la configuration de votre propre serveur.
:::

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
- Pour les équipes : les **propriétaires** peuvent configurer et déployer des connecteurs pour tous les membres de l'équipe via la page **Permissions**. Voir [Equipes & Entreprises](../teams/).

---

## ➡️ Et ensuite ?

👉 **[Premiers pas avec Mammouth](../introduction-to-mammouth/)**

👉 **[Choisir le bon modèle d'IA](../choosing-the-right-ai-model/)**