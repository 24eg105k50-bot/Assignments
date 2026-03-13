//Write a function that receives an array as arg and return their sum
function sumOf(arr){
    let sum = 0
  for (let i = 0; i < arr.length; i++)
{
    sum+=arr[i];
}
return sum;
}

console.log(sumOf([23,45,67,88]));
