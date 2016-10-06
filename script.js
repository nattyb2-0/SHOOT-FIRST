/////test to see if my page linked
console.log('hello');
//set up jquery for it to work upon the page loading
$( document ).ready(function() {
    console.log( "ready!" );
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
$img.click(makeImagesDisappear);
