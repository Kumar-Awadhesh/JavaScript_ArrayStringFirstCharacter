const array=["Masai", "School"];
//initializing an empty array.
let arr=[];
//iteration over array till it's length.
for(let i=0;i<array.length;i++){
    //pushing the first character of each string into a new array.
    arr.push(array[i][0])
}
//printint the new array.
console.log(arr)