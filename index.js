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
  

// Combination (nCr)
// Enter values as: n,r  e.g. 5,2
function combination() {
    let input = screen.value.trim();
    let parts = input.split(",");

    if (parts.length !== 2) {
        screen.value = "Error";
        return;
    }

    let n = parseInt(parts[0]);
    let r = parseInt(parts[1]);

    if (
        isNaN(n) ||
        isNaN(r) ||
        n < 0 ||
        r < 0 ||
        r > n
    ) {
        screen.value = "Error";
        return;
    }

    let result =
        factorialNum(n) /
        (factorialNum(r) * factorialNum(n - r));

    screen.value = result;
}
}
