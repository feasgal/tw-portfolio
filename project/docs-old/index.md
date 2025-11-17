# Overview

## Some History

??? info no_shrink "Legacy info: *[Protection Product]* 5.6.0 through 5.9.0"

	-	The docs were included in the installer, as well as published on the [docs.ACME-corp.com](https://docs.ACME-corp.com) website.
		They were built slightly differently for local installation with the SDK installer vs. for the web, to account for differences in what browsers allow for the site search in local files vs. hosted websites.
		This was accomplished using different config files (`mkdocs_XXXX.yml`) for the local vs. web docs.
	
	-	The **SDK Integration Guide**, which primarily described the SDK itself, was built from two different branches of `client_repo` so that we could make improvements to the current version's online documentation while work on the next installer release continued.
		The installer docs were built from the relevant release branch, while the web docs were built from the `docs/website` branch.

	-	The **License Management Guide**, which primarily described the services accessed via the ACME portal, were built from `services_repo`.
		Since there is only ever one version of the ACME portal available at a time (the current one), `services_repo` did not need separate branches for the installer docs vs. web docs.
		The separate web vs. SDK config files and builds were still necessary, but both were on `master`.

	-	The **SDK Integration Guide** and **License Management Guide** needed to function as one site, but the source files were in separate repositories.
		So we built a skeleton **Top Pages** site to stitch them together.
		There was no complete search across both docs sets, only separate search inside each of the two, and links between the two sets had to be coded as external links, which meant that MkDocs' built-in link checker could not validate them.
		<span id="later">We left that improvement for the *[Protection Product]* 6.0 effort.</span>
	
## Today

### 6.x Docs

Starting with *[Protection Product]* SDK 6.0, several things are different.

-	The docs are in their own repository, `docs_repo`.

-	There are no longer separate docs builds for **Developer** vs. **Publisher** docs.
	This allows for a unified, site-wide search, and makes all of the links between our own pages 'internal' so that MkDocs can validate them.
	The docs have also been completely restructured and rewritten.
	Bookmarks to the docs for 5.x.x will not even come close to working.

-	Most visible to our customer, the docs for 6.0 and later are only online, at [docs.ACME-corp.com](https://docs.ACME-corp.com/dp).

	There are still two different branches on `docs_repo` so that we can make improvements to the current SDK release's online documentation while work on the next SDK release continues.
		
	!!! example
	
		When *[Protection Product]* SDK 6.0 DP1 was released, we continued to inprove and publish the DP1 docs from the `6.0.0/website` branch.
		DP1 had no Windows support, but as we worked on DP2, we created the documentation for the Windows side.
		The DP2 docs, which included the Windows sections, were on the `main` branch and were not published to [docs.ACME-corp.com](https://docs.ACME-corp.com) until DP2 was released.

### Retro-fitted 5.x Docs

Remember above, when we [left that improvement for the *[Protection Product]* 6.0 effort](#later)?
Later, when we had worked with the *[Protection Product]* 6.0 docs enough to see how much better combining them was, we came back and combined the 5.9.0 docs, moved them to `docs_repo`, and published them to [docs.ACME-corp.com](https://docs.ACME-corp.com/advanced), replacing the old 'Developer' and 'Publisher' docs.
At the same time, we added the *[LicensingAPI]* documentation to the 'Advanced' docs.
The docs for 5.10 were published only online, not in the installers. 

### Other ACME Products

Over time, we have transitioned our other products to the same style of documentation, and hosted them online in the same ways

-	[End-User Help](https://help.ACME-corp.com/)
-	[E-Commerce](https://ecommerce.ACME-corp.com/docs/)

## Source File Locations

### Pre-5.6

**Before the release of the *[Protection Product]* SDK 5.6.0 in August 2022**, most of the customer documentation was in various PDFs, RTFs, and hand-written HTML files on `client_repo` in the `path/to/Documentation/` directory. A scavenged, rather disorganized collection of various other documents that used to be delivered via various methods before 5.6.0, are on `docs_playground` in the `Reference/` directory.

### Post-5.6

**Starting with the release of the *[Protection Product]* SDK 5.6.0 in August 2022**, *[ACME Corp's]* customer-facing documentation is HTML websites generated from Markdown source files.
These source files are located as follows:

| Product | Docs Location |
| ------- | ------------- |
| ~~*[Protection Product]* 5.6.0 - 5.8.x~~	| ~~SDK Integration Guide: on `client_repo` in the `docs/sdk/` directory.<br>License Management Guide: on `services_repo` in the `docs/portal/` directory.~~ |
| *[Protection Product]* 5.9.0 | One unified docs set on `docs_repo` in the `sdk_5x` directory.<br>No more Developer vs. Publisher docs. Includes *[LicensingAPI]* docs. |
| *[Protection Product]* 6.0 and later	| One unified docs set on `docs_repo` in the `sdk_6x/` directory. |
| End-User Help | On `docs_repo` in the `end_user_help` directory. |
| E-Commerce | On `docs_repo` in the `ecommerce` directory. |

See [`docs_repo Branches`](/branches.md) for more information.

The various static sites are built by Jenkins and archived on the respective [Jenkins job](/jobs.md) pages for internal review.

