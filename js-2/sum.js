// escribe la función sum acá
function sum(array=[n1,n2,n3]){
    let total=0;
    for(let i = 0; i < array.length; i++) {
        total+=array[i];          
}
return total;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
