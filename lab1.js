// Exercise 1 : chuyển đổi định dạng giờ
    var currentDate = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[currentDate.getDay()];
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var currentTime = hours + ' ' + ampm + ' : ' + minutes + ' : ' + seconds;
    console.log('Today is: ' + day);
    console.log('Current time is: ' + currentTime);

// Exercise 2 : chuyển đổi ngày 
function getCurrentDate(format) {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months start from 0, so we add 1
    var year = currentDate.getFullYear();
    var formattedDay = day < 10 ? '0' + day : day;
    var formattedMonth = month < 10 ? '0' + month : month;
    var formattedDate;
    switch(format) {
        case 'mm-dd-yyyy':
            formattedDate = formattedMonth + '-' + formattedDay + '-' + year;
            break;
        case 'mm/dd/yyyy':
            formattedDate = formattedMonth + '/' + formattedDay + '/' + year;
            break;
        case 'dd-mm-yyyy':
            formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
            break;
        case 'dd/mm/yyyy':
            formattedDate = formattedDay + '/' + formattedMonth + '/' + year;
            break;
        default:
            formattedDate = 'Invalid date format';
    }
    return formattedDate;
}
console.log('mm-dd-yyyy:', getCurrentDate('mm-dd-yyyy'));
console.log('mm/dd/yyyy:', getCurrentDate('mm/dd/yyyy'));
console.log('dd-mm-yyyy:', getCurrentDate('dd-mm-yyyy'));
console.log('dd/mm/yyyy:', getCurrentDate('dd/mm/yyyy'));

// Exercise 3: độ C , độ F
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
var celsiusTemp = 60;
var fahrenheitTemp = 45;
console.log(celsiusTemp + '°C is ' + celsiusToFahrenheit(celsiusTemp) + '°F');
console.log(fahrenheitTemp + '°F is ' + fahrenheitToCelsius(fahrenheitTemp) + '°C');

// Exercise 4: đảo chữ
function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
var inputString = 'Hello, World!';
var reversedString = reverseString(inputString);
console.log('Original string:', inputString);
console.log('Reversed string:', reversedString);

// Exercise 5 :
function isPossible(x, y, z) {
    if (x * y === z) {
        return 'x * y = z';
    }
    if (x + y === z) {
        return 'x + y = z';
    }
    if (x - y === z) {
        return 'x - y = z';
    }
    if (y - x === z) {
        return 'y - x = z';
    }
    if (x / y === z) {
        return 'x / y = z';
    }
    if (y / x === z) {
        return 'y / x = z';
    }
    return 'Not possible';
}
var x = 10;
var y = 30;
var z = 300;

console.log(`For x = ${x}, y = ${y}, and z = ${z}, ${isPossible(x, y, z)}`);
// Exercise 6
function findKthGreatestElement(arr, k) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr[k - 1];
}
var array = [10, 5, 8, 20, 3];
var k = 2;
console.log(`The ${k}th greatest element of the array is: ${findKthGreatestElement(array, k)}`);
