import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Ship,Crew,Planets,SpaceEvents} from "./backend.js";




$(function(){
  let missionEnvoy = new Ship(100,500);
  let missionColon = new Ship;
  let spacemonths = 0;
  let crew1 = new Crew("male",35,"Snitch");
  let crew2 = new Crew("male",25,"Pianist");
  let crew3 = new Crew("female",99,"Witch");
  let crew4 = new Crew("female",17,"Minor");
  let whyGod = new SpaceEvents;
  missionEnvoy.crew = [crew1,crew2,crew3,crew4];
  let pause = 1;

  $("#d0").click(function(){
    if (pause === 1) {
      pause = 2;
    } else {
      pause = 1;
    }
    if (pause === 2) {
      clearInterval(timer);
    } else {
      timer = setInterval(logM, 700);
    }
  });



  let timer = setInterval(logM, 700);

        function logM() {
       missionEnvoy.spaceTime += 1;
       spacemonths += 1;
       missionColon.distance += 1000;
       $("#a0").html(spacemonths);
      $("#b0").html(missionColon.spaceTime);
      $("#c0").html(missionColon.distance);
       if (spacemonths >= 12) {
         spacemonths= 0;
         missionColon.spaceTime += 1;
       }
       spaceHappenings(missionEnvoy.spaceTime,missionColon.distance);
     }

  function spaceHappenings(gametime,gamedist) {
    if (gametime === 20){
      whyGod.gravityWell();
    }
    if (gamedist === 30000) {
      whyGod.spaceStation();
    }


  }





});
