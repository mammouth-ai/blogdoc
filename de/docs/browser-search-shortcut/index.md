<style>
.browser-select-tip {
  background: rgba(142, 110, 89, 0.08);
  border-left: 4px solid #8e6e59;
  border-radius: 4px 8px 8px 4px;
  padding: 12px 16px;
  margin: 16px 0;
  font-size: 0.95em;
}
:root.dark .browser-select-tip {
  background: rgba(142, 110, 89, 0.18);
}
.browser-menus details {
  margin: 12px 0;
}
.browser-menus details > summary {
  cursor: pointer;
  padding: 10px 14px;
  border: 1px solid rgba(142, 110, 89, 0.25);
  border-radius: 8px;
  background: rgba(142, 110, 89, 0.04);
  transition: background 0.2s ease, border-color 0.2s ease;
  list-style: none;
}
.browser-menus details > summary::-webkit-details-marker {
  display: none;
}
.browser-menus details > summary::marker {
  content: '';
}
.browser-menus details:not([open]) > summary::before {
  content: '▶ ';
}
.browser-menus details[open] > summary::before {
  content: '🔽 ';
}
.browser-menus details > summary:hover {
  background: rgba(142, 110, 89, 0.1);
  border-color: rgba(142, 110, 89, 0.4);
}
:root.dark .browser-menus details > summary {
  background: rgba(142, 110, 89, 0.08);
  border-color: rgba(142, 110, 89, 0.2);
}
:root.dark .browser-menus details > summary:hover {
  background: rgba(142, 110, 89, 0.18);
  border-color: rgba(142, 110, 89, 0.4);
}
:root:not(.dark) .img-dark,
:root.dark .img-light {
  display: none;
}
</style>

# Mammouth als Suchmaschine nutzen

Du kannst einen Prompt direkt aus der Suchleiste deines Browsers an Mammouth senden.
Füge Mammouth in deinem Browser (Firefox, Chrome, Edge, Brave, Vivaldi …) als Suchmaschine hinzu:
Danach tippst du einfach ein Kürzel, zum Beispiel `m`, gefolgt von deiner Frage in die Adressleiste.
Mammouth öffnet eine neue Unterhaltung und sendet den Prompt automatisch.

<img class="img-light" src="/docs/browser-search-shortcut/url.gif" alt="Eine Mammouth-Suchmaschine in den Firefox-Einstellungen hinzufügen" style="height: auto;" />
<img class="img-dark" src="/docs/browser-search-shortcut/url.gif" alt="Eine Mammouth-Suchmaschine in den Firefox-Einstellungen hinzufügen" style="height: auto;" />

---

## 🔗 So funktioniert die URL

Eine Mammouth-URL mit Prompt besteht aus drei Teilen:


| Teil | Funktion                                                                                           | Beispiel |
|---|----------------------------------------------------------------------------------------------------|---|
| `/app/a/default` | Sendet den Prompt an deinen **Standard-Mammouth**                                                  | `https://mammouth.ai/app/a/default` |
| `/app/a/<Nummer>` | Sendet den Prompt an einen **benutzerdefinierten Mammouth**                                        | `https://mammouth.ai/app/a/12345` |
| `type` | Die zu verwendende **Modellkategorie** (light, web, text, reasoning, image, music, video)          | `&type=image` |
| `q` | Der zu sendende **Prompt** (Pflichtfeld, maximal 1.000 Zeichen; `%s` für Browser)                  | `?q=Hallo` |

```
https://mammouth.ai/app/a/<mammouth>?type=<kategorie>&q=<prompt>
```

---

## 🦊 Mammouth als Suchmaschine hinzufügen

Browser ersetzen `%s` durch den Text, den du in die Adressleiste tippst.
Ersetze in der URL `default` durch die Nummer deines benutzerdefinierten Mammouth, um dessen Modellreihenfolge
und den zugehörigen System-Prompt zu nutzen.
::: info
Melde dich zuerst in dem Browser, den du einrichtest, bei Mammouth an. Browser blockieren direkte Links zu ihren Einstellungen: Kopiere die Adresse der Einstellungen und füge sie in die Adressleiste ein.
:::

<div class="browser-menus">

<details>
<summary><strong>Firefox</strong></summary>

Füge über die Sucheinstellungen von Firefox eine eigene Suchmaschine hinzu:

