var data = 0;

document.getElementById("counting").value = data;

function increment() {
  data = data + 1;
  document.getElementById("counting").value = data;
}
function decrement() {
  data = data - 1;
  document.getElementById("counting").value = data;
}

function display(){
  document.getElementById("show").innerHTML= data;
}

