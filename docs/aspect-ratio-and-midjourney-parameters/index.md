# Aspect Ratio & Midjourney Parameters

This tutorial is about :

[[toc]]

## Aspect Ratio

The aspect ratio is defined by the command **`--ar`**

```css
--ar 16:9
```

> Midjourney accepts all aspect ratio.

> Stable Diffusion: **`--ar 1:1`**, **`--ar 2:3`**,**`--ar 3:2`**, **`--ar 4:5`**,**`--ar 9:16`**,**`--ar 5:4`**\
> FLUX accepts **`--ar 16:9`**, **`--ar 2:3`**,**`--ar 3:2`**, **`--ar 4:5`**,**`--ar 9:16`**,**`--ar 5:4`**

Default is **`--ar 1:1`**, except for Stable Diffusion ( **`--ar 16:9` ).**

e.g.

```jsx
a cute blue mammoth in the moutain --ar 16:9
```

![Aspect Ratio 16:9](./mj-ar16to9.jpeg)

## Image to Image Prompt in Midjourney

> Midjourney only

**`http://image.png`+ description of what to design**

ℹ️ You can use [Imgur Upload](https://img.doerig.dev/) to create a URL for your image

e.g. Generate a llama inspired by the mammouth logo:

<center><img src="/img/logo.png" alt="mammouth-logo" width="70"/></center>

```html
https://logo-mammouth.png llama style
```

![image.png](./mj-imgtoimg.jpeg)

### Style Reference

If you specifically want to copy the style of an image, use the Style Reference parameter.

**`--sref https://image.png`**

🔗 Need a url for your image ? Use [Imgur Upload](https://img.doerig.dev/)

> **Style Weight Parameter**
> Use the style weight parameter **`--sw`** to set the strength of stylization. **`--sw`** accepts values from 0 to 1000. **`--sw 100`** is default.

e.g.

```html
a llama --sref https://logo-mammouth.png --sw 1000
```

![image.png](./mj-sref.jpeg)

### Character Reference

To add character references to a prompt, use the --cref parameter with the web address (URL) where the image is stored online: **`--cref URL`**

> **Character Weight Parameter**
> Use the character weight parameter **`--cw`** to set the strength of characterization. **`--cw`** accepts values from 0 to 100. **`--cw 0`** focuses on the character's face only. Higher values use the character's face, hair, and clothing. **`--cw 100`** is default.

e.g
Character reference: mm-strawberry.png

<img src="./mammouth strawberry.jpeg" alt="mammouth strawberry.jpeg" width="200"/>

<br>
<br>

<div class="image-container">

```html
a mammoth sitting in a cafe
```

```html
a mammoth sitting in a cafe 
--cref http://mm-strawberry.png 
--cw 100
```

  <img src='./mj-mammoth-in-cafe-no-cref.jpeg' alt='Mammoth in cafe without reference'>

  <img src='./mj-mammouth strawberry in cafe.jpeg' alt='Mammoth in cafe with strawberry reference'>
</div>

🔗 Use [Imgur Upload](https://img.doerig.dev/) to create a url for your image

### Chaos

**`--chaos <number 0–100>`** 
This parameter changes how varied the results will be. Higher values produce more unusual and unexpected generations.

Default value is 0

e.g.

<div class="image-container">

```html
a cute blue mammoth in the mountain
```

```html
a cute blue mammoth in the mountain 
--chaos 100
```

  <img src='./mj-chaos-min.jpeg'  alt='Mammoth in mountain no chaos'>
  <img src='./mj-chaos-max.jpeg' alt='Mammoth in mountain with max chaos'>
</div>

<style>
.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colonnes de même largeur */
  gap: 20px;
  row-gap: 0;

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
