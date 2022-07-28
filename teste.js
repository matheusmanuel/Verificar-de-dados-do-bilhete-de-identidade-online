var form = document.getElementById("form");
var footer = document.querySelector('footer');
var preloader = document.querySelector('.preloader_main');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    VerificaCampos();
});

window.addEventListener('load', () => {
    preloader.classList.remove('activo');
});


function busca(url) {
    preloader.classList.add('activo');
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();

    return request.responseText;
}

function mostrarBox() {
    var main = document.querySelector('main');
    main.style.display = "block";
    setTimeout(() => {
        main.classList.add('active');
    }, 300);
}

function VerificaCampos() {
    var input = document.getElementById('input');
    input.value = input.value.toUpperCase();
    if (input.value == '') {
        alert('Prencha esse campo');
        input.focus()
    } else {
        if (validateBi(input.value)) {
            var url = `https://api.gov.ao/consultarBI/v2/?bi=${input.value}`;
            var d = busca(url);
            var data = JSON.parse(d);

            if (data.length > 0) {
                setTimeout(() => {
                    preloader.classList.remove('activo');
                }, 1000);

                prencheDados(data);
                footer.style.position = 'static';
                mostrarBox();
            } else {
                alert("Numero do Bi inválido/incorrecto! Tente novamente :(");
                preloader.classList.remove('activo');
            }

        } else {
            alert('Numero de Bi inválido!! Tente novamente');
        }
    }
}

function validateBi(input) {
    const regex = /\d{9}[A-Za-z]{2}\d{3}$/;
    return regex.test(input);
}

function prencheDados(arrayD) {
    const nome = document.getElementById('nome'),
        sobrenome = document.getElementById('sobrenome'),
        nomeDoPai = document.getElementById('nomeDoPai'),
        sobrenomeDoPai = document.getElementById('sobrenomeDoPai'),
        nomeDaMae = document.getElementById('nomeDaMae'),
        sobrenomeDaMae = document.getElementById('sobrenomeDaMae'),
        numeroBi = document.getElementById('NumeroBi'),
        enderecoResidencia = document.getElementById('enderecoResidencia'),
        bairroResidencia = document.getElementById('bairroResidencia'),
        municipioResidencia = document.getElementById('municipioResidencia'),
        municipioNascimento = document.getElementById('municipioNascimento'),
        provinciaNascimento = document.getElementById('provinciaNascimento'),
        dataNascimento = document.getElementById('dataNascimento'),
        sexo = document.getElementById('sexo'),
        estadoCivil = document.getElementById('estadoCivil'),
        emitidoEm = document.getElementById('emitidoEm'),
        validoAte = document.getElementById('validoAte');
    nome.innerText = arrayD[0]["FIRST_NAME"];
    sobrenome.innerText = arrayD[0]["LAST_NAME"];
    nomeDoPai.innerText = arrayD[0]["FATHER_FIRST_NAME"];
    sobrenomeDoPai.innerText = arrayD[0]["FATHER_LAST_NAME"];
    nomeDaMae.innerText = arrayD[0]["MOTHER_FIRST_NAME"];
    sobrenomeDaMae.innerText = arrayD[0]["MOTHER_LAST_NAME"];
    numeroBi.innerText = arrayD[0]["ID_NUMBER"];
    // parte traseira
    enderecoResidencia.innerText = arrayD[0]["RESIDENCE_ADDRESS"];
    bairroResidencia.innerText = arrayD[0]["RESIDENCE_NEIGHBOR"];
    municipioResidencia.innerText = arrayD[0]["RESIDENCE_MUNICIPALITY_NAME"];
    municipioNascimento.innerText = arrayD[0]["BIRTH_MUNICIPALITY_NAME"];
    provinciaNascimento.innerText = arrayD[0]["BIRTH_PROVINCE_NAME"];
    dataNascimento.innerText = arrayD[0]["BIRTH_DATE"];
    sexo.innerText = arrayD[0]["GENDER_NAME"];
    estadoCivil.innerText = arrayD[0]["MARITAL_STATUS_NAME"];
    emitidoEm.innerText = arrayD[0]["ISSUE_DATE"];
    validoAte.innerText = arrayD[0]["EXPIRY_DATE"];
}

// Selecting all required elements
const wrapper = document.querySelector(".semInternet");

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest(); //criando novo objeto XML
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //sending get request on this URL
        xhr.onload = ()=>{ //uma vez ajax carregado
            //se o status do ajax for igual a 200 ou menor que 300, isso significa que o usuário está obtendo dados desse URL fornecido
            //ou seu status de resposta é 200, o que significa que ele está online
            if(xhr.status == 200 && xhr.status < 300){
               //o usuário está com internet
                setTimeout(()=>{ //ocultar a notificação do brinde automaticamente após 5 segundos
                    //remover o prenchimento branco
                    wrapper.classList.remove('mostrarBoxSemInternet');
                }, 200);
            }else{
                //o usuário está sem internet
                offline(); //chamando a função offline se o status do ajax não for igual a 200 ou não inferior a 300
            }
        }
        xhr.onerror = ()=>{
            offline(); //chamando a função offline se o URL passado não estiver correto ou retornando 404 ou outro erro
        }
        xhr.send(); //enviando solicitação get para o URL passado
    }

    function offline(){ //função para quando o usúario estiver sem internet 
        wrapper.classList.add('mostrarBoxSemInternet');
    }

    setInterval(()=>{ //esta função setInterval chama ajax frequentemente após 100ms
        ajax();
    }, 100);
}
