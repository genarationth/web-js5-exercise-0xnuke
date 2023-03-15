const starTower = (number) => {

  for (let i = 0; i < number; i++) {
    let temp = "";
    for (let j = 0; j < i + 1; j++) {
      temp += "*"
    }
    console.log(temp)
  }
}

starTower(5)
