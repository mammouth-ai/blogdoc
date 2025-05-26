# How to use Image to Image

**[UPDATE 26/05/2025: The releases of conversational FLUX and GPT Image increased image-to-images capabilities. Mammouth now better handles the DON'T usecases.]** 

Image models can now accept an attached image as input!
Here is a guide on how to use this feature properly.

## Image-To-Image with FLUX

<br>

:::info 🚫 DON’T: Ask for an edit
:::

<div class="image-container">

**_Attached image_**

🚫 Prompt: **replace the mammoth with a cat**

  <img src='./midjourney-default-petit-prince.webp' alt='Mammoth on a rocket to the moon'>

  <img src='./FLUX-2024-11-29-17_43_13.jpeg' alt='Replace the mammoth with a cat'>

</div>
<br><br>

:::info ✅ DO: Write a complete prompt
:::

<div class="image-container">

**_Attached image_**

✅ Prompt : **a cat on a rocket in a dark sky with stars and the moon**

  <img src='./midjourney-default-petit-prince.webp' alt='Mammoth on a rocket to the moon'>

  <img src='./with_cat_rocket_mammouth.webp' alt='A cat on a rocket to the moon'>

</div>

## Retexture with FLUX

The Retexture is a specific type of image to image that will rigorously keep the structure (”depth map”) of your image but follow the prompt instruction.

![image.png](./image.png)

Attached image —> Depth map —> Generated images

Like for Image to image with Flux, you need to write the entire prompt expectation
(no edit command will work)

### Example of Retexture for the image above

<div class="image-container">

<br><br> _Attached image_

Prompt:<br>
A cute mammoth on a flying banana toward a big soccer ball, with yellow birds in the sky

  <img src='./midjourney-default-petit-prince.webp' alt='Mammoth on a rocket to the moon'>

  <img src='./FLUX_Depth-2024-12-04-12_40_38_-_flying_mammoth_on_banana.jpeg' alt='Flying mammoth on banana'>

</div>

<div class="image-container">

Prompt:<br>
Female mammoth with a knot on the head

Prompt:<br>
A mammoth in the sky with stars, on a rocket to the moon, stained glass style

  <img src='./retexture_in_fur.webp' alt='Retexture in fur'>

  <img src='./FLUX_Depth-2024-11-29-17_53_32.jpeg' alt='Stained glass style, Mammoth on a rocket to the moon'>

</div>

Prompt :
”female mammoth with a knot on the head”

![retexture in fur.webp](./retexture_in_fur.webp)

Prompt :
“a mammoth in the sky with stars, on a rocket, towards to the moon, stained glass style”

![FLUX Depth-2024-11-29-17_53_32.jpeg](./FLUX_Depth-2024-11-29-17_53_32.jpeg)

_Notes_

Mammouth uses FLUX Depth for Retexture and FLUX Redux for image-to-image generation.
https://blackforestlabs.ai/flux-1-tools/

_Other related articles_

[Midjourney parameters](/docs/aspect-ratio-and-midjourney-parameters/index.md)



<style>
.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colonnes de même largeur */
  gap: 20px;
  row-gap: 0;
  align-items: end;

  /* Code blocks */
  div { 
    align-self: end;
    height: fit-content;

    /* wrap code text to prevent overflowing */
    code span { 
      text-wrap: wrap;
    }
  }
  
}

/* Media query pour les petits écrans */
@media (max-width: 768px) {

  .image-container{
    grid-template-columns: 1fr; /* 1 colonne */

    /* Change the order of the child elements to alternate text and image */
    :nth-child(1) { order: 1; }    /* First text */
    :nth-child(2) { order: 3; }    /* Second text inverted with image below*/
    :nth-child(3) { order: 2; }    /* Second image */
    :nth-child(4) { order: 4; }    /* Second image */
  }

}
</style>