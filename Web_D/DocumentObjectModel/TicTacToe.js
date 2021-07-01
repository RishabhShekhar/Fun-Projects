var restart=document.querySelector("#but")
var square=document.querySelectorAll("td")

function clear(){
  for(var i=0;i<square.length;i++){
    square[i].textContent="";
  }
  }
restart.addEventListener('click',clear)

 function change(){
   if(this.textContent=="X"){
     this.textContent="O"
   }
   else if (this.textContent=="O") {
     this.textContent=" "
   }
   else {
     this.textContent="X"
   }
 }

for(i=0;i<square.length;i++){
  square[i].addEventListener("click",change)
}
