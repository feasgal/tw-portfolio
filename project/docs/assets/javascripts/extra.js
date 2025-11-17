
document.addEventListener("DOMContentLoaded", () => {
  // For external links...
  for (const link of Array.from(document.querySelectorAll(".md-typeset a[href^=http]"))) {
    // Open in a new tab.
    link.target = "_blank";
    // Prevent tabnabbing.
    link.rel = "noopener noreferrer";
  }
    
  // For code in line (code elements NOT inside pre elements)...
  // Note: most screen readers will already announce <code> elements as such, but this makes it explicit.
  for (const code of Array.from(document.querySelectorAll(".md-typeset code"))) {
    // set role and aria-label for screenreader accessibility
    code.setAttribute("role", "text");
    code.setAttribute("aria-label", "Code");
  }

  // For code blocks (code elements inside pre elements)...
  for (const codeblock of Array.from(document.querySelectorAll(".md-typeset pre > code"))) {
    // set role and aria-label for screenreader accessibility
    codeblock.setAttribute("role", "region");
    codeblock.setAttribute("aria-label", "Code block");
  }


});

