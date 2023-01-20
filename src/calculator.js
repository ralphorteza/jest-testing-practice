const calc = (() => {
  const add = function addition(...args) {
    const nums = args.filter((arg) => typeof arg === "number");
    // console.log(`nums: ${nums} and num length: ${nums.length}`);
    if (nums.length === 0) return null;

    return nums.reduce((accum, current) => (accum + current));
  }

  const sub = function subtract(...args) {
    const nums = args.filter((arg) => typeof arg === "number");
    if (nums.length === 0) return null;

    return nums.reduce((accum, current) => (accum - current));
  }

  return {
    add,
    sub,
  };
})();

//alternative JS module pattern
// const calc = (function calc(){
//   const add = function add(...args) {
//     const nums = args.filter((arg) => typeof arg === "number" );
//     console.log(`nums: ${nums} and num length: ${nums.length}`);
//     if (nums.length === 0) return null;

//     return nums.reduce((accum, current) => (accum + current));
//   }

//   return {
//     add
//   };
// })();

module.exports = calc;