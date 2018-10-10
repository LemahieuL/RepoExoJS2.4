var raz = document.getElementsByName('button')[0]

raz.addEventListener('click', resetfields)

function resetfields(){
document.getElementById('lastname').value="";
document.getElementById('firstname').value=""
document.getElementById('city').value="";
}
