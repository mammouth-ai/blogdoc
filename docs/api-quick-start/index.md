# API Documentation

## Quick Start

A Mammouth subscription gives you access to an OpenAI-compatible chat completion API to easily integrate AI into your favorite tools or applications.
Visit https://mammouth.ai/app/account/settings/api to create your API key.

### With the Mammouth API directly

Generates a chat completion response based on your prompt.

<div class="tab-box">
    <!-- Onglets (Labels) -->
    <input type="radio" name="tabs" id="tab1" class="tab-input" checked>
    <label for="tab1">Python</label>
    <input type="radio" name="tabs" id="tab2" class="tab-input">
    <label for="tab2">JavaScript</label>
    <input type="radio" name="tabs" id="tab3" class="tab-input">
    <label for="tab3">cURL</label>

<!-- Contenu des onglets -->
<div class="tab-content">
  <div class="tab-panel" id="content1"> <p>

```python
import requests
url = "https://api.mammouth.ai/v1/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "model": "gpt-4.1",
    "messages": [
        {
            "role": "user",
            "content": "Explain the basics of machine learning"
        }
    ]
}
response = requests.post(url, headers=headers, json=data)
print(response.json())
```

</p>
  </div>
  <div class="tab-panel" id="content2"> <p>

```javascript
const fetch = require("node-fetch");

async function callMammouth() {
  const url = "https://api.mammouth.ai/v1/chat/completions";
  const headers = {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  };

  const data = {
    model: "gpt-4.1",
    messages: [
      {
        role: "user",
        content: "Create an example JavaScript function",
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

</p>
  </div>
  <div class="tab-panel" id="content3"> <p>

```bash
curl -X POST https://api.mammouth.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you doing?"
      }
    ]
  }'
