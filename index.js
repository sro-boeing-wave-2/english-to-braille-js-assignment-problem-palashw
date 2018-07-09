/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

function convert() {
  const inputstr = document.getElementById('sourceLangText').value;
  const splitstr = inputstr.split('');
  let braillestr = [];
  for (let i = 0; i < splitstr.length; i += 1) {
    for (let j = 0; j < englishToBrailleLiteralSet.length; j += 1) {
      if (splitstr[i] === englishToBrailleLiteralSet[j][0]) {
        braillestr += englishToBrailleLiteralSet[j][1];
      }
    }
  }
  document.getElementById('targetLangText').innerHTML = braillestr;
}
window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
};
