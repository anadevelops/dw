window.onload = function() {
    document.getElementById('nova-conta').style.display = 'none';
    document.getElementById('login-body').style.display = 'none';
    document.querySelector('label:nth-of-type(1) input').value = '';
    document.querySelector('label:nth-of-type(2) input').value = '';
    document.querySelector('label:nth-of-type(3) input').value = '';
    document.querySelector('label:nth-of-type(4) input').value = '';
    document.querySelector('label:nth-of-type(5) input').value = '';
    document.querySelector('label:nth-of-type(6) input').value = '';
    document.querySelector('label:nth-of-type(7) input').value = '';
    document.querySelector('label:nth-of-type(8) input').value = '';
}


function mostrarApenasHome() {
    document.getElementById('nova-conta').style.display = 'none';
    document.getElementById('login-body').style.display = 'none';
    const descricao = document.getElementById('divHome');
    if (descricao.style.display == 'none') {
        descricao.style.display = 'block';
    }
}

function mostrarApenasLogin() {
    const login = document.getElementById('login-body');
    if (login.style.display == 'none') {
        login.style.display = 'block';
    }
    document.getElementById('nova-conta').style.display = 'none';
    document.getElementById('divHome').style.display = 'none';
}

function mostrarApenasConta() {
    const conta = document.getElementById('nova-conta');
    if (conta.style.display == 'none') {
        conta.style.display = 'block';
    }
    document.getElementById('login-body').style.display = 'none';
    document.getElementById('divHome').style.display = 'none';
}

function verificaPreenchimento() {
    const email = document.querySelector('label:nth-of-type(1) input').value;
    const senha = document.querySelector('label:nth-of-type(2) input').value;
    const botao = document.getElementById('botaoLogin');

    const verificaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (senha !== '' && verificaEmail.test(email)) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

function validaTextoEmBranco(elemento, campo, nome){
    const valor = elemento.getValue()
    if (valor == ''){

    }
}