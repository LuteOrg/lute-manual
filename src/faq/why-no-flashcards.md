# Why doesn't Lute have flashcards, or an SRS?

I do feel that SRS[^1] plays an important role in language learning (if you like using SRS!).

Lute currently doesn't have a "testing" mode or SRS for a few reasons:

* The core feature of Lute is reading, so I have been focused on making reading and parsing the most pleasant experience.  To me, testing is sort of outside of this.
* Adding a satisfying testing experience is tricky, and could explode into a ton of work.  Anything else feels half-baked.  Here are some things I'd want to see in testing:
  * Efficiently testing terms and parent terms (there's no need to test each instance of every word, in my opinion) -- how to manage this best?
  * Testing for recall by image
  * Selecting terms to test
  * Testing by "category"
  * ... etc

I would rather keep Lute focused on reading, and delegate testing to something that is dedicated to that -- like Anki.  There is an issue for [Anki export](https://github.com/luteorg/lute-v3/issues/3).  Then there would need to be a feedback loop for statuses to get updated, etc.

Lute is open-sourced software, though, so if someone feels a burning need to implement an SRS in Lute, they are welcome to do it.  For it to be included in the main Lute package, the code would need to pass the various quality checks, and would also need to have sufficient testing and documentation (user docs and technical docs).  It could also be written as a standalone app that interfaces with the Lute database, or perhaps via an API.

[^1]: Spaced Repetition Software