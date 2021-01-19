
  const objetoTweet = new Tweet()
  const objetoText = new Texto()
  
  
  objetoTweet.buscatweets()
    
    .then(function (resposta) {

      resposta.json()
      
        .then(function (dado) {
         
          objetoText.mostratweet(dado)
        })
    })
  