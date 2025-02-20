# Examples

A few examples that might help get you started, and some notes.  These are all my (current) German exports.

I'm still refining my approach (as of Feb 2025), so nothing's yet solid or perfect!

Notes about my German term data management:

* I tag words as "der", "die", or "das" if they're singular nouns
* I tag plural forms as "plural" if they're the plural form, and the singular form is the term parent
* I have other tags for verb conjugations, but I'm still sorting that out :-P

For Anki, I created a "Basic_vocab" note type with a few different cards.  You can
[download a copy of that](../../assets/usage/ankiexport/Lute_Basic_vocab_note_type.apkg)
and open it in Anki to see if it's useful for you.

## Basic export

Criteria: `language:"German"`

Mapping:

```
Word = { term }
Article = { tags:["der", "die", "das"] }
Sentence = { sentence }
Picture = { image }
Definition = { translation }
Lute_TermID = { id }
```

With the above, if a word has the "der/die/das" tag, that's put in the "Article" field of the Anki note; otherwise, the Article is left blank.

## Pluralization

Criteria: `language:"German" and tags:["plural", "plural and sing"] and parents.count > 0`

Mapping:

```
Word = { parents }
Article = { tags:["der", "die", "das"] }
Plural = { term }
Sentence = { sentence }
Picture = { image }
Definition = { translation }
Lute_TermID = { id }
```

I put German plurals as terms, with the singular form as the parent.  For example, the word "Bücher" has "Buch" as the parent.

The above mapping:

* sets the "Word" field to "Buch", the parent of "Bücher"
* sets the "Article" field to "das".  The field mapping `{ tags:["der", "die", "das"] }` finds any tags in the term or its parent that matches "der/die/das".  "Buch" is tagged as "das", so that's put in the "Article" field.
* sets the "Plural" field to "Bucher"