# The stats calculation

In your Book listing, Lute shows the word count for each book, and a small chart of the statuses for five pages of the book text, showing how tough the next few pages will be to work through.

For example, after reading the first page of the Tutorial and marking various terms as statuses 1 through 5, the listing looks like this (the first row is the Tutorial, the second is the Tutorial follow-up):

<img width="70%" alt="image" src="../../assets/usage/books/stats_01.png">

This shows that in the next five pages, about 70% of the words are brand new, 15% are well-known or ignored, etc.  This might let you know how much effort you have ahead of you!

## Updating the stats

Note that in the above, the stats on the second row -- the Tutorial follow-up -- are still shown as 100% unknown.  Stats for a book aren't calculated until you open it for reading, because the calculation can be quite slow; however, you can refresh the stats for all active books by clicking the small circular arrows in the header:

<img width="70%" alt="image" src="../../assets/usage/books/stats_02.png">

## Sorting

Clicking on the "sort" arrows in the Statuses column sort the rows by the unknown percentage only, so you can roughly work through certain books first, if you'd like.

## Changing the sample size.

Lute lets you change the sample size for the book stats calculation on the Settings page.  Note that you have to open a book to force its stats to be recalculated.

## Note for for character-based languages

Suppose you're studying Chinese, a character-based language, and are reading the text "這是東西".  If you you define "東西" (the last two characters of the text) as a Term, Lute will say that you now know 33% of the text:

* "這" is unknown
* "是" is unknown
* "東西" is considered "known", regardless of its status (1-5 etc)

## Why Lute only calculates stats using a sample of the text.

Your question: Can't Lute calculate the percent using the whole text?  Answer: Yes, but it's too slow for long texts.

Since multi-word Terms can overlap or hide other terms, Lute needs to work through the full display of each text.  For longer novels (e.g. 200K+ words), the full calculation is too slow to be usable.  I've considered various simplifications to the calculation, such as ignoring multi-word Terms.  This makes the checks faster, but wildly inaccurate in some cases.

As a compromise, I figured that a sample of pages would be sufficient.  In real life, when considering a book, I just check a few pages to see if it's way above my level, I don't need to flip through every page.  That's the approach that Lute takes, and it seems sensible.

In future, I do hope to make further improvements on the stats calculation.  As of September 2024, it seems like using a library like `ahocorapy` to create full-text indexes should be possible.