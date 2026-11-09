<style>
.browser-select-tip {
  background: rgba(142, 110, 89, 0.08);
  border-left: 4px solid #8e6e59;
  border-radius: 4px 8px 8px 4px;
  padding: 12px 16px;
  margin: 16px 0;
  font-size: 0.95em;
}
:root.dark .browser-select-tip {
  background: rgba(142, 110, 89, 0.18);
}
.browser-menus details {
  margin: 12px 0;
}
.browser-menus details > summary {
  cursor: pointer;
  padding: 10px 14px;
  border: 1px solid rgba(142, 110, 89, 0.25);
  border-radius: 8px;
  background: rgba(142, 110, 89, 0.04);
  transition: background 0.2s ease, border-color 0.2s ease;
  list-style: none;
}
.browser-menus details > summary::-webkit-details-marker {
  display: none;
}
.browser-menus details > summary::marker {
  content: '';
}
.browser-menus details:not([open]) > summary::before {
  content: '▶ ';
}
.browser-menus details[open] > summary::before {
  content: '🔽 ';
}
.browser-menus details > summary:hover {
  background: rgba(142, 110, 89, 0.1);
  border-color: rgba(142, 110, 89, 0.4);
}
:root.dark .browser-menus details > summary {
  background: rgba(142, 110, 89, 0.08);
  border-color: rgba(142, 110, 89, 0.2);
}
:root.dark .browser-menus details > summary:hover {
  background: rgba(142, 110, 89, 0.18);
  border-color: rgba(142, 110, 89, 0.4);
}
:root:not(.dark) .img-dark,
:root.dark .img-light {
  display: none;
}
</style>

# Utilisez mammouth comme un moteur de recherche

Vous pouvez envoyer un prompt à Mammouth directement depuis la barre de recherche de votre navigateur.
Ajoutez Mammouth comme moteur de recherche dans votre navigateur (Firefox, Chrome, Edge, Brave, Vivaldi…) :
il suffit ensuite de taper un raccourci, par exemple `m`, suivi de votre question dans la barre d'adresse.
Mammouth ouvre une nouvelle conversation et envoie le prompt automatiquement.

<img class="img-light" src="/docs/browser-search-shortcut/url.gif" style="height: auto;" />
<img class="img-dark" src="/docs/browser-search-shortcut/url.gif" style="height: auto;" />

---

## 🔗 Comment fonctionne l'URL

Une URL Mammouth avec prompt se compose de trois parties :


| Partie | Rôle                                                                                               | Exemple |
|---|----------------------------------------------------------------------------------------------------|---|
| `/app/a/default` | Envoie le prompt à votre **mammouth par défaut**                                                   | `https://mammouth.ai/app/a/default` |
| `/app/a/<numéro>` | Envoie le prompt à un **mammouth personnalisé**                                                    | `https://mammouth.ai/app/a/12345` |
| `type` | La **catégorie de modèles** à utiliser (light, web, text, reasoning, image, music, video)          | `&type=image` |
| `q` | Le **prompt** à envoyer (obligatoire et il est limité à 1 000 caractères, %s pour les navigateurs) | `?q=Bonjour` |

```
https://mammouth.ai/app/a/<mammouth>?type=<catégorie>&q=<prompt>
```

---

## 🦊 Ajouter Mammouth comme moteur de recherche

Les navigateurs remplacent `%s` par le texte que vous tapez dans la barre d'adresse.
Dans l'url remplacez 'default', par votre numéro de mammouth personalisé pour bénéficier de l'ordre de préférence de
vos modèles et le système prompte qui s'y applique
::: info
Connectez-vous d'abord à Mammouth dans le navigateur que vous configurez. Les navigateurs bloquent les liens directs vers leurs réglages : copiez l'adresse des réglages et collez-la dans la barre d'adresse.
:::

<div class="browser-menus">

<details>
<summary><strong>Firefox</strong></summary>

La méthode la plus fiable passe par un **marque-page avec mot-clé** :

