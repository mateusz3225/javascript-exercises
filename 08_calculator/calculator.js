const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let b=0;
  a.forEach(element => {
    b+=element;
  });
  return b;
};


const multiply = function(c) {
  let b = 1;
  c.forEach(element => {
    b*=element;
  });
  return b;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let b=1;
while (a>0){
 b*=a;
 a--;
}return b;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
