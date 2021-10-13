//1
function sumOfFourAndSix(){
  for(let i = 1; i <= 1000; i++){
      if(i % 4 === 0 && i % 6 === 0){
        sum += 1  
      }
    } return sum
}
console.log(sumOfFourAndSix())
//2
function oddAndEvenInFifteen(){
  for(let i = 0; i < 16; i++){
      if(i % 2 === 0){
            console.log(`${i}` is even)
      }else{
        console.log(`${i}` is odd)
        }
  }
}
oddAndEvenInFifteen(11)

//3
function assignGrade(grade){
  if(grade > 89){
      return "A"
  }else if(grade > 79){
      return "B"
  }else if(grade > 69){
      return "C"
  }else if(grade > 64){
      return "D"
  }else(grade < 65){
      return "F"
  }
}
console.log(assignGrade(82))





