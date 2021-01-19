  
    


class Texto {
    
    constructor() {
      this.tweets = document.querySelector("#tweet")
    }
    // monta o HTML do card com os dados do JSON
    mostratweet(dados) {
  
      // cria uma variavel que ira armazenar todo esse HTML
      let texto = ''

      dados.tweets.map(function (tweets) {
        // adiciona a variavel card todo o HTML com as informações
        // += serve para adicionar sem sobrescrever
            texto += `

            

              <li class="tweet-card">
              <div class="tweet-content" id="tweet">
                <div class="tweet-header" id="usuario">
                  <span class="fullname">
                    <strong >${tweets.nome}</strong>
                  </span>
                  <span class="username">${tweets.usuario}</span>
                  <span class="tweet-time">- ${tweets.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="${tweets.foto}" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0">${tweets.mensagem}
                     
            
                    <a href=""
                     <s></s><b>${tweets.hashtag}</b></a>
                   
                  </p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span>${tweets.comentarios} </span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${tweets.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${tweets.likes}</span>
                  </a>
                </div>
              </div>
            </li>
       

        `
      
      })
  
      this.tweets.innerHTML = texto
    }
  }

