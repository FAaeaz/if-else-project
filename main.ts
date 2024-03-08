let totalMark = 1150;
let obidentMark = 850;
let result = obidentMark/totalMark*100

if(result >= 90 && result <= 100){
    console.log("Grade A1")
}else if(result >= 80 && result <= 90){
    console.log("Grade A")
}else if(result >= 70 && result <= 80 ){
     console.log("Grade B")
}else if(result >= 60 && result <= 70  ){
     console.log("Grade C")
}else{
      console.log("pass")
}