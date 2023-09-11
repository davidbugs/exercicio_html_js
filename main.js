const form = document.getElementById('form');
const formA = document.getElementById('formA');
const formB = document.getElementById('formB');
const sucesso = document.getElementById('successMessage');
const erro = document.getElementById('errorMessage');

function sacandoDinheiro(formA, formB){
    return formB > formA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = sacandoDinheiro(formA.value, formB.value)
    if(validarForm){
        sucesso.style.display = 'block';
        formA.value='';
        formB.value='';
    }
})

formB.addEventListener('keyup', function(e){
    let validarForm = sacandoDinheiro(formA.value, formB.value)
    if(!validarForm){
        erro.style.display = 'block';
        sucesso.style.display= 'none';
    } else{
        erro.style.display = 'none';
    }
})