
        
    class Followers {
        // cria método para buscar noticias no json
        buscafollowers() {
          // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
          return fetch("./follow.json")
        }
      }
   

class Seguir {
    
    constructor() {
      this.followers = document.querySelector("#follower")
    }
    // monta o HTML do card com os dados do JSON
    mostraFollowers(dados) {
  
      // cria uma variavel que ira armazenar todo esse HTML
      let seguir = ''

      dados.followers.map(function (follower) {
        // adiciona a variavel card todo o HTML com as informações
        // += serve para adicionar sem sobrescrever
            seguir += `
        <li class="tweet-card" "seguir">
          <div class="tweet-content">
            <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
            <div class="tweet-header">
              <span class="fullname">
                <strong>${follower.nome}</strong>
              </span>
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


 