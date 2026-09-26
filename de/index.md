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
  <h1 class="site-title">Einführung in Mammouth</h1>
</header>

<div class="features-grid">
  <a href="/de/docs/introduction-to-mammouth/" class="feature-card">
    <h3 class="feature-title">🚀 Erste Schritte</h3>
    <p class="feature-details">Entdecke Mammouth und seine wichtigsten Funktionen</p>
  </a>

  <a href="/de/docs/mammouth-assistant-tutorial/" class="feature-card">
    <h3 class="feature-title">📂 Individuelle Mammouths</h3>
    <p class="feature-details">Anleitung zur Verwendung individueller Mammouths</p>
  </a>

  <a href="/de/docs/about-privacy/" class="feature-card">
    <h3 class="feature-title">🔏 Datenschutz</h3>
    <p class="feature-details">Was mit deinen Daten geschieht</p>
  </a>

  <a href="/de/docs/how-to-download-the-mammouth-app/" class="feature-card">
    <h3 class="feature-title">📲 App installieren</h3>
    <p class="feature-details">Auf Desktop (Mac / Windows / Linux) oder Mobilgerät (Android / iOS)</p>
  </a>
</div>

<h1 class="site-title">Bewährte Vorgehensweisen</h1>

<div class="features-grid">
  <a href="/de/docs/how-to-write-an-effective-prompt/" class="feature-card">
    <h3 class="feature-title">✍️ Effektive Prompts schreiben</h3>
    <p class="feature-details">Lerne, Prompts zu formulieren, mit denen du die besten Ergebnisse erzielst</p>
  </a>

  <a href="/de/docs/how-to-generate-stunning-images/" class="feature-card">
    <h3 class="feature-title">🏞️ Gute Bilder generieren</h3>
    <p class="feature-details">Tipps und Techniken für beeindruckende KI-generierte Bilder</p>
  </a>

  <a href="/de/docs/choosing-the-right-ai-model/" class="feature-card">
    <h3 class="feature-title">🎯 Das richtige Modell wählen</h3>
    <p class="feature-details">Finde heraus, welches KI-Modell für deine Anforderungen geeignet ist</p>
  </a>

  <a href="/de/docs/six-useful-tips-about-mammouth/" class="feature-card">
    <h3 class="feature-title">💡 Tipps & Tricks</h3>
    <p class="feature-details">So wählst du dein Standardmodell und erhältst weitere nützliche Tipps</p>
  </a>
</div>

<h1 class="site-title">Für Entwickler</h1>

<div class="features-grid">
 <a href="/de/docs/api-quick-start/" class="feature-card">
    <h3 class="feature-title">⚡ Mammouth API</h3>
    <p class="feature-details">Eine OpenAI-kompatible API, mit der du KI ganz einfach in deine Anwendungen integrierst.</p>
  </a>

<a href="/de/docs/mammouth-code/" class="feature-card">
    <h3 class="feature-title">💻 Mammouth Code</h3>
    <p class="feature-details">Open-Source-Coding-Agent auf Basis der Mammouth API</p>
  </a>
</div>

<h1 class="site-title">Dokumentation</h1>

<div class="features-grid">
  <a href="/de/docs/terms-of-service/" class="feature-card">
    <h3 class="feature-title">📋 Nutzungsbedingungen</h3>
    <p class="feature-details">Allgemeine Geschäftsbedingungen, Auftragsverarbeitungszusatz und Richtlinie zur zulässigen Nutzung</p>
  </a>

  <a href="/de/docs/privacy-policy/" class="feature-card">
    <h3 class="feature-title">📋 Datenschutzerklärung</h3>
    <p class="feature-details">Das offizielle Datenschutzdokument (11 Artikel)</p>
  </a>

  <a href="/de/docs/teams/" class="feature-card">
    <h3 class="feature-title">👥 Teams & Unternehmen</h3>
    <p class="feature-details">Rollen, Berechtigungen, geteilte Mammouths, SSO</p>
  </a>

  <a href="/de/docs/quota-policy/" class="feature-card">
    <h3 class="feature-title">🧮 Kontingentdetails</h3>
    <p class="feature-details">Die aktuelle Kontingentrichtlinie im Detail</p>
  </a>

  <a href="/de/docs/branding-kit/" class="feature-card">
    <h3 class="feature-title">🎨 Branding-Kit</h3>
    <p class="feature-details">Alle wichtigen Elemente für eine konsistente Markenidentität</p>
  </a>

  <a href="/de/docs/FAQ/" class="feature-card">
    <h3 class="feature-title">💬 FAQ</h3>
    <p class="feature-details">Du hast eine Frage? Hier findest du die Antwort.</p>
  </a>
</div>

<h1 class="site-title">Versionshinweise</h1>

<div class="features-grid">
  <a href="/de/docs/release-notes/" class="feature-card">
    <h3 class="feature-title">🚀 Versionshinweise</h3>
    <p class="feature-details">Alle Produktveröffentlichungen seit Oktober 2024</p>
  </a>
</div>
