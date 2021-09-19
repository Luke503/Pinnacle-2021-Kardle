from stellar_sdk import Server, Keypair, TransactionBuilder, Network
import requests
# import urllib.request



urlstring = "https://api.nomics.com/v1/currencies/ticker?key=e8dc88460495df57ac7d9c54ddc1460aab3f6f9a&ids=XLM&interval=1d,30d&convert=USD&per-page=100&page=1"
# print(urllib.request.urlopen(url).read())
# print('here1')
# account_id = "GABTNYYBXBAQF4N6NXG7LMKTVKQ63I4JVKIO3T77IRGUSDCZXZ4D3N5M"
# urlstring = "https://horizon-testnet.stellar.org/accounts/" + account_id
r = requests.get(url = urlstring)
# print('here2')
data = r.json()
# print('here3')
# # extracting data in json format
# data = r.json()
# balance = data['balances'][0]['balance']
# print(balance)
print(data[0]['price'])