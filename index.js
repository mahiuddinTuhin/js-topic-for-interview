const obj1 = {
  value: 10,
};

const obj2 = obj1;

const obj3 = {
  value: 10,
};

obj1.value = 20;

console.log(obj2.value);
