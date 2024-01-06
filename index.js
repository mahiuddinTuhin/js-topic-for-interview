function introduce(name) {
  const s = () => {
    console.log(name);
  };

  return s;
}

const cl = introduce("tome");

console.log(typeof cl);
console.log(cl);
