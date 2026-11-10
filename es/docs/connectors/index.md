# Conectores (MCP)

Los conectores permiten que Mammouth interactúe con tus herramientas y servicios externos directamente desde el chat. Basados en el **Model Context Protocol (MCP)**, permiten que la IA consulte y utilice tus datos en tiempo real, sin copiar y pegar.

---

## 🔌 ¿Qué es un conector?

Un conector es un puente entre Mammouth y un servicio externo. Una vez conectado, la IA puede:

- **Buscar** tus documentos, incidencias o páginas.
- **Leer** archivos o registros específicos.
- **Crear o actualizar** elementos (si el conector lo admite).

Es como dar a la IA acceso directo a tu espacio de trabajo, para que pueda obtener el contexto que necesita sin que tengas que copiar la información manualmente.

---

## ✅ Conectores preconfigurados

Mammouth ofrece 4 conectores preconfigurados que puedes activar con un solo clic:

| Conector | Función |
|---|---|
| **Microsoft 365** | Buscar y leer tus correos de Outlook, archivos de OneDrive y más. |
| **GitHub** | Buscar repositorios, leer incidencias y explorar código y pull requests. |
| **Notion** | Buscar y leer tus páginas y bases de datos de Notion. |
| **Atlassian** | Buscar y leer tus páginas de Confluence e incidencias de Jira. |

No se necesita configuración: basta con iniciar sesión en tu cuenta y el conector estará listo.

---

## 🔧 Cómo activar un conector

