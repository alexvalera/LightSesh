


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    
    var user=getCookie("username");
    var notes = getCookie("notes");
//    alert(notes);
//    alert(user);
    if (user != "") {
        $('#startUp').hide();
        $('#sign').hide();
        document.getElementById('userNotes').innerHTML = notes;
        $('#app').fadeIn(1000);
        
        
    } else { //never visited site, no cookie
       user = "isUser"
       
       
       if (user != "" && user != null) {
           setCookie("username", user, 10000);
//           setCookie("notes", userNotes, 30)
           $('#startUp').fadeIn(1000);
            $('#app').hide();
           $('#sign').hide();
       }
    }
}

checkCookie();
/*Introduce web-app with quick tutorial
Hide the main app and fade it in
*/




var startSnd = new Audio("./Sounds/start.wav"); 
var reviewSnd = new Audio("./Sounds/review.wav"); 
var breakSnd = new Audio("./Sounds/break.wav"); 






var seconds = 1799; //30 minutes

function saveNotes()
{
//    alert("save button hit");
    var userNotes= document.getElementById('userNotes').innerHTML;
    userNotes = userNotes.replace(/;/g, "&#59");
//    alert(userNotes);
    setCookie("notes", userNotes, 30);
}


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



