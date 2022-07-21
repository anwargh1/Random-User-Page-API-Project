class APIManager {
    constructor() {
      this.response = {};
    }
  
    getAll() {
      const API_URL = {
        USER_API: 'https://randomuser.me/api/?results=7',
        QUOTE_API: 'https://api.kanye.rest',
        POKE_API: `https://pokeapi.co/api/v2/pokemon/${
          Math.floor(Math.random() * 300) + 1
        }`,
        BACON_IPSUM_API:
          'https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text',
      };
      this.response.user = this.get(API_URL.USER_API);
      this.response.quote = this.get(API_URL.QUOTE_API);
      this.response.pokemon = this.get(API_URL.POKE_API);
      this.response.about = this.get(API_URL.BACON_IPSUM_API);
    }
  
    get = function (url) {
      let response = null;
      $.ajax({
        method: 'GET',
        async: false,
        url: url,
        success: function (data) {
          response = data;
        },
        error: function (xhr, text, error) {
          console.log(text);
        },
      });
      return response;
    };
  }
  

   
   