# Aspect Ratio & Midjourney Parameters

This tutorial is about :


<img src="/public/img/Midjourney%20rond.png" alt="Midjourney Logo" width="30"/> <img src="/public/img/Stability-AI-rond.png" alt="SD Logo" width="30"/>
:logo-flux-rond::stability-ai-logo-rond: [Aspect ratio](https://www.notion.so/Aspect-Ratio-Midjourney-Parameters-131cf297c1ca80f29158cc6b0061362a?pvs=21)
- :logo-midjourney-rond: **Midjourney parameters  :**
    - [Image-to-image prompt](https://www.notion.so/Aspect-Ratio-Midjourney-Parameters-131cf297c1ca80f29158cc6b0061362a?pvs=21)
    - [Style reference image](https://www.notion.so/Aspect-Ratio-Midjourney-Parameters-131cf297c1ca80f29158cc6b0061362a?pvs=21)
    - [Character reference image](https://www.notion.so/Aspect-Ratio-Midjourney-Parameters-131cf297c1ca80f29158cc6b0061362a?pvs=21)
    - [Chaos](https://www.notion.so/Aspect-Ratio-Midjourney-Parameters-131cf297c1ca80f29158cc6b0061362a?pvs=21)

# Aspect Ratio

The aspect ratio is defined by the command **`--ar`**

```jsx
--ar 16:9
```

> :logo-midjourney-rond: Midjourney accepts all aspect ratio.
> 

> :stability-ai-logo-rond: Stable Diffusion: **`--ar 1:1`**, **`--ar 2:3`**,**`--ar 3:2`**, **`--ar 4:5`**,**`--ar 9:16`**,**`--ar 5:4`**
:logo-flux-rond: FLUX  accepts **`--ar 16:9`**, **`--ar 2:3`**,**`--ar 3:2`**, **`--ar 4:5`**,**`--ar 9:16`**,**`--ar 5:4`**
> 

Default is **`--ar 1:1`**, except for Stable Diffusion ( **`--ar 16:9` ).**

### e.g.

```jsx
a cute blue mammoth in the moutain --ar 16:9
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/839ca439-2684-4b26-9114-4ab3b3911454/4d2a3b98-cd55-4175-b9c2-d49e878c7b0f/image.png)

# Image to Image Prompt in Midjourney

> :logo-midjourney-rond: Midjourney only
> 

**`http://image.png`+ description of what to design**  

<aside>
ℹ️

You can use  https://img.doerig.dev/ to create a URL for your image

</aside>

### e.g. 
A prompt to generate a llama inspired by the mammouth logo :logo-mammouth:

```jsx
https://logo-mammouth.png llama style
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/839ca439-2684-4b26-9114-4ab3b3911454/84ec3ca0-780f-4a92-95e0-19c300cbd29b/image.png)

# Style Reference

If you specifically want to copy the style of an image, use the Style Reference parameter.

**`--sref https://image.png`** 

<aside>
🔗

Need a url for your image ? Use https://img.doerig.dev/ 

</aside>

> **Style Weight Parameter**
Use the style weight parameter **`--sw`** to set the strength of stylization. **`--sw`** accepts values from 0 to 1000. **`--sw 100`** is default.
> 

### e.g.

```jsx
a llama --sref https://logo-mammouth.png --sw 1000
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/839ca439-2684-4b26-9114-4ab3b3911454/6f141b51-203c-4924-9e7e-996804a055ba/image.png)

# Character Reference

To add character references to a prompt, use the --cref parameter with the web address (URL) where the image is stored online: **`--cref URL`**

> **Character Weight Parameter**
Use the character weight parameter **`--cw`** to set the strength of characterization. **`--cw`** accepts values from 0 to 100. **`--cw 0`** focuses on the character's face only. Higher values use the character's face, hair, and clothing. **`--cw 100`** is default.
> 

### e.g
Character reference: mammouth-strawberry png

![mammouth strawberry.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/839ca439-2684-4b26-9114-4ab3b3911454/5b9aee14-da72-4747-8d8f-7e09105c2976/mammouth_strawberry.jpeg)

```jsx
a mammoth sitting in a cafe

```

![Midjourney-2024-11-01-15_33_24.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/839ca439-2684-4b26-9114-4ab3b3911454/c1e23adc-973c-4d56-a64c-731541ca9794/Midjourney-2024-11-01-15_33_24.jpeg)

```jsx
a mammoth sitting in a cafe 
--cref http://mammouth-strawberry.png
--cw 100
```

![Midjourney-mammouth strawberry in cafe.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/839ca439-2684-4b26-9114-4ab3b3911454/eb0d5add-1669-4e67-83e9-eac114454524/Midjourney-mammouth_strawberry_in_cafe.jpeg)

<aside>
🔗

Use  https://img.doerig.dev/ to create a url for your image

</aside>

# Chaos

**`--chaos <number 0–100>`** 
This parameter changes how varied the results will be. Higher values produce more unusual and unexpected generations. 

Default value is 0

### e.g.