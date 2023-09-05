
function calcularAcoes(){
    
    let fii = document.getElementById("fii").value;
    let valor_cota = document.getElementById("valor_cota").value;
    let div_yield = document.getElementById("div_yield").value;
    let cotas = document.getElementById("cotas").value;

    if(fii === '' || valor_cota === '' || div_yield === '' || cotas === '' ){
        alert("Preencher todos os campos");
    }else{        
        let resultado_renda_mensal = (div_yield * cotas).toFixed(2);
        let resultado_renda_mensal_convertido = new Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(resultado_renda_mensal);
        document.getElementById("renda_mensal").innerHTML = "Renda Mensal é R$ " + resultado_renda_mensal_convertido;
        
        let valor_investido = (valor_cota * cotas).toFixed(2);
        let valor_investido_convertido =  new Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(valor_investido); 
        document.getElementById("valor_investido").innerHTML = "Valor Investido é R$ " + valor_investido_convertido;        
    }       
} 
function arredondar(valor){
    return Math.round(valor * 100) / 100;
}    
function limparInput(){
    document.getElementById("form").reset();
}
function focarInput(){
    document.getElementById("fii").focus();
}
