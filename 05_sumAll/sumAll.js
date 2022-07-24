const sumAll = function(first, last) {
    if (first<0 || last<0 || typeof first != 'number' || typeof last != 'number')
    {
        return "ERROR";
    };
    if (first>last){[first,last]=[last,first];};
let number = 0;
for (i=first;i<=last;i++){
    number += i;

}
return number;
};

// Do not edit below this line
module.exports = sumAll;
