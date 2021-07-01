// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name){
  roster.push(name)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(name){
  for(var i=0;i<roster.length;i++){
    if(roster[i]==name){
      for(i=i;i<roster.length-1;i++){
        roster[i]=roster[i+1]
      }
      break;
    }

  }
  roster.pop()
}
// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(){
    console.log(roster);

}

// Start by asking if they want to use the web app
var ans=prompt("You want to use roster web app? (y/n)")
if(ans=="y"){
  while(1){
    ans=prompt("Select a option add, remove, display or quit. ")
    if(ans=="add"){
      ans=prompt("Please enter a name to add.")
      addNew(ans)
    }
    else if (ans=="remove") {
      ans=prompt("Please enter a name to remove.")
      remove(ans)
    }
    else if (ans=="display") {
      display()
    }
    else if (ans=="quit") {
      alert("Thank you for using this web app")
      break
    }
    else {
      alert("Incorrect Choice! Please enter valid choice")
    }
  }
}

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
