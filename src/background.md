# Background

Lute -- Learning Using Texts -- is software for learning foreign languages by reading.

In summary, you import foreign language texts into Lute, and read through them, creating saved definitions and associations for words as you read.  As you read more, you continue to build your personal dictionary.

I am currently using Lute to read texts in Spanish, and it works great.  It should work very well for other left-to-right languages like French, German, English, Italian, Classical Chinese, etc.  Lute can also handle right-to-left languages like Persion, and with some extra tools installed, Japanese.

Lute has a few features which I feel are critical:

* **Parent terms.**  For example, in Spanish, "hablo" is a conjugation of "hablar".  With Lute, you can specify these links, and see how different forms are used in the texts you read.
* **Images.**  Lute lets you add an image to words.  It's much more fun and intuitive to attach a picture of a cat to a Spanish term "gato".

In addition, the spirit of Lute is full open-source software:

* **Installed locally.**  I am leery of sending an data to a company that may change their direction or disappear, or change their pricing.
* **Data control.**  Lute runs on your machine.  You own the data, you can do what you want with it.  Ultimately, I hope for Lute to interoperate seamlessly with other tools, rather than become yet another closed garden.
* **Free, no limits.**  I've benefitted hugely from free tools such as Anki -- my hope is that Lute, or a successor, makes an impact.

## Lute alternatives

There are other projects out that Lute took inspiration from:

* [LingQ](https://www.lingq.com/) - a commercial product
* [LWT](https://github.com/HugoFara/lwt)
* [Readlang](https://readlang.com/)

> Lute v1 and v2 started in late 2022 as a rewrite of [LWT (Learning With Texts)](https://github.com/HugoFara/lwt), overhauling the architecture, data structure, and algorithms, and adding critical features.  Lute v3 (this project) is a full Python rewrite to address installation and maintenance/sustainability issues.  Lute would never exist without LWT and Hugo's LWT fork, so **a big thanks to those projects.**

## Should I use Lute, LWT, Hugo's fork, or something else?

Sensible question, so here's my take:

If you _just want to use something_, I'd recommend [Lingq](https://www.lingq.com/en/)!  It's a paid solution, they deal with the software and the headaches, you just pay for it and use it.  They have pre-selected texts and a wide customer base.  With any other software, you're going to pay in _time_.  I've tried to simplify and streamline Lute to reduce that time investment, but it will always be there.

If you want to run your own thing on your machine, the options I can see are:

* The [original LWT project](https://sourceforge.net/projects/learning-with-texts/) is, as far as I can tell, still *massively popular.*  Even if the code is old, and it might have bugs or be slow, it has the advantage of being tried-and-tested, and you might find people who can help you with issues.
* [FLTR](https://sourceforge.net/projects/foreign-language-text-reader/), a Java project by the same author of LWT.
* [Hugo Fara's LWT fork](https://github.com/HugoFara/lwt) has recently been retired, and the developer recommends using Lute.

## So why even consider Lute?

At present (late 2023), the main features differentiating Lute v3 are parent terms and images.  The installation has been drastically simplified -- with the right tools (Python or Docker), you can be up and running in a few minutes.

Secondary reasons: Lute feels faster and lighter than LWT, and it has just enough features to be useful.  The UI's a bit leaner, if that matters to you.

More geeky reasons, yet still important (to me): Lute is a full redesign of the original LWT idea using modern code and architecture.  It accomplishes almost the same feature set as LWT at a fraction of the code size and complexity.  It also has a full set of automated tests for project stability.  This might not mean much to regular peeps who just want to learn languages, but from the perspective of project maintainability and growth, it's paramount.

(Also, if you are into software, like the idea of LWT, and want to contribute to an open-source project, I believe that Lute is a compelling place to start.  It uses Python and Flask, which are good things to know, and has good test coverage so you can hack at things without fear.)

## Why might you NOT use Lute?

As good as Lute is, it might not be for you.  Below are some things that may lead you to decide to postpone using Lute for now:

| Item | Notes |
| --- | --- |
| Single-word audio | Lute has an audio player for books, but you can't click a single word to hear its audio. | 
| Support "non-consecutive multiword terms" | Some languages, like German and Dutch, have terms that that split apart.  For example, in German, the verb "einladen" can be split into "laden ... ein": "Ich lade dich zu meiner Party ein."  I don't think any tool currently solves this well.  See the notes at on [this GitHub issue](https://github.com/luteorg/lute-v3/issues/9). |
| Flashcards/testing | Lute is designed for reading only, there is no testing.  There are Anki exports though! |
| Automated or bulk translation | Lute isn't designed to automatically create bidirectional readers, or to auto-create translations.  You can use Lute's Term CSV import feature, along with something like Google Sheets, to imitate that. |

There are other smaller features that Lute doesn't have yet, but the above are the biggest ones that may be dealbreakers for you at the moment.
