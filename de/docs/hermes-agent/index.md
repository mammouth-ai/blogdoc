# So verwendest du die Mammouth-API in Hermes

## Voraussetzungen

- Eine laufende Hermes-Instanz (Installationsanleitung auf [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/))
- Ein Mammouth-Konto mit aktiviertem API-Zugriff
- Dein Mammouth-API-Schlüssel (du findest ihn unter [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api))

## Schritt 1 — Mammouth-API-Schlüssel abrufen

1. Öffne [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api).
2. Erstelle einen neuen API-Schlüssel.
3. Kopiere ihn und bewahre ihn sicher auf – du brauchst ihn im nächsten Schritt.

## Schritt 2 — Hermes konfigurieren

Falls bereits ein Anbieter konfiguriert ist, führe `hermes model` aus, um die Konfiguration erneut zu öffnen und Mammouth einzurichten.

1. Wähle in Hermes **Custom provider** aus.
2. Gib bei der Abfrage der API-Basis-URL `https://api.mammouth.ai/v1` ein.
3. Gib deinen Mammouth-API-Schlüssel ein.
4. Wähle ein Modell aus den über die Mammouth-API verfügbaren Modellen aus. Wähle eines, das zu deinen Anforderungen passt, und schau in der Hermes-Dokumentation nach Konfigurationsempfehlungen. Hermes kann je nach Modell und Einrichtung eine erhebliche Anzahl an Tokens verbrauchen.

## Schritt 3 — Verbindung überprüfen

Führe den folgenden Befehl aus, um zu prüfen, ob Hermes verbunden ist:

```bash
hermes status
```

Die Ausgabe sollte etwa so aussehen:

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

## API-Nutzung überwachen

Behalte deinen API-Verbrauch in [deinem Mammouth-Dashboard](https://mammouth.ai/app/account/settings/api) im Blick.

## Siehe auch

- [API-Schnellstart](/de/docs/api-quick-start/) — allgemeine Dokumentation zur Mammouth-API
- [Mammouth mit Cline verwenden](/de/docs/cline/) — ähnliche Einrichtung für VS Code / Cursor
- [Hermes-LiteLLM-Anbieterdokumentation](https://docs.openclaw.ai/providers/litellm)
