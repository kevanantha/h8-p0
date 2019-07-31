function konversiMenit(menit) {
  if (menit % 60 !== 0) {
    var m = Math.floor(menit / 60);
    var d = ('0' + (menit % 60)).slice(-2);
    return `${m}:${d}`;
  } else {
    var m = Math.floor(menit / 60);
    var d = ('0' + (menit % 60)).slice(-2);
    return `${m}:${d}`;
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
