# Conectar Meta Ads (MCP)

Meta ofrece un servidor MCP oficial para Meta Ads. Permite que Mammouth consulte el rendimiento de tus campañas y, si lo autorizas, cree y gestione campañas, conjuntos de anuncios y anuncios. Esta guía explica cómo conectarlo a Mammouth como [conector MCP personalizado](../../#custom-mcp).

::: tip Antes de empezar
Necesitas:
- Una cuenta de Facebook con acceso a las cuentas publicitarias que quieras utilizar.
- Una cuenta de [Meta for Developers](https://developers.facebook.com/) (gratuita; inicia sesión con la misma cuenta de Facebook).
:::

## URL del servidor

Usa exactamente `https://mcp.facebook.com/ads`. No añadas `/mcp` al final, ya que Meta indicará que el servidor no existe.

---

## Conexión automática (OAuth)

No está disponible. Meta solo permite el registro automático a clientes MCP que ha validado individualmente (Claude, ChatGPT, Cursor, Codex…). Mammouth aún no figura en esa lista. Si lo intentas, la conexión fallará con `Dynamic registration is not available for this client`. En su lugar, usa la **conexión manual** que se describe a continuación.

## Conexión manual (ID de cliente) — recomendada

Crea tu propia aplicación Meta una sola vez e inicia sesión con Facebook. Después, Mammouth renovará el acceso automáticamente.

### 1. Crea la aplicación Meta

1. Ve a [developers.facebook.com/apps](https://developers.facebook.com/apps) y haz clic en **Create App**.
2. Asigna un nombre a la aplicación (por ejemplo, `Mammouth Meta Ads`) y continúa.
3. En **Use cases**, selecciona **Ads and monetization** → **Create & manage ads with ads MCP server**.
4. En **Business**, selecciona el portafolio comercial que posee tus cuentas publicitarias. Si estas no se gestionan desde un portafolio comercial, elige **I don't want to connect a business portfolio yet**; podrás añadir uno más adelante.
5. Completa el asistente para crear la aplicación.

::: info
El caso de uso ads MCP también añade **Facebook Login for Business** a la aplicación, que configurarás en el paso 3.
:::

### 2. Comprueba los permisos {#permissions}

En la aplicación, abre **Use cases**, haz clic en **Customize** en el caso de uso ads MCP server y abre la pestaña **Permissions and features**. Comprueba que estén añadidos estos permisos:

- `ads_mcp_management` (obligatorio)
- `ads_read` y `ads_management`
- `business_management`, `catalog_management`
- `pages_show_list`, `pages_manage_ads`
- `instagram_basic`, `instagram_branded_content_ads_brand`

Mammouth solicita todos los permisos que Meta enumera para su servidor MCP. Si falta alguno, la ventana de inicio de sesión de Facebook puede fallar.

**Advanced Access** solo es necesario si gestionas anuncios para otras empresas (agencias o socios). Requiere la revisión de la aplicación por parte de Meta. Para tus propias cuentas publicitarias, basta con el acceso predeterminado.

### 3. Añade la URI de redirección de Mammouth

1. En Mammouth, añade un conector MCP personalizado con la URL del servidor indicada y selecciona **Conexión manual**.
2. Copia la **URI de redirección** que aparece en el formulario y déjalo abierto.
3. En la aplicación Meta, abre **Facebook Login for Business** → **Settings**.
4. Activa **Client OAuth login** y **Web OAuth login**.
5. Pega la URI de redirección en **Valid OAuth Redirect URIs**, exactamente igual, y haz clic en **Save Changes**.

### 4. Inicia sesión en Mammouth

1. En la aplicación Meta, abre **App settings** → **Basic** y copia el **App ID**.
2. Vuelve al formulario de conexión manual de Mammouth, pega el ID en **ID de cliente** y **deja vacío el secreto de cliente**.
3. Haz clic en **Conectar**, inicia sesión con Facebook, acepta todos los permisos solicitados y selecciona las cuentas publicitarias que Mammouth podrá utilizar.

::: warning No introduzcas el App Secret
Tu aplicación Meta tiene un **App Secret**, pero el servidor MCP de Meta no lo utiliza: la autenticación se basa en PKCE. Si rellenas el campo del secreto de cliente, Mammouth lo rechazará con `This server does not support the submitted client authentication method`.
:::

::: info Modo de desarrollo
Mientras tu aplicación Meta esté en modo **Development**, solo podrán iniciar sesión las personas con un rol en la aplicación (administrador, desarrollador o tester). Para que tus compañeros puedan usarla, añádelos en **App roles** → **Roles**.
:::

## Clave API (token de acceso)

Meta también acepta un token de acceso enviado como bearer token. Es más rápido de configurar, pero tendrás que sustituir el token cuando caduque.

1. Genera un token de una de estas formas:
   - Un **user access token** con [Graph API Explorer](https://developers.facebook.com/tools/explorer/), incluidos los permisos indicados anteriormente. Caduca en aproximadamente una hora o, si se intercambia por un token de larga duración, en unos 60 días.
   - Un **system user access token** desde tu portafolio comercial ([guía de Meta](https://developers.facebook.com/docs/business-management-apis/system-users)). Solo funcionan los usuarios del sistema con el rol **Employee**; se rechazan los tokens de usuarios del sistema con el rol Admin.
2. En Mammouth, añade un conector MCP personalizado con la URL indicada, selecciona **Clave API** y pega el token.

---

## Solución de problemas

| Mensaje | Solución |
| --- | --- |
| `Dynamic registration is not available for this client` | Has seleccionado la conexión automática. Usa la **conexión manual**. |
| `MCP server not found for path: /ads/mcp` | Quita `/mcp` de la URL del servidor. |
| Facebook indica que la URI de redirección no está permitida | La URI introducida en **Valid OAuth Redirect URIs** no coincide exactamente con la de Mammouth. Vuelve a copiarla del formulario de conexión manual. |
| Facebook indica que algunos permisos o ámbitos no son válidos | Falta un permiso en la aplicación. Consulta el [paso 2](#permissions). |
| `This server does not support the submitted client authentication method` | Deja vacío el **secreto de cliente**. |
| `Error POSTing to endpoint` (a menudo con un 502) | La conexión se realizó, pero Meta rechaza las solicitudes; normalmente falta `ads_mcp_management`. Añade el caso de uso ads MCP (paso 1) y desconecta y vuelve a conectar el conector en Mammouth para autorizar el nuevo permiso. |

---

## ➡️ ¿Qué sigue?

👉 **[Volver a Conectores (MCP)](../../)**
