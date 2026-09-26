# Konnektoren (MCPs)

Konnektoren ermöglichen Mammouth, direkt im Chat mit deinen externen Tools und Diensten zu interagieren. Sie basieren auf dem **Model Context Protocol (MCP)** und erlauben der KI, deine Daten in Echtzeit zu lesen und damit zu arbeiten – ganz ohne Kopieren und Einfügen.

---

## 🔌 Was ist ein Konnektor?

Ein Konnektor ist eine Verbindung zwischen Mammouth und einem externen Dienst. Nach der Verbindung kann die KI:

- **Deine Dokumente, Tickets oder Seiten durchsuchen**
- **Bestimmte Dateien oder Datensätze lesen**
- **Elemente erstellen oder aktualisieren** (sofern der Konnektor dies unterstützt)

Du kannst es dir so vorstellen, als würdest du der KI direkten Zugriff auf deinen Arbeitsbereich geben. So kann sie den benötigten Kontext abrufen, ohne dass du Informationen manuell einfügen musst.

---

## ✅ Vorgefertigte Konnektoren

Mammouth bietet vier vorgefertigte Konnektoren, die du mit einem Klick aktivieren kannst:

| Konnektor | Funktion |
|---|---|
| **Microsoft 365** | Outlook-E-Mails, OneDrive-Dateien und mehr durchsuchen und lesen |
| **GitHub** | Repositories durchsuchen, Issues lesen sowie Code und Pull Requests ansehen |
| **Notion** | Notion-Seiten und -Datenbanken durchsuchen und lesen |
| **Atlassian** | Confluence-Seiten und Jira-Issues durchsuchen und lesen |

Eine Konfiguration ist nicht nötig: Melde dich einfach mit deinem Konto an und schon ist der Konnektor einsatzbereit.

---

## 🔧 Einen Konnektor aktivieren

