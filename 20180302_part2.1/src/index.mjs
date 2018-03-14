import mixin from './mixin.mjs';

console.log( 5::mixin() );

let elHead = document.createElement('h4');
document.body.appendChild(elHead);
elHead.setAttribute('id', 'author');
elHead.setAttribute('title', 'GossJS');
elHead.textContent += 'Klochkov Sergey';
