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

# Use your custom mammoths more easily on mobile

Create a shortcut to one of your [custom mammoths](/docs/mammouth-assistant-tutorial/)
and open it in a single action, straight on the feature you need:

<div class="shortcut-actions">
  <div class="shortcut-action">
    <span class="shortcut-action-icon">⌨️</span>
    <strong>Text field</strong>
    <span class="shortcut-action-desc">Write your prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">🎙️</span>
    <strong>Voice chat</strong>
    <span class="shortcut-action-desc">Talk out loud</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📝</span>
    <strong>Transcription</strong>
    <span class="shortcut-action-desc">Dictate your prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📷</span>
    <strong>Camera</strong>
    <span class="shortcut-action-desc">Send a photo</span>
  </div>
</div>

<img class="img-light" src="/docs/mobile-shortcuts/ios-shortcut-use.gif" alt="Starting a custom mammoth's voice chat from the iPhone Control Center" style="height: auto;" />
<img class="img-dark" src="/docs/mobile-shortcuts/ios-shortcut-use.gif" alt="Starting a custom mammoth's voice chat from the iPhone Control Center" style="height: auto;" />

::: info Prerequisites
Install the [Mammouth app](/docs/how-to-download-the-mammouth-app/) on your phone
and create at least one [custom mammoth](/docs/mammouth-assistant-tutorial/).
:::

## 📲 Add a shortcut

<div class="platform-menus">

<details>
<summary><img class="platform-logo" src="/docs/how-to-download-the-mammouth-app/android.png" alt="Android logo" /><strong>Android</strong></summary>

1. In the Mammouth app, open the **custom mammoth menu**.
2. Choose the shortcut that suits you: text field, voice chat, transcription or camera.
3. Add it to your **home screen**.

<img class="img-light" src="/docs/mobile-shortcuts/android-add-to-home-screen-light.gif" alt="Adding a custom mammoth shortcut to the Android home screen" style="height: auto;" />
<img class="img-dark" src="/docs/mobile-shortcuts/android-add-to-home-screen-dark.gif" alt="Adding a custom mammoth shortcut to the Android home screen" style="height: auto;" />

</details>

<details>
<summary><img class="platform-logo platform-logo-apple" src="/docs/how-to-download-the-mammouth-app/iOS.png" alt="Apple logo" /><strong>iPhone</strong></summary>

On iPhone, shortcuts are created with **Shortcuts**, Apple's native app.
You can then launch them from the **Control Center** or from a **widget** on your home screen.

--- gif ios voice chat shortcut from control panel
--- gif ios voice transcript from the shortcut widget

**Create the shortcut, step by step:**

1. Open the **Shortcuts** app.
2. Tap **+** to create a new shortcut, then search for and select the **Mammouth** app.
3. Choose the action you want, then select the custom mammoth to use.
   For example: **voice chat** with your translator mammoth, for real-time translation.

<img class="img-light" src="/docs/mobile-shortcuts/ios-new-shortcut-light.gif" alt="Creating a Mammouth shortcut in the Shortcuts app and choosing the custom mammoth" style="height: auto;" />
<img class="img-dark" src="/docs/mobile-shortcuts/ios-new-shortcut-dark.gif" alt="Creating a Mammouth shortcut in the Shortcuts app and choosing the custom mammoth" style="height: auto;" />

4. Customize your shortcut: **icon**, **color** and **name**.

<img class="img-light" src="/docs/mobile-shortcuts/ios-customize-shortcut-light.gif" alt="Renaming the shortcut and choosing its icon and color" style="height: auto;" />
<img class="img-dark" src="/docs/mobile-shortcuts/ios-customize-shortcut-dark.gif" alt="Renaming the shortcut and choosing its icon and color" style="height: auto;" />

5. Add quick access to your shortcut:
   - **Control Center**: add a **Shortcuts** control.
   - **Home screen**: add a **Shortcuts** widget.

<img class="img-light" src="/docs/mobile-shortcuts/ios-add-widget-light.gif" alt="Adding the shortcut widget to the iPhone home screen" style="height: auto;" />
<img class="img-dark" src="/docs/mobile-shortcuts/ios-add-widget-dark.gif" alt="Adding the shortcut widget to the iPhone home screen" style="height: auto;" />

--- gif ios shortcut translator in control panel

</details>

</div>

::: tip Tip
Create one shortcut per use: a translator mammoth in voice chat, a proofreader mammoth
in the text field, an expert mammoth in camera to analyze what's right in front of you…
:::
