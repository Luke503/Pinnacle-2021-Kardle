from flask import Flask
import sys

app = Flask(__name__)

@app.route("/")
def hello_world():
    print("Test1",file=sys.stderr)
    return "<p>Hello, World!</p>"


@app.route("/_handle_ajax/", methods=['POST'])
def _handle_ajax():

    if request.method == "POST":
        userID = json.dumps(request.form['userID'])
        requestAmount = json.dumps(request.form['requestAmount'])

        print("Test",file=sys.stderr)
        print(userID + " requests " + requestAmount + "dollars.", file=sys.stderr)

        return jsonify({'test': "RESPONSE TEST RECEIVED ")

# @app.route('/')
# def index():
#     return render_template('index.html')


# Source: https://flask.palletsprojects.com/en/2.0.x/quickstart/
# https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3


"""  Requester's webapp queries SERVER, SERVER queries provider, PROVIDER gives their blessing, SERVER 
asks requester's online steller to transfer funds to provider's online wallet, SERVER makes purchase (type
in card info to browser?  Send request directly with card info?)    """