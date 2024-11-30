var quest1 = document.getElementById('quest1');
var quest2 = document.getElementById('quest2');
var quest3 = document.getElementById('quest3');
var quest4 = document.getElementById('quest4');
var quest5 = document.getElementById('quest5');
var quest6 = document.getElementById('quest6');

// Item 1

var array = [];
var input;

arrange = function () {
    while (true) {
        input = prompt('Please input array values as numbers only or leave blank to break');
        if (input === null || input.trim() === "") {
            break;
        }
        else if (isNaN(input)) {
            alert("Not a number, please retry");
        }
        else {
            array.unshift(Number(input))
        }
    }
    document.getElementById('quest1Result').innerHTML = array.sort()
}
quest1.addEventListener('click', arrange);



// Item 2

var array2 = [];
var input2;
var quer;
var countValue

find = function () {
    while (true) {
        input2 = prompt('Please input array values and leave blank to break');
        if (input2 === null || input2.trim() === "") {
            break;
        }
        else if (!isNaN(input2)) {
            array2.unshift(Number(input2));
        }
        else {
            array2.unshift(input2);
        }
    }
    quer = prompt('Please input the value for query');
    countValue = array2.filter(value => value == quer).length;
    document.getElementById('quest2Result').innerHTML = countValue + " times";
}
quest2.addEventListener('click', find);

// Item 3
var array3 = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th", "st", "nd", "rd"];
var index;
var print1;
var print2;

colors = function () {
    document.getElementById('quest3Result').innerHTML = "";
    for (index = 0; index < array3.length; index++) {
        print2 = array3[index]
        switch (index) {
            case 0: print1 = o[index + 1]; break;
            case 1: print1 = o[index + 1]; break;
            case 2: print1 = o[index + 1]; break;
            default: print1 = o[0]; break;
        }
        document.getElementById('quest3Result').innerHTML += (index + 1) + print1 + " choice" + " is " + print2 + '<br>'
    }
}
quest3.addEventListener('click', colors);


// Item 4
var input4;
var print4;

rearrange = function () {
    input4 = prompt("please input the value to rearrange");
    print4 = input4.split('').reverse().join('')
    document.getElementById('quest4Result').innerHTML = print4
}
quest4.addEventListener('click', rearrange);

// Item 5
var input5;
var array5 = [];
var array5Maximum;

maximum = function () {
    while (true) {
        input5 = prompt('Please input array values as numbers only or leave blank to break');
        if (input5 === null || input5.trim() === "") {
            break;
        }
        else if (isNaN(input5)) {
            alert("Not a number, please retry");
        }
        else {
            array5.unshift(Number(input5))
        }
    }
    array5Maximum = Math.max(...array5);

    document.getElementById('quest5Result').innerHTML = array5Maximum
}
quest5.addEventListener('click', maximum);

// Item 6
stars = function () {
    var repeatX = Number(prompt('Please enter requested repetitions'));
    var starPrint = "";
    var i = 0
    var j = 0

    if(repeatX > 0 || !isNaN(repeatX) ){
        for (i = 0; i <= repeatX; i++) {
            for (j = 0; j < i; j++) {
                starPrint += "*";
            }
            starPrint += '<br>'
        }
    }
    else{
        alert ('Not a number, please retry')
    }
    document.getElementById('quest6Result').innerHTML = starPrint;
}
quest6.addEventListener('click', stars);


