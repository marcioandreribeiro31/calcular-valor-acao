
function calcularAcoes(){
    
    let fii = document.getElementById("fii").value;
    let valor_cota = document.getElementById("valor_cota").value;
    let div_yield = document.getElementById("div_yield").value;
    let cotas = document.getElementById("cotas").value;

    if(fii === '' || valor_cota === '' || div_yield === '' || cotas === '' ){
        alert("Preencher todos os campos");
    }else{
        let resultado_renda_mensal = (div_yield * cotas).toFixed(2);
        document.getElementById("renda_mensal").innerHTML = "Renda Mensal é R$ " + resultado_renda_mensal.replace('.',',');
        
        let valor_investido = (valor_cota * cotas).toFixed(2); 
        document.getElementById("valor_investido").innerHTML = "Valor Investido é R$ " + valor_investido.replace('.',',');        
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