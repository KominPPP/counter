// let substruct = document.querySelector('#substruct');
// let add = document.querySelector('#add');

// substruct.addEventListener('click', function() {
// let output = document.querySelector('#result');
// let result = Number(output.textContent) - 1 ;
// output.textContent = result;

// console.log(output)
// });

// add.addEventListener('click', function() {
// let output = document.querySelector('#result');
// let result = Number(output.textContent) + 1 ;
// output.textContent = result;

// console.log(output)


// });

let substruct = document.querySelector('#substruct'),
    add = document.querySelector('#add'),
    add10 = document.querySelector('#add10'),
    add100 = document.querySelector('#add100'),
    remove = document.querySelector('#remove'),
    output = document.querySelector('#result');

function updateOutput(operation) {
    let result = Number(output.textContent) + operation;
    output.textContent = result;
    console.log(output);
}

substruct.addEventListener('click', () => updateOutput(-1));
add.addEventListener('click', () => updateOutput(+1));
add10.addEventListener('click', () => updateOutput(+10));
add100.addEventListener('click', () => updateOutput(+100));
remove.addEventListener('click', () => updateOutput( output.textContent = 0));