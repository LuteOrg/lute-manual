# Overview

{{#include note.md}}

Lute doesn’t have built-in flashcards for various reasons[^1], so it provides a way to export terms to [Anki](https://apps.ankiweb.net/), a popular and free flashcard program.

In summary:

1. You install Anki desktop and the AnkiConnect add-on (see LINK HERE)
2. You define how Lute should export terms
3. You export selected terms from the term listing or while reading.

Anki exports will only work on a machine that has Anki desktop and AnkiConnect installed. It doesn’t work from a mobile device.

**Warning: Anki exports might be hard to understand at first. :-)**

Anki exports are tricky to handle it a general way:

- Usually, language data is fairly unstructured.
- Many users will have different needs.
- Different kinds of terms will require different kinds of Anki cards (for example, cards to test gender, verb tenses, etc.)

Unfortunately, I could not find a simple way to meet the general requirement of exporting data to Anki.  I've done the best I can to meet my own personal needs, while keeping the code general and the user experience reasonable.  I'll do my best to adapt the code to user feedback, but some things might not be possible.  **I personally will not be able to support many questions on setting up your Anki exports,** but will try to provide many examples here that should provide guidance.

**I also cannot offer any real support or guidance regarding Anki,** simply because I don't have the time.  See the [Anki manual](ttps://docs.ankiweb.net), or check out the pile of videos on YouTube, etc.

[^1]: these reasons are given in the [FAQ](https://luteorg.github.io/lute-faqs/why-no-flashcards.html) -- basically, it's a ton of work!
