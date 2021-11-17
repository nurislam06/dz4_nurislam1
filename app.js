// ------------------ЗАДАНИЕ-1--------------------------
   var number = 1;

function plusOne() {
  var count = document.getElementById('count');

  number++;
  count.textContent = number.toString();
}

var number = 1;

function plusOne2() {
  var count = document.getElementById('count');

  number-- ;
  count.textContent = number.toString();
}

// --------------------Map-----------------------------

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

console.log(doubles)

// ------------------------filtir----------------------------

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// -----------------------reduse-------------------------------------

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));