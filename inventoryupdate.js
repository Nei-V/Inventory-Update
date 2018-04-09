var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

let finalArray=[];

let showFinalArray = document.getElementById("result");

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let showArr1 = document.getElementById("array1");
    let showArr2 = document.getElementById("array2");



    arr1.forEach(function (item) {
        showArr1.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
    arr2.forEach(function (item) {
        showArr2.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
//not finnished - still has to add new items and update inventory
    return finalArray = arr1.concat(arr2);

};

updateInventory(curInv, newInv);

function getresult() {
    finalArray.forEach(function (item) {
        console.log(item);
        showFinalArray.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
};

// Example inventory lists




