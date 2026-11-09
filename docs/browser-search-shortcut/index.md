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

# Use Mammouth as a search engine

You can send a prompt to Mammouth straight from your browser's search bar.
Add Mammouth as a search engine in your browser (Firefox, Chrome, Edge, Brave, Vivaldi…):
then just type a shortcut, for example `m`, followed by your question in the address bar.
Mammouth opens a new conversation and sends the prompt automatically.

<img class="img-light" src="/docs/browser-search-shortcut/url.gif" alt="Adding a Mammouth search engine in Firefox settings" style="height: auto;" />
<img class="img-dark" src="/docs/browser-search-shortcut/url.gif" alt="Adding a Mammouth search engine in Firefox settings" style="height: auto;" />

---

## 🔗 How the URL works

A Mammouth URL with a prompt is made of three parts:


| Part | Role                                                                                               | Example |
|---|----------------------------------------------------------------------------------------------------|---|
| `/app/a/default` | Sends the prompt to your **default mammouth**                                                      | `https://mammouth.ai/app/a/default` |
| `/app/a/<number>` | Sends the prompt to a **custom mammouth**                                                          | `https://mammouth.ai/app/a/12345` |
| `type` | The **model category** to use (light, web, text, reasoning, image, music, video)                   | `&type=image` |
| `q` | The **prompt** to send (required, limited to 1,000 characters; use `%s` for browsers)              | `?q=Hello` |

```
https://mammouth.ai/app/a/<mammouth>?type=<category>&q=<prompt>
```

---

## 🦊 Add Mammouth as a search engine

Browsers replace `%s` with the text you type in the address bar.
In the URL, replace `default` with your custom mammouth's number to use its model preference order
and the system prompt that applies to it.
::: info
First sign in to Mammouth in the browser you are setting up. Browsers block direct links to their settings: copy the settings address and paste it into the address bar.
:::

<div class="browser-menus">

<details>
<summary><strong>Firefox</strong></summary>

1. Paste `about:preferences#search` into the address bar.
2. Click **Add** to add a search engine.
3. Set up your new search engine:
   - **Search engine name**: a name describing the new search engine  
     example: `translation custom mammouth`
   - **URL**: the URL of the new search engine  
     example: `https://mammouth.ai/app/a/1234?type=light&q=%s`
   - **Keyword**: a name that triggers the search with Mammouth  
     example: `m`

In the address bar, type `m` followed by a space and your prompt, then press **Enter**.
</details>

<details>
<summary><strong>Google Chrome</strong></summary>

1. Paste `chrome://settings/searchEngines` into the address bar.
2. In the **Site search** section, click **Add**.
3. Fill in the fields:
   - **Name**: a name describing the new search engine  
     example: `translation custom mammouth`
   - **Shortcut**: a name that triggers the search with Mammouth  
     example: `m`
   - **URL**: the URL of the new search engine  
     example: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>


<details>
<summary><strong>Brave</strong></summary>

1. Paste `brave://settings/searchEngines` into the address bar.
2. In the **Site search** section, click **Add**.
3. Fill in the fields:
   - **Name**: a name describing the new search engine  
     example: `translation custom mammouth`
   - **Shortcut**: a name that triggers the search with Mammouth  
     example: `m`
   - **URL**: the URL of the new search engine  
     example: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>

<details>

<summary><strong>Vivaldi</strong></summary>

1. Paste `vivaldi://settings/search` into the address bar.
2. Below the list of search engines, click **+**.
3. Fill in the fields:
   - **Name**: a name describing the new search engine  
     example: `translation custom mammouth`
   - **Nickname**: a name that triggers the search with Mammouth  
     example: `m`
   - **URL**: the URL of the new search engine  
     example: `https://mammouth.ai/app/a/1234?type=light&q=%s`
</details>

</div>

**🔗 Quick links**

::: code-group

```text [mp · light]
https://mammouth.ai/app/a/default?type=light&q=%s
```

```text [mp · Custom mammouth]
https://mammouth.ai/app/a/12345?q=%s
```

```text [m · Auto]
https://mammouth.ai/app/a/default?q=%s
```

```text [mw · Web search]
https://mammouth.ai/app/a/default?q=%s&type=web
```

```text [mr · Reasoning]
https://mammouth.ai/app/a/default?q=%s&type=reasoning
```

---

## ⚙️ What happens when the link opens

Mammouth opens a new conversation with the mammouth specified in the URL.

### Limits and security
- **1,000 characters maximum**: beyond that, the prompt is not sent.
- **Connectors enabled**: if you have enabled [connectors](../connectors/index.md), Mammouth asks you to confirm
the prompt.
- **No agentic mode**: a prompt sent this way cannot activate agentic mode.

::: warning Only open links you trust
A link containing `?q=` sends a prompt from **your** account as soon as it opens. Do not open such a link if you don't know where it came from.
:::
