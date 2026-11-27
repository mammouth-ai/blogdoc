# Conectar Gmail a Mammouth

## 1. Añadir el conector

- Abre los **ajustes de conectores** en Mammouth.
- Haz clic en **Añadir MCP personalizado**, marca la casilla de confianza y continúa.
- Introduce **Gmail** como nombre y `https://gmailmcp.googleapis.com/mcp/v1` como URL del servidor.
- Selecciona **Conexión manual (ID de cliente y secreto)**.

## 2. Configurar Google Cloud

- Abre la [consola de Google Cloud](https://console.cloud.google.com/) y crea o selecciona un proyecto.
- En **APIs y servicios**, habilita **Gmail API** y **Gmail MCP API** (`gmailmcp.googleapis.com`).

## 3. Crear credenciales OAuth

- Ve a **APIs y servicios → Credenciales → Crear credenciales → ID de cliente de OAuth**.
- Elige **Aplicación web** y asígnale un nombre, por ejemplo, *Mammouth Gmail*.
- Añade este URI de redirección autorizado:  
  `https://mammouth.ai/api/mcp/oauth/callback`
- Marca **Usar este cliente con un agente de IA** (necesario para Gmail MCP).
- Crea el cliente y copia su **ID de cliente** y **secreto de cliente**.

## 4. Conectar en Mammouth

- Vuelve a la configuración del conector e introduce el ID de cliente y el secreto de cliente.
- Haz clic en **Conectar** y autoriza Gmail en la ventana de Google.
- Pruébalo con: «Busca el último correo de [nombre]».

**Mantén privado el secreto de cliente. Introdúcelo solo en Mammouth.**

## Otros servicios de Google disponibles mediante MCP

Para cada servicio que quieras usar, habilita **tanto** su API de producto como su API MCP en **[Consola de Google Cloud](https://console.cloud.google.com/) → APIs y servicios**. Usa en Mammouth la URL del servidor MCP correspondiente.

| Servicio | URL del servidor MCP | APIs que habilitar |
|---|---|---|
| Gmail | `https://gmailmcp.googleapis.com/mcp/v1` | Gmail API (`gmail.googleapis.com`); Gmail MCP API (`gmailmcp.googleapis.com`) |
| Drive | `https://drivemcp.googleapis.com/mcp/v1` | Google Drive API (`drive.googleapis.com`); Drive MCP API (`drivemcp.googleapis.com`) |
| Docs | `https://docsmcp.googleapis.com/mcp/v1` | Google Docs API (`docs.googleapis.com`); Docs MCP API (`docsmcp.googleapis.com`) |
| Sheets | `https://sheetsmcp.googleapis.com/mcp/v1` | Google Sheets API (`sheets.googleapis.com`); Sheets MCP API (`sheetsmcp.googleapis.com`) |
| Slides | `https://slidesmcp.googleapis.com/mcp/v1` | Google Slides API (`slides.googleapis.com`); Slides MCP API (`slidesmcp.googleapis.com`) |
| Calendar | `https://calendarmcp.googleapis.com/mcp/v1` | Google Calendar API (`calendar-json.googleapis.com`); Calendar MCP API (`calendarmcp.googleapis.com`) |
| Chat | `https://chatmcp.googleapis.com/mcp/v1` | Google Chat API (`chat.googleapis.com`); Chat MCP API (`chatmcp.googleapis.com`) |
| Tasks | `https://tasksmcp.googleapis.com/mcp/v1` | Tasks MCP API (`tasksmcp.googleapis.com`) |

**Nota:** Tasks no requiere una API de producto independiente. Google también incluye People API, Classroom y Universal Search como versiones preliminares para desarrolladores; su disponibilidad puede variar. [Guía de configuración de Google](https://developers.google.com/workspace/guides/configure-mcp-servers).
