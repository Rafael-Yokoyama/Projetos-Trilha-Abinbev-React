class User {
    // cria método para buscar noticias no json
    buscauser() {
      // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
      return fetch("./json/usuario.json")
    }
  }