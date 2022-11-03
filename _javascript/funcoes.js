const anoNovo = new Date().getFullYear() + 1;
const anoNovoData = new Date(`Janeiro 01 ${anoNovo} 00:00:00`);

const dataContador = () => {
    const dataAtual = new Date();
    const diferenca = anoNovoData - dataAtual;

    console.log(diferenca);
}

dataContador();