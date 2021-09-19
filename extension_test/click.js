

document.getElementById('fillForm').addEventListener('click', function(){
    
// var globalData;

//     fetch("http://localhost:12345/_handle_ajax/", {mode: 'cors'}).then(function (response) {
//         if (response.ok) {
//             return response.json();
//         } else {
//             return Promise.reject(response);
//         }
//     }).then(function (data) {
//         // This is the JSON from our response
//         //fillforms(data);
//         globalData = data;
//         console.log(data);
//     }).catch(function (err) {
//         // There was an error
//         console.warn('Something went wrong.', err);
//     });

//     console.log("DATAS")
//     console.log(globalData);
//     console.log(JSON.stringify(globalData));
    
//     chrome.tabs.executeScript({
//         code: 'var data = ' + JSON.stringify(globalData)
//     },)

    chrome.tabs.executeScript({
        file:"foreground.js"
    });

    // document.getElementById('email').value="anj";
    // document.getElementById('pass').value="1";


});





   
