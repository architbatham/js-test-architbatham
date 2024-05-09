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

// Test cases
console.log(decoderRing("aa", "a"));   // Output: false
console.log(decoderRing("aa", "*"));   // Output: true
console.log(decoderRing("cb", "?a")); // Output: false
