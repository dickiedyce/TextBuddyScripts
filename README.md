# TextBuddy.app Custom Scripts

This repository is a collection of custom scripts for [TextBuddy](https://retina.studio/textbuddy/), a Mac app by Tyler Hall.

To use the scripts, open TextBuddy and choose **Scripts->Open Scripts Folder** from the menu. Save any script from this repository to that folder (ensuring that the extension is `.js`).

Scripts located in that folder, it can be run in TextBuddy using `⌘R`, or generally on the clipboard using `⌘T`.

## Script Descriptions

### Number 00 Tags.js

Looks through the text for `[xxx 00]` tags, and then numbers them from `01`. It is case sensitive, so `[abc 00]` is not the same as `[ABC 00]`.

Before:

```text
[ABC 00] some text here
[abc 00] some more text here
[def 00] some different text here
some more text here [ABC 00]
some [def 00] different text here
[ABC 00] some more text here
[abc 00] some more text here
```

After:

```text
[ABC 01] some text here
[abc 01] some more text here
[def 01] some different text here
some more text here [ABC 02]
some [def 02] different text here
[ABC 03] some more text here
[abc 02] some more text here
```

### Keep Only Email Names.js

Convert email addresses copied from a GMail to a list of participants. It also fixes the reverse ordering of names in quotes. Compare with the built-in `Keep Only Email Addresses`.

Before:

```text
Fred Bloggs <fred.bloggs@example.com>, Freda Bloggs <freda.bloggs@example.com>, "Soap, Josephine" <jo.soap@example.com>, Joe Soap <joe.soap@example.com>
```

After:

```text
Fred Bloggs
Freda Bloggs
Josephine Soap
Joe Soap
```

### Comma-Delimited List to Lines.js

Convert comma separated lines into multiple lines.

Before:

```text
Fred Bloggs, Freda Bloggs, Josephine Soap, Joe Soap
Fred Smith, Freda Smith, Josephine Jones, Joe Jones
```

After:

```text
Fred Bloggs
Freda Bloggs
Josephine Soap
Joe Soap
Fred Smith
Freda Smith
Josephine Jones
Joe Jones
```

### Lines to Comma-Delimited List.js

Convert multiple lines into a single comma separated line.

Before:

```text
Fred Bloggs
Freda Bloggs
Josephine Soap
Joe Soap
```

After:

```text
Fred Bloggs, Freda Bloggs, Josephine Soap, Joe Soap
```

### Line Numbers to Asterisks.js

Convert a markdown ordered list to a bullet list.

Before:

```text
1. line 1
2. line 2
3. line 3
```

After:

```text
* line 1
* line 2
* line 3
```

### Line Numbers to Dashes.js

Convert a markdown ordered list to an unordered list.

Before:

```text
1. line 1
2. line 2
3. line 3
```

After:

```text
- line 1
- line 2
- line 3
```

### Markdown Bullet Points.js

Convert lines into a list of markdown bullet points. (This is actually equivalent to `Prepend Lines With...`, using `* ` but included for completeness.)

Before:

```text
line 1
line 2
line 3
```

After:

```text
* line 1
* line 2
* line 3
```

### Remove Initial Asterisks.js

Remove bullet points from a list.

Before:

```text
* line 1
* line 2
* line 3
```

After:

```text
line 1
line 2
line 3
```

### Remove Initial Dashes.js

Remove dashes from an unordered markdown list..

Before:

```text
- line 1
- line 2
- line 3
```

After:

```text
line 1
line 2
line 3
```

### Remove Line Numbers.js

Remove numbering from an ordered markdown list.

Before:

```text
1. line 1
2. line 2
3. line 3
```

After:

```text
line 1
line 2
line 3
```
