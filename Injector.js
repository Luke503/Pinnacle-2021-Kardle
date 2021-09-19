//var value = ${intValue}

//you may not need cors
//fetch('https://yourapi').then(function (response) {
fetch("https://localhost:12345/", {mode: 'cors'}).then(function (response) {
//fetch(`https://localhost:44320/sampleformdata/?value=${value}`, {mode: 'cors'}).then(function (response) {
    // The API call was successful!
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (data) {
    // This is the JSON from our response
    fillforms(data);
    console.log(data);
}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});

function fillforms(data){

    fillField(document.querySelector('input[name="name_on_card"]'), data.name);
    fillField(document.querySelector('input[name="exp_date"]'), data.date);
    fillField(document.querySelector('input[name="card_no"]'), data.number);
    fillField(document.querySelector('input[name="cvv"]'), data.cvv);

    
}

function fillField(selector, value)
{
    var field = selector();
    fillField(field, value);
}


function fillField(field, value){
    if(field){
        field.value = value;
    }  
}