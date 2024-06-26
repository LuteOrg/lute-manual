# Linking parent-child statuses

> Feature introduced in Lute 3.1.0.

With "linked parent-child statuses", so that you can update whole families of terms at once.

For example, if you're studying Spanish, you have the verb "comer" and all of its conjugations: como, comes, come, ... (comí, comías, comíamos, ... (comiera, comieras, comiéramos ... etc!!)).  At a certain point in your learning, these all merge into a single unit in your mind, perhaps with one or two exceptions, so you can link statuses to simplify updates and help organize your knowledge.

## Linking statuses

The Term form has a "Link to parent" checkbox.  It is disabled for Terms that have zero or multiple parents:

<img width="70%" alt="image" src="../../assets/usage/terms/link_pc_status_01.png">

If you add a single parent to a Term, the "Link to parent" checkbox is enabled and checked by default.  If the parent exists and has a status, the child inherits the status of its parent:

<img width="70%" alt="image" src="../../assets/usage/terms/link_pc_status_02.png">

Note: the parent term does _not_ have a "link children" checkbox, the linking is all handled by the children.

## Updating the status while reading

Once the Term with linked status is saved, updating the child status propagates to the parent, and vice-versa.  For example, during reading, if I hit the "4" hotkey to update the status of "como", the parent "comer" is also updated:

<img width="225" alt="image" src="../../assets/usage/terms/link_pc_status_03.png">

If other terms also had their statuses linked to that same parent, they would get updated as well.  Everything is tracked together, as a single unit.

## Don't link difficult forms

You don't have to link all children to their parent, of course.  Some verb forms may be more difficult than others.  For example, in Spanish, the present tense is usually learned quite early -- "yo como" (I eat) is the present tense of "comer" (to eat) -- but different tenses might be more difficult -- "comiera" is a more advanced form of "comer" (it's the subjunctive).  So you might choose to _not_ link the "comiera" term's status to its parent:

<img width="70%" alt="image" src="../../assets/usage/terms/link_pc_status_04.png">

Then updates to the parent term would only propagate to child terms that have linked statuses:

<img width="380" alt="image" src="../../assets/usage/terms/link_pc_status_05.png">

## Status can only be linked for single-parent Terms

If you add more than one parent, the "link status" checkbox is unchecked and deactivated, because Lute can't tell which parent this term should follow:

<img width="70%" alt="image" src="../../assets/usage/terms/link_pc_status_06.png">

## Bulk linking of parents and children

If you've been using Lute prior to v3.1.0, you might have a bunch of terms and parents, and may want to do a bulk update.  Lute currently doesn't have a "web only" form to bulk update your existing data, but you can achieve the same effect with the CSV export and import as a workaround.

First, from the home screen menu, choose "Terms" to see a listing of terms.  Set the filters as you wish, such as a Language filter, and then click "Export CSV":

<img width="100%" alt="image" src="../../assets/usage/terms/link_pc_status_07.png">


Edit that CSV file (for example using Google sheets), putting "y" the "link_status" column for the terms that you want to link to their parents:

<img width="100%" alt="image" src="../../assets/usage/terms/link_pc_status_08.png">

Save that CSV file, and import it into Lute using "Import Terms" from the menu.  Select "Update existing terms" so that your terms will be updated:

<img width="70%" alt="image" src="../../assets/usage/terms/link_pc_status_09.png">

You may have to adjust the statuses again as you read, but when you do the entire "term family" will be updated.



<!--
Sample story for demo and images.
=================================

Link statuses

A ella le gusta comer.

Yo como una manzana.

Ayer, le dije a ella que comiera la manzana.
-->
