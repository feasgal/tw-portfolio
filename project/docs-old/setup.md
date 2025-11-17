# Installation

## System requirements

The markdown files are written to be converted to HTML by the [Insiders fork](https://squidfunk.github.io/mkdocs-material/insiders/) of the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) framework, sitting on top of the [MkDocs](https://www.mkdocs.org/user-guide/) static site generator, and using various plugins and extensions.

You will need Python and `pip` in order to install and use the tools.

## Install

### Clone Material for MkDocs { #clone_material }

Our internal `mkdocs-material-insiders` repo is a clone of the Insiders fork of Material for MkDocs. The `XXXXXX` account is the registered user. Seonaid is currently the primary on that account, and keeps the local clone updated when the developer posts a new release ([find out more](material.md)). You need to clone this repo to your machine so it can be installed with the other dependencies in the next step.

First, navigate to the location of your `XXXX_docs` clone. The `mkdocs-materials-insiders` clone needs to be a sibling of `XXXX_docs` on your machine.

``` { .zsh .example title="Clone the git repo" }
git clone git@git.XXXXXX.com:~/git/mkdocs-material-insiders.git
```

### Install docs dependencies

All the dependencies for working with our MkDocs setup are listed in a `requirements.txt` file in the root of `XXXX_docs`.
To install them, navigate to the root of `XXXX_docs` and run:

``` { .zsh .example title="Install the dependencies" }
pip install -r requirements.txt
```

## Update

### Material for MkDocs { #update_material }

Wait for an e-mail saying we've [updated our fork](material.md) before you navigate to your `mkdocs-material-insiders` clone and run:

``` { .zsh .example title="Get the latest" }
git checkout master
git pull
```

### Upgrade docs dependencies

All the dependencies for working with our MkDocs setup are listed in a `requirements.txt` file in the root of `XXXX_docs`.
To upgrade them (usually only if you got an e-mail from Seonaid saying you should), navigate to the root of `XXXX_docs` and run:

``` { .zsh .example title="Install the dependencies" }
git checkout publish
git pull
pip install --upgrade -r requirements.txt
```

## Other Tools

### Vale

[Vale](https://vale.sh/) is a narrative/prose linter than runs locally, from the command line.

``` { .console .example title="Example install command for `vale`" }
pip3 install vale
```

We set up a custom [Vocabulary](https://vale.sh/docs/topics/vocab/) to allow `vale` to check XXXX-specific terminology.
You can find the `accept` and `reject` text files on `docs_repo`, in `vale/styles/Vocab/XXXX`.

See [Local Use](local.md#vale) for instructions.

### LinkChecker

MkDocs natively [checks internal links](/configuration.md#invalid_internal_links) all the way down to the hash-link/anchor/page fragment, and displays a warning in the terminal if what you linked to doesn't exist. But it does not check external links. For that, we need `linkchecker`, which we found in a non-working state on GitHub, frked, and fixed. Go [here](https://github.com/XXXXXX/linkchecker) to get it and [here](https://linkchecker.github.io/linkchecker/) to learn how to use it.
