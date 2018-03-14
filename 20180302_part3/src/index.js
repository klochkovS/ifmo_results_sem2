'use strict';

document.querySelector('#myInput').addEventListener('keypress', function() {
    if (this.value.length <= 5){
        document.querySelector('#result').textContent = this.value
                                                        |> toUperCaser
                                                        |> additioner
                                                        |> doubler
                                                        |> reverser;
    }
});

function toUperCaser(val) {
    return val.toUpperCase();
}

function additioner(val) {
    for(let i = val.length; i < 10; i++ ){
        val += '*' ;
    }
    return val;
}

function doubler(val) {
    return val.split('').map((e) => e + e).join('');
}

function reverser(val) {
    return val.split('').reverse().join('');
}
