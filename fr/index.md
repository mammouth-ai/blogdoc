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
  <h1 class="site-title">Documentation</h1>
</header>

<div class="features-grid">
  <a href="docs/six-useful-tips-about-mammouth" class="feature-card">
        <h3 class="feature-title">💡 6 conseils sur Mammouth</h3>
        <p class="feature-details">Comment choisir votre modèle par défaut et autres conseils utiles</p>
  </a>

  <a href="docs/aspect-ratio" class="feature-card">
        <h3 class="feature-title">📏 Ratio et paramètres d'image</h3>
        <p class="feature-details">Choisissez le format de vos images et autres astuces sur la génération d'images</p>
  </a>
  
  <a href="docs/release-notes" class="feature-card">
        <h3 class="feature-title">🚀 Notes de version</h3>
        <p class="feature-details">Toutes les versions du produit depuis octobre 2024</p>
  </a>

  <a href="docs/how-to-download-the-mammouth-app" class="feature-card">
        <h3 class="feature-title">📲 Comment télécharger l'app</h3>
        <p class="feature-details">Sur ordinateur (Mac / Windows / Linux) ou mobile (Android / iOS)</p>
    </a>

  <a href="docs/mammouth-assistant-tutorial" class="feature-card">
        <h3 class="feature-title">📂 Mammouths de projets</h3>
        <p class="feature-details">Tutoriel sur l'utilisation des mammouths personnalisés</p>
    </a>

  <a href="docs/about-privacy" class="feature-card">
        <h3 class="feature-title">🔏 À propos de confidentialité</h3>
        <p class="feature-details">Ce qui arrive à vos données: hébergement, sécurité, RGPD,..</p>
    </a>

  <a href="docs/quota-policy" class="feature-card">
        <h3 class="feature-title">🧮 Détails des quotas</h3>
        <p class="feature-details">La politique de quota actuelle détaillée</p>
    </a>

  <a href="docs/privacy-policy" class="feature-card">
            <h3 class="feature-title">📋 Politique de Confidentialité</h3>
            <p class="feature-details">Le document officiel (11 articles)</p>
    </a>

   <a href="docs/terms-of-service" class="feature-card">
            <h3 class="feature-title">📋 CGU</h3>
            <p class="feature-details">Conditions générales, Addendum au traitement des données, Politique d'utilisation Acceptable</p>
    </a>
</div>


<h1 class="site-title">Articles</h1>

<div class="features-grid">
  <a href="docs/model-self-awareness" class="feature-card">
        <h3 class="feature-title">Pourquoi les modèles ignorent leur version</h3>
        <p class="feature-details">Crise d'identité de l'IA : pourquoi les modèles ne se connaissent pas eux-mêmes</p>
    </a>

  <a href="docs/choosing-the-right-ai-model" class="feature-card">
        <h3 class="feature-title">Tirez le meilleur de votre prompt</h3>
        <p class="feature-details">Quel est le meilleur modèle pour votre prompt ? Comment lire le classement des LLM ?</p>
    </a>

</div>
