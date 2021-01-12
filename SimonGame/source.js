//selects a random  button to turn its color brighter
function randomButtonGenerator(){
  var random = Math.floor(Math.random() * 4) ;
  return random ;
};

// let random rumber 0 equals to red rumber 1 equals to green rumber 2 equals to yellow rumber 3 equals to blue

var buttonArray = ["#red-button","#green-button","#yellow-button","#blue-button"] ;
var clickCheck = [];
var randomNumberArray = [];
var state = 0 ;

//adds random selected buttons index int randomNumberArray array
function addButtonLight(){

  var rand = randomButtonGenerator() ;

  if(rand == 0){
    randomNumberArray.push(0);
  }
  if(rand == 1){
    randomNumberArray.push(1);
  }
  if(rand == 2){
    randomNumberArray.push(2);
  }
  if(rand == 3){
    randomNumberArray.push(3);
  }

  return rand ;
}


// turns buttons color brighter one by one
function lightrandomNumberArrayElements(){

  $(".game-button").removeClass("bright");

  for(var i=0 ; i<randomNumberArray.lenght ; i++)
  {
    $(buttonArray[i]).addClass("bright");
    sleep(1000);
    $(buttonArray[i]).removeClass("bright");
  }
}

function addButton(){

  for(var i=0 ; i< buttonLight.lenght ; i++){
    $(buttonArray[i]).click(function(){
      clickCheck.push(1);
    }
  }

  for(var i=0 ; i<clickCheck.lenght ; i++){
    if(clickCheck[i])
  }

}

function turnIntoInitialState(){
  $("#start-button").removeClass("bright");
  $(".game-button").removeClass("bright");
  state = 0 ;
}

function mainLoop()
{
  if(state = 0)
  {
    addButtonLight();
    lightButtonArrayElements();
  }
}

$("#start-button").click(function(){
  console.log($("#status-text").text());
  $("#start-button").addClass("bright");
  $("#count").text("---");
  $("#count").addClass("addBrightness");

  setInterval(mainLoop,1000);  // checks mainLoop function in every 1s.

  console.log(buttonLight);

})
