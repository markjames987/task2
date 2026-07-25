// calculator program


const screen = document.getElementById("screen");

function appendtodisplay(value){
  screen.value += value;
}
function clearDisplay(){
    screen.value = "";
}

function calculate(){
  try{
    screen.value = eval(screen.value);
  }
  catch(error){
    screen.value = "error"
  }
}
