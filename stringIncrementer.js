function incrementStringFirst(strng) {
  // return incrementedString
  const regex = /\d+$/g;
  const zeroInit = /^0+/g;
  let apart = strng.match(regex)?.join(" ");
  if (!apart) {
    return strng + "1";
  }
  let getTrail0 = apart
    .match(zeroInit)
    ?.join("")
    .substring(0, apart.length - 1);
  // console.log(getTrail0);
  let apartCopy = apart;
  apartCopy = +apartCopy + 1;

  let reDoStr;

  if (apart.substring(getTrail0?.length).length < apartCopy.toString().length) {
    reDoStr = strng.substring(0, strng.length - apart.length);
    getTrail0 = getTrail0?.substring(0, getTrail0.length - 1);
  } else {
    reDoStr = strng.substring(0, strng.length - apart.length);
  }
  return getTrail0 ? reDoStr + getTrail0 + apartCopy : reDoStr + apartCopy;
}

// console.log(incrementStringFirst("foobar000"));
// console.log(incrementStringFirst("foobar999"));
// console.log(incrementStringFirst("foobar00999"));
// console.log(incrementStringFirst("foo"));
// console.log(incrementStringFirst("foobar001"));

// more efficient

function incrementStringEf(strng) {
  return strng.replace(/[\d]*$/, (i) => String(+i + 1).padStart(i.length, 0));
}

// console.log(incrementStringEf("foobar000"));
// console.log(incrementStringEf("foobar999"));
// console.log(incrementStringEf("foobar00999"));
// console.log(incrementStringEf("foo"));
console.log(incrementStringEf("foobar001"));


// function incrementString(strng) {
//     // return incrementedString
//     const regex = /\d+$/g;
//     const zeroInit = /^0+/g;
//     let apart = strng.match(regex)?.join(" ");
//     if (!apart) {
//       return strng + "1";
//     }

//     console.log(apart.length + ' apart');
//     let num = apart++;
//     return num.toString().padStart(apart.length - 1, '0')

 

//   }

//   console.log(incrementString("foobar"));
//   console.log(incrementString("foobar000"));
// console.log(incrementString("foobar999"));