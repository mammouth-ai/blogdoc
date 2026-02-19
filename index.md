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
  <h1 class="site-title">Introduction to Mammouth</h1>
</header>

<div class="features-grid">
  <a href="docs/introduction-to-mammouth" class="feature-card">
    <h3 class="feature-title">🚀 Get started</h3>
    <p class="feature-details">Discover Mammouth and its key features</p>
  </a>

  <a href="docs/mammouth-assistant-tutorial" class="feature-card">
    <h3 class="feature-title">📂 Custom mammouths</h3>
    <p class="feature-details">Tutorial on how to use the custom mammouths</p>
  </a>

 <a href="docs/how-to-generate-stunning-images" class="feature-card">
    <h3 class="feature-title">🎨 Generate good images</h3>
    <p class="feature-details">Tips and techniques for creating stunning AI-generated images</p>
  </a>

  <a href="docs/how-to-download-the-mammouth-app" class="feature-card">
    <h3 class="feature-title">📲 Install the app</h3>
    <p class="feature-details">On Desktop (Mac / Windows / Linux) or Mobile (Android / iOS)</p>
  </a>
</div>

<h1 class="site-title">Best practices</h1>

<div class="features-grid">
  <a href="docs/how-to-write-an-effective-prompt" class="feature-card">
    <h3 class="feature-title">✍️ Write effective prompts</h3>
    <p class="feature-details">Learn how to craft prompts that get the best results</p>
  </a>

  <a href="docs/choosing-the-right-ai-model" class="feature-card">
    <h3 class="feature-title">🎯 Choose the right model</h3>
    <p class="feature-details">Understand which AI model to use for your specific needs</p>
  </a>

  <a href="docs/six-useful-tips-about-mammouth" class="feature-card">
    <h3 class="feature-title">💡 Tips & tricks</h3>
    <p class="feature-details">How to choose your default model, and other useful tips</p>
  </a>
</div>

<h1 class="site-title">For coders</h1>

<div class="features-grid">
 <a href="docs/api-quick-start" class="feature-card">
    <h3 class="feature-title">⚡ Mammouth API</h3>
    <p class="feature-details">An OpenAI-compatible API to easily integrate AI into your applications.</p>
  </a>

<a href="docs/mammouth-code" class="feature-card">
    <h3 class="feature-title">💻 Mammouth Code</h3>
    <p class="feature-details">Open source coding agent built on top of Mammouth API</p>
  </a>
</div>

<h1 class="site-title">Documentation</h1>

<div class="features-grid">
  <a href="docs/terms-of-service" class="feature-card">
    <h3 class="feature-title">📋 Terms of Service</h3>
    <p class="feature-details">Terms and Conditions, Data Processing Addendum and Acceptable Use Policy</p>
  </a>

  <a href="docs/privacy-policy" class="feature-card">
    <h3 class="feature-title">📋 Privacy Policy</h3>
    <p class="feature-details">The official privacy document (11 articles)</p>
  </a>

  <a href="docs/about-privacy" class="feature-card">
    <h3 class="feature-title">🔏 About privacy</h3>
    <p class="feature-details">What happens to your data</p>
  </a>

  <a href="docs/quota-policy" class="feature-card">
    <h3 class="feature-title">🧮 Quota details</h3>
    <p class="feature-details">The current quota policy detailed</p>
  </a>

  <a href="docs/model-self-awareness" class="feature-card">
    <h3 class="feature-title">🤖 Models self-awareness</h3>
    <p class="feature-details">AI Identity Crisis: Why Models Don't Know Themselves</p>
  </a>
</div>

<h1 class="site-title">Release notes</h1>

<div class="features-grid">
  <a href="docs/release-notes" class="feature-card">
    <h3 class="feature-title">🚀 Release notes</h3>
    <p class="feature-details">All product releases since October 2024</p>
  </a>
</div>
