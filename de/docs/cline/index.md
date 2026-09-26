# Mammouth mit der Cline-Erweiterung in VS Code, JetBrains oder Cursor verwenden

Cline ist eine KI-Assistenten-Erweiterung für VS Code, JetBrains und Cursor. Wenn du sie mit deinem Mammouth-Konto verbindest, erhältst du direkt in deinem Code-Editor Zugriff auf alle Modelle der Plattform.

## Voraussetzungen

- Ein Mammouth-AI-Konto mit einem aktiven Abonnement oder verfügbarem Guthaben
- VS Code, JetBrains oder Cursor ist installiert
- Die Cline-Erweiterung aus dem Marketplace deines Editors ist installiert

## Erweiterung einrichten

- **API Provider**: Wähle `OpenAI Compatible` aus.
- **Base URL**: Gib `https://api.mammouth.ai/v1` ein.
- **API Key**: Rufe deinen Schlüssel in [deinem Mammouth-Dashboard](https://mammouth.ai/app/account/settings/api) ab und füge ihn in das entsprechende Feld ein.
- **Model ID**: Wähle ein Modell aus der [Liste verfügbarer Modelle](https://model-explorer.mammouth.ai/) aus und gib seine ID in der Konfiguration ein.

![Cline-Konfiguration einrichten](/docs/cline/cline_api_setup.png)

## Verwendung

Du kannst Cline jetzt mit deinem Mammouth-API-Schlüssel verwenden.

### Oberfläche und Tokens

Oben in der Cline-Oberfläche siehst du:
- Die Anzahl der **gesendeten** und **empfangenen Tokens**
- Die **Gesamtzahl der unterstützten Tokens** des ausgewählten Modells
- Den **Aufgabennamen**, der deinem ersten Prompt entspricht

### Kosten im Blick behalten

So kannst du deine Ausgaben direkt in Cline verfolgen:

1. Kopiere die Preise deines Modells aus der [Modellliste](https://model-explorer.mammouth.ai/).
2. Trage sie im Abschnitt **Model Configuration** von Cline ein.

Eine Gesamtübersicht deiner API-Nutzung findest du in [deinem Mammouth-Dashboard](https://mammouth.ai/app/account/settings/api).

### Sonstiges
- Prompt-Caching wird derzeit nicht unterstützt.
- Mit dem Parameter `temperature` in den erweiterten Einstellungen der Model Configuration von Cline kannst du die Kreativität steuern (0.0 für deterministische Ergebnisse, bis zu 2.0 für kreativere Ergebnisse).

![Beispiel für die Verwendung von Cline](/docs/cline/cline_usage_example.png)
