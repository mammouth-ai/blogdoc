# Mammouth Code

Mammouth Code est l'agent de codage IA en terminal de Mammouth AI, un fork de [OpenCode](https://github.com/anomalyco/opencode).

::: info [➡️ Obtenez votre clé API](https://mammouth.ai/app/account/settings/api) — nécessaire pour utiliser Mammouth Code.
:::

## Installation

Exécutez l'une des commandes suivantes dans votre terminal.

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

## Utilisation dans votre IDE

Pour une expérience optimale, ouvrez Mammouth Code dans le terminal intégré de votre IDE (VS Code, Cursor, WebStorm, etc.) :

1. Ouvrez le terminal intégré de votre IDE
2. Naviguez vers le répertoire de votre projet
3. Exécutez : `mammouth`

C'est tout — Mammouth Code démarrera une session interactive directement dans votre terminal.

## Reprendre une session précédente

Il y a 2 façons de reprendre une session précédente :

- Lancez `mammouth` comme d'habitude, puis utilisez la commande `/sessions` pour basculer vers une ancienne session.
- Lancez `mammouth -c` pour reprendre la dernière session utilisée dans le dossier actuel.

## Mise à jour

Pour mettre à jour Mammouth Code vers la dernière version :

```bash
mammouth update
```

Cela récupérera et installera la dernière version, remplaçant l'ancienne tout en conservant vos configurations et sessions.

## Désinstallation

Pour supprimer complètement Mammouth Code de votre système :

```bash
mammouth uninstall
```

Cela supprimera Mammouth Code ainsi que ses configurations et sessions.
