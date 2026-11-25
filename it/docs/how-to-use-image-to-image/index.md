# Come usare Image to Image

**[AGGIORNAMENTO 26/05/2025: con l'uscita di Conversational FLUX e GPT Image, le funzionalità Image-to-Image sono migliorate. Mammouth supporta anche i casi in cui NON vuoi usare qualcosa.]**

I modelli di immagini possono usare un'immagine allegata come input!
Ecco come sfruttare correttamente questa funzione.

## Image to Image con FLUX

<br>

:::info 🚫 NON FARE: chiedere di modificare un'immagine
:::

<div class="image-container">

**_Immagine allegata_**

🚫 Prompt: **Sostituisci il mammut con un gatto**

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mammut su un razzo diretto verso la Luna'>

  <img src='/docs/how-to-use-image-to-image/FLUX-2024-11-29-17_43_13.jpeg' alt='Sostituire il mammut con un gatto'>

</div>
<br><br>

:::info ✅ MEGLIO: scrivere un prompt completo
:::

<div class="image-container">

**_Immagine allegata_**

✅ Prompt: **un gatto su un razzo in un cielo scuro con stelle e la Luna**

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mammut su un razzo diretto verso la Luna'>

  <img src='/docs/how-to-use-image-to-image/with_cat_rocket_mammouth.webp' alt='Un gatto su un razzo diretto verso la Luna'>

</div>

## Modificare le texture con FLUX

Il retexturing è una forma speciale di Image to Image che mantiene esattamente la struttura («mappa di profondità») dell'immagine, seguendo al contempo le istruzioni del prompt.

![Immagine con modifica della texture](/docs/how-to-use-image-to-image/image.png)

Immagine allegata —> Mappa di profondità —> Immagini generate

Come per Image to Image con FLUX, devi descrivere completamente il risultato desiderato: un semplice comando di modifica non funziona.

### Esempio di modifica della texture dell'immagine sopra

<div class="image-container">

<br><br> _Immagine allegata_

Prompt:<br>
Un simpatico mammut su una banana volante che si dirige verso un grande pallone da calcio, con uccelli gialli nel cielo

  <img src='/docs/how-to-use-image-to-image/default-petit-prince.webp' alt='Mammut su un razzo diretto verso la Luna'>

  <img src='/docs/how-to-use-image-to-image/FLUX_Depth-2024-12-04-12_40_38_-_flying_mammoth_on_banana.jpeg' alt='Mammut volante su una banana'>

</div>

<div class="image-container">

Prompt:<br>
Mammut femmina con uno chignon

Prompt:<br>
Un mammut nel cielo stellato su un razzo diretto verso la Luna, nello stile di una vetrata

  <img src='/docs/how-to-use-image-to-image/retexture_in_fur.webp' alt='Modifica della texture con pelliccia'>

  <img src='/docs/how-to-use-image-to-image/FLUX_Depth-2024-11-29-17_53_32.jpeg' alt='Mammut su un razzo diretto verso la Luna nello stile di una vetrata'>

</div>

Prompt:
«mammut femmina con uno chignon»

![Modifica della texture con pelliccia](/docs/how-to-use-image-to-image/retexture_in_fur.webp)

Prompt:
«un mammut nel cielo stellato su un razzo diretto verso la Luna, nello stile di una vetrata»

![Mammut su un razzo diretto verso la Luna nello stile di una vetrata](/docs/how-to-use-image-to-image/FLUX_Depth-2024-11-29-17_53_32.jpeg)

_Note_

Mammouth usa FLUX Depth per modificare le texture e FLUX Redux per la generazione Image-to-Image.
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
