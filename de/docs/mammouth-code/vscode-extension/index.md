# Mammouth-Erweiterung für VS Code

Mit der **Mammouth**-Erweiterung können Sie die KI-Modelle Ihres Mammouth-Kontos direkt in **GitHub Copilot Chat** verwenden. Nach der Verbindung mit der Mammouth-API werden die für Ihr Konto verfügbaren Modelle zur Modellauswahl von Copilot hinzugefügt.

[Erweiterung im Visual Studio Marketplace installieren](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai)

## Voraussetzungen

- **Visual Studio Code 1.146.0 oder höher**
- **GitHub Copilot Chat** ist installiert und aktiviert
- Ein [Mammouth-API-Schlüssel](https://mammouth.ai/app/account/settings/api) und API-Guthaben

## Installation und Verbindung

1. Öffnen Sie die [Seite der Mammouth-Erweiterung im Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Mammouth.mammouthai) und wählen Sie **Install**. Bestätigen Sie bei Aufforderung, dass VS Code geöffnet werden soll.
2. Öffnen Sie in VS Code die Ansicht **Mammouth AI** über das entsprechende Symbol in der Aktivitätsleiste.
3. Fügen Sie Ihren API-Schlüssel ein und wählen Sie **Connect**.
4. Wählen Sie **Inject into Copilot configuration**.
5. Öffnen Sie Copilot Chat und wählen Sie im Modellmenü auf der Registerkarte **Mammouth** ein Modell aus.

Wenn neue Modelle für Ihr Konto verfügbar sind, wählen Sie erneut **Inject into Copilot configuration**, um die Liste zu aktualisieren.

## Den Reasoning-Aufwand auswählen

Bei Modellen, die mehrere Reasoning-Stufen unterstützen, öffnen Sie die Copilot-Modellauswahl, wählen Sie den Pfeil neben dem Modell und anschließend eine **Effort Level**. Eine höhere Stufe kann bei komplexen Aufgaben hilfreich sein, allerdings dauern Antworten möglicherweise länger und verbrauchen mehr Guthaben.

## Modelle anpassen

Öffnen Sie in der Mammouth-Ansicht **Model settings**, um die in Copilot angebotenen Modelle zu verwalten. Für jedes Modell können Sie:

- es in Copilot aufnehmen oder ausblenden;
- die Kontext- oder Ausgabelimits reduzieren;
- die Verwendung von Tools und Bildeingaben aktivieren oder deaktivieren;
- die angebotenen Reasoning-Stufen festlegen.

Wählen Sie **Save and inject**, um Ihre Einstellungen zu übernehmen. Sie bleiben bei einer Aktualisierung der Liste erhalten. **Reset** stellt die von Mammouth gemeldeten Einstellungen wieder her. Wenn Sie eine Funktion manuell aktivieren, die ein Modell nicht unterstützt, können Anfragen fehlschlagen.

## Modelldetails anzeigen

Aktivieren Sie **Show model details** in der Mammouth-Ansicht, um Kontextgröße, Funktionen und Preise in Guthaben pro Million Tokens anzuzeigen. Klappen Sie **API details** unter einem Modell aus, um alle von Mammouth bereitgestellten Informationen zu sehen. Diese Details werden in der Erweiterungsansicht angezeigt, da Copilots Modellauswahl keine Preise oder mehrere Kontextgrößen darstellen kann.

## API-Schlüssel und Konfiguration

- Ihr Mammouth-API-Schlüssel wird im sicheren Speicher von VS Code gespeichert und nicht im Klartext in einer Datei abgelegt.
- Die Erweiterung fügt die Modelle der Gruppe **Mammouth** in der Copilot-Konfigurationsdatei `chatLanguageModels.json` des aktuellen VS-Code-Profils hinzu. Andere Copilot-Modelle und Anbieter werden nicht verändert.
- Wählen Sie **How it works** für eine kurze Erklärung oder **Open chatLanguageModels.json**, um die Konfigurationsdatei zu öffnen.
- **Disconnect** entfernt den Schlüssel aus der Mammouth-Ansicht. Modelle, die bereits zu Copilot hinzugefügt wurden, bleiben konfiguriert. Um den zugehörigen Schlüssel zu ändern oder zu entfernen, verwenden Sie **Manage Language Models** in Copilot.

## Fehlerbehebung

- **Keine Mammouth-Modelle in Copilot**: Prüfen Sie, ob GitHub Copilot Chat installiert und aktiviert ist, und wählen Sie erneut **Inject into Copilot configuration**.
- **Ungültiger API-Schlüssel**: Wählen Sie **Disconnect** und verbinden Sie sich erneut mit einem gültigen Schlüssel aus Ihrem [Mammouth-Konto](https://mammouth.ai/app/account/settings/api).
- **Ein Modell gibt Fehler zurück**: Öffnen Sie **Model settings** und setzen Sie die Einstellungen zurück, insbesondere wenn Sie Tools oder Bildeingaben manuell aktiviert haben.
