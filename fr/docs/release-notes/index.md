# Notes de version - Mammouth AI

## 1er mai 2026

### ⭐ Mises à jour des modèles phares

- **GPT 5.5**

- **Claude Opus 4.7**

- **DeepSeek v4 Pro**

- **Qwen 3.6 Plus**

- **Kimi K2.6**

- **GLM 5.1** - Nous avons ajouté la marque GLM à notre offre.

### 🖼️ Mises à jour des modèles d'images

- **Nano Banana 2**

- **GPT Image 2**

### ⚡ Mise à jour du modèle léger

- **Gemini 3.1 Flash Lite**

### 🎨 Améliorations du design

**Liste de reprompt revue** - Les modèles sont maintenant triés dans le même ordre que celui que vous avez défini sur la page de nouvelle conversation. Votre modèle par défaut apparaît en premier, etc. (glissez-déposez les modèles pour sélectionner votre défaut).

**Zone de saisie extensible** - Pour les longs prompts, vous pouvez maintenant étendre la zone de saisie en vue plein écran pour une édition plus facile.

**Messages utilisateur repliés** - Les messages utilisateur sont maintenant repliés dans le fil de conversation pour améliorer la navigation entre les messages passés.

### 📂 Mises à jour des documents

**Support des fichiers Zip** - Les fichiers Zip sont maintenant acceptés en téléchargement.

**OCR amélioré pour les PDF** - Les PDF scannés nécessitant une OCR sont maintenant traités jusqu'à 50 pages (au lieu de 20 pages).

**Corrections XSLX** - Nous avons corrigé des problèmes sur les fichiers XSLX qui empêchaient certains d'entre eux d'être correctement téléchargés.

### 🔄 Autres

**Import de conversations** - Les conversations peuvent maintenant être importées non seulement depuis ChatGPT, mais aussi depuis Claude ou un autre compte Mammouth directement dans vos paramètres.

### 🧷 Mises à jour de l'API

**Nouveaux modèles ajoutés** - Les modèles ci-dessus ont aussi été ajoutés à l'API.

