var numSquars = 6;
var colors = generateRandomColors(numSquars);
var pickedColor= pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var btn = document.getElementById('reset');
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
easyBtn.addEventListener("click",function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquars=3;
  colors = generateRandomColors(numSquars);
  pickedColor=pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
  if (colors[i]) {
    squares[i].style.background= colors[i];
  } else {
    squares[i].style.display= "none";
  }

  }
})
hardBtn.addEventListener("click",function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquars=6;
  colors = generateRandomColors(numSquars);
  pickedColor=pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background= colors[i];
    squares[i].style.display= "block";
    }

})

  btn.addEventListener("click", function(){
      colors = generateRandomColors(numSquars);
      pickedColor= pickColor();
      colorDisplay.textContent=pickedColor;
      for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
      }
      h1.style.background ="#009688";
      btn.textContent="New Colors";
})

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background=colors[i];
  squares[i].addEventListener("click",function(){
    var clickedColor =this.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent="Correct";
        btn.textContent = "Play Again";
        changeColor(pickedColor);
        h1.style.background = clickedColor ;
    }else {
      this.style.background= "#fafafa";
      messageDisplay.textContent="Try Again";
    }
  });
}

function changeColor(color){
      for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color ;
      }
    }
function pickColor(){
  var random = Math.floor(Math.random()* colors.length);
  return(colors[random]);
}
function generateRandomColors(num){
  var arr=[];
for (var i = 0; i < num; i++) {
  arr.push(randomColor())
}
   return arr ;
}

function randomColor(){
var r =  Math.floor(Math.random()*256);
var g =Math.floor(Math.random()*256);
  var b =Math.floor(Math.random()*256);
  return("rgb("+ r + ", " + g + ", " + b +")");
}
