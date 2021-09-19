document.getElementById('submitbutton').addEventListener('click', function(){

    chrome.tabs.executeScript({
        file:"foreground.js"
    });


});
