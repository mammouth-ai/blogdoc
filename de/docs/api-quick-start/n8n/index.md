# Mammouth in n8n verwenden

Verbinde die Mammouth-API mit deinen n8n-Workflows, um Aufgaben mit KI zu automatisieren: Texte zusammenfassen, Nachrichten übersetzen oder Antworten mit Daten aus deinen anderen Tools entwerfen.

::: info Auf n8n Cloud verfügbar
Installiere **Mammouth** über den Bereich für Community-Nodes in n8n Cloud oder installiere das Paket `n8n-nodes-mammouth` auf einer selbst gehosteten Instanz. Das Paket enthält sowohl den Aktions-Node **Mammouth** als auch den KI-Sub-Node **Mammouth Chat Model**.
:::

## Was ist n8n?

[n8n](https://n8n.io/) ist ein Automatisierungstool, mit dem du Anwendungen und Dienste in einem visuellen Editor verbinden kannst.

Eine Automatisierung, auch **Workflow** genannt, besteht aus **Nodes** (Knoten). Jeder Node führt einen Schritt aus: den Workflow auslösen, Daten abrufen, eine API aufrufen oder ein Ergebnis an eine andere Anwendung senden.

Zum Beispiel: **Formulareingang → Zusammenfassung mit Mammouth → Zusammenfassung per E-Mail versenden**. Du konfigurierst die Schritte und die Daten, die zwischen ihnen übergeben werden, ohne die gesamte Integration selbst entwickeln zu müssen.

## Wie installiere ich den Mammouth-Node?

### Auf n8n Cloud

Öffne im Workflow-Editor den Node-Bereich und suche nach **Mammouth**. Wähle den Node unter **More from the community** aus und klicke auf **Install**. Nur der Instanzinhaber und Administratoren können ihn installieren; danach stehen die Nodes allen Mitgliedern der Instanz zur Verfügung.

### Auf selbst gehostetem n8n

Öffne auf einer Instanz, die Community-Nodes zulässt, **Settings → Community Nodes → Install**, gib `n8n-nodes-mammouth` ein und bestätige die Installation. Weitere Installationsmethoden findest du in der [offiziellen n8n-Dokumentation zum Selbsthosting](https://docs.n8n.io/hosting/).

## Was können die Mammouth-Nodes?

Das Paket enthält zwei Nodes. Verwende **Mammouth** für API-Aktionen in einem Workflow oder **Mammouth Chat Model** als Sprachmodell für einen n8n-**AI Agent** oder eine **Chain**.

### Mammouth-Aktions-Node

| Ressource → Operation | Funktion |
| --- | --- |
| **Chat → Send Message** | Eine Unterhaltung an ein Modell senden, um Texte zu verfassen, zusammenzufassen, zu übersetzen, zu klassifizieren oder Informationen zu extrahieren. Füge **Instructions (System)**, **User** und vorherige **AI (Assistant)**-Nachrichten hinzu; verwende n8n-Ausdrücke für Daten aus vorherigen Nodes. |
| **Image → Analyze** | Text zusammen mit einem oder mehreren Bildern senden. Wähle alle Bildanhänge des vorherigen Nodes, bestimmte Binärfelder, öffentliche Bild-URLs oder nur Text. Nützlich zum Lesen oder Zusammenfassen von Bildanhängen. |
| **Image → Generate** | Bilder anhand einer Beschreibung erstellen und als Binärdateien oder temporäre Bild-URLs zurückgeben. |
| **Text → Continue** | Einen Text-Prompt fortsetzen (Autovervollständigung); die Operation befolgt keine Anweisungen. |
| **Text → Edit** | Text gemäß einer Anweisung umschreiben, sofern die API den `/edits`-Endpunkt unterstützt. |
| **Text → Check Content Safety** | Text nach Kategorien auf unsichere Inhalte prüfen; die Operation generiert keine Antwort und benötigt ein kompatibles Moderationsmodell. |

Die Modellliste wird von deiner API geladen. Chat-Antworten lassen sich auf `message.content` vereinfachen; die Bildanalyse kann ihre Antwort in `content` zurückgeben. Zu den Chat- und Textoptionen gehören Kreativität (**Temperature**), Wortauswahl (**Top P**), Wiederholungs- und Themenstrafen, maximale Antwortlänge und die Anzahl der Antworten. Die Bildgenerierung kann mehrere Bilder zurückgeben; die Optionen **Quality**, **Resolution** und **Style** hängen vom gewählten DALL·E-Modell ab.

### Mammouth Chat Model

Verbinde diesen **Chat Model**-Sub-Node mit einem **AI Agent** oder einer n8n-**Chain**. Er bietet dynamisch geladene Modelle und Optionen für Antwortlänge, Text- oder JSON-Ausgabe, Kreativität, Strafwerte, Zeitlimit und Wiederholungsversuche.

::: warning Kompatibilität der Operationen
Die Modellliste wird nicht nach Operation gefiltert. Eine in n8n angezeigte Operation wird nicht zwangsläufig von deiner API oder dem ausgewählten Modell unterstützt. Insbesondere hängen Bildanalyse und -generierung sowie die älteren Text-Endpunkte von der API-Unterstützung ab. Verwende **Chat → Send Message** für allgemeine Textgenerierung. **Text → Edit** und **Text → Check Content Safety** benötigen kompatible `/edits`- und `/moderations`-Endpunkte; gib die unterstützten Modell-IDs manuell ein.
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

Die Basis-URL ist nicht vorausgefüllt: Gib die vollständige Adresse mit `/v1` ein, ohne einen Operationspfad wie `/chat/completions` anzuhängen. Der Node ergänzt den benötigten Pfad und das Authentifizierungspräfix `Bearer` automatisch. Die Credentials akzeptieren auch die Basis-URL und den Schlüssel einer OpenAI-kompatiblen API; verwende den Schlüssel dieses Anbieters und prüfe, ob er die benötigten Endpunkte und Modelle unterstützt.

Der Credentials-Test ruft `GET <API Base URL>/models` auf. Ein erfolgreicher Test bestätigt den Zugriff auf die Modellliste, nicht die Kompatibilität aller Operationen. Anschließend kannst du dieselben Credentials in beiden Mammouth-Nodes verwenden.

## Schritt 3 — Deinen ersten Workflow testen

1. Füge einen **Manual Trigger** hinzu und verbinde ihn mit dem **Mammouth**-Node.
2. Wähle deine **Mammouth API**-Credentials aus.
3. Wähle **Resource → Chat** und anschließend **Operation → Send Message**.
4. Wähle unter **Model** ein verfügbares Chatmodell aus der Liste.
5. Klicke unter **Prompt** auf **Add Message**, wähle **Role → User** und gib unter **Content** ein: „Erkläre in drei Sätzen, was ein n8n-Workflow ist.“
6. Führe den Workflow aus und prüfe die Ausgabe des Mammouth-Nodes.

Wenn **Simplify** aktiviert ist, befindet sich der Antworttext in `message.content`. Du kannst ihn an einen anderen Node weitergeben, beispielsweise um ihn per E-Mail zu versenden oder in deinen Arbeitstools zu speichern.

## Fehlerbehebung

| Problem | Was du prüfen solltest |
| --- | --- |
| Der **Mammouth**-Node ist nicht auffindbar | Bitte auf n8n Cloud den Instanzinhaber oder einen Administrator, den Node unter **More from the community** zu installieren. Prüfe bei selbst gehostetem n8n, ob Community-Nodes aktiviert und das Paket installiert ist, und lade dann den Editor neu. |
| Der Credentials-Test schlägt fehl | Prüfe die Basis-URL, den Schlüssel ohne `Bearer` oder zusätzliche Leerzeichen und den Netzwerkzugriff deiner Instanz auf die Mammouth-API. |
| Es werden keine Modelle angezeigt | Prüfe die Credentials und den Zugriff auf `/v1/models`. |
| Die Ausführung schlägt trotz erfolgreichem Test fehl | Prüfe dein API-Guthaben, das ausgewählte Modell und die Parameter der Operation. Der Credentials-Test führt keine Generierung durch. |
| Eine **Image**- oder **Text**-Operation schlägt fehl | Prüfe, ob API und Modell den Endpunkt und seine Parameter unterstützen; beginne mit **Chat → Send Message**, um die Textgenerierung zu testen. |

## Siehe auch

- [Offizielle n8n-Dokumentation](https://docs.n8n.io/)
- [n8n installieren und hosten](https://docs.n8n.io/hosting/)
- [Mammouth-API-Dokumentation](/de/docs/api-quick-start/)
- [API-Schlüssel und Guthaben verwalten](https://mammouth.ai/app/account/settings/api)
- [Quellcode der Mammouth-n8n-Integration](https://github.com/mammouth-ai/n8n-integration)
- [npm-Paket](https://www.npmjs.com/package/n8n-nodes-mammouth)