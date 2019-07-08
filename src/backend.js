export class Ship {

  constructor(hp,money){
    this.hp = hp;
    this.fuel = 0;
    this.money = money;
    this.parts = 0;
    this.materials = 0;
    this.weapons = 0;
    this.shield = 0;
    this.crew = [];
    this.food = 0;
    this.speed = 0;
    this.distance = 0;
    this.spaceTime = 0;
  }
}


export class Crew {
    constructor(gender,age,occupation) {
      this.gender = gender;
      this.age = age;
      this.occupation = occupation;
      this.health = 100;
    }
}

export class Planets {
  constructor(environment,lifeforms,materials,gravity,trading) {
    this.environment = environment;
    this.lifeforms = lifeforms;
    this.materials = materials;
    this.gravity = gravity;
    this.trading = trading;
  }
}

export class SpaceEvents {
  gravityWell(){
    alert("gravityWell")
  }

  astroidBelt(){
alert("astroidBelt")
  }

  meteors(){
alert("meteors")
  }

  spacePirates(){
alert("spacePirates")
  }

  spaceVirus(){
alert("spaceVirus")
  }

  spaceMadness(){
alert("spaceMadness")
  }

  alienEncounter(){
alert("alienEncounter")
  }

  wormhole(){
alert("wormhole")
  }

  spaceStation(){
alert("spaceStation")
  }
  crewGain(){

  }
  foodGain(){

  }
  fuelGain(){

  }
  partsGain(){

  }
  ghostStation(){

  }
}
