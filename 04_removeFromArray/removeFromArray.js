const removeFromArray = function(array) {

for (x=1;x<=arguments.length;x++){

    for (i=0;i<=array.length;i++)
    {
        if (array[i]===arguments[x])
        {
        array.splice(i,1)
        }
    } 
    
} return array;
};

// Do not edit below this line
module.exports = removeFromArray;
