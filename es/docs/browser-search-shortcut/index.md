<style>
.browser-select-tip {
  background: rgba(142, 110, 89, 0.08);
  border-left: 4px solid #8e6e59;
  border-radius: 4px 8px 8px 4px;
  padding: 12px 16px;
  margin: 16px 0;
  font-size: 0.95em;
}
:root.dark .browser-select-tip {
  background: rgba(142, 110, 89, 0.18);
}
.browser-menus details {
  margin: 12px 0;
}
.browser-menus details > summary {
  cursor: pointer;
  padding: 10px 14px;
  border: 1px solid rgba(142, 110, 89, 0.25);
  border-radius: 8px;
  background: rgba(142, 110, 89, 0.04);
  transition: background 0.2s ease, border-color 0.2s ease;
  list-style: none;
}
.browser-menus details > summary::-webkit-details-marker {
  display: none;
}
.browser-menus details > summary::marker {
  content: '';
}
.browser-menus details:not([open]) > summary::before {
  content: '▶ ';
}
.browser-menus details[open] > summary::before {
  content: '🔽 ';
}
.browser-menus details > summary:hover {
  background: rgba(142, 110, 89, 0.1);
  border-color: rgba(142, 110, 89, 0.4);
}
:root.dark .browser-menus details > summary {
  background: rgba(142, 110, 89, 0.08);
  border-color: rgba(142, 110, 89, 0.2);
}
:root.dark .browser-menus details > summary:hover {
  background: rgba(142, 110, 89, 0.18);
  border-color: rgba(142, 110, 89, 0.4);
}
:root:not(.dark) .img-dark,
:root.dark .img-light {
  display: none;
}
</style>

# Usa Mammouth como motor de búsqueda

Puedes enviar un prompt a Mammouth directamente desde la barra de búsqueda de tu navegador.
Añade Mammouth como motor de búsqueda en tu navegador (Firefox, Chrome, Edge, Brave, Vivaldi…):
solo tendrás que escribir un atajo, por ejemplo `m`, seguido de tu pregunta en la barra de direcciones.
Mammouth abrirá una conversación nueva y enviará el prompt automáticamente.

<img class="img-light" src="/docs/browser-search-shortcut/url.gif" style="height: auto;" />
<img class="img-dark" src="/docs/browser-search-shortcut/url.gif" style="height: auto;" />

---

## 🔗 Cómo funciona la URL

Una URL de Mammouth con prompt consta de tres partes:

| Parte | Función | Ejemplo |
|---|---|---|
| `/app/a/default` | Envía el prompt a tu **Mammouth predeterminado** | `https://mammouth.ai/app/a/default` |
| `/app/a/<número>` | Envía el prompt a un **Mammouth personalizado** | `https://mammouth.ai/app/a/12345` |
| `type` | La **categoría de modelos** que se utilizará (light, web, text, reasoning, image, music, video) | `&type=image` |
| `q` | El **prompt** que se enviará (obligatorio, máximo 1000 caracteres; `%s` para los navegadores) | `?q=Hola` |

```
https://mammouth.ai/app/a/<mammouth>?type=<categoría>&q=<prompt>
```

---

## 🦊 Añade Mammouth como motor de búsqueda

Los navegadores sustituyen `%s` por el texto que escribes en la barra de direcciones.
En la URL, sustituye `default` por el número de tu Mammouth personalizado para aprovechar el orden de preferencia de modelos
y el prompt de sistema correspondiente.
::: info
Primero inicia sesión en Mammouth desde el navegador que vas a configurar. Los navegadores bloquean los enlaces directos a sus ajustes: copia la dirección de los ajustes y pégala en la barra de direcciones.
:::

<div class="browser-menus">

<details>
<summary><strong>Firefox</strong></summary>

1. Pega `about:preferences#search` en la barra de direcciones.
2. Haz clic en añadir un motor de búsqueda.
3. Configura el nuevo motor de búsqueda:
   - **Nombre del motor de búsqueda**: un nombre descriptivo.  
     Ejemplo: Mammouth de traducción personalizado.
   - **URL**: introduce la URL del nuevo motor de búsqueda.  
     Ejemplo: `https://mammouth.ai/app/a/1234?type=light&q=%s`
   - **Palabra clave**: una palabra para activar la búsqueda con Mammouth.  
     Ejemplo: `m`

En la barra de direcciones, escribe `m`, seguido de un espacio y tu prompt; luego pulsa **Intro**.
</details>

<details>
<summary><strong>Google Chrome</strong></summary>

1. Pega `chrome://settings/searchEngines` en la barra de direcciones.
2. En la sección **Búsqueda en sitios**, haz clic en **Añadir**.
3. Rellena los campos:
   - **Nombre**: un nombre descriptivo para el nuevo motor de búsqueda.  
     Ejemplo: `Mammouth de traducción personalizado`.
   - **Acceso directo**: una palabra para activar la búsqueda con Mammouth.  
     Ejemplo: `m`.
   - **URL**: introduce la URL del nuevo motor de búsqueda.  
     Ejemplo: `https://mammouth.ai/app/a/1234?type=light&q=%s`.
</details>

<details>
<summary><strong>Brave</strong></summary>

1. Pega `brave://settings/searchEngines` en la barra de direcciones.
2. En la sección **Búsqueda en sitios**, haz clic en **Añadir**.
3. Rellena los campos:
   - **Nombre**: un nombre descriptivo para el nuevo motor de búsqueda.  
     Ejemplo: `Mammouth de traducción personalizado`.
   - **Acceso directo**: una palabra para activar la búsqueda con Mammouth.  
     Ejemplo: `m`.
   - **URL**: introduce la URL del nuevo motor de búsqueda.  
     Ejemplo: `https://mammouth.ai/app/a/1234?type=light&q=%s`.
</details>

<details>
<summary><strong>Vivaldi</strong></summary>

1. Pega `vivaldi://settings/search` en la barra de direcciones.
2. Haz clic en **+** debajo de la lista de motores de búsqueda.
3. Rellena los campos:
   - **Nombre**: un nombre descriptivo para el nuevo motor de búsqueda.  
     Ejemplo: `Mammouth de traducción personalizado`.
   - **Apodo**: una palabra para activar la búsqueda con Mammouth.  
     Ejemplo: `m`.
   - **URL**: introduce la URL del nuevo motor de búsqueda.  
     Ejemplo: `https://mammouth.ai/app/a/1234?type=light&q=%s`.
</details>

</div>

**🔗 Enlaces rápidos**

::: code-group

```text [mp · light]
https://mammouth.ai/app/a/default?type=light&q=%s
```

```text [mp · Mammouth personalizado]
https://mammouth.ai/app/a/12345?q=%s
```

```text [m · Automático]
https://mammouth.ai/app/a/default?q=%s
```

```text [mw · Búsqueda web]
https://mammouth.ai/app/a/default?q=%s&type=web
```

```text [mr · Razonamiento]
https://mammouth.ai/app/a/default?q=%s&type=reasoning
```

---

## ⚙️ Qué ocurre al abrir el enlace

Mammouth abre una nueva conversación con el Mammouth indicado en la URL.

### Límites y seguridad
- **Máximo de 1000 caracteres**: si el prompt supera este límite, no se enviará.
- **Conectores activados**: si has activado [conectores](../connectors/index.md), Mammouth te pedirá que confirmes el prompt.
- **Sin modo agéntico**: un prompt enviado de esta forma no puede activar el modo agéntico.

::: warning Abre solo enlaces de confianza
Un enlace que contenga `?q=` envía un prompt desde **tu** cuenta en cuanto lo abres. No abras un enlace así si no sabes de dónde procede.
:::
