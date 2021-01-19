
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