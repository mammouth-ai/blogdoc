# Détails des quotas

### **Quotas d'utilisation par plan**

Les quotas suivants s'appliquent à des types de contenu spécifiques. Le **Quota d'Usage Équitable des Prompts** s'applique **globalement**, couvrant tous les types de contenu (texte, images, documents).

| Type de contenu | Taux de renouvellement du quota | Plan Starter  | Plan Standard | Plan Expert | Modèle illimité |
| --- | --- | --- | --- | --- | --- |
| **Images** | Tous les 30 jours | 60 | 300 | 1100 | Flux Schnell |
| **Documents (>10k caractères)** | Tous les 30 jours | 20 | 150 | 450 | Modèles illimités |
| *Usage équitable (Tout contenu)* | *Toutes les 3 **heures*** | *50* | *80* | *120* | *Modèles illimités* |

**Longueur maximale d'entrée : 4 000 000 caractères**

---

### **Précisions :**

- Les **modèles illimités** pour le texte sont : GPT-5-mini, Mistral Small 32B, Llama Scout, Grok-3-mini et Gemini 2.5 Flash Lite. Si vous atteignez votre quota, vous basculez vers les modèles illimités pour garantir un service ininterrompu.
- Le **Quota d'Usage Équitable** (total des prompts autorisés) couvre **tous les types de contenu** combinés, incluant les messages texte, la génération d'images et les messages/documents longs.
- Les **messages vocaux** comptent comme des messages textes.
- **Documents/Messages longs :** Le quota « documents » fait référence à tout message ou document dépassant **10 000 caractères** (environ 3 pages d'un PDF).
    - Un document de moins de 10 000 caractères compte comme un message texte ordinaire
    - Un message texte d'entrée de plus de 10 000 caractères compte comme un document
- **Quota d'Usage Équitable :** Une fois le quota d'usage équitable atteint, seuls les modèles illimités sont disponibles.
- **Taux de renouvellement des quotas :** Les quotas se réinitialisent automatiquement sur une fenêtre glissante basée sur les délais prédéfinis (par exemple, toutes les 3 heures ou tous les 30 jours).
- **La longueur d'entrée** est la somme de tous les caractères des documents joints avec les caractères du prompt utilisateur et l'instruction contextuelle du mammouth personnalisé.
- **Autres limitations de documents** : Maximum 20 fichiers par conversation. Maximum 32 Mo par conversation (somme des fichiers). Maximum 20 Mo par fichier. Les PDF contenant uniquement des images, comme les PDF scannés, sont limités à 20 pages. Veuillez compresser ou diviser vos fichiers plus volumineux avant de les soumettre.