class Followers {
    // cria método para buscar noticias no json
    buscafollowers() {
      // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
      return fetch("./json/follow.json")
    }
  }
