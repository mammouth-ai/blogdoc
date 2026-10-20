# Meta Ads verbinden (MCP)

Meta bietet einen offiziellen MCP-Server für Meta Ads an: Damit kann Mammouth die Performance deiner Kampagnen lesen und, wenn du es erlaubst, Kampagnen, Anzeigengruppen und Anzeigen erstellen und verwalten. Diese Anleitung zeigt dir, wie du ihn als [benutzerdefinierten MCP-Konnektor](../../#custom-mcp) mit Mammouth verbindest.

::: tip Bevor du beginnst
Du benötigst:
- Ein Facebook-Konto mit Zugriff auf die Werbekonten, die du nutzen möchtest
- Ein [Meta for Developers](https://developers.facebook.com/)-Konto (kostenlos, melde dich mit demselben Facebook-Konto an)
:::

## Server-URL

Verwende `https://mcp.facebook.com/ads` genau so wie angegeben: Hänge kein `/mcp` an, sonst antwortet Meta, dass der Server nicht existiert.

---

## Automatische Verbindung (OAuth)

Nicht verfügbar. Meta akzeptiert die automatische Registrierung nur für MCP-Clients, die es einzeln freigegeben hat (Claude, ChatGPT, Cursor, Codex…), und Mammouth steht noch nicht auf dieser Liste. Wenn du es versuchst, schlägt die Verbindung mit `Dynamic registration is not available for this client` fehl. Verwende stattdessen die **manuelle Verbindung** unten.

## Manuelle Verbindung (Client-ID) – empfohlen

Du erstellst einmalig deine eigene Meta-App und meldest dich dann mit Facebook an. Mammouth erneuert den Zugriff danach automatisch.

### 1. Meta-App erstellen

1. Öffne [developers.facebook.com/apps](https://developers.facebook.com/apps) und klicke auf **Create App**.
2. Gib der App einen Namen (zum Beispiel `Mammouth Meta Ads`) und fahre fort.
3. Wähle im Schritt **Use cases** **Ads and monetization** → **Create & manage ads with ads MCP server**.
4. Wähle im Schritt **Business** das Business-Portfolio aus, dem deine Werbekonten gehören. Wenn deine Werbekonten nicht über ein Business-Portfolio verwaltet werden, wähle **I don't want to connect a business portfolio yet**: Du kannst später eines hinzufügen.
5. Schließe den Assistenten ab, um die App zu erstellen.

<!-- screenshot: use case selection -->

::: info
Der Ads-MCP-Use-Case fügt deiner App außerdem **Facebook Login for Business** hinzu, das du in Schritt 3 konfigurierst.
:::

### 2. Berechtigungen prüfen {#permissions}

Öffne in deiner App **Use cases**, klicke beim Ads-MCP-Server-Use-Case auf **Customize** und öffne dann den Tab **Permissions and features**. Stelle sicher, dass diese Berechtigungen hinzugefügt sind:

- `ads_mcp_management` (erforderlich)
- `ads_read` und `ads_management`
- `business_management`, `catalog_management`
- `pages_show_list`, `pages_manage_ads`
- `instagram_basic`, `instagram_branded_content_ads_brand`

Mammouth fordert alle Berechtigungen an, die Meta für seinen MCP-Server auflistet. Fehlt eine davon, kann das Facebook-Anmeldefenster fehlschlagen.

<!-- screenshot: permissions and features tab -->

**Advanced Access** brauchst du nur, wenn du Anzeigen im Auftrag anderer Unternehmen verwaltest (Agenturen, Partner). Dafür ist das App Review von Meta nötig. Für deine eigenen Werbekonten reicht der Standardzugriff.

### 3. Redirect-URI von Mammouth hinzufügen

1. Füge in Mammouth einen benutzerdefinierten MCP-Konnektor mit der Server-URL oben hinzu und wähle **Manuelle Verbindung**.
2. Kopiere die im Formular angezeigte **Redirect-URI**. Lass das Formular geöffnet.
3. Öffne in deiner Meta-App **Facebook Login for Business** → **Settings**.
4. Aktiviere **Client OAuth login** und **Web OAuth login**.
5. Füge die Redirect-URI zeichengenau unter **Valid OAuth Redirect URIs** ein und klicke auf **Save Changes**.

<!-- screenshot: Facebook Login for Business settings -->

### 4. In Mammouth verbinden

1. Öffne in deiner Meta-App **App settings** → **Basic** und kopiere die **App ID**.
2. Füge sie im Formular für die manuelle Verbindung in Mammouth als **Client-ID** ein und **lass Client-Secret leer**.
3. Klicke auf **Verbinden**, melde dich mit Facebook an, akzeptiere alle angeforderten Berechtigungen und wähle die Werbekonten aus, die Mammouth nutzen darf.

<!-- screenshot: Mammouth manual connection form -->

::: warning Gib das App Secret nicht ein
Deine Meta-App hat ein **App Secret**, aber der MCP-Server von Meta verwendet es nicht: Die Authentifizierung basiert auf PKCE. Wenn du das Feld Client-Secret ausfüllst, lehnt Mammouth es mit `This server does not support the submitted client authentication method` ab.
:::

::: info Entwicklungsmodus
Solange deine Meta-App im Modus **Development** ist, können sich nur Personen mit einer Rolle in der App (Admin, Entwickler, Tester) verbinden. Damit Teammitglieder deine App nutzen können, füge sie unter **App roles** → **Roles** hinzu.
:::

## API-Schlüssel (Zugriffstoken)

Meta akzeptiert auch ein Zugriffstoken, das als Bearer-Token gesendet wird. Das ist schneller eingerichtet, aber du musst das Token ersetzen, wenn es abläuft.

1. Erzeuge ein Token, entweder:
   - ein **User Access Token** mit dem [Graph API Explorer](https://developers.facebook.com/tools/explorer/), inklusive der oben aufgeführten Berechtigungen. Es läuft nach etwa einer Stunde ab, oder nach etwa 60 Tagen, wenn es gegen ein langlebiges Token getauscht wird.
   - ein **System User Access Token** aus deinem Business-Portfolio ([Anleitung von Meta](https://developers.facebook.com/docs/business-management-apis/system-users)). Nur System User mit der Rolle **Employee** funktionieren: Tokens von Admin-System-Usern werden abgelehnt.
2. Füge in Mammouth einen benutzerdefinierten MCP-Konnektor mit der Server-URL oben hinzu, wähle **API-Schlüssel** und füge das Token ein.

---

## Fehlerbehebung

| Meldung | Lösung |
| --- | --- |
| `Dynamic registration is not available for this client` | Du hast die automatische Verbindung gewählt. Verwende die **manuelle Verbindung**. |
| `MCP server not found for path: /ads/mcp` | Entferne `/mcp` aus der Server-URL. |
| Facebook meldet, dass die Redirect-URI nicht erlaubt ist | Die Redirect-URI unter **Valid OAuth Redirect URIs** stimmt nicht exakt mit der von Mammouth überein. Kopiere sie erneut aus dem Formular für die manuelle Verbindung. |
| Facebook meldet ungültige Berechtigungen oder Scopes | Deiner App fehlt eine Berechtigung. Siehe [Schritt 2](#permissions). |
| `This server does not support the submitted client authentication method` | Lass **Client-Secret** leer. |
| `Error POSTing to endpoint` (oft mit einem 502) | Die Verbindung hat funktioniert, aber Meta lehnt die Anfragen ab: Meist fehlt `ads_mcp_management`. Füge den Ads-MCP-Use-Case hinzu (Schritt 1), trenne dann den Konnektor in Mammouth und verbinde ihn erneut, damit die neue Berechtigung erteilt wird. |

---

## ➡️ Wie geht es weiter?

👉 **[Zurück zu Konnektoren (MCPs)](../../)**