```

</p>
        </div>
    </div>
</div>

<style>
/* Définition de variables CSS */
:root {
    --active-tab-color: #673ab7; /* Une couleur violet/bleu pour la barre active */
    --inactive-tab-color: #6c757d; /* Gris pour le texte inactif */
    --active-text-color: #343a40; /* Couleur de texte foncée pour l'actif */
    --inactive-text-color: #a0a0a0; /* Gris plus clair pour le texte inactif */
    --border-color-light: #dee2e6; /* Couleur de bordure très légère */
    --background-white: #fff; /* Fond blanc */
    --shadow-color: rgba(0, 0, 0, 0.08); /* Ombre légère */
}

/* Styles pour le conteneur global des onglets */
.tab-box {
    width: 100%; /* Ajustez la largeur si nécessaire */
    max-width: 700px; /* Limiter la largeur maximale */
    margin: 30px auto; /* Centre le bloc et ajoute de la marge */
    box-sizing: border-box;
    background-color: var(--background-white); /* Fond blanc */
    border: 1px solid var(--border-color-light); /* Bordure légère */
    border-radius: 8px; /* Arrondir les coins */
    box-shadow: 0 2px 5px var(--shadow-color); /* Ombre subtile */
    padding: 0; /* Pas de padding global */
    overflow: hidden; /* S'assure que le contenu arrondi est bien contenu */
    position: relative; /* Nécessaire pour positionner l'icône absolument à l'intérieur */
}

/* Cacher les boutons radio natifs */
.tab-box .tab-input {
    display: none;
}

/* Styliser les labels pour qu'ils ressemblent à des onglets */
.tab-box label {
    padding: 12px 20px; /* Espacement interne */
    cursor: pointer;
    display: inline-block; /* Permet aux labels de s'aligner côte à côte */
    color: var(--inactive-text-color); /* Couleur de texte par défaut (inactif) */
    font-weight: 500; /* Poids de police standard */
    position: relative; /* Nécessaire pour la barre de soulignement */
    z-index: 1; /* Assure que les labels sont au-dessus de la ligne de séparation */
    transition: color 0.3s ease, border-bottom-color 0.3s ease; /* Transition douce pour couleur et bordure */
    /* Pas de bordure visible par défaut, la ligne de séparation est sur le contenu */
    border-bottom: 2px solid transparent; /* Bordure transparente par défaut */
}

/* Styliser le label de l'onglet actif */
.tab-box .tab-input:checked + label {
    color: var(--active-text-color); /* Couleur de texte plus foncée pour l'actif */
    font-weight: 600; /* Rendre le texte actif plus épais */
    border-bottom-color: var(--active-tab-color); /* Ajouter la barre de soulignement colorée */
}

/* Ajouter un effet au survol des labels (peut-être juste changer la couleur du texte légèrement) */
.tab-box label:hover:not(.tab-input:checked + label) {
    color: var(--active-text-color); /* Rendre le texte un peu plus foncé au survol si inactif */
}


/* Conteneur pour le contenu des onglets */
.tab-box .tab-content {
    border-top: 1px solid var(--border-color-light); /* Ligne de séparation fine sous les onglets */
    background-color: var(--background-white);
    box-sizing: border-box;
    /* Les bordures inférieures et latérales sont celles de .tab-box */
    border-radius: 0 0 8px 8px; /* Arrondir les coins inférieurs */
    padding: 20px; /* Padding interne du contenu */
}

/* Styliser et cacher tous les panneaux de contenu par défaut */
.tab-box .tab-content .tab-panel {
    display: none; /* Cache tous les panneaux par défaut */
    /* Padding déjà sur .tab-content */
}

/* Afficher le panneau de contenu correspondant au bouton radio coché */
/* Utilise le sélecteur de frères généraux (~) */
#tab1:checked ~ .tab-content #content1,
#tab2:checked ~ .tab-content #content2,
#tab3:checked ~ .tab-content #content3 { /* Ajoutez les IDs des autres onglets ici */
    display: block; /* Affiche le panneau actif */
}

/* Styles pour le conteneur de l'icône */
.tab-icon-container {
    position: absolute; /* Position absolue par rapport à .tab-box */
    top: 0; /* Aligner en haut */
    right: 0; /* Aligner à droite */
    padding: 12px 20px; /* Ajouter du padding pour l'espace autour de l'icône */
    height: 100%; /* Prendre toute la hauteur de l'en-tête d'onglet */
    display: flex; /* Utiliser flexbox pour centrer l'icône verticalement si besoin */
    align-items: center; /* Centrer verticalement */
    z-index: 3; /* Assure que l'icône est au-dessus des onglets */
    color: var(--inactive-tab-color); /* Couleur de l'icône (peut être ajustée) */
}

/* Styliser l'icône SVG à l'intérieur */
.tab-icon-container .copy-icon {
    display: block; /* Assure que le SVG est un bloc pour un meilleur alignement */
    /* La couleur est héritée du parent .tab-icon-container */
}

/* Quelques styles de base pour le contenu */
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
    color: var(--text-color-dark); /* Assurez-vous que --text-color-dark est définie ou utilisez une couleur */
}

</style>

### With OpenAI Library

```python
import openai

# Configure the client to use Mammouth.ai
openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "YOUR_API_KEY"

response = openai.ChatCompletion.create(
    model="gpt-4.1",
    messages=[
        {"role": "user", "content": "What are the benefits of renewable energy?"}
    ]
)

