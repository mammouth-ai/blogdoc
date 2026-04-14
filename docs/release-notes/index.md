# Release notes - Mammouth AI

## April 14th 2026

### ⭐ New Models

**Video Generation** - Video generation is now available in Mammouth with 4 models: Veo 3.1 fast, Sora 2, Grok Video & Kling 2.5

**Grok 4.20** - The new Grok model is available with updated web search including specific x.com search.

**Light models updates:**
- **Claude Haiku 4.5** is added
- **GPT 5.4 nano** replaces GPT 5 mini
- **Mistral Small 4** replaces Mistral Small 2

### 👥 New Features for Teams and Companies

**SSO Integration** - We now support SSO integration with Microsoft Entra, Keycloak, Okta, and more. It facilitates deployment of Mammouth across companies or universities.

**Multi-licensing** - Your team can now mix plans (Starter/Standard/Expert) in the same subscription to align with various user needs.

More details on teams: [info.mammouth.ai/docs/teams/](https://info.mammouth.ai/docs/teams/)

### 📊 New Quota Policy & Increased Context Capacities

**Updated quota policy:**
- The monthly quotas on images and documents have been removed
- The fixed 50 messages quota has been removed too
- All limitations are now calculated in the 3-hours session quota that depends on the real consumption of AI (number of messages, length of messages, model selected, reasoning, web search)
- After-quota model switch has been improved to be more progressive and less frustrating

**Increased context on documents** - We added an option in user settings to increase the context on documents (for specific needs on very long documents).

**Increased memory** - We added an option in settings to increase the context size of the conversation memory that can be sent at every message.

More details: [the new quota system : before and after](https://public.mammouth.ai/the-new-quota-system)


### And also

- **Text to Speech** (with Voxtral) on output message so you can let the AI read its answer out loud

- **New file extensions supported**: .ods, .odp, .odt

- **Revamped design on chat messages** to remove borders and be more mobile friendly

- **Transactional emails templates** (email verification links, forgotten passwords, team invite etc.) were fully redesigned

- **Conversation filters** per mammouth and per date were added:
  - You can bulk select/move/delete your conversations older than 3 months
  - You can bulk select/move/delete your conversations from a custom mammouth
  ![conversation filter](conversation_filter.png)



## March 6th 2026

### ⭐ New Models

**Gemini 3.1 Pro**

**Recraft v4**

### 🦣 Shared Mammouths

Mammouths can now be shared via public link, email invitation or within your Team.

### And also

- When the LLM output is still streaming, you can now copy code blocks or table or open external links.

- We now accept all text file extensions. This is especially useful for coders using niche file formats (such as .csproj or .mq4).

- Models were added in the API (GLM-5, Gemini 3.1 Pro, Claude Sonnet 4.6, gemini 2.5 flash lite). Additionally, 13 models were deprecated to keep the list clean and up to date.

- The delete chats feature was improved — the delete operation now runs in the background, so you can keep working without waiting on a frozen screen.

## February 18th 2026

### ⭐ New Models

**Claude Sonnet 4.6** - just released!

**Grok Imagine** - replaces Grok 2 image

### 🔄 Model Updates

- **GPT Image** - updated for better addressing text in images in large prompts

### ✨ New Features

- **Copy while streaming** - you can now copy the AI's output text while it is still live streaming
- **Document generation with reasoning models** - document generation now works when you chat with reasoning models such as Gemini Pro or Claude Opus

### ⚙️ Settings & Input

- **New settings page** - the [settings page](https://mammouth.ai/app/account/settings/) was fully revamped with a modern design
- **Switch ENTER key behavior** - choose which key will send your prompt: ENTER, ALT+ENTER, or CTRL+ENTER in [your settings](https://mammouth.ai/app/account/settings/)

### 🎭 New Mammouth Accessories

Check out the new temporary mammouth accessories ⛷️

## February 12th 2026

### ⭐ New Models

**Claude Opus 4.6** and **Kimi K2.5**

### 👨‍💻 Mammouth Code !

Check out the new [Mammouth Code documentation](https://info.mammouth.ai/docs/mammouth-code/) for details.

### 🌐 Web Updates

- **Image search**: search queries can now display images from the web
- **Simplification**: the web category line was merged with text models and OpenPerplex was removed. You can still force select the web category.
- **Perplexity**: now has a new display with snippets

### Other

- **Reprompting** can now ricochet across multiple conversations
- When you copy an output message, it will paste with the applied markdown formatting (more convenient for emails, docs, etc.)

## January 23rd 2026

### ⭐ New Model

**Mistral Large 3** - replaces Mistral Medium

### 🔄 Model Updates

- **Gemini** - improved stability and reliability
- **Gemini** - now supports YouTube video link screening

### 📂 Conversation Management

- **Batch operations** - delete or move multiple conversations at once
- **Enhanced search** - find conversations by model or mammouth name

### 🦣 Mammouths

- **Unlimited mammouths** - no more 15-mammouth limit
- **Favorite mammouths** - mark your most-used mammouths as favorites
- **Smart ordering** - the last used mammouth automatically moves to the top of the list
- **Improved sidebar navigation** - smoother browsing through your mammouth collection

### 🎭 New Mammouth Accessories

**Seasonal accessories** - collect limited-time accessories throughout the year! How many will you catch?

### 📱 Mobile App (Chrome users)

**Reinstall for new features** - update your app to access native capabilities:
- **Quick shortcuts** - press and hold the app icon to reveal action shortcuts
- **Enhanced sharing** - seamlessly share photos and files directly in Mammouth

### And also

- **Dynamic browser tabs** - conversation names and mammouth icons now appear in browser tabs
- **Nano Banana API** - added as the first image model in the Mammouth API
- **GPT Image improvements** - enhanced image generation quality and capabilities
- **VAT-inclusive pricing** - all EU countries now see prices including VAT

## January 1st 2026

### ⭐ New Premium Model

**Claude Opus 4.5** - The most powerful model from Anthropic joins Mammouth

### 🔄 Model Updates

- **GPT 5.2** - replaces GPT 5.1
- **Gemini 3 Flash** - replaces Gemini 2.5 Flash
- **GPT Image 1.5** - replaces GPT Image 1

### 🌟 New Brands

**Kimi** - New brand with two models:
- Kimi K2
- Kimi K2 Thinking

**Qwen** - New brand with:
- Qwen 3 Coder

### 📂 Enhanced Document Context

**8x more context extraction** - The extracted context from documents in your mammouths has been multiplied by 8, now matching the context capacity of conversations.

### ⚙️ Advanced Settings Control

- **Deactivate API settings** - Turn off API access directly from the menu
- **Brand management** - Deactivate specific model brands for you and your team from [permission settings](https://mammouth.ai/app/account/settings/permissions)

### 🌎 New Language Support

🇳🇱 **De Mammoet spreekt nu Nederlands!**

## December 24th 2025

### ✨ New Design : Mammouth gets a makeover !

Discover our new visual identity, enhanced customization options, and a redesigned user interface for an even better experience :

### 🎨 **New Logo & Customizable Mammouths**

- **New logo** : While preserving Mammouth's iconic spirit and its original icon, we've modernized the shape and colors for a more dynamic and contemporary look !
![Mammouth Logo](mammouth_logo.png)

- **Custom Mammouths Experience** : Personalize your mammouth with a wider range of colors and even more props to make it truly unique !
![Custom_mammouths_new_creation_page](custom_mammouths_new_creation_page.png)


### **📱 Improved user experience (especially on mobile)**

- **Larger buttons**: for easier and more intuitive navigation.
- **New color palette**: a refreshed and harmonious interface.
- **Fully responsive mobile**: perfect fluidity across all your devices.
- **New dark mode**: a more coherent and pleasant display for your eyes.

![Mobile Design](mammouth_mobile_design.jpeg)

## December 17th 2025

⭐ **Flux 2 Pro** - replaces Flux Kontext Pro

⭐ **DeepSeek v3.2** - replaces DeepSeek v3.1

**And also**

📍 **Pin your conversations** to keep them on top of the list

🗃️ **File generation** we improved the file generation system

⬇️ **Reprompting improvements**
- Perplexity was added to the list reprompting list
- Upon reprompting on Grok, DeepSeek or Mistral, the web search will automatically activate if relevant

🧷 **API update**: Claude Opus 4.5, GPT 5.1, GPT 5.2, Gemini 3 Pro, Perplexity Sonar Pro, Perplexity Deep Research, Grok Code Fast, Claude 4.5 Haiku, Qwen3 Coder, Kimi K2, Mistral Large 3 and DeepSeek v3.2 were added to the API

## December 3rd 2025

👥 **Team Roles** - if you use mammouth in your company, you can now:
- Assign roles : owner, admin (team management to activate/deactivate members), members
- Transfer ownership: the owner can designate a successor
- Administrative account: the owner of the plan don't need to use a licence for himself
- Batch invitations: invite multiple email addresses at once 
![Team roles update](team_updates_roles_EN.png)

**And also**

**⭐ Grok 4.1 fast** - replaces Grok 4

⬆️ **Export your conversations** - export available in JSON format

⬇️ **Import your conversations from chatGPT** -- you can now [import conversations](/docs/import-conversations/index.md)

💡 A product detail: if you ask a text model like Mistral or DeepSeek to generate an image, it will create a smart link to quickly reprompt your query to an image model. 

🪛 Fixed an occasional error on GPT-Image when sending emojis in prompts.

## November 21st 2025

**⭐ Gemini 3 Pro** - replaces Gemini 2.5 Pro

## November 18th 2025

**⭐ GPT 5.1** - replaces GPT 5 and GPT-5 Thinking. The model is faster while keeping up with GPT 5 performance.

**⭐ Grok 4 fast** - we updated Grok 4 with a faster text model, the new light model and a reasoning model.

**🍌 Nano Banana** - we updated Nano Banana to the post-preview version. It now handles [aspect ratio parameters](/docs/aspect-ratio/index.md).

**🌐 Auto-activation of web search** -- Mistral, Grok and DeepSeek now search the web automatically when relevant. You can still deactivate or force the option by clicking on the web icon while prompting.

**And also**

✉️ The account email can now be changed in the [settings](https://mammouth.ai/app/account/settings).

⏬ A shortcut button to scroll down to the end of the conversation was added.

🪛 A bug was fixed on Safari last released version that prevented AIs from reading documents containing French accents in the title. Additionally, we fixed an issue on some code imports that were inadequately restituted by the AI when uploaded as documents.

🧷 Embeddings are now available in the Mammouth API.


## November 5th 2025

**⭐ Recraft Vectorize (PNG to SVG) ⭐**

Recraft can now vectorize your PNG or JPEG images into .svg format. It is the only model that can do so.

**🐳 DeepSeek v3.1 Terminus** - we updated the DeepSeek v3.1 to its latest version

**🔉 Audio-to-text is now available** -- you can upload and analyze audio files with Gemini

**🔉 Video-to-text is now available** -- you can upload and analyze small video files (less than 20MB) with Gemini

**And also**

💭 Thinking mode is now less invasive with a smoother design. Also, the web search mode from GPT is now displayed.

🦊 The app is now available for Firefox users on Windows.

🪛 Fixed accidental prompt sending when Shift is released before Enter (when using Shift + Enter).

➗ A few LaTeX formula fix were deployed for a nicer display of math equations.

📋 Loading history chats in the sidebar now works on large screens too.

## October 8th 2025

**⭐ Claude Sonnet 4.5 ⭐**

It replaces Claude Sonnet 4. See the release note from Anthropic [here](https://www.anthropic.com/news/claude-sonnet-4-5)

**🧠 Memory of the conversation**

We've unleashed conversational memory. Your model now has access to the entire message history, no matter how long the conversation.

**🎨 Design of the AI answer**

The output formatting of the AI responses has been improved. The spaces between paragraphs and titles are now more adjusted. The quotes, the tags and the generated tables have a better color design.

**⛵ Bye bye Midjourney**

Last week, our Midjourney provider discontinued service. We haven’t found a suitable replacement, as Midjourney still doesn’t offer an official API.
Although it ranks 4th in our image-generation usage (behind Nano Banana, GPT Image, and FLUX) and 5th in performance benchmarks, it still holds a special place in our hearts. We might reproduce its four‑image grid experience with other models. We hope Midjourney eventually launches a developer-friendly API. Until then, we'll sail our separate ways.

**And also**

- **GPT Image** is now fully conversational (like Nano-Banana).
- **Bug fixing:** some models were occasionaly trying and failing to execute code while not requested during document analysis or graph analysis. It's fixed.
- **Mammouth API: Claude Sonnet 4.5**, Grok-4, Grok-4-fast, DeepSeek-3.1-Terminus and DeepSeek-3.2-exp are now supported.

## September 16th 2025

**⭐ New models ⭐**

- **Nano Banana** (_aka Gemini 2.5 Flash Image_): can edit images and handle conversations.
- **DeepSeek v3.1** (replace DeepSeek v3)

**⚡ Start a conversation with light models**

You can start a new conversation with any light model even if you've not reached your quota.

**🧷 API services for your automations**

- Buy additional credits in the [api settings](https://mammouth.ai/app/account/settings/api).
- You can also buy credits without having a subscription.
- GPT-5, GPT-5-mini, GPT-5-nano, Claude 4.1 Opus, Mistral 3.1, DeepSeek v3.1 are now supported.

**And also**

- **Improved handling of multiple documents** in a conversation: short documents were sometimes overshadowed by long ones and the AI missed them; that's no longer the case.
- **Document generation**: some models occasionally refused to generate a file (pdf, docx, xls); this is now fixed.
- The [pricing page](https://mammouth.ai/pricing) was updated to highlight the Team plan and provide up-to-date information about the growing Mammouth offering (API credits, Perplexity, Vocal mode, etc.).
- We updated our [Terms of Service](https://info.mammouth.ai/docs/terms-of-service/).
- **GPT-5** now comes with:
  - better text formatting
  - functional math equation rendering. 
  - the thinking process is now visible.

## August 25th 2025

**⭐ New model: Mistral Medium 3.1**

**📁 Long Context & Documents**

We've significantly improved the handling of long contexts (long input & documents): more context capacity, better content extraction, improved management of long code context, faster performance, fewer errors etc...

**🎨 UX Improvements**

- The code-copy button is now floating for easier access
- Copying and pasting emails or HTML content no longer adds unwanted line breaks
- Refined mobile navigation for a smoother experience
- More custom mammouths are now visible in the sidebar
- Max mammouth count increased from 12 to 16.

**🌐 Web Access for all AIs**

We've expanded web capabilities to Mistral, Claude, DeepSeek, Grok and Llama!

## August 8th 2025

**⭐ GPT-5**
- GPT 5 replaces GPT-4.1
- GPT-5 mini replaces GPT-4.1 mini
- GPT-5 Thinking (GPT-5 with enhanced systematic reasoning) replaces o3 & o4-mini

**🦣 Each custom mammouth now has his own default model**, and his own model display order, before pressing Enter

**✍️ Your prompt is saved as a draft** and persists when you switch conversations or refresh the page, until you send it.

## August 4th 2025

### ⭐ New Models

**New flagship models**
- o3
- Magistral

**New image models**
- Imagen 4.0 (by Gemini)
- Grok Images

**New light and fast unlimited models**
- Mistral Small 32B
- Llama 4 Scout
- GPT-4.1-mini
- Grok-3-mini
- Gemini 2.5 Flash Lite

### ↪️ Reprompting conversation
Every user message from a conversation can now be reprompted, not only the first one. It works as a fork of the conversation. 

### ✨ Multi-model conversation
Conversations are now specific to a brand and not a model, so you can switch from a text model, to an image model or a reasoning model in the same conversation

### And also
- When a quota is reached, the conversation continues with the unlimited model of the same brand (no more starting a new conversation after quota reached)
- Grok logo has been updated from xAI logo to Grok logo
- You can delete the previous message of a conversation and therefore come back to the n-2 message and so on.
- The 404 error page (and others as well) now displays a cute mammoth

## July 24th 2025

### 🌟 Grok 4

### 📂 Documents : faster, better, wider

• Scanned PDF and PDF with images are now analysed (with Mistral OCR to extract content)

• About 80 new extensions were added: more than [200 file extensions are now supported](https://info.mammouth.ai/docs/supported-file-extensions/). 

• Speed : Document analysis is now 3x faster

### 📱 Quick app install

• App can be installed from left panel menu in 1 click (from all browsers except Firefox & Safari)

### 🌍 New Languages

🇵🇱 Mamut mówi teraz po polsku

🇷🇴 Mamutul vorbește acum românește

🇵🇹 O mamute fala agora português

🇦🇩 El mamut parla ara català

## July 3rd 2025

### 🌟 Midjourney v7

### 🧷 Mammouth API 

• **All subscribers get access to free token with their subscription**: 2$/4$/10$ per months for Starter/Standard/Expert !

• **OpenAI compatible**: it can be used now in [n8n](https://public.mammouth.ai/How-to-use-Mammouth-in-n8n-226cf297c1ca80ab9f5dd999410884ee?pvs=74), Cline, etc.. with the OpenAI plugins

• 23 text models available

• [**See documentation**](https://info.mammouth.ai/docs/api-quick-start/)

### 🧮 Quota/Usage visualisation

• See your quotas at any time from your account settings

• The quota banner on the left panel can be dismissed

### 📂 Document & history

• While working with documents in conversation, you can know deactivate documents from past history or assistants to focus on the last document you uploaded or to stay under the 32MB limitation.

![File Management in Prompt](file_management_in_prompt.png)

• New file extension: .doc (even if it is an old MS Office extension 😉 )

### 👷 Server Errors & Failed Documents

**We fixed a big bunch of sporadic response errors from AI including:** Server errors on Claude with uploaded images, Errors on total document upload exceeding 32MB, Errors with protected with password documents, Errors with failing API endpoints, Deleted documents that were breaking the reprompted chats with the same doc, Failed document that were blocking the conversation..

### Other features

• Payment with Paypal is now accepted

• Signin with Google AND password on the same email is now working

• Reprompted conversations are now grouped together on the left panel (see gif)

![Accordions](Accordions_GIF.gif)


## June 6th 2025

### 🌟 Flux Kontext & DeepSeek R1
• **FLUX Kontext Pro** *-- replace FLUX Pro & Retexture*

• **DeepSeek R1 28.05** *-- update from DeepSeek R1*

### 🗃️ File generation

• **Generate CSV, DOCX, PDF..** with all LLMs

• **Generate graphs as images** with all LLMs

• [See example here](https://mammouth.ai/shared/7fe819ad-5b61-4111-8f80-ab0521bbe848)

### 📱 Mobile app revamped

• **🎙️Voice-to-text** was added to dictate your prompts

• **🎨 Smoother input** *no more overlaps between keyboard and model buttons on new chat page as the input move upwards*

• 🎨 a lot of minor UI issues (margin, borders, popups, overlaps, etc..) were fixed so the cumulated look will be more friendly

## May 23th 2025

### 🌟 Mistral 3 and Claude 4
• **Mistral Medium 3** *-- replace Mistral 24.11*

• **Claude Sonnet 4** *-- replace Claude 3.7*

### 🧠 Smart Conversational Image

• **Image models now understand** when you request a modification based on the previous message

• **You can see the final prompt** sent to the AI *behind a 🪄 icon*

### ⚙️ [Account settings](https://mammouth.ai/app/account/settings) -- new design of the page
-  You can now delete all your chats at once
-  You can now delete your account
-  New sorting of user emails in [Team settings](https://mammouth.ai/app/account/team) (by email domain then email name)

:::info And also..

⚡ **Smoother navigation between chats** *-- Progressive loading of content on page with skeleton*

🖋️ **Last Message edition update** *-- When you edit your last message, you can remove the attached document*

🔏 **Updated [privacy policy](../privacy-policy/)**

:::

## May 9th 2025

::: info Model Updates
🌟 **Perplexity** *-- we added the Perplexity Sonar Pro*

🌟 **Gemini 2.5 Flash**
:::

And also

⚡ **Multiprompting** *-- Simultaneous AI generation is now possible*

🧠 **Auto-naming of conversations**

🎨 **Input message preserves indentation**

## April 25th 2025
::: info Model Update
🌟 **GPT Images** *— replace DALL-E*
:::

Also, 

🔍 Textual search in conversation history
> Press CTRL+K or click the search icon

<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/textual_search_record_2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>

## April 17th 2025

::: info Model Updates
🌟 **Gemini 2.5 Pro** *— replace Gemini 2.0*

🌟 **Grok 3** *— replace Grok 2*

🌟 **GPT-4.1** *— replace GPT-4o*
:::

::: info New Photo Editing Tools
🖌️ **Background remover** *— upload your picture and the AI will remove the background*

🖌️ **Quality upscaler** *— the AI will increase the quality of your image*
:::

::: info Document Capacity Increased
📁 **Max Input Length: 4,000,000 chars** *— instead of 1,000,000*

📁 **Max files per conversation: 20** *— instead of 10*
:::

And also

📁 **More extensions supported** *.fortran .twig .urdf .hcl .tsv .geojson .ass .tf .ps1 .scss .ino .pyw .odt*

🧮 **Assistant files consume less quotas**: *Files from assistants won't consume quotas at every prompt*

**And also, about product quality:**

🦋 **Multitasking** *— When you switch tabs during generation, the streaming will pursue its process*

## April 7th 2025

::: info New Models
🌐🔭 **Perplexity Deep Research** 

🌟✈️ **Llama 4.0 400B Maverick** *— replace Llama 3.3 70B*
:::

🧮 **GPT-4o-mini for documents after quota**: *When you reach your documents quota, you can upload more documents with GPT-4o-mini*

**And also, about product quality:**

🦋 **Unprocessed image explained** *— AI now provides detailed infos on why your image couldn't be processed and how you can change this. Bugs are now butterflies.*

🦊 **Firefox is back:** *UX issues happening on Firefox are fixed*

🎨 **AI generated hyperlinks will open in a new tab** *— without interrupting the streaming ;)*

## April 1st 2025

::: info GPT & Gemini on Web
🌐 **GPT-4o & Gemini** are now routed to web search when it is relevant

🌐 **Projects with mammouths** *— enhance and replace the assistants*
:::

🐳 **DeepSeek V3-0324** *— replaces the January version*

💾 **Conversation memory:** expanded for better context

📍 **Pinned Conversations**: new messages pin the chat on top of the list.

🌙 **Auto Dark mode** *— when system default is dark*

🇪🇸 **El Mammouth habla español**

🇩🇪 **Das Mammouth spricht jetzt Deutsch**

## March 18th 2025

::: info MAJOR DESIGN REVAMP
🎨 **Modernized User Interface** *— Global UI/UX revamping*

📂 **Projects with mammouths** *— enhance and replace the assistants*
:::

### 🎨 **Modernized User Interface**

✨ **Model buttons** *— hope you'll 💖 them as much as we do*

🌙 **Dark mode** *— we changed all the dark mode colors*

🎨 **Sidebar color** *— now the chat stands out instead of the sidebar*

📝 **Text input:**
  > - Filter models on category (web, text, reasoning, image)
  > - Drag and drop documents
  > - Document upload revamped with colors per extensions
  > - Wave black icon for vocal chat

🗨️ **Chat page is revamped for large screens:**
  > - Header: we removed the *---messages---* line and revamped the buttons
  > - Scroll bar: we moved it to the far right of the page
  > - Width: increased to max 980px instead of 768px


### 📂 **Organize your Projects with the mammouths** 

- **Access your mammouths in the sidebar** *— one-click away from your favorite mammouths*

- **Move your conversations from one mammouth to another**

- **Edit files and instructions from the prompt page**

--> **Assistants are dead, long live to the mammouths 🦣🦣🦣 !**

**And also**

🖼️ **Midjourney buttons**: you can now click variation and upscale on all the past messages

🗃️ **Errors on documents**: The AI was (sometimes) ignoring your uploaded files, we fixed!

✴️ **Claude logo update** *— replacing the Anthropic logo*

## March 5th 2025

::: info Voice Mode and New Claude
🎙️ **Vocal Chat** *— Advanced voice mode from GPT*

⭐️ **Claude 3.7 Sonnet** *— replaces Claude 3.5*
:::

And also:

🗃️ **Upload files on your custom mammouths**

✨ **Yearly Subscriptions are available** - you can switch plan in your [*account settings*](https://mammouth.ai/app/account/settings/), then *manage subscription*, then *change subscription*

## February 17th 2025

::: info More context !
⭐ **Max Input Size: 1,000,000 characters** *— instead of 300,000*
:::

And also:

🗃️ **Max number of documents per chat: 10** *— instead of 3*

🦣 **Mammouth custom instruction max size: 8,000 chars** *-- instead of 2,500*

🇫🇷 **Le Mammouth parle enfin français!**

🇮🇹 **Il Mammouth parla ora italiano!**

## February 3rd 2025

::: info New Reasoning Models !
⭐ **DeepSeek R1**

⭐ **OpenAI o3-mini** *— replace o1 & o1-mini*
:::

And also:

🧮 **No more reasoning quota per day on o3 & R1** *-- for now, it's like text*

📣 **Mammouth tips** *-- [6 tips to know about Mammouth](../six-useful-tips-about-mammouth/)*

## January 28th 2025

::: info New Image Generator
⭐ **Recraft V3**

⭐ **Recraft-svg** *— first svg generator*

> Why did we add Recraft ? [Check out here](https://artificialanalysis.ai/text-to-image/arena?tab=Leaderboard)
:::

And also:

🖼️ **Stable Diffusion now speaks all languages** 

🏗️ **Unknown errors management** *-- more info about failed prompt*

🧮 **Quota details** *-- see when your image & document monthly quota will reset*
<br> *Note: quota count is visible only when it is above 50%*

∑ **Nicer design for mathematic equations** *-- in LaTex*

## January 14th 2025

::: info New Model !
🐋 **DeepSeek V3**
:::

And also:

🛣  **Routing by modality** *— Mammouth auto-determines whether to prompt text, image or web*

🎨 **Revamping of the new conversation page :**
 - on small screens, models are hidden to avoid overcrowding
 - drag and drop models to sort them and choose your default one


<div style="max-width: 90%; margin: 0 auto;">
<video controls autoplay muted loop style="width: 100%; display: block;">
  <source src="/docs/release-notes/demo-drag-and-drop.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>


## January 7th 2025

::: info Mammouth for Teams
⭐ **Admin interface** *— invite team members*

⭐ **Centralized invoicing**

:::

And also:

🖋️ **Mammouth blog** *— this very website ;)*

🏗️ **Direct access to account settings** *— no more email Stripe link*

## December 24th 2024

::: info Model Updates
⭐ **o1** *— no more preview*

⭐ **Grok 2** *— no more beta*

:::

And also:

🎨 **New design for conversation page**

🏗️ **Adding copy output button**

## December 17th 2024

::: info Model Updates
⭐ **Llama 3.3 70b** *— run by Groq*

⭐ **Gemini 2.0 Flash** *— experimental version*

:::

And also:

🦣 **Create more custom mammouths** *— up to 8 instead of 4*

🪲 **Fixed bugs happening when:**
- Trying to render a mathematical Matrix in LaTex
- o1 was used with a custom mammouth
- Documents in non-roman alphabets, like Persian, were uploaded


## December 10th 2024

::: info New feature
⭐
**Share your conversation with a link**

:::

And also:

🏗️ **Copy pasting output preserves relevant formatting only**

🎨 **Sidebar can be folded**

🎨 **New account menu with:**

- Access to your custom mammouths
- A direct link to this very release notes
- A link to Image parameters & Custom Mammouths tutorial

## December 4th 2024

::: info Image Models

🪄  **Create an image from an image** — *with FLUX Redux*

🪄  **Retexture your image** — *with FLUX Depth*

> *[How to use image to image](/docs/how-to-use-image-to-image/)*
> 
:::

And also:

📷 **Upload phone camera photos and bigger images**

⚡ **App runs much faster when you switch conversations**

🎨 **Design of upload & download improved for images**

## November 27th 2024

::: info New Model !
⭐
 **Grok 2**  *- new brand*

:::

## November 20th 2024

::: info Model Updates
⭐
**Mistral Large 2** *- November version update*

⭐ **GPT-o1 is now streaming**

:::

And also:

✏️ **Edit your last prompt**

⏹️ **Stop message generation**

🎨 **Arrow added in the input**

📁 **.srt files are supported**

## November 15th 2024

::: info New context size
⭐
**Max input length : 300 000 characters** *- instead of 10k*

:::

And also:

⚖️ A quota added for long input messages 
> See [(i) Details](https://mammouth.ai/pricing)

🏗️ Scroll down all your conversation history in sidebar

🏗️ When opening a chat, focus is now on the last message

🏗️ Auto-scroll up the chat after new prompt

🏗️ Paste file from clipboard

🎨 New native font

## October 24th 2024

::: info Web Model
🌐 **Web Search** — *new category*

⭐ **OpenPerplex** — *new brand*

:::

And also:

⭐ **Claude 3.5 Sonnet new** — *model update*

⭐ **Stable Diffusion 3.5 Large** — *model update*

⭐ **GPT-o1 is now conversational**

🏗️ **Paste images from clipboard**

## October 19th 2024

🎨 **Output Formatting**

- display tables *— in markdown*
- titles : space & size formatting
- more space between paragraphs

**∑  Display Mathematics formula** — *in LaTex*

## October 10th 2024

::: info Files

📂 **Xlsx, Xls, CSV** — *new extensions available for file upload*

📂 **Pptx, Ppt** — *new extensions available for file upload*

:::

🔗 **URL in prompt** : LLMs can screen a web page when provided with a url
