# Tutorial: Create your first TDU project

**Time:** ~30 minutes  

!!! example "What you'll accomplish"

    Install Tech Doc Utility (TDU) and create a simple project with a basic document plan and source list.

!!! checklist "You need"

    -   A Windows 7 or later workstation.
    -   .NET Framework 4.0 or later.
    -   Microsoft Excel installed.
    -   At least one authoring tool, such as Adobe FrameMaker or Microsoft Word.
    -   Access to the Acme Tray on your system.
    -   A network folder that contains a small set of source data files you can use for this practice project.

## Step 1. Install TDU

1.   ![Acme Hub Screenshot](/img/tray.png){ align=right width=100 }

    In your Windows System Tray, right-click the **Acme** icon.

1.   Select **Tech Doc Utility**.
1.   When the installer prompt appears, click **OK** to approve the installation.

TDU installs itself the first time you launch it this way. On later launches, it checks for updates and installs the latest version if needed.
{ .clear-right }

## Step 2. Start a new project

1.   ![New Project Screenshot](https://placehold.co/600x400/c3e3ff/000000/png?text=New+Project+Screenshot&font=noto-sans){ .inline .end }

    Launch **Tech Doc Utility** from the Acme Tray.

1.   On the startup page, click **New**.
1.   Enter a name for your practice project, for example `TDU Demo Project`.
1.   Confirm that the new project opens in its own tab.

## Step 3. Enter required metadata

1.   Go to the **Metadata** tab.

1.   Fill in at least the required fields:

    -   ![Metadata Screenshot](https://placehold.co/600x400/c3e3ff/000000/png?text=Metadata+Screenshot&font=noto-sans){ .inline .end }

        **Master Record**:
        Enter the ID of the appropriate master record in the Acme database. For this tutorial, use the test ID `ABCD1234`.

    -   **Sources**:
        Browse to and select the main folder that contains your practice source data. This is the folder TDU will scan, index, and open when you search or correlate source data.

    -   **Documents**:
        Choose or create a folder where TDU will create new documents.

    -   **Author**:
        Add yourself as an author using the format `firstname.lastname` that matches your internal directory.

1.   Save the project.

## Step 4. Generate the source list

![Sources Screenshot](https://placehold.co/600x400/c3e3ff/000000/png?text=Sources+Screenshot&font=noto-sans){ .inline .end }

1.   Go to the **Sources** tab.

1.   Click **Create source list**.

TDU scans the Sources folder and builds a source list for the project. When processing finishes, you should see your research files listed in the Sources tab.

!!! tip

    The more files in the Sources folder, the more time and system resources this step will use. For this first project, keep the folder small.

## Step 5. Add documents to the document plan

You can either import a plan from a spreadsheet or add a few documents manually.

<div class="grid cards" markdown>

-   **Import from spreadsheet**

    ---

    1.  In Excel, create a small spreadsheet with a few documents you want in this project. Include columns that match your internal template for document plans.
    1.  Save the spreadsheet as `.xlsx`, `.xls`, or `.csv`.
    1.  In TDU, go to the **Document Plan** tab.
    1.  Use the import option to load your spreadsheet.

        ![Import Doc Plan Screenshot](https://placehold.co/600x400/c3e3ff/000000/png?text=Import+Doc+Plan+Screenshot&font=noto-sans){ .inline }

-   **Add documents manually**

    ---
    
    1.  In the **Document Plan** tab, right-click in the document list.
    1.  Choose **Add Chapter**, **Add Subject**, or **Add Task**.
    1.  In the pop-up dialog, enter the requested information for each new document.
    1.  Repeat until you have a small set of documents in your plan.

        ![New Document Screenshot](https://placehold.co/600x400/c3e3ff/000000/png?text=New+Document+Screenshot&font=noto-sans){ .inline }

</div>


!!! success

    You now have a basic TDU project that you can use to explore correlation, annotation, and reporting features.

    -   The project opens correctly and shows your project name.
    -   The Metadata tab contains your required fields.
    -   The Sources tab lists your source data.
    -   The Document Plan tab lists your documents.
