# Versionshinweise – Mammouth AI

## 18. September 2026

### ⭐ Neue Modelle

- **GPT-6 Astra**
- **Claude Fable 5.1**

### 🔄 Modellaktualisierungen

**Text:**

- **GLM 5.3 Flash**
- **DeepSeek v4.1 Flash**

**Bild:**

- **GPT Image 2.5**
- **Grok Imagine Image 2**

### 📂 Dokumentkontext wird jetzt vollständig geladen

Bisher wurde beim Hochladen sehr langer Dokumente nur ein Teil des Inhalts extrahiert, wodurch Inhalte abgeschnitten sein konnten.

Jetzt wird der agentische Modus bei umfangreichem Dokumentkontext automatisch aktiviert, sodass das gesamte Dokument einschließlich seines Kontexts geladen werden kann.

### 🧠 Der Chat-Speicher ist standardmäßig größer

Mehrere Nutzer haben berichtet, dass der Chat-Speicher zu begrenzt war, obwohl sie ihre Speichereinstellungen nicht manuell geändert hatten. Wir aktivieren jetzt automatisch den Modus „Großer Speicher“ für Gespräche, die am aktuellen Tag stattfinden.

Um den Modus „Großer Speicher“ für alle Gespräche einschließlich der Gespräche von früheren Tagen zu aktivieren, kannst du den Modus „Erweiterter Speicher“ einschalten.

### 🤖 Ein intelligenteres Standardmodell

Wenn kein Modell ausdrücklich ausgewählt wurde, ist das standardmäßige Textmodell nicht mehr auf ein Mistral-Modell beschränkt. Stattdessen wählt es nun dynamisch anhand des Prompts aus einer Reihe von Modellen aus.

Wir haben intelligentes Modell-Routing für Textmodelle eingeführt.

### 🔌 Benutzerdefinierte Konnektoren lassen sich jetzt per OAuth aktivieren

Einige Konnektoren erfordern oder unterstützen OAuth-Authentifizierung. Du kannst diese Konnektoren jetzt direkt verbinden und verwenden.

### 📦 Außerdem

- Sora wurde eingestellt, nachdem OpenAI den Dienst abgeschaltet hat.
- Dokumente können jetzt direkt aus Google Drive oder Dropbox hochgeladen werden, auch wenn sie nicht lokal gespeichert sind.
- Die Modelle in der API wurden aktualisiert.
- Mammouth Code wurde auf Version 1.18.31 aktualisiert.

## 20. August 2026

### 🔌 Konnektoren (MCPs)

- **Vorgefertigte Konnektoren** – 4 vorgefertigte Konnektoren (Microsoft 365, GitHub, Notion und Atlassian) sind direkt im Chat verfügbar.
- **Benutzerdefiniertes MCP** – Wenn du den gesuchten Konnektor nicht findest, kannst du dein eigenes benutzerdefiniertes MCP einrichten.

