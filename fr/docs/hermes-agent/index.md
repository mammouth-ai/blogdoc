# Comment utiliser l'API Mammouth dans Hermes

## Prérequis

- Une instance Hermes en cours d'exécution (voir [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/) pour l'installation)
- Un compte Mammouth avec l'accès API activé
- Votre clé API Mammouth (obtenez-la depuis [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api))

## Étape 1 — Obtenir votre clé API Mammouth

1. Rendez-vous sur [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)
2. Générez une nouvelle clé API
3. Copiez-la et conservez-la en lieu sûr — vous en aurez besoin à l'étape suivante

## Étape 2 — Configurer Hermes

1. Exécutez `hermes model` pour ouvrir la configuration du modèle.
2. Sélectionnez **Custom endpoint**.
3. Lorsque l'URL de base de l'API est demandée, saisissez `https://api.mammouth.ai/v1`.
4. Saisissez votre clé API Mammouth.
5. Sélectionnez un modèle parmi ceux disponibles via l'API Mammouth. Choisissez-en un qui correspond à vos besoins et consultez la documentation de Hermes pour des conseils de configuration. Hermes peut consommer un nombre significatif de tokens selon le modèle et la configuration choisis.

## Étape 3 — Vérifier la connexion

Exécutez la commande suivante pour vérifier que Hermes est bien connecté :

```bash
hermes status
```

La sortie devrait ressembler à ceci :

```text
┌─────────────────────────────────────────────────────────┐
│                 ☤ Hermes Agent Status                  │
└─────────────────────────────────────────────────────────┘

  Model:        claude-opus-5
  Provider:     custom
  Providers:    Api.mammouth.ai
  Gateway:      ✓ running
  Platforms:    none configured
  Jobs:         0

  Run 'hermes status --full' for every section

```

## Surveiller votre utilisation de l'API

Consultez votre consommation d'API depuis [votre tableau de bord Mammouth](https://mammouth.ai/app/account/settings/api).

## Voir aussi

- [Démarrage rapide API](/fr/docs/api-quick-start/index.md) — documentation générale de l'API Mammouth
- [Comment utiliser Mammouth avec Cline](/fr/docs/cline/index.md) — configuration similaire pour VS Code / Cursor
- [Documentation du fournisseur LiteLLM de Hermes](https://docs.openclaw.ai/providers/litellm)
