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
let multiplier = 1;
let mainHealth = 0;
let character = "";
let fighting = "";
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
  if (character == "obiWan" || character == "darthMaul") {
  var audio = new Audio('./assets/audio/lightsaber.mp3');
audio.play();
  }
  if (character == "bobaFett") {
    var audio = new Audio('./assets/audio/LaserBlast.mp3');
    audio.play();
  }
  if (character == "rancor") {
    var audio = new Audio('./assets/audio/RancorRoar.mp3');
    audio.play();
  }
  let mainAttack = players[character].attack * multiplier;
  multiplier++
  // this sets it back each time
  fighterHealth = fighterHealth - mainAttack;
  $("#fighting .health").text(fighterHealth)
  if (fighterHealth <= 0) {
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
  if (mainHealth <= 0) {
    $(".main-character").remove();
    $("#fight").hide();
    $("#results").text("You lost!")
    $("#restart").show();
  }
  $("#results").text(character + " hits " + fighting + " for " + mainAttack + " " + fighting + " hits " + character + " for " + fighterCounterAttack)
  }
}

function restart() {
  location.reload();
}

// // click character you want to fight should put it into id fighter should also make button id fight visable

// // on click of button have character fight opponent loses health first if dies does not hit back alse display damage done and recieved
// // also have this log in probably instru the damage dealt and recieved

// // // also need to update attack damage each time for player but not for opponent(says should double each time player attacks)
