//7. Write a function that receives an array & search element as args and returns
//  the index of that search element in the array. 
// It should return "not found" when search element not found.
function search(arr,a){
    for(let i=0; i<arr.length;i++){
        if(arr[i]==a){
       return console.log([i])
            }
        }
   
        return console.log("not found")
       
}
search([12,34,55],34)