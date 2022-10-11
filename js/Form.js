class Form {
  constructor() {
    //1.1--CRIE OS ELEMENTOS DA CLASSE
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "game title");
    this.greeting = createElement("h2");
    
  }

  setElementPosition() {
    //1.2-- DEFINA A POSIÇÃO DOS ELEMENTOS
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }
  
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }



  hide() {
   //1.3-- USE A FUNÇÃO PARA DESAPARECER OS ELEMENTOS
  }

  handleMousePressed() {
   // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA

   /* O símbolo usado para escrever a mensagem abaixo (laranja) é a crase. */
  }

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
  }
}
