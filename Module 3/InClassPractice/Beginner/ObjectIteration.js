const phone = {
    model: "iPhone 11",
    colour: "black",
    storage: 64,
};

// for (const key in phone) {
//    console.log(key, phone[key]);
//}

const getAllKeysFromObj = Object.keys(phone);
console.log(getAllKeysFromObj);
for (let i = 0; i < getAllKeysFromObj.length; i++) {
    const key = getAllKeysFromObj[i];
    console.log(key, phone[key]);
}