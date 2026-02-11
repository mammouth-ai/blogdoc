# Mammouth Code

Mammouth Code is Mammouth AI's terminal-based AI coding agent, a fork of [OpenCode](https://github.com/anomalyco/opencode).

::: info [➡️ Get your API key](https://mammouth.ai/app/account/settings/api) — required to use Mammouth Code.
:::

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
mammouth update
```

This will fetch and install the latest version, replacing the old one while keeping your configurations and sessions intact.

## Uninstall

To completely remove Mammouth Code from your system:

```bash
mammouth uninstall
```

This will remove Mammouth Code along with its configurations and sessions.
