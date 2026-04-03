var randomvariable1= Math.floor(Math.random() *6)+1;
var randomdiceimage= "images/dice"+ randomvariable1 + ".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdiceimage);

var randomvariable2= Math.floor(Math.random()*6)+1;
var randomdiceimage2="images/dice"+randomvariable2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage2);

if (randomvariable1>randomvariable2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomvariable2>randomvariable1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw!!";
}