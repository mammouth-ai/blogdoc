# Konnektoren (MCPs)

Konnektoren ermöglichen Mammouth, direkt im Chat mit deinen externen Tools und Diensten zu interagieren. Sie basieren auf dem **Model Context Protocol (MCP)** und erlauben der KI, deine Daten in Echtzeit zu lesen und zu nutzen – ganz ohne Kopieren und Einfügen.

---

## ✅ Vorgefertigte Konnektoren

Mammouth bietet 4 vorgefertigte Konnektoren, die du mit einem Klick in [deinen Konnektoreinstellungen](https://mammouth.ai/app/account/settings/connectors) aktivieren kannst:

| Konnektor | Funktion |
|---|---|
| **Microsoft 365** | Outlook-E-Mails, OneDrive-Dateien und mehr durchsuchen und lesen |
| **GitHub** | Repositories durchsuchen, Issues lesen sowie Code und Pull Requests ansehen |
| **Notion** | Notion-Seiten und -Datenbanken durchsuchen und lesen |
| **Atlassian** | Confluence-Seiten und Jira-Issues durchsuchen und lesen |

Eine Konfiguration ist nicht nötig: Melde dich einfach mit deinem Konto an und schon ist der Konnektor einsatzbereit.

---

## 🛠️ Eigene MCP-Konnektoren {#custom-mcp}

Wenn die vorgefertigten Konnektoren nicht ausreichen, kannst du deinen eigenen **MCP-Server** einrichten. Das ist hilfreich, wenn du ein oben nicht aufgeführtes Tool oder einen Dienst verwendest oder eine Verbindung zu deinen eigenen Diensten herstellen möchtest.

::: tip Hilfe beim Verbinden eines Dienstes?
Bitte unseren [MCP-Assistenten](https://mammouth.ai/app/assistants/join/b7e4fe25-aa1e-4fa3-9548-31ddabdad524) um eine Schritt-für-Schritt-Anleitung zur Einrichtung deines Konnektors.
:::

So richtest du einen eigenen MCP ein:

1. Wähle auf der **Konnektorenseite** **Eigenen MCP hinzufügen** aus: [mammouth.ai/app/account/settings/connectors](https://mammouth.ai/app/account/settings/connectors)
2. Aktiviere **Ich verstehe und vertraue diesem Server.** und klicke dann auf **Weiter**
3. Gib deinem Konnektor einen Namen und trage die URL deines MCP-Servers ein
4. Wenn dein Server eine Authentifizierung erfordert, wähle eine Methode: **Automatische Verbindung** (OAuth, empfohlen), **API-Schlüssel** oder **Manuelle Verbindung (Client-ID und Secret)** – siehe unten
5. Sobald die Verbindung bestätigt wurde, steht dein Konnektor in deinen Chats zur Verfügung.

::: info URL finden (Schritt 3)
Sieh in der offiziellen MCP-Dokumentation des Tools oder Dienstes nach, den du verbinden möchtest. Suche zum Beispiel nach „MCP“ zusammen mit dem Namen des Tools und kopiere die in der Dokumentation angegebene URL. Sie wird normalerweise ausdrücklich genannt, zum Beispiel `https://mcp.stripe.com` oder `https://mapstools.googleapis.com/mcp`.
:::

::: tip
Dein Server muss öffentlich erreichbar sein: Lokale Adressen (`localhost`, `127.0.0.1`) und private IP-Adressen werden abgelehnt. Zum Hinzufügen eines eigenen Konnektors ist ein aktives Abonnement erforderlich. Weitere Informationen zur Einrichtung eines eigenen Servers findest du in der [Dokumentation zum Model Context Protocol](https://modelcontextprotocol.io/).
:::

### Anforderungen an den Server

Mammouth verwendet ausschließlich den Transport **Streamable HTTP** und ruft zuerst `initialize` und dann `tools/list` auf.

Beim Hinzufügen ruft Mammouth `tools/list` einmal auf. Antwortet dein Server, ist der Konnektor einsatzbereit.

Wenn dein Server mit 401 oder 403 antwortet und du keinen API-Schlüssel angibst, wird der Konnektor mit ausstehender Autorisierung erstellt. Unten kannst du auswählen, wie du die Autorisierung abschließt.

### Automatische Verbindung (empfohlen)

Die **automatische Verbindung** funktioniert mit den meisten OAuth-Servern und erfordert keine Einrichtung deinerseits. Wenn du auf **Verbinden** klickst, ermittelt Mammouth deine OAuth-Endpunkte und registriert sich automatisch als Client.

Dein Server muss über HTTPS erreichbar sein, **dynamische Clientregistrierung** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) unterstützen und die Weiterleitung des Nutzers an die von Mammouth angezeigte Redirect-URI zulassen (`https://mammouth.ai/api/mcp/oauth/callback`).

Mammouth prüft zuerst `/.well-known/oauth-protected-resource` auf deinem MCP-Server. Liegt dein Autorisierungsserver auf einer anderen Domain, veröffentliche diese Datei: Ihr Feld `resource` enthält erneut die URL deines MCP-Servers, und `authorization_servers` verweist auf diese Domain.

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

Beim Hinzufügen des Konnektors:

| Meldung | Ursache |
| --- | --- |
| This server URL is not allowed. | Lokale Adresse, private IP, Zugangsdaten in der URL oder anderes Protokoll als `http` / `https` |
| A server given an API key must use HTTPS. | Du hast einen API-Schlüssel angegeben, aber die Server-URL verwendet `http` |
| The MCP server took too long to respond. | Mehr als 10 Sekunden, um die Verbindung anzunehmen oder auf `tools/list` zu antworten |
| This MCP server returned too much metadata. | Mehr als 100 Tools, ein Schema mit mehr als 32 KB oder ein Toolname mit mehr als 200 Zeichen |
| Choose a different name for this MCP connector. | Der Name enthält kein alphanumerisches Zeichen oder ist für einen integrierten Konnektor reserviert |
| MCP connector name is already in use. | Du hast bereits einen Konnektor mit diesem Namen |
| Paid access required. Check your subscription state in your Account settings. | Dein Abonnement ist inaktiv |
| Your team does not allow personal custom MCP connectors. | Dein Team hat persönliche eigene MCP-Konnektoren deaktiviert |
| Too many custom MCP connection attempts. Please try again in a minute. | Mehr als fünf Hinzufügungen innerhalb einer Minute |
| Could not connect to this MCP server. | Der Server ist nicht erreichbar oder hat unerwartet geantwortet |
| Could not connect to this MCP server. Check the URL and try again. | Standardmeldung für alle anderen Fälle, zum Beispiel eine URL ohne Schema (`example.com/mcp`) |
| This server refused the API key. | Mammouth hat den Schlüssel auf deinem Server getestet, der ihn jedoch abgelehnt hat |
| Could not save these credentials. | Die angegebene Client-ID oder das Client-Secret wurde abgelehnt |

Wenn du auf **Verbinden** klickst, öffnet Mammouth ein Fenster zu deinem Autorisierungsserver. Sind die oben genannten Anforderungen nicht erfüllt, wird der Vorgang nicht abgeschlossen. Sobald du das Fenster schließt, meldet Mammouth **Connection cancelled**. Gehe die Anforderungen der Reihe nach durch.

---

## 💡 Beispiele für Anwendungsfälle

- **„Finde die letzte E-Mail von Alice zum Q3-Bericht“** – der Microsoft-365-Konnektor durchsucht deinen Posteingang
- **„Fasse die offenen Issues im Frontend-Repository zusammen“** – der GitHub-Konnektor ruft die Issue-Daten ab
- **„Was steht in unserer Produkt-Roadmap zur nächsten Veröffentlichung?“** – der Notion-Konnektor durchsucht deinen Arbeitsbereich
- **„Wie ist der Status von Ticket PROJ-1234?“** – der Atlassian-Konnektor ruft das Jira-Issue ab

---

## 📚 Anleitungen zum Verbinden

Schritt-für-Schritt-Anleitungen zum Verbinden bestimmter Dienste als [eigener MCP-Konnektor](#custom-mcp):

- **[GitLab](./guides/gitlab/)**
- **[Meta Ads](./guides/meta-ads/)**

Weitere Anleitungen folgen.

---

## ⚠️ Gut zu wissen

- Konnektoren greifen nur auf Daten zu, wenn du ausdrücklich eine Frage stellst, für die diese Daten benötigt werden.
- Du kannst einen Konnektor jederzeit in deinen Kontoeinstellungen trennen.
- Für Teams gilt: Der **Hauptinhaber** kann Konnektoren auf der Seite **Berechtigungen** für alle Teammitglieder einrichten und bereitstellen. Siehe [Teams & Unternehmen](../teams/).

---

## ➡️ Wie geht es weiter?

👉 **[Erste Schritte mit Mammouth](../introduction-to-mammouth/)**

👉 **[Das richtige KI-Modell wählen](../choosing-the-right-ai-model/)**
