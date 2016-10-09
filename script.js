/////test to see if my page linked
console.log('hello');
//set up jquery for it to work upon the page loading
$(document).ready(function() {
  $('.level').hide();
    console.log( "ready!" );
    //CrossHairMove();
   // movePlayer();
    countShots();
    //targetMove();




});

/*create global variables to track info needed for the game
like the amount of times shots fired, number of targets hit,counter for game
percentage,speed per level etc*/
var $shotsFired = 0,
    $targetHit = 0,
    $percentage = 0,
    counting=10,
    $src2 = "images/run.gif",
    $speed =3000;

//function to track the time in the game.
function timer(){
  counting --;
$('.scores').html(counting+ "hi");
//Check to see if levels requirement have been met.
      if(counting > 0){
        levelUp();
// end the game
      } else if(counting === 0) {
    $('.scores').html('GAME OVER!!!!');
    calcPercentage();
    console.log(calcPercentage);
     tally();
     $(".gameimg").remove();
      clearInterval(counter);
     }
}
// run clock through interval ever sec
 var counter =setInterval(timer, 1000);




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




/* Whe player is clicked, the image should change to blood
and then disappear. a new image should then be created */

var $img = $('.gameimg');
$img.click(killShot);

/* when the soilders are hit. they should turn into blood and
disappear from the scree. *****they image is suppose to turn
into blood first before it disappears but i am having difficulty
with this*/
function killShot() {
  console.log('kill');
  var $src = "images/blood.png";
  var $src2 = "images/run.gif";
  $('#t23').attr('src',"images/blood.png" );
  console.log($src);
 //$('#t23').fadeOut('3000')
  afterKill();
}
function afterKill() {
   $(".gameimg").remove()
    console.log('body');
    makeTarget();
    $targetHit++
    console.log($targetHit);
    console.log('its working')
    movePlayer();
  }



function movePlayer() {
  $('.gameimg').animate({left: 1000}, 2000);
}


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

setInterval(movePlayer,1000);

function makeTarget() {
 var posx = (Math.random() * window.innerWidth);
  var posy = (Math.random() * window.innerHeight);
var newTarget = $('<img>');
newTarget.attr({src :$src2,
                class: "gameimg",
              });
newTarget.click(killShot);
newTarget.css({
  'position': "absolute",
  'left': posx + 'px',
  'top':posy + 'px'
}).appendTo('body').fadeOut(10000, function(){
  $('.gameimg').remove();
  makeTarget();
});
}

function levelUp() {
  if($targetHit == 2 && counting != 0) {
    counting+= 30;
    console.log('level 2');
  }else if($targetHit === 5 && counting != 0) {
    counting += 45;
    console.log('level 3');
  }else if ($targetHit === 8 && counting != 0) {
    counting += 60;
    console.log('level 4');
  }
}

function tally() {
  $('.level').show();
  $('.gameOver').html('GAME OVER!!!');
  $('.totalKill').html('total kill: '+$targetHit);
  $('.totalShots').html('total shots fired: '+$shotsFired);
  $('.percentage').html("your accuracy: " +$percentage+"%");
}



