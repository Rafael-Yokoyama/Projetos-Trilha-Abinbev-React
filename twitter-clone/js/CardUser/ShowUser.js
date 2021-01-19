
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
