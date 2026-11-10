# Cómo usar Mammouth API en Hermes

## Requisitos

- Una instancia de Hermes en ejecución (consulta [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/) para la instalación).
- Una cuenta de Mammouth con acceso a la API activado.
- Tu clave API de Mammouth (consíguela en [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)).

## Paso 1 — Obtén tu clave API de Mammouth

1. Ve a [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api).
2. Genera una clave API nueva.
3. Cópiala y guárdala en un lugar seguro; la necesitarás en el siguiente paso.

## Paso 2 — Configura Hermes

1. Ejecuta `hermes model` para abrir la configuración del modelo.
2. Selecciona **Custom endpoint**.
3. Cuando se te pida la URL base de la API, introduce `https://api.mammouth.ai/v1`.
4. Introduce tu clave API de Mammouth.
5. Selecciona uno de los modelos disponibles a través de Mammouth API. Elige el que se adapte a tus necesidades y consulta la documentación de Hermes para obtener recomendaciones de configuración. Según el modelo y la configuración elegidos, Hermes puede consumir una cantidad considerable de tokens.

## Paso 3 — Verifica la conexión

Ejecuta el siguiente comando para comprobar que Hermes está conectado:

```bash
hermes status
```

El resultado debería parecerse a este:

```text
┌─────────────────────────────────────────────────────────┐
│                 ☤ Hermes Agent Status                  │
└─────────────────────────────────────────────────────────┘

  Model:        claude-opus-5
  Provider:     custom
  Providers:    Api.mammouth.ai
  Gateway:      ✓ running
  Platforms:    none configured
  Jobs:         0

  Run 'hermes status --full' for every section

```

## Supervisa el uso de la API

Consulta tu consumo de API en el [panel de Mammouth](https://mammouth.ai/app/account/settings/api).

## Ver también

- [Inicio rápido de la API](/es/docs/api-quick-start/index.md) — documentación general de Mammouth API.
- [Cómo usar Mammouth con Cline](/es/docs/cline/index.md) — configuración similar para VS Code / Cursor.
- [Documentación del proveedor LiteLLM de Hermes](https://docs.openclaw.ai/providers/litellm)
