//part1
const decreaseNumber = (number) => {
        while(number>=0){
            console.log(number);
            number -= 0.5;
        }
}

decreaseNumber(10)

//part2
const oddNumber = (number) => {
  let i = 1;
  while(i <= number){
    if (i % 2 !== 0){
      console.log(i)
    }
    i++
  }
}

oddNumber(20)

//part3
const printNum = (number) =>{
  let temp = [];
  i = 1;
  while(i <= number){
    console.log([i])
    i++
  }
}

printNum(5)

//part4

const sum = (number) =>{
  let result = 0;
  let i = 1;
  while(i <= number){
    result += i
    i++
  }
  console.log(result)
}

sum(19)
