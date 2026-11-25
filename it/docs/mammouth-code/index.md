# Mammouth Code

Mammouth Code è l'agente di coding di Mammouth AI che funziona nel terminale.

::: info [➡️ Ottieni la tua chiave API](https://mammouth.ai/app/account/settings/api) — necessaria per usare Mammouth Code.
:::

Il progetto è open source e disponibile su [GitHub](https://github.com/mammouth-ai/code).

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

## Installazione

Esegui uno dei seguenti comandi nel terminale.

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

.tab-box .tab-input { display: none; }
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
.tab-box label:hover:not(.tab-input:checked + label) { color: var(--active-text-color); }
.tab-box .tab-content {
    border-top: 1px solid var(--border-color-light);
    background-color: var(--background-white);
    box-sizing: border-box;
    border-radius: 0 0 8px 8px;
    padding: 20px;
}
.tab-box .tab-content .tab-panel { display: none; }
#install-tab1:checked ~ .tab-content #install-content1,
#install-tab2:checked ~ .tab-content #install-content2 { display: block; }
</style>

## Usare Mammouth Code nel terminale

Digita `mammouth`.

::: tip Modello predefinito
Al primo avvio, Mammouth Code usa **`mammouth-recommended`** come modello predefinito: è un alias che indirizza sempre al modello con il miglior rapporto qualità-prezzo secondo Mammouth. Per maggiori dettagli, consulta [Mammouth Recommended](/it/docs/api-quick-start/index.md#mammouth-recommended).
:::

## Usarlo nel tuo IDE

Per un'esperienza ottimale, apri Mammouth Code nel terminale integrato dell'IDE (VS Code, Cursor, WebStorm e così via):

1. Apri il terminale integrato dell'IDE.
2. Vai alla directory del progetto.
3. Esegui `mammouth`.

Mammouth Code avvierà una sessione interattiva direttamente nel terminale.

## Riprendere una sessione precedente

Ci sono due modi per riprendere una sessione precedente:

- Avvia `mammouth` come di consueto, poi usa il comando `/sessions` per passare a una sessione precedente.
- Avvia `mammouth -c` per riprendere l'ultima sessione usata nella cartella corrente.

## Aggiornare

Per aggiornare Mammouth Code all'ultima versione:

```bash
mammouth upgrade
```

Il comando scarica e installa l'ultima versione, sostituendo quella precedente e conservando configurazioni e sessioni.

## Disinstallare

Per rimuovere completamente Mammouth Code dal sistema:

```bash
mammouth uninstall
```

Il comando rimuove Mammouth Code, le configurazioni e le sessioni.

## Consumo di token in Mammouth Code

Mammouth Code inserisce dinamicamente prompt di sistema in base alle tue richieste: da qui derivano i **circa 10.000 token aggiuntivi** che potresti notare.

Quelli che possono sembrare prompt «pesanti» **fanno in realtà risparmiare token nei progetti più grandi**: consentono all'LLM di leggere solo i file pertinenti, invece di caricare nel contesto l'intera codebase. Il sovraccarico risulta più evidente quando lavori su un singolo file, ma lo scopo è **indirizzare la richiesta allo strumento giusto** per il compito.

**Regola semplice:**

- 📁 **Usa Mammouth Code** se il progetto ha più di 10 file o se lavori con un contesto lungo: è il caso della maggior parte dei progetti di programmazione reali.
- 💬 **Usa l'interfaccia Mammouth standard** se il contesto è gestibile: due o tre file, fino a circa 500 righe (ad esempio per capire una funzione specifica, salvo classi OOP con ereditarietà multipla e profonda).

::: warning Monitoraggio del consumo
La stima dei costi e dei consumi mostrata in Mammouth Code potrebbe non essere precisa in tempo reale. Per monitorare l'utilizzo effettivo dell'API, consulta la pagina [mammouth.ai/app/account/api](https://mammouth.ai/app/account/api).
:::

> **Nota su Claude Haiku:** questo modello più piccolo viene attualmente usato per generare i titoli delle sessioni. La scelta sarà configurabile in un aggiornamento futuro.

## Livelli di sforzo del modello

In Mammouth Code puoi cambiare variante del modello premendo **Ctrl+P** e selezionando **Switch model variant** (oppure **Ctrl+T** per scorrere rapidamente le varianti). Per i modelli supportati puoi così scegliere un livello di sforzo.

### Cosa sono i livelli di sforzo?

I livelli di sforzo controllano il **ragionamento esteso**: il tempo e i token che il modello dedica al ragionamento prima di rispondere.

| Livello | Ragionamento | Ideale per |
| --- | --- | --- |
| **Default** | Disattivato | Attività standard, risposta più rapida, consumo minimo di token |
| **Low** | Attivato (minimo) | Attività semplici che beneficiano di un po' di ragionamento |
| **Medium** | Attivato (moderato) | La maggior parte delle attività: buon equilibrio tra velocità e profondità |
| **High** | Attivato (massimo) | Problemi complessi, decisioni architetturali, bug difficili |

Un livello di sforzo maggiore consente un ragionamento più approfondito, ma comporta **risposte più lente e un consumo maggiore di token**.

::: info
Non tutti i modelli supportano i livelli di sforzo. Il ragionamento esteso è disponibile solo per alcuni modelli; per gli altri l'opzione non sarà disponibile.
:::

### Quando usare ciascun livello

- 🟢 **Default** — modifiche rapide, domande semplici, navigazione tra i file
- 🔵 **Low** — refactoring, aggiunta di piccole funzionalità
- 🟡 **Medium** — attività in più passaggi, debug, revisione del codice
- 🔴 **High** — algoritmi complessi, decisioni architetturali, bug difficili da riprodurre
