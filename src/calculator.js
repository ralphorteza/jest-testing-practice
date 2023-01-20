const calc = (() => {

  const mul = function multiply(...args) {
    const nums = args.filter((arg) => typeof arg === "number");
    if (nums.length === 0) return null;
    if (nums.some(num => num === 0)) {
      console.log('0 in nums!'); 
      return 0;
    }
    return nums.reduce((accum, current) => (accum * current));
  };

  const div = function division(...args) {
    const nums = args.filter((arg) => typeof arg === "number");
    if (nums.length === 0) return null;
    if (nums.slice(1).some(num => num === 0)) return Infinity;
    return nums.reduce((accum, current) => (accum / current));
  };

  const add = function addition(...args) {
    const nums = args.filter((arg) => typeof arg === "number");
    // console.log(`nums: ${nums} and num length: ${nums.length}`);
    if (nums.length === 0) return null;

    return nums.reduce((accum, current) => (accum + current));
  };

  const sub = function subtract(...args) {
    // console.log(`args: ${args}`);
    const nums = args.filter((arg) => typeof arg === "number");
    if (nums.length === 0) return null;
    // console.log(`nums: ${nums} and num length: ${nums.length}`)
    return nums.reduce((accum, current) => (accum - current));
  };

  return {
    mul,
    div,
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