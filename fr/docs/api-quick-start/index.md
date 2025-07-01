# Documentation de l'API

## Guide de démarrage rapide

Une API de complétion de chat avec LLM compatible OpenAI pour intégrer facilement l'IA dans vos applications.
Visitez https://mammouth.ai/app/account/settings/api to create your API key.

### Avec l'API Mammouth directement

Génère une réponse de complétion de chat basée sur votre prompt.

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
    "Authorization": "Bearer VOTRE_CLÉ_API",
    "Content-Type": "application/json"
}
data = {
    "model": "gpt-4.1",
    "messages": [
        {
            "role": "user",
            "content": "Explique les bases de l'apprentissage automatique"
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
    Authorization: "Bearer VOTRE_CLÉ_API",
    "Content-Type": "application/json",
  };

  const data = {
    model: "gpt-4.1",
    messages: [
      {
        role: "user",
        content: "Crée un exemple de fonction JavaScript",
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
    console.error("Erreur:", error);
  }
}

callMammouth();
```

</p>
  </div>
  <div class="tab-panel" id="content3"> <p>

```bash
curl -X POST https://api.mammouth.ai/v1/chat/completions \
  -H "Authorization: Bearer VOTRE_CLÉ_API" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1",
    "messages": [
      {
        "role": "user",
        "content": "Bonjour, comment allez-vous ?"
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

### Avec la bibliothèque OpenAI

```python
import openai

# Configurer le client pour utiliser Mammouth.ai
openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "VOTRE_CLÉ_API"

response = openai.ChatCompletion.create(
    model="gpt-4.1",
    messages=[
        {"role": "user", "content": "Quels sont les avantages des énergies renouvelables ?"}
    ]
)

print(response.choices[0].message.content)
```

## Format de réponse

### Réponse réussie

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
        "content": "Bonjour ! Je vais très bien, merci de demander. Comment puis-je vous aider aujourd'hui ?"
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

### Réponse en streaming

Quand `stream: true` est défini, les réponses sont renvoyées sous forme d'événements envoyés par le serveur :

```
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1677652288,"model":"gpt-4.1","choices":[{"index":0,"delta":{"content":"Bonjour"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1677652288,"model":"gpt-4.1","choices":[{"index":0,"delta":{"content":"!"},"finish_reason":null}]}

data: [DONE]
```

## Modèles

| Modèle | Entrée ($/M tokens) | Sortie ($/M tokens) |
| --- | --- | --- |
| `gpt-4.1` | 2 | 8 |
| `gpt-4.1-mini` | 0.4 | 1.6 |
| `gpt-4.1-nano` | 0.1 | 0.4 |
| `gpt-4o` | 2.5 | 10 |
| `o4-mini` | 1.1 | 4.4 |
| `o3` | 2 | 8 |
| `mistral-large-2411` | 2 | 6 |
| `mistral-medium-3` | 0.4 | 2 |
| `mistral-small-3.2-24b-instruct` | 0.1 | 0.3 |
| `codestral-2501` | 0.3 | 0.9 |
| `grok-3` | 3 | 15 |
| `grok-3-mini` | 0.3 | 0.5 |
| `gemini-2.5-flash` | 0.3 | 2.5 |
| `gemini-2.5-pro` | 2.5 | 15 |
| `deepseek-r1-0528` | 3 | 8 |
| `deepseek-v3-0324` | 0.9 | 0.9 |
| `llama-4-maverick` | 0.22 | 0.88 |
| `llama-4-scout` | 0.15 | 0.6 | 
| `claude-3-5-sonnet-20241022` | 3 | 15 |
| `claude-3-5-haiku-20241022` | 0.8 | 4 |
| `claude-3-7-sonnet` | 3 | 15 |
| `claude-sonnet-4-20250514` | 3 | 15 |
| `claude-opus-4-20250514` | 15 | 75 |

Les prix sont indicatifs. Ils peuvent varier et ne pas être à jour dans ce tableau.

Nous avons ajouté des alias pour faciliter le changement de modèle : si vous écrivez `mistral`, cela utilisera `mistral-medium-3` comme sur l’application.

## Codes d'erreur

| Code  | Description                                                |
| ----- | ---------------------------------------------------------- |
| `400` | Mauvaise demande - Paramètres manquants ou incorrects      |
| `401` | Non autorisé - Clé API invalide                            |
| `429` | Trop de demandes - Limite de débit dépassée                |
| `500` | Erreur interne du serveur - Problème côté serveur          |
| `503` | Service indisponible - Serveur temporairement indisponible |

### Format de réponse d'erreur

```json
{
  "error": {
    "message": "Clé API fournie invalide",
    "type": "invalid_request_error",
    "code": "invalid_api_key"
  }
}
```

## Paramètres

#### Paramètres obligatoires

| Paramètre  | Type    | Description                             |
| ---------- | ------- | --------------------------------------- |
| `messages` | tableau | Liste des messages dans la conversation |
| `model`    | chaîne  | Identifiant du modèle à utiliser        |

#### Paramètres optionnels

| Paramètre     | Type    | Défaut | Description                        |
| ------------- | ------- | ------ | ---------------------------------- |
| `temperature` | nombre  | 0,7    | Contrôle la créativité (0,0 à 2,0) |
| `max_tokens`  | entier  | 2048   | Nombre maximum de tokens à générer |
| `top_p`       | nombre  | 1,0    | Contrôle la diversité des réponses |
| `stream`      | booléen | false  | Streaming de réponse en temps réel |

## Conseils d'optimisation

### Paramètres de température

- **0,0 - 0,3** : Réponses très cohérentes et prévisibles
- **0,4 - 0,7** : Équilibre entre créativité et cohérence
- **0,8 - 1,0** : Réponses plus créatives et variées

### Structure des messages

```json
{
  "messages": [
    {
      "role": "system",
      "content": "Vous êtes un assistant IA spécialisé en programmation."
    },
    {
      "role": "user",
      "content": "Comment optimiser une boucle for en Python ?"
    }
  ]
}
```

### Types de rôles

- **`system`** : Définit le comportement et le contexte de l'assistant
- **`user`** : Représente les messages de l'utilisateur
- **`assistant`** : Représente les réponses précédentes de l'IA

## Migration depuis OpenAI

Si vous utilisez déjà l'API d'OpenAI, migrer vers Mammouth.ai est simple :

1. Changez l'URL de base de `https://api.openai.com/v1` vers `https://api.mammouth.ai/v1`
2. Mettez à jour votre clé API
3. Gardez tous les autres paramètres identiques

### Bibliothèque Python OpenAI

```python
import openai

# Avant
openai.api_base = "https://api.openai.com/v1"
openai.api_key = "sk-openai-key"

# Après
openai.api_base = "https://api.mammouth.ai/v1"
openai.api_key = "votre-clé-mammouth"
```
