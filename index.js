// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/", ];

let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");
function randomPw() {
  let passLength = document.querySelector("#input-length").value;
  if (passLength > 21 || passLength < 1) {
    passLength = 21;
  }
  pass1.textContent = "";
  pass2.textContent = "";
  for (let i = 0; i < passLength; i++) {
    let b = Math.floor(Math.random() * characters.length);
    let a = Math.floor(Math.random() * characters.length);
    pass1.textContent += characters[a];
    pass2.textContent += characters[b];
  }
}
function copyPw1() {
  if (pass1.textContent !== "Copied") {
    navigator.clipboard.writeText(pass1.textContent);
    pass1.textContent = "Copied";
  }
}

function copyPw2() {
  if (pass2.textContent !== "Copied") {
    navigator.clipboard.writeText(pass2.textContent);
    pass2.textContent = "Copied";
  }
}

pass1.onclick = copyPw1;
pass2.onclick = copyPw2;
