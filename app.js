function colors(){
    var red=document.getElementById('red').value;
    var blue=document.getElementById('blue').value;
    var green=document.getElementById('green').value;

    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')';
    let output=document.getElementById('output');
    output.innerHTML='rgb('+red+','+green+','+blue+')';

}