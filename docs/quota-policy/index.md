# Quota System & Usage Limitations

## How do quotas work?

Usage limitations on Mammouth are defined **per session**. Quotas are fully renewed after 3 hours.

Different subscription plans (Starter, Standard, and Expert) have different usage allocations.

---

## What consumes quotas?

Your consumption within a session depends on several factors:

| Factor | Description |
| --- | --- |
| **Message length** | The longer your messages, the more they consume. The length of responses also counts. |
| **Document size** | Files and images added to the conversation impact your consumption |
| **Conversation length** | The longer a conversation gets, the more costly each exchange becomes (accumulated context is sent with each message) |
| **Tool usage** | Tools like web search or document generation consume additional quota |
| **Model chosen** | More powerful models consume more quota |
| **Mammouth instructions** | Mammouth instructions are included in each request and impact consumption |

---

## The model threshold principle

Mammouth is designed so that **you are not interrupted in your work**. When you reach a model's quota, Mammouth automatically switches to a lighter model for the rest of your exchanges.

**Concrete example:**

> You use **Claude Opus** and reach the threshold → **Claude Sonnet** takes over <br>
> You continue and reach the **Claude Sonnet** threshold → **Claude Haiku** takes over
> 

This way, you can always continue working, even during heavy use.

---

## Choosing the right plan

Mammouth offers several plans adapted to different usage levels:

| Plan | Quota | For whom? |
| --- | --- | --- |
| 🌱 **Starter** | Reference | Daily consumer usage — 80% of individual users prefer this plan |
| ⚡ **Standard** | 3× the Starter | Intensive users who want more flexibility without worrying about session limits — 50% of companies prefer this plan |
| 🚀 **Expert** | 10× the Starter | Professionals and power users with significant and regular needs |

> 💡 The quantity/price ratio improves significantly with higher plans: the Expert plan offers 10 times more quota for only 6 times the Starter price.
> 

---

## Document-related limitations

### Input size and volume
- Maximum document content per request: 4,000,000 characters (combined across all documents being ingested)

### Content extraction
- In standard mode, Mammouth retrieves the most relevant chunks from your files (up to roughly 30,000-60,000 characters, depending on the request)
- For very large documents, Mammouth automatically switches to **agentic mode**: instead of a fixed-size extract, the model gets tools to browse and search the entire document directly, so no relevant content is missed. The size threshold that triggers this depends on the model you're using:
  - ~30,000 characters for premium models
  - ~150,000 characters for standard models
  - ~1,000,000 characters for lightweight models

### Supported files
- A wide range of file formats is supported (documents, spreadsheets, presentations, code, images, audio, video, and more)  
[See the detail list here](/docs/supported-file-extensions/).

### File limits per conversations
- Maximum 20 files
- Maximum total size: 100 MB (all files combined)  
- Maximum size per PDF: 100 MB
- Maximum size per image: 30 MB
- Maximum size per other non-PDF file (documents, video, audio): 20 MB

### Special cases
- PDFs containing only images (e.g., scanned PDFs, requiring OCR):
  - limited to 50 pages
  - limited to 20MB

> 💡 For large files, compress or split them before uploading. For PDFs above 100MB, upload the `docx` or `txt` file instead.

---

## Tips to optimize your consumption

### 🎯 Be precise and concise

Formulate clear and detailed instructions from the first message. Avoid vague requests that require back-and-forth clarification — each additional message consumes quotas.

### 💾 Use custom Mammouths for persistent context

If you need a document or instruction to be used across multiple conversations or throughout a long conversation, save it in a **custom Mammouth**. This avoids sending the same information repeatedly.

👉 [Learn more about custom Mammouths](https://info.mammouth.ai/docs/mammouth-assistant-tutorial/)

### ✏️ Review before sending

Take a moment to check the clarity and completeness of your message before sending it. A well-formulated prompt from the start reduces the number of messages needed and preserves your quota.


> 💡 If you regularly reach your limits, consider exploring Mammouth's higher plans for extended quotas.