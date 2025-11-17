# Local Use

The HTML for a given docs set is generated from markdown source files using the [MkDocs](https://www.mkdocs.org/user-guide/) Static Site Generator (SSG) and the [Material for MkDocs Insiders](https://squidfunk.github.io/mkdocs-material/getting-started/) framework, as well as the [`pymdownx.snippets`](https://facelessuser.github.io/pymdown-extensions/extensions/snippets/) extension.
User documents at those links give detailed instructions for each of the main tools.

## Serve the site locally for WYSIWYG editing

1.	From the command line, navigate to the project directory (the one that contains `mkdocs.yml` ).

1.	Start the local server by running `mkdocs serve`(1).
	{ .annotate }

	1.	Most users at XXXX will not need any additional `mkdocs serve` options, but [here they are](https://www.mkdocs.org/user-guide/cli/#mkdocs-serve) if you think you might.


	``` { .console .example .no-copy .no-select title="Example terminal display" }
	$ mkdocs serve
	INFO - Building documentation...
	INFO - Cleaning site directory
	INFO - Documentation built in 0.53 seconds
	INFO - [15:27:47] Serving on http://127.0.0.1:8000/
	```
	
1.	In your browser, navigate to the URL shown in the terminal (`http://127.0.0.1:8000/` in the above example).

While serving locally, mkdocs will detect changes to `mkdocs.yml` or the `docs_dir` as defined in the [config file](/configuration.md), and automatically update the browser view with any changes as soon as they are saved(1).
{ .annotate}

1.	Because we use features that depend on other files outside of `mkdocs.yml` and `docs_dir`, such as config [inheritance](/configuration.md#inheritance), [snippets](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/#snippets), and [template overrides](/styling.md), we often specify additional files for MkDocs to watch for changes.
	
	``` { .yaml .example title="<code>mkdocs.yml</code>" }
	watch:
	    - includes
	    - snippets
	    - overrides
	    - mkdocs_SDK.yml
	    - mkdocs_WEB.yml
	```

## Build and view the site locally

!!! warning "Wait!"
	
	There is hardly ever a reason to build the docs site locally. Even Seonaid hasn't run that command since setting up Jenkins to automatically build and host the site whenever changes are pushed. `mkdocs serve` will show you in real time what your changes are doing, and the docs used in an installer or on one of our websites come from the relevant [Jenkins job](/jobs.md) for that context. When you build locally, you risk accidentally committing large built HTML sites to the repository, which is [double-plus-ungood](https://en.wiktionary.org/wiki/double-plus-ungood).
	
	`.gitignore` is set to ignore the paths of the `site_dir` for the docs builds listed in [Jenkins Jobs](/jobs.md), but you should still be careful not to commit built HTML to the repositories, especially if you create a new docs set with a different `site_dir`. The easiest way to do this is to not build a site locally unless you are very sure there is some unusual reason to do so.

1.	From the command line, navigate to the project directory (the one that contains `mkdocs.yml`).
1.	Build the static site by running the `mkdocs build` command(1).
	{ .annotate }	
	
	1.	Most users at XXXX will not need any additional `mkdocs build` options, but [here they are](https://www.mkdocs.org/user-guide/cli/#mkdocs-build) if you think you might.
	
1.	In your browser, open `<your project-dir>/<site_dir>/index.html`.

## Run `vale` from time to time { #vale }

We have not incorporated [`vale`](/setup.md#vale) into the Jenkins jobs yet.
Seonaid runs `vale` frequently, and always before a release.
But it's great for anyone who does docs work to run it before committing.

``` { .zsh .example title="Run `vale` on markdown pages in the docs project's top directory"}
vale */*.md > vale.txt
```

`vale.txt` is in the `.gitignore` for `XXXX_docs`, so by using that as the output filename, you will avoid accidentally committing this file.
