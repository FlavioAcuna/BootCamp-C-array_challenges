function siempreHambriento(arr) {
  var foodCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "comida") {
      console.log("Delicioso");
      foodCount++;
    }
  }
  if (foodCount == 0) {
    console.log("Tengo hambre");
  }
}

alwaysHungry = [3.14, "comida", "pastel", true, "comida"];
// esto debería mostrar "delicioso, "delicioso"
//alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

siempreHambriento(alwaysHungry);

function highPass(arr, cutoff) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

function betterThanAverage(arr) {
  var sum = 0;
  // calcula el promedio
  var count = 0;
  // cuenmta cuánmtas variables son mayores que el promedio
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  sum = sum / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > sum) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

function reverse(arr) {
  var left = 0;
  var right = arr.length - 1;
  while (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

function fibonacciArray(n) {
  // [0, 1] son los valores inciales del arreglos para calcular el resto
  var fibArr = [0, 1];
  while (fibArr.length < n) {
    var prev = fibArr[fibArr.length - 1];
    var prevprev = fibArr[fibArr.length - 2];
    fibArr.push(prev + prevprev);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
