# Kontingentsystem und Nutzungslimits

## Wie funktionieren Kontingente?

Die Nutzungslimits bei Mammouth gelten **pro Sitzung**. Die Kontingente werden alle 3 Stunden vollständig erneuert.

Die verschiedenen Abonnementpläne (Starter, Standard und Expert) umfassen unterschiedliche Nutzungskontingente.

---

## Was wird auf die Kontingente angerechnet?

Dein Verbrauch innerhalb einer Sitzung hängt von mehreren Faktoren ab:

| Faktor | Beschreibung |
| --- | --- |
| **Nachrichtenlänge** | Je länger deine Nachrichten sind, desto mehr verbrauchen sie. Auch die Länge der Antworten wird berücksichtigt. |
| **Dokumentgröße** | Dateien und Bilder, die du zum Gespräch hinzufügst, wirken sich auf deinen Verbrauch aus. |
| **Gesprächslänge** | Je länger ein Gespräch wird, desto kostspieliger wird jeder Austausch (der angesammelte Kontext wird mit jeder Nachricht erneut gesendet). |
| **Tool-Nutzung** | Tools wie die Websuche oder die Dokumentenerstellung verbrauchen zusätzliche Kontingente. |
| **Ausgewähltes Modell** | Leistungsstärkere Modelle verbrauchen mehr Kontingente. |
| **Mammouth-Anweisungen** | Mammouth-Anweisungen sind in jeder Anfrage enthalten und wirken sich auf den Verbrauch aus. |

---

## Das Prinzip der Modell-Schwellenwerte

Mammouth ist so konzipiert, dass **du bei deiner Arbeit nicht unterbrochen wirst**. Wenn du das Kontingent eines Modells erreichst, wechselt Mammouth für deine weiteren Nachrichten automatisch zu einem leichteren Modell.

**Konkretes Beispiel:**

> Du verwendest **Claude Opus** und erreichst den Schwellenwert → **Claude Sonnet** übernimmt <br>
> Du setzt das Gespräch fort und erreichst den **Claude-Sonnet-Schwellenwert** → **Claude Haiku** übernimmt
> 

So kannst du auch bei intensiver Nutzung immer weiterarbeiten.

---

## Den passenden Plan auswählen

Mammouth bietet verschiedene Pläne für unterschiedliche Nutzungsintensitäten:

| Plan | Kontingent | Für wen? |
| --- | --- | --- |
| 🌱 **Starter** | Referenzwert | Tägliche Nutzung durch Privatpersonen — 80 % der Einzelanwender bevorzugen diesen Plan. |
| ⚡ **Standard** | Das 3-Fache von Starter | Intensive Nutzung, mit mehr Flexibilität und ohne Sorgen um Sitzungslimits — 50 % der Unternehmen bevorzugen diesen Plan. |
| 🚀 **Expert** | Das 10-Fache von Starter | Für Profis und Vielnutzer mit hohem, regelmäßigem Bedarf |

> 💡 Das Verhältnis von Umfang zu Preis verbessert sich bei höheren Plänen deutlich: Der Expert-Plan bietet das 10-Fache des Kontingents zum nur 6-Fachen des Starter-Preises.
> 

---

## Einschränkungen bei Dokumenten

### Eingabegröße und Umfang
- Maximale Dokumentmenge pro Anfrage: 4.000.000 Zeichen (zusammengezählt über alle eingelesenen Dokumente)

### Unterstützte Dateien
- Es werden zahlreiche Dateiformate unterstützt (Dokumente, Tabellen, Präsentationen, Code, Bilder, Audio, Video und mehr)  
[Hier findest du die vollständige Liste](/de/docs/supported-file-extensions/).

### Dateilimits pro Gespräch
- Maximal 20 Dateien
- Maximale Gesamtgröße: 100 MB (für alle Dateien zusammen)  
- Maximale Größe pro PDF: 100 MB
- Maximale Größe pro Bild: 30 MB
- Maximale Größe pro anderer Datei außer PDF (Dokumente, Video, Audio): 20 MB

### Sonderfälle
- PDFs, die nur Bilder enthalten (z. B. gescannte PDFs, für die OCR erforderlich ist):
  - maximal 50 Seiten
  - maximal 20 MB

> 💡 Komprimiere oder teile große Dateien vor dem Hochladen. Lade bei PDFs über 100 MB stattdessen die Datei im Format `docx` oder `txt` hoch.

---

## Tipps zur Optimierung deines Verbrauchs

### 🎯 Sei präzise und fasse dich kurz

Formuliere gleich in der ersten Nachricht klare und ausführliche Anweisungen. Vermeide vage Anfragen, die mehrere Rückfragen erfordern — jede zusätzliche Nachricht verbraucht Kontingente.

### 💾 Nutze benutzerdefinierte Mammouths für dauerhaften Kontext

Wenn ein Dokument oder eine Anweisung in mehreren Gesprächen oder über ein langes Gespräch hinweg verwendet werden soll, speichere sie in einem **benutzerdefinierten Mammouth**. So musst du dieselben Informationen nicht wiederholt senden.

👉 [Mehr über benutzerdefinierte Mammouths erfahren](https://info.mammouth.ai/docs/mammouth-assistant-tutorial/)

### ✏️ Vor dem Senden überprüfen

Nimm dir einen Moment Zeit, um vor dem Senden die Klarheit und Vollständigkeit deiner Nachricht zu prüfen. Ein von Anfang an gut formulierter Prompt verringert die Anzahl der benötigten Nachrichten und schont dein Kontingent.


> 💡 Wenn du regelmäßig deine Limits erreichst, solltest du die höheren Mammouth-Pläne mit erweiterten Kontingenten in Betracht ziehen.
