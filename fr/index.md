---
layout: home
---

<style>
    /* Mode clair */
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

    /* Mode sombre */
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
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        justify-content: center; /* Centre verticalement */
        min-height: 120px; /* Hauteur minimale fixe */
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
        line-height: 1,6;
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
  <h1 class="site-title">Premiers pas</h1>
</header>

<div class="features-grid">
  <a href="docs/introduction-to-mammouth" class="feature-card">
        <h3 class="feature-title">🚀 Introduction à Mammouth</h3>
        <p class="feature-details">Découvrez Mammouth et ses fonctionnalités clés</p>
  </a>

  <a href="docs/six-useful-tips-about-mammouth" class="feature-card">
        <h3 class="feature-title">💡 Conseils et astuces</h3>
        <p class="feature-details">Comment choisir votre modèle par défaut et autres conseils utiles</p>
  </a>

  <a href="docs/how-to-download-the-mammouth-app" class="feature-card">
        <h3 class="feature-title">📲 Installer l'application</h3>
        <p class="feature-details">Sur ordinateur (Mac / Windows / Linux) ou mobile (Android / iOS)</p>
  </a>

  <a href="docs/mammouth-assistant-tutorial" class="feature-card">
        <h3 class="feature-title">📂 Mammouths personnalisés</h3>
        <p class="feature-details">Tutoriel sur l'utilisation des projets</p>
  </a>
</div>

<h1 class="site-title">Bonnes pratiques</h1>

<div class="features-grid">
  <a href="docs/how-to-write-an-effective-prompt" class="feature-card">
        <h3 class="feature-title">✍️ Écrire des prompts efficaces</h3>
        <p class="feature-details">Apprenez à rédiger des prompts qui obtiennent les meilleurs résultats</p>
  </a>

  <a href="docs/choosing-the-right-ai-model" class="feature-card">
        <h3 class="feature-title">🎯 Choisir le bon modèle</h3>
        <p class="feature-details">Comprenez quel modèle d'IA utiliser pour vos besoins spécifiques</p>
  </a>

  <a href="docs/how-to-generate-stunning-images" class="feature-card">
        <h3 class="feature-title">🎨 Générer de bonnes images</h3>
        <p class="feature-details">Conseils et techniques pour créer des images époustouflantes générées par IA</p>
  </a>
</div>

<h1 class="site-title">Documentation</h1>

<div class="features-grid">
  <a href="docs/terms-of-service" class="feature-card">
        <h3 class="feature-title">📋 Conditions d'utilisation</h3>
        <p class="feature-details">CGU, Addendum au traitement des données et Politique d'utilisation</p>
  </a>

  <a href="docs/privacy-policy" class="feature-card">
        <h3 class="feature-title">📋 Politique de confidentialité</h3>
        <p class="feature-details">Le document officiel de confidentialité (11 articles)</p>
  </a>

  <a href="docs/about-privacy" class="feature-card">
        <h3 class="feature-title">🔏 À propos de la confidentialité</h3>
        <p class="feature-details">Ce qui arrive à vos données</p>
  </a>

  <a href="docs/quota-policy" class="feature-card">
        <h3 class="feature-title">🧮 Détails des quotas</h3>
        <p class="feature-details">La politique de quota actuelle détaillée</p>
  </a>

  <a href="docs/model-self-awareness" class="feature-card">
        <h3 class="feature-title">🤖 Conscience de soi des modèles</h3>
        <p class="feature-details">Crise d'identité de l'IA : pourquoi les modèles ne se connaissent pas eux-mêmes</p>
  </a>
</div>

<h1 class="site-title">Notes de version</h1>

<div class="features-grid">
  <a href="docs/release-notes" class="feature-card">
        <h3 class="feature-title">🚀 Notes de version</h3>
        <p class="feature-details">Toutes les versions du produit depuis octobre 2024</p>
  </a>
</div>
