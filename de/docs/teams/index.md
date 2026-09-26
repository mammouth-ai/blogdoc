# Für Teams und Unternehmen

## 👥 Rollen und Berechtigungen

Team- und Organisationskonten basieren auf drei Rollen:

| Rolle      | Berechtigungen                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Inhaber** | Voller Zugriff auf alle Funktionen der Teamseite, einschließlich Tarifverwaltung, Abrechnung und Berechtigungen               |
| **Admin**  | Kann Mitglieder und andere Admins einladen, aktivieren und deaktivieren. Kann Abonnement, Abrechnung oder Berechtigungen nicht ändern |
| **Mitglied** | Kein Zugriff auf die Teamseite                                                                                                 |

> 💡 **Tipp:** Inhaber und Admins können ihre eigene Lizenz deaktivieren und einem anderen Mitglied übertragen. So können sie rein administrative Aufgaben übernehmen, ohne eine Lizenz zu belegen.

### Einladungen in Gruppen

Mitglieder können **einzeln** oder **in Gruppen mit bis zu 100 Personen** eingeladen werden. Dazu genügt es, eine E-Mail-Liste aus einer CSV-Datei oder Tabelle zu kopieren und einzufügen.

### Datenschutz der Nutzer

Die Unterhaltungen und Dokumente jedes Nutzers sind **streng vertraulich** und bleiben dessen Eigentum. Kein Teammitglied kann auf die Unterhaltungen eines anderen Nutzers zugreifen, außer wenn diese ausdrücklich über eine der folgenden Möglichkeiten geteilt werden:

- Teilen von Unterhaltungen,
- Mammouths teilen.

![Screenshot der Teameinstellungen](/docs/teams/teams_settings.png)

---

## 🔒 Berechtigungen

**Inhaber** können nach eigenem Ermessen bestimmte Funktionen für alle Teammitglieder einschränken:

- Bestimmte **KI-Anbieter** deaktivieren
- **API**-Zugriff deaktivieren
- **Videogenerierung** deaktivieren
- **Konnektoren (MCPs)**: Inhaber können auf der Seite „Berechtigungen“ Konnektoren (Microsoft 365, GitHub, Notion, Atlassian oder eigene MCPs) für alle Teammitglieder konfigurieren und bereitstellen

![Screenshot der Berechtigungen](/docs/teams/permissions.png)

---

## 🦣 Geteilte Mammouths

Ein **Mammouth** (personalisierter KI-Arbeitsbereich) kann innerhalb eines Teams mit zwei Zugriffsstufen geteilt werden:

- **Nur Lesen**: Eingeladene Mitglieder können den Mammouth nutzen, ohne seine Anweisungen oder zugehörigen Dateien zu ändern.
- **Lesen und Bearbeiten**: Eingeladene Mitglieder können die Anweisungen und zugehörigen Dateien ändern.

> ⚠️ Einen Mammouth zu teilen bedeutet **nicht**, dass auch die darin geführten Unterhaltungen geteilt werden. Jede Unterhaltung bleibt standardmäßig privat.

### Unterhaltungen teilen

Unterhaltungen können geteilt werden, aber das muss für die jeweilige Unterhaltung **ausdrücklich aktiviert** werden. Das Teilen erfolgt über einen **URL-Link**.

---

## 🔀 Option mit mehreren Tarifen

Du kannst **verschiedene Tarife** (Starter, Standard und Expert) innerhalb desselben Teams kombinieren und den Zugriff so an den tatsächlichen Bedarf der einzelnen Teammitglieder anpassen.

---

## 💳 Zahlungsoptionen und Abrechnung

### Online-Zahlung _(empfohlen)_

Verfügbar auf [mammouth.ai/pricing](https://mammouth.ai/pricing), mit den folgenden Zahlungsmethoden:

- 💳 Kredit- oder Debitkarte
- 🅿️ PayPal
- 🛍️ Klarna
- 🏦 SEPA-Lastschrift _(nur in Europa)_

Mit diesen Zahlungsmethoden kannst du dein Abonnement **vollständig selbstständig** verwalten.

**Abrechnung:** Nach jeder Zahlung wird automatisch eine Rechnung per E-Mail versendet. Sie ist außerdem in deinem persönlichen Kontobereich verfügbar.

> 💡 Für Unternehmen: Wähle bei der Registrierung auf der Zahlungsseite **„I'm purchasing as a business“** und gib deine europäische Umsatzsteuer-Identifikationsnummer ein.

---

### Banküberweisung

Zahlungen per Banküberweisung sind unter folgender Bedingung möglich:

- **Jährliche Vertragslaufzeit erforderlich**

**Wenn du ein Angebot anfordern möchtest**, fülle bitte [**das Angebotsformular**](https://mammouth.ai/app/account/quote-request) aus.

> ⏱️ Für jede zusätzliche Lizenz ist ein neues Angebot erforderlich. Die Bearbeitung erfolgt **innerhalb von 72 Geschäfts­stunden**.

---

## 🔐 SSO (Single Sign-On)

Die **SSO-Integration** ist mit **Microsoft Entra ID, Okta, Keycloak** und anderen SAML-2.0-Identitätsanbietern verfügbar. Sie erleichtert die Bereitstellung von Mammouth in Unternehmen und Universitäten mit **mehr als 50 Lizenzen**.

Einzelheiten findest du in der [Anleitung zur SSO-Integration](/de/docs/sso/).
