# Extensión Mammouth para VS Code

La extensión **Mammouth** permite usar los modelos de IA disponibles en la API de Mammouth directamente en **GitHub Copilot Chat**. Al conectarse a la API de Mammouth, añade los modelos disponibles al selector de modelos de Copilot.

[Instalar la extensión desde Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai)

## Requisitos

- **Visual Studio Code 1.146.0 o posterior**
- **GitHub Copilot Chat** instalado y habilitado
- Una [clave de API de Mammouth](https://mammouth.ai/app/account/settings/api) y créditos de API

## Instalación y conexión

1. Abre la [página de la extensión Mammouth en Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai) y selecciona **Install**. Si se te solicita, confirma que quieres abrir VS Code.
2. En VS Code, abre la vista **Mammouth AI** mediante su icono en la barra de actividad.
3. Pega tu clave de API y selecciona **Connect**.
4. Selecciona **Inject into Copilot configuration**.
5. Abre Copilot Chat y elige un modelo en la pestaña **Mammouth** del selector de modelos.

Cuando haya nuevos modelos disponibles en la API de Mammouth, selecciona de nuevo **Inject into Copilot configuration** para actualizar la lista. La actualización de los modelos será automática algún día.

## Elegir el nivel de razonamiento

Para los modelos que admiten varios niveles de razonamiento, abre el selector de modelos de Copilot, selecciona la flecha junto al modelo y elige un nivel **Effort Level**. Un nivel más alto puede ayudar con tareas complejas, pero las respuestas pueden tardar más y consumir más créditos.

## Personalizar los modelos

En la vista de Mammouth, abre **Model settings** para administrar los modelos disponibles en Copilot. Para cada modelo puedes:

- incluirlo en Copilot u ocultarlo;
- reducir sus límites de contexto o de salida;
- activar o desactivar el uso de herramientas y la entrada de imágenes;
- elegir los niveles de razonamiento disponibles.

Selecciona **Save and inject** para aplicar los cambios. Tus preferencias se conservan al actualizar la lista. **Reset** restablece la configuración predeterminada de los modelos proporcionada por la API de Mammouth. Activar manualmente una función que el modelo no admite puede provocar errores en las solicitudes.

## Consultar los detalles de los modelos

Activa **Show model details** en la vista de Mammouth para mostrar el tamaño del contexto, las capacidades y los precios en créditos por millón de tokens. Despliega **API details** debajo de un modelo para consultar toda la información proporcionada por Mammouth. Estos detalles están disponibles en la vista de la extensión porque el selector de modelos de Copilot no permite mostrar precios ni varias opciones de tamaño de contexto.

## Clave de API y configuración

- La clave de API de Mammouth se guarda en el almacenamiento seguro de VS Code; no se escribe en texto sin cifrar en ningún archivo.
- La extensión añade los modelos al grupo **Mammouth** del archivo de configuración de Copilot `chatLanguageModels.json` correspondiente al perfil actual de VS Code. No modifica los demás modelos ni proveedores de Copilot.
- Selecciona **How it works** para ver una breve explicación o **Open chatLanguageModels.json** para abrir el archivo de configuración.
- **Disconnect** elimina la clave de la vista de Mammouth. Los modelos que ya se añadieron a Copilot permanecen configurados. Para cambiar o eliminar la clave asociada, usa **Manage Language Models** en Copilot.

## Solución de problemas

- **No aparecen modelos de Mammouth en Copilot**: comprueba que GitHub Copilot Chat esté instalado y habilitado; después, selecciona de nuevo **Inject into Copilot configuration**.
- **Clave de API no válida**: selecciona **Disconnect** y vuelve a conectarte con una clave válida de tu [cuenta de Mammouth](https://mammouth.ai/app/account/settings/api).
- **Un modelo devuelve errores**: abre **Model settings** y restablece sus ajustes, sobre todo si habilitaste manualmente las herramientas o la entrada de imágenes.
