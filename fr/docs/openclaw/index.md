# Comment utiliser l'API Mammouth dans OpenClaw

## Prérequis

- Une instance OpenClaw en cours d'exécution (voir [openclaw.ai](https://openclaw.ai) pour l'installation)
- Un compte Mammouth avec l'accès API activé
- Votre clé API Mammouth (obtenez-la depuis [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api))

## Étape 1 — Obtenir votre clé API Mammouth

1. Rendez-vous sur [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)
2. Générez une nouvelle clé API
3. Copiez-la et conservez-la en lieu sûr — vous en aurez besoin à l'étape suivante

## Étape 2 — Vérifier les modèles disponibles

L'API Mammouth expose la liste des modèles disponibles à : `https://api.mammouth.ai/public/models`

Choisissez les identifiants de modèles que vous souhaitez utiliser dans votre configuration OpenClaw. Par exemple : `gpt-4.1`, `kimi-k2.5`, etc.

## Étape 3 — Configurer OpenClaw

Votre configuration OpenClaw peut être différente, mais nous recommandons de définir une variable d'environnement.

La configuration ci-dessous fait référence à `${MAMMOUTH_API_KEY}`.

**Soit exportez-la si vous exécutez OpenClaw directement sur votre ordinateur**

```bash
export MAMMOUTH_API_KEY="votre-clé-api-mammouth-ici"
openclaw
```

Ou ajoutez-la de façon permanente à votre profil shell (`~/.bashrc`, `~/.zshrc`, etc.) :

```bash
echo 'export MAMMOUTH_API_KEY="votre-clé-api-mammouth-ici"' >> ~/.zshrc
source ~/.zshrc
```

**Ou définissez-la comme variable d'environnement accessible à votre configuration docker, par exemple avec docker compose :**

```yaml
environment:
  - MAMMOUTH_API_KEY=${MAMMOUTH_API_KEY:-}
```

**Ensuite, modifiez votre fichier de configuration OpenClaw en conséquence** (généralement `~/.openclaw/config.json5` ou via `openclaw config edit`) pour qu'il contienne :

```json5
{
  models: {
    providers: {
      litellm: {
        baseUrl: "https://api.mammouth.ai",
        apiKey: "${MAMMOUTH_API_KEY}",
        api: "openai-completions",
        models: [
          {
            id: "gpt-4.1",
            name: "GPT-4.1 (Mammouth)",
            reasoning: false,
            input: ["text", "image"],
            contextWindow: 1000000,
            maxTokens: 32768,
          },
          {
            id: "claude-sonnet-4-6",
            name: "Claude Sonnet 4.6 (Mammouth)",
            reasoning: true,
            input: ["text", "image"],
            contextWindow: 200000,
            maxTokens: 64000,
          },
          {
            id: "kimi-k2.5",
            name: "Kimi K2.5 (Mammouth)",
            reasoning: false,
            input: ["text", "image"],
            contextWindow: 262144,
            maxTokens: 262144,
          },
        ],
      },
    },
  },
  agents: {
    defaults: {
      model: { primary: "litellm/kimi-k2.5" }, // choisissez le modèle par défaut ici
    },
    models: {
      "anthropic/claude-sonnet-4-6": {},
      "litellm/kimi-k2.5": {},          # important, ajoutez vos modèles ici pour pouvoir basculer dynamiquement avec la commande /models dans votre application de chat favorite
      "litellm/gpt-4.1": {},            # important
      "litellm/claude-sonnet-4-6": {},  # important
    },
  },
}
```

## Étape 4 — Vérifier la connexion

Une fois OpenClaw en cours d'exécution, démarrez une nouvelle session et posez une question simple. Si tout est correctement configuré, votre agent répondra en utilisant l'API Mammouth.

Utilisez `/models` dans votre chat pour voir les différents fournisseurs et leurs modèles.

Exemple (utilisant anthropic par défaut avec le fournisseur LiteLLM compatible Mammouth configuré) :
![Commande /models d'Openclaw dans Discord](/docs/openclaw/image.png)

Vous pouvez également confirmer depuis le CLI :

```bash
openclaw status
```

--removed weirdly--<<<^

## Voir aussi

- [Démarrage rapide API](/fr/docs/api-quick-start/index.md) — documentation générale de l'API Mammouth
- [Comment utiliser Mammouth avec Cline](/fr/docs/cline/index.md) — configuration similaire pour VS Code / Cursor
- [Documentation du fournisseur LiteLLM d'OpenClaw](https://docs.openclaw.ai/providers/litellm)
