# Defining exports

{{#include note.md}}

Once Anki and AnkiConnect are setup, and the connection verified, you can create export specifications from Settings > Anki exports, "create new".

An export needs a few pieces of information:

- the target deck where new notes will be added
- the Anki "note type" that terms will be exported to
- the field mappings, that is, how Lute should export terms to Anki
- if needed, you can also specify criteria that a term must meet for it to be exported

## Deck name

The deck name must already exist in your Anki collection.

## Note type

The note type must already be defined in your Anki collection.

## Field mappings

Once you have selected an export Note type, you can then specify how data should be mapped to each field in the given note.  Allowable options are given in the value drop-down menu.

| Mapping | Description | Example |
| --- | --- | --- |
| `{ id }` | The term ID in Lute (may be useful for creating links back to Lute from your Anki card) | 42 |
| `{ term }` | The term text | Bücher |
| `{ language }` | The term language | German |
| `{ parents }` | All term parents | Buch |
| `{ tags }` | All tags | plural |
| `{ translation }` | the translation of the parent term, if any, and the term itself | Book |
| `{ tags:["val1", "val2"] }` | A filtered list of tags matching the given values | |
| `{ image }` | The term image, if available | |
| `{ sentence }` | The latest sentence associated with the term. This may not be the sentence shown on the reading page, if you are reviewing old material. | Ich habe die Bücher. |

* The values in the curly braces (e.g., `id`, `term`, etc`) are fixed, you can't make up your own mappings.
* You can add extra text in the mapping if you want, for example, you could export "___ { term }" to get "___ Buch".

### Filtered tags (e.g. `{ tags: ["der", "die", "das"] }`)

Filtering the tags can be useful if your terms have many tags.  For example, in my German terms, the term "Baum" is tagged with "der" (because it's masculine), and "Pflanze" (because it's a type of plant).  With the field mapping `{ tags: ["der", "die", "das"] }` Lute will only output "der", and not include "Pflanze", which is useful for creating an Anki card to test Genders.


**Important notes**

- In Anki, **the first field of your note must not be blank, and must be unique.**  If you define multiple exports to the same deck with the same first field value, they will be rejected.
- If you change the name of your Anki decks or field names, you'll need to update your export definitions in Lute.  Exports will fail with descriptive messages.  You can validate your SRS export from the export listing.

## Criteria

Sometimes, notes should only be created for particular terms.  E.g., you might only want to create a note to test a German term's noun gender if a term is tagged with "der", "die", or "das".  That's what the criteria field is for.  If criteria are set, only terms meeting the criteria are exported to that particular note type.

If you leave the criteria blank, every term that you ask to export will be exported using that mapping.

Available criteria (replace the values in the angle brackets with your values):

| Criteria | Notes |
| --- | --- |
| `language:"<language name>"` | |
| `tags:"<val>"` | True if the term has this particular tag |
| `tags:["<val1>", "<val2>" ...]` | True if the term has any of the given tags |
| `parents.tags:"<val>"` | True if any parent of the term has this particular tag |
| `parents.tags:["<val1>", "<val2>" ...]` | True if any parent of the term has any of the given tags |
| `all.tags:"<val>"` | True if the term or any parent has this particular tag |
| `all.tags:["<val1>", "<val2>" ...]` | True if the term or any parent has any of the given tags |
| `has:image` | |
| `parents.count OPERATOR INT` | `OPERATOR` is one of `< <= > >= != = == <>` | |
| `status OPERATOR INT` | |

These can be combined using `and`, `or`, and `(` `)`.  For example:

* `language:"Spanish" and parents.count>=1`
* `tags:"plural"`
* `language:"German" and tags:["der", "die", "das"]`
* `parents.count=1 and tags:["fem", "other"] and has:image and status<=3`

## Active?

If true, this mapping will be used; if false, it will be skipped.