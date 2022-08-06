const fibonacci = function(number) {
loNumber=2;

let container;
numberArray= [1,1];
if (number < 0) { return 'OOPS'};
for ( i=2; i<number;i++){
    
    sumOfTwo= numberArray[i-1]+ numberArray[i-2];
    numberArray.push(sumOfTwo);

}

return numberArray[numberArray.length-1]; }
// Do not edit below this line
module.exports = fibonacci;
