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
