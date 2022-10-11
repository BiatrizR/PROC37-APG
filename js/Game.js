class Game {
  constructor() {}
 //2--mudar estado do jogo
  getState(){

  }

  //3-atualização dos dados de referencia
  update(state){

  }

  start() {
    //2.3 INCLUA A CLASSE DO JOGO
    player = new Player();
  }



  
  handleElements(){
    form.hide();
    form.titleImg.position(40, 40);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play(){
    this.handleElements();
    drawSprite();
  }
}
