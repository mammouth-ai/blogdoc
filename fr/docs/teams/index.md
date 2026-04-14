# Pour les Equipes et Entreprises

## 👥 Rôles et droits

Les comptes Equipe reposent sur trois niveaux de rôles :

| Rôle | Droits |
|------|--------|
| **Propriétaire** | Accès à l'intégralité des fonctionnalités de la page Equipe, gestion du plan, de la facturation et des permissions |
| **Administrateur** | Peut inviter, activer et désactiver des membres et d'autres administrateurs. Ne peut pas modifier le plan, la facturation ou les permissions |
| **Membre** | Aucun accès à la page Equipe |

### Invitations groupées

Les membres peuvent être invités **individuellement** ou **par groupe de 100 personnes** via un simple copier-coller d'une liste d'adresses email (depuis un fichier CSV ou une spreadsheet).

### Confidentialité des utilisateurs

Les conversations et documents de chaque utilisateur sont **strictement confidentiels** et lui appartiennent. Aucun membre de l'équipe ne peut accéder aux données d'un autre utilisateur, sauf partage explicite via :
- le partage d'une conversation,
- le partage d'un Mammouth.

![Teams Settings Screenshot](teams_settings_fr.png)

---

## 🔒 Permissions

À leur discrétion, les **propriétaires** peuvent restreindre certaines fonctionnalités pour l'ensemble des membres de l'équipe :

- ❌ Désactiver certains **fournisseurs IA**
- ❌ Désactiver l'accès à l'**API**
- ❌ Désactiver la génération de **vidéos**

![Permisssions Screenshot](permissions_fr.png)

---

## 🦣 Mammouths partagés

Un **Mammouth** (espace de travail IA personnalisé) peut être partagé au sein d'une équipe avec deux niveaux d'accès :

- **Lecture seule** : les membres invités peuvent utiliser le Mammouth sans modifier ses instructions ni ses fichiers associés.
- **Lecture et édition** : les membres invités peuvent modifier les instructions et les fichiers associés.

> ⚠️ Le partage d'un Mammouth **n'implique pas** le partage des conversations qui y ont lieu. Chaque conversation reste privée par défaut.

### Partage de conversations

Le partage d'une conversation est possible, mais doit être **activé explicitement** sur la conversation concernée. Le partage s'effectue via un **lien URL**.

---

## 🔀 Option Multiplan

Il est possible de **mixer les plans** (Starter, Standard et Expert) au sein d'une même équipe, afin d'adapter les accès aux besoins réels de chaque collaborateur.

---

## 💳 Options de paiement et facturation

### Paiement en ligne *(recommandé)*

Disponible sur [mammouth.ai/pricing](https://mammouth.ai/pricing), avec les moyens de paiement suivants :

- 💳 Carte bancaire
- 🅿️ PayPal
- 🛍️ Klarna
- 🏦 Prélèvement SEPA *(Europe uniquement)*

Ces modes de paiement vous permettent une **gestion 100% autonome** de votre abonnement.

**Facturation :** La facture est envoyée automatiquement par email à chaque paiement et est également disponible dans votre espace personnel.

> 💡 Pour les entreprises : lors de l'inscription sur la page de paiement, sélectionnez **"Acheter en tant qu'entreprise"** et renseignez votre numéro de TVA européen.

---

### Virement bancaire ou mandat administratif

Le paiement par virement bancaire est accepté sous les conditions suivantes :

- Engagement **annuel obligatoire**
- **Pas de mixage de plans** : toute l'équipe doit être sur le même plan

Le paiement par **mandat administratif (Chorus Pro)** est également accepté.

**Pour toute demande de devis**, écrivez à [contact@mammouth.ai](mailto:contact@mammouth.ai) en indiquant :
- Raison sociale, adresse, SIRET
- Plan souhaité
- Nombre de licences

> ⏱️ Chaque ajout de licence nécessite une demande écrite par email et sera traité **sous 72h ouvrées**.

---

## 🔐 SSO (Single Sign-On)

L'intégration **SSO** est disponible avec **Microsoft Entra ID, Okta, Keycloak** et d'autres fournisseurs d'identité SAML 2.0. Elle facilite le déploiement de Mammouth dans les entreprises ou les universités avec **plus de 50 licences**.

En savoir plus via [le guide d'intégration SSO](../sso/).

Pour en faire la demande, contactez [contact@mammouth.ai](mailto:contact@mammouth.ai).
