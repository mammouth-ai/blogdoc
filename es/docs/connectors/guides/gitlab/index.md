# Conectar GitLab (MCP)

GitLab incluye un servidor MCP oficial directamente en su instancia, sin necesidad de una pasarela de terceros. Esta guía explica cómo conectarlo a Mammouth como [conector MCP personalizado](../../#custom-mcp) mediante cualquiera de los tres métodos de autenticación.

::: tip Antes de empezar
En GitLab necesitas:
- GitLab 18.6 o posterior (el servidor MCP está en versión beta y disponible en el plan Free).
- GitLab Duo configurado como **Always on** o **On by default**.
- Las funciones beta y experimentales activadas, a nivel de instancia en Self-Managed/Dedicated o para el grupo de nivel superior en GitLab.com.
- Acceso al servidor MCP permitido, a nivel de instancia en Self-Managed/Dedicated o para el grupo de nivel superior en GitLab.com.

Consulta la [documentación del servidor MCP de GitLab](https://docs.gitlab.com/user/model_context_protocol/mcp_server/) para saber cómo activar estas opciones.
:::

## URL del servidor

En Self-Managed o Dedicated, usa `https://<tu-instancia-gitlab>/api/v4/mcp`. En GitLab.com, usa `https://gitlab.com/api/v4/mcp`. La URL es la misma para los tres métodos de conexión que se describen a continuación.

---

## Conexión automática (OAuth)

El servidor MCP de GitLab admite el **registro dinámico de clientes OAuth 2.0**, por lo que la conexión automática funciona sin tener que configurar nada en GitLab.

1. En Mammouth, añade un conector MCP personalizado con la URL del servidor indicada anteriormente.
2. Selecciona **Conexión automática**.
3. Haz clic en **Conectar**. Mammouth se registrará en GitLab y abrirá la ventana de autorización; inicia sesión y aprueba el acceso.

## Clave API

Actualmente, el servidor MCP de GitLab solo admite OAuth: no acepta claves API estáticas ni tokens de acceso personal como credenciales ([GitLab sigue la compatibilidad con PAT como una solicitud de función](https://gitlab.com/gitlab-org/gitlab/-/issues/586184), aún no implementada). Usa **Conexión automática** o **Conexión manual**.

## Conexión manual (ID de cliente y secreto)

Se requiere GitLab 19.3 o posterior; las versiones anteriores no muestran el alcance **mcp** en el formulario de creación de aplicaciones OAuth.

Usa este método si el registro dinámico de clientes está desactivado en tu instancia de GitLab o si prefieres registrar una sola aplicación OAuth compartida para todo el equipo, en lugar de permitir que cada cuenta de Mammouth registre la suya.

1. En GitLab, crea una aplicación OAuth:
   - **Nivel de usuario**: tu avatar → **Edit profile** → **Access** → **Applications** → **Add new application**.
   - **Nivel de grupo**: **Settings** → **Applications** del grupo.
   - **Nivel de instancia** (administradores de Self-Managed): **Admin Area** → **Applications** → **New application**.
2. Configura el **Redirect URI** con el valor que aparece en el formulario de conexión manual de Mammouth.
3. En **Scopes**, selecciona **mcp**.
4. Desmarca **Confidential**: la conexión manual de Mammouth no envía ningún secreto de cliente, así que la aplicación debe registrarse como cliente público.
5. Guarda la aplicación y copia su **Application ID**.
6. En Mammouth, selecciona **Conexión manual**, pega el ID como **ID de cliente** y deja vacío el **secreto de cliente**.

::: warning
Una sola aplicación OAuth compartida no puede servir a clientes MCP con URI de redirección diferentes. Si la URI de redirección de Mammouth cambia en el futuro, tendrás que actualizar la aplicación en GitLab.
:::

---

## ➡️ ¿Qué sigue?

👉 **[Volver a Conectores (MCP)](../../)**
