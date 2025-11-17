# Examples, Standard Practices, & Other Cool Stuff

## Anchors

Don't use `<a name=...>`

We don't want invisible anchors; instead we want to add the `id` attribute to our actual destination, so that our blinker decoration on link destinations has something to act on, and so that our anchors are less likely to get separated from the text we wanted to link to. Here are some examples of common situations where you might need to set the `id`.

-	Make the heading anchors friendlier and evergreen. 

	MkDocs generates an `id` for each heading, based on the heading's content. In the following example, the generated `id` would be `big_long_obnoxious_title_with_tons_of_descriptive_detail`. Use this syntax instead, to set the `id` explicitly to `tiny_anchor`, making `#tiny_anchor` the anchor hash you'll use to link to it:

	``` { .md }
	## Big Long Obnoxious Title with Tons of Descriptive Detail { #tiny_anchor }
	```

-	Link to a string of text.
	
	Use [the `<span>` trick](#span_trick) to give part of the actual text an `id`. In this example, the text "Refer to A Certificate" will be the destination for the `#refer_windows_cert` anchor hash.

	``` { .md }
	1. <span id="refer_windows_cert">Refer to A Certificate</span> Stored in the Windows Certificate Manager
	```

-	Link to a whole code block. 

	In this example, `.zsh` is just telling the [lexer](https://pygments.org/docs/lexers/) which syntax highlighting to use. `.example` is applying a custom CSS style to give the block a purple title block and test tube icon. The part you care about is `id="editable"`. That makes `#editable` the anchor hash you'll use for a link from elsewhere.

	~~~
	``` { .zsh .example id="editable" title="Install in editable mode" }
	pip3 install -e .
	```
	~~~

## Admonitions

!!! tip inline end "No strict rule..."

	...but in practice, we're usually a little more sparing with the
	
	!!! warning
	
	and
	
	!!! danger
	
	types and save them to warn against actions that will cause a security breach.

We don't have strict rules about what type of admonition you can use in a given situation.
You're mostly going to pick one based on how urgent the content is and how the icon 'speaks' to you. :wink:
{ id="test" }

In addition to the admonition types [supported by Material](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types), we have created several custom admonition styles, as follows (fix, enhance, new, and deprecate are only intended for the changelog):

!!! link inline clear-left

!!! checklist inline clear-left

!!! fix inline clear-left

!!! enhance inline clear-left

!!! new inline clear-left

!!! deprecate inline clear-left

### Floating Left or Right { .clear-left }

Add `inline` to float an admonition left, or `inline end` to float right. (1)
{ .annotate }

1.	Here's a sneaky secret: `inline` and `end` are just CSS classes. So you can use them to float almost anything the same way by following the block with `{ .inline }` or `{ .inline .end }`. Check it out:
	
	I'm going to float this paragraph to the right, with a width of 11.7rem and all the other attributes of an `inline end` admonition.
	{ .inline .end }
	
	But this paragraph I'm not floating. Not at all. I'm amazed at how non-floaty this paragraph is. It's the non-floatiest. Its text will wrap around the paragraph I used `{ .inline .end}` on, just like the text wraps around `inline end` admonitions.

=== "Markdown"

	```
	!!! note inline end
	
		Here's a very important note on the right.
		
	!!! tip inline
		
		And a tip on the left.
	```

=== "Built HTML"
	
	!!! note inline end
	
		Here's a very important note on the right.
		
	!!! tip inline
		
		And a tip on the left.
		
Sometimes when you float one of these using `inline` or `inline end`, the thing you floated ends up taking more room on the page than the text you wanted it to float next to, and the next blocks/elements will get sucked into the space as well.

=== "Markdown"

	```
	!!! note inline
	
		Here's a very important note on the left. It might take up a lot of room, if you have a lot to say. Lorem ipsum dolor sit amet... This is probably long enough.
	
	Plus some text on the right.
	
	And then some text that we want to start below all of that, but it's not.
	```

=== "Built HTML"
	
	!!! note inline
	
		Here's a very important note on the left. It might take up a lot of room, if you have a lot to say. Lorem ipsum dolor sit amet... This is probably long enough.
	
	Plus some text on the right.
	
	And then some text that we want to start below all of that, but it's not.
		
We created a class to deal with this problem. To clear the float, just give the `clear-right` or `clear-left` class (depending on which way the thing in question was floated) to the first block you want to reset:

=== "Markdown"

	```
	!!! note inline
	
		Here's a very important note on the left. It might take up a lot of room, if you have a lot to say. Lorem ipsum dolor sit amet... This is probably long enough.
	
	Plus some text on the right.
	
	And then some text that we want to start below all of that, and now it is.
	{ .clear-left }
	```

=== "Built HTML"
	
	!!! note inline
	
		Here's a very important note on the left. It might take up a lot of room, if you have a lot to say. Lorem ipsum dolor sit amet... This is probably long enough.
	
	Plus some text on the right.
	
	And then some text that we want to start below all of that, and now it is.
	{ .clear-left }


### Custom Titles

An Admonition's default title is the same as the type, that is, a `!!! note` will have the default title of "Note".
You can set an admonition's title to something else like this:

=== "Markdown"

	```
	!!! note "This Is A Very Good Title"
	
		This is a very important note.
	```

=== "Built HTML"
	
	!!! note "This Is A Very Good Title"
	
		This is a very important note.
		
And you can make the admonition render without a title by passing an empty string, like this:

=== "Markdown"

	```
	!!! note ""
	
		This is a note with no title.
	```

=== "Built HTML"
	
	!!! note ""
	
		This is a note with no title.
		
### Collapsible

For any admonition, you can change the `!!!` to `???` to render it collapsed to just the title and click to expand (or `???+` to render it expanded but click to collapse).

=== "Markdown"

	```
	??? note "I'm a Collapsed Note"
	
		Here is my secret text.
	```

=== "Built HTML"
	
	??? note "I'm a Collapsed Note"
	
		Here is my secret text.
		

We tend to do this rarely, because it changes the layout and makes the page jump around when you click. Generally we use this for something that not everyone needs, but still needs to be documented for those who do ([like upgrading your protected apps from an old version](#)), or something that we need to document but really want to de-emphasize ([like third-party licensing solutions](#)).

If you link to something in a collapsible admonition, it will render expanded when the link is followed.

### Linkable

Admonitions tend to be important information, and it's useful to be able to link to them from elsewhere, or for Support to be able to link customers directly to them in the online docs. The Material framework doesn't give them a unique `id` when it transforms the markdown to HTML, but we can use [the `<span>` trick](#span_trick) to give them one in the title, as well as a clickable [permalink](#my_cool_admonition) just like the headings have (see the Built HTML tab).

=== "Markdown"

	```
	!!! note "<span id="my_cool_admonition">I'm a Note [🔗](#my_cool_admonition "Link to this item")</span>"
	
		Here is my text.
	```

=== "Built HTML"
	
	!!! note "<span id="my_cool_admonition">I'm a Note [🔗](#my_cool_admonition "Link to this item")</span>"
	
		Here is my text.

### `no_shrink`

By default admonitions are rendered with a smaller font than the surrounding text.
To make them not do this, add the `no_shrink` class:

=== "Markdown"

	```
	!!! note no_shrink "This one will be full size"

		Look at me! I'm all grown up!
	```

=== "Built HTML"

	!!! note no_shrink "This one will be full size"

		Look at me! I'm all grown up!

## Tooltips

Here's a fun thing that the markdown extensions we're using with MkDocs and Material let us do: Tooltips on anything you want! As always, if you think the situation needs a complex-ish formatting solution like this, please try re-examining the problem statement to see if you can simplify the write-up instead. But every once in a while there's an edge case, and this might be useful.

To put a tooltip on something that will become an entire HTML element, you can just use block syntax to follow the element with <nobr>`{ title="Important information" }`</nobr>, like this example, where the tooltip is set on the entire paragraph:

=== "Markdown"
	```
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	{ title="Important information" }
	```

=== "Built HTML"
	
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	{ title="Important information" }


If you want to put a tooltip on some text within a paragraph, you can use [the `<span>` trick](#span_trick) and put the `title` on that, like this:

=== "Markdown"

	```
	<span title="here's a nifty tip about the text>Here's some text I want a tooltip for</span> along with some text that doesn't have a tooltip.
	```

=== "Built HTML"
	
	<span title="here's a nifty tip about the text">Here's some text I want a tooltip for</span>, along with some text that doesn't have a tooltip.


And lastly, if we're going to use a tooltip, we need some visual indication for the reader that they should hover their cursor there to see it. So either:

-	Bold the text, which will cause MkDocs to turn it into a `<strong>` element anyway, and therefore it lets you use the easier, curly-brace syntax:

	=== "Markdown"

		```
		**Here's some text I want a tooltip for**{ title="here's a nifty tip about the text" }, along with some other text.
		```
		
	=== "Built HTML"
		
		**Here's some text I want a tooltip for**{ title="here's a nifty tip about the text" }, along with some other text.
		
-	Or use something like an 'ACME Corp Blue' (1) question icon to hold the tooltip:
	{ .annotate }
	
	1.	`<font color=#0066CC>`
	
	=== "Markdown"
	
		```
		Here's some text I want a tooltip for <font color=#0066CC>:fontawesome-solid-circle-question:{ title="here's a nifty tip about the text"}</font> along with some other text.
		```

	=== "Built HTML"
	
		Here's some text I want a tooltip for <font color=#0066CC>:fontawesome-solid-circle-question:{ title="here's a nifty tip about the text"}</font> along with some other text.

## The Span Trick { #span_trick }

So you want to give some attribute to something that isn't really an element, or whose element you don't have access to via MkDocs? Good news! You can give attributes to almost everything if you work hard and believe in yourself... and also turn part of the thing into an element by wrapping it in <nobr>`<span>...</span>`.</nobr> Here are some basic examples.

	
``` { .md .example title="Add an <code>id</code>" }
<span id="my_cool_id">I need to link to just this sentence.</span> Here's some more info, and the end of the paragraph.
```

``` { .md .example title="Add a <code>title</code>" }
<span title="Here's a tooltip>Here's some text I want a tooltip for</span> along with some text that doesn't need a tooltip.
```

## Half-Width Asides

If you want your floats to be a little wider than [`inline`](#floating_left_or_right) but still uniform, use the `acme_aside` class. `acme_aside` works just like `inline` except `width= 50%;`.
So you can use it like this:

=== "Markdown"

	```
	!!! note acme_aside

		Here's my cool, left-aligned note, that takes up half the content width.
	```

=== "Built HTML"
	
	!!! note acme_aside

		Here's my cool, left-aligned note, that takes up half the content width.
    
And like this:

=== "Markdown"

	```
	!!! note acme_aside end

		Here's my cool, RIGHT-aligned note, that takes up half the content width.
	```

=== "Built HTML"

	!!! note acme_aside end

		Here's my cool, RIGHT-aligned note, that takes up half the content width.
    
But you can also use it like this:

=== "Markdown"

	```
	![RIGHT-ALIGNED IMAGE THAT TAKES UP HALF THE CONTENT WIDTH](img/horse.png){ .acme_aside .end }
	```

=== "Built HTML"

	![RIGHT-ALIGNED IMAGE THAT TAKES UP HALF THE CONTENT WIDTH](img/horse.png){ .acme_aside .end }

You might even use it to avoid wasted space on a code block that doesn't have any long lines (but remember that if you want to use `{  }` to declare classes for a code block, the first class you declare must be the [lexer](https://pygments.org/docs/lexers/) short name).

=== "Markdown"

	~~~
	``` { .console .acme_aside .end }
	HERE_IS_A_SHORT=line_of_code
	AND_HERE_IS=another,
	IT_IS_JUST_TURTLES=all_the_way_down,
	```
	~~~

=== "Built HTML"

	``` { .console .acme_aside .end }
	HERE_IS_A_SHORT=line_of_code
	AND_HERE_IS=another,
	IT_IS_JUST_TURTLES=all_the_way_down,
	```

## Links

Markdown syntax for links is:

``` md
[Link text](link.destination)
```

For internal links (within the same docs set), use the relative location of the `.md` file, **not** a `.html` destination. You can include a hash-link as needed.

=== "Markdown"

	``` md
	[Link to Update section of Installation page](/setup.md#update)
	```

=== "Built HTML"

	[Link to Update section of Installation page](/setup.md#update)

External links (to destinations outside your docs set) will automatically open in a new tab because of some extra javascript we added.

## Images

Markdown syntax for images is the same as for links, but preceded by a `!`. You can also use `{ }` to add several common image attributes.

=== "Markdown"

	``` md
	![Alt Text](img/invalid_link.png){ width=300 align=right }
	```

=== "Built HTML"

	![Alt Text](img/invalid_link.png){ width=300 align=right }

### Lightbox

MkDocs GLightbox is an MkDocs plugin that supports image lightbox in the *[Protection Product]* 6.0 docs.

All images are added to the lightbox effect automatically, except images in an anchor tag and emoji images from pymdown-extensions.
You can disable lightbox for an individual image by using the custom CSS class `skip_lightbox` on that image:

=== "Markdown"

	``` md
	![Alt Text](img/invalid_link.png){ .skip_lightbox }
	```

=== "Built HTML"

	![Alt Text](img/invalid_link.png){ .skip_lightbox }

You can disable lightbox of all images on a specific page by adding `glightbox: false` to the page metadata like this:

``` md
---
glightbox: false
---
```

See the [MkDocs GLightbox docs](https://blueswen.github.io/mkdocs-glightbox/) for details.
