import moment from 'moment';
import { internet } from 'faker';


let el = document.createElement('pre');

document.body.appendChild(el);


el.textContent += moment().format('MMMM Do YYYY, h:mm:ss a');
el.textContent +=  '\n';
el.textContent += internet.email();

let elHead = document.createElement('h4');
document.body.appendChild(elHead);
elHead.setAttribute('id', 'author');
elHead.setAttribute('title', 'GossJS');
elHead.textContent += 'Klochkov Sergey';
