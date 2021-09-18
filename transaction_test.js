# Anj pays $10 to Dv 
from stellar_sdk import Server, Keypair, TransactionBuilder, Network

anj_keypair = Keypair.from_secret("")
dv_address = ""

server = Server("https://horizon-testnet.stellar.org")
anj_account = server.load_account(anj_keypair.public_key)
base_fee = server.fetch_base_fee()
transaction = (
    TransactionBuilder(
        source_account=anj_account,
        network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
        base_fee=base_fee,
    )
    .add_text_memo("money")
    .append_payment_op(dv_address, "10.25", "XLM")
    .build()
)
transaction.sign(anj_keypair)
response = server.submit_transaction(transaction)
print(response)
