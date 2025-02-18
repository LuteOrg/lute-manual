# Criteria


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
