/*Introduce web-app with quick tutorial
Hide the main app and fade it in
*/
$('#startUp').hide().fadeIn(1000);
$('#app').hide();
$('#sign').hide();

var startSnd = new Audio("./Sounds/start.wav"); 
var reviewSnd = new Audio("./Sounds/review.wav"); 
var breakSnd = new Audio("./Sounds/break.wav"); 


var seconds = 1799; //30 minutes

function count()
{
startSnd.play();
fade(); 
//setInterval(time, 1000);
var time = setInterval(function () {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('timeField').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        breakSnd.play();
        clearInterval(time);
        fadeOut();
        seconds = 1800; 
    } 
    
    else if (seconds == 600)
    {
        reviewSnd.play(); 
        document.getElementById('sign').innerHTML = "review";
        seconds--; 
    }
    
    else if (seconds == 300)
    {
        breakSnd.play();
        document.getElementById('sign').innerHTML = "break"; 
        seconds--; 
    }
    
    else {
        seconds--;
    }
}, 1000);     


} 





function fade()
{
    $('#startBtn').fadeOut(800, function()
    {
        $('#sign').fadeIn(800, function()
        {
            $('#sign').addClass("pulse"); 
        });
    });
}

function fadeOut()
{
    $('#sign').removeClass("pulse"); 
    $('#sign').fadeOut(800, function()
    {   document.getElementById('startBtn').innerHTML = "Another Sesh?"; 
        $('#startBtn').fadeIn(800);
    });
}



