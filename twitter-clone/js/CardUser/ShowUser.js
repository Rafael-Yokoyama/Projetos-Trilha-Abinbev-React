
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
        <h2 class="profile-element"><a>${dados[0].usuario}</a></h2>
        <span class="profile-element"><a> "A vida é um algoritmo o problema é saber se nos o controlamos ou ele nos controla"</a></span>
       
        <a class="profile-element profile-website" hrerf=""><i
            class="octicon octicon-link"></i>&nbsp;rafayokoyama.com</a>
        <a class="profile-element profile-website" hrerf=""><i
            class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
        <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${dados[0].cadastro}</h2>
        <button class="btn btn-search-bar tweet-to-btn">Tweet </button>
        </div>
        `
    
  
      this.users.innerHTML = seguir
    }
  }
