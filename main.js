let arr = [];
function add() {
    let add = document.getElementById("input").value * 1;
    if (isNaN(add)) {
        alert("Please enter a number");
        return;
    }
    if (add == 0) {
        alert("Please enter a number other than 0");
        return;
    }
    arr.push(add);
    display();
}
function display() {
    let output = "";
    let total = 0;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        output += "Num" + (i + 1) + ": " + arr[i] + " ";
        total += arr[i];
        if (i == 9) {
            alert("10 elements have been entered");
            alert("Total: " + total);
            break;
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let average = total / arr.length;
    let largest = max;
    let smallest = min;

    document.getElementById("output").innerHTML = output;
    document.getElementById("total").innerHTML = total;
    document.getElementById("average").innerHTML = average;
    document.getElementById("largest").innerHTML = largest;
    document.getElementById("smallest").innerHTML = smallest;


}