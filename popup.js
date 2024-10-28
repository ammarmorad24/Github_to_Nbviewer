document.getElementById("openNbviewer").addEventListener("click", function () {
    // Get the current active tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentUrl = tabs[0].url;
  
      // Check if the URL is a GitHub repository link
      if (currentUrl.startsWith("https://github.com/")) {
        const nbviewerUrl = currentUrl.replace(
          "https://github.com/",
          "https://nbviewer.org/github/"
        );
  
        // Open the NBViewer URL in a new tab
        chrome.tabs.create({ url: nbviewerUrl });
      } else {
        alert("The current page is not a valid GitHub repository URL.");
      }
    });
  });
  