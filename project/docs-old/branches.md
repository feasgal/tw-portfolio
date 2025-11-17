# `docs_repo` Branches

All docs sets publish to their respective websites from one branch for the current release of the product or service, and each docs set has its own development branch for the next release.

-	`publish` is the publish branch for all docs sets.
-	`dev/5x_sdk` is the dev branch for the 5.x SDK docs.
-	`dev/6x_sdk` is the dev branch for the 6.x SDK docs.
-	`dev/ecommerce` is the dev branch for the E-Commerce docs.
-	`dev/top_pages` is the dev branch for the docs top pages (login, landing page forbidden, loading, access denied) (1)
	{ .annotate }

	1.	The *[Protection Product]* Docs and *[Other Security Product]* Docs are completely separate documentation sets that we do not want to share a unified search, so they are not built as one docs set for `docs.ACME-corp.com`.
		We therefore create the top pages of the docs website as a separate MkDocs set, with placeholders for the *[Protection Product]* Docs and *[Other Security Product]* Docs that are replaced by the real *[Protection Product]* or *[Other Security Product]* docs during the [publish jobs](/jobs.md#publish_jobs).

In general, new dev for each docs set happens in each `dev/...` branch and gets merged to `publish` when ready to go live.

But the *[Protection Product]* docs set has three sections (Licensing, Protection, and *[LicensingAPI]*), and changes to the two services parts of that (Licensing and *[LicensingAPI]*) may to need to publish before the next SDK release (Protection).
For instance, if Services makes a change to the ACME portal or *[LicensingAPI]*, we need to update the descriptions and screenshots in both documentation sets.
It needs to go live as soon as the change to the service goes live, but we don't yet want to also send live whatever docs work is happening on `dev/5x_sdk` or `dev/6x_sdk` for the next release of the *[Protection Product]* SDK.
So we have two more branches:

-	`dev/remoteAPI` is the dev branch for *[LicensingAPI]*.
-	`dev/portal` is the dev branch for the ACME portal.

These branches also get merged to `publish` when ready to go live, but we discuss them separately here because they make merging decisions just a little stickier.
Most of the time, Seonaid will be the one who has to worry about that.
But if you find yourself in charge of merging `dev/5x_sdk` or `dev/6x_sdk` to `publish`, consider carefully how many times `dev/remoteAPI` and `dev/portal` have been merged to `publish` since the last time your dev branch was, and whether outmerging `publish` first might be advisable.

!!! note

	Until 5.x is in the rearview mirror, changes in `dev/remoteAPI` and `dev/portal` will be made in both docs sets (`sdk_5x` and `sdk_6x`).

## Branches vs. Directories

Worth noting here in some detail is that the 5.x and 6.x docs are not only developed on different **branches**; the files are in separate **directories** as well.
This is because:

-	There are vast structural differences between the two versions.
-	There is little to no overlap or similarity in content, at the page level.
-	They're practically two different products.
-	Because of the above, there's no `cherry-pick` or `merge` advantage to having the 5x and 6x docs just be the same directory on different branches if the 'same' change has to be made to both sets.
	-	But people might think they **can** `cherry-pick` or `merge` because they don't understand the differences.
-	Because of all of the above, there's also no git history advantage.
-	By also having them in separate directories, we can have one branch that always contains the latest published version of all docs.

In an effort to reduce confusion, the directories and branches are NOT named the same:

-	The **directories** are called `sdk_5x` and `sdk_6x`.
-	The **branches** are called `5x_sdk` and `6x_sdk`.

Refer also to [Source File Locations](index.md#post-56) to see what directories all of our products' docs are in.