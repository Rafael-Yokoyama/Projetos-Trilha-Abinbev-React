class User {
    // cria método para buscar noticias no json
    buscauser() {
      // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
      return fetch("./json/usuario.json")
    }
  }


  class  TextUser{
    
    constructor() {
      this.users = document.querySelector("#user")
    }
   
    mostrauser(dados) {
      
        localStorage.setItem("user_name", dados[0].nome)
        let userStorage = localStorage.getItem("user_name")
        console.log(dados)
  
    
      let seguir = ''

        seguir += `

        <div class="profile-header" id="user">
        
        <h3 class="profile-fullname"><a>${userStorage}<a></h3>
        <h2 class="profile-element"><a>${dados[0].nome}</a></h2>
        <a class="profile-element profile-website" hrerf=""><i
            class="octicon octicon-link"></i>&nbsp;jonvadillo.com</a>
        <a class="profile-element profile-website" hrerf=""><i
            class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
        <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${dados[0].cadastro}</h2>
        <button class="btn btn-search-bar tweet-to-btn">Tweet to Jon Vadillo</button>
        </div>
        `
    
   
  
      this.users.innerHTML = seguir
    }
  }



  class Statistics {
   
    GetStatistics() {
        return fetch("./json/usuario.json")
    }
}


class UStatistics {
    constructor () {
        this.statistic = document.querySelector("#statistic")
    }
    ShowStatistics(dados) {
        let RStatistcs = ''
       
    
        RStatistcs += 
        `   <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Following</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Followers</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Likes</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
            </a>
    
            `
        this.statistic.innerHTML = RStatistcs

        
}




}


