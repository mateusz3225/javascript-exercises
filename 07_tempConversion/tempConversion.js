const ftoc = function(faren) {
farenToCel= (faren-32)*0.555555556;
farenToCel=Math.round((farenToCel*10)) /10;
return farenToCel;
};

const ctof = function(cel) {
  celtoFaren= (cel*1.8)+32;
  celtoFaren=Math.round((celtoFaren*10)) /10;
  return celtoFaren;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
