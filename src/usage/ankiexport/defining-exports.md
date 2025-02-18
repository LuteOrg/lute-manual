# Defining exports

{{#include note.md}}

Once Anki and AnkiConnect are setup, and the connection verified, you can create export specifications from Settings > Anki exports:

<img width="25%" src="../../assets/usage/ankiexport/defining_exports_1_menu.png">

Then click the "Create new export specification" at the bottom of the listing.

<img width="75%" src="../../assets/usage/ankiexport/defining_exports_2_new_form.png" style="margin-bottom: 10px">


| Field | Notes |
| --- | --- |
| Export name | Whatever you want to call this export |
| Deck Name | The target deck where new notes will be added.  You need to create the deck first. |
| Note Type | The Anki "note type" that terms will be exported to.  The note type must already exist in Anki.  You can use Anki's built-in note types or create your own. |
| Field Mapping | How to map data from Lute to the Anki note.  See below for more details. |
| Criteria | (Optional) Criteria that a Lute term must satisfy for it to be exported. |


### Field mappings

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
| `{ sentence }` | If exporting the term from the reading screen, this is the sentence that the term was in.  If exporting from the term listing, this is the latest reference associated with the term (as shown in the Sentences tab on the term form). | Ich habe die Bücher. |

* The values in the curly braces (e.g., `id`, `term`, etc`) are fixed, you can't make up your own mappings.
* You can add extra text in the mapping if you want, for example, you could export "___ { term }" to get "___ Buch".

#### Filtered tags (e.g. `{ tags: ["der", "die", "das"] }`)

Filtering the tags can be useful if your terms have many tags.  For example, in my German terms, the term "Baum" is tagged with "der" (because it's masculine), and "Pflanze" (because it's a type of plant).  With the field mapping `{ tags: ["der", "die", "das"] }` Lute will only output "der", and not include "Pflanze", which is useful for creating an Anki card to test Genders.

**Important notes**

- In Anki, **the first field of your note must not be blank, and must be unique.**  If you define multiple exports to the same deck with the same first field value, they will be rejected.
- If you change the name of your Anki decks or field names, you'll need to update your export definitions in Lute.  Exports will fail with descriptive messages.

### Criteria

Sometimes, notes should only be created for particular terms.  For example, you might only want to create a note to test a German term's noun gender if a term is tagged with "der", "die", or "das".  If criteria are set, only terms meeting the criteria are exported with the given export specification.

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

### Active?

If true, this mapping will be used; if false, it will be skipped.

## Suggestions

Exports can take some time and thought to define!  Some suggestions from my experience:

* when you're first testing exports, perhaps create a deck like "testing_exports", and use that as the destination deck in your exports.  You can delete the cards in this test deck as go, until you have the mappings you want.
* you might want to create separate "Lute decks" for your exports, to keep Lute export data separate from your other data.
