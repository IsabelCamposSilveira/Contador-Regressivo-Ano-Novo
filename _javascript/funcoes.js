const segundosId = document.querySelector("#segundos");
const minutosId = document.querySelector("#minutos");
const horasId = document.querySelector("#horas");
const diasId = document.querySelector("#dias");
const anoId = document.querySelector("#ano");

//const para atualizar automaticamente os anos
const anoNovo = new Date().getFullYear() + 1;
const anoNovoData = new Date(`Janeiro 01 ${anoNovo} 00:00:00`);

//Colocando o ano no H1 id=ano
anoId.textContent = anoNovo;

//deixando sempre com duas unidades os valores do contador
const duasUnidades = unidade => unidade < 10 ? '0' + unidade : unidade;

const inseirValoresdoContador = ({dias, horas, minutos, segundos}) => {
        //inserindo os valores gerados nas constantes
        segundosId.textContent = duasUnidades(segundos);
        minutosId.textContent = duasUnidades(minutos);
        horasId.textContent = duasUnidades(horas);
        diasId.textContent = duasUnidades(dias);
}

const dataContador = () => {
    //const para ver o dia/horário atual
    const dataAtual = new Date();
    //const para mostrar em Milésimos quanto falta para o próximo ano
    const diferenca = anoNovoData - dataAtual;

    //Math.floor para arredondar o numero para baixo
    //Gerando os valores do contador
    const dias = Math.floor(diferenca/1000/60/60/24);
    const horas = Math.floor(diferenca/1000/60/60) % 24;
    const minutos = Math.floor(diferenca/1000/60) % 60;
    const segundos = Math.floor(diferenca/1000) % 60;

    inseirValoresdoContador({dias, horas, minutos, segundos});
}

//setInterval serve para especificar a frequencia que algo vai acontecer, é calculado por milisegundos
setInterval(dataContador, 1000);