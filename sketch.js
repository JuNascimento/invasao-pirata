const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var motor, mundo
var chao
var fundoImagem
var canhao, baseCanhao, bolaCanhao
var torre, torreImagem

function preload() {
  fundoImagem = loadImage('./assets/background.gif')
  torreImagem = loadImage('./assets/tower.png')
}

function setup() {
  createCanvas(1200, 600)

  motor = Engine.create()
  mundo = motor.world

  rectMode(CENTER)
  imageMode(CENTER)

  var opcoes = {
    isStatic: true
  }

  chao = Bodies.rectangle(600, 599, 1200, 2, opcoes)
  World.add(mundo, chao)

  torre = Bodies.rectangle(160, 350, 160, 310, opcoes)
  World.add(mundo, torre)

  canhao = new Canhao()

}

function draw() {
  background('red')
  image(fundoImagem, 600, 300, 1200, 600)

  Engine.update(motor)

  rect(chao.position.x, chao.position.y, 1200, 2)

  image(torreImagem, torre.position.x, torre.position.y, 160, 310)

  canhao.desenha()
  
}