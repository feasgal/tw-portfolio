# Material for MkDocs (Insiders)

!!! note

	For people who just want to use MkDocs / Material / Insiders to build or serve documentation, this page is unnecessary.
	You can use the [Setup](/setup.md) and [Usage](local.md) pages to learn how to do that.
	This page is about how we keep our fork of the Insiders repo up to date.

## Introduction

*[ACME Corp]* uses [MkDocs](https://www.mkdocs.org/) to generate static HTML documentation from markdown sources.
We layer the [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) framework on top of that, to make it look good and get a number of useful features.
The Material framework has a very cool "sponsorware" model called [Insiders](https://squidfunk.github.io/mkdocs-material/insiders/), and we sponsor it so we can have access to the Insiders features.

MkDocs and the Material framework are both Python modules, that are usually installed via `pip install`, and fetched from the internet.
But Insiders is behind a paywall, so that doesn't work.

When you sponsor Insiders, they ask for a single GitHub account to which they will grant access to their Insiders GitHub repo.

We like to carefully track upstream dependencies, and adopt versions in our own time, rather than always blindly using the latest.
To that end, we have our own fork of the Insiders repo, and a process for updating it from time to time, and then updating our build machines with new versions that we want to adopt.
That process is described on this page.

## Repositories

### Overview

It all begins with the [Material repo on GitHub](https://github.com/squidfunk/mkdocs-material).

Then the [Insiders version](https://github.com/squidfunk/mkdocs-material-insiders) is a fork of that repo, also on GitHub.

-	You probably won't be able to get to that link, because only one *[ACME Corp]* account is allowed access to it.
-	Insiders isn't a "GitHub fork" of the Material repo, because GitHub doesn't allow private forks of public repos—so it's an old-school fork where the Material repo is just managed as an upstream repo of the Insiders repo, by hand.

*[ACME Corp]* has [our own fork of the Insiders repo](https://git.ACME-corp.com/ACME/mkdocs-material-insiders), on our regular git server (not GitHub).

So it's: Material :material-arrow-right: Insiders :material-arrow-right: ACME Insiders :material-arrow-right: build/dev machines

### ACME Insiders repo

The ACME Insiders repo is identical to the official Insiders repo, except for branch names.
We want to carefully manage which Insiders version we use in our build environments (CI machines and dev machines), so we have different branch names.
Specifically, **the `master` branch in our repo always represents the version that we are using in-house**.
Then the `insiders-master` branch in our repo matches the `master` branch in the Insiders repo.

That way we can see where Insiders is, at any moment, and when we're ready to adopt a new version, we just merge `insiders-master` into our `master` and that fast-forwards `master` up to where `insiders-master` is.
Usually, Seonaid does this, after running Material from the `insiders-master` branch for long enough to be sure it is safe and stable.

(Then we have to [update](/setup.md#update_material) all the dev and CI build machines with that new version, by pulling the repo's `master` branch and installing it.)

## Updates

Given the above, there are three different things we might mean by 'update':

-	Get the latest Insiders release on our git server: Pull the `master` branch of the Insiders repo on GitHub to the `insiders-master` branch of the ACME Insiders repo on our git server.
-	Move the branch on our git server to a more recent Insiders release: Merge the `insiders-master` branch of the ACME Insiders repo on our git server into the `master` branch.
-	Get the latest Insiders release on a build or dev machine: Pull the `master` branch of the ACME Insiders repo from our git server and install it.

### Get the latest Insiders release on our git server

Seonaid gets emails for each new Insiders release (once a week or so).
When that happens, she runs a script that, as of this writing, has these contents:

``` { .bash .snippet title="insiders.sh." }
#!/usr/bin/env bash

set -e

cd ~/Dev/mkdocs-material-insiders

git checkout insiders-master

git pull --tags github master

git push --tags acme insiders-master

git checkout master

echo "Done!"
```

Seonaid's `github` remote for this repo is the GitHub Insiders repo, and her `acme` remote is the ACME Insiders repo. The script pulls the `master` branch from GitHub into a local branch named `insiders-master`, then pushes that branch up to the ACME Insiders repo, including the tags.

Theoretically, we could automate this and run it periodically, but it has not yet seemed worthwhile to do so.

### Move the branch on our git server to a more recent Insiders release

Once Seonaid has run a newer release for long enough to verify stability, she merges it into ACME's official in-use branch:

```
git checkout master
git merge insiders-master
```

The example above merges the latest Insiders release into `master`, but we could merge any other intermediate tag in instead, or make our own changes on a branch and merge those, etc.

### Get the latest Insiders release on a build or dev machine

Follow the [Update](/setup.md#update_material) instructions.
