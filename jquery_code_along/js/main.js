// PART 1 - Functions review
// 1. Write a function and name it addMagic
	// Inside the function, log "Magic!" to the console using console.log()


// 2. Call the addMagic function.
function addMagic() {
  // console.log("Magic!");
  // $("h1").fadeOut(4000);
  $("button").on("click", function(){
    // $("h1").fadeOut(5000);
    $("h1").text("i am learning a new method");
    $("h1").slideToggle(400);
    $("h2").css("background-color","#ab82ff");
    $("img").attr("src","images/fun.jpg");
    $("h6").addClass("footer");
  })
}

addMagic();
