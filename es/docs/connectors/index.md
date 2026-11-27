# Conectores (MCP)

Los conectores permiten que Mammouth interactúe con tus herramientas y servicios externos directamente desde el chat. Basados en el **Model Context Protocol (MCP)**, permiten que la IA lea y utilice tus datos en tiempo real, sin copiar y pegar.

---

## ✅ Conectores preconfigurados

Mammouth ofrece 4 conectores preconfigurados que puedes activar con un solo clic desde [los ajustes de conectores](https://mammouth.ai/app/account/settings/connectors):

| Conector | Función |
|---|---|
| **Microsoft 365** | Buscar y leer tus correos de Outlook, archivos de OneDrive y más. |
| **GitHub** | Buscar repositorios, leer incidencias y explorar código y pull requests. |
| **Notion** | Buscar y leer tus páginas y bases de datos de Notion. |
| **Atlassian** | Buscar y leer tus páginas de Confluence e incidencias de Jira. |

No se necesita configuración: basta con iniciar sesión en tu cuenta y el conector estará listo.

---

## 🛠️ Conectores MCP personalizados {#custom-mcp}

Si los conectores preconfigurados no cubren tus necesidades, puedes configurar tu propio **servidor MCP personalizado**. Es útil si utilizas una herramienta o un servicio que no aparece en la lista anterior o si quieres conectar tus propios servicios.

::: tip ¿Necesitas ayuda para conectar un servicio?
Pide ayuda a nuestro [Asistente MCP](https://mammouth.ai/app/assistants/join/b7e4fe25-aa1e-4fa3-9548-31ddabdad524), que te guiará paso a paso para configurar el conector.
:::

Para configurar un MCP personalizado:

1. Selecciona **Añadir MCP personalizado** desde la **página de conectores**: [mammouth.ai/app/account/settings/connectors](https://mammouth.ai/app/account/settings/connectors)
2. Marca **Entiendo y confío en este servidor.** y haz clic en **Continuar**
3. Asigna un nombre al conector e introduce la URL de tu servidor MCP
4. Si el servidor requiere autenticación, elige el método: **Conexión automática** (OAuth, recomendada), **Clave API** o **Conexión manual (ID de cliente y secreto)** — consulta los detalles más abajo
5. Una vez validada la conexión, el conector estará disponible en tus conversaciones.

::: info Encontrar la URL (paso 3)
Consulta la documentación oficial de MCP de la herramienta o el servicio que quieres conectar. Por ejemplo, busca «MCP» junto con el nombre de la herramienta y copia la URL que aparece en su documentación. Normalmente se indica explícitamente, por ejemplo `https://mcp.stripe.com` o `https://mapstools.googleapis.com/mcp`.
:::

::: tip
Tu servidor debe ser accesible públicamente: se rechazan las direcciones locales (`localhost`, `127.0.0.1`) y las IP privadas. Para añadir un conector personalizado necesitas una suscripción activa. Consulta la [documentación de Model Context Protocol](https://modelcontextprotocol.io/) para obtener más información sobre cómo configurar tu propio servidor.
:::

### Requisitos del servidor

Mammouth solo utiliza el transporte **Streamable HTTP** y llama primero a `initialize` y después a `tools/list`.

Al añadirlo, Mammouth llama a `tools/list` una vez. Si el servidor responde, el conector estará listo.

Si el servidor responde con un error 401 o 403 y no proporcionas una clave API, el conector se creará pendiente de autorización. Más abajo puedes elegir cómo completarla.

### Conexión automática (recomendada)

La **conexión automática** es compatible con la mayoría de servidores OAuth y no requiere que configures nada. Al hacer clic en **Conectar**, Mammouth detecta los puntos de conexión OAuth y se registra como cliente sobre la marcha.

El servidor debe usar HTTPS, admitir el **registro dinámico de clientes** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) y permitir que el usuario vuelva a la URI de redirección que muestra Mammouth (`https://mammouth.ai/api/mcp/oauth/callback`).

Mammouth primero comprueba `/.well-known/oauth-protected-resource` en tu servidor MCP. Si el servidor de autorización está en otro dominio, publica este archivo: el campo `resource` debe contener la URL del servidor MCP y `authorization_servers` debe indicar ese dominio.

Si el archivo no está publicado o no especifica ningún servidor de autorización, Mammouth considera que el propio dominio del servidor MCP es el servidor de autorización y busca sus metadatos en `/.well-known/oauth-authorization-server` (y recurre a `/.well-known/openid-configuration` si el primer archivo no existe).

```json
{
  "issuer": "https://example.com",
  "authorization_endpoint": "https://example.com/oauth/authorize",
  "token_endpoint": "https://example.com/oauth/token",
  "registration_endpoint": "https://example.com/oauth/register",
  "response_types_supported": ["code"]
}
```

Si Mammouth no encuentra ningún `registration_endpoint` —porque no se encontró ningún archivo de metadatos o porque el encontrado no lo incluye—, te pedirá un ID de cliente y un secreto. Consulta **Conexión manual** más abajo. No es necesario empezar de nuevo.

### Clave API

Si tu servidor autentica las solicitudes con una clave estática, selecciona **Clave API** y pégala. Mammouth la enviará al servidor en cada solicitud como token portador (`Authorization: Bearer <key>`). Un servidor al que se proporciona una clave API debe usar HTTPS.

Puedes cambiar la clave en cualquier momento desde los ajustes del conector, incluso después de desconectarlo.

### Conexión manual (ID de cliente y secreto)

La **conexión manual** es para servidores que no admiten el registro dinámico de clientes. Registra Mammouth en la consola de desarrollador del servidor. Después, selecciona **Conexión manual (ID de cliente y secreto)** e introduce el **ID de cliente** y, si el servidor lo requiere, el **secreto de cliente** (déjalo vacío para un cliente público). Usa la URI de redirección que aparece en el formulario al registrar Mammouth en el servidor.

Puedes cambiar el ID y el secreto de un cliente registrado manualmente en cualquier momento desde los ajustes del conector, incluso después de desconectarlo.

### Si se rechaza la conexión

Al añadir el conector:

| Mensaje | Causa |
| --- | --- |
| This server URL is not allowed. | Dirección local, IP privada, credenciales en la URL o protocolo distinto de `http` / `https` |
| A server given an API key must use HTTPS. | Has proporcionado una clave API, pero la URL del servidor usa `http` |
| The MCP server took too long to respond. | Más de 10 segundos para aceptar la conexión o responder a `tools/list` |
| This MCP server returned too much metadata. | Más de 100 herramientas, un esquema de más de 32 KB o un nombre de herramienta de más de 200 caracteres |
| Choose a different name for this MCP connector. | El nombre no contiene caracteres alfanuméricos o está reservado por un conector integrado |
| MCP connector name is already in use. | Ya tienes un conector con ese nombre |
| Paid access required. Check your subscription state in your Account settings. | Tu suscripción no está activa |
| Your team does not allow personal custom MCP connectors. | Tu equipo ha desactivado los conectores MCP personalizados personales |
| Too many custom MCP connection attempts. Please try again in a minute. | Más de cinco intentos de conexión en un minuto |
| Could not connect to this MCP server. | El servidor no es accesible o ha respondido de forma inesperada |
| Could not connect to this MCP server. Check the URL and try again. | Mensaje predeterminado para cualquier otro caso, por ejemplo, una URL sin esquema (`example.com/mcp`) |
| This server refused the API key. | Mammouth probó la clave con el servidor y este la rechazó |
| Could not save these credentials. | Se rechazó el ID o el secreto de cliente proporcionado |

Al hacer clic en **Conectar**, Mammouth abre una ventana hacia el servidor de autorización. Si no se cumplen los requisitos anteriores, el proceso no se completa y Mammouth muestra **Connection cancelled** cuando cierras la ventana. Comprueba los requisitos uno por uno.

---

## 💡 Ejemplos de uso

- **«Busca el último correo de Alice sobre el informe del tercer trimestre»** — El conector de Microsoft 365 busca en tu bandeja de entrada.
- **«Resume las incidencias abiertas en el repositorio frontend»** — El conector de GitHub obtiene los datos de las incidencias.
- **«¿Qué dice nuestra hoja de ruta del producto sobre la próxima versión?»** — El conector de Notion busca en tu espacio de trabajo.
- **«¿Cuál es el estado de la incidencia PROJ-1234?»** — El conector de Atlassian busca la incidencia de Jira.

---

## 📚 Guías de conexión

Guías paso a paso para conectar servicios específicos como [conectores MCP personalizados](#custom-mcp):

- **[GitLab](./guides/gitlab/)**
- **[Meta Ads](./guides/meta-ads/)**

Próximamente habrá más guías.

---

## ⚠️ Información útil

- Los conectores solo acceden a los datos cuando haces una pregunta explícita que lo requiere.
- Puedes desconectar un conector en cualquier momento desde los ajustes de tu cuenta.
- Para equipos: el **propietario principal** puede configurar e implementar conectores para todos los miembros del equipo desde la página **Permisos**. Consulta [Equipos y empresas](../teams/).

---

## ➡️ ¿Qué sigue?

👉 **[Primeros pasos con Mammouth](../introduction-to-mammouth/)**

👉 **[Cómo elegir el modelo de IA adecuado](../choosing-the-right-ai-model/)**
