var playerone=prompt("Player One Enter Your Name You Will Be Blue")
var onecolor='rgb(86, 151, 255)'
var playertwo=prompt("Player One Enter Your Name You Will Be Red")
var twocolor='rgb(237, 45, 73)'

var gameon=true
var table=$('table tr')

function colorchecker(row,col){
  return table.eq(row).find('td').eq(col).find('button').css('background-color')
}
function colorchanger(row,col,color){
  return table.eq(row).find('td').eq(col).find('button').css('background-color',color)
}


function matchchecker(a,b,c,d){
  return (a===b && a===c && a===d && a!==undefined && a!=='rgb(128, 128, 128)')
}

function rowchecker(col){
  var report=colorchecker(5,col)
  for(var row=5;row>=0;row--){
    report=colorchecker(row,col)
    if(report==='rgb(128, 128, 128)'){
      return row
    }
  }
}

function horizontalwin(){
  for(var row=0;row<6;row++){
    for(var col=0;col<4;col++){
      if(matchchecker(colorchecker(row,col),colorchecker(row,col+1),colorchecker(row,col+2),colorchecker(row,col+3))){
        console.log('horiz');
        return true
      }
      else{
        continue
      }
    }
  }
}

function verticalwin(){
  for(var col=0;col<7;col++){
    for(var row=5;row>2;row--){
      if(matchchecker(colorchecker(row,col),colorchecker(row-1,col),colorchecker(row-2,col),colorchecker(row-3,col))){
        console.log('vertical');
        return true
      }
      else{
        continue
      }
    }
  }
}
function diagonalwin(){
  for(var col=0;col<5;col++){
    for(var row=0;row<7;row++){
      if(matchchecker(colorchecker(row,col),colorchecker(row+1,col+1),colorchecker(row+2,col+2),colorchecker(row+3,col+3))){
        console.log('Diagonal');
        return true
      }
      else if(matchchecker(colorchecker(row,col),colorchecker(row-1,col+1),colorchecker(row-2,col+2),colorchecker(row-3,col+3))){
        console.log('Diagonal');
        return true
      }
      else{
        continue
      }
    }
  }
}

var currentPlayer=1
var currentName= playerone
var currentcolor=onecolor

$('h3').text(playerone+" : It's your turn please pick a column to drop your blue chip")

$('.board button').on('click',function(){

  var col= $(this).closest("td").index();

  var bottomAvail=rowchecker(col)

  colorchanger(bottomAvail,col,currentcolor)

  if(horizontalwin() || verticalwin() || diagonalwin()){
    $('h1').text(currentName+" you have won!")
    $('h3').fadeOut('fast')
    $('h2').fadeOut('fast')
  }

  currentPlayer= currentPlayer * -1

  if(currentPlayer==1){
    currentName=playerone
    $('h3').text(currentName+' it is your turn.')
    currentcolor=onecolor
  }
  else{
    currentName=playertwo
    $('h3').text(currentName+' it is your turn.')
    currentcolor=twocolor
  }
})
