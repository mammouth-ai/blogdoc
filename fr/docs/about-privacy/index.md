# À propos de la confidentialité

**Dernière mise à jour : 10/09/2026**

La confidentialité est importante pour nous.

Nous sommes basés en Europe, le berceau du RGPD 🙂. 

Nous gagnons de l'argent grâce à l'abonnement que vous nous payez, pas sur autre chose..

Nous n'entraînons aucun modèle interne, et nous n'utilisons pas vos conversations pour entraîner quoi que ce soit. Vos prompts ne sont stockés que pour vous permettre de retrouver votre historique, et vous pouvez les supprimer à tout moment.

Pour le détail complet des données que nous collectons, de leur durée de conservation, de vos droits et de nos mesures de sécurité, veuillez lire notre [politique de confidentialité](../privacy-policy/). Cette page se concentre sur une question que la politique de confidentialité n'aborde que de façon générale : **que font les fournisseurs de modèles d'IA avec vos prompts ?**

## Ce que font les fournisseurs de modèles avec vos prompts

Chez Mammouth, nous nous concentrons sur la fourniture de deux garanties principales concernant les prompts de Mammouth :

- Aucun entraînement de modèles avec les prompts de Mammouth.
- Politique de non rétention de données: Les fournisseurs ne conservent pas les prompts de Mammouth au-delà de 30 jours, généralement pour surveiller les abus de service via des logs.

Comme nous utilisons des modèles d'IA propriétaires, nous devons nous conformer à leurs politiques de confidentialité. Elles diffèrent selon le fournisseur. Nous les avons étudiées, voici un résumé rapide pour les principales :

1. OpenAI : « Vous possédez et contrôlez vos données … Les données envoyées à l'API OpenAI ne sont pas utilisées pour entraîner ou améliorer les modèles OpenAI ». Voir [Confidentialité API chez OpenAI](https://developers.openai.com/api/docs/guides/your-data).
2. Mistral : nous payons leur service API, [leur politique](https://mistral.ai/fr/terms/#data-processing-agreement) (article `2.2.2.2 Nos Services Payants`) stipule : « Nous n'utilisons pas Vos Données Utilisateur pour entraîner, améliorer ou perfectionner nos Modèles. » Ils ne conservent les données que 30 jours pour surveiller les abus. Nous adorons Mistral.
3. Anthropic Claude : nous nous conformons aux [Conditions Commerciales de Service](https://www.anthropic.com/legal/commercial-terms), qui stipulent (A. Service, 4.) « Anthropic ne peut pas entraîner des modèles sur le Contenu Client des Services payants ».
4. Gemini : Nous l'utilisons via l'API Google Cloud, et leur documentation sur la gouvernance des données stipule que « Gemini n'utilise pas vos prompts ou ses réponses comme données pour entraîner ses modèles. » Vous pouvez en apprendre davantage sur les spécificités de la [gouvernance des données Gemini](https://cloud.google.com/gemini/docs/discover/data-governance?hl=en).
5. Les modèles DeepSeek et Llama sont open source. Le fournisseur que nous utilisons pour servir le modèle est Fireworks (ou dans certains cas Openrouter, voir ci-dessous), les prompts envoyés ne sont pas utilisés pour améliorer le modèle et ne conservent pas la donnée après la génération du prompt. Vous pouvez en savoir plus sur leur politique de confidentialité [ici](https://docs.fireworks.ai/guides/security_compliance/data_handling#zero-data-retention).
6. OpenRouter est utilisé comme couche de routage via API. Par défaut, OpenRouter ne conserve pas les prompts ni les réponses et ne les utilise pas pour entraîner des modèles. Il peut transmettre les prompts et les réponses à des fournisseurs de modèles en aval, mais nous nous assurons qu'ils respectent les politiques de non entraînement et de non rétention de données mentionnées ci-dessus. Voir la [documentation d’OpenRouter sur la collecte des données](https://openrouter.ai/docs/guides/privacy).

Veuillez lire notre [politique de confidentialité](../privacy-policy/) ou [nous contacter](https://mammouth.ai/contact) si vous avez besoin de plus d'informations ou de conseils.

L'équipe Mammouth
