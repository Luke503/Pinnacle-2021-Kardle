const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0
  };

  const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      'gateway': 'Kardle',
      'gatewayMerchantId': 'BCR2DN6T26OYNBLX'
    }
  };

  const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];

  const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];

  const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: allowedCardAuthMethods,
      allowedCardNetworks: allowedCardNetworks
    }
  };

  const cardPaymentMethod = Object.assign(
    {tokenizationSpecification: tokenizationSpecification},
    baseCardPaymentMethod
  );

  const paymentsClient =
    new google.payments.api.PaymentsClient({environment: 'TEST'});

    const isReadyToPayRequest = Object.assign({}, baseRequest);
    isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];

    paymentsClient.isReadyToPay(isReadyToPayRequest)
    .then(function(response) {
      if (response.result) {
        // add a Google Pay payment button
      }
    })
    .catch(function(err) {
      // show error in developer console for debugging
      console.error(err);
    });
    
    const button =
    paymentsClient.createButton({onClick: () => console.log('TODO: click handler'),
    allowedPaymentMethods: []}); // make sure to provide an allowed payment method
document.getElementById('container').appendChild(button);

const paymentDataRequest = Object.assign({}, baseRequest);

paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];

paymentDataRequest.transactionInfo = {
    totalPriceStatus: 'FINAL',
    totalPrice: '123.45',
    currencyCode: 'USD',
    countryCode: 'US'
  };


  paymentsClient.loadPaymentData(paymentDataRequest).then(function(paymentData){
    // if using gateway tokenization, pass this token without modification
    paymentToken = paymentData.paymentMethodData.tokenizationData.token;
  }).catch(function(err){
    // show error in developer console for debugging
    console.error(err);
  });