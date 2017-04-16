// HW
// Question 1
var A = 30
var B = 35

console.log(A + B);
 //

 var FirstName = "Angelique "
 var LastName = "Barth"

console.log(FirstName + LastName);

// Question 2
var shade = ["light", "natural", "dark"];
var color = ["red", "blue", "yellow"];
var paint = [shade, color];

console.log(paint[0][2] + " " + paint[1][0] + " That's a great color."); //dark red
console.log(paint[0][0] + " " + paint[1][1] + " That's a great color."); //light blue


// Question 3

var answer = prompt("enter number")
  if (answer < 100) {
    alert("This is less than a 100");
  }else {
  alert("This is greater than a 100");
}

// Question 4

var answer = answer(245)
if (245 == 245) {
  console.log("your RIGHT!");
}else {
  console.log("Your wrong! answer is not greater");
}

// Question 5

var answer = prompt("enter answer")
if (answer == "Dog") {
alert("True");
}else {
  alert("False");
}

// Question 6

function whatsYourName(){
  var name= prompt("What's your name?");

  if (name=="" || name==undefined){
    console.log("Nice name.");
  }

  else{
    console.log(name+" Thats a nice name too!");
  }
}
whatsYourName();
whatsYourName("Khayyam")


// Question 7

function sayHello() {
  console.log("hello");

}

// Question 8



function doorPrize(doorNumber) {
 if (doorNumber == 1) {
   alert("Your prize is $300")
 } else if (doorNumber == 2) {
   alert ("Your prize is $200")
 } else if (doorNumber == 3) {
     alert ("Your prize is $100")
 } else {
     alert ("Sorry you are not a winner")
 }
}
   doorPrize(3)
