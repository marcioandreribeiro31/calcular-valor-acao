
function calcularAcoes(){
    
    let fii = document.getElementById("fii").value;
    let valor_cota = document.getElementById("valor_cota").value;
    let div_yield = document.getElementById("div_yield").value;
    let cotas = document.getElementById("cotas").value;
    
    let resultado_renda_mensal = div_yield * cotas;

    document.getElementById("renda_mensal").innerHTML = "Renda Mensal é R$ " + arredondar(resultado_renda_mensal).toFixed(2);

    let valor_investido = valor_cota * cotas;
    document.getElementById("valor_investido").innerHTML = "Valor Investido é R$ " + arredondar(valor_investido).toFixed(2);

    function arredondar(valor){
        return Math.round(valor * 100) / 100;
    }
    
} 