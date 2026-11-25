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

# Usa más fácilmente tus mamuts personalizados en el móvil

Crea un atajo a uno de tus [mamuts personalizados](/es/docs/mammouth-assistant-tutorial/)
y ábrelo con una sola acción, directamente en la función que necesitas:

<div class="shortcut-actions">
  <div class="shortcut-action">
    <span class="shortcut-action-icon">⌨️</span>
    <strong>Campo de texto</strong>
    <span class="shortcut-action-desc">Escribe tu prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">🎙️</span>
    <strong>Conversación por voz</strong>
    <span class="shortcut-action-desc">Habla en voz alta</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📝</span>
    <strong>Transcripción</strong>
    <span class="shortcut-action-desc">Dicta tu prompt</span>
  </div>
  <div class="shortcut-action">
    <span class="shortcut-action-icon">📷</span>
    <strong>Cámara</strong>
    <span class="shortcut-action-desc">Envía una foto</span>
  </div>
</div>

---gif ios exemple voice chat

::: info Requisitos previos
Instala la [aplicación Mammouth](/es/docs/how-to-download-the-mammouth-app/) en tu teléfono
y crea al menos un [mamut personalizado](/es/docs/mammouth-assistant-tutorial/).
:::

## 📲 Añadir un atajo

<div class="platform-menus">

<details>
<summary><img class="platform-logo" src="/docs/how-to-download-the-mammouth-app/android.png" alt="Logotipo de Android" /><strong>Android</strong></summary>

1. En la aplicación Mammouth, abre el **menú del mamut personalizado**.
2. Elige el atajo que más te convenga: campo de texto, conversación por voz, transcripción o cámara.
3. Añádelo a tu **pantalla de inicio**.

<img class="img-light" src="/es/docs/mobile-shortcuts/android-add-to-home-screen-light.gif" alt="Añadir el atajo de un mamut personalizado a la pantalla de inicio de Android" style="height: auto;" />
<img class="img-dark" src="/es/docs/mobile-shortcuts/android-add-to-home-screen-dark.gif" alt="Añadir el atajo de un mamut personalizado a la pantalla de inicio de Android" style="height: auto;" />

</details>

<details>
<summary><img class="platform-logo platform-logo-apple" src="/docs/how-to-download-the-mammouth-app/iOS.png" alt="Logotipo de Apple" /><strong>iPhone</strong></summary>

En iPhone, los atajos se crean con **Atajos**, la aplicación nativa de Apple.
Después puedes lanzarlos desde el **Centro de control** o desde un **widget** en la pantalla de inicio.

--- gif ios voice chat shortcut from control panel
--- gif ios voice transcript from the shortcut widget

**Crear el atajo, paso a paso:**

1. Abre la aplicación **Atajos**.

--- gif ios search app shortcut search

2. Pulsa **+** para crear un nuevo atajo y luego busca y selecciona la aplicación **Mammouth**.

--- gif ios + then mammouth type in shortcut and mammouth selection

3. Elige la acción que prefieras y luego selecciona el mamut personalizado que quieres usar.
   Por ejemplo: la **conversación por voz** con tu mamut traductor, para una traducción en tiempo real.

--- gif ios voice chat selection + translator mammouth selection

4. Personaliza tu atajo: **icono**, **color** y **nombre**.

--- gif ios selection icon mic + color brown + renamming translator

5. Añade un acceso rápido a tu atajo:
   - **Centro de control**: añade un control de **Atajos**.
   - **Pantalla de inicio**: añade un widget de **Atajos**.

--- gif ios shortcut translator in control panel
--- gif ios shortcut translator widget 

</details>

</div>

::: tip Consejo
Crea un atajo por uso: un mamut traductor en conversación por voz, un mamut corrector
en el campo de texto, un mamut experto con la cámara para analizar lo que tienes delante…
:::
