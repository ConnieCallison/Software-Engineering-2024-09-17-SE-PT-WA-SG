const nameMap = new Map([
    [1, "one"],
    [2, "two"],
    [{key: "this is key"}, "two"]
]);

// ^ this is how you initialize a map; you can see that an object can also be part of a map in the 3rd key value above

const nameObj = {
    1: "one",
    2: "two",
};

nameMap.set(3, "three");

// ^ this is how you add a new key value to the map after it is already initialized

/// console.log(nameMap, nameObj);

// console.log(nameMap.has(1), nameObj.hasownProperty("1"));
// delete nameObj[1];
// console.log(nameObj[1]);

// map does typically take up more memory space, sometimes it's worth it for better use cases

// const keys = Array.from(nameMap.keys());
// console.log(keys);

// const obj = nameMap.entries();
// console.log(obj.);


// map is typically not used as much as array or object in software engineering but it does have use cases

console.log(Object.fromEntries(nameMap));

