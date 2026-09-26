# API-Dokumentation

Eine OpenAI-kompatible Chat-Completions-LLM-API, mit der du KI ganz einfach in deine Anwendungen integrieren kannst.

::: info [➡️ API-Schlüssel und Guthaben abrufen](https://mammouth.ai/app/account/settings/api)

:::

## Schnellstart

Alle Mammouth-Abonnenten erhalten ein gewisses Guthaben inklusive.

| Plan            | `Starter` | `Standard` | `Expert` |
| --------------- | --------- | ---------- | -------- |
| Monatliches Guthaben | 2$        | 4$         | 10$      |

Du kannst auch nutzungsabhängig direkt [in den API-Einstellungen](https://mammouth.ai/app/account/settings/api) ein Guthaben erwerben.

[➡️ API-Schlüssel und Guthaben abrufen](https://mammouth.ai/app/account/settings/api).

### Direkt mit der Mammouth-API

Erzeugt anhand deines Prompts eine Chat-Completions-Antwort.

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
  <div class="tab-panel" id="content1">

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

</div>
  <div class="tab-panel" id="content2">

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

</div>
  <div class="tab-panel" id="content3">

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

.dark {
    --active-tab-color: #b39ddb;
    --active-text-color: #e0e0e0;
    --inactive-text-color: #888;
    --border-color-light: #3a3a3a;
    --background-white: #1e1e1e;
    --shadow-color: rgba(0, 0, 0, 0.3);
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

/* Afficher le contenu correspondant au bouton radio coché */
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

[➡️ API-Schlüssel und Guthaben abrufen](https://mammouth.ai/app/account/settings/api).

### Mit der OpenAI-Bibliothek

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

## Antwortformat

### Erfolgreiche Antwort

<div class="tab-box">
    <!-- Onglets (Labels) -->
    <input type="radio" name="response-tabs" id="response-tab1" class="tab-input" checked>
    <label for="response-tab1">Text</label>
    <input type="radio" name="response-tabs" id="response-tab2" class="tab-input">
    <label for="response-tab2">Bild</label>

<!-- Contenu des onglets -->
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

### Streaming-Antwort

Wenn `stream: true` festgelegt ist, werden Antworten als Server-Sent Events zurückgegeben:

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
        "content": "Here's a beautiful sunset over mountains for you!",
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
/* Styles pour les onglets de réponse */
#response-tab1:checked ~ .tab-content #response-content1,
#response-tab2:checked ~ .tab-content #response-content2 {
    display: block;
}
</style>

## Modelle und Preise

### Mammouth Recommended

`mammouth-recommended` ist eine Abkürzung für das Modell, das Mammouth aktuell für das beste Preis-Leistungs-Verhältnis hält.

Richte deine Anfragen an dieses Modell und du erhältst immer unsere aktuelle Empfehlung, ohne selbst neue Veröffentlichungen verfolgen zu müssen.

- **Aktuelle Empfehlung:** `glm-5.3-flash`, mit `minimax-m3` als Fallback. Das ändert sich im Laufe der Zeit, wenn neue Modelle erscheinen.
- **Verwendung:** Rufe es genau wie jedes andere Modell auf. Setze `mammouth-recommended` als Modell oder verwende die Kurzformen `mammouth` oder `recommended`.
- **Preis:** Du zahlst denselben Preis wie für das zugrunde liegende Modell, ohne Aufschlag. Sieh dir dazu die entsprechende Tabellenzeile weiter unten an.

### Alle Modelle

Die Preise können sich ändern und in dieser Tabelle möglicherweise nicht aktuell sein. Die vollständige Modellliste findest du im [Model Explorer](https://model-explorer.mammouth.ai/)!

| Modell                            | Eingabe ($/M Tokens)                                                                    | Ausgabe ($/M Tokens) |
| -------------------------------- | ------------------------------------------------------------------------------------- | ------------------- |
| `claude-fable-5.1`               | 10                                                                                    | 50                  |
| `claude-haiku-4-5`               | 1                                                                                     | 5                   |
| `claude-opus-5`                  | 5                                                                                     | 25                  |
| `claude-sonnet-5`                | 2                                                                                     | 10                  |
| `deepseek-v4-pro`                | 1.74                                                                                  | 3.48                |
| `deepseek-v4.1-flash`            | 0.22                                                                                  | 0.66                |
| `gemini-3.1-flash-image-preview` | [image](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.1-flash-image-preview) | /                   |
| `gemini-3.1-pro-preview`         | 2                                                                                     | 12                  |
| `gemini-3.7-flash`               | 1.5                                                                                   | 7.5                 |
| `gemini-3.8-flash`               | 0.75                                                                                  | 3.75                |
| `glm-5.3`                        | 1.4                                                                                   | 4.4                 |
| `glm-5.3-flash`                  | 0.15                                                                                  | 0.5                 |
| `gpt-5.4`                        | 2.5                                                                                   | 15                  |
| `gpt-5.4-mini`                   | 0.75                                                                                  | 4.5                 |
| `gpt-5.4-nano`                   | 0.2                                                                                   | 1.25                |
| `gpt-5.5`                        | 5                                                                                     | 30                  |
| `gpt-5.6-luna`                   | 1                                                                                     | 6                   |
| `gpt-5.6-sol`                    | 5                                                                                     | 30                  |
| `gpt-5.6-terra`                  | 2.5                                                                                   | 15                  |
| `gpt-6-astra`                    | 10                                                                                    | 50                  |
| `grok-4.6`                       | 2                                                                                     | 6                   |
| `kimi-k2.6`                      | 0.73                                                                                  | 3.49                |
| `kimi-k3`                        | 3                                                                                     | 15                  |
| `llama-4-maverick`               | 0.15                                                                                  | 0.6                 |
| `minimax-m3`                     | 0.3                                                                                   | 1.2                 |
| `mistral-medium-3-5`             | 1.5                                                                                   | 7.5                 |
| `mistral-small-3.2-24b-instruct` | 0.1                                                                                   | 0.3                 |
| `qwen3.7-plus`                   | 0.4                                                                                   | 1.6                 |
| `qwen3.8-27b`                    | 0.4                                                                                   | 2.55                |
| `qwen3.8-flash`                  | 0.15                                                                                  | 0.47                |
| `sonar-deep-research`            | 2                                                                                     | 8                   |
| `sonar-pro`                      | 3                                                                                     | 15                  |

::: info Hinweis zu den Preisen
Die hier aufgeführten Preise sind Höchstpreise.

Der tatsächlich berechnete Preis ist manchmal niedriger, da er von der Verfügbarkeit beim Anbieter abhängt.

Dir wird niemals mehr als der angezeigte Preis berechnet.
:::

## Embeddings

Erzeuge Vektor-Embeddings aus Text für semantische Suche, Clustering und andere NLP-Aufgaben.

### Embedding-Modelle und Preise

| Modell                   | Eingabe ($/M Tokens) |
| ------------------------ | ------------------ |
| `text-embedding-3-large` | 0.13               |
| `text-embedding-3-small` | 0.02               |

### Beispiel für ein Embedding

```python
import requests

url = "https://api.mammouth.ai/v1/embeddings"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "model": "text-embedding-3-large",
    "input": "Hello, world!"
}
response = requests.post(url, headers=headers, json=data)
print(response.json())
```

### Embedding-Antwort

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

📜 [Nutzung und Kosten werden in deinen Einstellungen protokolliert](https://mammouth.ai/app/account/settings/api).

💡 Wir haben an die Mammouth-App angelehnte Aliase hinzugefügt, um dir die Modellauswahl zu erleichtern: Wenn du `mistral` eingibst, wird `mistral-medium-3.1` verwendet.

## Fehlercodes

| Code  | Beschreibung                                          |
| ----- | ---------------------------------------------------- |
| `400` | Ungültige Anfrage – fehlende oder falsche Parameter |
| `401` | Nicht autorisiert – ungültiger API-Schlüssel |
| `429` | Zu viele Anfragen – Ratenlimit überschritten |
| `500` | Interner Serverfehler – Problem auf dem Server |
| `503` | Dienst nicht verfügbar – Server vorübergehend nicht erreichbar |

## Kosten verfolgen

Wenn du wissen möchtest, wie viel Guthaben über einen Schlüssel verbraucht wurde, verwende diesen API-Endpunkt:

```bash
curl -X GET "https://api.mammouth.ai/key/info" -H "Authorization: Bearer $MAMMOUTH_API_KEY"
```

## Parameter

#### Erforderliche Parameter

| Parameter  | Typ    | Beschreibung |
| ---------- | ------ | ------------------------------------ |
| `messages` | array  | Liste der Nachrichten im Gespräch |
| `model`    | string | Zu verwendende Modellkennung |

#### Optionale Parameter

| Parameter     | Typ     | Standardwert | Beschreibung |
| ------------- | ------- | ------- | ------------------------------------ |
| `temperature` | number  | 0.7     | Steuert die Kreativität (0.0 bis 2.0) |
| `max_tokens`  | integer | 2048    | Maximale Anzahl der zu erzeugenden Tokens |
| `top_p`       | number  | 1.0     | Steuert die Vielfalt der Antworten |
| `stream`      | boolean | false   | Echtzeit-Streaming der Antwort |

## Tipps zur Optimierung

### Nachrichtenstruktur

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

### Rollentypen

- **`system`**: Legt Verhalten und Kontext für den Assistenten fest
- **`user`**: Steht für Nachrichten des Nutzers
- **`assistant`**: Steht für vorherige Antworten der KI

## Von OpenAI migrieren

Wenn du bereits die API von OpenAI verwendest, ist die Migration zu Mammouth.ai einfach:

1. Ändere die Basis-URL von `https://api.openai.com/v1` zu `https://api.mammouth.ai/v1`
2. Aktualisiere deinen API-Schlüssel
3. Behalte alle anderen Parameter bei

### OpenAI-Python-Bibliothek

```python
import openai

# Before
openai.api_base = "https://api.openai.com/v1"
openai.api_key = "sk-openai-key"

# After
openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "your-mammouth-key"
```

## n8n, VS Code, Cline, OpenClaw, Make, CLI usw.

Du kannst die Mammouth-API mit Tools wie n8n, VS Code, Cline, Make und weiteren verwenden.

Achte darauf, die richtige URL zu verwenden. Wenn du unsicher bist, probiere die verschiedenen URLs aus.

- Basis-URL: https://api.mammouth.ai/v1 oder https://api.mammouth.ai/
- Für HTTPS-Anfragen ist https://api.mammouth.ai/v1/chat/completions erforderlich.

### Anleitungen zur Nutzung der Mammouth-API mit deinen bevorzugten Tools

**Für Automatisierungen:**

- [**n8n**](https://public.mammouth.ai/n8n)
- [**Make**](https://public.mammouth.ai/how-to-use-mammouth-api-with-make)
- [**OpenClaw**](/de/docs/openclaw/)

**Für IDEs:**

- [**Cline (in VS Code, JetBrains oder Cursor)**](/de/docs/cline/)
- [**XCode**](https://public.mammouth.ai/xcode)
- [**Zed**](https://public.mammouth.ai/zed)

**Für die CLI (als Alternative zu Claude Code):**

- [**Mammouth Code!**](/de/docs/mammouth-code/)

Oder über [**Opencode**](https://public.mammouth.ai/opencode)

**Sonstige**

- [**GitKraken**](https://public.mammouth.ai/gitkraken)

##

::: info [➡️ API-Schlüssel und Guthaben abrufen](https://mammouth.ai/app/account/settings/api).

:::
