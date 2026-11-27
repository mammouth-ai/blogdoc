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

# Usa più facilmente i tuoi mammut personalizzati su mobile

Crea una scorciatoia verso uno dei tuoi [mammut personalizzati](/it/docs/mammouth-assistant-tutorial/)
e aprilo con una sola azione, direttamente sulla funzione di cui hai bisogno:

<div class="shortcut-actions">
  <div class="shortcut-action">
    <span class="shortcut-action-icon">⌨️</span>
    <strong>Campo di testo</strong>
    <span class="shortcut-action-desc">Scrivi il tuo prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">🎙️</span>
    <strong>Conversazione vocale</strong>
    <span class="shortcut-action-desc">Parla ad alta voce</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📝</span>
    <strong>Trascrizione</strong>
    <span class="shortcut-action-desc">Detta il tuo prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📷</span>
    <strong>Fotocamera</strong>
    <span class="shortcut-action-desc">Invia una foto</span>
  </div>
</div>

<img class="img-light" src="/docs/mobile-shortcuts/ios-shortcut-use.gif" alt="Avvio della conversazione vocale di un mammut personalizzato dal Centro di Controllo dell'iPhone" style="height: auto;" />
<img class="img-dark" src="/docs/mobile-shortcuts/ios-shortcut-use.gif" alt="Avvio della conversazione vocale di un mammut personalizzato dal Centro di Controllo dell'iPhone" style="height: auto;" />

::: info Prerequisiti
Installa l'[app Mammouth](/it/docs/how-to-download-the-mammouth-app/) sul tuo telefono
e crea almeno un [mammut personalizzato](/it/docs/mammouth-assistant-tutorial/).
:::

## 📲 Aggiungere una scorciatoia

<div class="platform-menus">

<details>
<summary><img class="platform-logo" src="/docs/how-to-download-the-mammouth-app/android.png" alt="Logo Android" /><strong>Android</strong></summary>

1. Nell'app Mammouth, apri il **menu del mammut personalizzato**.
2. Scegli la scorciatoia che preferisci: campo di testo, conversazione vocale, trascrizione o fotocamera.
3. Aggiungila alla tua **schermata Home**.

<img class="img-light" src="/it/docs/mobile-shortcuts/android-add-to-home-screen-light.gif" alt="Aggiungere la scorciatoia di un mammut personalizzato alla schermata Home di Android" style="height: auto;" />
<img class="img-dark" src="/it/docs/mobile-shortcuts/android-add-to-home-screen-dark.gif" alt="Aggiungere la scorciatoia di un mammut personalizzato alla schermata Home di Android" style="height: auto;" />

</details>

<details>
<summary><img class="platform-logo platform-logo-apple" src="/docs/how-to-download-the-mammouth-app/iOS.png" alt="Logo Apple" /><strong>iPhone</strong></summary>

Su iPhone, le scorciatoie si creano con **Comandi rapidi**, l'app nativa di Apple.
Puoi poi avviarle dal **Centro di Controllo** o da un **widget** nella schermata Home.

**Creare la scorciatoia, passo dopo passo:**

1. Apri l'app **Comandi rapidi**.
2. Tocca **+** per creare un nuovo comando rapido, poi cerca e seleziona l'app **Mammouth**.
3. Scegli l'azione che preferisci, poi seleziona il mammut personalizzato da usare.
   Ad esempio: la **conversazione vocale** con il tuo mammut traduttore, per una traduzione in tempo reale.

<img class="img-light" src="/it/docs/mobile-shortcuts/ios-new-shortcut-light.gif" alt="Creazione di un comando rapido Mammouth nell'app Comandi rapidi e scelta del mammut personalizzato" style="height: auto;" />
<img class="img-dark" src="/it/docs/mobile-shortcuts/ios-new-shortcut-dark.gif" alt="Creazione di un comando rapido Mammouth nell'app Comandi rapidi e scelta del mammut personalizzato" style="height: auto;" />

4. Personalizza il tuo comando rapido: **icona**, **colore** e **nome**.

<img class="img-light" src="/it/docs/mobile-shortcuts/ios-customize-shortcut-light.gif" alt="Rinominare il comando rapido e scegliere icona e colore" style="height: auto;" />
<img class="img-dark" src="/it/docs/mobile-shortcuts/ios-customize-shortcut-dark.gif" alt="Rinominare il comando rapido e scegliere icona e colore" style="height: auto;" />

5. Aggiungi un accesso rapido al tuo comando rapido:
   - **Centro di Controllo**: aggiungi un controllo **Comandi rapidi**.
   - **Schermata Home**: aggiungi un widget **Comandi rapidi**.

<img class="img-light" src="/it/docs/mobile-shortcuts/ios-add-widget-light.gif" alt="Aggiungere il widget del comando rapido alla schermata Home dell'iPhone" style="height: auto;" />
<img class="img-dark" src="/it/docs/mobile-shortcuts/ios-add-widget-dark.gif" alt="Aggiungere il widget del comando rapido alla schermata Home dell'iPhone" style="height: auto;" />


</details>

</div>

::: tip Suggerimento
Crea una scorciatoia per ogni uso: un mammut traduttore in conversazione vocale, un mammut correttore
nel campo di testo, un mammut esperto con la fotocamera per analizzare ciò che hai sotto gli occhi…
:::
