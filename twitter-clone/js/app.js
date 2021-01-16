

// follow

const objetoFollowers = new Followers()

const objetoSeguir = new Seguir()


objetoFollowers.buscafollowers()
  // fetch realizado, uso o then para pegar a resposta 
  .then(function (resposta) {
    // converto a resposta em json
    resposta.json()
      // pego os dados convertidos em json  
      .then(function (dados) {
        // envio para o método .mostraFollowers dentro do meu objetoSeguir
        objetoSeguir.mostraFollowers(dados)
      })
  })


  //TWEETS

  const objetoTweet = new Tweet()
  const objetoText = new Texto()
  
  
  objetoTweet.buscatweets()
    
    .then(function (resposta) {

      resposta.json()
      
        .then(function (dado) {
         
          objetoText.mostratweet(dado)
        })
    })
  
// usuario
    
  const objetoUsers = new User()
  const objetoTextUser = new TextUser()
  
  objetoUsers.buscauser()
    
    .then(function (resposta) {

      resposta.json()
      
        .then(function (dado) {
         
          objetoTextUser.mostrauser(dado)
        })
    })

// estatisticas 

const GStatistics = new Statistics()
console.log(GStatistics.GetStatistics)

const StatisticsCard = new UStatistics()

GStatistics.GetStatistics()
    .then(function (response)  {
        response.json()

        .then(function (data)  {
            StatisticsCard.ShowStatistics(data)
        })
        
    })  

   


  


