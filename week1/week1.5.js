//5. Write a function that receives 3 number args and  return the big number 

function greatestOfThree(a,b,c){
    if((a>b)&&(a>c)){
        console.log(`${a}is greater`)
    }
    else if((b>c)&&(b>a)){
        console.log(`${b}is greater`)
}
else{
    console.log(`${c}is greater`)
}
    
}
greatestOfThree(234,674,436)