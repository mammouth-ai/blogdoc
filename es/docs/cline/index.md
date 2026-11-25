# Cómo usar Mammouth en VS Code, JetBrains o Cursor con la extensión Cline

Cline es una extensión de asistente de IA disponible para VS Code, JetBrains y Cursor. Al conectarla a tu cuenta de Mammouth, tendrás acceso a todos los modelos de la plataforma directamente desde tu editor de código.

## Requisitos

- Una cuenta de Mammouth AI con una suscripción activa o créditos disponibles.
- VS Code, JetBrains o Cursor instalado.
- La extensión Cline instalada desde el marketplace de tu editor.

## Configurar la extensión

- **API Provider**: selecciona `OpenAI Compatible`.
- **Base URL**: introduce `https://api.mammouth.ai/v1`.
- **API Key**: obtén tu clave desde el [panel de Mammouth](https://mammouth.ai/app/account/settings/api) y pégala en el campo correspondiente.
- **Model ID**: elige un modelo de la [lista de modelos disponibles](https://model-explorer.mammouth.ai/) e introduce su identificador en la configuración.

![Configuración de Cline](/docs/cline/cline_api_setup.png)

## Uso

Ya puedes usar Cline con tu clave API de Mammouth.

### Interfaz y tokens

En la parte superior de la interfaz de Cline puedes ver:
- El número de **tokens enviados** y **recibidos**.
- El **total admitido** por el modelo seleccionado.
- El **nombre de la tarea**, que corresponde al primer prompt.

### Seguimiento de costes

Para hacer un seguimiento de tus gastos directamente en Cline:

1. Copia los precios del modelo desde la [lista de modelos](https://model-explorer.mammouth.ai/).
2. Introdúcelos en la sección **Model Configuration** de Cline.

Para consultar un resumen del uso de la API, visita el [panel de Mammouth](https://mammouth.ai/app/account/settings/api).

### Otros
- Por ahora, no se admite el almacenamiento en caché de prompts.
- Cambia `temperature` en los ajustes avanzados de Model Configuration de Cline para controlar la creatividad (0.0 para respuestas deterministas, hasta 2.0 para más creatividad).

![Ejemplo de uso de Cline](/docs/cline/cline_usage_example.png)