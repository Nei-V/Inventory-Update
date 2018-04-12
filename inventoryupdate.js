//example original arrays - curInv is the original invnetory, newInv = the new stock
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

    finalArray = [].concat(arr2);//this is inserting the new stock
    /*all the new stock will be in the final array*/
    console.log(finalArray);

    //this part is for showing the original Arrays in tables
    arr1.forEach(function (item) {
        showArr1.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
    arr2.forEach(function (item) {
        showArr2.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
    
/*the checking - for each item in original inventory, check if you have the same item in new stock,
if yes, get the location. the location is the same in new stock array as it is in the final array,
this is why we entered it in the finalArray with concat. Also, if found, add its quantity to the 
quantity in finalArray for the same item. If the item is not one of the products
received, push it at the end of the final array.*/
    arr1.forEach(function (item) {
        function checkandUpdateArr1() {
            console.log("arr2", arr2);
            console.log("arr1", arr1)
            console.log("item[1]", item[1]);
            
            if (arr2.find(k => k[1] == item[1]) !== undefined) {
                console.log("found in second array - found item",arr2.find(k => k[1] == item[1]));
                let foundItem = arr2.find(k => k[1] == item[1]);
                console.log("position in arr1", [arr1.indexOf(item)]);
                let placeInArr2 = arr2.findIndex(k => k[1] == item[1]);
                console.log("position in arr2 and finalArray",placeInArr2);
                
                finalArray[placeInArr2][0] = item[0] + foundItem[0];
            }
            else {
                finalArray.push(item);
            };
        };
        checkandUpdateArr1();
    });

    console.log(finalArray);
    /*sort the finalArray by the namve of the product - by unicode place
    I've seen that you should make all strings to upper case becasue otherwise
    the sorting might not work because some items will start with lower case, others with
    upper case and this influences unicode positionss, but it was not necessary in this challenge*/

    finalArray.sort((a, b) => a[1] > b[1]);
};

updateInventory(curInv, newInv);
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

//neededd to display finnalArray in table format
function getresult() {
    console.log(finalArray);
    finalArray.forEach(function (item) {
        console.log(item);
        showFinalArray.innerHTML += "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "</tr>";
    });
};





