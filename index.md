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
        <h3 class="feature-title">💡6 tips about Mammouth</h3>
        <p class="feature-details">How to choose your default model, and other useful tips</p>
  </a>

  <a href="docs/aspect-ratio-and-midjourney-parameters" class="feature-card">
        <h3 class="feature-title">📏 A/R and Midjourney parameters</h3>
        <p class="feature-details">Choose your image aspect ratio and more hints on image generation</p>
  </a>
  
  <a href="docs/release-notes" class="feature-card">
        <h3 class="feature-title">🚀 Release notes</h3>
        <p class="feature-details">All product releases since October 2024</p>
  </a>

  <a href="docs/how-to-use-image-to-image" class="feature-card">
        <h3 class="feature-title">🖼️ How to use image to image</h3>
        <p class="feature-details">Image to Image with FLUX and Retexture with FLUX DEPTH</p>
  </a>

  <a href="docs/how-to-download-the-mammouth-app" class="feature-card">
        <h3 class="feature-title">📲 How to download the App</h3>
        <p class="feature-details">On Desktop (Mac / Windows / Linux) or Mobile (Android / iOS)</p>
    </a>

  <a href="docs/mammouth-assistant-tutorial" class="feature-card">
        <h3 class="feature-title">📂 Projects mammouths</h3>
        <p class="feature-details">Tutorial on how to use the custom mammouths</p>
    </a>

  <a href="docs/about-privacy" class="feature-card">
        <h3 class="feature-title">🔏 About privacy</h3>
        <p class="feature-details">What happens to your data</p>
    </a>

  <a href="docs/quota-policy" class="feature-card">
        <h3 class="feature-title">🧮 Quota details</h3>
        <p class="feature-details">The current quota policy detailed</p>
    </a>
</div>


<h1 class="site-title">Articles</h1>

<div class="features-grid">
  <a href="docs/model-versions" class="feature-card">
        <h3 class="feature-title">Why models ignores their version</h3>
        <p class="feature-details">AI Identity Crisis: Why Models Don't Know Themselves</p>
    </a>
    
  <a href="docs/the-most-popular-llm" class="feature-card">
        <h3 class="feature-title">LLM Popularity Index</h3>
        <p class="feature-details">What are the most popular LLMs ?</p>
    </a>

  <a href="docs/get-the-best-result-from-your-prompt" class="feature-card">
        <h3 class="feature-title">Get the best from your prompt</h3>
        <p class="feature-details">What is the best model for your prompt? How to understand LLM ranking?</p>
    </a>

  <a href="docs/introducing-llm-popularity-index" class="feature-card">
        <h3 class="feature-title">Intro to the LLM Popularity Index</h3>
        <p class="feature-details">On Desktop (Mac / Windows / Linux) or Mobile (Android / iOS)</p>
    </a>

  <a href="docs/why-should-you-use-flux-pro" class="feature-card">
        <h3 class="feature-title">Why should you use Recraft & FLUX</h3>
        <p class="feature-details">Image generator rankings and more</p>
    </a>

</div>


<!--
hero:
  name: Documentation

features:
  - title: Aspect ratio and Midjourney parameters
    details: Choose your image aspect ratio and more hints on image generation
    link: docs/aspect-ratio-and-midjourney-parameters
  - title: How to use image to image
    details: Image to Image with FLUX and Retexture with FLUX DEPTH
    link: docs/how-to-use-image-to-image
  - title: Release notes
    details: All product releases since October 2024
    link: docs/release-notes
  - title: About privacy
    details: What happens to your data
    link: docs/about-privacy
  - title: How to download the Mammouth App
    details: From Desktop (Mac/Windows/Linux) or Mobile (Android & iOS), you can download the app
    link: docs/how-to-download-the-mammouth-app
  - title: Custom mammouths assistants
    details: Tutorial on how to use the mammouth assistants
    link: docs/mammouth-assistant-tutorial
  - title: Model versions (FAQ)
    details: Why the AIs are not self-aware on Mammouth
    link: docs/model-versions
  - title: Why should you use FLUX Pro
    details: Image generators ranking & more
    link: docs/why-should-you-use-flux-pro
  - title: LLM Popularity Index
    details: What are the most popular LLMs ?
    link: docs/the-most-popular-llm

-->
