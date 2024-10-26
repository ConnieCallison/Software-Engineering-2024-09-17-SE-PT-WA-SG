const obj = {
    age: 31,
    name: "Aaron",
    address: {road: "11 street", zip: "1234"}
}

const cloneObj ={... obj};

// for (const key in obj){
//    cloneObj[key] = obj[key]
//}

cloneObj.age = 33;

console.log(obj, cloneObj);