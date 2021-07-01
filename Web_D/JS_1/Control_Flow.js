var hot = false
var temp = 60
if (temp>80) {
  console.log("Its hot Outside");
}
else if (temp<=80 && temp>=50) {
  console.log("Average Temperature outside");
}
else {
  console.log("It is very cold");
}
var ham=5
var cheese=10
var report="blank"
if(ham>=10 && cheese>=10){
  report="strong sale of cheese and ham"
}
else if (ham===0 && cheese===0) {
  report="Nothing sold"
}
else{
  report="We had some items sold"
}
console.log(report);
var n=1
while(n<11){
  if(n%2===0){
    console.log(n);
  }
  n=n+1;
}
for(var i=0;i<5;i++){
  console.log("hello");
}
j=0
while (j<5) {
  console.log("hello");
  j++
}
for (var i = 1; i < 26; i++) {
  if(i%2!==0){
    console.log(i);
  }

}
i=1
while (i<26) {
  if(i%2!==0){
    console.log(i);
  }
  i++

}
