# So verwendest du die Mammouth-API in OpenClaw

## Voraussetzungen

- Eine laufende OpenClaw-Instanz (Installationsanleitung auf [openclaw.ai](https://openclaw.ai))
- Ein Mammouth-Konto mit aktiviertem API-Zugriff
- Dein Mammouth-API-Schlüssel (du findest ihn unter [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api))

## Schritt 1 — Mammouth-API-Schlüssel abrufen

1. Öffne [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api).
2. Erstelle einen neuen API-Schlüssel.
3. Kopiere ihn und bewahre ihn sicher auf – du brauchst ihn im nächsten Schritt.

## Schritt 2 — Verfügbare Modelle prüfen

Die Mammouth-API stellt die Liste der verfügbaren Modelle unter folgender Adresse bereit: `https://api.mammouth.ai/public/models`

Wähle die Modell-IDs aus, die du in deiner OpenClaw-Konfiguration verwenden möchtest. Zum Beispiel: `gpt-4.1`, `kimi-k2.5` usw.

## Schritt 3 — OpenClaw konfigurieren

Deine OpenClaw-Konfiguration kann abweichen. Wir empfehlen jedoch, eine Umgebungsvariable festzulegen.

Die folgende Konfiguration verweist auf `${MAMMOUTH_API_KEY}`.

**Exportiere die Variable, wenn du OpenClaw direkt auf deinem Computer ausführst.**

```bash
export MAMMOUTH_API_KEY="your-mammouth-api-key-here"
openclaw
```

Oder füge sie dauerhaft zu deinem Shell-Profil hinzu (`~/.bashrc`, `~/.zshrc` usw.):

```bash
echo 'export MAMMOUTH_API_KEY="your-mammouth-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

**Oder lege die Variable so fest, dass deine Docker-Umgebung darauf zugreifen kann. Beispiel für Docker Compose:**

```yaml
environment:
  - MAMMOUTH_API_KEY=${MAMMOUTH_API_KEY:-}
```

**Bearbeite anschließend deine OpenClaw-Konfigurationsdatei entsprechend** (normalerweise `~/.openclaw/config.json5` oder über `openclaw config edit`), sodass sie Folgendes enthält:

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
      model: { primary: "litellm/kimi-k2.5" }, // chose the default model here
    },
    models: {
      "anthropic/claude-sonnet-4-6": {},
      "litellm/kimi-k2.5": {},          # important, add your models here so you can switch dynamically with the /models command in your favorite chat app
      "litellm/gpt-4.1": {},            # important
      "litellm/claude-sonnet-4-6": {},  # important
    },
  },
}
```

## Schritt 4 — Verbindung überprüfen

Sobald OpenClaw läuft, starte eine neue Sitzung und stelle eine einfache Frage. Wenn alles richtig eingerichtet ist, antwortet dein Agent über die Mammouth-API.

Gib in deinem Chat `/models` ein, um die verschiedenen Anbieter und ihre Modelle anzuzeigen.

Beispiel (Anthropic als Standardmodell mit konfiguriertem, LiteLLM-kompatiblem Mammouth-Anbieter):
![OpenClaw: Befehl /models in Discord](/docs/openclaw/image.png)

Du kannst die Verbindung auch über die CLI überprüfen:

```bash
openclaw status
```

## Nutzung überwachen

Behalte deinen API-Verbrauch in deinem Mammouth-Dashboard im Blick:

👉 [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)

## Siehe auch

- [API-Schnellstart](/de/docs/api-quick-start/) — allgemeine Dokumentation zur Mammouth-API
- [Mammouth mit Cline verwenden](/de/docs/cline/) — ähnliche Einrichtung für VS Code / Cursor
- [OpenClaw-LiteLLM-Anbieterdokumentation](https://docs.openclaw.ai/providers/litellm)
