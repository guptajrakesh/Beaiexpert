# Episode 1 — What is RAG, and why does it matter?

Narration script. Read each line starting at its timestamp; the on-screen captions match this text, so you can record a voiceover over the finished video.

**[0:00]** Welcome to BeAIExpert. In this series, we'll build a RAG application from scratch.  
**[0:07]** Let's start with a problem. Imagine asking an AI assistant a question about your own company.  
**[0:13]** It answers instantly, and it sounds confident. But the answer is wrong.  
**[0:19]** Why? The model was never trained on your company's private documents.  
**[0:25]** And its knowledge is frozen at a training cutoff date, so it can't know anything newer.  
**[0:30]** When a model lacks information, it doesn't stay silent. It produces a plausible guess.  
**[0:35]** One idea is to paste all your documents into every prompt.  
**[0:41]** That works for a few pages. But a real company has thousands.  
**[0:46]** They won't fit in the model's context window. And even when they do...  
**[0:51]** ...every question becomes slow and expensive, and the important detail gets lost in the noise.  
**[0:59]** Here's a better way to think about it.  
**[1:03]** A plain language model is like a student taking a closed-book exam: it answers from memory.  
**[1:09]** RAG turns it into an open-book exam. First look up the relevant pages, then answer using them.  
**[1:15]** Retrieval-Augmented Generation: retrieve the right information, then generate the answer.  
**[1:21]** The name describes the three steps.  
**[1:24]** Retrieval: search your documents for the passages that matter for this question.  
**[1:29]** Augmented: add those passages to the prompt.  
**[1:32]** Generation: the language model writes an answer grounded in them.  
**[1:37]** A RAG system works in two phases. The first is indexing, which you do once, ahead of time.  
**[1:43]** Start with your documents: PDFs, web pages, policies, notes.  
**[1:48]** Split them into smaller passages, called chunks, so we can find precise pieces later.  
**[1:54]** Turn each chunk into an embedding: a list of numbers that captures its meaning.  
**[2:01]** Store those embeddings in an index, ready to be searched.  
**[2:09]** Why embeddings? Picture every chunk as a point on a map of meaning.  
**[2:15]** Chunks about similar topics end up close together.  
**[2:20]** When a question arrives, we turn it into a point on the same map...  
**[2:25]** ...and the closest chunks are the most relevant, even if they use completely different words.  
**[2:31]** That's semantic search, and it's the heart of retrieval.  
**[2:35]** Phase two happens every time someone asks a question.  
**[2:40]** We embed the question with the same model, and find the closest chunks in the index.  
**[2:46]** Then we build a prompt: clear instructions, the retrieved passages, and the question.  
**[2:54]** Notice the instructions: use only this context, and say "I don't know" if the answer isn't there.  
**[3:01]** Finally, the language model reads it all and writes the answer.  
**[3:09]** Let's ask the same question again, this time with RAG.  
**[3:14]** The answer is correct, because it comes from the actual policy document.  
**[3:20]** And it cites its sources, so anyone can check where the answer came from.  
**[3:25]** That's the difference between a confident guess and a grounded answer.  
**[3:29]** So when should you use RAG?  
**[3:32]** When the answers live in private or internal documents...  
**[3:37]** ...when information changes often, or there's far too much to fit in a prompt...  
**[3:42]** ...and whenever answers need sources people can verify.  
**[3:45]** That's why RAG powers so many real assistants: customer support, internal knowledge bases, and document search.  
**[3:53]** In this series, we'll build a complete RAG application step by step, in Python.  
**[3:58]** Next, we'll load and chunk documents, then create embeddings and semantic search.  
**[4:04]** Then we'll retrieve the right passages, and generate grounded answers with citations...  
**[4:10]** ...and finally measure and improve quality, like a real production system.  
**[4:16]** Want to read ahead? The full guide is free at beaiexpert.com.  
**[4:21]** See you in episode two.  

Total length: 4:26
