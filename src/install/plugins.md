# Language parser plugins

> Feature introduced in Lute 3.4.0.

> As of May 2024, only a Mandarin Chinese parser is available.  See the [Lute development wiki](https://github.com/LuteOrg/lute-v3/wiki/Developing-language-parser-plugins) for notes on how to develop a parser for other languages.

Some languages, such as Mandarin Chinese, require specialized parsers.

Since adding support for all languages would lead to code bloat, Lute adds support for specialized parsers through **plug-ins** that you install in your Lute `pip` environment.

| Language | Pypi package name | Pypi URL |
| --- | --- | --- |
| Mandarin Chinese | `lute3-mandarin` | [README](https://pypi.org/project/lute3-mandarin/) |

If you add a plugin, see the linked README in the above table for any configuration notes.

To install a plugin:

* Install Lute itself, if you haven't already (as described on prior pages).
* Stop Lute if it's running.  Leave your virtual environment activated!
* Install the plugin, e.g. `pip install lute3-mandarin`
* Restart Lute as usual (e.g., `python -m lute.main`, or however you start it)

When you start Lute, you'll see the plugins are loaded, and all enabled parsers are listed:

```
$ python -m lute.main
  
  Starting Lute.
  
  ...

  Initializing app.
  Initializing parsers from plugins ...
  Enabled parsers:
    * Space Delimited
    * Turkish
    * Japanese
    * Classical Chinese
    * Lute Mandarin Chinese

...
```