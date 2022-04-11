class Canhao {
  constructor() {
    var opcoes = {
      isStatic: true
    }

    this.corpo = Bodies.rectangle(180, 110, 130, 100, opcoes)
    World.add(mundo, this.corpo)
  }

  desenha() {
    noFill()
    rect(this.corpo.position.x, this.corpo.position.y, 130, 100)
  }
}