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

# Nutze deine eigenen Mammuts auf dem Handy noch einfacher

Erstelle eine Verknüpfung zu einem deiner [eigenen Mammuts](/de/docs/mammouth-assistant-tutorial/)
und öffne es mit einer einzigen Aktion direkt in der Funktion, die du brauchst:

<div class="shortcut-actions">
  <div class="shortcut-action">
    <span class="shortcut-action-icon">⌨️</span>
    <strong>Textfeld</strong>
    <span class="shortcut-action-desc">Schreibe deinen Prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">🎙️</span>
    <strong>Sprachunterhaltung</strong>
    <span class="shortcut-action-desc">Sprich laut mit deinem Mammut</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📝</span>
    <strong>Transkription</strong>
    <span class="shortcut-action-desc">Diktiere deinen Prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📷</span>
    <strong>Kamera</strong>
    <span class="shortcut-action-desc">Sende ein Foto</span>
  </div>
</div>

<img class="img-light" src="/docs/mobile-shortcuts/ios-shortcut-use.gif" alt="Die Sprachunterhaltung eines eigenen Mammuts über das Kontrollzentrum des iPhones starten" style="height: auto;" />
<img class="img-dark" src="/docs/mobile-shortcuts/ios-shortcut-use.gif" alt="Die Sprachunterhaltung eines eigenen Mammuts über das Kontrollzentrum des iPhones starten" style="height: auto;" />

::: info Voraussetzungen
Installiere die [Mammouth-App](/de/docs/how-to-download-the-mammouth-app/) auf deinem Handy
und erstelle mindestens ein [eigenes Mammut](/de/docs/mammouth-assistant-tutorial/).
:::

## 📲 Eine Verknüpfung hinzufügen

<div class="platform-menus">

<details>
<summary><img class="platform-logo" src="/docs/how-to-download-the-mammouth-app/android.png" alt="Android-Logo" /><strong>Android</strong></summary>

1. Öffne in der Mammouth-App das **Menü des eigenen Mammuts**.
2. Wähle die passende Verknüpfung: Textfeld, Sprachunterhaltung, Transkription oder Kamera.
3. Füge sie deinem **Startbildschirm** hinzu.

<img class="img-light" src="/de/docs/mobile-shortcuts/android-add-to-home-screen-light.gif" alt="Verknüpfung eines eigenen Mammuts zum Android-Startbildschirm hinzufügen" style="height: auto;" />
<img class="img-dark" src="/de/docs/mobile-shortcuts/android-add-to-home-screen-dark.gif" alt="Verknüpfung eines eigenen Mammuts zum Android-Startbildschirm hinzufügen" style="height: auto;" />

</details>

<details>
<summary><img class="platform-logo platform-logo-apple" src="/docs/how-to-download-the-mammouth-app/iOS.png" alt="Apple-Logo" /><strong>iPhone</strong></summary>

Auf dem iPhone erstellst du Verknüpfungen mit **Kurzbefehle**, der nativen App von Apple.
Du kannst sie anschließend über das **Kontrollzentrum** oder über ein **Widget** auf dem Home-Bildschirm starten.

--- gif ios voice chat shortcut from control panel
--- gif ios voice transcript from the shortcut widget

**Die Verknüpfung Schritt für Schritt erstellen:**

1. Öffne die App **Kurzbefehle**.
2. Tippe auf **+**, um einen neuen Kurzbefehl zu erstellen, suche dann die App **Mammouth** und wähle sie aus.
3. Wähle die gewünschte Aktion und anschließend das eigene Mammut, das verwendet werden soll.
   Zum Beispiel: die **Sprachunterhaltung** mit deinem Übersetzer-Mammut für eine Echtzeitübersetzung.

<img class="img-light" src="/de/docs/mobile-shortcuts/ios-new-shortcut-light.gif" alt="Einen Mammouth-Kurzbefehl in der App Kurzbefehle erstellen und das eigene Mammut auswählen" style="height: auto;" />
<img class="img-dark" src="/de/docs/mobile-shortcuts/ios-new-shortcut-dark.gif" alt="Einen Mammouth-Kurzbefehl in der App Kurzbefehle erstellen und das eigene Mammut auswählen" style="height: auto;" />

4. Passe deinen Kurzbefehl an: **Symbol**, **Farbe** und **Name**.

<img class="img-light" src="/de/docs/mobile-shortcuts/ios-customize-shortcut-light.gif" alt="Den Kurzbefehl umbenennen und Symbol und Farbe wählen" style="height: auto;" />
<img class="img-dark" src="/de/docs/mobile-shortcuts/ios-customize-shortcut-dark.gif" alt="Den Kurzbefehl umbenennen und Symbol und Farbe wählen" style="height: auto;" />

5. Richte einen Schnellzugriff auf deinen Kurzbefehl ein:
   - **Kontrollzentrum**: füge ein **Kurzbefehle**-Steuerelement hinzu.
   - **Home-Bildschirm**: füge ein **Kurzbefehle**-Widget hinzu.

<img class="img-light" src="/de/docs/mobile-shortcuts/ios-add-widget-light.gif" alt="Das Kurzbefehl-Widget zum Home-Bildschirm des iPhones hinzufügen" style="height: auto;" />
<img class="img-dark" src="/de/docs/mobile-shortcuts/ios-add-widget-dark.gif" alt="Das Kurzbefehl-Widget zum Home-Bildschirm des iPhones hinzufügen" style="height: auto;" />

--- gif ios shortcut translator in control panel

</details>

</div>

::: tip Tipp
Erstelle eine Verknüpfung pro Anwendungsfall: ein Übersetzer-Mammut in der Sprachunterhaltung, ein Korrektor-Mammut
im Textfeld, ein Experten-Mammut mit der Kamera, um zu analysieren, was du gerade vor dir hast …
:::
