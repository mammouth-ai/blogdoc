<style>
:root:not(.dark) .img-dark,
:root.dark .img-light {
  display: none;
}
.shortcut-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin: 20px 0;
}
.shortcut-action {
  padding: 14px 16px;
  border: 1px solid rgba(142, 110, 89, 0.25);
  border-radius: 10px;
  background: rgba(142, 110, 89, 0.04);
  line-height: 1.5;
}
.shortcut-action-icon {
  display: block;
  font-size: 1.5em;
  margin-bottom: 6px;
}
.shortcut-action strong {
  display: block;
}
.shortcut-action-desc {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}
:root.dark .shortcut-action {
  background: rgba(142, 110, 89, 0.1);
  border-color: rgba(142, 110, 89, 0.3);
}
.platform-menus details {
  margin: 12px 0;
}
.platform-menus details > summary {
  cursor: pointer;
  padding: 10px 14px;
  border: 1px solid rgba(142, 110, 89, 0.25);
  border-radius: 8px;
  background: rgba(142, 110, 89, 0.04);
  transition: background 0.2s ease, border-color 0.2s ease;
  list-style: none;
}
.platform-menus details > summary::-webkit-details-marker {
  display: none;
}
.platform-menus details > summary::marker {
  content: '';
}
.platform-menus details:not([open]) > summary::before {
  content: '▶ ';
}
.platform-menus details[open] > summary::before {
  content: '🔽 ';
}
.platform-menus details[open] > summary {
  margin-bottom: 16px;
}
.platform-menus details > summary:hover {
  background: rgba(142, 110, 89, 0.1);
  border-color: rgba(142, 110, 89, 0.4);
}
.platform-menus details > *:not(summary) {
  margin-left: 14px;
}
.platform-menus .platform-logo {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: -8px 2px -8px -4px;
  vertical-align: middle;
}
:root.dark .platform-menus .platform-logo-apple {
  filter: invert(1);
}
:root.dark .platform-menus details > summary {
  background: rgba(142, 110, 89, 0.08);
  border-color: rgba(142, 110, 89, 0.2);
}
:root.dark .platform-menus details > summary:hover {
  background: rgba(142, 110, 89, 0.18);
  border-color: rgba(142, 110, 89, 0.4);
}
</style>

# Utilisez plus facilement vos mammouths personnalisés sur mobile

Créez un raccourci vers l'un de vos [mammouths personnalisés](/fr/docs/mammouth-assistant-tutorial/)
et ouvrez-le en une seule action, directement sur la fonctionnalité dont vous avez besoin :

<div class="shortcut-actions">
  <div class="shortcut-action">
    <span class="shortcut-action-icon">⌨️</span>
    <strong>Champ de texte</strong>
    <span class="shortcut-action-desc">Écrivez votre prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">🎙️</span>
    <strong>Conversation vocale</strong>
    <span class="shortcut-action-desc">Discutez à haute voix</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📝</span>
    <strong>Transcription</strong>
    <span class="shortcut-action-desc">Dictez votre prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📷</span>
    <strong>Caméra</strong>
    <span class="shortcut-action-desc">Envoyez une photo</span>
  </div>
</div>

<img class="img-light" src="/fr/docs/mobile-shortcuts/ios-shortcut-use.gif" style="height: auto;" />
<img class="img-dark" src="/fr/docs/mobile-shortcuts/ios-shortcut-use.gif" style="height: auto;" />
---gif ios exemple voice chat

::: info Prérequis
Installez l'[application Mammouth](/fr/docs/how-to-download-the-mammouth-app/) sur votre téléphone
et créez au moins un [mammouth personnalisé](/fr/docs/mammouth-assistant-tutorial/).
:::

## 📲 Ajouter un raccourci

<div class="platform-menus">

<details>
<summary><img class="platform-logo" src="/docs/how-to-download-the-mammouth-app/android.png" alt="Logo Android" /><strong>Android</strong></summary>

1. Dans l'application Mammouth, ouvrez le **menu du mammouth personnalisé**.
2. Choisissez le raccourci qui vous convient : champ de texte, conversation vocale, transcription ou caméra.
3. Ajoutez-le à votre **écran d'accueil**.

<img class="img-light" src="/fr/docs/mobile-shortcuts/android-add-to-home-screen-light.gif" style="height: auto;" />
<img class="img-dark" src="/fr/docs/mobile-shortcuts/android-add-to-home-screen-dark.gif" style="height: auto;" />

</details>

<details>
<summary><img class="platform-logo platform-logo-apple" src="/docs/how-to-download-the-mammouth-app/iOS.png" alt="Logo Apple" /><strong>iPhone</strong></summary>

Sur iPhone, les raccourcis se créent avec **Raccourcis**, l'application native d'Apple.
Vous pouvez ensuite les lancer depuis le **centre de contrôle** ou depuis un **widget** sur l'écran d'accueil.

--- gif ios voice chat shortcut from control panel  
--- gif ios voice transcript from the shortcut widget  

**Créer le raccourci, étape par étape :**

1. Ouvrez l'application **Raccourcis**.
2. Appuyez sur **+** pour créer un nouveau raccourci, puis recherchez et sélectionnez l'application **Mammouth**.
3. Choisissez l'action qui vous convient, puis sélectionnez le mammouth personnalisé à utiliser.
   Par exemple : la **conversation vocale** avec votre mammouth traducteur, pour une traduction en temps réel.

<img class="img-light" src="/fr/docs/mobile-shortcuts/ios-new-shortcut-light.gif" style="height: auto;" />
<img class="img-dark" src="/fr/docs/mobile-shortcuts/ios-new-shortcut-dark.gif" style="height: auto;" />

4. Personnalisez votre raccourci : **icône**, **couleur** et **nom**.

<img class="img-light" src="/fr/docs/mobile-shortcuts/ios-customize-shortcut-light.gif" style="height: auto;" />
<img class="img-dark" src="/fr/docs/mobile-shortcuts/ios-customize-shortcut-dark.gif" style="height: auto;" />

5. Ajoutez un accès rapide à votre raccourci :
   - **Centre de contrôle** : ajoutez une commande **Raccourcis**.
   - **Écran d'accueil** : ajoutez un widget **Raccourcis**.

<img class="img-light" src="/fr/docs/mobile-shortcuts/ios-add-widget-light.gif" style="height: auto;" />
<img class="img-dark" src="/fr/docs/mobile-shortcuts/ios-add-widget-dark.gif" style="height: auto;" />

--- gif ios shortcut translator in control panel

</details>

</div>

::: tip Astuce
Créez un raccourci par usage : un mammouth traducteur en conversation vocale, un mammouth correcteur
en champ de texte, un mammouth expert en caméra pour analyser ce que vous avez sous les yeux…
:::
