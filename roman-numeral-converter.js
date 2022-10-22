function romanNumberFormatter(charNum, map) {
  if (charNum === "0") {
    return "";
  }
  if (charNum === "1") {
    return map.one;
  }
  if (charNum === "2") {
    return map.one + map.one;
  }
  if (charNum === "3") {
    return map.one + map.one + map.one;
  }
  if (charNum === "4") {
    return map.one + map.five;
  }
  if (charNum === "5") {
    return map.five;
  }
  if (charNum === "6") {
    return map.five + map.one;
  }
  if (charNum === "7") {
    return map.five + map.one + map.one;
  }
  if (charNum === "8") {
    return map.five + map.one + map.one + map.one;
  }
  if (charNum === "9") {
    return map.one + map.ten;
  }
}

function formatterMapper(charNum, index) {
  if (index === 0) {
    const map = {
      one: "I",
      five: "V",
      ten: "X",
    };
    return romanNumberFormatter(charNum, map);
  }

  if (index === 1) {
    const map = {
      one: "X",
      five: "L",
      ten: "C",
    };
    return romanNumberFormatter(charNum, map);
  }

  if (index === 2) {
    const map = {
      one: "C",
      five: "D",
      ten: "M",
    };
    return romanNumberFormatter(charNum, map);
  }

  if (index === 3) {
    const map = {
      one: "M",
      five: "",
      ten: "",
    };
    return romanNumberFormatter(charNum, map);
  }
}

function convertToRoman(num) {
  let str = num.toString();

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  let reverse = reverseString(str);

  let arr = [];

  for (let i = 0; i < reverse.length; i++) {
    let charStr = reverse[i];
    let numb = formatterMapper(charStr, i);
    arr.unshift(numb);
  }

  return arr.join("");
}
