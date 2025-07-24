# Release notes - Mammouth AI


## July 24th 2025

### 🌟 Grok 4

### 📂 Documents : faster, better, wider

• Scanned PDF and PDF with images are now analysed (with Mistral OCR to extract content)

• About 80 new extensions were added: more than [200 file extensions are now supported](https://info.mammouth.ai/docs/supported-file-extensions/). 

• Speed : Document analysis is now 5x faster

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

• **OpenAI compatible**: it can be used now in [n8n](https://mammouth.notion.site/How-to-use-Mammouth-in-n8n-226cf297c1ca80ab9f5dd999410884ee?pvs=74), Cline, etc.. with the OpenAI plugins

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