1. Öffne deine **Kontoeinstellungen**: [mammouth.ai/app/account/settings](https://mammouth.ai/app/account/settings)
2. Scrolle zum Abschnitt **Konnektoren**
3. Klicke beim gewünschten Konnektor auf **Verbinden**
4. Melde dich bei deinem externen Dienst an
5. Fertig! Der Konnektor steht jetzt in deinen Chats zur Verfügung.

Sobald ein Konnektor aktiviert ist, verwendet Mammouth ihn automatisch, wenn er für deinen Prompt relevant ist.

---

## 🛠️ Eigene MCP-Konnektoren {#custom-mcp}

Wenn die vorgefertigten Konnektoren nicht ausreichen, kannst du deinen eigenen **MCP-Server** einrichten. Das ist hilfreich, wenn du ein oben nicht aufgeführtes Tool oder einen Dienst verwendest oder eine Verbindung zu deinen eigenen Diensten herstellen möchtest.

So richtest du einen eigenen MCP ein:

1. Öffne deine **Kontoeinstellungen**: [mammouth.ai/app/account/settings](https://mammouth.ai/app/account/settings)
2. Scrolle zum Abschnitt **Konnektoren**
3. Klicke auf die Kachel **Eigener MCP**
4. Aktiviere **Ich verstehe und vertraue diesem Server.** und klicke dann auf **Weiter**
5. Gib deinem Konnektor einen Namen und trage die URL deines MCP-Servers ein
6. Wenn dein Server eine Authentifizierung erfordert, wähle eine Methode: **Automatische Verbindung** (OAuth, empfohlen), **API-Schlüssel** oder **Manuelle Verbindung (Client-ID und Secret)** – siehe unten
7. Klicke auf **Eigenen MCP hinzufügen**. Dein Konnektor steht jetzt in deinen Chats zur Verfügung.

::: tip
Dein Server muss öffentlich erreichbar sein: Lokale Adressen (`localhost`, `127.0.0.1`) und private IP-Adressen werden abgelehnt. Zum Hinzufügen eines eigenen Konnektors ist ein aktives Abonnement erforderlich. Weitere Informationen zur Einrichtung eines eigenen Servers findest du in der [Dokumentation zum Model Context Protocol](https://modelcontextprotocol.io/).
:::

### Anforderungen an den Server

Mammouth verwendet ausschließlich den Transport **Streamable HTTP** und ruft `initialize` und danach `tools/list` auf.

Beim Hinzufügen ruft Mammouth `tools/list` einmal auf. Antwortet dein Server, ist der Konnektor einsatzbereit.

Wenn dein Server mit 401 oder 403 antwortet und du keinen API-Schlüssel angibst, wird der Konnektor mit ausstehender Autorisierung erstellt. Unten kannst du auswählen, wie du die Autorisierung abschließt.

### Automatische Verbindung (empfohlen)

Die **automatische Verbindung** funktioniert mit den meisten OAuth-Servern und erfordert keine Einrichtung deinerseits. Wenn du auf **Verbinden** klickst, ermittelt Mammouth deine OAuth-Endpunkte und registriert sich automatisch als Client.

Dein Server muss über HTTPS erreichbar sein, **dynamische Clientregistrierung** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) unterstützen und die Weiterleitung des Nutzers an die von Mammouth angezeigte Redirect-URI zulassen (`https://mammouth.ai/api/mcp/oauth/callback`).

Mammouth prüft zuerst `/.well-known/oauth-protected-resource` auf deinem MCP-Server. Liegt dein Autorisierungsserver auf einer anderen Domain, veröffentliche diese Datei: Ihr Feld `resource` enthält erneut die URL deines MCP-Servers, und `authorization_servers` verweist auf die andere Domain.

Wurde diese Datei nicht veröffentlicht oder enthält sie keinen Autorisierungsserver, behandelt Mammouth die Domain deines MCP-Servers als Autorisierungsserver und sucht dessen Metadaten unter `/.well-known/oauth-authorization-server` (falls diese Datei fehlt, unter `/.well-known/openid-configuration`).

```json
{
  "issuer": "https://example.com",
  "authorization_endpoint": "https://example.com/oauth/authorize",
  "token_endpoint": "https://example.com/oauth/token",
  "registration_endpoint": "https://example.com/oauth/register",
  "response_types_supported": ["code"]
}
```

Findet Mammouth keinen `registration_endpoint` – entweder weil keine Metadatendatei gefunden wurde oder weil die gefundene Datei keinen solchen Endpunkt aufführt –, wirst du stattdessen nach einer Client-ID und einem Secret gefragt. Siehe **Manuelle Verbindung** weiter unten. Du musst nicht von vorn anfangen.

### API-Schlüssel

Wenn dein Server Anfragen mit einem statischen Schlüssel authentifiziert, wähle **API-Schlüssel** und füge ihn ein. Mammouth sendet ihn bei jeder Anfrage an deinen Server als Bearer-Token (`Authorization: Bearer <key>`). Ein Server, für den ein API-Schlüssel angegeben wurde, muss über HTTPS erreichbar sein.

Du kannst den Schlüssel jederzeit in den Einstellungen des Konnektors ändern, auch nachdem du die Verbindung getrennt hast.

### Manuelle Verbindung (Client-ID und Secret)

Die **manuelle Verbindung** ist für Server gedacht, die keine dynamische Clientregistrierung unterstützen. Registriere Mammouth selbst in der Entwicklerkonsole deines Servers. Wähle dann **Manuelle Verbindung (Client-ID und Secret)** und gib die **Client-ID** und – falls dein Server sie erfordert – das **Client-Secret** ein (bei einem öffentlichen Client lässt du das Feld leer). Verwende bei der Registrierung von Mammouth auf deinem Server dieselbe Redirect-URI, die im Formular angezeigt wird.

Du kannst die ID und das Secret eines manuell registrierten Clients jederzeit in den Konnektoreinstellungen bearbeiten, auch nachdem du die Verbindung getrennt hast.

### Wenn die Verbindung abgelehnt wird

Beim Hinzufügen des Konnektors können folgende Meldungen erscheinen:

| Meldung | Ursache |
| --- | --- |
| Diese Server-URL ist nicht zulässig. | Lokale Adresse, private IP, Zugangsdaten in der URL oder anderes Protokoll als `http` / `https` |
| Ein Server mit API-Schlüssel muss HTTPS verwenden. | Du hast einen API-Schlüssel angegeben, aber die Server-URL verwendet `http` |
| Der MCP-Server hat zu lange für eine Antwort gebraucht. | Mehr als 10 Sekunden, um die Verbindung anzunehmen oder auf `tools/list` zu antworten |
| Dieser MCP-Server hat zu viele Metadaten zurückgegeben. | Mehr als 100 Tools, ein Schema mit mehr als 32 KB oder ein Toolname mit mehr als 200 Zeichen |
| Wähle einen anderen Namen für diesen MCP-Konnektor. | Der Name enthält kein alphanumerisches Zeichen oder ist für einen integrierten Konnektor reserviert |
| Der Name des MCP-Konnektors wird bereits verwendet. | Du hast bereits einen Konnektor mit diesem Namen |
| Kostenpflichtiger Zugang erforderlich. Überprüfe den Abonnementstatus in deinen Kontoeinstellungen. | Dein Abonnement ist inaktiv |
| Dein Team erlaubt keine persönlichen eigenen MCP-Konnektoren. | Dein Team hat persönliche Konnektoren deaktiviert |
| Zu viele Versuche, einen eigenen MCP zu verbinden. Bitte versuche es in einer Minute erneut. | Mehr als fünf Hinzufügungen innerhalb einer Minute |
| Verbindung zum MCP-Server nicht möglich. | Der Server ist nicht erreichbar oder hat unerwartet geantwortet |
| Verbindung zu diesem MCP-Server nicht möglich. Überprüfe die URL und versuche es erneut. | Standardmeldung für alle anderen Fälle, zum Beispiel eine URL ohne Schema (`example.com/mcp`) |
| Dieser Server hat den API-Schlüssel abgelehnt. | Mammouth hat den Schlüssel auf deinem Server getestet, der ihn jedoch abgelehnt hat |
| Diese Zugangsdaten konnten nicht gespeichert werden. | Die angegebene Client-ID oder das Client-Secret wurde abgelehnt |

Wenn du auf **Verbinden** klickst, öffnet Mammouth ein Fenster zu deinem Autorisierungsserver. Sind die oben genannten Anforderungen nicht erfüllt, wird der Vorgang in diesem Fenster nicht abgeschlossen. Sobald du es schließt, meldet Mammouth **Verbindung abgebrochen**. Gehe die Anforderungen der Reihe nach durch.

---

## 💡 Beispiele für Anwendungsfälle

- **„Finde die letzte E-Mail von Alice zum Q3-Bericht“** – der Microsoft-365-Konnektor durchsucht deinen Posteingang
- **„Fasse die offenen Issues im Frontend-Repository zusammen“** – der GitHub-Konnektor ruft die Issue-Daten ab
- **„Was steht in unserer Produkt-Roadmap zur nächsten Veröffentlichung?“** – der Notion-Konnektor durchsucht deinen Arbeitsbereich
- **„Wie ist der Status von Ticket PROJ-1234?“** – der Atlassian-Konnektor ruft das Jira-Issue ab

---

## 📚 Anleitungen zum Verbinden

Schritt-für-Schritt-Anleitungen zum Verbinden bestimmter Dienste als [eigener MCP-Konnektor](#custom-mcp):

- **[GitLab](/de/docs/connectors/guides/gitlab/)**

Weitere Anleitungen folgen.

---

## ⚠️ Gut zu wissen

- Konnektoren greifen nur auf Daten zu, wenn du ausdrücklich eine Frage stellst, für die diese Daten benötigt werden.
- Du kannst einen Konnektor jederzeit in deinen Kontoeinstellungen trennen.
- Für Teams gilt: Der **Hauptinhaber** kann Konnektoren auf der Seite **Berechtigungen** für alle Teammitglieder einrichten und bereitstellen. Siehe [Teams & Unternehmen](/de/docs/teams/).

---

## ➡️ Wie geht es weiter?

👉 **[Erste Schritte mit Mammouth](/de/docs/introduction-to-mammouth/)**

👉 **[Das richtige KI-Modell wählen](/de/docs/choosing-the-right-ai-model/)**
