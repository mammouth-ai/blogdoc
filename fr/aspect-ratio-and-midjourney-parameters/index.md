# Format Image et Paramètres Midjourney

Ce tutoriel traite de :

[[toc]]

## Format image

Le format d'image est défini par la commande **`--ar`**

```css
--ar 16:9
```

> Midjourney accepte tous les formats d'image.

> FLUX, Recraft et Stable Diffusion acceptent : **`--ar 1:1`**,**`--ar 2:3`**,**`--ar 3:2`**,**`--ar 4:5`**,\
> **`--ar 5:4`**,**`--ar 16:9`** et **`--ar 9:16`**\
> Recraft accepte aussi : **`--ar 4:3`**,**`--ar 3:4`**

Par défaut : **`--ar 1:1`**

ex.

```jsx
un mignon mammouth bleu dans la montagne --ar 16:9
```

![Format 16:9](./mj-ar16to9.jpeg)

## Prompt Image-to-Image dans Midjourney

> Midjourney uniquement

**`http://image.png`+ description de ce qu'il faut concevoir**

ℹ️ Vous pouvez utiliser [Imgur Upload](https://img.doerig.dev/) pour créer une URL pour votre image

ex. Générer un lama inspiré du logo mammouth :

<center><img src="/img/logo.png" alt="mammouth-logo" width="100"/></center>

```html
https://info.mammouth.ai/img/logo.png style lama
```

![image.png](./mj-imgtoimg.jpeg)

### Référence de Style

Si vous voulez spécifiquement copier le style d'une image, utilisez le paramètre de Référence de Style.

**`--sref https://image.png`**

🔗 Besoin d'une url pour votre image ? Utilisez [Imgur Upload](https://img.doerig.dev/)

> **Paramètre de Poids de Style**
> Utilisez le paramètre de poids de style **`--sw`** pour définir la force de la stylisation. **`--sw`** accepte des valeurs de 0 à 1000. **`--sw 100`** est la valeur par défaut.

ex.

```html
un lama --sref https://info.mammouth.ai/img/logo.png --sw 1000
```

![image.png](./mj-sref.jpeg)

### Référence de Personnage

Pour ajouter des références de personnage à un prompt, utilisez le paramètre --cref avec l'adresse web (URL) où l'image est stockée en ligne : **`--cref URL`**

> **Paramètre de Poids de Personnage**
> Utilisez le paramètre de poids de personnage **`--cw`** pour définir la force de caractérisation. **`--cw`** accepte des valeurs de 0 à 100. **`--cw 0`** se concentre uniquement sur le visage du personnage. Des valeurs plus élevées utilisent le visage, les cheveux et les vêtements du personnage. **`--cw 100`** est la valeur par défaut.

ex.
Référence de personnage : mm-strawberry.png

<img src="./mammouth strawberry.jpeg" alt="mammouth strawberry.jpeg" width="200"/>

<br>
<br>

<div class="image-container">

```html
un mammouth assis dans un café
```

```html
un mammouth assis dans un café --cref http://mm-strawberry.png --cw 100
```

  <img src='./mj-mammoth-in-cafe-no-cref.jpeg' alt='Mammouth dans un café sans référence'>

  <img src='./mj-mammouth strawberry in cafe.jpeg' alt='Mammouth dans un café avec référence fraise'>

</div>

🔗 Utilisez [Imgur Upload](https://img.doerig.dev/) pour créer une url pour votre image

### Chaos

**`--chaos <nombre 0–100>`** 
Ce paramètre modifie le degré de variation des résultats. Des valeurs plus élevées produisent des générations plus inhabituelles et inattendues.

Valeur par défaut : 0

ex.

<div class="image-container">

```html
un mignon mammouth bleu dans la montagne
```

```html
un mignon mammouth bleu dans la montagne --chaos 100
```

  <img src='./mj-chaos-min.jpeg'  alt='Mammouth dans la montagne sans chaos'>
  <img src='./mj-chaos-max.jpeg' alt='Mammouth dans la montagne avec chaos maximum'>
</div>

<style>
.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colonnes de même largeur */
  gap: 20px;
  row-gap: 2px;

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
