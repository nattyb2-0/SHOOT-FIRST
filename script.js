/////test to see if my page linked
console.log('hello');
//set up jquery for it to work upon the page loading
$(document).ready(function() {
    console.log( "ready!" );
    CrossHairMove();
    movePlayer();
    countShots();
    timer();
    targetMove();



    //move();
});
/*create global variables needed for random movement of target*/
var $maxDistanceX = window.innerWidth;
    $maxDistanceY = window.innerHeight;
    $maxSpeed = 50;
    $minSpeed = 1000;
    var $randomX = Math.floor(Math.random()*$maxDistanceX);
    var $randomY = Math.floor(Math.random()*($maxDistanceY-200));
    var $randomSpeed = Math.floor(Math.random*($minSpeed));

/*create global variables to track info needed for the game
like the amount of times shots fired, number of targets hit,
percentage etc*/
var $shotsFired = 0,
    $targetHit = 0,
    $percentage = 0,
    $target1Speed = 1000,
    $target2Speed= 1000;


/*create function to track the number of shots fired. each time the
user clicks on the mouse the variable should increase by 1
and return the new variable*/
function countShots() {
    $(document).click(function() {
      $shotsFired++;
        console.log("shots fired" +$shotsFired);
      return $shotsFired;

    })
  }

  /*create function to calculate the player percentage.
  the percentage must be equal to target hit divided by shots fired.*/
  function calcPercentage() {
   $percentage = Math.floor(($targetHit/$shotsFired)*100);
    console.log ($percentage);
  }




/* make my players diappear when they are clicked
create an array to store all my image. then create
a function taht changes the image display to hidden.
attach an event listener to the image array , along with
my function.*/
var $img = $('#t23');
var $img1 =$('#t24')
function kill() {
    console.log('click event');
    $(this).css('visibility', 'hidden');
    $targetHit++;
    console.log("target hit" + $targetHit);
    return $targetHit;
    if($targetHit ===2 && counting > 0) {
      level2();
      counting +=15;
    }else if($targetHit==4 && counting > 0) {
      level3();
      counting+=30;
    }else if ($targetHit>5 && counting > 0) {
      alert('You Have Mastered the art of Shoot First!!!')
    } else {
      $('.scores').html('GAME OVER!!!!');
    }
}

 $img.click(kill);
 $img1.click(kill);



/* set the images visibilty to hidden so whe the game
loads you dont see them. then create an interval that
allows images to become visible again, and fade out
again as well.*/
//$img.hide()
// setInterval(function(){
//  $img.fadeIn(1000),
//   $img.fadeOut(1000),
//   $img1.fadeIn(1000),
//   $img1.fadeOut(1000)

// }, 2200);

var $crosshair = $('#crosshair');


/* create the movement of the crosshair.
  get the crosshair element(div)
  attach an event handler for mouse move
  get the x and y coordinates of the mouse movement on the page
  and attach that to the left and right margins of the crosshair
  so it moves relatively to the mouse movement*/

  function CrossHairMove() {
    $(document).mousemove(function(e){
        $crosshair.css({
          'left':(e.pageX - 50),
          'top':(e.pageY-50)
        })
    })
  }




var $start = 0;
  var $top = 0;
function movePlayer() {

  var $player2 = $('#t24');
  setInterval(function() {
  if ($start < 1200) {
  $start += Math.floor(Math.random()*$randomX);

  $player2.css('left', (($start-130)*.5));
  $player2.css('top', (($top-100)*.2))
  setInterval(function(){
 $img.fadeIn(1000)
  $img.fadeOut(1000)
}, 300);

  }else {
    $start = 0;

}
  if ($top <= 600) {
     $top += Math.floor(Math.random()*$randomY);



  }else {
    $top = 0;

  }
  },500);
}


/*make background images change every couple of seconds.
create an array with all the various images
loop through the array
add a set interval function in the loop
*/
var $background =[
  'http://assets.vg247.com/current//2016/01/cll_of-duty_black_ops_3_gauntlet-600x305.jpg',
 'http://cdn.themis-media.com/media/global/images/library/deriv/1265/1265801.png',
 'http://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/Games/Black_Ops_3/mood8_1.jpg',
 'http://cdn.segmentnext.com/wp-content/uploads/2016/03/Black-Ops-3-zombies-map-from-DLC-2.jpg',
 'https://i.kinja-img.com/gawker-media/image/upload/apazu5gn1v4ulzyowf1o.gif',
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


var counting=10;

var counter=setInterval(timer, 1000);

function timer()
{
  counting--;
$('.scores').html(counting);
  if (counting <= 0)
  {
       $('.scores').html('GAME OVER!!!!');

     clearInterval(counter);



  }


}

function moveRight() {
  $('#t23').animate({ left: "1200px"},1600);
}
function moveDown() {
   $('#t23').animate({top: "350px"}, 1600);
 }
function MoveLeft() {
 $('#t23').animate({left: "0px"}, 1600);
}
function moveUp() {
  $('#t23').animate( {top: "0px"}, 1600);
}

function targetMove() {

  moveRight();
  moveDown();
  MoveLeft();
  moveUp();

}

setInterval(targetMove, 30)
