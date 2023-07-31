export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i -= 1) {
    newString += str[i]; // or newString = newString + str[i];
  }

  return newString; // "olleh"
}

export const Calculator = {
  add: function add(a, b) {
    return a + b;
  },
  subs: function subs(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
};

export function Cesar(str, fact) {
  //   const str = strs.toUpperCase();

  function rotate(correspondance) {
    const charCode = correspondance.charCodeAt();

    if (charCode <= 90 && charCode + 13 <= 90) {
      return String.fromCharCode(charCode + fact);
    } else if (charCode <= 90 && charCode + 13 > 90) {
      return String.fromCharCode(((charCode + fact) % 90) + 64);
    } else if (charCode <= 122 && charCode + 13 <= 122) {
      return String.fromCharCode(charCode + fact);
    }
    return String.fromCharCode(((charCode + fact) % 122) + 96);
  }

  return str.replace(/[A-Za-z]/g, rotate);
}

export function analyzeArray(arr) {
  const len = arr.length;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = arr.reduce((p, c) => p + c, 0) / arr.length;

  return { average, min, max, length: len };
}
