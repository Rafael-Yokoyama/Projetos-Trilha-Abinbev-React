
        

class Seguir {
    
    constructor() {
      this.followers = document.querySelector("#follower")
    }
    // monta o HTML do card com os dados do JSON
    mostraFollowers(dados) {
  
      // cria uma variavel que ira armazenar todo esse HTML
      let seguir = ''
console.log(follower)
      dados.followers.map(function (follower) {
        // adiciona a variavel card todo o HTML com as informações
        // += serve para adicionar sem sobrescrever
            seguir += `
        <li class="tweet-card" "seguir">
          <div class="tweet-content">
            <img class="tweet-card-avatar" src="${follower.foto}" width="100px" alt="">
            <div class="tweet-header">
              <span class="fullname">
                <strong>${follower.nome}</strong>
              </span> <br>
              <span class="username">${follower.usuario}</span>
            </div>

            <button class="btn btn-follow">Follow</button>
          </div>
        </li>
        `
       
      })
  
      this.followers.innerHTML = seguir
    }
  }


 