
document.getElementById("submitbutton").addEventListener("click", requestCard);

// function waitingUpdateDoc(){

// }

function successUpdateDoc(){
    document.getElementById("formText").innerHTML = "<h1>Your transaction was processed successfully!</h1>";
    document.getElementById("moneyamt").style.visibility = "hidden";
    document.getElementById("submitbutton").style.visibility = "hidden";
}

function requestCard(){
    document.getElementById("formText").innerHTML = "<h1>Please wait while your transaction is processed...</h1>";
    document.getElementById("moneyamt").style.visibility = "hidden";
    document.getElementById("submitbutton").style.visibility = "hidden";

    console.log("Value: " + document.getElementById("moneyamt").value);

    $.ajax({ url: "http://127.0.0.1:12345/_handle_ajax/",
    crossDomain: true,
    type:"POST",
    dataType: "json",
    data:{
        userID:"davey",
        requestAmount: document.getElementById("moneyamt").value
    },
    success: function(response){
        console.log("Success!");
        console.log("Response: " + response["test"]);
        successUpdateDoc();
    },

    error: function(e, s, t) {
        console.log("ERROR OCCURRED");
        console.log(e);
        console.log(s);
        console.log(t);
      }

    });
}

