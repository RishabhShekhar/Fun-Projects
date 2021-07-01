$('h1').click(function() {
  $(this).text("i was changed")
  console.log('There was a click');
})
$('li').click(function(){
  console.log("any li clicked");
})
//Key Press

$('input').eq(0).keypress(function(event){
  if(event.which==13){
  $('h3').toggleClass('turnBlue')
}
  console.log(event);
})

//on method

$('h3').on('mouseenter',function(){
  $(this).toggleClass('turnRed')
})
$('input').eq(1).on('click',function(){
  // $(".container").fadeOut(3000)
  $(".container").slideUp(3000)

})
