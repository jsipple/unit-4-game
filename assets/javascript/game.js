
let rancor = {
  health: 500,
  attack: 30,
  counterAttack: 40
}

let obiWan = {
  health: 250,
  attack: 15,
  counterAttack: 15
}

let bobaFett = {
  health: 200,
  attack: 30,
  counterAttack: 40
}

let darthMaul = {
  health: 300,
  attack: 25,
  counterAttack: 25
}


$(".pick").on("click", function(event) {
  $(this).addClass("main-character")
  $("section").removeClass("pick").addClass("fight");
  $(".main-character").appendTo("#main-character");
  $(".main-character").removeClass("fight");
  $("#instr").text("Choose a character to fight");
  // why does this need to be in here rather than after(doesn't work if after)
  $(".fight").on("click", function(event) {
    $(this).removeClass("fight").addClass("fighting");
    $(".fighting").appendTo("#fighting");
    $("#fight").show();
  });
});




function Attack() {
  let i = 1

  i++
}

// // click character you want to fight should put it into id fighter should also make button id fight visable

// // on click of button have character fight opponent loses health first if dies does not hit back alse display damage done and recieved
// // also have this log in probably instru the damage dealt and recieved

// // // also need to update attack damage each time for player but not for opponent(says should double each time player attacks)
