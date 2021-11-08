// let a = 10;
// console.log(a<<1, 
//   a<<2,
//   a<<3,
//   a<<4,
//   a<<5,
//   a<<6,
//   a<<7,
//   a<<8,
//   a<<9,
//   a<<10,
//   a<<30);// <---- Overflow 

// console.log(a>>1,
//   a>>2,
//   a>>3,
//   a>>4,
//   a>>5);

a = -10;
// 1010
console.log(a.toString(2), a>>1, // 101
  a>>2, (a>>2).toString(2), // 10
  a>>3, (a>>3).toString(2),
  a>>4, (a>>4).toString(2),
  a>>5, (a>>5).toString(2),
  a>>6, (a>>6).toString(2),);
  
a = -1;
console.log(a.toString(2), a>>1, // 101
  a>>2, (a>>2).toString(2), // 10
  a>>3, (a>>3).toString(2),
  a>>4, (a>>4).toString(2),
  a>>5, (a>>5).toString(2),
  a>>6, (a>>6).toString(2),);

