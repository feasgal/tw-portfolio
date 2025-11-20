# Tech Doc Utility

Tech Doc Utility (TDU) is an internal desktop workspace for documentation projects. It sits on top of your existing systems and gives authors, editors, and leads a single place to see what they are making, why they are making it, and which inputs each document depends on. Instead of juggling spreadsheets, shared folders, and tool specific dashboards, you get one project view that knows about your source data, document plan, and production folders.

TDU does not replace your authoring tools, source control, or time tracking. It connects to them and keeps the project view in sync with the work that is actually happening.

## When to use TDU

Use TDU when you need to deliver a body of documentation that draws from shared research and shared infrastructure, for example when you need to:

-   Manage a multi document project that reuses the same interview notes, specs, or logs across many deliverables.
-   Coordinate work across multiple authors, templates, or teams that share the same production folders.
-   Track project progress, document states, and dependencies in a way that survives handoffs and staff changes.
-   Publish review-ready PDFs to known locations without everyone maintaining their own file paths and shortcuts.

It works best in environments where project data, templates, and time tracking already live in shared systems and network locations, and you want one interface that understands all of them. If you currently rely on a mix of spreadsheets, personal checklists, and hallway updates to answer "what is the status of this project", TDU gives you a single place to look instead.

For very small efforts, such as a single author producing one or two short documents without shared research or handoffs, the setup overhead might not be worth it. In those cases, local files and simple checklists are usually enough.

## How it fits into your workflow

A project in TDU is a container for everything you need to deliver a set of documents to a customer.

At a high level, each project in TDU:

-   Connects to a central **master record** so burnup and burndown reports match what the rest of the organization sees.
-   Points to one or more **source data folders** that hold the inputs you use to create documents.
-   Maintains a **document plan** that defines every deliverable, its owner, and its current status.
-   Tracks **correlations** between source data and planned documents so you can see what evidence supports which content.
-   Produces **reports** that summarize project completion, document status, correlation coverage, and document dependencies.

You still draft content in your usual tools. The project view in TDU tells you which documents exist, where they live, who owns them, and which research files they depend on. When a spec changes or a log file is updated, you can see which documents might be affected instead of relying on memory.

## Core capabilities

### Planning and structure

The planning views keep the document list, ownership, and status in one place. You see the set of deliverables for the project, who is responsible for each one, and how they relate to one another.

Use the planning views to:

-   Define the document plan for the project.
-   Keep the plan up to date as scope changes.
-   Align document statuses with your team workflow.
-   Capture relationships between documents that share inputs or content.

This gives authors and leads a shared reference for what exists and where work is currently focused.

### Research data and correlation

The research views give you a project level view of the source material behind your documents. Instead of navigating individual folders, you work with a single list that represents the inputs you care about.

Within a project, you can:

-   Register the main research sources for the project.
-   Link research items to planned documents.
-   See which material has not yet been linked to any document.

These links provide a visible connection between evidence and content. When a key input changes, you can trace which documents may need attention.

### Authoring and production

The authoring and production views focus on the files that authors and editors use in their daily work. Each document in the plan can be connected to a working file and to related production tasks.

From the authoring and production views, you can:

-   Create starting files for new documents from common patterns.
-   Associate documents with owners and working locations.
-   Record illustration or other requests for specific documents.
-   Open external tools.
-   Publish  finished documents for review.

This keeps the connection between the document plan and the working files so you don't have to track file locations and responsibilities separately.

### Reporting and visibility

The reporting views summarize the state of the project based on the plan and the links between documents and research. Reports use the same underlying data that authors and leads work with elsewhere in the project.

Reports cover:

-   Overall project completion and per document status.
-   How research material and documents relate at a project level.
-   Dependencies between documents inside the project.

These reports let project members and stakeholders review progress and coverage without exporting data to another tool.
