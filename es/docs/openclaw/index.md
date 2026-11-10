# Cómo usar Mammouth API en OpenClaw

## Requisitos

- Una instancia de OpenClaw en ejecución (consulta [openclaw.ai](https://openclaw.ai) para la instalación).
- Una cuenta de Mammouth con acceso a la API activado.
- Tu clave API de Mammouth (consíguela en [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)).

## Paso 1 — Obtén tu clave API de Mammouth

1. Ve a [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api).
2. Genera una clave API nueva.
3. Cópiala y guárdala en un lugar seguro; la necesitarás en el siguiente paso.

## Paso 2 — Comprueba qué modelos están disponibles

La API de Mammouth publica la lista de modelos disponibles en `https://api.mammouth.ai/public/models`.

Elige los identificadores de modelo que quieras usar en la configuración de OpenClaw. Por ejemplo: `gpt-4.1`, `kimi-k2.5`, etc.

## Paso 3 — Configura OpenClaw

Tu configuración de OpenClaw puede variar, pero recomendamos definir una variable de entorno.

La configuración siguiente hace referencia a `${MAMMOUTH_API_KEY}`.

**Expórtala si ejecutas OpenClaw directamente en tu ordenador:**

```bash
export MAMMOUTH_API_KEY="tu-clave-api-de-mammouth"
openclaw
```

También puedes añadirla de forma permanente a tu perfil de shell (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
echo 'export MAMMOUTH_API_KEY="tu-clave-api-de-mammouth"' >> ~/.zshrc
source ~/.zshrc
```

**O defínela como variable de entorno accesible para tu configuración de Docker, por ejemplo, con Docker Compose:**

```yaml
environment:
  - MAMMOUTH_API_KEY=${MAMMOUTH_API_KEY:-}
```

**Después, modifica el archivo de configuración de OpenClaw** (normalmente `~/.openclaw/config.json5` o mediante `openclaw config edit`) para que incluya:

```json5
{
  models: {
    providers: {
      litellm: {
        baseUrl: "https://api.mammouth.ai",
        apiKey: "${MAMMOUTH_API_KEY}",
        api: "openai-completions",
        models: [
          {
            id: "gpt-4.1",
            name: "GPT-4.1 (Mammouth)",
            reasoning: false,
            input: ["text", "image"],
            contextWindow: 1000000,
            maxTokens: 32768,
          },
          {
            id: "claude-sonnet-4-6",
            name: "Claude Sonnet 4.6 (Mammouth)",
            reasoning: true,
            input: ["text", "image"],
            contextWindow: 200000,
            maxTokens: 64000,
          },
          {
            id: "kimi-k2.5",
            name: "Kimi K2.5 (Mammouth)",
            reasoning: false,
            input: ["text", "image"],
            contextWindow: 262144,
            maxTokens: 262144,
          },
        ],
      },
    },
  },
  agents: {
    defaults: {
      model: { primary: "litellm/kimi-k2.5" },
    },
    models: {
      "anthropic/claude-sonnet-4-6": {},
      "litellm/kimi-k2.5": {},
      "litellm/gpt-4.1": {},
      "litellm/claude-sonnet-4-6": {},
    },
  },
}
```

## Paso 4 — Verifica la conexión

Cuando OpenClaw esté en ejecución, inicia una sesión nueva y haz una pregunta sencilla. Si la configuración es correcta, tu agente responderá mediante la API de Mammouth.

Usa `/models` en tu chat para ver los diferentes proveedores y sus modelos.

Ejemplo (con anthropic como proveedor predeterminado y el proveedor LiteLLM compatible con Mammouth configurado):
![Comando /models de OpenClaw en Discord](/docs/openclaw/image.png)

También puedes comprobar la conexión desde la CLI:

```bash
openclaw status
```

## Supervisar el uso

Consulta tu consumo de API en el panel de Mammouth:

👉 [mammouth.ai/app/account/settings/api](https://mammouth.ai/app/account/settings/api)

## Ver también

- [Inicio rápido de la API](/es/docs/api-quick-start/index.md) — documentación general de Mammouth API.
- [Cómo usar Mammouth con Cline](/es/docs/cline/index.md) — configuración similar para VS Code / Cursor.
- [Documentación del proveedor LiteLLM de OpenClaw](https://docs.openclaw.ai/providers/litellm)
