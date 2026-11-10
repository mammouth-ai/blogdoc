# Documentación de la API

Una API de LLM compatible con OpenAI para integrar fácilmente la IA en tus aplicaciones.

::: info [➡️ Obtén tu clave API y créditos](https://mammouth.ai/app/account/settings/api).
:::

## Inicio rápido

- Compra créditos de API por separado desde los [ajustes de la API](https://mammouth.ai/app/account/settings/api).
- Las suscripciones de Mammouth incluyen créditos mensuales (Starter 2 $, Standard 4 $, Expert 10 $).
- Puedes usar la API sin una suscripción si [compras créditos directamente](https://mammouth.ai/app/account/settings/api).

💡 Para un uso intensivo (Mammouth Code, Cline), es preferible Starter + unos 50 $ en créditos API que Expert.

[➡️ Obtén tu clave API y créditos](https://mammouth.ai/app/account/settings/api).

### Uso directo de Mammouth API

Genera una respuesta de chat completion a partir de tu prompt.

<div class="tab-box">
    <input type="radio" name="tabs" id="tab1" class="tab-input" checked>
    <label for="tab1">Python</label>
    <input type="radio" name="tabs" id="tab2" class="tab-input">
    <label for="tab2">JavaScript</label>
    <input type="radio" name="tabs" id="tab3" class="tab-input">
    <label for="tab3">cURL</label>

<div class="tab-content">
  <div class="tab-panel" id="content1">

```python
import requests
url = "https://api.mammouth.ai/v1/chat/completions"
headers = {
    "Authorization": "Bearer TU_CLAVE_API",
    "Content-Type": "application/json"
}
data = {
    "model": "gpt-4.1",
    "messages": [
        {
            "role": "user",
            "content": "Explica los fundamentos del aprendizaje automático"
        }
    ]
}
response = requests.post(url, headers=headers, json=data)
print(response.json())
```

</div>
<div class="tab-panel" id="content2">

```javascript
const fetch = require("node-fetch");

async function callMammouth() {
  const url = "https://api.mammouth.ai/v1/chat/completions";
  const headers = {
    Authorization: "Bearer TU_CLAVE_API",
    "Content-Type": "application/json",
  };

  const data = {
    model: "gpt-4.1",
    messages: [
      {
        role: "user",
        content: "Crea un ejemplo de función JavaScript",
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

callMammouth();
```

</div>
  <div class="tab-panel" id="content3">

```bash
curl -X POST https://api.mammouth.ai/v1/chat/completions \
  -H "Authorization: Bearer TU_CLAVE_API" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1",
    "messages": [
      {
        "role": "user",
        "content": "Hola, ¿qué tal?"
      }
    ]
  }'
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

#tab1:checked ~ .tab-content #content1,
#tab2:checked ~ .tab-content #content2,
#tab3:checked ~ .tab-content #content3 {
    display: block;
}

.tab-icon-container {
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px 20px;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 3;
    color: var(--inactive-tab-color);
}

.tab-icon-container .copy-icon {
    display: block;
}

.tab-box .tab-content .tab-panel h2 {
    margin-top: 0;
    color: var(--active-text-color);
    font-size: 1.4em;
    margin-bottom: 15px;
    border-bottom: 1px solid var(--border-color-light);
    padding-bottom: 10px;
}
.tab-box .tab-content .tab-panel p {
    margin-bottom: 10px;
    line-height: 1.6;
    color: var(--text-color-dark);
}
</style>

[➡️ Obtén tu clave API y créditos](https://mammouth.ai/app/account/settings/api).

### Con la biblioteca de OpenAI

```python
import openai

openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "TU_CLAVE_API"

response = openai.ChatCompletion.create(
    model="gpt-4.1",
    messages=[
        {"role": "user", "content": "¿Cuáles son las ventajas de las energías renovables?"}
    ]
)

print(response.choices[0].message.content)
```

## Formato de respuesta

### Respuesta correcta

<div class="tab-box">
    <input type="radio" name="response-tabs" id="response-tab1" class="tab-input" checked>
    <label for="response-tab1">Texto</label>
    <input type="radio" name="response-tabs" id="response-tab2" class="tab-input">
    <label for="response-tab2">Imagen</label>

<div class="tab-content">
  <div class="tab-panel" id="response-content1">

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "gpt-4.1",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "¡Hola! Estoy muy bien, gracias por preguntar. ¿En qué puedo ayudarte hoy?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 12,
    "completion_tokens": 19,
    "total_tokens": 31
  }
}
```

### Respuesta en streaming

Cuando se define `stream: true`, las respuestas se devuelven como eventos Server-Sent Events:

```
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1677652288,"model":"gpt-4.1","choices":[{"index":0,"delta":{"content":"Hello"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1677652288,"model":"gpt-4.1","choices":[{"index":0,"delta":{"content":"!"},"finish_reason":null}]}

data: [DONE]
```

</div>
  <div class="tab-panel" id="response-content2">

```json
{
  "id": "gen-1767710235-3VtWd1SuI9ilIspBmeWG",
  "created": 1767710235,
  "model": "google/gemini-2.5-flash-image",
  "object": "chat.completion",
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "Aquí tienes una preciosa puesta de sol.",
        "role": "assistant",
        "images": [
          {
            "image_url": {
              "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAI..."
            }
          }
        ]
      }
    }
  ]
}
```

  </div>
  </div>
</div>

<style>
#response-tab1:checked ~ .tab-content #response-content1,
#response-tab2:checked ~ .tab-content #response-content2 {
    display: block;
}
</style>

## Modelos y precios

### Mammouth Recommended

`mammouth-recommended` es un alias del modelo que Mammouth considera que ofrece la mejor relación calidad-precio en cada momento.

Dirige tus solicitudes a este alias y siempre recibirás nuestra elección actual sin tener que seguir los nuevos lanzamientos.

- **Elección actual:** `glm-5.3-flash`, con `minimax-m3` como alternativa (fallback). La elección cambiará con el tiempo a medida que se publiquen nuevos modelos.
- **Cómo usarlo:** llámalo como a cualquier otro modelo. Especifica `mammouth-recommended` como modelo o utiliza los alias `mammouth` o `recommended`.
- **Precio:** pagas lo mismo que por el modelo subyacente, sin recargo; consulta su fila en la tabla siguiente.

### Todos los modelos

Lista no exhaustiva. Consulta [la lista completa y actualizada](https://model-explorer.mammouth.ai).

| Modelo | Entrada ($/M tokens) | Salida ($/M tokens) |
| ------------------------------- | ------------------- | ------------------- |
| `claude-fable-5.1` | 10.00 | 50.00 |
| `claude-haiku-5-5` | 0.10 | 0.50 |
| `claude-opus-5-5` | 4.00 | 20.00 |
| `claude-sonnet-5-5` | 2.00 | 10.00 |
| `deepseek-v4-pro` | 1.74 | 3.48 |
| `deepseek-v4.1-flash` | 0.22 | 0.66 |
| `gemini-3.8-flash` | 1.50 | 7.50 |
| `gemini-4-argon` | 4.00 | 20.00 |
| `gemini-nano-banana-2.1` | 1.50 | 7.50 |
| `glm-5.3` | 1.40 | 4.40 |
| `glm-5.3-flash` | 0.15 | 0.50 |
| `gpt-6-astra` | 10.00 | 50.00 |
| `gpt-6-luna` | 0.10 | 0.50 |
| `gpt-6.1-sol` | 2.00 | 10.00 |
| `grok-4.7` | 2.00 | 6.00 |
| `kimi-k3.1-pro` | 2.00 | 10.00 |
| `kimi-k3-fast` | 4.50 | 22.50 |
| `minimax-m3` | 0.30 | 1.20 |
| `mistral-large-4` | 1.36 | 4.18 |
| `mistral-medium-3-5` | 1.50 | 7.50 |
| `mistral-small-2603` | 0.15 | 0.60 |
| `muse-spark-open` | 1.25 | 4.25 |
| `qwen3.8-27b` | 0.20 | 2.50 |
| `qwen3.8-2.4t-a95b` | 2.00 | 6.00 |
| `sonar-pro` | 3.00 | 15.00 |

::: info Sobre los precios
Los precios que aparecen aquí son máximos.

El importe real puede ser inferior, ya que depende de la disponibilidad de los proveedores.

Nunca se te cobrará más del precio indicado.
:::

## Embeddings

Genera embeddings vectoriales de texto para utilizarlos en búsquedas semánticas, agrupación y otras tareas de PLN.

### Modelos de embeddings y precios

| Modelo | Entrada ($/M tokens) |
| ------------------------ | ------------------- |
| `text-embedding-3-large` | 0.13 |
| `text-embedding-3-small` | 0.02 |

### Ejemplo de embedding

```python
import requests

url = "https://api.mammouth.ai/v1/embeddings"
headers = {
    "Authorization": "Bearer TU_CLAVE_API",
    "Content-Type": "application/json"
}
data = {
    "model": "text-embedding-3-large",
    "input": "¡Hola, mundo!"
}
response = requests.post(url, headers=headers, json=data)
print(response.json())
```

### Respuesta de embedding

```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [0.0023, -0.0091, 0.0152, ...]
    }
  ],
  "model": "text-embedding-3-large",
  "usage": {
    "prompt_tokens": 4,
    "total_tokens": 4
  }
}
```

📜 [El uso y los costes se registran en tus ajustes](https://mammouth.ai/app/account/settings/api).

💡 Hemos añadido alias alineados con la aplicación de Mammouth para facilitar la selección de modelos: si escribes `claude`, se utilizará automáticamente `claude-sonnet-5-5`.

## Códigos de error

| Código | Descripción |
| ----- | ---------------------------------------------------------- |
| `400` | Solicitud incorrecta: faltan parámetros o son incorrectos. |
| `401` | No autorizado: la clave API no es válida. |
| `429` | Demasiadas solicitudes: se ha superado el límite de frecuencia. |
| `500` | Error interno del servidor. |
| `503` | Servicio no disponible temporalmente. |

## Consultar el gasto

Para consultar cuántos créditos se han consumido con una clave, usa:

```bash
curl -X GET "https://api.mammouth.ai/key/info" -H "Authorization: Bearer $MAMMOUTH_API_KEY"
```

## Parámetros

#### Parámetros obligatorios

| Parámetro | Tipo | Descripción |
| ---------- | ------ | --------------------------------------- |
| `messages` | array | Lista de mensajes de la conversación. |
| `model` | string | Identificador del modelo que se utilizará. |

#### Parámetros opcionales

| Parámetro | Tipo | Predeterminado | Descripción |
| ------------- | ------- | ------ | ---------------------------------- |
| `temperature` | number | 0.7 | Controla la creatividad (de 0.0 a 2.0). |
| `max_tokens` | integer | 2048 | Número máximo de tokens que se generarán. |
| `top_p` | number | 1.0 | Controla la diversidad de las respuestas. |
| `stream` | boolean | false | Transmite la respuesta en tiempo real. |

Nuestra API también admite parámetros y funciones específicos de cada proveedor, como el esfuerzo de razonamiento, las llamadas a herramientas y funciones, y el modo thinking. La disponibilidad depende del proveedor y del modelo.

## Consejos de optimización

### Estructura de los mensajes

```json
{
  "messages": [
    {
      "role": "system",
      "content": "Eres un asistente de IA especializado en programación."
    },
    {
      "role": "user",
      "content": "¿Cómo se optimiza un bucle for en Python?"
    }
  ]
}
```

### Tipos de roles

- **`system`**: define el comportamiento y el contexto del asistente.
- **`user`**: representa los mensajes del usuario.
- **`assistant`**: representa las respuestas anteriores de la IA.

## Migración desde OpenAI

Si ya utilizas la API de OpenAI, migrar a Mammouth.ai es sencillo:

1. Cambia la URL base de `https://api.openai.com/v1` a `https://api.mammouth.ai/v1`.
2. Actualiza tu clave API.
3. Mantén iguales los demás parámetros.

### Biblioteca OpenAI para Python

```python
import openai

# Antes
openai.api_base = "https://api.openai.com/v1"
openai.api_key = "sk-openai-key"

# Después
openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "tu-clave-mammouth"
```

## n8n, VS Code, Cline, OpenClaw, Make, CLI, etc.

Puedes usar Mammouth API con herramientas como n8n, VS Code, Cline, Make y muchas otras.

Asegúrate de usar la URL correcta. Si tienes dudas, prueba cada una.

- URL base: `https://api.mammouth.ai/v1` o `https://api.mammouth.ai/`.
- Para solicitudes HTTPS, necesitarás `https://api.mammouth.ai/v1/chat/completions`.

### Guías para usar Mammouth API con tus herramientas favoritas

**Para automatizaciones:**

- [**n8n**](https://public.mammouth.ai/n8n)
- [**Make**](https://public.mammouth.ai/how-to-use-mammouth-api-with-make)
- [**OpenClaw**](../openclaw/)

**Para IDE:**

- [**Cline (en VS Code, JetBrains o Cursor)**](../cline/)
- [**XCode**](https://public.mammouth.ai/xcode)
- [**Zed**](https://public.mammouth.ai/zed)

**Para CLI (equivalente a Claude Code):**

- [**¡Mammouth Code!**](../mammouth-code/)

También puedes usar [Opencode](https://public.mammouth.ai/opencode).

**Otros**

- [**GitKraken**](https://public.mammouth.ai/gitkraken)

##

::: info [➡️ Obtén tu clave API y créditos](https://mammouth.ai/app/account/settings/api)
:::
