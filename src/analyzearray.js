const analyzeArray = function analyzeArrayFunction() {

  const analyze = function analyzeGivenArray(obj) {
    if (typeof obj === 'undefined') return undefined;
    if (!Array.isArray(obj)) return 'not an array!';
    if (obj.some((element => typeof element !== 'number'))) return 'error!';

    const totalSum = obj.reduce((accumulator, currentValue) => accumulator + currentValue);
    const length = obj.length;
    const minValue = Math.min(...obj);
    const maxValue = Math.max(...obj);
    const averageValue = totalSum / length;

    const ans = {
      average: averageValue,
      min: minValue,
      max: maxValue,
      length: length,
    }
    
    return ans;
  }


  return {
    analyze,
  }
}();

module.exports = analyzeArray;