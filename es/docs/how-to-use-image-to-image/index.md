# Cómo usar la generación de imagen a imagen

**[ACTUALIZACIÓN 26/05/2025: Con el lanzamiento de Conversational FLUX y GPT Image, han mejorado las funciones de imagen a imagen. Mammouth también admite ahora los casos en los que NO quieres usar esta función.]**

Los modelos de imagen ya pueden usar una imagen adjunta como entrada.
Aquí tienes cómo sacar partido a esta función.

## Imagen a imagen con FLUX

<br>

:::info 🚫 NO: pedir una edición
:::

<div class="image-container">

**_Imagen adjunta_**

🚫 Prompt: **Sustituye el mamut por un gato**

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mamut en un cohete de camino a la Luna'>

  <img src='/docs/how-to-use-image-to-image/FLUX-2024-11-29-17_43_13.jpeg' alt='Sustituir el mamut por un gato'>

</div>
<br><br>

:::info ✅ MEJOR: escribir un prompt completo
:::

<div class="image-container">

**_Imagen adjunta_**

✅ Prompt: **un gato en un cohete bajo un cielo oscuro con estrellas y la Luna**

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mamut en un cohete de camino a la Luna'>

  <img src='/docs/how-to-use-image-to-image/with_cat_rocket_mammouth.webp' alt='Un gato en un cohete de camino a la Luna'>

</div>

## Cambiar texturas con FLUX

La retexturización es una modalidad de imagen a imagen que conserva con precisión la estructura («mapa de profundidad») de la imagen y aplica las instrucciones del prompt.

![Imagen con una textura modificada](/docs/how-to-use-image-to-image/image.png)

Imagen adjunta —> Mapa de profundidad —> Imágenes generadas

Al igual que con la función de imagen a imagen de FLUX, debes describir por completo el resultado que quieres obtener
(no basta con pedir una edición).

### Ejemplo de cambio de textura de la imagen anterior

<div class="image-container">

<br><br> _Imagen adjunta_

Prompt:<br>
Un adorable mamut montado en un plátano volador que se dirige hacia un gran balón de fútbol, con pájaros amarillos en el cielo

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mamut en un cohete de camino a la Luna'>

  <img src='/docs/how-to-use-image-to-image/FLUX_Depth-2024-12-04-12_40_38_-_flying_mammoth_on_banana.jpeg' alt='Mamut volando sobre un plátano'>

</div>

<div class="image-container">

Prompt:<br>
Una mamut hembra con un moño

Prompt:<br>
Un mamut en el cielo, entre estrellas, en un cohete de camino a la Luna, con estilo de vidriera

  <img src='/docs/how-to-use-image-to-image/retexture_in_fur.webp' alt='Cambio de textura a pelaje'>

  <img src='/docs/how-to-use-image-to-image/FLUX_Depth-2024-11-29-17_53_32.jpeg' alt='Mamut en un cohete de camino a la Luna con estilo de vidriera'>

</div>

Prompt:
«una mamut hembra con un moño»

![Cambio de textura a pelaje](/docs/how-to-use-image-to-image/retexture_in_fur.webp)

Prompt:
«un mamut en el cielo, entre estrellas, en un cohete de camino a la Luna, con estilo de vidriera»

![Mamut en un cohete de camino a la Luna con estilo de vidriera](/docs/how-to-use-image-to-image/FLUX_Depth-2024-11-29-17_53_32.jpeg)

_Notas_

Mammouth utiliza FLUX Depth para los cambios de textura y FLUX Redux para la generación de imagen a imagen.
https://blackforestlabs.ai/flux-1-tools/



<style>
.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  row-gap: 0;
  align-items: end;

  div { 
    align-self: end;
    height: fit-content;

    code span { 
      text-wrap: wrap;
    }
  }
  
}

@media (max-width: 768px) {

  .image-container{
    grid-template-columns: 1fr;

    :nth-child(1) { order: 1; }
    :nth-child(2) { order: 3; }
    :nth-child(3) { order: 2; }
    :nth-child(4) { order: 4; }
  }

}
</style>
