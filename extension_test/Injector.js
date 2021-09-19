/*document.getElementById('email').value="anj";
document.getElementById('pass').value=data.name;

/*
//var value = ${intValue}

//you may not need cors
//fetch('https://yourapi').then(function (response) {
fetch("http://localhost:12345/_handle_ajax/", {mode: 'cors'}).then(function (response) {
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
console.log(data);


document.getElementByName('email').value="Anj@gmail.com";
document.getElementByName('pass').value="123456789";
*/
/*
function fillforms(data){

    fillField(document.querySelector('input[name="name_on_card"]'), data.name);
    //fillField(document.querySelector('input[name="exp_date"]'), data.date);
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

*/

