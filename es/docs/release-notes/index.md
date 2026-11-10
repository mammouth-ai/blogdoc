# Notas de versión - Mammouth AI

## 9 de noviembre de 2026

### Actualizaciones de modelos

- **FLUX 3** sustituye a FLUX 2.
- **Muse Spark** sustituye a Llama 4 Maverick.
- **Muse Glimmer** es el modelo ligero de Muse.
- **Muse Wonder** es el modelo de razonamiento de Muse.
- **GPT Transcribe** sustituye a Whisper para el dictado.

### Aplicación para iOS

Mammouth está disponible en el [App Store de Apple](https://apps.apple.com/fr/app/mammouth/id6761525677).

### Generación de imágenes

- GPT Image genera imágenes con fondo transparente.
- Las imágenes SVG generadas por modelos de texto se muestran en la interfaz.

### Generación de vídeo

- Se admite la generación de vídeos en formato vertical.
- La duración máxima de los vídeos generados aumenta de 5 a 10 segundos.

### Usa Mammouth como motor de búsqueda

Puedes usar Mammouth como motor de búsqueda en tu navegador. [Descubre cómo](/es/docs/browser-search-shortcut/).

### Mammouth para equipos de desarrollo

La oferta para desarrolladores (Mammouth API y Mammouth Code) es compatible con los planes de Equipo.

Los administradores pueden distribuir créditos API al equipo, definir un presupuesto mensual por miembro y establecer un límite de uso de seguridad para cada periodo de 3 horas.

Cada miembro puede gestionar sus propias claves y hacer un seguimiento de su propio uso.

La ruta `v1/images/edits` está disponible y se han actualizado las versiones de los modelos.

### Otras mejoras

- La búsqueda web cuenta con capacidades agénticas mejoradas para Claude, Mistral, Kimi, DeepSeek, GLM y Muse.
- Selecciona una parte de una respuesta de la IA y elige «Haz una pregunta sobre esto».

## 21 de octubre de 2026

### ⭐ Actualizaciones de modelos

- **Mistral Large 4**
- **GPT-6.1 Sol** sustituye a GPT-6 Sol.
- **Claude 5.5 Sonnet** sustituye a Claude 5 Sonnet.
- **Gemini 3.8 Flash** sustituye a Gemini 3.7.
- **Gemini 4 Argon** sustituye a Gemini 3.1 Pro.
- **Claude Haiku 5.5** sustituye a Haiku 4.5.
- **Nano Banana 2.1** sustituye a Nano Banana 2.

### 🔈 Chat de voz

El chat de voz se ha mejorado por completo:

- Ahora utiliza el modelo GPT-Live más reciente.
- Puedes buscar en la web durante una conversación para obtener información actualizada.
- El chat de voz puede acceder al historial de la conversación, lo que facilita alternar entre texto y voz en la misma conversación.
- Ya hay subtítulos disponibles.
- La pantalla del móvil permanece encendida durante el chat de voz y la síntesis de voz.
- Las transiciones son más fluidas.

### 📄 Más funciones para documentos

- El número máximo de documentos por conversación pasa de **20 a 50**.
- El OCR de los PDF ahora utiliza **Mistral OCR 4.1**.
- Hemos corregido errores y mejorado los mensajes para explicar con más claridad por qué se rechaza un archivo.

### 🎨 Ajustes rediseñados

Hemos rediseñado las páginas de ajustes y añadido un menú de navegación. Ahora puedes gestionar más fácilmente los ajustes de tu cuenta, las claves API, los conectores, la suscripción y el equipo.

### ✨ Además

- Si tienes una suscripción, [mammouth.ai](https://mammouth.ai) te dirige directamente al chat.
- Ya puedes registrarte e iniciar sesión con Apple.
- Los modelos de la API se han actualizado a las versiones más recientes. [Descubre los modelos](https://model-explorer.mammouth.ai/).
- La distribución de miembros en grupos ya está disponible para todos los equipos. Actívala en [permisos](https://mammouth.dev/app/account/settings/permissions). Los propietarios pueden asignar administradores específicos a cada grupo y definir sus permisos.

## 30 de septiembre de 2026

### Actualizaciones de modelos

- **Claude Opus 5.5** sustituye a Claude Opus 5.
- **GPT-6 Sol** sustituye a GPT-5.6 Sol.
- **GPT-6 Luna** sustituye a GPT-5.6 Luna.
- **Grok 4.7** sustituye a Grok 4.6.

### Descubre todos los modelos

Un nuevo botón al final de la lista de modelos, debajo del cuadro de entrada, permite ver todos los modelos disponibles. También se ha mejorado la navegación en móviles.

### Más formatos de documentos

Mammouth admite más formatos de archivo binario, como `.xlsm`, `.docm`, `.jar` y `.nes`.

### Grupos para equipos grandes

Todos los propietarios de equipos pueden crear grupos con sus propios administradores y permisos.

## 18 de septiembre de 2026

### ⭐ Nuevos modelos

- **GPT-6 Astra**
- **Claude Fable 5.1**

### 🔄 Actualizaciones de modelos

**Texto:**

- **GLM 5.3 Flash**
- **DeepSeek v4.1 Flash**

**Imagen:**

- **GPT Image 2.5**
- **Grok Imagine Image 2**

### 📂 El contexto de los documentos se carga por completo

Antes, al importar un documento muy largo, solo se extraía una parte, por lo que el contenido podía quedar truncado.

Ahora el modo agéntico se activa automáticamente para los documentos grandes, de modo que se cargan el documento y todo su contexto.

### 🧠 Más memoria de conversación predeterminada

Varios usuarios indicaron que la memoria de conversación era demasiado limitada, incluso sin cambiar sus ajustes. Ahora el modo Memoria amplia se activa automáticamente para las conversaciones del día actual.

Para mantener activada la Memoria amplia en todas las conversaciones, incluidas las de días anteriores, activa el modo «Memoria extendida».

### 🤖 Modelo predeterminado más inteligente

Cuando no se selecciona explícitamente ningún modelo, el modelo de texto predeterminado ya no se limita a Mistral. Ahora elige dinámicamente entre un conjunto de modelos en función del prompt.

Hemos implementado el enrutamiento inteligente de modelos de texto.

### 🔌 Activación de conectores personalizados con OAuth

Algunos conectores requieren o admiten autenticación OAuth. Ahora puedes conectarte a ellos y utilizarlos directamente.

### 📦 Además

- Sora se ha retirado porque OpenAI dejó de ofrecerlo.
- Ya puedes importar documentos directamente desde Google Drive o Dropbox, aunque no estén guardados localmente.
- Se han actualizado los modelos de la API.
- Mammouth Code se ha actualizado a la versión 1.18.31.

## 20 de agosto de 2026

### 🔌 Conectores (MCP)

- **Conectores preconfigurados**: hay 4 conectores (Microsoft 365, GitHub, Notion y Atlassian) disponibles directamente en el chat.
- **MCP personalizado**: si no encuentras el que necesitas, puedes configurar tu propio MCP personalizado.

Puedes activar los conectores en los [ajustes de conectores](https://mammouth.ai/app/account/settings/connectors).

En los equipos, el administrador puede definir los conectores disponibles en [permisos](https://mammouth.ai/app/account/settings/permissions).

### 🔄 Actualizaciones de modelos

- **Claude Opus 5** sustituye a Opus 4.8 y Fable.
- **Gemini 3.7 Flash** sustituye a 3.6 Flash.
- **Grok 4.6**
- **GLM 5.3**
- **Qwen 3.8**

### 🛠️ Estabilidad de la plataforma

Hemos invertido mucho en mejorar la estabilidad general de la plataforma. Se han corregido o reducido considerablemente numerosos errores:

- **Interrupción de prompts**: a veces, algunos prompts se interrumpían antes de que la IA terminase la respuesta. Ya está corregido; además, puedes actualizar la página, cerrar el navegador o apagar el ordenador y la generación continuará, salvo que pulses el botón para detenerla.
- **Descarga de XLSX**: algunos archivos XLSX no se descargaban correctamente.
- **Archivos generados que bloqueaban las conversaciones**: algunos archivos, especialmente ZIP y TAR, podían bloquear una conversación e impedir el envío de mensajes nuevos. Ya está corregido.
- **Nuevos formatos de archivo**: se admiten los archivos `.tar`, `.tgz` y `.tar.gz` al descargar documentos.
- **Archivos vacíos**: la IA a veces generaba archivos JSON vacíos; ya está corregido.

### 🧷 Actualización de la API

- **Experiencia de los ajustes de API**: hemos actualizado los ajustes de la API ([mammouth.ai/app/account/api](https://mammouth.ai/app/account/api)) para que los movimientos de créditos API sean más claros.
- **Modelos API disponibles**: se han actualizado a las nuevas versiones. [model-explorer.mammouth.ai](https://model-explorer.mammouth.ai/)

## 24 de julio de 2026

### 🧠 Nuevos modelos de razonamiento

- **Claude Fable**
- **GPT 5.6 Sol**
- **Kimi K3**
- **Grok 4.5 Reasoning**

### ⭐ Nuevos modelos estándar

- **GPT 5.6 Luna**
- **Gemini 3.6 Flash**
- **Grok 4.5**

### ⚡ Nuevo modelo ligero

- **Gemini 3.5 Flash Lite**

### 🧷 Para desarrolladores

**Nuevos modelos en la API**: Kimi K3 y la mayoría de los modelos anteriores también se han añadido a Mammouth API.

## 13 de julio de 2026

### 🎵 Generación de música con Lyria

**Generación de música**: ya está disponible en Mammouth con Lyria.

### 🔄 Actualizaciones de modelos

- **Claude Sonnet 5** sustituye a Claude Sonnet 4.6.
- **GLM 5.2** sustituye a GLM 5.1.
- **Qwen 3.7** sustituye a Qwen 3.6.
- **Grok Imagine Image Quality** sustituye a Grok Imagine Image.
- **Recraft v4.1** sustituye a Recraft v4.
- **Recraft v4.1 SVG** sustituye a Recraft v4 SVG.

### ✨ Nuevas funciones

**Modo agéntico**: se puede activar en el cuadro de entrada. Es ideal para tareas complejas, como crear y editar documentos o realizar búsquedas web exhaustivas y documentadas.

**Síntesis de voz con IA**: ya se admite en alemán y otros 10 idiomas gracias al TTS de OpenAI. El TTS en francés e inglés sigue disponible con Voxtral. También se han corregido problemas técnicos con el TTS.

### 🧷 Para desarrolladores

**Nuevos modelos en la API**: hemos añadido nuevos modelos. Descúbrelos en [model-explorer.mammouth.ai](https://model-explorer.mammouth.ai/).

**Modelo recomendado de Mammouth Code**: en Mammouth Code puedes elegir `mammouth-recommended` en el selector de modelos. Utiliza el mismo modelo eficiente que usamos internamente para programar. Actualmente es GLM 5.2 y lo actualizaremos cuando otro modelo ofrezca una mejor relación calidad-precio. Usa el modelo recomendado para generar código de calidad al mejor precio.

## 12 de junio de 2026

### ⭐ Nuevos modelos

- **Claude Opus 4.8**
- **Gemini 3.5 Flash**
- **Mistral Medium 3.5**
- **Grok 4.3**

### 📂 Importante mejora en documentos

**Edición y generación avanzada de documentos**: Mammouth admite la edición y generación complejas de documentos en todas las extensiones compatibles. La IA puede abrir un ordenador virtual para editar y generar archivos directamente con herramientas y subagentes.

**PDF de hasta 100 MB**: se admiten archivos PDF de hasta 100 MB.

### 🌐 Búsqueda web integrada

**Funciones web para todos los modelos**: integramos las funciones web directamente en Claude Sonnet y Claude Opus, así como en Mistral, Kimi, DeepSeek, GLM y Qwen. Ya no hacen falta modelos específicos para la web: ahora puedes forzar el uso de esta herramienta mediante el selector de búsqueda web del campo del prompt.

### 📊 Panel de cuotas

**Seguimiento del uso por modelo**: ya está disponible un panel de cuotas para supervisar el uso de cada modelo.

### 🪛 Corrección de errores

**GPT Image 2**: hemos corregido errores de GPT Image 2.

### 🧷 Actualizaciones de la API

**Archivos más grandes en completions**: la API ahora admite archivos más grandes en las completions.

**Nuevos modelos**: se han añadido nuevos modelos a la API.

### ⚽ Accesorios Mammouth para la Copa Mundial

**¡Apoya a tu país!** Sigue la Copa Mundial y consigue accesorios de Mammouth de tu país. Un Mammouth seguirá disponible mientras el país continúe en la competición.

## 1 de mayo de 2026

### ⭐ Actualizaciones de modelos destacados

- **GPT 5.5**
- **Claude Opus 4.7**
- **DeepSeek v4 Pro**
- **Qwen 3.6 Plus**
- **Kimi K2.6**
- **GLM 5.1**: hemos añadido la marca GLM a nuestra oferta.

### 🖼️ Actualizaciones de modelos de imagen

- **Nano Banana 2**
- **GPT Image 2**

### ⚡ Actualización del modelo ligero

- **Gemini 3.1 Flash Lite**

### 🎨 Mejoras de diseño

**Lista de nuevas consultas revisada**: los modelos ahora aparecen en el mismo orden que en la página de nueva conversación. Tu modelo predeterminado aparece primero, etc. (arrastra los modelos para seleccionar el predeterminado).

**Campo de entrada ampliable**: puedes ampliar el campo de entrada a pantalla completa para editar prompts largos con más facilidad.

**Mensajes de usuario contraídos**: los mensajes de usuario se contraen en el hilo de conversación para facilitar la navegación por los mensajes anteriores.

### 📂 Actualizaciones de documentos

**Compatibilidad con archivos ZIP**: ahora se pueden subir archivos ZIP.

**OCR de PDF mejorado**: ahora se procesan hasta 50 páginas de PDF escaneados que requieren OCR (antes eran 20).

**Correcciones de XLSX**: hemos resuelto problemas que impedían descargar correctamente algunos archivos XLSX.

### 🔄 Otros

**Importación de conversaciones**: puedes importar conversaciones desde ChatGPT, Claude u otra cuenta de Mammouth directamente desde los ajustes.

**Mammouth Code**: se ha actualizado y se han corregido errores de instalación en procesadores antiguos. Para descargar la última versión, usa el script de instalación: `curl -fsSL "https://code.mammouth.ai/install.sh" | bash` (Linux/Mac) o `irm "https://code.mammouth.ai/install.ps1" | iex` (Windows).

### 🧷 Actualizaciones de la API

**Nuevos modelos**: los modelos indicados anteriormente también se han añadido a la API.

**Model Explorer**: ahora tenemos una [vista atractiva de los modelos](https://model-explorer.mammouth.ai/), gracias a nichu42. Es [de código abierto](https://codeberg.org/mammouth-ai/mammouth-model-explorer). Nuestro [blog de documentación](https://github.com/mammouth-ai/blogdoc) también es de código abierto; nos encantan las sugerencias de cambios.

**Varias claves API**: ahora puedes crear varias claves API para separar tus proyectos. Los registros se pueden filtrar por clave API para facilitar el seguimiento.

### 📱 Aplicación móvil

**Aplicación para Android disponible**: la aplicación móvil está en Google Play: [https://play.google.com/store/apps/details?id=ai.mammouth.application](https://play.google.com/store/apps/details?id=ai.mammouth.application)

## 14 de abril de 2026

### 🎬 Generación de vídeo

Ya puedes generar vídeos cortos en Mammouth con 4 modelos: Veo 3.1 fast, Sora 2, Grok Video y Kling 2.5.

### ⭐ Nuevos modelos

**Grok 4.20**: el nuevo modelo Grok está disponible con búsqueda web mejorada, incluida la búsqueda específica en x.com.

**Actualizaciones de modelos ligeros:**
- **Claude Haiku 4.5** se ha añadido.
- **GPT 5.4 nano** sustituye a GPT 5 mini.
- **Mistral Small 4** sustituye a Mistral Small 2.

### 👥 Nuevas funciones para equipos y empresas

**Planes combinados**: los equipos pueden combinar los planes (Starter/Standard/Expert) en una misma suscripción para adaptarse a las distintas necesidades de los usuarios.

**Integración SSO**: ahora se admite SSO con Microsoft Entra, Keycloak, Okta y otros. Esto facilita la implementación de Mammouth en empresas y universidades.

Más información sobre equipos: [info.mammouth.ai/docs/teams/](https://info.mammouth.ai/docs/teams/)

### 📊 Nueva política de cuotas y más contexto

**Política de cuotas actualizada:**
- Se han eliminado las cuotas mensuales de imágenes y documentos.
- También se ha eliminado el límite fijo de 50 mensajes.
- Ahora todos los límites se calculan dentro de la cuota de sesión de 3 horas, según el consumo real de IA (número y longitud de mensajes, modelo seleccionado, razonamiento, búsqueda web, etc.).
- Se ha mejorado el cambio de modelo al alcanzar el límite para que sea más gradual y menos frustrante.

**Más contexto para documentos**: se ha añadido una opción en los [ajustes](https://mammouth.ai/app/account/settings) para aumentar el contexto de documentos largos.

**Más memoria**: se ha añadido una opción en los [ajustes](https://mammouth.ai/app/account/settings) para aumentar el contexto del historial de conversación que se envía con cada mensaje.

Más información: [La nueva política de cuotas: antes y después](https://public.mammouth.ai/evolution-des-quotas)

### Además

- **Síntesis de voz** (con Voxtral) para que la IA lea sus respuestas en voz alta.
- **Nuevas extensiones de archivo compatibles**: `.ods`, `.odp`, `.odt`.
- **Diseño de mensajes revisado** para reducir los bordes y adaptarse mejor a móviles.
- **Correos electrónicos** (enlaces de verificación, contraseñas olvidadas, invitaciones de equipo, etc.) completamente rediseñados.
- **Clasificación de conversaciones** por Mammouth y fecha:
  - Puedes seleccionar, mover o eliminar en bloque las conversaciones de más de 3 meses.
  - Puedes seleccionar, mover o eliminar en bloque las conversaciones de un Mammouth personalizado.
  ![Filtros de conversaciones](/docs/release-notes/conversation_filter.png)

## 6 de marzo de 2026

### ⭐ Nuevos modelos

**Gemini 3.1 Pro**

**Recraft v4**

### 🦣 Mammouths compartidos

Ahora puedes compartir Mammouths mediante un enlace público, invitación por correo electrónico o dentro de tu equipo.

### Además

- Mientras el LLM genera una respuesta, puedes copiar bloques de código o tablas y abrir enlaces externos.
- Ahora se admiten todas las extensiones de archivos de texto. Esto resulta especialmente útil para desarrolladores que usan formatos específicos, como `.csproj` o `.mq4`.
- Se han añadido modelos a la API (GLM-5, Gemini 3.1 Pro, Claude Sonnet 4.6 y Gemini 2.5 Flash Lite). También se han retirado 13 modelos para mantener la lista actualizada.
- Se ha mejorado la eliminación de conversaciones: ahora se ejecuta en segundo plano, así que puedes seguir trabajando sin esperar frente a una pantalla bloqueada.

## 18 de febrero de 2026

### ⭐ Nuevos modelos

**Claude Sonnet 4.6**, recién lanzado.

**Grok Imagine** sustituye al antiguo modelo de imagen Grok 2.

### 🔄 Actualizaciones de modelos

- **GPT Image**: mejor comprensión del texto en imágenes, especialmente en prompts largos.

### ✨ Nuevas funciones

- **Copiar durante la generación**: ahora puedes copiar el principio de la respuesta de la IA mientras aún se está generando.
- **Generar documentos con modelos de razonamiento**: la generación de documentos funciona con modelos de razonamiento como Gemini Pro o Claude Opus.

### ⚙️ Ajustes y entrada

- **Nueva página de ajustes**: se ha rediseñado la [página de ajustes](https://mammouth.ai/app/account/settings/).
- **Cambiar el comportamiento de la tecla ENTER**: elige qué tecla envía el prompt — ENTER, ALT+ENTER o CTRL+ENTER — en [tus ajustes](https://mammouth.ai/app/account/settings/).

### 🎭 Nuevos accesorios para Mammouths

Echa un vistazo a los accesorios de Mammouth disponibles ahora mismo. ⛷️

## 12 de febrero de 2026

### ⭐ Nuevos modelos

**Claude Opus 4.6** y **Kimi K2.5**.

### 👨‍💻 ¡Mammouth Code!

Consulta la nueva [documentación de Mammouth Code](https://info.mammouth.ai/docs/mammouth-code/) para obtener más información.

### 🌐 Actualizaciones web

- **Búsqueda de imágenes**: las búsquedas web ahora pueden mostrar imágenes.
- **Simplificación**: la categoría web se ha fusionado con los modelos de texto y se ha eliminado OpenPerplex. Aun así, puedes forzar la selección de la categoría web.
- **Perplexity**: ahora tiene una nueva vista con fragmentos.

### Otros

- **El prompt vuelve a enviarse**: ahora puede ramificarse en varias conversaciones.
- Al copiar una respuesta, se pega con formato Markdown (más práctico para correos, documentos, etc.).

## 23 de enero de 2026

### ⭐ Nuevo modelo

**Mistral Large 3** sustituye a Mistral Medium.

### 🔄 Actualizaciones de modelos

- **Gemini**: mayor estabilidad y fiabilidad.
- **Gemini**: ahora admite el análisis de enlaces de vídeo de YouTube.

### 📂 Gestión de conversaciones

- **Operaciones en lote**: elimina o mueve varias conversaciones a la vez.
- **Búsqueda mejorada**: encuentra conversaciones por modelo o Mammouth personalizado.

### 🦣 Mammouths

- **Mammouths ilimitados**: se elimina el límite de 15.
- **Mammouths favoritos**: marca como favoritos los Mammouths que más utilizas.
- **Orden inteligente**: el último Mammouth que hayas usado pasa automáticamente a la parte superior de la lista.
- **Navegación mejorada en la barra lateral**: explora tu colección de Mammouths con más facilidad.

### 🎭 Nuevos accesorios para Mammouths

**Accesorios de temporada**: colecciona accesorios de duración limitada a lo largo del año. ¿Cuántos conseguirás?

### 📱 Aplicación móvil (usuarios de Chrome)

**Reinstala para obtener nuevas funciones**: actualiza la aplicación para acceder a funciones nativas:
- **Accesos directos rápidos**: mantén pulsado el icono de la aplicación para mostrar accesos directos a acciones.
- **Compartir mejorado**: comparte fotos y archivos directamente en Mammouth con facilidad.

### Además

- **Pestañas dinámicas del navegador**: los nombres de las conversaciones y los iconos de Mammouth ahora aparecen en las pestañas.
- **API Nano Banana**: se ha añadido como primer modelo de imagen de Mammouth API.
- **Mejoras de GPT Image**: mayor calidad y mejores capacidades de generación de imágenes.
- **Precios con IVA incluido**: ahora todos los países de la UE muestran precios con IVA incluido.

## 1 de enero de 2026

### ⭐ Nuevo modelo prémium

**Claude Opus 4.5**, el modelo más potente de Anthropic, llega a Mammouth.

### 🔄 Actualizaciones de modelos

- **GPT 5.2** sustituye a GPT 5.1.
- **Gemini 3 Flash** sustituye a Gemini 2.5 Flash.
- **GPT Image 1.5** sustituye a GPT Image 1.

### 🌟 Nuevas marcas

**Kimi**, con dos modelos:
- Kimi K2
- Kimi K2 Thinking

**Qwen**, con:
- Qwen 3 Coder

### 📂 Más contexto para documentos

**8 veces más extracción de contexto**: el contexto extraído de los documentos en tus Mammouths se ha multiplicado por 8 y ahora iguala la capacidad de contexto de las conversaciones.

### ⚙️ Control avanzado de ajustes

- **Desactivar los ajustes de API**: desactiva el acceso a la API directamente desde el menú.
- **Gestionar marcas**: desactiva marcas de modelos específicas para ti y tu equipo desde los [ajustes de permisos](https://mammouth.ai/app/account/settings/permissions).

### 🌎 Nuevos idiomas

🇳🇱 **¡Mammouth ahora habla neerlandés!**

## 24 de diciembre de 2025

### ✨ Nuevo diseño: ¡Mammouth cambia de aspecto!

Descubre una nueva identidad visual, más opciones de personalización y una interfaz rediseñada para disfrutar de una experiencia aún mejor.

### 🎨 **Nuevo logotipo y Mammouths personalizables**

- **Nuevo logotipo**: hemos modernizado la forma y los colores para darle un aspecto más dinámico y actual, sin perder el espíritu emblemático ni el icono original de Mammouth.
![Logotipo de Mammouth](/docs/release-notes/mammouth_logo.png)

- **Mammouths personalizados**: personaliza tu Mammouth con una mayor variedad de colores y accesorios para hacerlo realmente único.
![Página de creación de Mammouths personalizados](/docs/release-notes/custom_mammouths_new_creation_page.png)

### **📱 Mejor experiencia de usuario (especialmente en móviles)**

- **Botones más grandes** para una navegación más fácil e intuitiva.
- **Nueva paleta de colores** con una interfaz renovada y armoniosa.
- **Diseño adaptable a móviles** para una experiencia fluida en todos tus dispositivos.
- **Nuevo modo oscuro** con una visualización más coherente y cómoda para la vista.
![Diseño móvil](/docs/release-notes/mammouth_mobile_design.jpeg)

## 17 de diciembre de 2025

⭐ **Flux 2 Pro** sustituye a Flux Kontext Pro.

⭐ **DeepSeek v3.2** sustituye a DeepSeek v3.1.

**Además**

📍 **Fija tus conversaciones favoritas** para mantenerlas al principio de la lista.

🗃️ **Generación de archivos**: hemos mejorado el sistema de generación de archivos.

⬇️ **Mejoras al volver a consultar otros modelos**
- Perplexity se ha añadido a la lista de modelos disponibles.
- Al volver a consultar DeepSeek, Grok o Mistral, la búsqueda web se activa automáticamente cuando es pertinente.

🧷 **Actualización de la API**: Claude Opus 4.5, GPT 5.1, GPT 5.2, Gemini 3 Pro, Perplexity Sonar Pro, Perplexity Deep Research, Grok Code Fast, Claude 4.5 Haiku, Qwen3 Coder, Kimi K2, Mistral Large 3 y DeepSeek v3.2 se han añadido a la API.

## 3 de diciembre de 2025

👥 **Roles de equipo**: si usas Mammouth en tu empresa, ahora puedes:
- Asignar roles: propietario, administrador (gestiona el equipo y activa o desactiva miembros) y miembros.
- Transferir la propiedad: el propietario puede designar a su sucesor.
- Usar una cuenta de gestión: el propietario del plan no tiene que asignarse una licencia.
- Enviar invitaciones en lote a varias direcciones de correo electrónico.
![Actualización de roles de equipo](/docs/release-notes/team_updates_roles_EN.png)

**Además**

**⭐ Grok 4.1 fast** sustituye a Grok 4.

⬆️ **Exporta tus conversaciones** en formato JSON.

⬇️ **Importa tus conversaciones desde ChatGPT** — [más información](/es/docs/import-conversations/index.md).

💡 Consejo de producto: si pides a un modelo de texto como Mistral que genere una imagen, creará un enlace para volver a enviar rápidamente tu solicitud a un modelo de imagen.

🪛 Se ha corregido un error ocasional de GPT-Image al enviar emojis en el prompt.

## 21 de noviembre de 2025

**⭐ Gemini 3 Pro** sustituye a Gemini 2.5 Pro.

## 18 de noviembre de 2025

**⭐ GPT 5.1**: GPT 5.1 y GPT 5.1 Thinking sustituyen a GPT 5. El modelo es más rápido y conserva el rendimiento.

**⭐ Grok 4 fast**: hemos actualizado Grok 4 con un modelo de texto más rápido, el nuevo modelo ligero y un modelo de razonamiento.

**🍌 Nano Banana**: hemos actualizado Nano Banana a la versión posterior a la vista previa. Ahora admite [parámetros de relación de aspecto](/es/docs/aspect-ratio/index.md).

**🌐 Activación automática de la búsqueda web**: Mistral, Grok y DeepSeek ahora buscan automáticamente en la web cuando es pertinente. Puedes desactivar o forzar la búsqueda haciendo clic en el icono web al escribir el prompt.

**Además**

✉️ Ahora puedes cambiar el correo electrónico de la cuenta en los [ajustes](https://mammouth.ai/app/account/settings).

⏬ Se ha añadido un botón de acceso directo para desplazarse al final de la conversación.

🪛 Se ha corregido un error de la última versión de Safari que impedía a las IA leer documentos con acentos franceses en el título. También se ha solucionado un problema con algunas importaciones de código que la IA mostraba incorrectamente al subirlas como documentos.

🧷 Los embeddings ya están disponibles en Mammouth API.

## 5 de noviembre de 2025

**⭐ Recraft Vectorize (PNG a SVG) ⭐**

Recraft ahora puede vectorizar imágenes PNG o JPEG a formato `.svg`. Es el único modelo capaz de hacerlo.

**🐳 DeepSeek v3.1 Terminus**: hemos actualizado DeepSeek v3.1 a su versión más reciente.

**🔉 Audio a texto**: sube y analiza archivos de audio con Gemini.

**📹 Vídeo a texto**: sube y analiza vídeos cortos (de menos de 20 MB) con Gemini.

**Además**

💭 El modo de reflexión ahora es menos intrusivo y tiene un diseño más fluido. También se muestra el modo de búsqueda web de GPT.

🦊 La aplicación ya está disponible para usuarios de Firefox en Windows.

🪛 Se ha corregido el envío accidental del prompt cuando se suelta Shift antes de pulsar Enter al usar Shift + Enter.

➗ Se han corregido algunas fórmulas LaTeX para mostrar mejor las ecuaciones matemáticas.

📋 La carga del historial de conversaciones en la barra lateral funciona mejor en pantallas grandes.

## 8 de octubre de 2025

**⭐ Claude Sonnet 4.5 ⭐**

Sustituye a Claude Sonnet 4. Consulta el anuncio de Anthropic [aquí](https://www.anthropic.com/news/claude-sonnet-4-5).

**🧠 Memoria de conversación**

Hemos ampliado la memoria de conversación. Ahora el modelo puede acceder a todos los mensajes del historial, independientemente de la longitud de la conversación.

**🎨 Diseño de las respuestas de la IA**

Se ha mejorado el diseño de las respuestas. Los espacios entre párrafos y títulos están mejor ajustados, y las citas, las etiquetas y las tablas generadas tienen mejores colores.

**⛵ Adiós a Midjourney**

La semana pasada, nuestro proveedor de Midjourney dejó de ofrecer el servicio. Lamentablemente, no encontramos un sustituto adecuado y Midjourney todavía no ofrece una API oficial.
Aunque Midjourney ocupa el cuarto puesto en nuestro uso de generación de imágenes (por detrás de Nano Banana, GPT Image y FLUX) y el quinto en nuestras evaluaciones de rendimiento, sigue teniendo un lugar especial en nuestros corazones. Nos planteamos recrear su experiencia de cuadrícula de cuatro imágenes con otros modelos.
Esperamos que algún día Midjourney lance una API accesible para desarrolladores. Mientras tanto, cada cual seguirá su camino.

**Además**

- **GPT Image** ahora es totalmente conversacional (como Nano-Banana).
- **Corrección de errores**: algunos modelos intentaban ejecutar código sin que se les pidiera al analizar documentos o gráficos y fallaban. Ya está corregido.
- **Mammouth API**: ya admite Claude Sonnet 4.5, Grok-4, Grok-4-fast, DeepSeek-3.1-Terminus y DeepSeek-3.2-exp.

## **16 de septiembre de 2025**

**⭐ Nuevos modelos ⭐**

- **Nano Banana** (*antes Gemini 2.5 Flash Image*): puede editar imágenes y mantener conversaciones.
- **DeepSeek v3.1** (sustituye a DeepSeek v3).

**⚡ Inicia una conversación con modelos ligeros**

Puedes iniciar una conversación nueva con cualquier modelo ligero, aunque no hayas alcanzado tu cuota.

**🧷 Servicios API para tus automatizaciones**

- Compra créditos adicionales en los [ajustes de la API](https://mammouth.ai/app/account/settings/api).
- También puedes comprar créditos sin contratar una suscripción.
- Nuevos modelos compatibles: GPT-5, GPT-5-mini, GPT-5-nano, Claude 4.1 Opus, Mistral 3.1 y DeepSeek v3.1.

**Además…**

- **Mejor gestión de varios documentos en una conversación**: antes, los documentos cortos podían quedar eclipsados por los largos y la IA los ignoraba; ya no ocurre.
- **Generación de documentos**: se ha solucionado un problema que impedía ocasionalmente a algunos modelos generar archivos (PDF, DOCX y XLS).
- Se ha actualizado la [página de precios](https://mammouth.ai/pricing) para destacar el plan **Team** y ofrecer información actualizada sobre los servicios de Mammouth (créditos API, Perplexity, modo de voz, etc.).
- Hemos actualizado nuestras [Condiciones generales de uso](https://info.mammouth.ai/docs/terms-of-service/).
- **GPT-5** ahora ofrece:
  - Mejor formato de texto.
  - Mejor representación de ecuaciones matemáticas.
  - Un proceso de razonamiento visible.

## **25 de agosto de 2025**

**⭐ Nuevo modelo: Mistral Medium 3.1**

**📁 Contexto largo y documentos**

Hemos mejorado considerablemente la gestión de contextos largos (mensajes y documentos extensos):
- mayor capacidad de contexto;
- mejor extracción de contenido;
- gestión optimizada de contextos de código largos;
- mayor velocidad;
- menos errores, etc.

**🎨 Mejoras de experiencia de usuario**
- El botón para copiar código ahora flota para que sea más fácil acceder a él.
- Al copiar y pegar correos o contenido HTML ya no se añaden saltos de línea no deseados.
- Se ha rediseñado la navegación móvil para que sea más fluida.
- Ahora se ven más Mammouths personalizados en la barra lateral.
- El número máximo de Mammouths aumenta de 12 a 16.

**🌐 Acceso web para todas las IA**

Hemos ampliado las capacidades web a Mistral, Claude, DeepSeek, Grok y Llama.

## 8 de agosto de 2025

**⭐ GPT-5**
- GPT-5 sustituye a GPT-4.1.
- GPT-5 mini sustituye a GPT-4.1 mini.
- GPT-5 Thinking (GPT-5 con razonamiento más sistemático) sustituye a o3 y o4-mini.

**🦣 Cada Mammouth personalizado ahora tiene su propio modelo predeterminado** y su propio orden de modelos antes de pulsar Intro.

**✍️ El prompt se guarda como borrador** y se conserva al cambiar de conversación o actualizar la página, hasta que lo envíes.

## 4 de agosto de 2025

### ⭐ Nuevos modelos

**Nuevos modelos destacados**
- o3
- Magistral

**Nuevos modelos de imagen**
- Imagen 4.0 (de Gemini)
- Grok Images

**Nuevos modelos ligeros, rápidos e ilimitados**
- Mistral Small 32B
- Llama 4 Scout
- GPT-4.1-mini
- Grok-3-mini
- Gemini 2.5 Flash Lite

### ↪️ Volver a consultar otros modelos en una conversación

Ahora puedes volver a consultar otro modelo con cualquier mensaje de usuario de una conversación, no solo con el primero. Así se crea una ramificación de la conversación.

### ✨ Conversaciones con varios modelos

Las conversaciones ahora están asociadas a una marca, no a un modelo. Por eso puedes pasar de un modelo de texto a uno de imagen o de razonamiento dentro de la misma conversación.

### Además
- Cuando se alcanza una cuota, la conversación continúa con el modelo ilimitado de la marca; ya no hace falta iniciar otra conversación.
- Se ha actualizado el logotipo de Grok: ahora es el de Grok en lugar del de xAI.
- Puedes eliminar el mensaje anterior de una conversación para volver al mensaje n.º 2 anterior, y así sucesivamente hasta el primero.
- La página de error 404 (y otras páginas) ahora muestra un Mammouth adorable.

## 24 de julio de 2025

### 🌟 Grok 4

### 📂 Documentos: análisis más rápido y con más opciones

- Velocidad: el análisis de documentos ahora es 3 veces más rápido.
- Los PDF escaneados y otros PDF compuestos por imágenes ahora se analizan con Mistral OCR.
- Se han añadido unas 80 extensiones nuevas: ya se admiten más de [200 extensiones de archivo](https://info.mammouth.ai/docs/supported-file-extensions/).

### 📱 Instalación rápida de la aplicación

La aplicación se instala con un clic desde el menú del panel izquierdo (en todos los navegadores, excepto Firefox y Safari).

### 🌍 Nuevos idiomas

🇵🇱 Mamut mówi teraz po polsku

🇷🇴 Mamutul vorbește acum românește

🇵🇹 O mamute fala agora português

🇦🇩 El mamut parla ara català

## 3 de julio de 2025

### 🌟 Midjourney v7

### 🧷 Mammouth API

- **Todas las personas suscritas reciben tokens gratuitos incluidos en su plan**: 2 $/4 $/10 $ al mes para Starter/Standard/Expert.
- **Compatible con OpenAI**: ahora se puede usar en [n8n](https://public.mammouth.ai/How-to-use-Mammouth-in-n8n-226cf297c1ca80ab9f5dd999410884ee?pvs=74), Cline, etc. con complementos de OpenAI.
- Hay 23 modelos de texto disponibles.
- [**Consulta la documentación**](https://info.mammouth.ai/docs/api-quick-start/).

### 🧮 Visualización de cuotas y uso

- Consulta tus cuotas en cualquier momento desde los ajustes de tu cuenta.
- Puedes ocultar el indicador de cuota del panel izquierdo.

### 📂 Documentos e historial

- Al trabajar con documentos en una conversación, puedes desactivar los documentos del historial anterior o de los asistentes para centrarte en el último documento subido o mantenerte por debajo del límite de 32 MB.

![Gestión de archivos en el prompt](/docs/release-notes/file_management_in_prompt.png)

- Nueva extensión de archivo: `.doc` (aunque sea una antigua extensión de MS Office).

### 👷 Errores del servidor y documentos defectuosos

**Hemos corregido muchos errores esporádicos de respuestas de la IA**, entre ellos errores del servidor en Claude con imágenes subidas, errores al cargar documentos cuyo tamaño total supera los 32 MB, errores con documentos protegidos por contraseña, errores con endpoints de API defectuosos, documentos eliminados que interrumpían conversaciones con el mismo documento reenviado y documentos defectuosos que bloqueaban la conversación.

### Otras funciones

- Ya se acepta PayPal.
- Ahora puedes iniciar sesión con Google y contraseña usando el mismo correo electrónico.
- Las conversaciones con prompts reenviados ahora se agrupan en el panel izquierdo (consulta el GIF).

![Acordeones](/docs/release-notes/Accordions_GIF.gif)

## 6 de junio de 2025

### 🌟 Flux Kontext y DeepSeek R1

- **FLUX Kontext Pro** sustituye a FLUX Pro y Retexture.
- **DeepSeek R1 28.05** actualiza DeepSeek R1.

### 🗃️ Generación de archivos

- Genera CSV, DOCX, PDF… con todos los LLM.
- Genera gráficos como imágenes con todos los LLM.
- [Consulta aquí un ejemplo](https://mammouth.ai/shared/7fe819ad-5b61-4111-8f80-ab0521bbe848).

### 📱 Aplicación móvil rediseñada

- **🎙️ Voz a texto** para dictar tus prompts.
- **🎨 Entrada más fluida**: se acabaron los solapamientos del teclado con los modelos en la página de nueva conversación.
- 🎨 Se han corregido numerosos problemas menores de interfaz (márgenes, bordes, ventanas emergentes y solapamientos) para mejorar el aspecto general.

## 23 de mayo de 2025

### 🌟 Mistral 3 y Claude 4

- **Mistral Medium 3** sustituye a Mistral 24.11.
- **Claude Sonnet 4** sustituye a Claude 3.7.

### 🧠 Edición conversacional inteligente de imágenes

- **Los modelos de imagen ahora entienden** cuando pides una modificación basada en el mensaje anterior.
- **Puedes ver el prompt final** enviado a la IA detrás del icono 🪄.

### ⚙️ [Ajustes de cuenta](https://mammouth.ai/app/account/settings) — página rediseñada

- Ahora puedes eliminar todas tus conversaciones a la vez.
- Ahora puedes eliminar tu cuenta.
- Nueva ordenación de los correos de usuario en los [ajustes del equipo](https://mammouth.ai/app/account/team) (por dominio y luego por nombre de correo).

:::info Además…

⚡ **Navegación más fluida entre conversaciones**: carga progresiva del contenido con un esqueleto de carga.

🖋️ **Actualización de la edición del último mensaje**: al editar el último mensaje, puedes eliminar el documento adjunto.

🔏 **Se ha actualizado la [política de privacidad](../privacy-policy/).**

:::

## 9 de mayo de 2025

::: info Actualizaciones de modelos
🌟 **Perplexity**: hemos añadido Perplexity Sonar Pro.

🌟 **Gemini 2.5 Flash**
:::

Además:

⚡ **Varios prompts**: ahora es posible generar varias respuestas de IA a la vez.

🧠 **Nombres automáticos para las conversaciones**

🎨 **El mensaje de entrada conserva la sangría**

## 25 de abril de 2025

::: info Actualización de modelos
🌟 **GPT Images** sustituye a DALL-E.
:::

Además:

🔍 Busca texto en el historial de conversaciones.
> Pulsa CTRL+K o haz clic en el icono de búsqueda.

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/textual_search_record_2.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de vídeo.
</video>
</div>

## 17 de abril de 2025

::: info Actualizaciones de modelos
🌟 **Gemini 2.5 Pro** sustituye a Gemini 2.0.

🌟 **Grok 3** sustituye a Grok 2.

🌟 **GPT-4.1** sustituye a GPT-4o.
:::

::: info Nuevas herramientas de edición de fotos
🖌️ **Eliminador de fondos**: sube una foto y la IA eliminará el fondo.

🖌️ **Mejorador de calidad**: la IA aumentará la calidad de tu imagen.
:::

::: info Más capacidad para documentos
📁 **Longitud máxima de entrada: 4 000 000 de caracteres**, frente a 1 000 000.

📁 **Máximo de archivos por conversación: 20**, frente a 10.
:::

Además:

📁 **Más extensiones compatibles**: `.fortran`, `.twig`, `.urdf`, `.hcl`, `.tsv`, `.geojson`, `.ass`, `.tf`, `.ps1`, `.scss`, `.ino`, `.pyw` y `.odt`.

🧮 **Los archivos de asistentes consumen menos cuotas**: no consumen cuota con cada prompt.

**Además, mejoras de calidad del producto:**

🦋 **Multitarea**: al cambiar de pestaña durante la generación, el flujo continúa.

## 7 de abril de 2025

::: info Nuevos modelos
🌐🔭 **Perplexity Deep Research**

🌟✈️ **Llama 4.0 400B Maverick** sustituye a Llama 3.3 70B.
:::

🧮 **GPT-4o-mini para documentos después de alcanzar la cuota**: al alcanzar la cuota de documentos, puedes seguir subiendo documentos con GPT-4o-mini.

**Además, mejoras de calidad del producto:**

🦋 **Explicación de imágenes no procesadas**: la IA explica ahora por qué no se pudo procesar una imagen y cómo solucionarlo. Los errores se han convertido en mariposas.

🦊 **Firefox vuelve**: se han corregido los problemas de experiencia de usuario de Firefox.

🎨 **Los enlaces generados por la IA se abren en una pestaña nueva** sin interrumpir la generación.

## 1 de abril de 2025

::: info GPT y Gemini en la web
🌐 **GPT-4o y Gemini** ahora recurren a la búsqueda web cuando es pertinente.

🌐 **Proyectos con Mammouths** mejoran y sustituyen a los asistentes.
:::

🐳 **DeepSeek V3-0324** sustituye a la versión de enero.

💾 **Memoria de conversación** ampliada para ofrecer más contexto.

📍 **Conversaciones fijadas**: los mensajes nuevos fijan el chat al principio de la lista.

🌙 **Modo oscuro automático** cuando el sistema está configurado en modo oscuro.

🇪🇸 **¡Mammouth habla español!**

🇩🇪 **Mammouth ahora habla alemán.**

## 18 de marzo de 2025

::: info REDISEÑO IMPORTANTE
🎨 **Interfaz de usuario modernizada**: rediseño general de UI/UX.

📂 **Proyectos con Mammouths** mejoran y sustituyen a los asistentes.
:::

### 🎨 **Interfaz de usuario modernizada**

✨ **Botones de modelos**: esperamos que te gusten tanto como a nosotros.

🌙 **Modo oscuro**: hemos cambiado todos los colores del modo oscuro.

🎨 **Color de la barra lateral**: ahora destaca el chat en lugar de la barra lateral.

📝 **Entrada de texto:**
  > - Filtra los modelos por categoría (web, texto, razonamiento, imagen).
  > - Arrastra y suelta documentos.
  > - La carga de documentos ahora utiliza colores según la extensión.
  > - Icono de onda negro para el chat de voz.

🗨️ **Página de chat rediseñada para pantallas grandes:**
  > - Encabezado: eliminamos la línea *---mensajes---* y rediseñamos los botones.
  > - Barra de desplazamiento: la movimos al extremo derecho de la página.
  > - Anchura: aumentó a un máximo de 980 px, en lugar de 768 px.

### 📂 **Organiza tus proyectos con Mammouths**

- **Accede a tus Mammouths desde la barra lateral**, a un clic de tus favoritos.
- **Mueve las conversaciones de un Mammouth a otro.**
- **Edita archivos e instrucciones desde la página del prompt.**

--> **Los asistentes han muerto, ¡vivan los Mammouths! 🦣🦣🦣**

**Además**

🖼️ **Botones de Midjourney**: ahora puedes aplicar variaciones y aumentar la resolución en todos los mensajes anteriores.

🗃️ **Errores con documentos**: a veces la IA ignoraba los archivos subidos; ya está corregido.

✴️ **Logotipo de Claude actualizado**, sustituye al logotipo de Anthropic.

## 5 de marzo de 2025

::: info Modo de voz y nuevo Claude
🎙️ **Chat de voz**: modo de voz avanzado de GPT.

⭐️ **Claude 3.7 Sonnet** sustituye a Claude 3.5.
:::

Además:

🗃️ **Sube archivos a tus Mammouths personalizados.**

✨ **Ya están disponibles las suscripciones anuales**: puedes cambiar de plan en los [*ajustes de cuenta*](https://mammouth.ai/app/account/settings/), seleccionando *gestionar la suscripción* y luego *cambiar la suscripción*.

## 17 de febrero de 2025

::: info ¡Más contexto!
⭐ **Tamaño máximo de entrada: 1 000 000 de caracteres**, frente a 300 000.
:::

Además:

🗃️ **Máximo de documentos por chat: 10**, frente a 3.

🦣 **Tamaño máximo de las instrucciones personalizadas de Mammouth: 8 000 caracteres**, frente a 2 500.

🇫🇷 **¡Mammouth ya habla francés!**

🇮🇹 **¡Mammouth ahora habla italiano!**

## 3 de febrero de 2025

::: info ¡Nuevos modelos de razonamiento!
⭐ **DeepSeek R1**

⭐ **OpenAI o3-mini** sustituye a o1 y o1-mini.
:::

Además:

🧮 **Más cuota de razonamiento diaria para o3 y R1**: por ahora es igual que la de texto.

📣 **Consejos de Mammouth**: [6 consejos que debes conocer sobre Mammouth](../six-useful-tips-about-mammouth/).

## 28 de enero de 2025

::: info Nuevo generador de imágenes
⭐ **Recraft V3**

⭐ **Recraft-svg**, el primer generador SVG.

> ¿Por qué añadimos Recraft? [Descúbrelo aquí](https://artificialanalysis.ai/text-to-image/arena?tab=Leaderboard)
:::

Además:

🖼️ **Stable Diffusion ahora habla todos los idiomas.**

🏗️ **Gestión de errores desconocidos**: más información sobre los fallos de prompts.

🧮 **Detalles de cuotas**: consulta cuándo se restablecerá tu cuota mensual de imágenes y documentos.
<br> *Nota: el recuento de cuota solo se muestra cuando supera el 50 %.*

∑ **Mejor diseño para las ecuaciones matemáticas** en LaTeX.

## 14 de enero de 2025

::: info ¡Nuevo modelo!
🐋 **DeepSeek V3**
:::

Además:

🛣 **Enrutamiento por modalidad**: Mammouth determina automáticamente si debe usar texto, imagen o web.

🎨 **Página de nueva conversación rediseñada:**
- En pantallas pequeñas, los modelos se ocultan para evitar que la página se sature.
- Arrastra los modelos para ordenarlos y elegir el predeterminado.

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/demo-drag-and-drop.mp4" type="video/mp4">
  Tu navegador no admite la etiqueta de vídeo.
</video>
</div>

## 7 de enero de 2025

::: info Mammouth para equipos
⭐ **Interfaz de administración** para invitar a miembros del equipo.

⭐ **Facturación centralizada**
:::

Además:

🖋️ **Blog de Mammouth**: este mismo sitio.

🏗️ **Acceso directo a los ajustes de cuenta**: ya no hace falta usar el enlace de correo electrónico de Stripe.

## 24 de diciembre de 2024

::: info Actualizaciones de modelos
⭐ **o1**, fuera de la versión preliminar.

⭐ **Grok 2**, fuera de la beta.
:::

Además:

🎨 **Nuevo diseño para la página de conversación.**

🏗️ **Se ha añadido un botón para copiar la respuesta.**

## 17 de diciembre de 2024

::: info Actualizaciones de modelos
⭐ **Llama 3.3 70b**, ejecutado por Groq.

⭐ **Gemini 2.0 Flash**, versión experimental.
:::

Además:

🦣 **Crea más Mammouths personalizados**: hasta 8, en lugar de 4.

🪲 **Se han corregido errores al:**
- Intentar representar una matriz matemática en LaTeX.
- Usar o1 con un Mammouth personalizado.
- Subir documentos escritos con alfabetos no latinos, como el persa.

## 10 de diciembre de 2024

::: info Nueva función
⭐ **Comparte tu conversación mediante un enlace**
:::

Además:

🏗️ **Al copiar y pegar una respuesta, solo se conserva el formato pertinente.**

🎨 **La barra lateral se puede contraer.**

🎨 **Nuevo menú de cuenta con:**
- Acceso a tus Mammouths personalizados.
- Enlace directo a estas notas de versión.
- Enlace a la guía de ajustes de imagen y Mammouths personalizados.

## 4 de diciembre de 2024

::: info Modelos de imagen

🪄 **Crea una imagen a partir de otra** con FLUX Redux.

🪄 **Cambia la textura de tu imagen** con FLUX Depth.

> *[Cómo usar imagen a imagen](/es/docs/how-to-use-image-to-image/)*
:::

Además:

📷 **Sube fotos de la cámara de tu teléfono e imágenes de mayor tamaño.**

⚡ **La aplicación funciona mucho más rápido al cambiar de conversación.**

🎨 **Se ha mejorado el diseño para subir y descargar imágenes.**

## 27 de noviembre de 2024

::: info ¡Nuevo modelo!
⭐ **Grok 2**, nueva marca.
:::

## 20 de noviembre de 2024

::: info Actualizaciones de modelos
⭐ **Mistral Large 2**, actualización a la versión de noviembre.

⭐ **GPT-o1 ahora genera respuestas en streaming.**
:::

Además:

✏️ **Edita tu último prompt.**

⏹️ **Detén la generación de mensajes.**

🎨 **Se ha añadido una flecha al campo de entrada.**

📁 **Se admiten archivos `.srt`.**

## 15 de noviembre de 2024

::: info Nuevo tamaño de contexto
⭐ **Longitud máxima de entrada: 300 000 caracteres**, frente a 10 000.
:::

Además:

⚖️ Se ha añadido una cuota para los mensajes de entrada largos.
> Consulta [(i) Detalles](https://mammouth.ai/pricing).

🏗️ Desplázate por todo el historial de conversación desde la barra lateral.

🏗️ Al abrir un chat, ahora se enfoca el último mensaje.

🏗️ Tras enviar un prompt nuevo, el chat se desplaza automáticamente hacia arriba.

🏗️ Pega archivos desde el portapapeles.

🎨 Nueva fuente nativa.

## 24 de octubre de 2024

::: info Modelo web
🌐 **Búsqueda web**, nueva categoría.

⭐ **OpenPerplex**, nueva marca.
:::

Además:

⭐ **Claude 3.5 Sonnet**, actualización del modelo.

⭐ **Stable Diffusion 3.5 Large**, actualización del modelo.

⭐ **GPT-o1 ahora es conversacional.**

🏗️ **Pega imágenes desde el portapapeles.**

## 19 de octubre de 2024

🎨 **Formato de las respuestas**

- Muestra tablas *en Markdown*.
- Formato de espaciado y tamaño para los títulos.
- Más espacio entre párrafos.

**∑ Muestra fórmulas matemáticas** en LaTeX.

## 10 de octubre de 2024

::: info Archivos

📂 **Xlsx, Xls, CSV**, nuevas extensiones disponibles para subir archivos.

📂 **Pptx, Ppt**, nuevas extensiones disponibles para subir archivos.

:::

🔗 **URL en el prompt**: los LLM pueden consultar una página web cuando se incluye una URL.
