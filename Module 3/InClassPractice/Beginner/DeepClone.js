const obj = {
    age: 31,
    name: "Aaron",
    address: {
        road: "11th Street",
        zip: "1234",
    },
};

const jsonString = JSON.stringify(obj, null, 2);
const deepCopyObj = JSON.parse(jsonString);

deepCopyObj.address.road = "23rd jump street";

console.log(obj, deepCopyObj);