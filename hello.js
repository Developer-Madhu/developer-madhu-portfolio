console.log("My name is madhusudhan")
var btn = document.getElementById('btn1')
var out = document.getElementById('inp3');
btn.addEventListener('click', () => {
    var inp = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    var c = parseInt(inp) + parseInt(inp2);
    out.value = c;
})