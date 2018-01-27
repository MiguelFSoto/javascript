let name = "Miguel";
var age = 15;
var isAdult = false;
var array = [0, 1, 2, 3, 4];
var object =
    {
        int: 13,
        string: "Hello",
        bool: true,
        arr: [0, 1, 2]
    };

var funcArr = [n => n * 2, () => { return "Miguel Soto" }];
console.log(funcArr[0](4));
array.forEach(i => console.log(i), this);
console.log(JSON.stringify(object, false, 2));

function changeName(newName) {
    let name = newName;
    console.log(name);

    return name
}

function changeAge(newAge) {
    age = newAge;
}