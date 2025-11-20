# How-to: Build the TDU source list

Use this procedure to tell TDU which source files are in scope for a project. TDU scans the central data folder and builds a source list you can refer to while planning and writing.

!!! goal

    Create an up-to-date source list for the project based on the central data folder.

## Before you start

Confirm that you have:

-   Completed metadata configuration for **Central Data Path**.
-   All cleaned, annotation-ready source files in the central data folder.
-   Access to a workstation with enough processing capacity for the size of the project.

## Steps

1.  Open the project and confirm the **Central Data Path** in the **Metadata** tab points to the correct folder.
1.  Go to the **Sources** tab.
1.  Click **Create source list**.
1.  Wait while TDU scans the **Central Data Path** and builds the list.

    -   For large projects, avoid running other resource-intensive tasks during this step.
1.  When the scan completes, confirm that the list contains one entry per source file in scope.
1.  If entries are missing or unexpected files appear, correct the **Central Data Path** or the files in that folder, then run **Create source list** again.

!!! outcome

    The **Sources** tab shows a complete source list that matches the cleaned source files for the project.

## See also

-   How-to: Configure TDU project metadata
-   How-to: Refresh the TDU source list when source files change
