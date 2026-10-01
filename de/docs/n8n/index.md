# Mammouth in n8n verwenden

Verbinde die Mammouth-API mit deinen n8n-Workflows, um Aufgaben mit KI zu automatisieren: Texte zusammenfassen, Nachrichten übersetzen oder Antworten mit Daten aus deinen anderen Tools entwerfen.

::: info Integration in Entwicklung
Diese Anleitung beschreibt die Entwicklungsversion des **Mammouth**-Nodes, die noch nicht veröffentlicht wurde. Für die folgenden Konfigurationsschritte muss dein Administrator diesen Node bereits auf deiner selbst gehosteten n8n-Instanz installiert haben. Die Verfügbarkeit im n8n-Katalog oder auf n8n Cloud ist nicht garantiert.
:::

## Was ist n8n?

[n8n](https://n8n.io/) ist ein Automatisierungstool, mit dem du Anwendungen und Dienste in einem visuellen Editor verbinden kannst.

Eine Automatisierung, auch **Workflow** genannt, besteht aus **Nodes** (Knoten). Jeder Node führt einen Schritt aus: den Workflow auslösen, Daten abrufen, eine API aufrufen oder ein Ergebnis an eine andere Anwendung senden.

Zum Beispiel: **Formulareingang → Zusammenfassung mit Mammouth → Zusammenfassung per E-Mail versenden**. Du konfigurierst die Schritte und die Daten, die zwischen ihnen übergeben werden, ohne die gesamte Integration selbst entwickeln zu müssen.

## Wie installiere ich n8n?

Um n8n zu installieren und zu konfigurieren, folge der [offiziellen n8n-Dokumentation zum Selbsthosting](https://docs.n8n.io/hosting/). Sie beschreibt die verfügbaren Methoden, ihre Voraussetzungen und Sicherheitsempfehlungen.

n8n bietet auch einen gehosteten Dienst, **n8n Cloud**, für den du nichts installieren musst. Ein n8n-Cloud-Konto bietet jedoch nicht automatisch Zugriff auf den Mammouth-Node in Entwicklung.

**Die Installation von n8n und das Hinzufügen des Mammouth-Nodes sind zwei getrennte Schritte.** Prüfe vor dem Fortfahren, ob **Mammouth** in der Node-Auswahl deiner Instanz erscheint. Falls nicht, wende dich wegen des Ladens der Entwicklungsversion an deinen Administrator.

## Was ermöglicht die Mammouth-Integration?

Der **Mammouth**-Node ruft die Mammouth-API aus einem Workflow auf. Du kannst Daten eines vorherigen Nodes in deinem Prompt verwenden, ein Modell auswählen und die Antwort an die nächsten Schritte weitergeben.

Verwende zunächst **Chat → Complete**, um:

- Nachrichten, Besprechungsnotizen oder bereits in Text umgewandelte Dokumente **zusammenzufassen**.
- Inhalte nach deinen Anweisungen zu **entwerfen oder umzuformulieren**.
- Texte zu **übersetzen** oder Anfragen nach Kategorien zu **klassifizieren**.

Die Entwicklungsversion bietet folgende Ressourcen:

| Ressource | Operation | Zweck |
| --- | --- | --- |
| **Chat** | **Complete** | Eine Antwort anhand von Nachrichten und Anweisungen generieren. |
| **Image** | **Create** | Die Bildgenerierung anhand eines Prompts anfordern, sofern Modell und API dies unterstützen. |
| **Text** | **Complete**, **Edit**, **Moderate** | Endpunkte für Textvervollständigung, Bearbeitung oder Moderation aufrufen, sofern die API diese unterstützt. |

::: warning Kompatibilität der Operationen
Eine im Node angezeigte Operation garantiert nicht, dass die Mammouth-API sie unterstützt. Die Operationen **Image** und **Text** sowie ihre Optionen müssen mit dem ausgewählten Modell geprüft werden. Die Modellliste wird nicht nach Operation gefiltert: Wähle ein für deine Aufgabe geeignetes Modell.

Dieser Node ist ein **Aktions-Node**, kein **Chat Model**-Sub-Node, der mit dem Modellanschluss eines n8n-**AI Agent** verbunden werden kann.
:::

## Schritt 1 — Einen API-Schlüssel in Mammouth erstellen

Um Mammouth mit n8n zu verbinden, verwendest du einen **Mammouth-API-Schlüssel**, nicht dein Anmeldepasswort. In n8n wird dieser Schlüssel in **Credentials** gespeichert: einer wiederverwendbaren Authentifizierungskonfiguration für deine Nodes.

1. Melde dich bei deinem Mammouth-Konto an.
2. Öffne die [Mammouth-API-Einstellungen](https://mammouth.ai/app/account/settings/api).
3. Erstelle einen neuen API-Schlüssel. Verwende einen eigenen Schlüssel für deine n8n-Automatisierungen, um ihre Nutzung leichter nachverfolgen zu können.
4. Kopiere den Schlüssel und bewahre ihn für den nächsten Schritt sicher auf.
5. Prüfe, ob du **API-Guthaben** hast. Auf derselben Seite kannst du deinen Guthabenstand einsehen und Guthaben kaufen.

Aufrufe aus n8n verbrauchen dein Mammouth-API-Guthaben. Informationen zum Zugang und zu den Preisen findest du in der [API-Dokumentation](/de/docs/api-quick-start/).

::: warning Schütze deinen API-Schlüssel
Teile deinen Schlüssel niemals in einem Prompt, Screenshot, Workflow-Export oder Code-Repository. Speichere ihn ausschließlich im dafür vorgesehenen Feld der n8n-Credentials. Falls er offengelegt wurde, widerrufe ihn in Mammouth und ersetze ihn in n8n.
:::

## Schritt 2 — Credentials in n8n hinzufügen

1. Öffne oder erstelle einen Workflow in n8n.
2. Füge einen **Mammouth**-Node hinzu.
3. Erstelle in der Credentials-Auswahl des Nodes neue Credentials vom Typ **Mammouth API**.
4. Gib ihnen einen erkennbaren Namen, zum Beispiel **Mammouth — n8n**.
5. Fülle die folgenden beiden Felder aus:

| Feld | Wert |
| --- | --- |
| **API Base URL** | `https://api.mammouth.ai/v1` |
| **API Key** | Der in Mammouth erstellte API-Schlüssel ohne das Präfix `Bearer`. |

6. Klicke auf **Save** und prüfe das Ergebnis des Verbindungstests. Wiederhole den Test bei Bedarf.
7. Wähle diese Credentials in deinem **Mammouth**-Node aus.

Die Basis-URL ist nicht vorausgefüllt: Gib die vollständige Adresse mit `/v1` ein, ohne `/chat/completions` anzuhängen. Der Node ergänzt den Pfad jeder Operation und das Authentifizierungspräfix `Bearer` automatisch.

Der Credentials-Test ruft `GET https://api.mammouth.ai/v1/models` auf. Ein erfolgreicher Test bestätigt den Zugriff auf die Modellliste, nicht die Kompatibilität aller Operationen. Anschließend kannst du dieselben Credentials in deinen anderen Mammouth-Nodes wiederverwenden.

## Schritt 3 — Deinen ersten Workflow testen

1. Füge einen **Manual Trigger** hinzu und verbinde ihn mit dem **Mammouth**-Node.
2. Wähle deine **Mammouth API**-Credentials aus.
3. Wähle **Resource → Chat** und anschließend **Operation → Complete**.
4. Wähle unter **Model** ein verfügbares Chatmodell aus der Liste.
5. Klicke unter **Prompt** auf **Add Message**, wähle **Role → User** und gib unter **Content** ein: „Erkläre in drei Sätzen, was ein n8n-Workflow ist.“
6. Führe den Workflow aus und prüfe die Ausgabe des Mammouth-Nodes.

Wenn **Simplify** aktiviert ist, befindet sich der Antworttext in `message.content`. Du kannst ihn an einen anderen Node weitergeben, beispielsweise um ihn per E-Mail zu versenden oder in deinen Arbeitstools zu speichern.

## Fehlerbehebung

| Problem | Was du prüfen solltest |
| --- | --- |
| Der **Mammouth**-Node ist nicht auffindbar | Bitte deinen Administrator zu prüfen, ob die Integration installiert und geladen ist, und lade dann die n8n-Oberfläche neu. |
| Der Credentials-Test schlägt fehl | Prüfe die Basis-URL, den Schlüssel ohne `Bearer` oder zusätzliche Leerzeichen und den Netzwerkzugriff deiner Instanz auf die Mammouth-API. |
| Es werden keine Modelle angezeigt | Prüfe die Credentials und den Zugriff auf `/v1/models`. |
| Die Ausführung schlägt trotz erfolgreichem Test fehl | Prüfe dein API-Guthaben, das ausgewählte Modell und die Parameter der Operation. Der Credentials-Test führt keine Generierung durch. |
| Eine **Image**- oder **Text**-Operation schlägt fehl | Prüfe, ob API und Modell den Endpunkt und seine Parameter unterstützen; beginne mit **Chat → Complete**, um die Textgenerierung zu testen. |

## Siehe auch

- [Offizielle n8n-Dokumentation](https://docs.n8n.io/)
- [n8n installieren und hosten](https://docs.n8n.io/hosting/)
- [Mammouth-API-Dokumentation](/de/docs/api-quick-start/)
- [API-Schlüssel und Guthaben verwalten](https://mammouth.ai/app/account/settings/api)