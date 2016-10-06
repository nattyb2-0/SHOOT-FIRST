/////test to see if my page linked
console.log('hello');
//set up jquery for it to work upon the page loading
$( document ).ready(function() {
    console.log( "ready!" );
    CrossHairMove()
});

/* make my players diappear when they are clicked
create an array to store all my image. then create
a function taht changes the image display to hidden.
attach an event listener to the image array , along with
my function.*/
var $img = $('.gameimg');
function makeImagesDisappear() {
    $(this).css('visibility' , 'hidden');
}
$img.mousedown(makeImagesDisappear);

/* set the images visibilty to hidden so whe the game
loads you dont see them. then create an interval that
allows images to become visible again, and fade out
again as well.*/
$img.hide()
setInterval(function(){
 $img.fadeIn(4000)
  $img.fadeOut(4000)
}, 3000);

$crosshair = $('#crosshair')


/* create the movement of the crosshair.
  get the crosshair element(div)
  attach an event handler for mouse move
  get the x and y coordinates of the mouse movement on the page
  and attach that to the left and right margins of the crosshair
  so it moves relatively to the mouse movement
    */
  function CrossHairMove() {
    $(document).mousemove(function(e){
        $crosshair.css({
          'left':(e.pageX - 50),
          'top':(e.pageY-50)
        })
    })
  }
