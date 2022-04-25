const newLove=[1,2,3,4,5,6,7,8,9];
function sumofArray(sum, num) {
    return sum + num;
}
let sum=newLove.reduce(function(sum,item){
    return sum + item;
},0);
console.log(sum);