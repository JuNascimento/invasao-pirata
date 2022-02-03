const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var motor, mundo
var chao
var fundoImagem

function preload() {
  fundoImagem = loadImage('assets/background.gif')
}

function setup() {
  createCanvas(1200, 600)

  motor = Engine.create()
  mundo = motor.world

  rectMode(CENTER)

  var opcoes = {
    isStatic: true
  }

  chao = Bodies.rectangle(600, 598, 1200, 4, opcoes)
  World.add(mundo, chao)
}

function draw() {
  image(fundoImagem, 0, 0, 1200, 600)

  Engine.update(motor)

  rect(chao.position.x, chao.position.y, 1200, 4)
  
}