# Sistema de cuotas y límites de uso

## ¿Cómo funcionan las cuotas?

Los límites de uso de Mammouth se definen **por sesión**. Las cuotas se renuevan por completo cada 3 horas.

Los distintos planes de suscripción (Starter, Standard y Expert) tienen asignaciones de uso diferentes.

---

## ¿Qué consume cuotas?

El consumo durante una sesión depende de varios factores:

| Factor | Descripción |
| --- | --- |
| **Longitud del mensaje** | Cuanto más largos sean tus mensajes, más consumirán. La longitud de las respuestas también cuenta. |
| **Tamaño del documento** | Los archivos e imágenes que añadas a la conversación afectan al consumo. |
| **Duración de la conversación** | Cuanto más larga sea una conversación, más costará cada intercambio (el contexto acumulado se vuelve a enviar con cada mensaje). |
| **Uso de herramientas** | Las herramientas, como la búsqueda web o la generación de documentos, consumen cuota adicional. |
| **Modelo elegido** | Los modelos más potentes consumen más cuota. |
| **Instrucciones de Mammouth** | Las instrucciones de Mammouth se incluyen en cada solicitud y afectan al consumo. |

---

## El principio de los límites por modelo

Mammouth está diseñado para que **no tengas que interrumpir tu trabajo**. Cuando alcanzas el límite de un modelo, Mammouth cambia automáticamente a un modelo más ligero para los siguientes intercambios.

**Ejemplo:**

> Usas **Claude Opus** y alcanzas el límite → **Claude Sonnet** toma el relevo <br>
> Sigues usando el servicio y alcanzas el límite de **Claude Sonnet** → **Claude Haiku** toma el relevo
>

Así puedes seguir trabajando incluso cuando el uso es elevado.

---

## Elige el plan adecuado

Mammouth ofrece varios planes adaptados a distintos niveles de uso:

| Plan | Cuota | ¿Para quién? |
| --- | --- | --- |
| 🌱 **Starter** | Referencia | Uso diario general: el 80 % de los usuarios particulares prefiere este plan. |
| ⚡ **Standard** | 3 veces Starter | Usuarios intensivos que quieren más flexibilidad sin preocuparse por los límites de sesión: el 50 % de las empresas prefiere este plan. |
| 🚀 **Expert** | 10 veces Starter | Profesionales y usuarios avanzados con necesidades importantes y habituales. |

> 💡 La relación entre cantidad y precio mejora notablemente con los planes superiores: Expert ofrece 10 veces más cuota por solo 6 veces el precio de Starter.

---

## Límites relacionados con documentos

### Tamaño y volumen de entrada
- Contenido máximo de documentos por solicitud: 4 000 000 de caracteres (sumando todos los documentos procesados).

### Archivos compatibles
- Se admite una amplia gama de formatos de archivo (documentos, hojas de cálculo, presentaciones, código, imágenes, audio, vídeo, etc.).
[Consulta aquí la lista detallada](/es/docs/supported-file-extensions/).

### Límites de archivos por conversación
- Máximo de 50 archivos.
- Tamaño total máximo: 100 MB (entre todos los archivos).
- Tamaño máximo por PDF: 100 MB.
- Tamaño máximo por imagen: 30 MB.
- Tamaño máximo por archivo que no sea PDF (documentos, vídeo, audio): 20 MB.

### Casos especiales
- Los PDF que solo contienen imágenes (por ejemplo, documentos escaneados que requieren OCR):
  - máximo de 50 páginas;
  - máximo de 20 MB.

> 💡 Para archivos grandes, comprímelos o divídelos antes de subirlos. Si un PDF supera los 100 MB, súbelo en formato `docx` o `txt`.

---

## Consejos para optimizar tu consumo

### 🎯 Sé preciso y conciso

Formula instrucciones claras y detalladas desde el primer mensaje. Evita las peticiones vagas que requieren aclaraciones: cada mensaje adicional consume cuota.

### 💾 Usa Mammouths personalizados para conservar el contexto

Si necesitas usar un documento o una instrucción en varias conversaciones o durante una conversación larga, guárdalo en un **Mammouth personalizado**. Así no tendrás que volver a enviar la misma información cada vez.

👉 [Más información sobre Mammouths personalizados]( /es/docs/mammouth-assistant-tutorial/ )

### ✏️ Revisa el mensaje antes de enviarlo

Tómate un momento para comprobar que tu mensaje sea claro y completo. Un prompt bien redactado desde el principio reduce el número de mensajes necesarios y conserva tu cuota.

> 💡 Si alcanzas los límites con regularidad, considera los planes superiores de Mammouth para obtener cuotas más amplias.
