
// on click character you want all others move to fight area
$(".character").on("click", function(event) {
    var $this = $(this); // this is just for performance
  if(!$this.hasClass('character'))
    $('.character').toggleClass(".mainCharacter");
    // this empties the array need to make it so it does not empty one clicked so maybe change something idk
    $(".char").empty();
});

// click character you want to fight

// on click of button have character fight opponent loses health first if dies does not hit back alse display damage done and recieved

// also need to update attack damage each time for player but not for opponent

