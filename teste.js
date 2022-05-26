var form = document.getElementById("form");
var footer = document.querySelector('footer');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    VerificaCampos();
});

function busca(url) {
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

    if (input.value == '') {
        alert('Prencha esse campo');
        input.focus()
    } else {
        if (validateBi(input.value)) {
            var url = `https://api.gov.ao/consultarBI/v2/?bi=${input.value}`;
            var d = busca(url);
            var data = JSON.parse(d);
            prencheDados(data);
            footer.style.position = 'relative';
            mostrarBox();
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