const repeatString = function(string,num) {

const stringstart=string;
    for (i=1;i<num;i++){
        string += stringstart;
    }

    if(num==0)
    {return '';} 
        else if (num<0)
        {return 'ERROR';}
            else 
            {return string;}
};

// Do not edit below this line
module.exports = repeatString;
