var socket = io.connect('http://localhost:3000');

let type = document.getElementById('type');
let file = document.getElementById('file');
let hash = document.getElementById('hash');
let sb = document.getElementById('sb');
let output = document.getElementById('output');
let pass = document.getElementById('pass');

sb.addEventListener('click', function(){
    socket.emit('form', {
        type: type.value,
        hash: hash.value
    });
});

socket.on('form', function(data){
    output.innerHTML = `<h1 style="color: white;">So ... ${data}</h1>`;
    console.log(data);
});
