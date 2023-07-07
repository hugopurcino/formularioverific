const form = document.getElementById('form-verifica');
const camp1 = document.getElementById('valor-um');

function validaNumero(campoCompleto) {    
return campoCompleto;
}

form.addEventListener('submit', function(e) {
    let  formValido = false;
    e.preventDefault()


const camp2 = document.getElementById('valor-dois');
const mensagemSucesso = `<b>O valor um:<b/> <b>${camp1.value}</b> <b>e menor que o valor dois:</b> <b>${camp2.value} prossiga!</b>`;

    formValido = validaNumero(camp1.value < camp2.value)
    if(formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';

        camp1.value = '';
        camp2.value = '';
    } else {
        camp1.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

    })
    console.log(form);

    