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

let finalArray = [];

let showFinalArray = document.getElementById("result");

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let showArr1 = document.getElementById("array1");
    let showArr2 = document.getElementById("array2");

    finalArray=[].concat(arr1);
    console.log(finalArray);
    arr1.forEach(function (item) {
        showArr1.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
    arr2.forEach(function (item) {
        showArr2.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
    //not finnished - still has to add new items and update inventory

    arr1.forEach(function (item) {
        function checkandUpdateArr1() {
            console.log("arr2", arr2);
            console.log("arr1", arr1)
            console.log("item[1]", item[1]);
            //console.log("arr2[1]",arr2[1]);
            if (arr2.find(k => k[1] == item[1]) !== undefined) {
                console.log(arr2.find(k => k[1] == item[1]));
            };
        };
        checkandUpdateArr1();
    });

    console.log(finalArray);

};

updateInventory(curInv, newInv);

function getresult() {
    console.log(finalArray);
    finalArray.forEach(function (item) {
        console.log(item);
        showFinalArray.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
};

// Example inventory lists




