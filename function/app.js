function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}

// function lastElement(arr) {
//   return arr[arr.length - 1];
// }

// arr1 = [1, 2, 3, 4, 8];
// console.log(arr1[arr1.length - 1]);
// result = lastElement(arr1);
// console.log(result);

// singSong();
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

str = "hello";
console.log(str[0].toUpperCase() + str.slice(1));
