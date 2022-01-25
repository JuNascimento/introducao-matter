const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var motor, mundo
var bola
var chao

function setup() {
  createCanvas(400,400);

  motor = Engine.create()
  mundo = motor.world

  ellipseMode(RADIUS)
  rectMode(CENTER)

  var opcoesBola = {
    frictionAir: 0.01,
    restitution: 0.95
  }

  bola = Bodies.circle(100, 20, 20, opcoesBola)
  World.add(mundo, bola)

  var opcoesChao = {
    isStatic: true
  }

  chao = Bodies.rectangle(200, 390, 400, 20, opcoesChao)
  World.add(mundo, chao)
}


function draw() {
  background('black');

  Engine.update(motor)

  fill('red')

  ellipse(bola.position.x, bola.position.y, 20, 20)
  rect(chao.position.x, chao.position.y, 400, 20)
}