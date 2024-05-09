/* 
-->We have two special symbols: '*' and '?'.
-->'*' acts as a wildcard and can represent any sequence of letters, including none.
-->'?' can replace any single letter in the message.
-->If the key unlocks the message, return true; otherwise, return false
*/


function decoderRing(s, p) {
  let sIndex = 0;
  let pIndex = 0;

  while (sIndex < s.length && pIndex < p.length) {
      if (p[pIndex] === '*') {
          while (pIndex < p.length && p[pIndex] === '*') {
              pIndex++;
          }
          if (pIndex === p.length) {
              return true;
          }
          while (sIndex < s.length && s[sIndex] !== p[pIndex]) {
              sIndex++;
          }
          if (sIndex === s.length) {
              return false;
          }
      } else if (p[pIndex] === '?' || p[pIndex] === s[sIndex]) {
          pIndex++;
          sIndex++;
      } else {
          return false;
      }
  }

  return sIndex === s.length && pIndex === p.length;
}

console.log("Test cases are bellow");
console.log(decoderRing("ab", "a"));   
console.log(decoderRing("aa", "*"));   
console.log(decoderRing("cb", "?a"));
console.log(decoderRing("architn", "*"));  
