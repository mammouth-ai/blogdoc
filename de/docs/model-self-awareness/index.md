# Warum Modelle die falsche Version nennen

Dieser Artikel erklärt, warum Claude, GPT oder DeepSeek ihre eigene Version nicht korrekt angeben und warum die Antwort auf anderen Plattformen (zum Beispiel Claude) anders ausfallen kann.

Hast du Claude oder GPT schon einmal nach seiner Version gefragt und eine verwirrende Antwort erhalten? Damit bist du nicht allein.

> Wenn ich Mammouth frage, sagt Claude, seine Version sei Claude 3 Opus.

> Wenn ich Mammouth frage, sagt GPT, sein Wissensstand ende im Oktober 2023.

→ Dazu werden wir häufig gefragt. Das solltest du wissen:

## Basismodelle kennen weder ihre Version noch das aktuelle Datum

Um dieses Problem zu lösen, haben Anbieter wie Anthropic für Claude oder OpenAI für GPT ihren Benutzeroberflächen einen System-Prompt hinzugefügt (eine erste Nachricht, die dem Modell vorgibt, wie es sich verhalten soll).

Auf [Claude.ai](http://Claude.ai) sieht der Anfang des System-Prompts so aus:

```html
The assistant is Claude, created by Anthropic. The current date is {}. Claude’s knowledge base was last updated at the end of October 2024. ...
```
Den [vollständigen System-Prompt findest du hier](https://docs.anthropic.com/en/release-notes/system-prompts#feb-24th-2025).

<details>
    <summary>So kannst du den System-Prompt selbst testen</summary>

- Wenn du weißt, wie man eine API verwendet: <br>
    Du kannst es in der [Anthropic Workbench](https://console.anthropic.com/workbench/) selbst ausprobieren.\
    Nachdem du den System-Prompt hinzugefügt hast, fallen die Antworten genauso aus wie auf Claude.ai.

- Wenn du nicht weißt, wie man eine API verwendet:
   Du kannst ein eigenes Mammouth erstellen, den Teil des System-Prompts zur Modellversion einfügen und sehen, wie Claude plötzlich seine eigene Version kennt.

Bei OpenAI ist es ähnlich.
</details>

**Auf [mammouth.ai](http://mammouth.ai)** stellen wir das unveränderte Modell ohne System-Prompt bereit. Deshalb fallen die Antworten anders aus – und das ist normal.

## **Warum verwenden wir auf Mammouth keine System-Prompts?**

Gute Frage! Wir machen das nicht, weil wir – anders als die Modellanbieter – für diesen langen System-Prompt bezahlen müssten, der jeder Anfrage von Mammouth hinzugefügt würde. Das passt nicht zu unserem Ziel, Premium-Modelle ab 10 $ im Starter-Tarif zugänglich zu machen. Im besten Fall müsstest du dann solche Beiträge nicht lesen – aber wage es bloß nicht, mir zu sagen, dass ich langweilig bin!! 😉

## ChatGPT-4o kennt sich selbst (noch) nicht

Auf ChatGPT kennt GPT-4o sich selbst nicht. Es kennt nur frühere Versionen.

![Bist du GPT-4o?](/docs/model-self-awareness/Are_you_GPT-4o.png)

Quelle: chatgpt.com

![Welche Version welches Modells bist du?](/docs/model-self-awareness/image.png)

Quelle: chatgpt.com

Hinweis: GPT-4-Turbo (Apr-2024) ist der Vorgänger von GPT-4o (June-2024). [Siehe die OpenAI-Modelle.](https://platform.openai.com/docs/models)

Auf die Frage „Bist du GPT-4o?“ fällt die Antwort unterschiedlich aus. Sie wird jedoch weiterhin eine frühere Version des aktuellen Modells nennen – es sei denn, OpenAI beschließt, diese Information wie Anthropic in den System-Prompt aufzunehmen.

## DeepSeek hält sich für ChatGPT

Hast du DeepSeek gefragt „Wer bist du?“ und es hat geantwortet „Ich bin OpenAI GPT-4“? Keine Sorge, damit bist du nicht allein.

Hier findest du mehr dazu:
[Warum denkt DeepSeek, es sei ChatGPT?](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/)

Im März 2025 hat DeepSeek schließlich einen System-Prompt auf seiner Plattform hinzugefügt. Seitdem sagt der Chat nicht mehr „Ich bin OpenAI GPT-4“.

## Bedeutet das, dass KIs nicht selbstbewusst sind und nur auf Grundlage der Anweisungen antworten, die sie erhalten?
Ja.

![Welches Modell bist du?](/docs/model-self-awareness/I_am_Regis.png)
