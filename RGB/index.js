// const arr = [1, 2, 3, 4];

// [1,2,3,num]array dotr ardn element nemeh
// [1,2,3] array-aas suuliin elementiig hasah

// const poppedValue = arr.pop();
// for (let i = 0; i < arr.length; i++);
// i =
// arr.pop();
// console.log(arr);

//Bodlogo 2
// let arr = [1, 2, 3, 4, 5, 6];

// function findMax (arrNumber) {
//     let max = arr[0];
// for (i = 0; i < arrNumber.length; i++){
//     if (max < arrNumber[i]){
//         max = arrNumber[i];
//     }
// }
// return max;
// }
// console.log(findMax (arr));

//bodlogo5
// let arr = [1, 3, 3, 4, 6, 6];
//  function duplicateFinder (){
// for(let i = 0; i<arr.length; i++){
//     if (duplicateFinder = false){
//         if (duplicateFinder\)
//     }

// bodlogo 3
// const stringObject = {
//     name: 'john',
//     age: 25,
//     city : 'example',
// };
// let objectVallue

// const multiplyObject = { a: 2, b: 3, c: 5 };
// let values = Object.values(multiplyObject);

// function multiply(value){
//     let sum = [];
//     let factor = 2;
//     for (let i = 0; i < value.length; i++){
//         sum.push(value[i] * factor);
//     }
//     return sum;
// }
// console.log(multiply(values));

const stringObject = { name: "john", age: 25, city: "example" };
// function zarlana (object valuenudin ehni useg tom bolgoh)
// keys, values ashiglaad [value | keys]
// davtalt
//[value | keys] ali negiig ashiglaad ehnii useg tom bolgoh
// object oo shinechlene Name: "john" => name: "John"
// return butsaana

const capitalizLetter = (text) => {
  return text.slice(0, 1).toUpperCase() + text.slice(1);
}; //ehnii useg tom bolson

const capitalizLetterInObject = (obj) => {
  const keys = Object.keys(obj); // object-g array bolgoj butsaaj bgaa

  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === "string") {
      obj[keys[i]] = capitalizLetter(obj[keys[i]]); // object ruu handahdaa keys-ruu ni damjuulj haldana
    }
  }
  return obj;
};
console.log(capitalizLetterInObject(stringObject));

