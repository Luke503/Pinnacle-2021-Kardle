
document.getElementById("submitbutton").addEventListener("click", requestCard);

function requestCard(){

    console.log("Value: " + document.getElementById("moneyamt").value);

    $.ajax({ url: "http://127.0.0.1:1234/_handle_ajax/",
    crossDomain: true,
    data:{
        userID:"davey",
        requestAmount: document.getElementById("moneyamt").value
    },
    success: function(response){
        console.log("Response: " + response)

    },

    error: function(e, s, t) {
        console.log("ERROR OCCURRED");
        console.log(e);
        console.log(s);
        console.log(t);
      }

    })
}