1. Copiez ```about:preferences#search``` dans la barre de recherche.
2. Cliquer sur ajouter un moteur de recherche
3. Définissez votre nouveau moteur de recherche
   - **Nom du moteur de recherche** : un nom documentant le nouveau moteur de recherche  
     exemple: custom mammouth de traduction
   - **URL** : definir l'url du nouveau moteur de recherche  
     exemple: https://mammouth.ai/app/a/1234?type=light&q=%s
   - **Mot clé** : définir un nom pour actionner la recherche avec mammouth
     exempel: m

Dans la barre d'adresse, tapez `m` suivi d'un espace et de votre prompt, puis **Entrée**.
</details>

<details>
<summary><strong>Google Chrome</strong></summary>

1. Copiez ```chrome://settings/searchEngines``` dans la barre de recherche.
2. Dans la section **Recherche sur les sites**, cliquez sur **Ajouter**.
3. Remplissez les champs :
   - **Nom** : un nom documentant le nouveau moteur de recherche  
     exemple: ```custom mammouth de traduction```
   - **Raccourci** : définir un nom pour actionner la recherche avec mammouth
     exempel: ```m```
   - **URL** : definir l'url du nouveau moteur de recherche  
     exemple: ```https://mammouth.ai/app/a/1234?type=light&q=%s```
</details>


<details>
<summary><strong>Brave</strong></summary>

1. Copiez ```brave://settings/searchEngines``` dans la barre de recherche.
2. Dans la section **Recherche sur les sites**, cliquez sur **Ajouter**.
3. Remplissez les champs :
   - **Nom** : un nom documentant le nouveau moteur de recherche  
     exemple: ```custom mammouth de traduction```
   - **Raccourci** : définir un nom pour actionner la recherche avec mammouth
     exempel: ```m```
   - **URL** : definir l'url du nouveau moteur de recherche  
     exemple: ```https://mammouth.ai/app/a/1234?type=light&q=%s```
</details>

<details>

<summary><strong>Vivaldi</strong></summary>

1. Copiez ```brave://settings/searchEngines``` dans la barre de recherche.
2. Sous la liste des moteurs de recherche, cliquez sur **+**.
3. Remplissez les champs :
   - **Nom** : un nom documentant le nouveau moteur de recherche  
     exemple: ```custom mammouth de traduction```
   - **Surnom** : définir un nom pour actionner la recherche avec mammouth
     exempel: ```m```
   - **URL** : definir l'url du nouveau moteur de recherche  
     exemple: ```https://mammouth.ai/app/a/1234?type=light&q=%s```
</details>

</div>

**🔗 Liens rapides**

::: code-group

```text [mp · light]
https://mammouth.ai/app/a/default?type=light&q=%s
```

```text [mp · Mammouth personnalisé]
https://mammouth.ai/app/a/12345?q=%s
```

```text [m · Auto]
https://mammouth.ai/app/a/default?q=%s
```

```text [mw · Recherche web]
https://mammouth.ai/app/a/default?q=%s&type=web
```

```text [mr · Raisonnement]
https://mammouth.ai/app/a/default?q=%s&type=reasoning
```


:::

::: tip Autre méthode
Sur les versions récentes de Firefox, vous pouvez aussi passer par les réglages de recherche, section **Raccourcis de recherche** > **Ajouter**, avec les mêmes nom, URL et mot-clé. Adresse des réglages :

```text
about:preferences#search
```
:::
---

## ⚙️ Ce qui se passe à l'ouverture du lien

Mammouth ouvre une nouvelle conversation sur le mammouth indiqué dans l'URL.

### Limites et sécurité
- **1 000 caractères maximum** : au-delà, le prompt n'est pas envoyé et le message
- **Connecteurs activés** : si vous avez activé des [connecteurs](../../../docs/connectors/index.md), Mammouth vous demandera
une validation du prompt.
- **Pas de mode agentique** : un prompt envoyé de cette manière ne pourras pas activer le mode agentique.

::: warning N'ouvrez que des liens de confiance
Un lien contenant `?q=` envoie un prompt depuis **votre** compte dès son ouverture. N'ouvrez pas un tel lien si vous ne savez pas d'où il vient.
:::


