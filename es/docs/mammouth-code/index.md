# Mammouth Code

Mammouth Code es el agente de programación de Mammouth AI que se ejecuta en tu terminal.

::: info [➡️ Obtén tu clave API](https://mammouth.ai/app/account/settings/api) — necesaria para usar Mammouth Code.
:::

Este proyecto es de código abierto y está disponible en [GitHub](https://github.com/mammouth-ai/code).

<div class="h-full w-full">
<iframe
    class="rounded-xl"
    :height="minimized ? '96px' : 'auto'"
    width="100%"
    src="https://www.youtube.com/embed/V9dIg1bIVPg"
    title="Mammouth Code"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    loading="lazy"
    style="aspect-ratio: 16 / 9"
></iframe>
</div>

## Instalación

Ejecuta uno de los siguientes comandos en tu terminal.

<div class="tab-box">
    <input type="radio" name="install-tabs" id="install-tab1" class="tab-input" checked>
    <label for="install-tab1">macOS / Linux / WSL</label>
    <input type="radio" name="install-tabs" id="install-tab2" class="tab-input">
    <label for="install-tab2">Windows (PowerShell)</label>

<div class="tab-content">
  <div class="tab-panel" id="install-content1">

```bash
curl -fsSL "https://code.mammouth.ai/install.sh" | bash
```

</div>
  <div class="tab-panel" id="install-content2">

```powershell
irm "https://code.mammouth.ai/install.ps1" | iex
```

  </div>
  </div>
</div>

<style>
:root {
    --active-tab-color: #673ab7;
    --inactive-tab-color: #6c757d;
    --active-text-color: #343a40;
    --inactive-text-color: #a0a0a0;
    --border-color-light: #dee2e6;
    --background-white: #fff;
    --shadow-color: rgba(0, 0, 0, 0.08);
}

.dark {
    --active-tab-color: #b39ddb;
    --active-text-color: #e0e0e0;
    --inactive-text-color: #888;
    --border-color-light: #3a3a3a;
    --background-white: #1e1e1e;
    --shadow-color: rgba(0, 0, 0, 0.3);
}

.tab-box {
    width: 100%;
    max-width: 700px;
    margin: 30px auto;
    box-sizing: border-box;
    background-color: var(--background-white);
    border: 1px solid var(--border-color-light);
    border-radius: 8px;
    box-shadow: 0 2px 5px var(--shadow-color);
    padding: 0;
    overflow: hidden;
    position: relative;
}

.tab-box .tab-input {
    display: none;
}

.tab-box label {
    padding: 12px 20px;
    cursor: pointer;
    display: inline-block;
    color: var(--inactive-text-color);
    font-weight: 500;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease, border-bottom-color 0.3s ease;
    border-bottom: 2px solid transparent;
}

.tab-box .tab-input:checked + label {
    color: var(--active-text-color);
    font-weight: 600;
    border-bottom-color: var(--active-tab-color);
}

.tab-box label:hover:not(.tab-input:checked + label) {
    color: var(--active-text-color);
}

.tab-box .tab-content {
    border-top: 1px solid var(--border-color-light);
    background-color: var(--background-white);
    box-sizing: border-box;
    border-radius: 0 0 8px 8px;
    padding: 20px;
}

.tab-box .tab-content .tab-panel {
    display: none;
}

#install-tab1:checked ~ .tab-content #install-content1,
#install-tab2:checked ~ .tab-content #install-content2 {
    display: block;
}
</style>

## Uso en tu terminal

Escribe `mammouth`.

::: tip Modelo predeterminado
Al configurar Mammouth Code por primera vez, el modelo predeterminado es **`mammouth-recommended`**, un acceso directo que siempre apunta al modelo que Mammouth considera que ofrece la mejor relación calidad-precio. Consulta [Mammouth Recommended](/es/docs/api-quick-start/index.md#mammouth-recommended) para obtener más información.
:::

## Uso en tu IDE

Para disfrutar de la mejor experiencia, abre Mammouth Code en el terminal integrado de tu IDE (VS Code, Cursor, WebStorm, etc.):

1. Abre el terminal integrado de tu IDE.
2. Ve al directorio de tu proyecto.
3. Ejecuta: `mammouth`.

Eso es todo: Mammouth Code iniciará una sesión interactiva directamente en tu terminal.

## Reanudar una sesión anterior

Hay dos formas de reanudar una sesión anterior:

- Ejecuta `mammouth` como de costumbre y usa el comando `/sessions` para cambiar a una sesión anterior.
- Ejecuta `mammouth -c` para reanudar la última sesión utilizada en la carpeta actual.

## Actualización

Para actualizar Mammouth Code a la versión más reciente:

```bash
mammouth upgrade
```

Se descargará e instalará la versión más reciente, sustituyendo a la anterior y conservando tus configuraciones y sesiones.

## Desinstalación

Para eliminar Mammouth Code por completo de tu sistema:

```bash
mammouth uninstall
```

Esto eliminará Mammouth Code, así como sus configuraciones y sesiones.

## Consumo de tokens en Mammouth Code

Mammouth Code incorpora dinámicamente prompts de sistema según lo que le pidas, lo que explica los **~10k tokens adicionales** que podrías observar.

Lo que puede parecer un prompt «pesado» **en realidad ahorra tokens en proyectos grandes**: permite que el LLM lea solo los archivos pertinentes, en lugar de cargar toda la base de código en el contexto. Este coste adicional parece importante cuando trabajas con un solo archivo, pero el verdadero objetivo es **dirigir la solicitud a la herramienta adecuada** para la tarea.

**Regla sencilla:**

- 📁 **Usa Mammouth Code** si tu proyecto tiene más de 10 archivos o trabajas con un contexto extenso, como ocurre en la mayoría de los proyectos de programación reales.
- 💬 **Usa la interfaz estándar de Mammouth** si el contexto es manejable: dos o tres archivos, unas 500 líneas como máximo (por ejemplo, para entender una función concreta, salvo que estés en medio de una jerarquía de clases OOP con triple herencia).

::: warning Seguimiento del consumo
Ten en cuenta que el estimador de costes y consumo que muestra Mammouth Code no siempre es exacto en tiempo real. Para consultar tu consumo real de la API, visita [mammouth.ai/app/account/api](https://mammouth.ai/app/account/api).
:::

> **Nota sobre Claude Haiku:** actualmente se utiliza este modelo más pequeño para generar títulos de sesión. Esta opción se podrá configurar en una próxima actualización.

## Niveles de esfuerzo del modelo

Al usar Mammouth Code, puedes cambiar de variante de modelo pulsando **Ctrl+P** y seleccionando **Switch model variant** (o pulsando **Ctrl+T** para recorrer rápidamente las variantes). Así puedes elegir el nivel de esfuerzo para los modelos compatibles.

### ¿Qué son los niveles de esfuerzo?

Los niveles de esfuerzo controlan el **razonamiento extendido**: el tiempo y los tokens que el modelo dedica a razonar antes de responder.

| Nivel | Razonamiento | Ideal para |
| -------------- | ---------------- | ----------------------------------------------------------- |
| **Default** | Desactivado | Tareas estándar, respuesta más rápida y consumo mínimo de tokens. |
| **Low** | Activado (mínimo) | Tareas sencillas que se benefician de algo de razonamiento. |
| **Medium** | Activado (moderado) | La mayoría de las tareas: buen equilibrio entre velocidad y profundidad. |
| **High** | Activado (máximo) | Problemas complejos, decisiones de arquitectura y errores difíciles de resolver. |

Un nivel de esfuerzo mayor implica un razonamiento más profundo, pero también **respuestas más lentas y un mayor consumo de tokens**.

::: info
No todos los modelos admiten niveles de esfuerzo. El razonamiento extendido solo está disponible para determinados modelos. En los modelos incompatibles, esta opción no estará disponible.
:::

### Cuándo usar cada nivel

- 🟢 **Default**: cambios rápidos, preguntas sencillas y navegación por archivos.
- 🔵 **Low**: refactorizaciones y pequeñas funciones.
- 🟡 **Medium**: tareas de varios pasos, depuración y revisión de código.
- 🔴 **High**: algoritmos complejos, decisiones de arquitectura y errores difíciles de reproducir.