Konnektoren lassen sich in den [Kontoeinstellungen](https://mammouth.ai/app/account/settings) aktivieren.

Für Teams: Team-Administratoren können die Konnektoren des Teams in den [Berechtigungseinstellungen](https://mammouth.ai/app/account/settings/permissions) festlegen.

### 🔄 Modellaktualisierungen

- **Claude Opus 5** ersetzt Opus 4.8 und Fable
- **Gemini 3.7 Flash** ersetzt 3.6 Flash
- **Grok 4.6**
- **GLM 5.3**
- **Qwen 3.8**

### 🛠️ Plattformstabilität

Wir haben viel in die Verbesserung der allgemeinen Plattformstabilität investiert. Zahlreiche Fehler wurden behoben oder deutlich reduziert, darunter:

- **Unterbrochene Prompts** – Manche Prompts wurden unterbrochen, bevor die KI ihre Antwort fertiggestellt hatte. Das ist jetzt behoben. Du kannst nun sogar die Seite neu laden, den Browser schließen oder deinen Computer in den Schlafmodus versetzen: Das Streaming wird trotzdem fortgesetzt, sofern du nicht auf die Schaltfläche zum Stoppen der Generierung klickst.
- **XLSX-Uploads** – Einige XLSX-Dateien wurden nicht korrekt hochgeladen.
- **Gespräche durch generierte Dateien blockiert** – Einige generierte Dateien, insbesondere ZIP- und TAR-Dateien, konnten ein Gespräch blockieren und das Senden neuer Nachrichten verhindern. Das ist jetzt behoben.
- **Neue Dateiformate** – .tar-, .tgz- und .tar.gz-Dateien werden beim Hochladen von Dokumenten jetzt unterstützt.
- **Leere Dateien** – Die KI konnte manchmal leere Dateien erzeugen (bei JSON); das ist jetzt behoben.

### 🧷 API-Aktualisierung

- **UX der API-Einstellungen** – Wir haben die API-Einstellungen ([mammouth.ai/app/account/api](https://mammouth.ai/app/account/api)) mit einigen UX-Änderungen aktualisiert, damit Bewegungen des API-Guthabens übersichtlicher dargestellt werden.
- **Verfügbare API-Modelle** – Mit neuen Veröffentlichungen aktualisiert: [model-explorer.mammouth.ai](https://model-explorer.mammouth.ai/)

## 24. Juli 2026

### 🧠 Neue Reasoning-Modelle

- **Claude Fable**
- **GPT 5.6 Sol**
- **Kimi K3**
- **Grok 4.5 Reasoning**

### ⭐ Neue Standardmodelle

- **GPT 5.6 Luna**
- **Gemini 3.6 Flash**
- **Grok 4.5**

### ⚡ Neues leichtes Modell

- **Gemini 3.5 Flash Lite**

### 🧷 Für Entwickler

**Neue Modelle in der API** – Kimi K3 und die meisten der oben genannten Modelle wurden ebenfalls zur Mammouth-API hinzugefügt.

## 13. Juli 2026

### 🎵 Musikgenerierung mit Lyria

**Musikgenerierung** – Musik lässt sich jetzt mit Lyria direkt in Mammouth erstellen!

### 🔄 Modellaktualisierungen

- **Claude Sonnet 5** ersetzt Claude Sonnet 4.6
- **GLM 5.2** ersetzt GLM 5.1
- **Qwen 3.7** ersetzt Qwen 3.6
- **Grok Imagine Image Quality** ersetzt Grok Imagine Image
- **Recraft v4.1** ersetzt Recraft v4
- **Recraft v4.1 SVG** ersetzt Recraft v4 SVG

### ✨ Neue Funktionen

**Agentischer Modus** – Der agentische Modus kann im Eingabefeld aktiviert werden. Er eignet sich besonders für komplexe Aufgaben wie das Erstellen und Bearbeiten von Dokumenten sowie gründliche, dokumentierte Websuchen.

**KI-Text-to-Speech** – Dank OpenAI TTS wird KI-Text-to-Speech jetzt auf Deutsch und 10 weiteren Sprachen unterstützt. Französisch und Englisch werden weiterhin mit Voxtral unterstützt. Außerdem wurden technische Probleme mit TTS behoben.

### 🧷 Für Entwickler

**Neue Modelle in der API** – Wir haben neue Modelle zur API hinzugefügt. Schau sie dir hier an: [model-explorer.mammouth.ai](https://model-explorer.mammouth.ai/)

**Empfohlenes Modell in Mammouth Code** – In Mammouth Code kannst du jetzt in der Modellauswahl ein Modell namens „mammouth-recommended“ auswählen. Damit verwendest du dasselbe effiziente Modell, das wir intern zum Programmieren einsetzen. Aktuell ist es GLM 5.2. Wir aktualisieren die Empfehlung, sobald ein neues Modell ein besseres Angebot bietet. Mit dem empfohlenen Modell von Mammouth erzielst du hervorragende Ergebnisse beim Programmieren zum besten Preis.

## 12. Juni 2026

### ⭐ Neue Modelle

- **Claude Opus 4.8**
- **Gemini 3.5 Flash**
- **Mistral Medium 3.5**
- **Grok 4.3**

### 📂 Riesiges Upgrade für Dokumente

**Erweiterte Dokumentbearbeitung und -erstellung** – Mammouth unterstützt jetzt die erweiterte Bearbeitung und komplexe Erstellung von Dokumenten in allen unterstützten Dateiformaten. Die KI kann einen virtuellen Computer öffnen, um Dateien mithilfe von Skills und Subagents direkt zu bearbeiten und zu erstellen.

**PDFs bis zu 100 MB** – Wir unterstützen jetzt PDF-Dateien bis zu 100 MB.

### 🌐 Websuche-Integration

**Webfunktionen für alle Modelle** – Wir haben Webfunktionen direkt in Claude Sonnet und Claude Opus integriert. Dasselbe gilt für die Modelle von Mistral, Kimi, DeepSeek, GLM und Qwen. Es gibt keine speziellen Webmodelle mehr — die Websuche ist jetzt ein Tool, das du über die Auswahl „Websuche“ im Promptfeld gezielt aktivieren kannst.

### 📊 Kontingent-Dashboard

**Nutzung nach Modell verfolgen** – Ein Kontingent-Dashboard, mit dem du deine Nutzung pro Modell verfolgen kannst, ist jetzt verfügbar.

### 🪛 Fehlerbehebungen

**GPT Image 2** – Wir haben Fehler bei GPT Image 2 behoben.

### 🧷 API-Aktualisierungen

**Größere Dateien in Completions** – Die API unterstützt jetzt größere Dateien in Completions.

**Neue Modelle hinzugefügt** – Der API wurden neue Modelle hinzugefügt.

### ⚽ Mammouth-Fanartikel zur Weltmeisterschaft

**Unterstütze dein Land!** – Verfolge die Weltmeisterschaft und hole dir die Mammouth-Fanartikel des Landes, das du unterstützt. Ein Mammouth bleibt verfügbar, solange das Land noch bei der Weltmeisterschaft dabei ist!

## 1. Mai 2026

### ⭐ Aktualisierungen der Flaggschiffmodelle

- **GPT 5.5**
- **Claude Opus 4.7**
- **DeepSeek v4 Pro**
- **Qwen 3.6 Plus**
- **Kimi K2.6**
- **GLM 5.1**

### 🖼️ Aktualisierungen der Bildmodelle

- **Nano Banana 2**
- **GPT Image 2**

### ⚡ Aktualisierung eines leichten Modells

- **Gemini 3.1 Flash Lite**

### 🎨 Designaktualisierungen

**Überarbeitete Liste für erneute Prompts** – Die Modelle werden jetzt in derselben Reihenfolge angezeigt, die du auf der Seite für neue Chats festgelegt hast. Dein Standardmodell steht zuerst usw. (Ziehe Modelle per Drag-and-drop, um dein Standardmodell auszuwählen.)

**Erweiterbares Eingabefeld** – Für lange Prompts kannst du das Eingabefeld jetzt in einer Vollbildansicht erweitern und so einfacher bearbeiten.

**Eingeklappte Nutzernachrichten** – Nutzernachrichten werden im Gesprächsverlauf jetzt eingeklappt, damit du besser zwischen früheren Nachrichten navigieren kannst.

### 📂 Dokumentaktualisierungen

**Unterstützung von ZIP-Dateien** – ZIP-Dateien können jetzt hochgeladen werden.

**Verbesserte OCR für PDFs** – Gescannte PDFs, für die OCR erforderlich ist, werden jetzt mit bis zu 50 Seiten verarbeitet (statt 20 Seiten).

**XSLX-Korrekturen** – Wir haben Probleme mit XSLX-Dateien behoben, durch die einige Dateien nicht korrekt hochgeladen werden konnten.

### 🔄 Sonstiges

**Gespräche importieren** – Du kannst Gespräche jetzt nicht nur aus ChatGPT, sondern auch aus Claude oder einem anderen Mammouth-Konto direkt in deinen Einstellungen importieren.

**Mammouth Code** – Mammouth Code wurde aktualisiert und Installationsfehler auf älteren CPUs wurden behoben. Lade über das Installationsskript die neueste Version herunter: curl -fsSL "https://code.mammouth.ai/install.sh" | bash (Linux/Mac) oder irm "https://code.mammouth.ai/install.ps1" | iex (Windows).

### 🧷 API-Aktualisierungen

**Neue Modelle hinzugefügt** – Die oben genannten Modelle wurden zur API hinzugefügt.

**Model Explorer** – Dank nichu42 gibt es jetzt eine [übersichtliche Modellansicht](https://model-explorer.mammouth.ai/)! Sie ist [Open Source](https://codeberg.org/mammouth-ai/mammouth-model-explorer). Auch unser [Dokumentationsblog](https://github.com/mammouth-ai/blogdoc) ist Open Source — Vorschläge für Commits sind willkommen.

**Mehrere API-Schlüssel** – Du kannst jetzt mehrere API-Schlüssel erstellen, um deine Projekte zu trennen. Zur besseren Überwachung lassen sich die Protokolle nach API-Schlüssel filtern.

### 📱 Mobile App

**Android-App verfügbar** – Die mobile App ist im Android Play Store verfügbar: [https://play.google.com/store/apps/details?id=ai.mammouth.application](https://play.google.com/store/apps/details?id=ai.mammouth.application)

## 14. April 2026

### ⭐ Neue Modelle

**Videogenerierung** – Videogenerierung ist jetzt mit 4 Modellen in Mammouth verfügbar: Veo 3.1 fast, Sora 2, Grok Video und Kling 2.5.

**Grok 4.20** – Das neue Grok-Modell ist mit einer aktualisierten Websuche verfügbar, einschließlich gezielter Suche auf x.com.

**Aktualisierungen leichter Modelle:**
- **Claude Haiku 4.5** wurde hinzugefügt
- **GPT 5.4 nano** ersetzt GPT 5 mini
- **Mistral Small 4** ersetzt Mistral Small 2

### 👥 Neue Funktionen für Teams und Unternehmen

**SSO-Integration** – Wir unterstützen jetzt SSO-Integrationen mit Microsoft Entra, Keycloak, Okta und weiteren Anbietern. So lässt sich Mammouth einfacher in Unternehmen und Universitäten einführen.

**Kombinierbare Lizenzen** – Dein Team kann jetzt Pläne (Starter/Standard/Expert) innerhalb desselben Abonnements kombinieren, um verschiedenen Nutzerbedürfnissen gerecht zu werden.

Weitere Informationen zu Teams: [info.mammouth.ai/docs/teams/](https://info.mammouth.ai/docs/teams/)

### 📊 Neue Kontingentrichtlinie und größerer Kontext

**Aktualisierte Kontingentrichtlinie:**
- Die monatlichen Kontingente für Bilder und Dokumente wurden abgeschafft.
- Auch das feste Kontingent von 50 Nachrichten wurde abgeschafft.
- Alle Limits werden jetzt anhand des tatsächlichen KI-Verbrauchs im 3-Stunden-Sitzungskontingent berechnet (Anzahl der Nachrichten, Nachrichtenlänge, ausgewähltes Modell, Reasoning, Websuche).
- Der Modellwechsel nach Erreichen des Kontingents wurde verbessert und erfolgt nun schrittweiser und weniger frustrierend.

**Größerer Dokumentkontext** – In den Nutzereinstellungen gibt es jetzt eine Option, um den Dokumentkontext für besondere Anforderungen bei sehr langen Dokumenten zu vergrößern.

**Größerer Speicher** – In den Einstellungen gibt es jetzt eine Option, um den Kontextumfang des Gesprächsspeichers zu erhöhen, der mit jeder Nachricht gesendet werden kann.

Weitere Informationen: [Das neue Kontingentsystem: vorher und nachher](https://public.mammouth.ai/the-new-quota-system)


### Und außerdem

- **Text-to-Speech** (mit Voxtral) für ausgehende Nachrichten, damit die KI ihre Antworten laut vorlesen kann.

- **Neue unterstützte Dateiendungen**: .ods, .odp, .odt

- **Überarbeitetes Design von Chatnachrichten**, ohne Rahmen und besser für Mobilgeräte geeignet

- **Vorlagen für transaktionale E-Mails** (E-Mail-Verifizierungslinks, vergessene Passwörter, Teameinladungen usw.) wurden vollständig überarbeitet.

- **Gesprächsfilter** nach Mammouth und Datum wurden hinzugefügt:
  - Du kannst Gespräche, die älter als 3 Monate sind, gesammelt auswählen, verschieben oder löschen.
  - Du kannst Gespräche eines benutzerdefinierten Mammouths gesammelt auswählen, verschieben oder löschen.
  ![Gesprächsfilter](/docs/release-notes/conversation_filter.png)



## 6. März 2026

### ⭐ Neue Modelle

**Gemini 3.1 Pro**

**Recraft v4**

### 🦣 Geteilte Mammouths

Mammouths lassen sich jetzt über einen öffentlichen Link, eine E-Mail-Einladung oder innerhalb deines Teams teilen.

### Und außerdem

- Während die Ausgabe des LLMs noch gestreamt wird, kannst du jetzt Codeblöcke und Tabellen kopieren oder externe Links öffnen.

- Wir akzeptieren jetzt alle Textdateiendungen. Das ist besonders nützlich für Programmierer, die ausgefallenere Formate wie .csproj oder .mq4 verwenden.

- Der API wurden Modelle hinzugefügt (GLM-5, Gemini 3.1 Pro, Claude Sonnet 4.6, gemini 2.5 flash lite). Außerdem wurden 13 Modelle eingestellt, damit die Liste übersichtlich und aktuell bleibt.

- Die Funktion zum Löschen von Chats wurde verbessert — der Löschvorgang läuft jetzt im Hintergrund. So kannst du weiterarbeiten, ohne auf einen eingefrorenen Bildschirm warten zu müssen.

## 18. Februar 2026

### ⭐ Neue Modelle

**Claude Sonnet 4.6** – gerade veröffentlicht!

**Grok Imagine** – ersetzt Grok 2 image

### 🔄 Modellaktualisierungen

- **GPT Image** – verbessert, um Text in Bildern auch bei langen Prompts besser darzustellen

### ✨ Neue Funktionen

- **Während des Streamings kopieren** – Du kannst den Ausgabe-Text der KI jetzt kopieren, während er noch gestreamt wird.
- **Dokumenterstellung mit Reasoning-Modellen** – Die Dokumenterstellung funktioniert jetzt auch in Gesprächen mit Reasoning-Modellen wie Gemini Pro oder Claude Opus.

### ⚙️ Einstellungen und Eingabe

- **Neue Einstellungsseite** – Die [Einstellungsseite](https://mammouth.ai/app/account/settings/) wurde mit einem modernen Design vollständig überarbeitet.
- **Verhalten der EINGABETASTE ändern** – Wähle in [deinen Einstellungen](https://mammouth.ai/app/account/settings/) aus, welche Taste deinen Prompt sendet: EINGABE, ALT+EINGABE oder STRG+EINGABE.

### 🎭 Neue Mammouth-Accessoires

Entdecke die neuen temporären Mammouth-Accessoires ⛷️

## 12. Februar 2026

### ⭐ Neue Modelle

**Claude Opus 4.6** und **Kimi K2.5**

### 👨‍💻 Mammouth Code!

Weitere Informationen findest du in der neuen [Mammouth-Code-Dokumentation](https://info.mammouth.ai/docs/mammouth-code/).

### 🌐 Web-Aktualisierungen

- **Bildersuche**: Suchanfragen können jetzt Bilder aus dem Web anzeigen.
- **Vereinfachung**: Die Kategoriezeile für Web wurde mit Textmodellen zusammengeführt und OpenPerplex wurde entfernt. Du kannst die Web-Kategorie weiterhin gezielt auswählen.
- **Perplexity**: zeigt jetzt Snippets in einer neuen Darstellung.

### Sonstiges

- **Erneute Prompts** können jetzt über mehrere Gespräche hinweg weitergeleitet werden.
- Beim Kopieren einer Antwort wird die angewendete Markdown-Formatierung mitkopiert (praktischer für E-Mails, Dokumente usw.).

## 23. Januar 2026

### ⭐ Neues Modell

**Mistral Large 3** – ersetzt Mistral Medium

### 🔄 Modellaktualisierungen

- **Gemini** – verbesserte Stabilität und Zuverlässigkeit
- **Gemini** – unterstützt jetzt die Prüfung von YouTube-Videolinks

### 📂 Gesprächsverwaltung

- **Sammelaktionen** – mehrere Gespräche gleichzeitig löschen oder verschieben
- **Erweiterte Suche** – Gespräche nach Modell oder Mammouth-Namen finden

### 🦣 Mammouths

- **Unbegrenzte Mammouths** – das Limit von 15 Mammouths entfällt
- **Favorisierte Mammouths** – markiere die Mammouths, die du am häufigsten verwendest, als Favoriten
- **Intelligente Sortierung** – der zuletzt verwendete Mammouth rückt automatisch an den Anfang der Liste
- **Verbesserte Navigation in der Seitenleiste** – durchsuche deine Mammouth-Sammlung jetzt noch einfacher

### 🎭 Neue Mammouth-Accessoires

**Saisonale Accessoires** – Sammle im Laufe des Jahres zeitlich begrenzte Accessoires! Wie viele bekommst du zusammen?

### 📱 Mobile App (für Chrome-Nutzer)

**Für neue Funktionen neu installieren** – Aktualisiere deine App, um native Funktionen zu nutzen:
- **Schnellzugriffe** – Halte das App-Symbol gedrückt, um Aktionsverknüpfungen anzuzeigen.
- **Verbessertes Teilen** – Teile Fotos und Dateien direkt in Mammouth.

### Und außerdem

- **Dynamische Browser-Tabs** – Gesprächsnamen und Mammouth-Symbole werden jetzt in den Browser-Tabs angezeigt.
- **Nano Banana API** – als erstes Bildmodell zur Mammouth-API hinzugefügt
- **Verbesserungen für GPT Image** – verbesserte Bildgenerierungsqualität und -funktionen
- **Preise inklusive Mehrwertsteuer** – in allen EU-Ländern werden jetzt Preise inklusive Mehrwertsteuer angezeigt.

## 1. Januar 2026

### ⭐ Neues Premium-Modell

**Claude Opus 4.5** – Das leistungsstärkste Modell von Anthropic ist jetzt bei Mammouth verfügbar.

### 🔄 Modellaktualisierungen

- **GPT 5.2** – ersetzt GPT 5.1
- **Gemini 3 Flash** – ersetzt Gemini 2.5 Flash
- **GPT Image 1.5** – ersetzt GPT Image 1

### 🌟 Neue Marken

**Kimi** – neue Marke mit zwei Modellen:
- Kimi K2
- Kimi K2 Thinking

**Qwen** – neue Marke mit:
- Qwen 3 Coder

### 📂 Erweiterter Dokumentkontext

**8-mal mehr Kontextextraktion** – Der aus Dokumenten in deinen Mammouths extrahierte Kontext wurde verachtfacht und entspricht jetzt der Kontextkapazität von Gesprächen.

### ⚙️ Erweiterte Einstellungsmöglichkeiten

- **API-Einstellungen deaktivieren** – Schalte den API-Zugang direkt im Menü aus.
- **Markenverwaltung** – Deaktiviere bestimmte Modellmarken für dich und dein Team in den [Berechtigungseinstellungen](https://mammouth.ai/app/account/settings/permissions).

### 🌎 Neue Sprachunterstützung

🇳🇱 **Das Mammut spricht jetzt Niederländisch!**

## 24. Dezember 2025

### ✨ Neues Design: Mammouth im neuen Look!

Entdecke unsere neue visuelle Identität, erweiterte Anpassungsmöglichkeiten und eine überarbeitete Benutzeroberfläche für ein noch besseres Erlebnis:

### 🎨 **Neues Logo und anpassbare Mammouths**

- **Neues Logo**: Wir haben Form und Farben modernisiert, damit das Logo dynamischer und zeitgemäßer wirkt, ohne den unverwechselbaren Charakter und das ursprüngliche Symbol von Mammouth zu verlieren.
![Mammouth-Logo](/docs/release-notes/mammouth_logo.png)

- **Erlebnis mit benutzerdefinierten Mammouths**: Personalisiere deinen Mammouth mit einer größeren Auswahl an Farben und noch mehr Accessoires, damit er wirklich einzigartig wird!
![Neue Erstellungsseite für benutzerdefinierte Mammouths](/docs/release-notes/custom_mammouths_new_creation_page.png)


### **📱 Verbesserte Nutzererfahrung (besonders auf Mobilgeräten)**

- **Größere Schaltflächen**: für eine einfachere und intuitivere Navigation.
- **Neue Farbpalette**: eine aufgefrischte und harmonische Oberfläche.
- **Vollständig mobiloptimiert**: nahtlose Nutzung auf all deinen Geräten.
- **Neuer dunkler Modus**: eine angenehmere und einheitlichere Darstellung für deine Augen.

![Mobiles Design](/docs/release-notes/mammouth_mobile_design.jpeg)

## 17. Dezember 2025

⭐ **Flux 2 Pro** – ersetzt Flux Kontext Pro

⭐ **DeepSeek v3.2** – ersetzt DeepSeek v3.1

**Und außerdem**

📍 **Pinnen deiner Gespräche**, damit sie oben in der Liste bleiben

🗃️ **Dateierstellung** – Wir haben das System zur Dateierstellung verbessert.

⬇️ **Verbesserungen für erneute Prompts**
- Perplexity wurde zur Liste für erneute Prompts hinzugefügt.
- Bei erneuten Prompts mit Grok, DeepSeek oder Mistral wird die Websuche automatisch aktiviert, wenn sie relevant ist.

🧷 **API-Aktualisierung**: Claude Opus 4.5, GPT 5.1, GPT 5.2, Gemini 3 Pro, Perplexity Sonar Pro, Perplexity Deep Research, Grok Code Fast, Claude 4.5 Haiku, Qwen3 Coder, Kimi K2, Mistral Large 3 und DeepSeek v3.2 wurden zur API hinzugefügt.

## 3. Dezember 2025

👥 **Teamrollen** – Wenn du Mammouth in deinem Unternehmen verwendest, kannst du jetzt:
- Rollen zuweisen: Inhaber, Admin (Teamverwaltung mit der Möglichkeit, Mitglieder zu aktivieren/deaktivieren) und Mitglieder
- Inhaberschaft übertragen: Der Inhaber kann eine Nachfolgeperson bestimmen.
- Administratorkonto: Der Inhaber des Plans muss keine Lizenz für sich selbst verwenden.
- Mehrere Einladungen: mehrere E-Mail-Adressen auf einmal einladen
![Aktualisierung der Teamrollen](/docs/release-notes/team_updates_roles_EN.png)

**Und außerdem**

**⭐ Grok 4.1 fast** – ersetzt Grok 4

⬆️ **Gespräche exportieren** – Export im JSON-Format verfügbar

⬇️ **Gespräche aus ChatGPT importieren** – Du kannst jetzt [Gespräche importieren](/de/docs/import-conversations/index.md).

💡 Ein Produktdetail: Wenn du ein Textmodell wie Mistral oder DeepSeek bittest, ein Bild zu erstellen, erzeugt es einen intelligenten Link, mit dem du deine Anfrage schnell erneut an ein Bildmodell senden kannst.

🪛 Ein gelegentlicher Fehler bei GPT-Image beim Senden von Emojis in Prompts wurde behoben.

## 21. November 2025

**⭐ Gemini 3 Pro** – ersetzt Gemini 2.5 Pro

## 18. November 2025

**⭐ GPT 5.1** – ersetzt GPT 5 und GPT-5 Thinking. Das Modell ist schneller und behält gleichzeitig die Leistung von GPT 5 bei.

**⭐ Grok 4 fast** – Wir haben Grok 4 mit einem schnelleren Textmodell, dem neuen leichten Modell und einem Reasoning-Modell aktualisiert.

**🍌 Nano Banana** – Wir haben Nano Banana auf die Version nach der Vorschau aktualisiert. Das Modell verarbeitet jetzt [Seitenverhältnis-Parameter](/de/docs/aspect-ratio/index.md).

**🌐 Automatische Aktivierung der Websuche** – Mistral, Grok und DeepSeek durchsuchen jetzt automatisch das Web, wenn es relevant ist. Du kannst die Option weiterhin deaktivieren oder erzwingen, indem du beim Prompten auf das Websymbol klickst.

**Und außerdem**

✉️ Die E-Mail-Adresse des Kontos kann jetzt in den [Einstellungen](https://mammouth.ai/app/account/settings) geändert werden.

⏬ Es wurde eine Verknüpfung hinzugefügt, mit der du zum Ende des Gesprächs springen kannst.

🪛 Ein Fehler in der zuletzt veröffentlichten Safari-Version wurde behoben, der KIs daran hinderte, Dokumente mit französischen Akzenten im Titel zu lesen. Außerdem haben wir ein Problem mit einigen Codeimporten behoben, die von der KI beim Hochladen als Dokument nicht korrekt wiedergegeben wurden.

🧷 Embeddings sind jetzt in der Mammouth-API verfügbar.


## 5. November 2025

**⭐ Recraft Vectorize (PNG zu SVG) ⭐**

Recraft kann deine PNG- oder JPEG-Bilder jetzt in das Format .svg umwandeln. Es ist das einzige Modell, das dazu in der Lage ist.

**🐳 DeepSeek v3.1 Terminus** – Wir haben DeepSeek v3.1 auf die neueste Version aktualisiert.

**🔉 Audio-zu-Text ist jetzt verfügbar** – Du kannst Audiodateien mit Gemini hochladen und analysieren.

**🔉 Video-zu-Text ist jetzt verfügbar** – Du kannst kleine Videodateien (unter 20 MB) mit Gemini hochladen und analysieren.

**Und außerdem**

💭 Der Denkmodus ist jetzt dank eines flüssigeren Designs weniger aufdringlich. Außerdem wird nun auch der Websuchmodus von GPT angezeigt.

🦊 Die App ist jetzt auch für Firefox unter Windows verfügbar.

🪛 Ein versehentliches Senden von Prompts wurde behoben, das auftrat, wenn die Umschalttaste vor der Eingabetaste losgelassen wurde (bei Umschalt + Eingabe).

➗ Einige LaTeX-Formeln wurden korrigiert, damit mathematische Gleichungen schöner dargestellt werden.

📋 Das Laden des Chatverlaufs in der Seitenleiste funktioniert jetzt auch auf großen Bildschirmen.

## 8. Oktober 2025

**⭐ Claude Sonnet 4.5 ⭐**

Es ersetzt Claude Sonnet 4. Die Versionshinweise von Anthropic findest du [hier](https://www.anthropic.com/news/claude-sonnet-4-5).

**🧠 Gesprächsspeicher**

Wir haben den Gesprächsspeicher freigeschaltet. Dein Modell hat jetzt Zugriff auf den gesamten Nachrichtenverlauf, egal wie lang das Gespräch ist.

**🎨 Gestaltung der KI-Antworten**

Die Formatierung der KI-Antworten wurde verbessert. Abstände zwischen Absätzen und Überschriften sind jetzt besser abgestimmt. Zitate, Tags und generierte Tabellen haben ein verbessertes Farbdesign.

**⛵ Auf Wiedersehen, Midjourney**

Letzte Woche hat unser Midjourney-Anbieter seinen Dienst eingestellt. Wir haben keinen geeigneten Ersatz gefunden, da Midjourney weiterhin keine offizielle API anbietet.
Obwohl Midjourney bei unserer Nutzung der Bildgenerierung auf Platz 4 liegt (hinter Nano Banana, GPT Image und FLUX) und in Leistungsbenchmarks Platz 5 belegt, wird es uns fehlen. Vielleicht bauen wir die Erfahrung mit dem Raster aus vier Bildern mit anderen Modellen nach. Wir hoffen, dass Midjourney irgendwann eine entwicklerfreundliche API veröffentlicht. Bis dahin gehen wir getrennte Wege.

**Und außerdem**

- **GPT Image** ist jetzt vollständig dialogfähig (wie Nano-Banana).
- **Fehlerbehebung:** Einige Modelle versuchten gelegentlich, bei der Dokumenten- oder Diagrammanalyse Code auszuführen, obwohl dies nicht angefordert war, und scheiterten dabei. Das ist behoben.
- **Mammouth-API: Claude Sonnet 4.5**, Grok-4, Grok-4-fast, DeepSeek-3.1-Terminus und DeepSeek-3.2-exp werden jetzt unterstützt.

## 16. September 2025

**⭐ Neue Modelle ⭐**

- **Nano Banana** (_auch bekannt als Gemini 2.5 Flash Image_): kann Bilder bearbeiten und Gespräche führen.
- **DeepSeek v3.1** (ersetzt DeepSeek v3)

**⚡ Gespräche mit leichten Modellen starten**

Du kannst ein neues Gespräch mit jedem leichten Modell beginnen, auch wenn du dein Kontingent noch nicht ausgeschöpft hast.

**🧷 API-Dienste für deine Automatisierungen**

- Kaufe zusätzliches Guthaben in den [API-Einstellungen](https://mammouth.ai/app/account/settings/api).
- Du kannst auch ohne Abonnement Guthaben kaufen.
- GPT-5, GPT-5-mini, GPT-5-nano, Claude 4.1 Opus, Mistral 3.1 und DeepSeek v3.1 werden jetzt unterstützt.

**Und außerdem**

- **Verbesserte Verarbeitung mehrerer Dokumente** in einem Gespräch: Kurze Dokumente wurden manchmal von langen überschattet, sodass die KI sie übersah; das passiert jetzt nicht mehr.
- **Dokumenterstellung**: Einige Modelle lehnten gelegentlich die Erstellung von Dateien (PDF, DOCX, XLS) ab; das ist jetzt behoben.
- Die [Preisseite](https://mammouth.ai/pricing) wurde aktualisiert, um den Team-Plan hervorzuheben und aktuelle Informationen zum wachsenden Mammouth-Angebot (API-Guthaben, Perplexity, Sprachmodus usw.) bereitzustellen.
- Wir haben unsere [Nutzungsbedingungen](https://info.mammouth.ai/docs/terms-of-service/) aktualisiert.
- **GPT-5** bietet jetzt:
  - eine verbesserte Textformatierung
  - eine funktionierende Darstellung mathematischer Gleichungen
  - einen sichtbaren Denkprozess

## 25. August 2025

**⭐ Neues Modell: Mistral Medium 3.1**

**📁 Langer Kontext und Dokumente**

Wir haben die Verarbeitung langer Kontexte (lange Eingaben und Dokumente) deutlich verbessert: mehr Kontextkapazität, bessere Inhaltsextraktion, verbesserte Verarbeitung langer Codekontexte, höhere Geschwindigkeit, weniger Fehler usw.

**🎨 UX-Verbesserungen**

- Die Schaltfläche zum Kopieren von Code schwebt jetzt und ist dadurch leichter zugänglich.
- Beim Kopieren und Einfügen von E-Mails oder HTML-Inhalten werden keine unerwünschten Zeilenumbrüche mehr eingefügt.
- Die mobile Navigation wurde für ein flüssigeres Erlebnis verfeinert.
- In der Seitenleiste werden jetzt mehr benutzerdefinierte Mammouths angezeigt.
- Die maximale Anzahl an Mammouths wurde von 12 auf 16 erhöht.

**🌐 Webzugriff für alle KIs**

Wir haben die Webfunktionen auf Mistral, Claude, DeepSeek, Grok und Llama ausgeweitet!

## 8. August 2025

**⭐ GPT-5**
- GPT 5 ersetzt GPT-4.1
- GPT-5 mini ersetzt GPT-4.1 mini
- GPT-5 Thinking (GPT-5 mit erweitertem systematischem Reasoning) ersetzt o3 und o4-mini

**🦣 Jeder benutzerdefinierte Mammouth hat jetzt sein eigenes Standardmodell** und eine eigene Anzeigereihenfolge der Modelle, bevor du die Eingabetaste drückst.

**✍️ Dein Prompt wird als Entwurf gespeichert** und bleibt erhalten, wenn du zwischen Gesprächen wechselst oder die Seite aktualisierst, bis du ihn sendest.

## 4. August 2025

### ⭐ Neue Modelle

**Neue Flaggschiffmodelle**
- o3
- Magistral

**Neue Bildmodelle**
- Imagen 4.0 (von Gemini)
- Grok Images

**Neue leichte und schnelle unbegrenzte Modelle**
- Mistral Small 32B
- Llama 4 Scout
- GPT-4.1-mini
- Grok-3-mini
- Gemini 2.5 Flash Lite

### ↪️ Gespräch erneut prompten
Jede Nutzernachricht eines Gesprächs kann jetzt erneut als Prompt gesendet werden, nicht nur die erste. Dabei wird das Gespräch verzweigt.

### ✨ Gespräche mit mehreren Modellen
Gespräche sind jetzt einer Marke statt einem Modell zugeordnet. So kannst du im selben Gespräch zwischen einem Text-, Bild- oder Reasoning-Modell wechseln.

### Und außerdem
- Wenn ein Kontingent erreicht ist, wird das Gespräch mit dem unbegrenzten Modell derselben Marke fortgesetzt (du musst nach Erreichen des Kontingents kein neues Gespräch mehr beginnen).
- Das Grok-Logo wurde vom xAI-Logo zum Grok-Logo geändert.
- Du kannst die vorherige Nachricht eines Gesprächs löschen und so zur Nachricht n-2 und weiter zurückkehren.
- Auf der Fehlerseite 404 (und auch auf anderen Seiten) wird jetzt ein niedliches Mammut angezeigt.

## 24. Juli 2025

### 🌟 Grok 4

### 📂 Dokumente: schneller, besser, umfangreicher

• Gescannte PDFs und PDFs mit Bildern werden jetzt analysiert (der Inhalt wird mit Mistral OCR extrahiert).

• Etwa 80 neue Erweiterungen wurden hinzugefügt: Jetzt werden mehr als [200 Dateiendungen unterstützt](https://info.mammouth.ai/docs/supported-file-extensions/).

• Geschwindigkeit: Die Dokumentenanalyse ist jetzt 3-mal schneller.

### 📱 Schnelle App-Installation

• Die App kann mit einem Klick über das Menü im linken Bereich installiert werden (in allen Browsern außer Firefox und Safari).

### 🌍 Neue Sprachen

🇵🇱 Das Mammut spricht jetzt Polnisch.

🇷🇴 Das Mammut spricht jetzt Rumänisch.

🇵🇹 Das Mammut spricht jetzt Portugiesisch.

🇦🇩 Das Mammut spricht jetzt Katalanisch.

## 3. Juli 2025

### 🌟 Midjourney v7

### 🧷 Mammouth-API

• **Alle Abonnenten erhalten mit ihrem Abonnement kostenlose Tokens**: 2$/4$/10$ pro Monat für Starter/Standard/Expert!

• **OpenAI-kompatibel**: Die API kann jetzt mit den OpenAI-Plugins in [n8n](https://public.mammouth.ai/How-to-use-Mammouth-in-n8n-226cf297c1ca80ab9f5dd999410884ee?pvs=74), Cline usw. verwendet werden.

• 23 Textmodelle verfügbar

• [**Dokumentation ansehen**](/de/docs/api-quick-start/)

### 🧮 Kontingent-/Nutzungsübersicht

• Du kannst deine Kontingente jederzeit in den Kontoeinstellungen ansehen.

• Der Kontingent-Banner im linken Bereich kann geschlossen werden.

### 📂 Dokumente und Verlauf

• Bei der Arbeit mit Dokumenten in einem Gespräch kannst du jetzt Dokumente aus dem früheren Verlauf oder von Assistenten deaktivieren, um dich auf das zuletzt hochgeladene Dokument zu konzentrieren oder das 32-MB-Limit einzuhalten.

![Dateiverwaltung im Prompt](/docs/release-notes/file_management_in_prompt.png)

• Neue Dateiendung: .doc (auch wenn es eine alte MS-Office-Dateiendung ist 😉)

### 👷 Serverfehler und fehlerhafte Dokumente

**Wir haben viele sporadische KI-Antwortfehler behoben, darunter:** Serverfehler bei Claude mit hochgeladenen Bildern, Fehler bei einer gesamten Dokumentuploadgröße von über 32 MB, Fehler bei passwortgeschützten Dokumenten, Fehler bei nicht erreichbaren API-Endpunkten, gelöschte Dokumente, die erneut gesendete Chats mit demselben Dokument beeinträchtigten, und fehlerhafte Dokumente, die das Gespräch blockierten.

### Weitere Funktionen

• Zahlungen mit PayPal werden jetzt akzeptiert.

• Die Anmeldung mit Google UND Passwort für dieselbe E-Mail-Adresse funktioniert jetzt.

• Erneut gesendete Gespräche werden jetzt im linken Bereich gruppiert (siehe GIF).

![Akkordeons](/docs/release-notes/Accordions_GIF.gif)


## 6. Juni 2025

### 🌟 Flux Kontext und DeepSeek R1
• **FLUX Kontext Pro** *– ersetzt FLUX Pro und Retexture*

• **DeepSeek R1 28.05** *– Aktualisierung von DeepSeek R1*

### 🗃️ Dateierstellung

• **CSV, DOCX, PDF usw. mit allen LLMs erstellen**

• **Diagramme als Bilder mit allen LLMs erstellen**

• [Hier ein Beispiel ansehen](https://mammouth.ai/shared/7fe819ad-5b61-4111-8f80-ab0521bbe848)

### 📱 Mobile App überarbeitet

• **🎙️Sprache-zu-Text** wurde hinzugefügt, damit du deine Prompts diktieren kannst.

• **🎨 Flüssigere Eingabe** *– keine Überschneidungen mehr zwischen Tastatur und Modellschaltflächen auf der neuen Chatseite, wenn sich die Eingabe nach oben bewegt.*

• 🎨 Viele kleinere Probleme in der Benutzeroberfläche (Abstände, Rahmen, Pop-ups, Überlagerungen usw.) wurden behoben, damit das Gesamtbild freundlicher wirkt.

## 23. Mai 2025

### 🌟 Mistral 3 und Claude 4
• **Mistral Medium 3** *– ersetzt Mistral 24.11*

• **Claude Sonnet 4** *– ersetzt Claude 3.7*

### 🧠 Intelligente Bildgespräche

• **Bildmodelle verstehen jetzt**, wenn du eine Änderung auf Grundlage der vorherigen Nachricht anforderst.

• **Du kannst den endgültigen Prompt sehen**, der an die KI gesendet wird — hinter einem 🪄-Symbol.

### ⚙️ [Kontoeinstellungen](https://mammouth.ai/app/account/settings) – neues Seitendesign
-  Du kannst jetzt alle Chats auf einmal löschen.
-  Du kannst jetzt dein Konto löschen.
-  Neue Sortierung der Nutzer-E-Mails in den [Teameinstellungen](https://mammouth.ai/app/account/team) (nach E-Mail-Domain und anschließendem Namen).

:::info Und außerdem …

⚡ **Flüssigerer Wechsel zwischen Chats** *– Inhalte werden schrittweise mit Skelett-Layouts auf der Seite geladen.*

🖋️ **Aktualisierung der Bearbeitung der letzten Nachricht** *– Wenn du deine letzte Nachricht bearbeitest, kannst du das angehängte Dokument entfernen.*

🔏 [**Aktualisierte Datenschutzerklärung**](/de/docs/privacy-policy/)

:::

## 9. Mai 2025

::: info Modellaktualisierungen
🌟 **Perplexity** *– Perplexity Sonar Pro wurde hinzugefügt.*

🌟 **Gemini 2.5 Flash**
:::

Und außerdem

⚡ **Multiprompting** *– Gleichzeitige KI-Generierung ist jetzt möglich.*

🧠 **Gespräche werden automatisch benannt**

🎨 **Die Einrückung bleibt in der Eingabenachricht erhalten**

## 25. April 2025
::: info Modellaktualisierung
🌟 **GPT Images** *– ersetzt DALL-E*
:::

Außerdem:

🔍 Textsuche im Gesprächsverlauf
> Drücke STRG+K oder klicke auf das Suchsymbol.

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/textual_search_record_2.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>
</div>

## 17. April 2025

::: info Modellaktualisierungen
🌟 **Gemini 2.5 Pro** *– ersetzt Gemini 2.0*

🌟 **Grok 3** *– ersetzt Grok 2*

🌟 **GPT-4.1** *– ersetzt GPT-4o*
:::

::: info Neue Bildbearbeitungswerkzeuge
🖌️ **Hintergrund entfernen** *– Lade dein Bild hoch und die KI entfernt den Hintergrund.*

🖌️ **Qualitäts-Upscaler** *– Die KI verbessert die Qualität deines Bildes.*
:::

::: info Dokumentkapazität erhöht
📁 **Maximale Eingabelänge: 4.000.000 Zeichen** *– statt 1.000.000*

📁 **Maximal 20 Dateien pro Gespräch** *– statt 10*
:::

Und außerdem

📁 **Weitere unterstützte Erweiterungen** *.fortran .twig .urdf .hcl .tsv .geojson .ass .tf .ps1 .scss .ino .pyw .odt*

🧮 **Assistentendateien verbrauchen weniger Kontingente**: *Dateien von Assistenten werden nicht bei jedem Prompt auf das Kontingent angerechnet.*

**Und außerdem zur Produktqualität:**

🦋 **Multitasking** *– Wenn du während einer Generierung den Tab wechselst, wird das Streaming fortgesetzt.*

## 7. April 2025

::: info Neue Modelle
🌐🔭 **Perplexity Deep Research**

🌟✈️ **Llama 4.0 400B Maverick** *– ersetzt Llama 3.3 70B*
:::

🧮 **GPT-4o-mini für Dokumente nach Erreichen des Kontingents**: *Wenn du dein Dokumentenkontingent erreichst, kannst du mit GPT-4o-mini weitere Dokumente hochladen.*

**Und außerdem zur Produktqualität:**

🦋 **Nicht verarbeitete Bilder erklärt** *– Die KI erklärt jetzt ausführlich, warum dein Bild nicht verarbeitet werden konnte und was du ändern kannst. Fehler werden jetzt zu Schmetterlingen.*

🦊 **Firefox ist zurück:** *UX-Probleme in Firefox wurden behoben.*

🎨 **Von der KI erzeugte Links werden in einem neuen Tab geöffnet** *– ohne das Streaming zu unterbrechen ;)*

## 1. April 2025

::: info GPT und Gemini im Web
🌐 **GPT-4o und Gemini** werden jetzt bei Bedarf zur Websuche weitergeleitet.

🌐 **Projekte mit Mammouths** *– verbessern und ersetzen die Assistenten.*
:::

🐳 **DeepSeek V3-0324** *– ersetzt die Januar-Version*

💾 **Gesprächsspeicher:** für mehr Kontext erweitert

📍 **Angepinnte Gespräche**: Neue Nachrichten heften den Chat oben in der Liste an.

🌙 **Automatischer dunkler Modus** *– wenn das System standardmäßig den dunklen Modus verwendet*

🇪🇸 **Das Mammouth spricht Spanisch.**

🇩🇪 **Das Mammouth spricht jetzt Deutsch.**

## 18. März 2025

::: info UMFASSENDE DESIGNÜBERARBEITUNG
🎨 **Modernisierte Benutzeroberfläche** *– umfassende Überarbeitung der UI/UX*

📂 **Projekte mit Mammouths** *– verbessern und ersetzen die Assistenten*
:::

### 🎨 **Modernisierte Benutzeroberfläche**

✨ **Modellschaltflächen** *– wir hoffen, dass du sie genauso 💖 findest wie wir.*

🌙 **Dunkler Modus** *– wir haben alle Farben des dunklen Modus geändert.*

🎨 **Farbe der Seitenleiste** *– jetzt sticht der Chat statt der Seitenleiste hervor.*

📝 **Texteingabe:**
  > - Modelle nach Kategorie filtern (Web, Text, Reasoning, Bild)
  > - Dokumente per Drag-and-drop hinzufügen
  > - Dokumentupload mit Farben je Dateiendung überarbeitet
  > - Schwarzes Wellensymbol für Sprachchats

🗨️ **Chatseite für große Bildschirme überarbeitet:**
  > - Kopfzeile: Die *---messages---*-Zeile wurde entfernt und die Schaltflächen wurden überarbeitet.
  > - Bildlaufleiste: Sie wurde ganz an den rechten Seitenrand verschoben.
  > - Breite: auf maximal 980 px statt 768 px erhöht


### 📂 **Organisiere deine Projekte mit Mammouths**

- **Greife über die Seitenleiste auf deine Mammouths zu** *– deine Lieblings-Mammouths sind nur einen Klick entfernt.*

- **Verschiebe deine Gespräche von einem Mammouth zu einem anderen.**

- **Bearbeite Dateien und Anweisungen auf der Promptseite.**

--> **Assistenten sind Geschichte, lang leben die Mammouths 🦣🦣🦣!**

**Und außerdem**

🖼️ **Midjourney-Schaltflächen**: Du kannst jetzt bei allen früheren Nachrichten auf „Variation“ und „Upscale“ klicken.

🗃️ **Dokumentfehler**: Die KI ignorierte manchmal deine hochgeladenen Dateien. Das haben wir behoben!

✴️ **Claude-Logo aktualisiert** *– ersetzt das Anthropic-Logo*

## 5. März 2025

::: info Sprachmodus und neues Claude-Modell
🎙️ **Sprachchat** *– erweiterter Sprachmodus von GPT*

⭐️ **Claude 3.7 Sonnet** *– ersetzt Claude 3.5*
:::

Und außerdem:

🗃️ **Dateien in deine benutzerdefinierten Mammouths hochladen**

✨ **Jahresabonnements sind verfügbar** – Du kannst deinen Plan in den [*Kontoeinstellungen*](https://mammouth.ai/app/account/settings/) ändern. Wähle dort *Abonnement verwalten* und anschließend *Abonnement ändern*.

## 17. Februar 2025

::: info Mehr Kontext!
⭐ **Maximale Eingabegröße: 1.000.000 Zeichen** *– statt 300.000*
:::

Und außerdem:

🗃️ **Maximale Anzahl Dokumente pro Chat: 10** *– statt 3*

🦣 **Maximale Größe benutzerdefinierter Mammouth-Anweisungen: 8.000 Zeichen** *– statt 2.500*

🇫🇷 **Le Mammouth parle enfin français!**

🇮🇹 **Il Mammouth parla ora italiano!**

## 3. Februar 2025

::: info Neue Reasoning-Modelle!
⭐ **DeepSeek R1**

⭐ **OpenAI o3-mini** *– ersetzt o1 und o1-mini*
:::

Und außerdem:

🧮 **Kein tägliches Reasoning-Kontingent mehr für o3 und R1** *– vorerst wie bei Text*

📣 **Mammouth-Tipps** *– [6 Tipps zu Mammouth](/de/docs/six-useful-tips-about-mammouth/)*

## 28. Januar 2025

::: info Neuer Bildgenerator
⭐ **Recraft V3**

⭐ **Recraft-svg** *– erster SVG-Generator*

> Warum haben wir Recraft hinzugefügt? [Hier erfährst du mehr](https://artificialanalysis.ai/text-to-image/arena?tab=Leaderboard).
:::

Und außerdem:

🖼️ **Stable Diffusion spricht jetzt alle Sprachen.**

🏗️ **Verwaltung unbekannter Fehler** *– mehr Informationen zu fehlgeschlagenen Prompts*

🧮 **Kontingentdetails** *– sieh nach, wann dein monatliches Bild- und Dokumentenkontingent zurückgesetzt wird.*
<br> *Hinweis: Die Anzahl der Kontingente wird nur angezeigt, wenn sie über 50 % liegt.*

∑ **Schönere Darstellung mathematischer Gleichungen** *– in LaTeX*

## 14. Januar 2025

::: info Neues Modell!
🐋 **DeepSeek V3**
:::

Und außerdem:

🛣  **Routing nach Modalität** *– Mammouth ermittelt automatisch, ob Text, Bild oder Web angefragt wird.*

🎨 **Überarbeitung der Seite für neue Gespräche:**
 - Auf kleinen Bildschirmen werden Modelle ausgeblendet, damit die Ansicht nicht überladen wirkt.
 - Ziehe Modelle per Drag-and-drop, um sie zu sortieren und dein Standardmodell auszuwählen.


<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/demo-drag-and-drop.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>
</div>


## 7. Januar 2025

::: info Mammouth für Teams
⭐ **Administrationsoberfläche** *– Teammitglieder einladen*

⭐ **Zentralisierte Rechnungsstellung**

:::

Und außerdem:

🖋️ **Mammouth-Blog** *– genau diese Website ;)*

🏗️ **Direkter Zugriff auf die Kontoeinstellungen** *– kein Stripe-Link per E-Mail mehr*

## 24. Dezember 2024

::: info Modellaktualisierungen
⭐ **o1** *– nicht mehr in der Vorschau*

⭐ **Grok 2** *– nicht mehr in der Beta*

:::

Und außerdem:

🎨 **Neues Design für die Gesprächsseite**

🏗️ **Schaltfläche zum Kopieren der Ausgabe hinzugefügt**

## 17. Dezember 2024

::: info Modellaktualisierungen
⭐ **Llama 3.3 70b** *– läuft auf Groq*

⭐ **Gemini 2.0 Flash** *– experimentelle Version*

:::

Und außerdem:

🦣 **Mehr benutzerdefinierte Mammouths erstellen** *– bis zu 8 statt 4*

🪲 **Fehler behoben, die auftraten, wenn:**
- eine mathematische Matrix in LaTeX dargestellt werden sollte
- o1 mit einem benutzerdefinierten Mammouth verwendet wurde
- Dokumente in nicht-lateinischen Schriften, etwa Persisch, hochgeladen wurden


## 10. Dezember 2024

::: info Neue Funktion
⭐
**Teile dein Gespräch über einen Link**

:::

Und außerdem:

🏗️ **Beim Kopieren und Einfügen der Ausgabe bleibt nur die relevante Formatierung erhalten.**

🎨 **Die Seitenleiste kann eingeklappt werden.**

🎨 **Neues Kontomenü mit:**

- Zugriff auf deine benutzerdefinierten Mammouths
- einem direkten Link zu genau diesen Versionshinweisen
- einem Link zum Tutorial zu Bildparametern und benutzerdefinierten Mammouths

## 4. Dezember 2024

::: info Bildmodelle

🪄 **Erstelle ein Bild aus einem Bild** — *mit FLUX Redux*

🪄 **Ändere die Textur deines Bildes** — *mit FLUX Depth*

> *[So verwendest du Bild-zu-Bild](/de/docs/how-to-use-image-to-image/)*
> 
:::

Und außerdem:

📷 **Lade Fotos von deiner Handykamera und größere Bilder hoch.**

⚡ **Die App läuft beim Wechsel zwischen Gesprächen deutlich schneller.**

🎨 **Das Design zum Hoch- und Herunterladen von Bildern wurde verbessert.**

## 27. November 2024

::: info Neues Modell!
⭐
 **Grok 2** *– neue Marke*

:::

## 20. November 2024

::: info Modellaktualisierungen
⭐
**Mistral Large 2** *– Aktualisierung auf die November-Version*

⭐ **GPT-o1 streamt jetzt**

:::

Und außerdem:

✏️ **Bearbeite deinen letzten Prompt.**

⏹️ **Stoppe die Nachrichtengenerierung.**

🎨 **Pfeil im Eingabefeld hinzugefügt**

📁 **.srt-Dateien werden unterstützt.**

## 15. November 2024

::: info Neue Kontextgröße
⭐
**Maximale Eingabelänge: 300.000 Zeichen** *– statt 10.000*

:::

Und außerdem:

⚖️ Ein Kontingent für lange Eingaben wurde hinzugefügt.
> Siehe [(i) Details](https://mammouth.ai/pricing)

🏗️ Scrolle in der Seitenleiste durch den gesamten Gesprächsverlauf.

🏗️ Beim Öffnen eines Chats wird jetzt die letzte Nachricht fokussiert.

🏗️ Nach einem neuen Prompt wird automatisch im Chat nach oben gescrollt.

🏗️ Füge Dateien aus der Zwischenablage ein.

🎨 Neue native Schriftart

## 24. Oktober 2024

::: info Webmodell
🌐 **Websuche** — *neue Kategorie*

⭐ **OpenPerplex** — *neue Marke*

:::

Und außerdem:

⭐ **Claude 3.5 Sonnet neu** — *Modellaktualisierung*

⭐ **Stable Diffusion 3.5 Large** — *Modellaktualisierung*

⭐ **GPT-o1 ist jetzt dialogfähig**

🏗️ **Füge Bilder aus der Zwischenablage ein.**

## 19. Oktober 2024

🎨 **Ausgabeformatierung**

- Tabellen anzeigen *– in Markdown*
- Überschriften: Abstands- und Größenformatierung
- mehr Abstand zwischen Absätzen

**∑ Mathematische Formeln anzeigen** — *in LaTeX*

## 10. Oktober 2024

::: info Dateien

📂 **Xlsx, Xls, CSV** — *neue Dateiendungen für Uploads verfügbar*

📂 **Pptx, Ppt** — *neue Dateiendungen für Uploads verfügbar*

:::

🔗 **URL im Prompt**: LLMs können eine Webseite prüfen, wenn du eine URL angibst.
