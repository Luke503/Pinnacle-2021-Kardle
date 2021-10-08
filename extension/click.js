document.getElementById('submitbutton').addEventListener('click', function(){

    chrome.tabs.executeScript({
        code:"var amount = " + String(document.getElementById('moneyamt').value)
    });
    chrome.tabs.executeScript({
        file:"foreground.js"
    });


});
