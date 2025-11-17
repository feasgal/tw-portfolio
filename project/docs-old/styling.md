# Styling

We use the Material theme, customized by a couple of template overrides to add a custom announcement, banner, and context-specific Logout button...

``` { .yml .acme_aside title="*.yml</code>"}
theme:
  name: material
  custom_dir: overrides
```

... and then further customize the look and feel with an extra stylesheet...
{ .clear-left }

``` { .yml .acme_aside title="*.yml</code>"}
extra_css:
  - assets/stylesheets/extra.css
```

...and some extra javascript to set external link behavior and add some aria labels for screen readers.
{ .clear-left }

``` { .yml .acme_aside title="*.yml</code>" }
extra_javascript:
  - assets/javascripts/extra.js
```

Here is a directory structure that matches the settings described above:
{ .clear-left }

``` { .yaml .example .no-copy .no-select .annotate title="Example"}
project/
├── mkdocs.yml
├── docs/
│   ├── index.md
│   └── assets/
│       └── stylesheets
│           └── extra.css # (1)!
│       └── javascripts
│           └── extra.js
├── overrides/
│   ├── 404.html # (2)!
│   └── main.html
│   └── overrides
│       └── home.html
└── snippets/
    ├── <text-chunk>.md
    └── <another-text-chunk>.md
```

1.	See `sdk_6x/docs/assets/stylesheets/extra.css` on `docs_repo` for an example. This is the customization workhorse. It does everything from make the headers and banners play nice with each other, to define custom admonition types, to customize colors for branding, and almost 800 lines of more stuff.
2.	We customize the 404 page to make it include times when a Basic customer might be mistakenly given a link to a page they don't have permissions for.

	```
	{% extends "main.html" %}
	{% block content %}
	  <h1>404 - Not found.</h1>
	  <para>You might have clicked on a link to some documentation you don't have permission to view.</para>
	{% endblock %}
	```
	
## ACME Colors

We override some of the Material theme's default colors for both light and dark mode, to match other ACME branding and to meet contrast requirements for accessibility.
Here are the main custom colors we have overridden or created (there are some other context specific color overrides, but these are the main ones):

``` { .css }
:root > * {
  --md-primary-fg-color:       	 	#095BAF; /*(1)!*/
  --md-primary-fg-color--light: 	#095BAF;
  --md-primary-fg-color--dark: 		#095BAF;
  --md-accent-bg-color:       		#095BAF;
  --md-footer-bg-color:      	    #095BAF;
  --md-code-fg-color:				var(--md-typeset-color); /*(14)!*/
  --md-code-hl-operator-color:		var(--md-typeset-color);
  --md-code-hl-punctuation-color:	var(--md-typeset-color);
  --md-code-hl-comment-color:		var(--md-typeset-color);
  --md-code-hl-generic-color:		var(--md-typeset-color);
  --md-code-hl-variable-color:		var(--md-typeset-color);
}

[data-md-color-scheme=default] {
  --md-typeset-a-color:     		#0066CC; /*(2)!*/
  --md-accent-fg-color:      		#113550; /*(3)!*/
  --acme-codeblock-border-color:	#4f4f4f; /*(4)!*/
  --acme-inline-code-bg-color:		#e9e9e9; /*(5)!*/
  --md-default-fg-color--light:		#515151; /*(6)!*/
  --md-default-fg-color--lighter:	#959595; /*(7)!*/
  --md-typeset-mark-color:			#bbdbfb; /*(8)!*/
}

[data-md-color-scheme=slate] {
  --md-typeset-a-color:         	#A5D2FF; /*(9)!*/
  --md-accent-fg-color:         	#A5D2FF;
  --acme-codeblock-border-color:	#bebebe; /*(10)!*/
  --acme-inline-code-bg-color:		var(--md-code-bg-color); /*(15)!*/
  --md-default-fg-color--light:		#bbbdce; /*(11)!*/
  --md-default-fg-color--lighter:	#74798f; /*(12)!*/
  --md-typeset-mark-color:			#0956a5; /*(13)!*/
}
```

1.	<span class="acme_color_codes" style="background-color: #095BAF"></span> #095BAF
2.	<span class="acme_color_codes" style="background-color: #0066CC"></span> #0066CC
3.	<span class="acme_color_codes" style="background-color: #113550"></span> #113550
4.	<span class="acme_color_codes" style="background-color: #4f4f4f"></span> #4f4f4f
5.	<span class="acme_color_codes" style="background-color: #e9e9e9"></span> #e9e9e9<br> We override this to its own color only for the `default` theme.
6.	<span class="acme_color_codes" style="background-color: #515151"></span> #515151
7.	<span class="acme_color_codes" style="background-color: #959595"></span> #959595
8.	<span class="acme_color_codes" style="background-color: #bbdbfb"></span> #bbdbfb
9.	<span class="acme_color_codes" style="background-color: #A5D2FF"></span> #A5D2FF
10.	<span class="acme_color_codes" style="background-color: #bebebe"></span> #bebebe
11.	<span class="acme_color_codes" style="background-color: #bbbdce"></span> #bbbdce
12.	<span class="acme_color_codes" style="background-color: #74798f"></span> #74798f
13.	<span class="acme_color_codes" style="background-color: #0956a5"></span> #0956a5
14.	<span class="acme_color_codes" style="background-color: var(--md-typeset-color)"></span> These lines set the code block un-highlighted color, as well as the highlight colors for the [lexer](https://pygments.org/docs/lexers/) tokens that previously used that same color, to the same color as the main body text. We did this to improve the contrast for accessibility.
15.	<span class="acme_color_codes" style="background-color: var(--md-code-bg-color)"></span> Inline code background color matching the code block background color works visually in the `slate` theme.

