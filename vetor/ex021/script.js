function main() {
    var n, i, cont;
    var mediaAltura, porcentagem, soma;

  
    n = Number(window.prompt('Entre com a quantidade de pessoas'));
   // var vetor = [n];
    var vetnomes = [];
    var vetidades = [];
    var vetalturas = [];

    for (i = 0; i <n ; i++) {

       //window.alert("Escreva os dados da "& ( i + 1) & "° pessoa:");
        window.alert ("Dados da "+(i+1)+"ª Pessoa");
        vetnomes[i] = window.prompt('Entre com o nome:');
        
        vetidades[i] = Number(window.prompt('Entre com a idade:'));
      
        vetalturas[i] = Number(window.prompt('Entre com a altura:'));
    }
    soma = 0;
    for (i = 0; i <= n - 1; i++) {
        soma = soma + vetalturas[i];
    }
    mediaAltura = soma / n;
    window.alert("Altura média das pessoas é: " + mediaAltura);
    cont = 0;
    for (i = 0; i <n; i++) {
        if (vetidades[i] < 16) {
            cont = cont + 1;
        }
    }
    porcentagem =  (cont * 100) / n;
    window.alert("A porcentagem de pessoas com menos de 16 é: " + porcentagem + "%");
    for (i = 0; i < n;  i++) {
        if (vetidades[i] < 16) {
            window.alert("Nome das pessoas que são menores de 16 anos é: " + vetnomes[i]);
        }
    }
}

