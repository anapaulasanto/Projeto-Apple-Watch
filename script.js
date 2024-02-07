const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}; 
//nos objetos eu tenho campos de informações sobre a variavel, no array eu nao tenho esses campos tenho a posição de valores na minha lista, que vou acessar com [n], começando do 0. const minhaLista = [1,2,3,4,5]
//array acessar: minhaLista[3]
//objetos acessar: meiaNoite.pasta
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];
let imagemSelecionada = 1; //imagem de posicao 1 (segunda opcao) vai ser selecionada por padrao (ta checked no radio)
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    //vou guardar o id do cara que eu escolhi na imagem, e que vai ficar checked, dentro da lista que tem o name opcao-imagem
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    //pega o primeiro carac desse id e usa pra att essa var imagemSelecionada, qnd eu clicar na imagem vai ser o id= 0-imagem, na outra imagem 1-imagem. Entao pega so o primeiro carac que é oq muda e ta toda a informacao da img selecionada
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg'
    //quero que imagem-0 seja trocado a a partir do que selecionei nas img pequenas
    
}//add a função por onclick no input

function trocarTamanho() {

    //atualizar variavel de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    //pegar o id do cara que ta marcado
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //pega o texto e me da so o primeiro carac dele

    //mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];

    //mudar a imagem de acordo com a opção.
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');//add a classe pra img ficar pequena qnd clicar no botao de 41mm
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');//se n clicar no 41 mm, remove a classe
    }
}//add a função por onclick no input

function trocarCor() {
    //atualizar variavel de controle do tipo de cor
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    const corSelecionada = idOpcaoSelecionada.charAt(0);

    //trocar titulo da pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];


    //trocar nome da cor
    //trocar imagens das miniaturas
    //trocar imagem de visualizão
}