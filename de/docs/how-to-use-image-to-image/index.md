# So verwendest du Image to Image

**[UPDATE 26/05/2025: Mit der Veröffentlichung von Conversational FLUX und GPT Image haben sich die Image-to-Image-Funktionen verbessert. Mammouth unterstützt jetzt auch die Anwendungsfälle, bei denen du etwas NICHT verwenden möchtest.]**

Bildmodelle können jetzt ein angehängtes Bild als Eingabe verwenden!
Hier erfährst du, wie du diese Funktion richtig verwendest.

## Image to Image mit FLUX

<br>

:::info 🚫 NICHT: Um eine Bearbeitung bitten
:::

<div class="image-container">

**_Angehängtes Bild_**

🚫 Prompt: **Ersetze das Mammut durch eine Katze**

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mammut auf einer Rakete auf dem Weg zum Mond'>

  <img src='/docs/how-to-use-image-to-image/FLUX-2024-11-29-17_43_13.jpeg' alt='Das Mammut durch eine Katze ersetzen'>

</div>
<br><br>

:::info ✅ BESSER: Einen vollständigen Prompt schreiben
:::

<div class="image-container">

**_Angehängtes Bild_**

✅ Prompt: **eine Katze auf einer Rakete in einem dunklen Himmel mit Sternen und dem Mond**

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mammut auf einer Rakete auf dem Weg zum Mond'>

  <img src='/docs/how-to-use-image-to-image/with_cat_rocket_mammouth.webp' alt='Eine Katze auf einer Rakete auf dem Weg zum Mond'>

</div>

## Mit FLUX Texturen ändern

Retexturing ist eine spezielle Form von Image to Image, bei der die Struktur („Tiefenkarte“) deines Bildes genau erhalten bleibt, während die Anweisungen im Prompt befolgt werden.

![Bild mit einer Texturänderung](/docs/how-to-use-image-to-image/image.png)

Angehängtes Bild —> Tiefenkarte —> Generierte Bilder

Wie bei Image to Image mit Flux musst du die gewünschte Ausgabe vollständig beschreiben
(ein Bearbeitungsbefehl funktioniert nicht).

### Beispiel für eine Texturänderung des obigen Bildes

<div class="image-container">

<br><br> _Angehängtes Bild_

Prompt:<br>
Ein niedliches Mammut auf einer fliegenden Banane, das auf einen großen Fußball zufliegt, mit gelben Vögeln am Himmel

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mammut auf einer Rakete auf dem Weg zum Mond'>

  <img src='/docs/how-to-use-image-to-image/FLUX_Depth-2024-12-04-12_40_38_-_flying_mammoth_on_banana.jpeg' alt='Fliegendes Mammut auf einer Banane'>

</div>

<div class="image-container">

Prompt:<br>
Weibliches Mammut mit einem Haarknoten

Prompt:<br>
Ein Mammut am Himmel mit Sternen auf einer Rakete auf dem Weg zum Mond, im Stil eines Kirchenfensters

  <img src='/docs/how-to-use-image-to-image/retexture_in_fur.webp' alt='Texturänderung mit Fell'>

  <img src='/docs/how-to-use-image-to-image/FLUX_Depth-2024-11-29-17_53_32.jpeg' alt='Mammut auf einer Rakete auf dem Weg zum Mond im Stil eines Kirchenfensters'>

</div>

Prompt:
„weibliches Mammut mit einem Haarknoten“

![Texturänderung mit Fell](/docs/how-to-use-image-to-image/retexture_in_fur.webp)

Prompt:
„ein Mammut am Himmel mit Sternen auf einer Rakete auf dem Weg zum Mond, im Stil eines Kirchenfensters“

![Mammut auf einer Rakete auf dem Weg zum Mond im Stil eines Kirchenfensters](/docs/how-to-use-image-to-image/FLUX_Depth-2024-11-29-17_53_32.jpeg)

_Hinweise_

Mammouth verwendet FLUX Depth für Texturänderungen und FLUX Redux für die Image-to-Image-Generierung.
https://blackforestlabs.ai/flux-1-tools/



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
