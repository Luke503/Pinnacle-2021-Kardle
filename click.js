document.getElementById('fillForm').addEventListener('click', function(){
    //grab the text filed value from my tool
   

    chrome.tabs.executeScript({
        //send the value to be used by our script
    }, function() {
        //run the script in the file injector.js
        chrome.tabs.executeScript({
            file: 'injector.js'
        });
    });
  });
