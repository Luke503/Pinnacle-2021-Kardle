# Anj pays $10 to Dv 
from stellar_sdk import Server, Keypair, TransactionBuilder, Network

anj_keypair = Keypair.from_secret("SBFZCHU5645DOKRWYBXVOXY2ELGJKFRX6VGGPRYUWHQ7PMXXJNDZFMKD")
bob_address = "GA7YNBW5CBTJZ3ZZOWX3ZNBKD6OE7A7IHUQVWMY62W2ZBG2SGZVOOPVH"

server = Server("https://horizon-testnet.stellar.org")
alice_account = server.load_account(anj_keypair.public_key)
base_fee = server.fetch_base_fee()
transaction = (
    TransactionBuilder(
        source_account=alice_account,
        network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
        base_fee=base_fee,
    )
    .add_text_memo("Hello, Stellar!")
    .append_payment_op(bob_address, "10.25", "XLM")
    .build()
)
transaction.sign(anj_keypair)
response = server.submit_transaction(transaction)
print(response)
