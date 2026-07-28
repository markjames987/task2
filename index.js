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
  } function factorial() {
    let num = parseInt(document.getElementById("screen").value);
    if (isNaN(num) || num < 0) {
      document.getElementById("screen").value = "Error";
      return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    document.getElementById("screen").value = result;
  }
}