1. Füge `about:preferences#search` in die Adressleiste ein.
2. Klicke auf **Hinzufügen**, um eine Suchmaschine hinzuzufügen.
3. Richte deine neue Suchmaschine ein:
   - **Name der Suchmaschine**: ein Name, der die neue Suchmaschine beschreibt  
     Beispiel: `Übersetzungs-Mammouth`
   - **URL**: die URL der neuen Suchmaschine  
     Beispiel: `https://mammouth.ai/app/a/1234?type=light&q=%s`
   - **Schlüsselwort**: ein Name, mit dem du die Suche mit Mammouth auslöst  
     Beispiel: `m`

Tippe in der Adressleiste `m`, gefolgt von einem Leerzeichen und deinem Prompt, und drücke dann **Enter**.
</details>

<details>
<summary><strong>Google Chrome</strong></summary>

1. Füge `chrome://settings/searchEngines` in die Adressleiste ein.
2. Klicke im Abschnitt **Websitesuche** auf **Hinzufügen**.
3. Fülle die Felder aus:
   - **Name**: ein Name, der die neue Suchmaschine beschreibt  
     Beispiel: `Übersetzungs-Mammouth`
   - **Kürzel**: ein Name, mit dem du die Suche mit Mammouth auslöst  
     Beispiel: `m`
   - **URL**: die URL der neuen Suchmaschine  
     Beispiel: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>


<details>
<summary><strong>Brave</strong></summary>

1. Füge `brave://settings/searchEngines` in die Adressleiste ein.
2. Klicke im Abschnitt **Websitesuche** auf **Hinzufügen**.
3. Fülle die Felder aus:
   - **Name**: ein Name, der die neue Suchmaschine beschreibt  
     Beispiel: `Übersetzungs-Mammouth`
   - **Kürzel**: ein Name, mit dem du die Suche mit Mammouth auslöst  
     Beispiel: `m`
   - **URL**: die URL der neuen Suchmaschine  
     Beispiel: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>

<details>

<summary><strong>Vivaldi</strong></summary>

1. Füge `vivaldi://settings/search` in die Adressleiste ein.
2. Klicke unter der Liste der Suchmaschinen auf **+**.
3. Fülle die Felder aus:
   - **Name**: ein Name, der die neue Suchmaschine beschreibt  
     Beispiel: `Übersetzungs-Mammouth`
   - **Kürzel**: ein Name, mit dem du die Suche mit Mammouth auslöst  
     Beispiel: `m`
   - **URL**: die URL der neuen Suchmaschine  
     Beispiel: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>

</div>

**🔗 Schnelllinks**

::: code-group

```text [mp · light]
https://mammouth.ai/app/a/default?type=light&q=%s
```

```text [mp · Benutzerdefinierter Mammouth]
https://mammouth.ai/app/a/12345?q=%s
```

```text [m · Auto]
https://mammouth.ai/app/a/default?q=%s
```

```text [mw · Websuche]
https://mammouth.ai/app/a/default?q=%s&type=web
```

```text [mr · Reasoning]
https://mammouth.ai/app/a/default?q=%s&type=reasoning
```


:::

::: tip Andere Methode
In aktuellen Firefox-Versionen kannst du auch über die Sucheinstellungen gehen, Abschnitt **Suchkürzel** > **Hinzufügen**, mit demselben Namen, derselben URL und demselben Schlüsselwort. Adresse der Einstellungen:

```text
about:preferences#search
```
:::
---

## ⚙️ Was beim Öffnen des Links passiert

Mammouth öffnet eine neue Unterhaltung mit dem in der URL angegebenen Mammouth.

### Grenzen und Sicherheit
- **Maximal 1.000 Zeichen**: Darüber hinaus wird der Prompt nicht gesendet.
- **Aktivierte Konnektoren**: Wenn du [Konnektoren](../connectors/index.md) aktiviert hast, bittet Mammouth dich, den Prompt
zu bestätigen.
- **Kein agentischer Modus**: Ein auf diese Weise gesendeter Prompt kann den agentischen Modus nicht aktivieren.

::: warning Öffne nur vertrauenswürdige Links
Ein Link mit `?q=` sendet beim Öffnen sofort einen Prompt von **deinem** Konto. Öffne einen solchen Link nicht, wenn du nicht weißt, woher er stammt.
:::
