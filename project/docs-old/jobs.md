# Jenkins Jobs

All of the jobs that create docs sets run **automatically** on changes to the relevant directories on the appropriate branches. This makes the artifacted docs available to be published by **manually** running the associated [publish job](#publish_jobs). 

!!! note inline end

	Since we default to the advanced docs set if a user navigates to the base `docs.ACME-corp.com` URL, the top pages are rarely seen by the user.

<span id="DocSite-TopPages">[DocSite-TopPages](https://jenkins.ACME-corp.com)</span> (1) builds the *[ACME Corp]* docs top pages from the `publish` branch of `docs_repo`, uses the HTML Publisher plugin to publish it to the Jenkins job page for review, and publishes it to [docs-staging.ACME-corp.com](https://docs-staging.ACME-corp.com/) and [docs-staging.ACME-corp.com](https://docs-staging.ACME-corp.com/) for review.
{ .annotate }

1.	The *[Protection Product]* Docs and *[Other Security Product]* Docs are completely separate documentation sets that we do not want to share a unified search, so they are not built as one docs set for `docs.ACME-corp.com`. We therefore create the top pages of the docs website (login, loading, access denied, etc.) as a separate MkDocs set, with placeholders for the *[Protection Product]* Docs and *[Other Security Product]* Docs that are replaced by the real *[Protection Product]* or *[Other Security Product]* docs during the [publish jobs](#publish_jobs).

## *[Protection Product]* SDK 5.x

<span id="5xCombined-Docs">[5xCombined-Docs](https://jenkins.ACME-corp.com)</span> - builds the *[Protection Product]* documentation set (including *[LicensingAPI]* docs) from the `dev/5x_sdk` branch of `docs_repo`, and uses the HTML Publisher plugin to publish it to the Jenkins job page for review. This is the job that builds the 5.x docs for the **next** release, for internal review.


<span id="5xVersioned-WebDocs">[5xVersioned-WebDocs](https://jenkins.ACME-corp.com)</span> - builds the *[Protection Product]* documentation set (including *[LicensingAPI]* docs) from the `publish` branch of `docs_repo` and publishes it to [docs-staging.ACME-corp.com](https://docs-staging.ACME-corp.com/) and [docs-staging.ACME-corp.com](https://docs-staging.ACME-corp.com/) for review. This is the job that builds the 5.x docs for the **current** release, for the *website*. It uses the `mike` versioning tool to update the current version as we improve the docs.

-	This job extracts the `major.minor` version number from `mkdocs.yml` before creating the docs set, and sets the `latest` alias to the created version. This way, older versions are retained for customers running older versions of the SDK, but `latest` is the default version loaded, and we don't have separate docs versions archived for every patch we release.

## *[Protection Product]* SDK 6.x { #ProtectionProductDocs }

<span id="ProtectionProduct-Docs">[ProtectionProduct-Docs](https://jenkins.ACME-corp.com)</span> - builds the 6.0 documentation set from the `dev/6x_sdk` branch of `docs_repo`, and uses the HTML Publisher plugin to publish it to the Jenkins job page for review. This is the job that builds the *[Protection Product]* SDK docs for the *next* release, for internal review.


<span id="6xVersioned-WebDocs">[6xVersioned-WebDocs](https://jenkins.ACME-corp.com)</span> - builds the 6.0 documentation set from the `publish` branch of `docs_repo`, and publishes it to [docs-staging.ACME-corp.com](https://docs-staging.ACME-corp.com/dp) and [docs-staging.ACME-corp.com](https://docs-staging.ACME-corp.com/dp) for review. This is the job that builds the *[Protection Product]* SDK docs for the *current* release. It uses the `mike` versioning tool to update the current dev version as we improve the docs.

-	This job extracts the `major.minor` version number from `mkdocs.yml` before creating the docs set, and sets the `dev` alias to the created version. Since all of the development work is happening under milestones of version 6.0, the latest-released `dev` version of the docs is always the only one available.


## End-User App

<span id="EndUserDocs">[EndUserDocs](https://jenkins.ACME-corp.com)</span> - builds the End-User documentation set from the `publish` branch of `docs_repo`, uses the HTML Publisher plugin to publish it to the Jenkins job page, and posts it to [https://help-staging.ACME-corp.com/](https://help-staging.ACME-corp.com/) for review before publishing.

## *[ACME Corp]* <!-- vale off -->Docs Docs<!-- vale on -->

<span id="ACME-Corp-Docs">[ACME-Corp-Docs](https://jenkins.ACME-corp.com)</span> - builds this documentation that you are reading now from the `publish` branch of `docs_repo`, and uses the HTML Publisher plugin to publish it to the Jenkins job page for our internal use. There is no corresponding web version because it is not published anywhere but here on `maker`.

## E-Commerce

<span id="Ecommerce-Docs">[Ecommerce-Docs](https://jenkins.ACME-corp.com)</span> - builds the E-Commerce documentation set from the `publish` branch of `docs_repo`, and uses the HTML Publisher plugin to publish it to the Jenkins job page.

!!! note

	Unlike many other *[ACME Corp]* docs jobs, this one does not upload the artifact to docs-staging for staging. There is also no [publish job](#publish_jobs) for E-Commerce docs. Instead, they deploy to [ecommerce.ACME-corp.com/docs/](https://ecommerce.ACME-corp.com/docs/index.html) or [ecommerce-staging.ACME-corp.com/docs](https://ecommerce-staging.ACME-corp.com/docs/index.html) as part of deploying the corresponding E-Commerce site.

## Publish Jobs

These manual jobs publish the various HTML build artifacts to docs.ACME-corp.com.

[DocsPost5xVersionedProProduction](https://jenkins.ACME-corp.com) - calls a script that transfers the `advanced` artifacts of the specified [5xVersioned-WebDocs](#5xVersioned-WebDocs) build to the production servers, and then tells them to expand the archived docs into the proper location on `docs.ACME-corp.com`.

[DocsPostTopPagesProduction](https://jenkins.ACME-corp.com) - calls a script that transfers the artifacts of the specified [DocSite-TopPages](#DocSite-TopPages) build to the production servers, and then tells them to expand the archived docs into the proper location on `docs.ACME-corp.com`.

[DocsPost6xVersionedProProduction](https://jenkins.ACME-corp.com) - calls a script that transfers the artifacts of the specified [6xVersioned-WebDocs](#6xVersioned-WebDocs) build to the production servers, and then tells them to expand the archived docs into the proper location on `docs.ACME-corp.com`.

[DocsPostBasicProduction](https://jenkins.ACME-corp.com) - calls a script that transfers the `basic` artifacts of the specified [5xVersioned-WebDocs](#5xVersioned-WebDocs) build to the production servers, and then tells them to expand the archived docs into the proper location on `docs.ACME-corp.com`.

!!! tip acme_aside end

	If `docs-staging` looks right, and you're not quite sure whether you should run [DocsPost5xVersionedProProduction](https://jenkins.ACME-corp.com) or [DocsPost6xVersionedProProduction](https://jenkins.ACME-corp.com) first to make production match, you can safely run **DocsPostResetProProduction** instead.

[DocsPostResetProProduction](https://jenkins.ACME-corp.com) - The versioned advanced docs can get out of sync if published in a different order than they were last built, which can get a little finicky if work was done to both the 5x and 6x docs since the last publish. To recover from this state in case we get into it, this manually-invoked job resets only the published **advanced** docs to whatever the current state of the advanced docs set on [docs-staging.ACME-corp.com/advanced/](https://docs-staging.ACME-corp.com/advanced/) is.

[DocsPostUserProduction](https://jenkins.ACME-corp.com) - calls a script that transfers the artifacts of the specified [EndUserDocs](#EndUserDocs) build to the production servers, and then tells them to expand the archived docs into the proper location on `help.ACME-corp.com`.

