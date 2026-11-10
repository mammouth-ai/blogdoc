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
  <h1 class="site-title">Introducción a Mammouth</h1>
</header>

<div class="features-grid">
  <a href="/es/docs/introduction-to-mammouth/" class="feature-card">
    <h3 class="feature-title">🚀 Primeros pasos</h3>
    <p class="feature-details">Descubre Mammouth y sus funciones principales</p>
  </a>

  <a href="/es/docs/mammouth-assistant-tutorial/" class="feature-card">
    <h3 class="feature-title">📂 Mammouths personalizados</h3>
    <p class="feature-details">Guía para usar Mammouths personalizados</p>
  </a>

  <a href="/es/docs/privacy-with-model-providers/" class="feature-card">
    <h3 class="feature-title">🔏 Privacidad con los proveedores de modelos</h3>
    <p class="feature-details">Qué ocurre con tus datos</p>
  </a>

  <a href="/es/docs/how-to-download-the-mammouth-app/" class="feature-card">
    <h3 class="feature-title">📲 Instalar la aplicación</h3>
    <p class="feature-details">En ordenador (Mac / Windows / Linux) o móvil (Android / iOS)</p>
  </a>
</div>

<h1 class="site-title">Buenas prácticas</h1>

<div class="features-grid">
  <a href="/es/docs/how-to-write-an-effective-prompt/" class="feature-card">
    <h3 class="feature-title">✍️ Escribir prompts eficaces</h3>
    <p class="feature-details">Aprende a redactar prompts para obtener los mejores resultados</p>
  </a>

  <a href="/es/docs/how-to-generate-stunning-images/" class="feature-card">
    <h3 class="feature-title">🏞️ Generar buenas imágenes</h3>
    <p class="feature-details">Técnicas para crear imágenes con IA de gran calidad</p>
  </a>

  <a href="/es/docs/choosing-the-right-ai-model/" class="feature-card">
    <h3 class="feature-title">🎯 Elegir el modelo adecuado</h3>
    <p class="feature-details">Descubre qué modelo de IA se adapta mejor a tus necesidades</p>
  </a>

  <a href="/es/docs/six-useful-tips-about-mammouth/" class="feature-card">
    <h3 class="feature-title">💡 Consejos y trucos</h3>
    <p class="feature-details">Cómo elegir tu modelo predeterminado y otros consejos útiles</p>
  </a>
</div>

<h1 class="site-title">Para desarrolladores</h1>

<div class="features-grid">
  <a href="/es/docs/api-quick-start/" class="feature-card">
    <h3 class="feature-title">⚡ Mammouth API</h3>
    <p class="feature-details">Una API compatible con OpenAI para integrar fácilmente la IA en tus aplicaciones.</p>
  </a>

  <a href="/es/docs/mammouth-code/" class="feature-card">
    <h3 class="feature-title">💻 Mammouth Code</h3>
    <p class="feature-details">Agente de programación de código abierto basado en Mammouth API</p>
  </a>
</div>

<h1 class="site-title">Documentación</h1>

<div class="features-grid">
  <a href="/es/docs/terms-of-service/" class="feature-card">
    <h3 class="feature-title">📋 Condiciones del servicio</h3>
    <p class="feature-details">Condiciones generales, anexo de tratamiento de datos y política de uso aceptable</p>
  </a>

  <a href="/es/docs/privacy-policy/" class="feature-card">
    <h3 class="feature-title">📋 Política de privacidad</h3>
    <p class="feature-details">El documento oficial de privacidad (11 artículos)</p>
  </a>

  <a href="/es/docs/teams/" class="feature-card">
    <h3 class="feature-title">👥 Equipos y empresas</h3>
    <p class="feature-details">Roles, permisos, Mammouths compartidos, SSO</p>
  </a>

  <a href="/es/docs/quota-policy/" class="feature-card">
    <h3 class="feature-title">🧮 Detalles de las cuotas</h3>
    <p class="feature-details">Política de cuotas vigente explicada en detalle</p>
  </a>

  <a href="/es/docs/branding-kit/" class="feature-card">
    <h3 class="feature-title">🎨 Kit de marca</h3>
    <p class="feature-details">Logotipo, tipografía, versiones para modo oscuro y claro</p>
  </a>

  <a href="/es/docs/FAQ/" class="feature-card">
    <h3 class="feature-title">💬 Preguntas frecuentes</h3>
    <p class="feature-details">¿Tienes alguna pregunta? Encuentra aquí la respuesta</p>
  </a>
</div>

<h1 class="site-title">Notas de versión</h1>

<div class="features-grid">
  <a href="/es/docs/release-notes/" class="feature-card">
    <h3 class="feature-title">🚀 Notas de versión</h3>
    <p class="feature-details">Todas las versiones del producto desde octubre de 2024</p>
  </a>
</div>
