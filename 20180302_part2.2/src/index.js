
function clckFunc() {
     this.textContent = this.id;
}

document.querySelector('#bt1').addEventListener('click', clckFunc);
document.querySelector('#bt2').addEventListener('click', ({target}) => target::clckFunc());

let elHead = document.createElement('h4');
document.body.appendChild(elHead);
elHead.setAttribute('id', 'author');
elHead.setAttribute('title', 'GossJS');
elHead.textContent += 'Klochkov Sergey';
