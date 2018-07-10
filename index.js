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
  let braillestr = '';
  const mymap = new Map(englishToBrailleLiteralSet);
  let key;
  for (let i = 0; i < splitstr.length; i += 1) {
    key = splitstr[i];
    braillestr += mymap.get(key);
  }
  document.getElementById('targetLangText').innerHTML = braillestr;
}
window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
};
