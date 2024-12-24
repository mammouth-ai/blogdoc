# How to use the new image features

Image models can now accept an attached image as input!
Here is a guide on how to use this feature properly.

# Image-To-Image with FLUX

<aside>
🚫

DON’T: Ask for an edit

</aside>

**_Attached image_**

![midjourney-default-petit-prince.webp](./midjourney-default-petit-prince.webp)

🚫 Prompt: “**replace the mammoth with a cat**”

![FLUX-2024-11-29-17_43_13.jpeg](./FLUX-2024-11-29-17_43_13.jpeg)

<aside>
✅

DO: Write a complete prompt

</aside>

**_Attached image_**

![midjourney-default-petit-prince.webp](./midjourney-default-petit-prince.webp)

✅ Prompt : “**a cat on a rocket in a dark sky with stars and the moon**”

![with cat rocket mammouth.webp](./with_cat_rocket_mammouth.webp)

# Retexture with FLUX

The Retexture is a specific type of image to image that will rigorously keep the structure (”depth map”) of your image but follow the prompt instruction.

![image.png](./image.png)

Attached image —> Depth map —> Generated images

Like for Image to image with Flux, you need to write the entire prompt expectation
(no edit command will work)

### Example of Retexture for the image above

**_Attached image_**

![midjourney-default-petit-prince.webp](./midjourney-default-petit-prince.webp)

Prompt:
”A cute mammoth on a flying banana toward a big soccer ball, with yellow birds in the sky”

![FLUX Depth-2024-12-04-12_40_38 - flying mammoth on banana.jpeg](./FLUX_Depth-2024-12-04-12_40_38_-_flying_mammoth_on_banana.jpeg)

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

[Midjourney parameters](/blog/aspect-ratio-and-midjourney-parameters.md)
