<style>
.browser-select-tip {
  background: rgba(142, 110, 89, 0.08);
  border-left: 4px solid #8e6e59;
  border-radius: 4px 8px 8px 4px;
  padding: 12px 16px;
  margin: 16px 0;
  font-size: 0.95em;
}
:root.dark .browser-select-tip { background: rgba(142, 110, 89, 0.18); }
.browser-menus details { margin: 12px 0; }
.browser-menus details > summary {
  cursor: pointer;
  padding: 10px 14px;
  border: 1px solid rgba(142, 110, 89, 0.25);
  border-radius: 8px;
  background: rgba(142, 110, 89, 0.04);
  transition: background 0.2s ease, border-color 0.2s ease;
  list-style: none;
}
.browser-menus details > summary::-webkit-details-marker { display: none; }
.browser-menus details > summary::marker { content: ''; }
.browser-menus details:not([open]) > summary::before { content: '▶ '; }
.browser-menus details[open] > summary::before { content: '🔽 '; }
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
:root.dark .img-light { display: none; }
</style>

# Usa Mammouth come motore di ricerca

Puoi inviare un prompt a Mammouth direttamente dalla barra di ricerca del browser.
Aggiungi Mammouth come motore di ricerca nel browser (Firefox, Chrome, Edge, Brave, Vivaldi…):
poi digita nella barra degli indirizzi una scorciatoia, ad esempio `m`, seguita dalla domanda.
Mammouth aprirà una nuova conversazione e invierà automaticamente il prompt.

<img class="img-light" src="/docs/browser-search-shortcut/url.gif" alt="Aggiungere Mammouth come motore di ricerca nelle impostazioni di Firefox" style="height: auto;" />
<img class="img-dark" src="/docs/browser-search-shortcut/url.gif" alt="Aggiungere Mammouth come motore di ricerca nelle impostazioni di Firefox" style="height: auto;" />

---

## 🔗 Come funziona l'URL

Un URL Mammouth con un prompt è composto da tre parti:

| Parte | Funzione | Esempio |
|---|---|---|
| `/app/a/default` | Invia il prompt al **Mammouth predefinito** | `https://mammouth.ai/app/a/default` |
| `/app/a/<numero>` | Invia il prompt a un **Mammouth personalizzato** | `https://mammouth.ai/app/a/12345` |
| `type` | La **categoria del modello** da usare (light, web, text, reasoning, image, music, video) | `&type=image` |
| `q` | Il **prompt** da inviare (obbligatorio, massimo 1.000 caratteri; `%s` per il browser) | `?q=Ciao` |

```
https://mammouth.ai/app/a/<mammouth>?type=<categoria>&q=<prompt>
```

---

## 🦊 Aggiungere Mammouth come motore di ricerca

Il browser sostituisce `%s` con il testo digitato nella barra degli indirizzi.
Nell'URL, sostituisci `default` con il numero del tuo Mammouth personalizzato per usare l'ordine dei modelli
 e il relativo prompt di sistema.
::: info
Accedi prima a Mammouth dal browser che stai configurando. I browser bloccano i collegamenti diretti alle impostazioni: copia l'indirizzo della pagina delle impostazioni e incollalo nella barra degli indirizzi.
:::

<div class="browser-menus">

<details>
<summary><strong>Firefox</strong></summary>

1. Inserisci `about:preferences#search` nella barra degli indirizzi.
2. Fai clic su **Aggiungi** per aggiungere un motore di ricerca.
3. Configura il nuovo motore:
   - **Nome motore di ricerca**: un nome descrittivo, ad esempio `Mammouth traduzioni`
   - **URL**: l'URL del nuovo motore, ad esempio `https://mammouth.ai/app/a/1234?type=light&q=%s`
   - **Parola chiave**: il nome per avviare una ricerca con Mammouth, ad esempio `m`

Nella barra degli indirizzi, digita `m`, uno spazio e il prompt, quindi premi **Invio**.
</details>

<details>
<summary><strong>Google Chrome</strong></summary>

1. Inserisci `chrome://settings/searchEngines` nella barra degli indirizzi.
2. Nella sezione **Ricerca nei siti**, fai clic su **Aggiungi**.
3. Compila i campi:
   - **Nome**: un nome descrittivo, ad esempio `Mammouth traduzioni`
   - **Scorciatoia**: la parola chiave per avviare una ricerca, ad esempio `m`
   - **URL**: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>

<details>
<summary><strong>Brave</strong></summary>

1. Inserisci `brave://settings/searchEngines` nella barra degli indirizzi.
2. Nella sezione **Ricerca nei siti**, fai clic su **Aggiungi**.
3. Compila i campi:
   - **Nome**: un nome descrittivo, ad esempio `Mammouth traduzioni`
   - **Scorciatoia**: la parola chiave per avviare una ricerca, ad esempio `m`
   - **URL**: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>

<details>
<summary><strong>Vivaldi</strong></summary>

1. Inserisci `vivaldi://settings/search` nella barra degli indirizzi.
2. Fai clic su **+** sotto l'elenco dei motori di ricerca.
3. Compila i campi:
   - **Nome**: un nome descrittivo, ad esempio `Mammouth traduzioni`
   - **Scorciatoia**: la parola chiave per avviare una ricerca, ad esempio `m`
   - **URL**: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>

</div>

**🔗 Collegamenti rapidi**

::: code-group

```text [mp · light]
https://mammouth.ai/app/a/default?type=light&q=%s
```

```text [mp · Mammouth personalizzato]
https://mammouth.ai/app/a/12345?q=%s
```

```text [m · Auto]
https://mammouth.ai/app/a/default?q=%s
```

```text [mw · Ricerca Web]
https://mammouth.ai/app/a/default?q=%s&type=web
```

```text [mr · Ragionamento]
https://mammouth.ai/app/a/default?q=%s&type=reasoning
```

---

## ⚙️ Cosa succede quando apri il collegamento

Mammouth apre una nuova conversazione con il Mammouth specificato nell'URL.

### Limiti e sicurezza
- **Massimo 1.000 caratteri**: i prompt più lunghi non vengono inviati.
- **Connettori attivi**: se hai attivato i [connettori](../connectors/index.md), Mammouth ti chiederà di confermare il prompt.
- **Nessuna modalità agente**: un prompt inviato in questo modo non può attivare la modalità agente.

::: warning Apri solo collegamenti attendibili
Un collegamento con `?q=` invia immediatamente un prompt dal **tuo** account. Non aprirlo se non sai da dove proviene.
:::
