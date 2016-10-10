/////test to see if my page linked
console.log('hello');
//set up jquery for it to work upon the page loading
$(document).ready(function () {

    console.log("ready!");
    playGame();

});

/*create global variables to track info needed for the game
like the amount of times shots fired, number of targets hit,counter for game
percentage,speed per level etc*/
var $shotsFired = 0,
    $targetHit = 0,
    $percentage = 0,
    counting = 60,
    $speed = 1500,
    $randomX1,
    $randomX2 = (window.innerWidth + $randomX1) *.8,
    $randomY = Math.random() * window.innerHeight - 50;
//to play game
function playGame() {
    $('.level').hide();
    $('.kill').hide();
    countShots();
    timer();
   // $targetMove();
    CrossHairMove();
}

//function to track the time in the game. reduce by 1 sec through loop
var counter = setInterval(timer, 1000);
function timer() {
    counting--;
    $('.timer').html(counting);
    /* condition to check time and if time reaches 0 to end game*/
     if (counting === 0) {
        $('.timer').hide();
        calcPercentage();
        console.log(calcPercentage);
        tally();
        $(".gameimg").remove();
        clearInterval(counter);
    }
}


/*create function to track the number of shots fired. each time the
user clicks on the mouse the variable should increase by 1
and return the new variable*/
function countShots() {
    $('.game-body').click(function () {
        $shotsFired++;
        console.log("shots fired" + $shotsFired);
        return $shotsFired;
    })
}
/*create function to calculate the player percentage.
the percentage must be equal to target hit divided by shots fired.*/
function calcPercentage() {
    $percentage = Math.floor(($targetHit / $shotsFired) * 100);
    console.log($percentage);
}
/* Whe player is clicked, the image should change to blood
and then disappear. a new image should then be created */
var $img = $('.gameimg');
$img.click(killShot);


/* create the movement of the crosshair.
  get the crosshair element(div)
  attach an event handler for mouse move
  get the x and y coordinates of the mouse movement on the page
  and attach that to the left and right margins of the crosshair
  so it moves relatively to the mouse movement*/
var $crosshair = $('#crosshair');
function CrossHairMove() {
    $(document).mousemove(function (e) {
        $randomX1 = e.pageX;
        $crosshair.css({
            'left': (e.pageX - 50),
             'top': (e.pageY - 50)
        })
    })
}

/*make background images change every couple of seconds.
create an array with all the various images
loop through the array
add a set interval function in the loop
*/
var $background = [
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
    $('.game-body').css('background-image', ('url(' + $count + ')'));
}

var count = 0;
setInterval(function () {
    changeBackground(count);
    count++;
    if (count > 5) {
        count = 0;
    }
}, 5000)


function tally() {
    /* calculates the player's final stats for the game..how many times did
    he/she shoot, how times was the target hit, and what was the parcentage
    of kills to shots fired...and then display this on the screen*/
    $('.level').show();
    $('.gameOver').html('GAME OVER!!!');
    $('.totalKill').html('total kill: ' + $targetHit);
    $('.totalShots').html('total shots fired: ' + $shotsFired);
    $('.percentage').html("your accuracy: " + $percentage + "%");
}


function killShot() {
    /*makes target disappear once hit. display blood on the screen and then hide
    the blood. make target reppear on screen and move to a different location.
    and increase the speed of the moving target.*/
    console.log('kill');
    $('.gameimg').fadeOut(100);
    $('.kill').show();
    $('.kill').fadeOut(1000);
    $('.gameimg').fadeIn(100);
    //$('.gameimg').animate({left: Math.random() * window.innerHeight , top: Math.random() * window.innerHeight},100)
    $targetHit++;
    $speed -= 50;
}

/*function $targetMove () {
    randomly moves player across the screen in various x and y coordinate position*
    console.log($speed);
    $('.gameimg').animate({
        left: (Math.random()* $randomX2),
        top:  (Math.random() * $randomY)},$speed)
}*/

//setInterval($targetMove, $speed);
function startOver() {
  location.reload();
}
$('button').click(startOver);


var $year;
function getValue(event) {
    $year=  parseInt($(".year").val());
    var currentYear = 2016;
    console.log($year);
    if(!/^[0-9]+$/.test($year)){
    alert("Please only enter numeric characters only for your Age");
    event.preventDefault();
    } else if (currentYear - $year < 18){
        event.preventDefault();
    }
}
$(".submit").click(getValue);

