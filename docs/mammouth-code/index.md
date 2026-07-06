# Mammouth Code

Mammouth Code is Mammouth AI's terminal-based coding agent.

::: info [➡️ Get your API key](https://mammouth.ai/app/account/settings/api) — required to use Mammouth Code.
:::

This project is open source and available on [GitHub](https://github.com/mammouth-ai/code).

<div class="h-full w-full">
<iframe
    class="rounded-xl"
    :height="minimized ? '96px' : 'auto'"
    width="100%"
    src="https://www.youtube.com/embed/V9dIg1bIVPg"
    title="Mammouth Code"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    loading="lazy"
    style="aspect-ratio: 16 / 9"
></iframe>
</div>

## Installation

Run one of the following commands in your terminal.

<div class="tab-box">
    <input type="radio" name="install-tabs" id="install-tab1" class="tab-input" checked>
    <label for="install-tab1">macOS / Linux / WSL</label>
    <input type="radio" name="install-tabs" id="install-tab2" class="tab-input">
    <label for="install-tab2">Windows (PowerShell)</label>

<div class="tab-content">
  <div class="tab-panel" id="install-content1">

```bash
curl -fsSL "https://code.mammouth.ai/install.sh" | bash
```

</div>
  <div class="tab-panel" id="install-content2">

```powershell
irm "https://code.mammouth.ai/install.ps1" | iex
```

  </div>
  </div>
</div>

<style>
:root {
    --active-tab-color: #673ab7;
    --inactive-tab-color: #6c757d;
    --active-text-color: #343a40;
    --inactive-text-color: #a0a0a0;
    --border-color-light: #dee2e6;
    --background-white: #fff;
    --shadow-color: rgba(0, 0, 0, 0.08);
}

.dark {
    --active-tab-color: #b39ddb;
    --active-text-color: #e0e0e0;
    --inactive-text-color: #888;
    --border-color-light: #3a3a3a;
    --background-white: #1e1e1e;
    --shadow-color: rgba(0, 0, 0, 0.3);
}

.tab-box {
    width: 100%;
    max-width: 700px;
    margin: 30px auto;
    box-sizing: border-box;
    background-color: var(--background-white);
    border: 1px solid var(--border-color-light);
    border-radius: 8px;
    box-shadow: 0 2px 5px var(--shadow-color);
    padding: 0;
    overflow: hidden;
    position: relative;
}

.tab-box .tab-input {
    display: none;
}

.tab-box label {
    padding: 12px 20px;
    cursor: pointer;
    display: inline-block;
    color: var(--inactive-text-color);
    font-weight: 500;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease, border-bottom-color 0.3s ease;
    border-bottom: 2px solid transparent;
}

.tab-box .tab-input:checked + label {
    color: var(--active-text-color);
    font-weight: 600;
    border-bottom-color: var(--active-tab-color);
}

.tab-box label:hover:not(.tab-input:checked + label) {
    color: var(--active-text-color);
}

.tab-box .tab-content {
    border-top: 1px solid var(--border-color-light);
    background-color: var(--background-white);
    box-sizing: border-box;
    border-radius: 0 0 8px 8px;
    padding: 20px;
}

.tab-box .tab-content .tab-panel {
    display: none;
}

#install-tab1:checked ~ .tab-content #install-content1,
#install-tab2:checked ~ .tab-content #install-content2 {
    display: block;
}
</style>

## Use in your Terminal

Simply type `mammouth` to run the coding agent.

::: tip Default model
The first time you set up Mammouth Code, it uses **`mammouth-recommended`** as the default model — a shortcut that always routes to whatever model Mammouth currently considers the best for its price. See [Mammouth Recommended](/docs/api-quick-start/index.md#mammouth-recommended) for details.
:::

## Use in your IDE

For the best experience, open Mammouth Code in the integrated terminal of your IDE (VS Code, Cursor, WebStorm, etc.):

1. Open the integrated terminal in your IDE
2. Navigate to your project directory
3. Run: `mammouth`

That's it — Mammouth Code will start an interactive session right in your terminal.

## Continue a previous session

There are 2 ways to continue a previous session:

- Run `mammouth` as usual, then use the `/sessions` command to switch to an old session.
- Run `mammouth -c` to continue the last session used in the current folder.

## Update

To update Mammouth Code to the latest version:

```bash
mammouth upgrade
```

This will fetch and install the latest version, replacing the old one while keeping your configurations and sessions intact.

## Uninstall

To completely remove Mammouth Code from your system:

```bash
mammouth uninstall
```

This will remove Mammouth Code along with its configurations and sessions.

## Token Consumption in Mammouth Code

Mammouth Code dynamically injects system prompts depending on what you ask it to do — which explains the **~10k additional tokens** you may notice.

What might look like "heavy" prompts actually **saves tokens on larger projects**: they allow the LLM to read only the relevant files, rather than loading your entire codebase into context. That overhead looks significant when working on a single file, but the real purpose is to **route the request to the right tool** for the task at hand.

**A simple rule of thumb:**

- 📁 **Use Mammouth Code** if your project has 10+ files, or if you're working with a long context — which covers most real-world programming projects.
- 💬 **Use the standard Mammouth interface** if you're dealing with a manageable context: two or three files, ~500 lines max (e.g., trying to understand a specific function — unless you're deep into triple-inherited OOP classes 😄).

::: warning Usage Tracking Accuracy
The price and token consumption estimator shown in the terminal might not always reflect the exact cost in real-time. To track your actual API usage, please check the dashboard at [mammouth.ai/app/account/api](https://mammouth.ai/app/account/api).
:::

> **Note on Claude Haiku:** This smaller model is currently used to generate session titles. This will be configurable in a future update.

## Model Effort Levels

When using Mammouth Code, you can switch model variants by pressing **Ctrl+P** and selecting **Switch model variant**. This lets you choose an effort level for supported models.

### What are effort levels?

Effort levels control **extended thinking** — how much time and tokens the model spends reasoning before responding.

| Level | Reasoning | Best For |
|-------|-----------|----------|
| **Default** | Off | Standard tasks, fastest response, lowest token cost |
| **Low** | On (minimal) | Simple tasks that benefit from light reasoning |
| **Medium** | On (moderate) | Most tasks — good balance of speed and depth |
| **High** | On (maximum) | Complex problems, architecture decisions, hard bugs |

Higher effort means more thorough reasoning but **slower responses and higher token consumption**.

::: info
Not all models support effort levels. Extended thinking is only available on select models. For models that don't support it, this option will not be available.
:::

### When to use each level

- 🟢 **Default** — Quick edits, simple questions, file navigation
- 🔵 **Low** — Refactoring, small feature additions
- 🟡 **Medium** — Multi-step tasks, debugging, code reviews
- 🔴 **High** — Complex algorithms, architectural decisions, hard-to-reproduce bugs
