
$(".pick").on("click", function(event) {
  $(this).addClass("main-character")
  // need to figure out how to remove all of pick seemso to take out but still running for some reason
  $("div").removeClass("pick").addClass("fight")
  $(".main-character").appendTo("#main-character")
  $(".main-character").removeClass("fight")
  $("#instr").text("Choose a character to fight")
})

$(".fight").on("click", function(event) {
  $(this).removeClass("fight").addClass("fighting")
  $(".fighting").appendTo("#fighting")
  $("#fight").show();
})

// // click character you want to fight should put it into id fighter should also make button id fight visable

// // on click of button have character fight opponent loses health first if dies does not hit back alse display damage done and recieved
// // also have this log in probably instru the damage dealt and recieved

// // // also need to update attack damage each time for player but not for opponent(says should double each time player attacks)
