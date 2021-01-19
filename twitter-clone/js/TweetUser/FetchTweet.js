class Tweet {
    // cria método para buscar noticias no json
    buscatweets() {
      // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
      return fetch("./json/tweets.json")
    }
  }
