# Mammouth Code

Mammouth Code ist der terminalbasierte Coding-Agent von Mammouth AI.

::: info [➡️ API-Schlüssel abrufen](https://mammouth.ai/app/account/settings/api) — erforderlich, um Mammouth Code zu verwenden.
:::

Dieses Open-Source-Projekt ist auf [GitHub](https://github.com/mammouth-ai/code) verfügbar.

<div class="h-full w-full">
<iframe
    class="rounded-xl"
    :height="minimized ? '96px' : 'auto'"
    width="100%"
    src="https://www.youtube.com/embed/V9dIg1bIVPg"
    title="Mammouth Code"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    loading="lazy"
    style="aspect-ratio: 16 / 9"
></iframe>
</div>

## Installation

Führe einen der folgenden Befehle in deinem Terminal aus.

<div class="tab-box">
    <input type="radio" name="install-tabs" id="install-tab1" class="tab-input" checked>
    <label for="install-tab1">macOS / Linux / WSL</label>
    <input type="radio" name="install-tabs" id="install-tab2" class="tab-input">
    <label for="install-tab2">Windows (PowerShell)</label>

<div class="tab-content">
  <div class="tab-panel" id="install-content1">

```bash
curl -fsSL "https://code.mammouth.ai/install.sh" | bash
```

</div>
  <div class="tab-panel" id="install-content2">

```powershell
irm "https://code.mammouth.ai/install.ps1" | iex
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

#install-tab1:checked ~ .tab-content #install-content1,
#install-tab2:checked ~ .tab-content #install-content2 {
    display: block;
}
</style>

## Im Terminal verwenden

Gib einfach `mammouth` ein, um den Coding-Agent zu starten.

::: tip Standardmodell
Bei der ersten Einrichtung von Mammouth Code wird **`mammouth-recommended`** als Standardmodell verwendet – eine Kurzform, die immer auf das Modell weiterleitet, das Mammouth aktuell für das beste Preis-Leistungs-Verhältnis hält. Weitere Informationen findest du unter [Mammouth Recommended](/de/docs/api-quick-start/index.md#mammouth-recommended).
:::

## In deiner IDE verwenden

Am besten öffnest du Mammouth Code im integrierten Terminal deiner IDE (VS Code, Cursor, WebStorm usw.):

1. Öffne das integrierte Terminal in deiner IDE.
2. Wechsle in dein Projektverzeichnis.
3. Führe `mammouth` aus.

Das war's – Mammouth Code startet eine interaktive Sitzung direkt in deinem Terminal.

## Eine vorherige Sitzung fortsetzen

Es gibt zwei Möglichkeiten, eine vorherige Sitzung fortzusetzen:

- Führe wie gewohnt `mammouth` aus und verwende anschließend den Befehl `/sessions`, um zu einer früheren Sitzung zu wechseln.
- Führe `mammouth -c` aus, um die zuletzt im aktuellen Ordner verwendete Sitzung fortzusetzen.

## Aktualisieren

So aktualisierst du Mammouth Code auf die neueste Version:

```bash
mammouth upgrade
```

Dadurch wird die neueste Version abgerufen und installiert. Die alte Version wird ersetzt, deine Konfigurationen und Sitzungen bleiben jedoch erhalten.

## Deinstallieren

So entfernst du Mammouth Code vollständig von deinem System:

```bash
mammouth uninstall
```

Dadurch werden Mammouth Code sowie deine Konfigurationen und Sitzungen entfernt.

## Tokenverbrauch in Mammouth Code

Mammouth Code fügt dynamisch System-Prompts ein, je nachdem, worum du es bittest – daher kommen die **zusätzlichen ~10.000 Tokens**, die dir vielleicht auffallen.

Was wie „umfangreiche“ Prompts wirken mag, **spart bei größeren Projekten tatsächlich Tokens**: So kann das LLM nur die relevanten Dateien lesen, anstatt deine gesamte Codebasis in den Kontext zu laden. Bei der Arbeit an einer einzelnen Datei fällt dieser Zusatzaufwand stärker ins Gewicht. Der eigentliche Zweck ist jedoch, **die Anfrage an das passende Tool für die jeweilige Aufgabe weiterzuleiten**.

**Eine einfache Faustregel:**

- 📁 **Verwende Mammouth Code**, wenn dein Projekt mehr als 10 Dateien umfasst oder du mit einem langen Kontext arbeitest – das trifft auf die meisten realen Programmierprojekte zu.
- 💬 **Verwende die normale Mammouth-Oberfläche**, wenn der Kontext überschaubar ist: zwei oder drei Dateien mit höchstens ~500 Zeilen (z. B. wenn du eine bestimmte Funktion verstehen möchtest – es sei denn, du steckst mitten in tief verschachtelten, mehrfach vererbten OOP-Klassen 😄).

::: warning Genauigkeit der Nutzungsübersicht
Der im Terminal angezeigte Schätzwert für Preis und Tokenverbrauch entspricht möglicherweise nicht jederzeit exakt den tatsächlichen Echtzeitkosten. Deine tatsächliche API-Nutzung kannst du im Dashboard unter [mammouth.ai/app/account/api](https://mammouth.ai/app/account/api) überprüfen.
:::

> **Hinweis zu Claude Haiku:** Dieses kleinere Modell wird derzeit zum Erstellen von Sitzungstiteln verwendet. In einem zukünftigen Update wird sich das konfigurieren lassen.

## Modell-Aufwandsstufen

In Mammouth Code kannst du zwischen Modellvarianten wechseln, indem du **Ctrl+P** drückst und **Switch model variant** auswählst (oder **Ctrl+T**, um schnell durch die Varianten zu wechseln). So kannst du bei unterstützten Modellen eine Aufwandsstufe auswählen.

### Was sind Aufwandsstufen?

Aufwandsstufen steuern das **Extended Thinking** – also, wie viel Zeit und Tokens das Modell vor der Antwort für seine Überlegungen aufwendet.

| Stufe       | Schlussfolgern      | Am besten geeignet für                                    |
| ----------- | ------------------- | --------------------------------------------------------- |
| **Default** | Aus                 | Standardaufgaben, schnellste Antwort, geringster Tokenverbrauch |
| **Low**     | An (minimal)         | Einfache Aufgaben, bei denen leichtes Schlussfolgern hilft |
| **Medium**  | An (moderat)         | Die meisten Aufgaben – ausgewogenes Verhältnis von Geschwindigkeit und Tiefe |
| **High**    | An (maximal)         | Komplexe Probleme, Architekturentscheidungen, schwierige Fehler |

Ein höherer Aufwand ermöglicht gründlichere Überlegungen, führt aber zu **langsameren Antworten und höherem Tokenverbrauch**.

::: info
Nicht alle Modelle unterstützen Aufwandsstufen. Extended Thinking ist nur bei ausgewählten Modellen verfügbar. Bei Modellen ohne Unterstützung steht diese Option nicht zur Verfügung.
:::

### Wann welche Stufe verwenden?

- 🟢 **Default** — Schnelle Änderungen, einfache Fragen, Navigation in Dateien
- 🔵 **Low** — Refactorings, kleine Funktionserweiterungen
- 🟡 **Medium** — Mehrstufige Aufgaben, Debugging, Code-Reviews
- 🔴 **High** — Komplexe Algorithmen, Architekturentscheidungen, schwer reproduzierbare Fehler
