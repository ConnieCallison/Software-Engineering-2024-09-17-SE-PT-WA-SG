const obj = {
    age: 31,
    name: "Aaron",
    address: {road: "11 street", zip: "1234"}
}


const newCombineObj = {
    ...obj,
    age: 31,
    name: "Aaron",


    name: "Jake"
}

console.log(newCombineObj)