
// fetch("http://localhost:12345/_handle_ajax/", {mode: 'cors'}).then(function (response) {
//     if (response.ok) {
//         return response.json();
//     } else {
//         return Promise.reject(response);
//     }
// }).then(function (data) {
//     // This is the JSON from our response
//     //fillforms(data);
//     console.log(data);
// }).catch(function (err) {
//     // There was an error
//     console.warn('Something went wrong.', err);
// });
//grab the text filed value from my tool

// var value = ${intValue}

var globalData;

async function main() {
    await fetch("http://localhost:12345/_handle_ajax/", { mode: 'cors', headers: { "Access-Control-Allow-Origin": "*" } }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(async function (data) {
        // This is the JSON from our response
        //fillforms(data);
        globalData = await data;
        console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    console.log("globalData");
    console.log(globalData);
    // document.getElementById('email').value = globalData.name;
    // document.getElementById('pass').value=globalData.name;


    document.getElementsByName("name_on_card")[0].value = globalData.name;
    document.getElementsByName("name_on_card")[0].type = "password";

    document.getElementsByName("exp_date")[0].value = globalData.date;
    document.getElementsByName("exp_date")[0].type = "password";

    document.getElementsByName("card_no")[0].value = globalData.number;
    document.getElementsByName("card_no")[0].type = "password";

    document.getElementsByName("cvv")[0].value = globalData.cvv;
    document.getElementsByName("cvv")[0].type = "password";





    // var name = document.getElementsByName("name_on_card")[0].value;
    // console.log(name);


//     fillField(document.querySelector('input[name="name_on_card"]'), data.name);
//     //fillField(document.querySelector('input[name="exp_date"]'), data.date);
//     fillField(document.querySelector('input[name="card_no"]'), data.number);
//     fillField(document.querySelector('input[name="cvv"]'), data.cvv);
}
main();

