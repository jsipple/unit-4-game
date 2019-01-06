let players = {
rancor : {
  health: 500,
  attack: 30,
  counterAttack: 40
},

obiWan: {
  health: 250,
  attack: 15,
  counterAttack: 15
},

bobaFett: {
  health: 200,
  attack: 30,
  counterAttack: 40
},

darthMaul: {
  health: 300,
  attack: 25,
  counterAttack: 25
}
}
let multiplier = 1
let mainHealth = 0;
let character = ""
let fighting = ""
let fighterHealth = 0;
let fighterCounterAttack = 0;

// need to add a restart and 
$(".pick").on("click", function(event) {
  $(this).addClass("main-character")
  $("section").removeClass("pick").addClass("fight");
  $(".main-character").appendTo("#main-character");
  $(".main-character").removeClass("fight");
  $("#instr").text("Choose a character to fight");
  // why does this need to be in here rather than after(doesn't work if after)
  // they are also getting main-character class looks like still running pick but then running this
  $(".fight").on("click", function(event) {
    $(this).removeClass("fight").addClass("fighting");
    // this removes main-character class look into ways of doing this without needing to add this
    $(this).removeClass("main-character")
    $(".fighting").appendTo("#fighting");
    $("#fight").show();
    fighting = $(".fighting")[0].id;  
    fighterHealth = players[fighting].health;
    fighterCounterAttack = players[fighting].counterAttack;
    if (mainHealth == 0) {
    character = $(".main-character")[0].id;
    mainHealth = players[character].health;
    }
  });
});

$(".tatooine").on("click", function changeTheme() {
  document.body.style.backgroundImage = "url('./assets/images/tatooine.jpeg')";
});
$(".hanger").on("click", function changeTheme2() {
  document.body.style.backgroundImage = "url('./assets/images/hanger.jpg')"; 
});
$(".hoth").on("click", function changeTheme3() {
  document.body.style.backgroundImage = "url('./assets/images/background.jpg')"; 
});


function Attack() {
  // right now sets back each time
  // add a value to the id
  // need to grab the p id with this
  // this sets it back each time
  let mainAttack = players[character].attack * multiplier;
  multiplier++
  // this sets it back each time
  fighterHealth = fighterHealth - mainAttack;
  $("#fighting .health").text(fighterHealth)
  if (fighterHealth < 0) {
    console.log(mainHealth)
  $(".fighting").remove();
  $("#fight").hide();
  if ($(".fight")[0]) {
    $("#results").text(character + " has defeated " + fighting)
  } else {
    $("#results").text("Congatulations you won!")
    $("#restart").show();
  }
  } else {
    mainHealth = mainHealth - fighterCounterAttack
  $("#main-character .health").text(mainHealth);
  $("#results").text(character + " hits " + fighting + " for " + mainAttack + " " + fighting + " hits " + character + " for " + fighterCounterAttack)
  }
}
// need to figure out a way to add this back in thinking on it probably easies is windows onload but would rather just reset it
// function restart() {
//   $("#game").innerhtml(<section class="char pick" id="rancor">
//   <img class="character" src="./assets/images/Rancor.jpeg">
//   <p class="health" id="rancorHealth">500</p>
//   </section>
//   <section class="char pick" id="bobaFett">
//   <img class="character" src="./assets/images/Boba-Fett.jpeg">
//   <p class="health" id="boboFettHealth">200</p>
//   </section>
//   <section class="char pick" id="obiWan">
//   <img class="character" src="./assets/images/obi-wan.jpg">
//   <p class="health" id="obiWanHealth">250</p>
//   </section>
//   <section class="char pick" id="darthMaul">
//   <img class="character" src="./assets/images/Darth-Maul.jpeg">
//   <p class="health" id="darthMaulHealth">300</p>
//   </section>)
// }

// // click character you want to fight should put it into id fighter should also make button id fight visable

// // on click of button have character fight opponent loses health first if dies does not hit back alse display damage done and recieved
// // also have this log in probably instru the damage dealt and recieved

// // // also need to update attack damage each time for player but not for opponent(says should double each time player attacks)