1. Ve a los **ajustes de conectores**: [mammouth.ai/app/account/settings/connectors](https://mammouth.ai/app/account/settings/connectors).
2. Haz clic en **Conectar** en el conector que quieras activar.
3. Inicia sesión en la cuenta del servicio externo.
4. ¡Listo! El conector ya está disponible en tus conversaciones.

Una vez activado, Mammouth utilizará automáticamente el conector cuando sea pertinente para tu prompt.

---

## 🛠️ Conectores MCP personalizados {#custom-mcp}

Si los conectores preconfigurados no cubren tus necesidades, puedes configurar tu propio **servidor MCP personalizado**. Es útil si utilizas una herramienta o un servicio que no aparece en la lista anterior, o si quieres conectarte a tus propios servicios.

Para configurar un MCP personalizado:

1. Ve a los **ajustes de conectores**: [mammouth.ai/app/account/settings/connectors](https://mammouth.ai/app/account/settings/connectors).
2. Haz clic en la tarjeta **MCP personalizado**.
3. Marca **Entiendo y confío en este servidor.** y haz clic en **Continuar**.
4. Asigna un nombre al conector e introduce la URL de tu servidor MCP.
5. Si el servidor requiere autenticación, elige el método: **Conexión automática** (OAuth, recomendada), **Clave API** o **Conexión manual (ID de cliente y secreto)**. Consulta los detalles más abajo.
6. Haz clic en **Añadir MCP personalizado**. El conector personalizado ya estará disponible en tus conversaciones.

::: tip
Tu servidor debe ser accesible públicamente: se rechazan las direcciones locales (`localhost`, `127.0.0.1`) y las IP privadas. Para añadir un conector personalizado necesitas una suscripción activa. Consulta la [documentación de Model Context Protocol](https://modelcontextprotocol.io/) para obtener más información sobre cómo configurar tu propio servidor.
:::

### Requisitos del servidor

Mammouth solo usa el transporte **Streamable HTTP** y llama a `initialize` y después a `tools/list`.

Al añadir un servidor, Mammouth llama a `tools/list` una vez. Si el servidor responde, el conector estará listo.

Si el servidor responde con un error 401 o 403 y no proporcionas una clave API, el conector se creará pendiente de autorización. Más abajo puedes elegir cómo completarla.

### Conexión automática (recomendada)

La **conexión automática** es compatible con la mayoría de servidores OAuth y no requiere que configures nada. Al hacer clic en **Conectar**, Mammouth detecta las URL de OAuth y se registra como cliente sobre la marcha.

El servidor debe usar HTTPS, admitir el **registro dinámico de clientes** ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) y permitir que el usuario vuelva a la URI de redirección que muestra Mammouth (`https://mammouth.ai/api/mcp/oauth/callback`).

Mammouth primero comprueba `/.well-known/oauth-protected-resource` en tu servidor MCP. Si el servidor de autorización está en otro dominio, publica este archivo: el campo `resource` debe contener la URL del servidor MCP y `authorization_servers` debe indicar ese dominio.

Si el archivo no está publicado o no especifica ningún servidor de autorización, Mammouth considera que el propio dominio del servidor MCP es el servidor de autorización y busca sus metadatos en `/.well-known/oauth-authorization-server` (y recurre a `/.well-known/openid-configuration` si el primer archivo no existe).

```json
{
  "issuer": "https://ejemplo.es",
  "authorization_endpoint": "https://ejemplo.es/oauth/authorize",
  "token_endpoint": "https://ejemplo.es/oauth/token",
  "registration_endpoint": "https://ejemplo.es/oauth/register",
  "response_types_supported": ["code"]
}
```

Si Mammouth no encuentra ningún `registration_endpoint` —porque no se encontró ningún archivo de metadatos o porque el encontrado no lo incluye—, te pedirá un ID de cliente y un secreto. Consulta **Conexión manual** más abajo. No es necesario empezar de nuevo.

### Clave API

Si tu servidor autentica las solicitudes con una clave estática, selecciona **Clave API** y pégala. Mammouth la enviará como token portador (`Authorization: Bearer <clave>`) en cada solicitud al servidor. Los servidores a los que se proporciona una clave API deben usar HTTPS.

Puedes cambiar la clave en cualquier momento desde los ajustes del conector, incluso después de desconectarlo.

### Conexión manual (ID de cliente y secreto)

La **conexión manual** es para servidores que no admiten el registro dinámico de clientes. Registra Mammouth en la consola de desarrollador del servidor y selecciona **Conexión manual (ID de cliente y secreto)**. Introduce el **ID de cliente** y, si el servidor lo requiere, el **secreto de cliente** (déjalo vacío para un cliente público). Usa la URI de redirección que aparece en el formulario al registrar Mammouth en el servidor.

Puedes cambiar el ID y el secreto del cliente registrado manualmente en cualquier momento desde los ajustes del conector, incluso después de desconectarlo.

### Si se rechaza la conexión

Al añadir el conector:

| Mensaje | Causa |
| --- | --- |
| This server URL is not allowed. | Dirección local, IP privada, credenciales en la URL o protocolo distinto de `http` / `https`. |
| A server given an API key must use HTTPS. | Has proporcionado una clave API, pero la URL del servidor usa `http`. |
| The MCP server took too long to respond. | Han pasado más de 10 segundos sin aceptar la conexión o responder a `tools/list`. |
| This MCP server returned too much metadata. | Más de 100 herramientas, un esquema de más de 32 KB o un nombre de herramienta de más de 200 caracteres. |
| Choose a different name for this MCP connector. | El nombre no contiene caracteres alfanuméricos o está reservado por un conector integrado. |
| MCP connector name is already in use. | Ya tienes un conector con ese nombre. |
| Paid access required. Check your subscription state in your Account settings. | Tu suscripción no está activa. |
| Your team does not allow personal custom MCP connectors. | Tu equipo ha desactivado los conectores MCP personales personalizados. |
| Too many custom MCP connection attempts. Please try again in a minute. | Se han realizado más de cinco intentos de conexión en un minuto. |
| Could not connect to this MCP server. | El servidor no es accesible o ha respondido de forma inesperada. |
| Impossible de se connecter à ce serveur MCP. Vérifiez l'URL et réessayez. | Mensaje predeterminado para otros casos, por ejemplo, una URL sin esquema (`ejemplo.es/mcp`). |
| This server refused the API key. | Mammouth probó la clave con el servidor y este la rechazó. |
| Impossible d'enregistrer ces identifiants. | Se rechazó el ID o el secreto de cliente proporcionado. |

Al hacer clic en **Conectar**, Mammouth abre una ventana hacia el servidor de autorización. Si no se cumplen los requisitos anteriores, el proceso no se completa y Mammouth muestra **Conexión cancelada** cuando cierras la ventana. Comprueba los requisitos uno por uno e inténtalo de nuevo.

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
