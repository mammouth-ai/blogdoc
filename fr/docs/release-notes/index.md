# Notes de version - Mammouth AI

## 3 juillet 2025

### 🌟 Midjourney v7

### 🧷 API Mammouth 

• **Tous les abonnés ont accès à des tokens gratuits avec leur abonnement** : 2$/4$/10$ par mois pour Starter/Standard/Expert !

• **Compatible OpenAI** : peut maintenant être utilisé dans [n8n](https://mammouth.notion.site/How-to-use-Mammouth-in-n8n-226cf297c1ca80ab9f5dd999410884ee?pvs=74), Cline, etc.. avec les plugins OpenAI

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