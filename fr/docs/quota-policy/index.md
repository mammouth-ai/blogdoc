# Détails des quotas

### **Quotas d'utilisation par plan**

Les quotas suivants s'appliquent à des types de contenu spécifiques. Le **Quota d'Usage Équitable des Prompts** s'applique **globalement**, couvrant tous les types de contenu (texte, images, documents).

| Type de contenu | Taux de renouvellement du quota | Plan Starter  | Plan Standard | Plan Expert | Modèle illimité |
| --- | --- | --- | --- | --- | --- |
| **Images** | Tous les 30 jours | 60 | 300 | 1100 | Flux Schnell |
| **Documents (>10k caractères)** | Tous les 30 jours | 20 | 150 | 450 | GPT-4o-mini |
| *Usage équitable (Tout contenu)* | *Toutes les 3 **heures*** | *50* | *80* | *120* | *GPT-4o-mini* |

**Longueur maximale d'entrée : 4 000 000 caractères**

---

### **Précisions :**

- Le **Quota d'Usage Équitable** (total des prompts autorisés) couvre **tous les types de contenu** combinés, incluant les messages texte, la génération d'images et les messages/documents longs.
- **Documents/Messages longs :** Le quota « documents » fait référence à tout message ou document dépassant **10 000 caractères** (environ 3 pages d'un PDF).
    - Un document de moins de 10 000 caractères compte comme un message texte ordinaire
    - Un message texte d'entrée de plus de 10 000 caractères compte comme un document
- **Modèle illimité :** Si vous dépassez votre quota, vous basculerez vers les **modèles illimités** (par exemple GPT-4o-mini) pour assurer un service ininterrompu.
- **Quota d'Usage Équitable :** Une fois le quota d'usage équitable atteint, seul GPT-4o-mini est disponible.
- **Taux de renouvellement des quotas :** Les quotas se réinitialisent automatiquement sur une fenêtre glissante basée sur les délais prédéfinis (par exemple, toutes les 3 heures ou tous les 30 jours).
- **La longueur d'entrée** est la somme de tous les caractères des documents joints avec les caractères du prompt utilisateur et l'instruction contextuelle du mammouth personnalisé.
- **Autres limitations de documents** : Maximum 20 fichiers par conversation. Maximum 32 Mo par conversation (somme des fichiers). Maximum 20 Mo par fichier. Veuillez compresser vos fichiers volumineux avant de les soumettre.