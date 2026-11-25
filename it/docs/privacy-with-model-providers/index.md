# Privacy e fornitori dei modelli

**Ultimo aggiornamento: 28/09/2026**

La privacy è importante per noi.

Abbiamo sede in Europa, patria del GDPR.

I nostri ricavi derivano dagli abbonamenti che paghi, e da nient'altro.

Non addestriamo modelli interni e non usiamo le tue conversazioni per addestrare alcunché. I prompt vengono conservati solo per permetterti di ritrovare la cronologia e puoi eliminarli in qualsiasi momento.

Per informazioni complete sui dati che raccogliamo, sui periodi di conservazione, sui tuoi diritti e sulle nostre misure di sicurezza, consulta la nostra [informativa sulla privacy](../privacy-policy/). Questa pagina si concentra su una domanda affrontata solo in generale nell'informativa: **cosa fanno i fornitori di modelli di IA con i tuoi prompt?**

## Quali dati ricevono i fornitori dei modelli

I fornitori ricevono solo le informazioni necessarie per rispondere alla tua richiesta: il prompt, la cronologia pertinente della conversazione, gli estratti dei documenti e le istruzioni personalizzate applicabili.

**Non ricevono la tua identità, il tuo ID utente Mammouth, l'ID della conversazione, del team, del progetto o dei file**. Per prevenire gli abusi potrebbero ricevere un identificativo utente completamente anonimizzato.

I tuoi contenuti vengono elaborati senza essere associati alla tua identità Mammouth.

## Come vengono usati i prompt dai fornitori dei modelli

Mammouth garantisce due principi fondamentali per i prompt inviati tramite la piattaforma:

- I prompt di Mammouth non vengono utilizzati per addestrare i modelli.
- Politica di non conservazione dei dati: i fornitori non conservano i prompt di Mammouth per più di 30 giorni, di norma per monitorare gli abusi del servizio tramite i log.

Poiché utilizziamo modelli di IA proprietari, dobbiamo rispettare le relative politiche sulla privacy, che variano da un fornitore all'altro. Le abbiamo esaminate: ecco una breve sintesi dei principali fornitori:

1. OpenAI: «Sei proprietario dei tuoi dati e ne mantieni il controllo… I dati inviati all'API di OpenAI non vengono utilizzati per addestrare o migliorare i modelli OpenAI». Consulta l'[informativa sulla privacy dell'API OpenAI](https://developers.openai.com/api/docs/guides/your-data).
2. Mistral: paghiamo il loro servizio API. La [loro politica](https://mistral.ai/fr/terms/#data-processing-agreement) (articolo `2.2.2.2 Nos Services Payants`) stabilisce: «Non utilizziamo i tuoi dati utente per addestrare, migliorare o perfezionare i nostri modelli». I dati vengono conservati solo per 30 giorni per monitorare gli abusi. Mistral ci piace molto.
3. Anthropic Claude: rispettiamo le [condizioni commerciali del servizio](https://www.anthropic.com/legal/commercial-terms), che stabiliscono (A. Service, 4.): «Anthropic non può addestrare modelli sui contenuti dei clienti dei servizi a pagamento».
4. Gemini: lo utilizziamo tramite l'API Google Cloud. La documentazione sulla governance dei dati stabilisce che «Gemini non usa i tuoi prompt né le sue risposte per addestrare i propri modelli». Scopri di più sulla [governance dei dati Gemini](https://cloud.google.com/gemini/docs/discover/data-governance?hl=en).
5. I modelli DeepSeek e Llama sono open source. Il fornitore che utilizziamo per servirli è Fireworks (oppure, in alcuni casi, OpenRouter: vedi sotto). I prompt inviati non vengono utilizzati per migliorare i modelli e non vengono conservati dopo la generazione. Per saperne di più, consulta [la loro politica sulla privacy](https://docs.fireworks.ai/guides/security_compliance/data_handling#zero-data-retention).
6. OpenRouter viene utilizzato come livello di instradamento API. Per impostazione predefinita non conserva i prompt o le risposte e non li usa per addestrare i modelli. Può inoltrare prompt e risposte ai fornitori di modelli a valle; ci assicuriamo che rispettino le politiche di non addestramento e non conservazione sopra descritte. Consulta la [documentazione di OpenRouter sulla raccolta dei dati](https://openrouter.ai/docs/guides/privacy).

<img src="/docs/privacy-with-model-providers/API-mammouth-schema.png" alt="Schema del funzionamento di Mammouth e delle interazioni con i fornitori di modelli di IA" style="height: auto;" />

Consulta la nostra [informativa sulla privacy](../privacy-policy/) oppure [contattaci](https://mammouth.ai/contact) per ulteriori informazioni o assistenza.

Il team Mammouth
