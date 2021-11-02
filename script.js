var firstHeading = document.getElementsByClassName("hello")[0];
var myButton = document.getElementById("button");
var myText = "Hello World x";
var myNumber = 2;

myButton.addEventListener("click", function(){
  this.classList.toggle("blue-background");
});

function changeTheText(){
  if (firstHeading.innerHTML == "Hello World!") {
    firstHeading.innerHTML = myText + myNumber;
  } else {
    firstHeading.innerHTML = "Texten stämde inte överens";
  }

}

changeTheText();
