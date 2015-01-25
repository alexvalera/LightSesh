var app = angular.module('Sesh', []); 

app.controller('IntroController', function($scope)
{
    $scope.segment = 0; //starting with the first segment
    $scope.nextSegment = function()
    {
 
        nextSegment(); 
    }
    $scope.goToApp = function()
    {
        goToApp();
    }
        
});

app.controller('TimeController', function($scope, $interval) {
    
        $scope.showSign = false; 
        $scope.showStartBtn = true ;
        $scope.time = "";
        $scope.sign = "study"; 
        
        $scope.count = function()
        {
            
        }         
        
        $scope.toggledView = false; 
        $scope.optionsView = function()
        {
            $scope.toggledView = toggleOptions($scope.toggledView);  
        } 
});

app.controller('MissionController', function($scope)
{
    
    $scope.mission = "";
    $scope.missionList = []; 
    $scope.missionAmt = 0; 
    $scope.breakAmt = 0; 
    $scope.missionsCompleted = 0; 
    $scope.completeList = []; 
    $scope.showMissionsCompleted = false;
    $scope.noneComplete = true; 

    $scope.addMission = function(mission)
    {
        $scope.showMissionsCompleted = true;
        
        fadeMissionAlert(); 
        
        if (mission != "" && !checkList(mission, $scope.missionList))
        {
            if (mission.length >= 26)
            {
                $scope.missionList.push(truncate(mission));
            }
            else
            {
                $scope.missionList.push(mission); 
            }
            $scope.missionAmt+=1;
            $scope.mission = "";

        }
        
        else if (checkList(mission, $scope.missionList))
        {
            $scope.mission = ""; 
            alert("Mission already in there BOY!");
        }


    }
    $scope.complete = function(index)
    {
        $scope.noneComplete = false; 
        $scope.completeList.push($scope.missionList[index]); 
        $scope.missionList.splice(index, 1);
        $scope.missionsCompleted+=1; 
        
    }
    
    $scope.break = function(index)
    {
        $scope.missionList.splice(index, 1);
        $scope.breakAmt+=1; 
    }
    
    $scope.viewList = function()
    {
        viewList(); 
    }
    

    
}); 

var listView = false; 

var currSeg = 0; //0 denotes the first one. 


function checkList(item, list)
{
    retVal = false; 
    for (i = 0; i <list.length; i++)
    {
        if (item == list[i])
        {
            retVal = true; 
        }
    }
    return retVal;
}

function truncate(mission)
{
    newString = ""; 
    for (i = 0; i < 25; i++)
    {
        if (i > 22)
        {
            newString += "."; 
        }
        else
        {
            newString += mission[i]; 
        }
        
    }
    return newString;
}

function toggleOptions(toggleVar)
{
    /*User can see the options*/
    if (toggleVar == true)
    {
        toggleVar = false; 
        $(".signs").slideDown(300);
        
    }
    /*User cannot see the options*/
    else
    {
        toggleVar = true; 
        $(".signs").slideUp(300);
       
    }
    return toggleVar; 
}


function fadeMissionAlert()
{
    $('.addMissionAlert').fadeOut(500, function()
    {
        $('.missionsCompleted').fadeIn(500);
        $('.viewCompletedBtn').fadeIn(500);
    });
}

function viewList()
{
    if (listView == false)
    {
            document.getElementById('viewBtn').innerHTML = "Hide Completed List";
            $('.completeList').fadeIn(500); 
            listView = true; 
    }

    else
    {
        document.getElementById('viewBtn').innerHTML = "View Completed Missions";
        listView = false; 
        $('.completeList').fadeOut(500);
    }
    
}

function goToApp()
{
    $('#startUp').fadeOut(300, function()
    {
        $('#app').fadeIn(300);
    });
}

