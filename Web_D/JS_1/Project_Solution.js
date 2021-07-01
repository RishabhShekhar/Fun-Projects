var fn=prompt("Welcome! What's your first name?")
var ln=prompt("What's your last name name?")
var age=prompt("What's your age?")
var ht=prompt("What's your height (in cm)?")
var pet=prompt("What's your pet name name?")
if(fn[0]===ln[0]){
  if (20<age && age<30) {
    if (ht>=170) {
      if (pet[pet.length-1]== "y") {
        console.log("Welcome comrade! You have passed the spy test");

      }else {
        console.log("Sorry nothing Here");
      }
    }
    else {
      console.log("Sorry nothing Here");
    }
  }
  else {
    console.log("Sorry nothing Here");
  }
}
else {
  console.log("Sorry nothing Here");
}
