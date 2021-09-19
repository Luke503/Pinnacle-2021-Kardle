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

    console.log("amount");
    console.log(amount);
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

    document.getElementsByName("address1")[0].value = globalData.address;
    document.getElementsByName("address1")[0].type = "password";

    document.getElementsByName("city")[0].value = globalData.city;
    document.getElementsByName("city")[0].type = "password";

    document.getElementsByName("state")[0].value = globalData.state;
    document.getElementsByName("state")[0].type = "password";

    document.getElementsByName("country")[0].value = globalData.country;
    document.getElementsByName("country")[0].type = "password";

    document.getElementsByName("zip_code")[0].value = globalData.zipcode;
    document.getElementsByName("zip_code")[0].type = "password";

    document.getElementsByName("phone")[0].value = globalData.phone;
    document.getElementsByName("phone")[0].type = "password";








    document.getElementsByName("amount")[0].value = amount;





    // var name = document.getElementsByName("name_on_card")[0].value;
    // console.log(name);


//     fillField(document.querySelector('input[name="name_on_card"]'), data.name);
//     //fillField(document.querySelector('input[name="exp_date"]'), data.date);
//     fillField(document.querySelector('input[name="card_no"]'), data.number);
//     fillField(document.querySelector('input[name="cvv"]'), data.cvv);
}



main();

async function cardCheck(){
    await fetch("https://www.walmart.com/orchestra/cartxo/graphql", { mode: 'cors', headers: { "Access-Control-Allow-Origin": "*" } }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(async function (data2) {
        // This is the JSON from our response
        //fillforms(data);
        globalData2 = await data2;
        console.log(data2);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

cardCheck();