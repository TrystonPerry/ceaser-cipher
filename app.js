let tooltip = document.getElementsByClassName('my-tooltip')[0];
let alternate = document.getElementsByClassName('fa-exchange-alt')[0];

let text1 = document.getElementById('text1');
let textarea1 = document.getElementById('textarea1');
let text2 = document.getElementById('text2');
let textarea2 = document.getElementById('textarea2');
let shiftCount = document.getElementById('shift-count');

let isModeEncode = true;
let shiftAmount = 1;

alternate.addEventListener('mouseover', function(e) {
  tooltip.style.display = 'block';
})

alternate.addEventListener('mouseout', function(e) {
  tooltip.style.display = 'none';
})

function updateShift() {
  shiftAmount = shiftCount.value;
  encode();
}

function switchMode() {
  let textarea1C = textarea1.value;
  let textarea2C = textarea2.innerHTML;
  if(isModeEncode){
    text1.innerHTML = 'Ciphertext'; text2.innerHTML = 'Plaintext';
    textarea1.value = textarea2C; textarea2.innerHTML = textarea1C;
    textarea1.placeholder = 'Ciphertext...';
  } else {
    text1.innerHTML = 'Plaintext'; text2.innerHTML = 'Ciphertext';
    textarea2.innerHTML = textarea1C; textarea1.value = textarea2C;
    textarea1.placeholder = 'Plaintext...'
  }
  isModeEncode = !isModeEncode
}
