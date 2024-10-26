const hello = "HELLO"
const obj = {
    name: "Connie",
    toString() {
        return this.name;
    },
}

console.log("User" + obj);