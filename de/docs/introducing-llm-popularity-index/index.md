# Der LLM Popularity Index

## Wie werden LLMs heute bewertet: Leistung

Im Grunde wird die Leistung von LLMs derzeit bewertet, indem Anfragen erstellt, alle LLMs damit abgefragt und die besten Antworten ermittelt werden. Das kann automatisiert werden, wenn die richtige Antwort im Voraus bekannt ist (zum Beispiel bei Mathematiktests), oder manuell erfolgen (wie bei der Chatbot Arena).

1) Die Elo-Werte der Chatbot Arena: [LMSYS Chatbot Arena und Bestenliste](https://arena.ai/leaderboard)

2) Bewertete Benchmarks: [LiveBench](https://livebench.ai/)

## Warum wird jetzt ein Popularitätsindex benötigt?

- Das Ranking von LLMs wird weniger objektiv und persönlicher.
- Es wird darum gehen, von wem ich mir Rat holen möchte, da wir LLMs immer mehr Aufgaben übertragen werden.
- Bei der Auswahl eines LLMs wird es weniger darum gehen, welches Modell die richtige Antwort gibt, und mehr darum, welches Modell eine für mich relevante Antwort liefert.
- Es geht nicht nur um die richtige Antwort: Das beste LLM ist jetzt auch eine Frage des persönlichen Geschmacks.
- Es geht darum, wessen Meinung zu meinem Problem ich hören möchte: Nur weil ich dem Rat einer beratenden Person nicht folge, heißt das nicht, dass ich ihren Rat nicht hören möchte oder ihr nicht vertraue.
- Der Index ist ein Prozentwert und damit ein empirisch geschätzter Wert.

## LLM Popularity Index: Ausgabe Juni 2024

![Verteilung der LLM-Nutzung im Juni 2024.svg](/docs/introducing-llm-popularity-index/Repartition_of_LLM_usage_in_June_24th.svg)

### GPT liegt mit deutlichem Abstand vor Claude und Gemini

- Mit 27,2 % aller Prompts liegt GPT-4o vor seinen wichtigsten Konkurrenten.
- Im Juni entfielen 14 % aller Anfragen auf Claude. Wie wir in einer speziellen Studie gezeigt haben, stieg die Popularität von Claude nach der Veröffentlichung von Claude 3.5 Sonnet am 20. Juni jedoch stark an.
- Nach der Veröffentlichung von Claude 3.5 Sonnet wurde Claude beliebter als Gemini 1.5 Pro. Auf Gemini entfielen 10 % aller Prompts.
- Mistral Large machte 4,7 % aller Anfragen aus.

### Wie sollten wir Llama 3s Ergebnis interpretieren?

- Llama 3 wurde in der Studie als Standard-LLM ausgewählt. Die Werte von 45 % und 47 % können daher nicht als mathematisch faire Kennzahl zur Bewertung der Popularität von Llama 3 gelten. Sie sind wahrscheinlich zu hoch.
- Dank der herausragenden Geschwindigkeit von Llama 3 mit Groq ist das Modell dennoch ein ernstzunehmender Kandidat für den Titel des beliebtesten KI-Modells. (Das Mammouth-Team hat es als Standard-LLM ausgewählt, weil es sein persönlicher Favorit war.)
- Das Team erwägt, die Standardeinstellungen von Mammouth – der Oberfläche, auf der die Studie durchgeführt wurde – zu überarbeiten, um in der nächsten Studie einen genaueren Wert für Llama 3 zu erhalten.

Wird diese Popularität konstant bleiben oder sich in Zukunft verändern?

Um über unsere nächste Studie auf dem Laufenden zu bleiben, folge Mammouth auf [LinkedIn](https://www.linkedin.com/company/mammouth-ai) oder [X](http://x.com/mammouth_ai).

### **Methodik zur empirischen Bewertung der LLM-Popularität**

Die Popularität wird anhand der Auswahl der Nutzer auf [Mammouth AI](https://mammouth.ai) bewertet – einer Lösung, mit der du die führenden GenAI-Modelle zentral abfragen kannst.

![Prompt-Oberfläche von Mammouth mit Zugriff auf die besten LLM-Versionen von GPT, Claude, Mistral, Llama und Gemini](/docs/introducing-llm-popularity-index/Untitled.png)

Prompt-Oberfläche von Mammouth mit Zugriff auf die besten LLM-Versionen von GPT, Claude, Mistral, Llama und Gemini

- Die fünf besten Modelle werden gemeinsam über fünf gleich große Schaltflächen angezeigt.
- Wenn Nutzer auf ein KI-Modell klicken, erhalten sie die Antwort des ausgewählten LLMs auf ihren Prompt.
- Wenn Nutzer einfach die Eingabetaste drücken, erhalten sie Llamas Antwort.

![Konversationsoberfläche von Mammouth](/docs/introducing-llm-popularity-index/Untitled%201.png)

Konversationsoberfläche von Mammouth

Nachdem Nutzer ein LLM abgefragt haben, können sie außerdem:

- Mit dem ausgewählten KI-Modell weiterchatten
- Ihre Anfrage erneut an ein anderes LLM senden

Um die Popularität der LLMs zu bewerten, haben wir anschließend die Prompts für jedes LLM und jeden Nutzer vom 6. bis zum 30. Juni gezählt.

## LLM Popularity Index: alle Ausgaben

[Die Ausgaben des LLM Popularity Index seit September 2024 findest du hier](/de/docs/the-most-popular-llm/)

## Zusätzliche Informationen

### Dokumentation

- [Veröffentlichung von Claude 3.5 durch Anthropic](https://www.anthropic.com/news/claude-3-family)

### Vier der fünf LLMs kannst du kostenlos ausprobieren:

- [Llama 3 70B von Groq ausprobieren](http://groq.com)
- [GPT-4o ausprobieren](http://www.chatgpt.com)
- [Mistral Large ausprobieren](https://chat.mistral.ai/chat)
- [Claude ausprobieren](https://claude.ai/)

### Oder du kannst sie alle nutzen auf

- [Mammouth AI](http://mammouth.ai)
