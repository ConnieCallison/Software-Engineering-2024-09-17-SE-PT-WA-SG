// Map Conversion with Object (Module 3: Int. Javascript slide 49-50)

const nameMap = new Map([
    [1, "one"],
    [2, "two"],
    [{key: "this is key"}, "two"]
]);

const nameObj = {
    1: "one",
    2: "two",
};

console.log(Object.fromEntries(nameMap));

