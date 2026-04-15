function main() {
    var n, qtdpares, i;

    
    n = Number(window.prompt('Quantos números você vai digitar?'));
    var vetor = [n];

    for (i = 0; i <= n - 1; i++) {
        vetor[i] = Number(window.prompt(`Digite o  ${ i + 1}° número:`));
    }

    qtdpares = 0;
    for (i = 0; i <= n - 1; i++) {
        if (vetor[i] % 2 == 0) {
            qtdpares = qtdpares + 1;
            window.alert(`O número par é: ${vetor[i]}`);
        }
    }
    window.alert(`Quantidade de números pares: ${qtdpares}`);
}
