# Datenschutz

**Zuletzt aktualisiert: 10.09.2026**

Datenschutz ist uns wichtig.

Wir sind **Mammouth AI**, ein Unternehmen mit Sitz in Europa – der Heimat der DSGVO. Wir verdienen Geld mit deinem Abonnement und nicht mit irgendetwas anderem: Wir verkaufen oder monetarisieren deine Daten niemals.

Wir trainieren keine eigenen Modelle und verwenden deine Unterhaltungen niemals, um irgendetwas zu trainieren. Deine Prompts werden nur gespeichert, damit du deinen Verlauf wieder aufrufen kannst. Du kannst sie jederzeit löschen.

Alle Informationen dazu, welche Daten wir erfassen, wie lange wir sie aufbewahren, welche Rechte du hast und welche Sicherheitsmaßnahmen wir einsetzen, findest du in unserer [Datenschutzerklärung](/de/docs/privacy-policy/). Auf dieser Seite geht es um eine Frage, die in der Datenschutzerklärung nur allgemein behandelt wird: **Was machen die Anbieter der KI-Modelle mit deinen Prompts?**

## Was die Modellanbieter mit deinen Prompts machen

Wenn du mit Mammouth chattest, werden deine Prompts an das KI-Modell gesendet, das die Antwort erzeugt. Da wir proprietäre KI-Modelle verwenden, müssen wir deren Datenschutzrichtlinien einhalten, die sich je nach Anbieter unterscheiden. Wir haben sie geprüft und setzen bei allen Anbietern zwei Garantien durch:

- **Kein Training**: Modelle werden niemals mit Prompts trainiert, die von Mammouth stammen.
- **Keine langfristige Speicherung**: Anbieter speichern Mammouth-Prompts nicht länger als 30 Tage und verwenden Protokolle in der Regel nur, um den Missbrauch des Dienstes zu überwachen.

Hier findest du eine kurze Übersicht über die wichtigsten Anbieter:

1. **OpenAI**: „Deine Daten gehören dir. Daten, die an die OpenAI API gesendet werden, werden nicht zum Trainieren oder Verbessern von OpenAI-Modellen verwendet.“ Lies dazu [Datenschutz bei OpenAI für API-Nutzer](https://developers.openai.com/api/docs/guides/your-data).
2. **Mistral**: Wir bezahlen für den API-Dienst. In der [Richtlinie](https://mistral.ai/fr/terms/#data-processing-agreement) (Artikel `2.2.2.2 Our Paid Services`) steht: „Wir verwenden deine Nutzerdaten nicht, um unsere Modelle zu trainieren, zu verbessern oder weiterzuentwickeln.“ Mistral speichert Daten nur 30 Tage, um Missbrauch zu überwachen. Wir mögen Mistral sehr.
3. **Anthropic Claude**: Wir halten uns an die [kommerziellen Nutzungsbedingungen](https://www.anthropic.com/legal/commercial-terms). Darin steht (A. Service, 4.): „Anthropic darf keine Modelle mit Kundeninhalten aus kostenpflichtigen Diensten trainieren.“
4. **Gemini**: Wir nutzen Gemini über die Google Cloud API. In der Dokumentation zur Datenverwaltung von Google steht: „Gemini verwendet deine Prompts oder seine Antworten nicht als Daten zum Trainieren seiner Modelle.“ Mehr dazu in der [Dokumentation zur Datenverwaltung von Gemini](https://cloud.google.com/gemini/docs/discover/data-governance?hl=en).
5. **DeepSeek, Llama, GLM und Kimi** sind Open-Source-Modelle. Der Anbieter, über den wir sie bereitstellen, ist Fireworks (auch für bestimmte Weiterleitungen über OpenRouter, siehe unten). Gesendete Prompts werden nicht zur Verbesserung der Modelle verwendet und nach der Generierung nicht gespeichert. Weitere Informationen findest du in der [Datenschutzrichtlinie](https://docs.fireworks.ai/guides/security_compliance/data_handling#zero-data-retention).
6. **OpenRouter** dient als API-Routing-Ebene. Standardmäßig speichert OpenRouter weder Prompts noch Antworten und verwendet sie nicht zum Trainieren von Modellen. Prompts und Antworten können an nachgelagerte Modellanbieter übermittelt werden. Wir stellen jedoch sicher, dass diese die oben genannten Richtlinien zu Training und Speicherung einhalten. Siehe die [Dokumentation zur Datenerfassung von OpenRouter](https://openrouter.ai/docs/guides/privacy).

Lies unsere [Datenschutzerklärung](/de/docs/privacy-policy/) oder [kontaktiere uns](https://mammouth.ai/contact), wenn du weitere Informationen oder Unterstützung benötigst.

Das Mammouth-Team
