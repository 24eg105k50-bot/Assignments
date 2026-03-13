//4. Find the smallest element in marks array

let marks = [90,78,65,98]
let min = marks[0]
for(let i=1; i<marks.length; i++){
   if(marks[i]<min){
    min=marks[i]
}
}
   console.log(min)
