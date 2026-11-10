---
layout: home
---

<style>
  :root {
    --bg-color: #f6f6f7 !important;
    --text-color: #252525 !important;
    --detail-text: #666666 !important;
    --card-hover-border: #8e6e59 !important;
    --title-color: #8e6e59 !important;
    --card-shadow: rgba(0, 0, 0, 0.1) !important;
    --vp-c-brand-1: #8e6e59 !important;
    --vp-c-brand-2:rgb(72, 58, 49) !important;
  }

  html.dark {
    --bg-color: #252525 !important;
    --text-color: #ffffff !important;
    --detail-text: #8b8b8b !important;
    --card-hover-border: #8b8b8b !important;
    --title-color: #8e6e59 !important;
    --card-shadow: rgba(255, 255, 255, 0.1) !important;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .feature-card {
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none !important;
    color: var(--text-color) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 120px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .feature-card:hover {
    border-color: var(--card-hover-border);
    transform: translateY(-2px);
  }

  .feature-title {
    font-size: 1.2em;
    margin-bottom: 12px;
    text-decoration: none !important;
    font-weight: 600;
    color: var(--text-color);
  }

  .feature-details {
    color: var(--detail-text);
    margin-bottom: 0;
    font-size: 0.95em;
    line-height: 1.6;
    text-decoration: none !important;
  }

  a {
    text-decoration: none !important;
  }

  .site-title {
    margin-top: 60px;
    margin-bottom: 30px;
    color: var(--title-color) !important;
    padding: 10px !important;
    font-size: 2.6em !important;
    font-weight: 700 !important;
    letter-spacing: -0.4px;
  }
</style>

<header>
  <h1 class="site-title">Introduzione a Mammouth</h1>
</header>

<div class="features-grid">
  <a href="/it/docs/introduction-to-mammouth/" class="feature-card">
    <h3 class="feature-title">🚀 Per iniziare</h3>
    <p class="feature-details">Scopri Mammouth e le sue funzionalità principali</p>
  </a>

  <a href="/it/docs/mammouth-assistant-tutorial/" class="feature-card">
    <h3 class="feature-title">📂 Mammouth personalizzati</h3>
    <p class="feature-details">Guida all'uso dei Mammouth personalizzati</p>
  </a>

  <a href="/it/docs/privacy-with-model-providers/" class="feature-card">
    <h3 class="feature-title">🔏 Privacy con i fornitori dei modelli</h3>
    <p class="feature-details">Scopri cosa succede ai tuoi dati</p>
  </a>

  <a href="/it/docs/how-to-download-the-mammouth-app/" class="feature-card">
    <h3 class="feature-title">📲 Installa l'app</h3>
    <p class="feature-details">Su computer (Mac / Windows / Linux) o smartphone (Android / iOS)</p>
  </a>
</div>

<h1 class="site-title">Buone pratiche</h1>

<div class="features-grid">
  <a href="/it/docs/how-to-write-an-effective-prompt/" class="feature-card">
    <h3 class="feature-title">✍️ Scrivere prompt efficaci</h3>
    <p class="feature-details">Impara a formulare prompt per ottenere i migliori risultati</p>
  </a>

  <a href="/it/docs/how-to-generate-stunning-images/" class="feature-card">
    <h3 class="feature-title">🏞️ Generare immagini di qualità</h3>
    <p class="feature-details">Tecniche per creare immagini straordinarie con l'IA</p>
  </a>

  <a href="/it/docs/choosing-the-right-ai-model/" class="feature-card">
    <h3 class="feature-title">🎯 Scegliere il modello giusto</h3>
    <p class="feature-details">Scopri quale modello di IA utilizzare in base alle tue esigenze</p>
  </a>

  <a href="/it/docs/six-useful-tips-about-mammouth/" class="feature-card">
    <h3 class="feature-title">💡 Consigli e suggerimenti</h3>
    <p class="feature-details">Come scegliere il modello predefinito e altri consigli utili</p>
  </a>
</div>

<h1 class="site-title">Per sviluppatori</h1>

<div class="features-grid">
  <a href="/it/docs/api-quick-start/" class="feature-card">
    <h3 class="feature-title">⚡ API Mammouth</h3>
    <p class="feature-details">Un'API compatibile con OpenAI per integrare facilmente l'IA nelle tue applicazioni.</p>
  </a>

  <a href="/it/docs/mammouth-code/" class="feature-card">
    <h3 class="feature-title">💻 Mammouth Code</h3>
    <p class="feature-details">Agente di coding open source basato sull'API Mammouth</p>
  </a>
</div>

<h1 class="site-title">Documentazione</h1>

<div class="features-grid">
  <a href="/it/docs/terms-of-service/" class="feature-card">
    <h3 class="feature-title">📋 Termini di servizio</h3>
    <p class="feature-details">Condizioni generali, addendum sul trattamento dei dati e politica di utilizzo</p>
  </a>

  <a href="/it/docs/privacy-policy/" class="feature-card">
    <h3 class="feature-title">📋 Informativa sulla privacy</h3>
    <p class="feature-details">Il documento ufficiale sulla privacy (11 articoli)</p>
  </a>

  <a href="/it/docs/teams/" class="feature-card">
    <h3 class="feature-title">👥 Team e aziende</h3>
    <p class="feature-details">Ruoli, autorizzazioni, Mammouth condivisi, SSO</p>
  </a>

  <a href="/it/docs/quota-policy/" class="feature-card">
    <h3 class="feature-title">🧮 Dettagli delle quote</h3>
    <p class="feature-details">La politica delle quote attuale, nel dettaglio</p>
  </a>

  <a href="/it/docs/branding-kit/" class="feature-card">
    <h3 class="feature-title">🎨 Kit di branding</h3>
    <p class="feature-details">Logo, caratteri, logotipo in modalità scura e chiara</p>
  </a>

  <a href="/it/docs/FAQ/" class="feature-card">
    <h3 class="feature-title">💬 FAQ</h3>
    <p class="feature-details">Hai una domanda? Trova qui la risposta</p>
  </a>
</div>

<h1 class="site-title">Note di rilascio</h1>

<div class="features-grid">
  <a href="/it/docs/release-notes/" class="feature-card">
    <h3 class="feature-title">🚀 Note di rilascio</h3>
    <p class="feature-details">Tutte le versioni del prodotto da ottobre 2024</p>
  </a>
</div>
