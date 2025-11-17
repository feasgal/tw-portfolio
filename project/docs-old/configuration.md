# Configuration

## General

The MkDocs static site generator gets its settings and parameters from [one or more](#inheritance) `.yml` config files.
For general information on configuration, refer to the [MkDocs](https://www.mkdocs.org/user-guide/configuration/) and [Material](https://squidfunk.github.io/mkdocs-material/creating-your-site/#advanced-configuration) documentation.
What follows are a few potentially 'unexpected' configuration choices we have made that differ from what you might expect after reading that documentation.

See [Styling](/styling.md) for more detail on our use of the Material theme.

### Search

``` { .yml .acme_aside .end  title="<code>*.yml</code> (5.x docs)"}
plugins:
  - search
  - offline
```

The 5.x docs were installed locally with the SDK as well as the latest version being available on [docs.ACME-corp.com](https://docs.ACME-corp.com). This meant that we had to use the [Insiders](material.md) `offline` plugin to allow search of a local installation that works with modern browser security features.

The 6.0 and later docs are only online, and therefore do not need the `offline` plugin.

``` { .yml .acme_aside .end .clear-right title="<code>*.yml</code> (6.x docs)"}
plugins:
  - search:
    separator: '[\s\-\./\\"()]+'
    fields:
      title:
        boost: 3.0
      tags:
        boost: 6.0
```

Normally, the `search` plugin does not need to be listed in the config file if it is the only plugin, but we list it even in the 6.0 and later docs, in order to customize the default word separators and the search boost associated with a page's title or tags.

### Fail parameters { .clear-right }

!!! warning "Leave these as is, but it's good to know what the warnings mean or why your local serve crashed."
 
#### Invalid Internal Links { .clear-left }
	
The `strict` configuration setting determines how MkDocs will handle invalid internal links in the docs set.

Standard practice at *[ACME Corp]* is to leave `strict` unset in the `.yml` config files.
It defaults to `false`.
The terminal will show a warning about invalid internal links, rather than crashing the serve or failing a local build.

![bad link warning](img/invalid_link.png)

Then we explicitly set `strict` to `true` via the command line for the [Jenkins jobs](/jobs.md) that create user-facing HTML.

This way, local serves do not crash annoyingly every time you change something while you are working on docs, but we also don't end up publishing docs with broken links.


#### Invalid Snippet Paths { .clear-right }

The `pymdownx.snippets` extension (installed automatically with the Material framework and [enabled in the config files](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/#snippets)) allows you to single-source repeated chunks of text.

Unlike the MkDocs `strict` setting above, the `check_paths` option does **not** display a warning in the terminal when set to `false`, so **the problem is invisible in the built HTML**.
The snippet text will simply not be present, with no indication that anything is missing.

**This is obviously bad**, and therefore `check_paths` is set to `true` in the base config file that all the docs sets [inherit](/configuration.md).
	
## Inheritance

*[ACME Corp]* takes advantage of [configuration inheritance](https://www.mkdocs.org/user-guide/configuration/#configuration-inheritance) to reduce redundant config maintenance on user-facing documentation sets. 

### `docs_repo`

``` { .mermaid }
flowchart LR
  A[base.yml] --> B{{ /project/mkdocs_SDK.yml}};
  subgraph 6x_Docs
  B --> C{{ /project/mkdocs_WEB.yml}};
  C --> D{{ /project/mkdocs.yml <font color=red>**</font>}};
  B --> E{{ /project/mkdocs_basic_SDK.yml}};
  E --> F{{ /project/mkdocs_basic_WEB.yml}};
  end
```

!!! note ""

	<font color=red>**</font> This `mkdocs.yml` file has no additional settings beyond what it inherits, and exists simply to make the default `mkdocs serve` and `mkdocs build` commands convenient for people to use.

This command builds the Basic SDK Integration Guide for the installer:

``` { .console .example title="Example build command"}
mkdocs build -f mkdocs_basic_SDK.yml
```

The merged config file that MkDocs constructs and uses based on inheritance, will have:

-	All of the settings from `base.yml` except those overridden by `mkdocs_SDK.yml` or `mkdocs_basic_SDK.yml`.
-	All of the settings from `mkdocs_SDK.yml` except those overridden by `mkdocs_basic_SDK.yml`.
-	All of the settings from `mkdocs_basic_SDK.yml`.



