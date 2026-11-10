# Documentazione API

Un'API LLM compatibile con OpenAI per integrare facilmente l'IA nelle tue applicazioni.

::: info [➡️ Ottieni la chiave API e i crediti](https://mammouth.ai/app/account/settings/api)
:::

## Guida rapida

- Acquista crediti API singolarmente [dalle impostazioni API](https://mammouth.ai/app/account/settings/api).
- Gli abbonati Mammouth ricevono crediti mensili inclusi (Starter 2 $, Standard 4 $, Expert 10 $).
- Puoi usare l'API anche senza abbonamento [acquistando crediti direttamente](https://mammouth.ai/app/account/settings/api).

💡 Per un uso intensivo (Mammouth Code, Cline), è preferibile Starter con circa 50 $ di crediti API rispetto a Expert.

[➡️ Ottieni la chiave API e i crediti](https://mammouth.ai/app/account/settings/api).

### Direttamente con l'API Mammouth

Genera una risposta di completamento chat in base al prompt.

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
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "model": "gpt-4.1",
    "messages": [
        {
            "role": "user",
            "content": "Spiega le basi dell'apprendimento automatico"
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
        content: "Crea un esempio di funzione JavaScript",
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
    console.error("Errore:", error);
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
        "content": "Ciao, come stai?"
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
.tab-box .tab-input { display: none; }
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
.tab-box label:hover:not(.tab-input:checked + label) { color: var(--active-text-color); }
.tab-box .tab-content {
    border-top: 1px solid var(--border-color-light);
    background-color: var(--background-white);
    box-sizing: border-box;
    border-radius: 0 0 8px 8px;
    padding: 20px;
}
.tab-box .tab-content .tab-panel { display: none; }
#tab1:checked ~ .tab-content #content1,
#tab2:checked ~ .tab-content #content2,
#tab3:checked ~ .tab-content #content3 { display: block; }
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
.tab-icon-container .copy-icon { display: block; }
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

[➡️ Ottieni la chiave API e i crediti](https://mammouth.ai/app/account/settings/api).

### Con la libreria OpenAI

```python
import openai

openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "YOUR_API_KEY"

response = openai.ChatCompletion.create(
    model="gpt-4.1",
    messages=[
        {"role": "user", "content": "Quali sono i vantaggi delle energie rinnovabili?"}
    ]
)

print(response.choices[0].message.content)
```

## Formato delle risposte

### Risposta completata

<div class="tab-box">
    <input type="radio" name="response-tabs" id="response-tab1" class="tab-input" checked>
    <label for="response-tab1">Testo</label>
    <input type="radio" name="response-tabs" id="response-tab2" class="tab-input">
    <label for="response-tab2">Immagine</label>
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
        "content": "Ciao! Sto molto bene, grazie per avermelo chiesto. Come posso aiutarti oggi?"
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

### Risposta in streaming

Quando `stream: true` è impostato, le risposte vengono restituite come Server-Sent Events:

```
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1677652288,"model":"gpt-4.1","choices":[{"index":0,"delta":{"content":"Ciao"},"finish_reason":null}]}

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
        "content": "Ecco per te un bellissimo tramonto sulle montagne!",
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
#response-tab2:checked ~ .tab-content #response-content2 { display: block; }
</style>

## Modelli e prezzi

### Mammouth Recommended

`mammouth-recommended` è un alias del modello che Mammouth considera attualmente con il miglior rapporto qualità-prezzo.

Indirizza le richieste a questo modello per usare sempre la nostra scelta più recente, senza dover seguire ogni nuova uscita.

- **Scelta attuale:** `glm-5.3-flash`, con `minimax-m3` come fallback. La scelta può cambiare nel tempo con l'uscita di nuovi modelli.
- **Come usarlo:** chiamalo come qualsiasi altro modello. Imposta `mammouth-recommended` come modello oppure usa gli alias `mammouth` o `recommended`.
- **Prezzo:** paghi lo stesso prezzo del modello sottostante, senza sovrapprezzi; consulta la relativa riga nella tabella.

### Tutti i modelli

Elenco non esaustivo. Consulta [l'elenco completo e aggiornato](https://model-explorer.mammouth.ai).

| Modello | Input ($/M token) | Output ($/M token) |
| --- | ---: | ---: |
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

::: info Informazioni sui prezzi
I prezzi indicati sono massimali.

Il prezzo effettivo può essere inferiore perché dipende dalla disponibilità dei fornitori.

Non ti verrà mai addebitato un importo superiore a quello indicato.
:::

## Embedding

Genera embedding vettoriali dal testo da usare per la ricerca semantica, il clustering e altre attività NLP.

### Modelli di embedding e prezzi

| Modello | Input ($/M token) |
| --- | ---: |
| `text-embedding-3-large` | 0.13 |
| `text-embedding-3-small` | 0.02 |

### Esempio di embedding

```python
import requests

url = "https://api.mammouth.ai/v1/embeddings"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "model": "text-embedding-3-large",
    "input": "Ciao, mondo!"
}
response = requests.post(url, headers=headers, json=data)
print(response.json())
```

### Risposta di embedding

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

📜 [L'utilizzo e i costi sono registrati nelle impostazioni](https://mammouth.ai/app/account/settings/api).

💡 Abbiamo aggiunto alias coerenti con l'app Mammouth per semplificare la scelta dei modelli: se scrivi `claude`, verrà usato automaticamente `claude-sonnet-5-5`.

## Codici di errore

| Codice | Descrizione |
| --- | --- |
| `400` | Richiesta non valida: parametri mancanti o errati |
| `401` | Non autorizzato: chiave API non valida |
| `429` | Troppe richieste: limite di frequenza superato |
| `500` | Errore interno del server |
| `503` | Servizio non disponibile: server temporaneamente non raggiungibile |

## Monitorare i costi

Per verificare quanti crediti sono stati spesi con una chiave, usa questo endpoint API:

```bash
curl -X GET "https://api.mammouth.ai/key/info" -H "Authorization: Bearer $MAMMOUTH_API_KEY"
```

## Parametri

#### Parametri obbligatori

| Parametro | Tipo | Descrizione |
| --- | --- | --- |
| `messages` | array | Elenco dei messaggi nella conversazione |
| `model` | string | Identificativo del modello da usare |

#### Parametri facoltativi

| Parametro | Tipo | Predefinito | Descrizione |
| --- | --- | --- | --- |
| `temperature` | number | 0.7 | Controlla la creatività (da 0.0 a 2.0) |
| `max_tokens` | integer | 2048 | Numero massimo di token da generare |
| `top_p` | number | 1.0 | Controlla la varietà delle risposte |
| `stream` | boolean | false | Streaming della risposta in tempo reale |

La nostra API supporta anche parametri e funzionalità specifici dei provider, come intensità del ragionamento, chiamate a strumenti e funzioni e modalità thinking. La disponibilità dipende dal provider e dal modello.

## Consigli di ottimizzazione

### Struttura dei messaggi

```json
{
  "messages": [
    {
      "role": "system",
      "content": "Sei un assistente IA specializzato in programmazione."
    },
    {
      "role": "user",
      "content": "Come si ottimizza un ciclo for in Python?"
    }
  ]
}
```

### Tipi di ruolo

- **`system`**: definisce il comportamento e il contesto dell'assistente
- **`user`**: rappresenta i messaggi dell'utente
- **`assistant`**: rappresenta le risposte precedenti dell'IA

## Migrare da OpenAI

Se usi già l'API OpenAI, migrare a Mammouth.ai è semplice:

1. Cambia l'URL di base da `https://api.openai.com/v1` a `https://api.mammouth.ai/v1`.
2. Aggiorna la chiave API.
3. Mantieni invariati tutti gli altri parametri.

### Libreria Python di OpenAI

```python
import openai

openai.api_base = "https://api.openai.com/v1"
openai.api_key = "sk-openai-key"

openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "your-mammouth-key"
```

## n8n, VS Code, Cline, OpenClaw, Make, CLI e altro

Puoi usare l'API Mammouth con strumenti come n8n, VS Code, Cline, Make e molti altri.

Assicurati di usare l'URL corretto. In caso di dubbi, prova entrambi gli URL.

- URL di base: https://api.mammouth.ai/v1 oppure https://api.mammouth.ai/
- Per richieste HTTPS è necessario https://api.mammouth.ai/v1/chat/completions.

### Guide per usare l'API Mammouth con i tuoi strumenti preferiti

**Automazioni:**

- [**n8n**](https://public.mammouth.ai/n8n)
- [**Make**](https://public.mammouth.ai/how-to-use-mammouth-api-with-make)
- [**OpenClaw**](../openclaw/)

**IDE:**

- [**Cline (in VS Code, JetBrains o Cursor)**](../cline/)
- [**XCode**](https://public.mammouth.ai/xcode)
- [**Zed**](https://public.mammouth.ai/zed)

**CLI (alternativa a Claude Code):**

- [**Mammouth Code**](../mammouth-code/)

Oppure usa [Opencode](https://public.mammouth.ai/opencode).

**Altro:**

- [**GitKraken**](https://public.mammouth.ai/gitkraken)

##

::: info [➡️ Ottieni la chiave API e i crediti](https://mammouth.ai/app/account/settings/api)
:::
