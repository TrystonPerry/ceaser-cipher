textarea1.addEventListener('keyup', encode);

function encode() {
  let str = textarea1.value;
  str = str.toUpperCase();
  let msg = '';
  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      msg += String.fromCharCode(shift(str.charCodeAt(i)));
    // Characters that aren't alphabetic
    } else {
      msg += str[i];
    }
  }

  textarea2.innerHTML = msg;
  if(!msg) textarea2.innerHTML = '';
}

function shift(num) {
  for(let i = 1; i <= shiftAmount; i++){
    if(isModeEncode){
      if(num < 90){
        num++;
      } else {
        num = 65;
      }
    } else {
      if(num > 65){
        num--;
      } else {
        num = 90;
      }
    }
  }
  return num;
}