**Model Explorer** - Nous avons désormais une [belle vue des modèles](https://model-explorer.mammouth.ai/) grâce à nichu42 ! Il est [open-source](https://codeberg.org/mammouth-ai/mammouth-model-explorer). Notre [blog de documentation](https://github.com/mammouth-ai/blogdoc) est également open-source — nous adorons recevoir des suggestions de commit.

**Clés API multiples** - Vous pouvez maintenant créer plusieurs clés API pour segmenter vos projets. Les logs peuvent être filtrés par clé API pour un meilleur suivi.

### 📱 Application mobile

**Application Android disponible** - Nous avons une application mobile sur le PlayStore Android : [https://play.google.com/store/apps/details?id=ai.mammouth.application](https://play.google.com/store/apps/details?id=ai.mammouth.application)

## 14 avril 2026

### 🎬 Génération de vidéos

La génération de courtes vidéos est maintenant disponible dans Mammouth avec 4 modèles : Veo 3.1 fast, Sora 2, Grok Video & Kling 2.5

### ⭐ Nouveaux Modèles

**Grok 4.20** - Le nouveau modèle Grok est disponible avec une recherche web mise à jour incluant une recherche spécifique sur x.com.

**Mises à jour des modèles légers :**
- **Claude Haiku 4.5** est ajouté
- **GPT 5.4 nano** remplace GPT 5 mini
- **Mistral Small 4** remplace Mistral Small 2

### 👥 Nouvelles Fonctionnalités pour les Équipes et Entreprises

**Multi-plan** - Votre équipe peut désormais mélanger les forfaits (Starter/Standard/Expert) dans le même abonnement pour s'adapter aux différents besoins des utilisateurs.

**Intégration SSO** - Nous prenons désormais en charge l'intégration SSO avec Microsoft Entra, Keycloak, Okta, et plus encore. Cela facilite le déploiement de Mammouth dans les entreprises ou les universités.

Plus de détails sur les équipes : [info.mammouth.ai/docs/teams/](https://info.mammouth.ai/docs/teams/)

### 📊 Nouvelle Politique de Quota & Capacités de Contexte Augmentées

**Politique de quota mise à jour :**
- Les quotas mensuels sur les images et les documents ont été supprimés
- Le quota fixe de 50 messages a également été supprimé
- Toutes les limitations sont désormais calculées dans le quota de session de 3 heures qui dépend de la consommation réelle de l'IA (nombre de messages, longueur des messages, modèle sélectionné, raisonnement, recherche web,..)
- Le changement de modèle après atteinte des quota a été amélioré pour être plus progressif et moins frustrant

**Contexte augmenté sur les documents** - Nous avons ajouté une option [dans les paramètres](https://mammouth.ai/app/account/settings) pour augmenter le contexte sur les documents (pour des besoins spécifiques sur de très longs documents).

**Mémoire augmentée** - Nous avons ajouté une option [dans les paramètres](https://mammouth.ai/app/account/settings) pour augmenter la taille du contexte de la mémoire de conversation qui peut être envoyée à chaque message.

Plus de détails : [La nouvelle politique de quota : Avant/Après](https://public.mammouth.ai/evolution-des-quotas)

### Et aussi

- **Synthèse vocale** (avec Voxtral) sur les réponses de l'IA pour que vous puissiez laisser l'IA lire sa réponse à haute voix
- **Nouvelles extensions de fichiers supportées** : .ods, .odp, .odt
- **Design des messages revu** pour réduire les bordures et être plus adapté au mobile
- **Les emails** (liens de vérification d'email, mots de passe oubliés, invitation d'équipe, etc.) ont été entièrement redesignés
- **Tri des conversations** par mammouth et par date ont été ajoutés :
  - Vous pouvez sélectionner/déplacer/supprimer en masse vos conversations de plus de 3 mois 
  - Vous pouvez sélectionner/déplacer/supprimer en masse vos conversations d'un mammouth personnalisé
  ![filtres de conversations](conversation_filter_fr.png)

## 6 mars 2026

### ⭐ Nouveaux Modèles

**Gemini 3.1 Pro**

**Recraft v4**

### 🦣 Mammouths Partagés

Les mammouths peuvent maintenant être partagés via lien public, invitation par email ou au sein de votre équipe.

### Et aussi

- Tandis que la réponse du LLM est encore en cours de génération, vous pouvez maintenant copier les blocs de code ou les tableaux, ou ouvrir les liens externes.

- Nous acceptons maintenant toutes les extensions de fichiers texte. C'est particulièrement utile pour les développeurs utilisant des formats de fichiers spécifiques (comme .csproj ou .mq4).

- Des modèles ont été ajoutés à l'API (GLM-5, Gemini 3.1 Pro, Claude Sonnet 4.6, gemini 2.5 flash lite). De plus, 13 modèles ont été dépréciés pour garder la liste propre et à jour.

- La suppression des conversations a été améliorée — l'opération de suppression s'exécute désormais en arrière-plan, vous pouvez donc continuer à travailler sans attendre sur un écran figé.

## 18 février 2026

### ⭐ Nouveaux Modèles

**Claude Sonnet 4.6** - vient de sortir !

**Grok Imagine** - remplace l'ancien modèle d'image Grok 2

### 🔄 Mises à jour des Modèles

- **GPT Image** - amélioré pour mieux traiter le texte dans les images, en particulier dans les prompts longs

### ✨ Nouvelles Fonctionnalités

- **Copier pendant le streaming** - vous pouvez maintenant copier le début de la réponse de l'IA pendant qu'elle est encore en train de streamer
- **Génération de documents avec les modèles de raisonnement** - la génération de documents fonctionne maintenant lorsque vous discutez avec des modèles de raisonnement tels que Gemini Pro ou Claude Opus

### ⚙️ Paramètres & Saisie

- **Nouvelle page de paramètres** - la [page des paramètres](https://mammouth.ai/app/account/settings/) a été redessinée
- **Changer le comportement de la touche ENTER** - choisissez quelle touche enverra votre prompt : ENTER, ALT+ENTER, ou CTRL+ENTER dans [vos paramètres](https://mammouth.ai/app/account/settings/)

### 🎭 Nouveaux Accessoires pour Mammouths

Jetez un oeil aux accessoires pour mammouths disponibles en ce moment ⛷️

## 12 février 2026

### ⭐ Nouveaux Modèles

**Claude Opus 4.6** et **Kimi K2.5**

### 👨‍💻 Mammouth Code !

Découvrez la nouvelle [documentation Mammouth Code](https://info.mammouth.ai/docs/mammouth-code/) pour plus de détails.

### 🌐 Mises à jour Web

- **Recherche d'images** : les requêtes de recherche web peuvent maintenant afficher des images
- **Simplification** : la ligne de catégorie web a été fusionnée avec les modèles de texte et OpenPerplex a été supprimé. Vous pouvez toujours forcer la sélection de la catégorie web.
- **Perplexity** : dispose maintenant d'un nouvel affichage avec des extraits

### Autres

- **Le reprompt** peut maintenant ricocher à travers plusieurs conversations
- Lorsque vous copiez un message de sortie, il sera collé avec le formatage markdown appliqué (plus pratique pour les emails, documents, etc.)

## 23 janvier 2026

### ⭐ Nouveau Modèle

**Mistral Large 3** - remplace Mistral Medium

### 🔄 Mises à jour des Modèles

- **Gemini** - stabilité et fiabilité améliorées
- **Gemini** - prend désormais en charge l'analyse des liens vidéo YouTube

### 📂 Gestion des Conversations

- **Opérations par lot** - supprimez ou déplacez plusieurs conversations à la fois
- **Recherche améliorée** - trouvez des conversations par modèle ou mammouth personalisé

### 🦣 Mammouths

- **Mammouths illimités** - fini la limite de 15 mammouths
- **Mammouths favoris** - marquez vos mammouths les plus utilisés comme favoris
- **Tri intelligent** - le dernier mammouth utilisé se déplace automatiquement en haut de la liste
- **Navigation améliorée dans la barre latérale** - parcourez plus facilement votre collection de mammouths

### 🎭 Nouveaux Accessoires pour Mammouths

**Accessoires saisonniers** - collectionnez des accessoires à durée limitée tout au long de l'année ! Combien en attraperez-vous ?

### 📱 Application Mobile (utilisateurs Chrome)

**Réinstallez pour les nouvelles fonctionnalités** - mettez à jour votre application pour accéder aux capacités natives :
- **Raccourcis rapides** - appuyez longuement sur l'icône de l'application pour révéler les raccourcis d'action
- **Partage amélioré** - partagez facilement des photos et des fichiers directement dans Mammouth

### Et aussi

- **Onglets de navigateur dynamiques** - les noms de conversation et les icônes de mammouth apparaissent désormais dans les onglets du navigateur
- **API Nano Banana** - ajoutée comme premier modèle d'image dans l'API Mammouth
- **Améliorations de GPT Image** - qualité et capacités de génération d'images améliorées
- **Tarification TVA incluse** - tous les pays de l'UE voient désormais les prix TVA incluse

## 1er janvier 2026

### ⭐ Nouveau Modèle Premium

**Claude Opus 4.5** - Le modèle le plus puissant d'Anthropic rejoint Mammouth

### 🔄 Mises à jour des Modèles

- **GPT 5.2** - remplace GPT 5.1
- **Gemini 3 Flash** - remplace Gemini 2.5 Flash
- **GPT Image 1.5** - remplace GPT Image 1

### 🌟 Nouvelles Marques

**Kimi** - Nouvelle marque avec deux modèles :
- Kimi K2
- Kimi K2 Thinking

**Qwen** - Nouvelle marque avec :
- Qwen 3 Coder

### 📂 Contexte de Documents Augmenté

**8x plus d'extraction de contexte** - Le contexte extrait des documents dans vos mammouths a été multiplié par 8, égalant désormais la capacité de contexte des conversations.

### ⚙️ Contrôle Avancé des Paramètres

- **Désactiver les paramètres API** - Désactivez l'accès API directement depuis le menu
- **Gestion des marques** - Désactivez des marques de modèles spécifiques pour vous et votre équipe depuis les [paramètres de permissions](https://mammouth.ai/app/account/settings/permissions)

### 🌎 Nouveau Support Linguistique

🇳🇱 **De Mammoet spreekt nu Nederlands!**

## 24 décembre 2025

### ✨ Nouveau Design : Mammouth fait peau neuve !

Découvrez notre nouvelle identité visuelle, des options de personnalisation améliorées et une interface utilisateur repensée pour une expérience encore meilleure :

### 🎨 **Nouveau Logo & Mammouths Personnalisables**

- **Nouveau logo** : Tout en préservant l'esprit emblématique de Mammouth et son icône originale, nous avons modernisé la forme et les couleurs pour un aspect plus dynamique et contemporain !
![Logo Mammouth](/docs/release-notes/mammouth_logo.png)

- **Expérience Mammouths Personnalisés** : Personnalisez votre mammouth avec une gamme de couleurs plus large et encore plus d'accessoires pour le rendre vraiment unique !
![Page_de_création_des_mammouths_personnalisés](custom_mammouths_new_creation_page_FR.png)

### **📱 Expérience utilisateur améliorée (particulièrement sur mobile)**

- **Boutons plus grands** : pour une navigation plus facile et intuitive.
- **Nouvelle palette de couleurs** : une interface rafraîchie et harmonieuse.
- **Mobile entièrement responsive** : une fluidité parfaite sur tous vos appareils.
- **Nouveau mode sombre** : un affichage plus cohérent et agréable pour vos yeux.
![Design Mobile](/docs/release-notes/mammouth_mobile_design.jpeg)

## 17 décembre 2025

⭐ **Flux 2 Pro** - remplace Flux Kontext Pro

⭐ **DeepSeek v3.2** - remplace DeepSeek v3.1

**Et aussi**

📍 **Épinglez vos conversations favorites** pour les garder en haut de la liste

🗃️ **Génération de fichiers** nous avons amélioré le système de génération de fichiers

⬇️ **Améliorations du reprompt**
- Perplexity a été ajouté à la liste des modèles disponibles au reprompt
- Lors du reprompt avec DeepSeek, Grok ou Mistral, la recherche web s'activera automatiquement si pertinent

🧷 **Mise à jour de l'API** : Claude Opus 4.5, GPT 5.1, GPT 5.2, Gemini 3 Pro, Perplexity Sonar Pro, Perplexity Deep Research, Grok Code Fast, Claude 4.5 Haiku, Qwen3 Coder, Kimi K2, Mistral Large 3 et DeepSeek v3.2 ont été ajoutés à l'API

## 3 décembre 2025

👥 **Rôles d'équipe** - si vous utilisez mammouth dans votre entreprise, vous pouvez maintenant :
- Attribuer des rôles : propriétaire, administrateur (gestion d'équipe pour activer/désactiver les membres), membres
- Transférer la propriété : le propriétaire peut désigner un successeur
- Compte gestionnaire : le propriétaire du forfait n'est pas obligé de s'attribuer une licence
- Invitations groupées : inviter plusieurs adresses e-mail en une seule fois
![Mise à jour des rôles d'équipe](team_updates_roles_FR.png)

**Et aussi**

**⭐ Grok 4.1 fast** - remplace Grok 4

⬆️ **Exportez vos conversations** - export disponible au format JSON

⬇️ **Importez vos conversations depuis chatGPT** -- [détails ici](/fr/docs/import-conversations/index.md)

💡 Un détail produit : si vous demandez à un modèle de texte comme Mistral de générer une image, il créera un lien pour relancer rapidement votre requête vers un modèle d'image.

🪛 Correction d'une erreur occasionnelle sur GPT-Image lors de l'envoi d'emojis dans le prompt.

## 21 novembre 2025

**⭐ Gemini 3 Pro** - remplace Gemini 2.5 Pro

## 18 novembre 2025

**⭐ GPT 5.1** - GPT 5.1 et GPT 5.1 Thinking remplacent GPT 5. Le modèle est plus rapide tout en conservant les performances.

**⭐ Grok 4 fast** - nous avons mis à jour Grok 4 avec un modèle de texte plus rapide, le nouveau modèle léger et un modèle de raisonnement.

**🍌 Nano Banana** - nous avons mis à jour Nano Banana vers la version post-preview. Il gère désormais les [paramètres de ratio d'aspect](/docs/aspect-ratio/index.md).

**🌐 Auto-activation de la recherche web** -- Mistral, Grok et DeepSeek effectuent désormais automatiquement des recherches sur le web lorsque c'est pertinent. Vous pouvez toujours désactiver ou forcer l'option en cliquant sur l'icône web lors de la saisie de votre prompt.

**Et aussi**

✉️  L'email du compte peut désormais être modifié dans les [paramètres](https://mammouth.ai/app/account/settings).

⏬ Un bouton raccourci pour faire défiler jusqu'à la fin de la conversation a été ajouté.

🪛 Un bug a été corrigé sur la dernière version de Safari qui empêchait les IA de lire les documents contenant des accents français dans le titre. De plus, nous avons corrigé un problème sur certaines importations de code qui étaient incorrectement restituées par l'IA lorsqu'elles étaient téléchargées en tant que documents.

🧷 Les embeddings sont maintenant disponibles dans l'API Mammouth.

## 5 novembre 2025

**⭐ Recraft Vectorize (PNG vers SVG) ⭐**

Recraft peut désormais vectoriser vos images PNG ou JPEG au format .svg. C'est le seul modèle capable de le faire.

**🐳 DeepSeek v3.1 Terminus** - nous avons mis à jour DeepSeek v3.1 vers sa dernière version

**🔉 Audio-vers-texte** - téléchargez et analysez des fichiers audio avec Gemini

**📹 Vidéo-vers-texte** - téléchargez et analysez de petites vidéo (moins de 20 Mo) avec Gemini

**Et aussi**

💭 Le mode réflexion est maintenant moins intrusif avec un design plus fluide. De plus, le mode recherche web de GPT est maintenant affiché.

🦊 L'application est maintenant disponible pour les utilisateurs de Firefox sur Windows.

🪛 Correction de l'envoi accidentel du prompt lorsque Shift est relâché avant Enter (lors de l'utilisation de Shift + Enter).

➗ Quelques corrections de formules LaTeX ont été déployées pour un meilleur affichage des équations mathématiques.

📋 Le chargement de l'historique des conversations dans la barre latérale fonctionne mieux sur les grands écrans.

## 8 octobre 2025

**⭐ Claude Sonnet 4.5 ⭐**

Il remplace Claude Sonnet 4. Consultez l'annonce d'Anthropic [ici](https://www.anthropic.com/news/claude-sonnet-4-5)

**🧠 Mémoire de la conversation**

Nous avons débridé la mémoire conversationnelle. Votre modèle accède désormais à l'ensemble des messages de son historique, quelle que soit la longueur de la conversation.

**🎨 Design des réponses de l'IA**

Le design des réponses de l'IA a été amélioré. Les espaces entre les paragraphes et les titres sont désormais mieux ajustés. Les citations, les balises et les tableaux générés bénéficient de meilleurs coloris.

**⛵ Aurevoir Midjourney**

La semaine dernière, notre fournisseur de Midjourney a mis fin à son service. Nous n'avons hélas trouvé aucun remplaçant adéquat et Midjourney ne fournit pas encore d'API officielle.
Bien que Midjourney se classe 4ème dans notre usage de la génération d’images (derrière Nano Banana, GPT Image et FLUX) et 5ème dans nos benchmarks de performance, il occupe toujours une place particulière dans nos cœurs. Nous envisageons de reproduire son expérience de grille de quatre images avec d’autres modèles.
Nous espérons que Midjourney lancera un jour une API accessible aux développeurs. En attendant, nous voguerons chacun de notre côté.

**Et aussi**

- **GPT Image** est désormais pleinement conversationnel (comme Nano‑Banana).
- **Correction de bugs :** certains modèles tentaient parfois d’exécuter du code — alors que cela n’était pas demandé — lors de l’analyse de documents ou de graphes, et échouaient. C’est corrigé.
- **Mammouth API :** Claude Sonnet 4.5, Grok‑4, Grok‑4‑fast, DeepSeek‑3.1‑Terminus et DeepSeek‑3.2‑exp sont désormais pris en charge.

## **16 septembre 2025**

**⭐ Nouveaux modèles ⭐**

- **Nano Banana** (*anciennement Gemini 2.5 Flash Image*) : peut éditer des images et gérer des conversations.
- **DeepSeek v3.1** (remplace DeepSeek v3)

**⚡ Démarrer une conversation avec des modèles légers**

Vous pouvez lancer une nouvelle conversation avec n’importe quel modèle léger, même si vous n’avez pas atteint votre quota.

**🧷 Services API pour vos automatisations**

- Achetez des crédits supplémentaires dans les [paramètres de l’API](https://mammouth.ai/app/account/settings/api).
- Vous pouvez également acheter des crédits sans prendre d'abonnement.
- Nouveaux modèles pris en charge : GPT-5, GPT-5-mini, GPT-5-nano, Claude 4.1 Opus, Mistral 3.1, DeepSeek v3.1.

**Et aussi…**

- **Amélioration de la gestion des documents multiples** dans une conversation : les documents courts étaient parfois éclipsés par les longs, et l’IA les ignorait ; ce n’est plus le cas.
- **Génération de documents** : certains modèles refusaient occasionnellement de générer un fichier (PDF, DOCX, XLS) ; le problème est désormais résolu.
- La [page tarifaire](https://mammouth.ai/pricing) a été mise à jour pour mettre en avant l’offre **Team** et fournir des informations actualisées sur les services en expansion de Mammouth (crédits API, Perplexity, mode Vocal, etc.).
- Nous avons mis à jour nos [Conditions Générales d’Utilisation](https://info.mammouth.ai/docs/terms-of-service/).
- **GPT-5** propose désormais :
  - Une meilleure mise en forme du texte.
  - Un rendu amélioré des équations mathématiques.
  - Un processus de réflexion visible.

## **25 août 2025**

**⭐ Nouveau modèle : Mistral Medium 3.1**

**📁 Contexte long & Documents**

Nous avons considérablement amélioré la gestion des longs contextes (longs messages et documents) :
- capacité de contexte accrue,
- meilleure extraction de contenu,
- gestion optimisée des longs contextes de code,
- performances plus rapides,
- moins d’erreurs, etc.

**🎨 Améliorations UX**
- Le bouton de copie de code est flottant pour un accès plus facile.
- Copier-coller des e-mails ou du contenu HTML n’ajoute plus de sauts de ligne indésirables.
- Navigation mobile retravaillée pour une expérience plus fluide.
- Plus de mammouths personnalisés sont désormais visibles dans la barre latérale.
- Le nombre maximal de mammouths passe de 12 à 16.

**🌐 Accès Web pour toutes les IA**

Nous avons étendu les capacités web à Mistral, Claude, DeepSeek, Grok et Llama !

## 8 août 2025

**⭐ GPT-5**
- GPT-5 remplace GPT-4.1
- GPT-5 mini remplace GPT-4.1 mini
- GPT-5 Thinking (GPT-5 avec un raisonnement plus systématique) remplace o3 & o4-mini

**🦣 Chaque mammouth personnalisé a désormais son propre modèle par défaut**, et son propre ordre d'affichage des modèles, avant d'appuyer sur Entrée.

**✍️ Votre prompt est enregistré comme brouillon** et persiste lorsque vous changez de conversation ou actualisez la page, jusqu'à ce que vous l'envoyiez.

## 4 août 2025

### ⭐ Nouveaux Modèles

**Nouveaux modèles phares**
- o3
- Magistral

**Nouveaux modèles d'images**
- Imagen 4.0 (par Gemini)
- Grok Images

**Nouveaux modèles légers, rapides et illimités**
- Mistral Small 32B
- Llama 4 Scout
- GPT-4.1-mini
- Grok-3-mini
- Gemini 2.5 Flash Lite

### ↪️ Reprompting conversation
Chaque message utilisateur d'une conversation peut maintenant être reprompté, pas seulement le premier. Cela fonctionne comme une fourche de la conversation. 

### ✨ Conversation multi-modèle
Les conversations sont maintenant spécifiques à une marque et non à un modèle, donc vous pouvez passer d'un modèle de texte à un modèle d'image ou un modèle de raisonnement dans la même conversation

### Et aussi
- Quand un quota est atteint, la conversation continue avec le modèle illimité de la marque (plus de démarrage d'une nouvelle conversation après quota atteint)
- Logo Grok a été mis à jour: du logo xAI au logo Grok
- Il est possible de supprimer le message précédent d'une conversation et donc de revenir au message n-2 et ainsi de suite jusqu'au premier message
- La page d'erreur 404 (et les autres aussi) affiche maintenant un mammouth mignon

## 24 juillet 2025

### 🌟 Grok 4

### 📂 Documents : analyse plus rapide avec plus d'options

• Vitesse : L'analyse de documents est maintenant 3x plus rapide

• Les PDF scannés et autres PDF composés d'images sont maintenant analysés avec Mistral OCR.

• Environ 80 nouvelles extensions ont été ajoutées : plus de [200 extensions de fichiers sont maintenant supportées](https://info.mammouth.ai/docs/supported-file-extensions/).

### 📱 Installation rapide de l'app

• L'app s'installe en 1 clic depuis le menu du panneau de gauche (sur tous les navigateurs sauf Firefox et Safari)

### 🌍 Nouvelles langues

🇵🇱 Mamut mówi teraz po polsku

🇷🇴 Mamutul vorbește acum românește

🇵🇹 O mamute fala agora português

🇦🇩 El mamut parla ara català

## 3 juillet 2025

### 🌟 Midjourney v7

### 🧷 API Mammouth 

• **Tous les abonnés ont accès à des tokens gratuits avec leur abonnement** : 2$/4$/10$ par mois pour Starter/Standard/Expert !

• **Compatible OpenAI** : peut maintenant être utilisé dans [n8n](https://public.mammouth.ai/How-to-use-Mammouth-in-n8n-226cf297c1ca80ab9f5dd999410884ee?pvs=74), Cline, etc.. avec les plugins OpenAI

• 23 modèles de texte disponibles

• [**Voir la documentation**](https://info.mammouth.ai/docs/api-quick-start/)

### 🧮 Visualisation des quotas/utilisation

• Consultez vos quotas à tout moment depuis les paramètres de votre compte

• La bannière de quota dans le panneau de gauche peut être masquée

### 📂 Documents et historique

• Lors du travail avec des documents en conversation, vous pouvez maintenant désactiver les documents de l'historique passé ou des assistants pour vous concentrer sur le dernier document téléchargé ou pour rester sous la limite de 32MB.

![Gestion des fichiers dans le prompt](/docs/release-notes/file_management_in_prompt.png)

• Nouvelle extension de fichier : .doc (même si c'est une ancienne extension MS Office 😉 )

### 👷 Erreurs serveur et documents défaillants

**Nous avons corrigé un grand nombre d'erreurs de réponse sporadiques de l'IA incluant :** Erreurs serveur sur Claude avec des images téléchargées, Erreurs lors du téléchargement total de documents dépassant 32MB, Erreurs avec des documents protégés par mot de passe, Erreurs avec des endpoints API défaillants, Documents supprimés qui cassaient les conversations re-promptées avec le même document, Documents défaillants qui bloquaient la conversation..

### Autres fonctionnalités

• Le paiement avec Paypal est maintenant accepté

• La connexion avec Google ET mot de passe sur le même email fonctionne maintenant

• Les conversations re-promptées sont maintenant regroupées dans le panneau de gauche (voir gif)

![Accordéons](/docs/release-notes/Accordions_GIF.gif)

## 6 juin 2025

### 🌟 Flux Kontext & DeepSeek R1
• **FLUX Kontext Pro** *-- remplace FLUX Pro & Retexture*

• **DeepSeek R1 28.05** *-- mise à jour de DeepSeek R1*

### 🗃️ Génération de fichiers

• **Générer CSV, DOCX, PDF...** avec tous les LLM

• **Générer des graphiques sous forme d'images** avec tous les LLM

• [Voir l'exemple ici](https://mammouth.ai/shared/7fe819ad-5b61-4111-8f80-ab0521bbe848)

### 📱 Application mobile repensée

• **🎙️ Voix vers texte** a été ajouté pour dicter vos prompts

• **🎨 Saisie plus fluide** *fini les chevauchements entre le clavier et les modèles sur la page de nouvelle conversation*

• 🎨 de nombreux problèmes mineurs d'interface utilisateur (marges, bordures, popups, chevauchements, etc.) ont été corrigés pour que l'aspect général soit plus convivial

## 23 mai 2025

### 🌟 Mistral 3 et Claude 4
• **Mistral Medium 3** *-- remplace Mistral 24.11*

• **Claude Sonnet 4** *-- remplace Claude 3.7*

### 🧠 Image conversationnelle intelligente

• **Les modèles d'image comprennent maintenant** quand vous demandez une modification basée sur le message précédent

• **Vous pouvez voir le prompt final** envoyé à l'IA *derrière une icône 🪄*

### ⚙️ [Paramètres du compte](https://mammouth.ai/app/account/settings) -- nouveau design de la page
- Vous pouvez maintenant supprimer toutes vos conversations d'un coup
- Vous pouvez maintenant supprimer votre compte
- Nouveau tri des emails utilisateur dans les [Paramètres d'équipe](https://mammouth.ai/app/account/team) (par domaine d'email puis nom d'email)

:::info Et aussi..

⚡ **Navigation plus fluide entre les conversations** *-- Chargement progressif du contenu sur la page avec squelette*

🖋️ **Mise à jour de l'édition du dernier message** *-- Quand vous éditez votre dernier message, vous pouvez supprimer le document joint*

🔏 **[Politique de confidentialité](../privacy-policy/) mise à jour**

:::

## 9 mai 2025

::: info Mises à jour des modèles
🌟 **Perplexity** *-- nous avons ajouté le Perplexity Sonar Pro*

🌟 **Gemini 2.5 Flash**
:::

Et aussi

⚡ **Multi-prompting** *-- La génération IA simultanée est maintenant possible*

🧠 **Nommage automatique des conversations**

🎨 **Le message d'entrée préserve l'indentation**

## 25 avril 2025
::: info Mise à jour des modèles
🌟 **GPT Images** *— remplace DALL-E*
:::

Aussi, 

🔍 Recherche textuelle dans l'historique de conversation
> Appuyez sur CTRL+K ou cliquez sur l'icône de recherche

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/textual_search_record_2.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la balise vidéo.
</video>
</div>

## 17 avril 2025

::: info Mises à jour des modèles
🌟 **Gemini 2.5 Pro** *— remplace Gemini 2.0*

🌟 **Grok 3** *— remplace Grok 2*

🌟 **GPT-4.1** *— remplace GPT-4o*
:::

::: info Nouveaux outils d'édition photo
🖌️ **Suppresseur d'arrière-plan** *— téléchargez votre photo et l'IA supprimera l'arrière-plan*

🖌️ **Améliorateur de qualité** *— l'IA augmentera la qualité de votre image*
:::

::: info Capacité de documents augmentée
📁 **Longueur d'entrée max : 4 000 000 caractères** *— au lieu de 1 000 000*

📁 **Max fichiers par conversation : 20** *— au lieu de 10*
:::

Et aussi

📁 **Plus d'extensions supportées** *.fortran .twig .urdf .hcl .tsv .geojson .ass .tf .ps1 .scss .ino .pyw .odt*

🧮 **Les fichiers assistants consomment moins de quotas** : *Les fichiers des assistants ne consommeront pas de quotas à chaque prompt*

**Et aussi, concernant la qualité du produit :**

🦋 **Multitâche** *— Quand vous changez d'onglet pendant la génération, le streaming continuera son processus*

## 7 avril 2025

::: info Nouveaux modèles
🌐🔭 **Perplexity Deep Research** 

🌟✈️ **Llama 4.0 400B Maverick** *— remplace Llama 3.3 70B*
:::

🧮 **GPT-4o-mini pour les documents après quota** : *Quand vous atteignez votre quota de documents, vous pouvez télécharger plus de documents avec GPT-4o-mini*

**Et aussi, concernant la qualité du produit :**

🦋 **Image non traitée expliquée** *— L'IA fournit maintenant des informations détaillées sur pourquoi votre image n'a pas pu être traitée et comment vous pouvez changer cela. Les bugs sont maintenant des papillons.*

🦊 **Firefox est de retour :** *Les problèmes UX survenant sur Firefox sont corrigés*

🎨 **Les hyperliens générés par l'IA s'ouvriront dans un nouvel onglet** *— sans interrompre le streaming ;)*

## 1er avril 2025

::: info GPT & Gemini sur le Web
🌐 **GPT-4o & Gemini** sont maintenant dirigés vers la recherche web quand c'est pertinent

🌐 **Projets avec des mammouths** *— améliorent et remplacent les assistants*
:::

🐳 **DeepSeek V3-0324** *— remplace la version de janvier*

💾 **Mémoire de conversation :** étendue pour un meilleur contexte

📍 **Conversations épinglées** : les nouveaux messages épinglent le chat en haut de la liste.

🌙 **Mode sombre automatique** *— quand le système par défaut est sombre*

🇪🇸 **El Mammouth habla español**

🇩🇪 **Das Mammouth spricht jetzt Deutsch**

## 18 mars 2025

::: info REFONTE MAJEURE DU DESIGN
🎨 **Interface utilisateur modernisée** *— Refonte globale de l'UI/UX*

📂 **Projets avec mammouths** *— améliorent et remplacent les assistants*
:::

### 🎨 **Interface utilisateur modernisée**

✨ **Boutons de modèles** *— nous espérons que vous les 💖 autant que nous*

🌙 **Mode sombre** *— nous avons changé toutes les couleurs du mode sombre*

🎨 **Couleur de la barre latérale** *— maintenant le chat se démarque au lieu de la barre latérale*

📝 **Saisie de texte :**
  > - Filtrer les modèles par catégorie (web, texte, raisonnement, image)
  > - Glisser-déposer des documents
  > - Téléchargement de documents revu avec des couleurs par extensions
  > - Icône noire en forme d'onde pour le chat vocal

🗨️ **La page de chat est refaite pour les grands écrans :**
  > - En-tête : nous avons supprimé la ligne *---messages---* et revu les boutons
  > - Barre de défilement : nous l'avons déplacée à l'extrême droite de la page
  > - Largeur : augmentée à max 980px au lieu de 768px

### 📂 **Organisez vos projets avec les mammouths** 

- **Accédez à vos mammouths dans la barre latérale** *— à un clic de vos mammouths préférés*

- **Déplacez vos conversations d'un mammouth à un autre**

- **Modifiez les fichiers et instructions depuis la page de prompt**

--> **Les assistants sont morts, vive les mammouths 🦣🦣🦣 !**

**Et aussi**

🖼️ **Boutons Midjourney** : vous pouvez maintenant cliquer sur variation et agrandissement sur tous les messages passés

🗃️ **Erreurs sur les documents** : L'IA ignorait (parfois) vos fichiers téléchargés, nous avons corrigé !

✴️ **Mise à jour du logo Claude** *— remplaçant le logo Anthropic*

## 5 mars 2025

::: info Mode vocal et nouveau Claude
🎙️ **Chat vocal** *— Mode vocal avancé de GPT*

⭐️ **Claude 3.7 Sonnet** *— remplace Claude 3.5*
:::

Et aussi :

🗃️ **Téléchargez des fichiers sur vos mammouths personnalisés**

✨ **Les abonnements annuels sont disponibles** - vous pouvez changer de plan dans vos [*paramètres de compte*](https://mammouth.ai/app/account/settings/), puis *gérer l'abonnement*, puis *changer d'abonnement*

## 17 février 2025

::: info Plus de contexte !
⭐ **Taille d'entrée max : 1 000 000 caractères** *— au lieu de 300 000*
:::

Et aussi :

🗃️ **Nombre max de documents par chat : 10** *— au lieu de 3*

🦣 **Taille max des instructions personnalisées Mammouth : 8 000 caractères** *-- au lieu de 2 500*

🇫🇷 **Le Mammouth parle enfin français !**

🇮🇹 **Il Mammouth parla ora italiano !**

## 3 février 2025

::: info Nouveaux modèles de raisonnement !
⭐ **DeepSeek R1**

⭐ **OpenAI o3-mini** *— remplace o1 & o1-mini*
:::

Et aussi :

🧮 **Plus de quota de raisonnement par jour sur o3 & R1** *-- pour l'instant, c'est comme le texte*

📣 **Conseils Mammouth** *-- [6 conseils à connaître sur Mammouth](../six-useful-tips-about-mammouth/)*

## 28 janvier 2025

::: info Nouveau générateur d'images
⭐ **Recraft V3**

⭐ **Recraft-svg** *— premier générateur svg*

> Pourquoi avons-nous ajouté Recraft ? [Vérifiez ici](https://artificialanalysis.ai/text-to-image/arena?tab=Leaderboard)
:::

Et aussi :

🖼️ **Stable Diffusion parle maintenant toutes les langues** 

🏗️ **Gestion des erreurs inconnues** *-- plus d'infos sur l'échec du prompt*

🧮 **Détails des quotas** *-- voir quand votre quota mensuel d'images et de documents se réinitialisera*
<br> *Note : le comptage de quota n'est visible que quand il dépasse 50%*

∑ **Design plus joli pour les équations mathématiques** *-- en LaTex*

## 14 janvier 2025

::: info Nouveau modèle !
🐋 **DeepSeek V3**
:::

Et aussi :

🛣  **Routage par modalité** *— Mammouth détermine automatiquement s'il faut prompter texte, image ou web*

🎨 **Refonte de la page nouvelle conversation :**
 - sur les petits écrans, les modèles sont cachés pour éviter l'encombrement
 - glissez-déposez les modèles pour les trier et choisir votre défaut

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/demo-drag-and-drop.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la balise vidéo.
</video>
</div>

## 7 janvier 2025

::: info Mammouth pour les équipes
⭐ **Interface admin** *— inviter des membres d'équipe*

⭐ **Facturation centralisée**

:::

Et aussi :

🖋️ **Blog Mammouth** *— ce site même ;)*

🏗️ **Accès direct aux paramètres de compte** *— plus de lien email Stripe*

## 24 décembre 2024

::: info Mises à jour des modèles
⭐ **o1** *— plus de preview*

⭐ **Grok 2** *— plus de beta*

:::

Et aussi :

🎨 **Nouveau design pour la page de conversation**

🏗️ **Ajout du bouton copier la sortie**

## 17 décembre 2024

::: info Mises à jour des modèles
⭐ **Llama 3.3 70b** *— exécuté par Groq*

⭐ **Gemini 2.0 Flash** *— version expérimentale*

:::

Et aussi :

🦣 **Créer plus de mammouths personnalisés** *— jusqu'à 8 au lieu de 4*

🪲 **Bugs corrigés survenant quand :**
- Tentative de rendu d'une matrice mathématique en LaTex
- o1 était utilisé avec un mammouth personnalisé
- Des documents dans des alphabets non-romains, comme le persan, étaient téléchargés

## 10 décembre 2024

::: info Nouvelle fonctionnalité
⭐
**Partagez votre conversation avec un lien**

:::

Et aussi :

🏗️ **Le copier-coller de la sortie préserve uniquement le formatage pertinent**

🎨 **La barre latérale peut être pliée**

🎨 **Nouveau menu de compte avec :**

- Accès à vos mammouths personnalisés
- Un lien direct vers ces notes de version
- Un lien vers le tutoriel Paramètres d'image et Mammouths personnalisés

## 4 décembre 2024

::: info Modèles d'images

🪄  **Créer une image à partir d'une image** — *avec FLUX Redux*

🪄  **Retexturer votre image** — *avec FLUX Depth*

> *[Comment utiliser image vers image](/docs/how-to-use-image-to-image/)*
> 
:::

Et aussi :

📷 **Téléchargez des photos de caméra de téléphone et des images plus grandes**

⚡ **L'application fonctionne beaucoup plus rapidement quand vous changez de conversations**

🎨 **Design du téléchargement et téléversement amélioré pour les images**

## 27 novembre 2024

::: info Nouveau modèle !
⭐
 **Grok 2**  *- nouvelle marque*

:::

## 20 novembre 2024

::: info Mises à jour des modèles
⭐
**Mistral Large 2** *- mise à jour version novembre*

⭐ **GPT-o1 fait maintenant du streaming**

:::

Et aussi :

✏️ **Modifiez votre dernier prompt**

⏹️ **Arrêtez la génération de message**

🎨 **Flèche ajoutée dans l'entrée**

📁 **Les fichiers .srt sont supportés**

## 15 novembre 2024

::: info Nouvelle taille de contexte
⭐
**Longueur d'entrée max : 300 000 caractères** *- au lieu de 10k*

:::

Et aussi :

⚖️ Un quota ajouté pour les messages d'entrée longs 
> Voir [(i) Détails](https://mammouth.ai/pricing)

🏗️ Faites défiler tout votre historique de conversation dans la barre latérale

🏗️ Lors de l'ouverture d'un chat, le focus est maintenant sur le dernier message

🏗️ Défilement automatique vers le haut du chat après nouveau prompt

🏗️ Coller fichier depuis le presse-papiers

🎨 Nouvelle police native

## 24 octobre 2024

::: info Modèle Web
🌐 **Recherche Web** — *nouvelle catégorie*

⭐ **OpenPerplex** — *nouvelle marque*

:::

Et aussi :

⭐ **Claude 3.5 Sonnet nouveau** — *mise à jour du modèle*

⭐ **Stable Diffusion 3.5 Large** — *mise à jour du modèle*

⭐ **GPT-o1 est maintenant conversationnel**

🏗️ **Coller des images depuis le presse-papiers**

## 19 octobre 2024

🎨 **Formatage de sortie**

- afficher les tableaux *— en markdown*
- titres : formatage d'espace et de taille
- plus d'espace entre les paragraphes

**∑  Afficher les formules mathématiques** — *en LaTex*

## 10 octobre 2024

::: info Fichiers

📂 **Xlsx, Xls, CSV** — *nouvelles extensions disponibles pour le téléchargement de fichiers*

📂 **Pptx, Ppt** — *nouvelles extensions disponibles pour le téléchargement de fichiers*

:::

🔗 **URL dans le prompt** : Les LLMs peuvent examiner une page web quand une url est fournie
