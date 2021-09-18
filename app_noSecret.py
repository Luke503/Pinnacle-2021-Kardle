from flask import Flask, request, make_response, render_template, json, jsonify, session
import sys
from stellar_sdk import Server, Keypair, TransactionBuilder, Network
import requests


app = Flask(__name__)

@app.route("/")
def hello_world():
    print("Test1",file=sys.stderr)
    return render_template("dashboard.html")


@app.route("/_handle_ajax/", methods=['POST'])
def _handle_ajax():

    if request.method == "POST":
        userID = json.dumps(request.form['userID'])
        requestAmount = json.dumps(request.form['requestAmount'])

        print("Test",file=sys.stderr)
        print(userID + " requests " + requestAmount + " dollars.", file=sys.stderr)

        return jsonify({'test': requestStellar(request.form['requestAmount'])})



def requestStellar(amountUSD):
    # Alice pay 10.25 XLM to Bob

    # alice_keypair = Keypair.from_secret("SECRET")
    bob_address = "GABTNYYBXBAQF4N6NXG7LMKTVKQ63I4JVKIO3T77IRGUSDCZXZ4D3N5M"

    

    server = Server("https://horizon-testnet.stellar.org")
    alice_account = server.load_account(alice_keypair.public_key)
    base_fee = server.fetch_base_fee()
    transaction = (
        TransactionBuilder(
            source_account=alice_account,
            network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
            base_fee=base_fee,
        )
        .add_text_memo("Hello, Stellar!")
        .append_payment_op(bob_address, amountUSD, "XLM")
        .build()
    )
    transaction.sign(alice_keypair)
    response = server.submit_transaction(transaction)


    urlstring = "https://horizon-testnet.stellar.org/accounts/" + bob_address
    r = requests.get(url = "https://httpbin.org/ip")
    data = r.json()
    # extracting data in json format
    print(data,file=sys.stderr)



    return response


# @app.route('/')
# def index():
#     return render_template('index.html')


# Source: https://flask.palletsprojects.com/en/2.0.x/quickstart/
# https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3
# https://github.com/StellarCN/py-stellar-base

"""  Requester's webapp queries SERVER, SERVER queries provider, PROVIDER gives their blessing, SERVER 
asks requester's online stellar to transfer funds to provider's online wallet, SERVER makes purchase (type
in card info to browser?  Send request directly with card info?)    """
