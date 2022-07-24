const reverseString = function(string) {

let reversed= '';
{ 
    for (i=1;i<=string.length;i++)
    {
        
         reversed += string.substr(-i,1);
    } 
    return reversed;
}
};

// Do not edit below this line
module.exports = reverseString;
