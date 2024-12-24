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

![Aspect Ratio 16:9](/img/mj-par/mj-ar16to9.jpeg)

## Image to Image Prompt in Midjourney

> Midjourney only

**`http://image.png`+ description of what to design**

ℹ️ You can use [Imgur Upload](https://img.doerig.dev/) to create a URL for your image

e.g. Generate a llama inspired by the mammouth logo:

<center><img src="/img/logo.png" alt="mammouth-logo" width="70"/></center>


```html
https://logo-mammouth.png llama style
``` 

![image.png](/img/mj-par/mj-imgtoimg.jpeg)

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

![image.png](/img/mj-par/mj-sref.jpeg)

### Character Reference

To add character references to a prompt, use the --cref parameter with the web address (URL) where the image is stored online: **`--cref URL`**

> **Character Weight Parameter**
> Use the character weight parameter **`--cw`** to set the strength of characterization. **`--cw`** accepts values from 0 to 100. **`--cw 0`** focuses on the character's face only. Higher values use the character's face, hair, and clothing. **`--cw 100`** is default.

e.g
Character reference: mm-strawberry.png

<img src="/img/mj-par/mammouth strawberry.jpeg" alt="mammouth strawberry.jpeg" width="200"/>

<div class="image-container">
  <div> 
  <br><br>

  ```html
  a mammoth sitting in a cafe
  ```

  <img src='/img/mj-par/mj-mammoth-in-cafe-no-cref.jpeg' alt='Mammoth in cafe without reference'>
  </div>
  
  <div>

  ```html 
   a mammoth sitting in a cafe
    --cref http://mm-strawberry.png
    --cw 100
  ```
  <img src='/img/mj-par/mj-mammouth strawberry in cafe.jpeg' alt='Mammoth in cafe with strawberry reference'>
  </div>
</div>

🔗 Use [Imgur Upload](https://img.doerig.dev/) to create a url for your image

### Chaos

**`--chaos <number 0–100>`** 
This parameter changes how varied the results will be. Higher values produce more unusual and unexpected generations.

Default value is 0

e.g.

<div class="image-container">
  <div>
  <br>

  ```html
  a cute blue mammoth in the mountain
  ```
  <img src='/img/mj-par/mj-chaos-min.jpeg'  alt='Mammoth in mountain no chaos'>
  </div>
  
  <div>

  ```html
  a cute blue mammoth in the mountain
  --chaos 100
  ```

  <img src='/img/mj-par/mj-chaos-max.jpeg' alt='Mammoth in mountain with max chaos'>
  </div>
</div>

<style>
.image-container {
  display: flex;
  gap: 20px;
}
.image-container > div {
  flex: 0 0 50%;
}
.image-container img {
  width: 100%;
}

/* Media query pour les petits écrans */
@media (max-width: 768px) {
  .image-container {
    flex-direction: column; /* Passe d'une disposition horizontale à verticale */
  }
  
  .image-container > div {
    width: 100%; /* Prend toute la largeur disponible */
  }
}
</style>

<style>
.jsx-code {
  background-color: #1a1a1a;
  border-radius: 6px;
  margin-bottom: 16px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #404040;
}

.jsx-code code {
  color: #ffffff;
}
</style>
