# GitLab verbinden (MCP)

GitLab enthält einen offiziellen MCP-Server, der direkt in deiner Instanz integriert ist – eine Drittanbieter-Brücke ist nicht nötig. Diese Anleitung zeigt dir, wie du ihn als [benutzerdefinierten MCP-Konnektor](../../#custom-mcp) mit Mammouth verbindest – mit jeder der drei Authentifizierungsmethoden.

::: tip Bevor du beginnst
Auf GitLab benötigst du:
- GitLab 18.6 oder höher (der MCP-Server befindet sich in der Beta und ist im Free-Tarif verfügbar)
- GitLab Duo auf **Always on** oder **On by default** eingestellt
- Aktivierte Beta- und experimentelle Funktionen – auf Self-Managed/Dedicated auf Instanzebene oder auf GitLab.com für die Gruppe der obersten Ebene
- Erlaubten Zugriff auf den MCP-Server – auf Self-Managed/Dedicated auf Instanzebene oder auf GitLab.com für die Gruppe der obersten Ebene

In der [Dokumentation zum GitLab-MCP-Server](https://docs.gitlab.com/user/model_context_protocol/mcp_server/) erfährst du, wie du diese Optionen aktivierst.
:::

## Server-URL

Verwende auf Self-Managed oder Dedicated `https://<your-gitlab-instance>/api/v4/mcp` oder auf GitLab.com `https://gitlab.com/api/v4/mcp`. Für alle drei Verbindungsmethoden unten wird dieselbe URL verwendet.

---

## Automatische Verbindung (OAuth)

Der MCP-Server von GitLab unterstützt die **dynamische Clientregistrierung** von OAuth 2.0. Deshalb funktioniert die automatische Verbindung, ohne dass du auf der GitLab-Seite etwas konfigurieren musst.

1. Füge in Mammouth einen benutzerdefinierten MCP-Konnektor mit der Server-URL oben hinzu.
2. Wähle **Automatische Verbindung**.
3. Klicke auf **Verbinden**. Mammouth registriert sich bei GitLab und öffnet das Autorisierungsfenster – melde dich an und genehmige den Zugriff.

## API-Schlüssel

Der MCP-Server von GitLab unterstützt derzeit nur OAuth – er akzeptiert keinen statischen API-Schlüssel und kein Personal Access Token als Bearer-Anmeldedaten ([GitLab verfolgt die Unterstützung von PATs als Feature-Anfrage](https://gitlab.com/gitlab-org/gitlab/-/issues/586184); sie wurde noch nicht umgesetzt). Verwende stattdessen **Automatische Verbindung** oder **Manuelle Verbindung**.

## Manuelle Verbindung (Client-ID und Secret)

Erfordert GitLab 19.3 oder höher – in älteren Versionen wird der Scope **mcp** im OAuth-Anwendungsformular nicht angezeigt.

Verwende diese Methode, wenn die dynamische Clientregistrierung auf deiner GitLab-Instanz deaktiviert ist oder du lieber eine gemeinsame OAuth-Anwendung für dein ganzes Team registrieren möchtest, statt jedes Mammouth-Konto eine eigene registrieren zu lassen.

1. Erstelle in GitLab eine OAuth-Anwendung:
   - **Benutzerebene**: dein Avatar → **Edit profile** → **Access** → **Applications** → **Add new application**
   - **Gruppenebene**: **Settings** → **Applications** der Gruppe
   - **Instanzebene** (Self-Managed-Admins): **Admin Area** → **Applications** → **New application**
2. Setze die **Redirect URI** auf den Wert, der im Formular für die manuelle Verbindung in Mammouth angezeigt wird.
3. Wähle unter **Scopes** den Eintrag **mcp** aus.
4. Entferne das Häkchen bei **Confidential** – Mammouth sendet bei der manuellen Verbindung kein Client-Secret. Daher muss die Anwendung als öffentlicher Client registriert werden.
5. Speichere die Anwendung und kopiere ihre **Application ID**.
6. Wähle in Mammouth **Manuelle Verbindung**, füge die ID als **Client-ID** ein und lasse **Client-Secret** leer.

::: warning
Eine einzelne gemeinsame OAuth-Anwendung kann keine MCP-Clients bedienen, die unterschiedliche Redirect-URIs verwenden. Wenn sich Mammouths Redirect-URI jemals ändert, musst du die Anwendung in GitLab aktualisieren.
:::

---

## ➡️ Wie geht es weiter?

👉 **[Zurück zu Konnektoren (MCPs)](../../)**
