let chk1 = false; // 7 
let chk2 = false; // upper 
let chk3 = false; // lower
let chk4 = false; // digit
let chk5 = false; // special char

function checkPwd(pwd) {
  const N = pwd.length;
  if (N >= 7) {
    chk1 = true;
  }
  for (let i = 0; i < N; i++) {
    if (65 <= pwd.charCodeAt(i)
    && pwd.charCodeAt(i) <= 90) {
      chk2 = true;
    } else  if (97 <= pwd.charCodeAt(i) 
    && pwd.charCodeAt(i) <= 122) {
      chk3 = true;
    } else  if (48 <= pwd.charCodeAt(i) 
    && pwd.charCodeAt(i) <= 57) {
      chk4 = true;
    }
    if (pwd[i] === '#'
    || pwd[i] === '@'
    || pwd[i] === '*'
    || pwd[i] === '&') { //#, @, *, and &.
      chk5 = true;
    }
  }
}

function getNewPassword (pwd) {
  checkPwd(pwd);
  // console.log('chk2', chk2);
  // console.log('chk3', chk3);
  // console.log('chk4', chk4);
  // console.log('chk5', chk5);
  str = '';
  if (!chk5) { // spcial
    str += '#';
  }
  if (!chk4) { // digit 
    str += '0';
  }
  if (!chk3) { // lower
    str += 'a';
  }
  if (!chk2) { // upper
    str += 'A';
  }
  pwd += str;
  while (pwd.length < 7) {
    pwd += 'a';
  }
  return pwd;
}

let pwd = '';
console.log(getNewPassword (pwd))