print(response.choices[0].message.content)
```

## Response Format

### Successful Response

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
        "content": "Hello! I'm doing very well, thank you for asking. How can I help you today?"
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

### Streaming Response

When `stream: true` is set, responses are returned as Server-Sent Events:

```
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1677652288,"model":"gpt-4.1","choices":[{"index":0,"delta":{"content":"Hello"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1677652288,"model":"gpt-4.1","choices":[{"index":0,"delta":{"content":"!"},"finish_reason":null}]}

data: [DONE]
```

## Models

| Model                            | Input ($/M tokens) | Output ($/M tokens) |
| -------------------------------- | ------------------ | ------------------- |
| `gpt-4.1`                        | 2                  | 8                   |
| `gpt-4.1-mini`                   | 0.4                | 1.6                 |
| `gpt-4.1-nano`                   | 0.1                | 0.4                 |
| `gpt-4o`                         | 2.5                | 10                  |
| `o4-mini`                        | 1.1                | 4.4                 |
| `o3`                             | 2                  | 8                   |
| `mistral-large-2411`             | 2                  | 6                   |
| `mistral-medium-3`               | 0.4                | 2                   |
| `mistral-small-3.2-24b-instruct` | 0.1                | 0.3                 |
| `magistral-medium-2506`          | 2                  | 5                   |
| `codestral-2501`                 | 0.3                | 0.9                 |
| `grok-3`                         | 3                  | 15                  |
| `grok-3-mini`                    | 0.3                | 0.5                 |
| `gemini-2.5-flash`               | 0.3                | 2.5                 |
| `gemini-2.5-pro`                 | 2.5                | 15                  |
| `deepseek-r1-0528`               | 3                  | 8                   |
| `deepseek-v3-0324`               | 0.9                | 0.9                 |
| `llama-4-maverick`               | 0.22               | 0.88                |
| `llama-4-scout`                  | 0.15               | 0.6                 |
| `claude-3-5-haiku-20241022`      | 0.8                | 4                   |
| `claude-3-7-sonnet-20250219`     | 3                  | 15                  |
| `claude-sonnet-4-20250514`       | 3                  | 15                  |
| `claude-opus-4-20250514`         | 15                 | 75                  |

Prices are indicative. They may vary and not be up to date in this table.

We added aliases to facilitate your model switch: if you write `mistral`, it will use `mistral-medium-3` like on the app.

## Error Codes

| Code  | Description                                          |
| ----- | ---------------------------------------------------- |
| `400` | Bad Request - Missing or incorrect parameters        |
| `401` | Unauthorized - Invalid API key                       |
| `429` | Too Many Requests - Rate limit exceeded              |
| `500` | Internal Server Error - Server-side issue            |
| `503` | Service Unavailable - Server temporarily unavailable |

### Error Response Format

```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "invalid_request_error",
    "code": "invalid_api_key"
  }
}
```

## Parameters

#### Required Parameters

| Parameter  | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| `messages` | array  | List of messages in the conversation |
| `model`    | string | Model identifier to use              |

#### Optional Parameters

| Parameter     | Type    | Default | Description                          |
| ------------- | ------- | ------- | ------------------------------------ |
| `temperature` | number  | 0.7     | Controls creativity (0.0 to 2.0)     |
| `max_tokens`  | integer | 2048    | Maximum number of tokens to generate |
| `top_p`       | number  | 1.0     | Controls response diversity          |
| `stream`      | boolean | false   | Real-time response streaming         |

## Optimization Tips

### Temperature Settings

- **0.0 - 0.3**: Very consistent and predictable responses
- **0.4 - 0.7**: Balance between creativity and coherence
- **0.8 - 1.0**: More creative and varied responses

### Message Structure

```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are an AI assistant specialized in programming."
    },
    {
      "role": "user",
      "content": "How to optimize a for loop in Python?"
    }
  ]
}
```

### Role Types

- **`system`**: Sets the behavior and context for the assistant
- **`user`**: Represents messages from the user
- **`assistant`**: Represents previous responses from the AI

## Migration from OpenAI

If you're already using OpenAI's API, migrating to Mammouth.ai is simple:

1. Change the base URL from `https://api.openai.com/v1` to `https://api.mammouth.ai/v1`
2. Update your API key
3. Keep all other parameters the same

### OpenAI Python Library

```python
import openai

# Before
openai.api_base = "https://api.openai.com/v1"
openai.api_key = "sk-openai-key"

# After
openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "your-mammouth-key"
```
