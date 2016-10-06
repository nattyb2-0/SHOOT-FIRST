/////test to see if my page linked
console.log('hello');
//set up jquery for it to work upon the page loading
$( document ).ready(function() {
    console.log( "ready!" );
    CrossHairMove();
    movePlayer();
    //move();
});
/*create global variables needed for this game*/
var $maxDista
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
again as well.
$img.hide()
setInterval(function(){
 $img.fadeIn(1000)
  $img.fadeOut(1000)
}, 200);*/

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

/*function move() {
  $("img").animate({
            left: '+=5px',
            height: '+=100px',
            width: '+=10px'

          },300)
  console.log(left);
}

setInterval(function(){
  move();
}, 300);*/

function movePlayer() {

  var $player = $('#23');
  var $player2 = $('#22');

  var $start = 0;
  var $top = 0;

  setInterval(function() {
  if ($start < 1200) {
  $start +=120;

  $player.css('left', $start +"px");
  $player.css('top', $top + "px");

}else {
  $start = 0;

}
  if ($top <= 600) {
     $top +=80;

    $player.css('top', $top + "px");

  }else {
    $top = 0;

  }
  },200);
}


/*make backgroun images change every couple of seconds.
create an array with all the various images
loop through the array
add a set interval function in the loop
*/
var $background =[
 'images/bacground3.jpg',
 'images/background1.jpg',
 'images/background2.jpg',
'images/background4.jpg',
'images/background5.jpg',
'images/background6.jpg',
'images/background7.jpg',
];
function changeBackground(i) {
    var $count = $background[i];
    console.log($count);
    $('.game-body').css('background-image', ('url('+$count+')'));
}

var count = 0;
setInterval(function(){
  changeBackground(count);
  count++;
  if(count>5) {
    count = 0;
  }
},5000)
