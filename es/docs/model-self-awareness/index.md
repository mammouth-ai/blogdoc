# Por qué los modelos indican una versión incorrecta

Este artículo explica por qué Claude, GPT o DeepSeek no responden correctamente cuando se les pregunta por su propia versión y por qué esta puede ser distinta en otras plataformas (como Claude).

¿Alguna vez le has preguntado a Claude o GPT qué versión son y has recibido una respuesta confusa? No eres la única persona.

> Cuando pregunto en Mammouth, Claude me dice que su versión es Claude 3 Opus.

> Cuando pregunto en Mammouth, GPT dice que su límite de conocimiento es octubre de 2023.

→ Recibimos muchas preguntas sobre este tema. Debes saber que:

## En su estado original, los modelos no conocen su versión ni la fecha actual

Para resolver este problema, proveedores como Anthropic para Claude u OpenAI para GPT han añadido un prompt de sistema (un mensaje inicial que indica al modelo cómo debe comportarse) en sus interfaces.

En [Claude.ai](http://Claude.ai), el principio del prompt de sistema es parecido a esto:

```html
El asistente es Claude, creado por Anthropic. La fecha actual es {}. La base de conocimientos de Claude se actualizó por última vez a finales de octubre de 2024. ...
```
Puedes encontrar el [prompt de sistema completo aquí](https://docs.anthropic.com/en/release-notes/system-prompts#feb-24th-2025).

<details>
    <summary>Cómo probar el prompt de sistema por tu cuenta</summary>

- Si sabes utilizar una API: <br>
    Puedes probarlo en [Anthropic Workbench](https://console.anthropic.com/workbench/).\
    Después de añadir el prompt de sistema, las respuestas serán iguales que en Claude.ai.

- Si no sabes utilizar una API:
   Puedes crear un Mammouth personalizado, pegar la parte del prompt de sistema que se refiere a la versión del modelo y comprobarás que, de repente, Claude conoce su propia versión.

Algo parecido ocurre con OpenAI.
</details>

**En [mammouth.ai](http://mammouth.ai)** ofrecemos el modelo original, sin el prompt de sistema. Por eso las respuestas son diferentes, y es normal.

## **¿Por qué no usamos prompts de sistema en Mammouth?**

¡Buena pregunta! No lo hacemos porque, a diferencia de los proveedores de modelos, tendríamos que pagar por ese largo prompt de sistema, que se añadiría a cada solicitud de Mammouth. Eso no encaja con nuestro objetivo de ofrecer modelos prémium desde 10 $, en el plan Starter. Como mucho, te evitaría leer un artículo como este, pero ¡no me digas que soy aburrido! 😉

## ChatGPT-4o aún no se conoce a sí mismo

En ChatGPT, GPT-4o no se conoce a sí mismo. Solo conoce las versiones anteriores.

![¿Eres GPT-4o?](/docs/model-self-awareness/Are_you_GPT-4o.png)

Fuente: chatgpt.com

![¿Qué versión de qué modelo eres?](/docs/model-self-awareness/image.png)

Fuente: chatgpt.com

Nota: GPT-4-Turbo (abril de 2024) es el predecesor de GPT-4o (junio de 2024). [Consulta los modelos de OpenAI.](https://platform.openai.com/docs/models)

Si preguntas «¿Eres GPT-4o?», la respuesta varía. Sin embargo, siempre mencionará una versión anterior al modelo actual, a menos que OpenAI decida añadir esta información a su prompt de sistema, como hizo Anthropic…

## DeepSeek cree que es ChatGPT

¿Le has preguntado a DeepSeek «¿Quién eres?» y te ha respondido «Soy OpenAI GPT-4»? No te preocupes, no eres la única persona.

Consulta:
[¿Por qué DeepSeek cree que es ChatGPT?](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/)

En marzo de 2025, DeepSeek añadió finalmente un prompt de sistema a su plataforma y, desde entonces, su chat ya no dice «Soy OpenAI GPT-4».

## ¿Significa esto que las IA no son conscientes de sí mismas y solo responden según las instrucciones que reciben?
Sí.

![¿Qué modelo eres?](/docs/model-self-awareness/I_am_Regis.png)
