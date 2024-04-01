# Changelog

Lute's changelog is on [GitHub](https://github.com/luteorg/lute-v3/blob/master/docs/CHANGELOG.md).

## Notes about the version numbers

Lute's version numbering is as follows:

`<major>.<minor>.<patch>`, followed by an optional `.b<number>`.

This schema is documented (exhaustively) at [packaging.python.org/](https://packaging.python.org/en/latest/specifications/version-specifiers/#version-specifiers).

### Stable versions

Each release number that doesn't end with `.b<number>` is stable.  Stable releases are pushed to pypi and to Docker Hub.

When you do a `pip install` or `--upgrade`, pip will automatically use the latest stable release.

### Beta launches

Beta launches end with `b<number>`, and are betas for the _next_ planned release.  This follows [the Python recommendation](https://packaging.python.org/en/latest/specifications/version-specifiers/#version-specifiers).

For example, if the current prod release is `3.0.4`, the next planned release will be `3.0.5`.  Betas before that release will be `3.0.5.b1`, `.b2`, etc, so the numbering will be:

```
3.0.4
3.0.5b1
3.0.5
```

As Lute's developer/owner, I use the beta releases in my personal prod environment, actually using it to ensure there aren't any problems.  When the beta is good, it's made into a stable release.
