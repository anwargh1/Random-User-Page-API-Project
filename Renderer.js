class Renderer {
    constructor(response) {
      this.emptyContainers();
      this.renderAll(response);
    }
  
    renderAll(response) {
      this.renderUser(response.user.results);
      this.renderQuote(response.quote);
      this.renderPokemon(response.pokemon);
      this.renderAbout(response.about);
    }
  
    emptyContainers() {
      $('.user-container').empty();
      $('.quote-container').empty();
      $('.pokemon-container').empty();
      $('.meat-container').empty();
      $('.friends-container').empty();
    }
  
    renderUser(results) {
      const source = $('#User-template').html();
      const template = Handlebars.compile(source);
      let newHTML = template(results[0]);
      $('.user-container').append(newHTML);
      const source2 = $('#Friends-template').html();
      const template2 = Handlebars.compile(source2);
      let newHTML2 = template2({ elements: results.slice(1) });
      $('.friends-container').append(newHTML2);
    }
  
    renderQuote(results) {
      const source = $('#Quote-template').html();
      const template = Handlebars.compile(source);
      let newHTML = template({ text: results.quote });
      $('.quote-container').append(newHTML);
    }
  
    renderPokemon(results) {
      const source = $('#Pokemon-template').html();
      const template = Handlebars.compile(source);
      let newHTML = template({ results });
      $('.pokemon-container').append(newHTML);
    }
  
    renderAbout(results) {
      const source = $('#About-template').html();
      const template = Handlebars.compile(source);
      let newHTML = template({ results });
      $('.meat-container').append(newHTML);
    }
  }
  
  