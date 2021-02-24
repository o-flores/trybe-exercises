let nota = 4;
let situacao;
if (nota >=8) {
    situacao = 'aprovado';
    // console.log('Aprovado(a)');
} else if (nota < 6) {
    situacao = 'reprovado';
    // console.log('Reprovado(a)');
} else {
    situacao = 'lista';
    // console.log('Lista')
}

switch (situacao) {
    case 'aprovado':
        console.log('Aprovado(a)');
        break;
    case 'lista':
        console.log('Lista');
        break;
    case 'reprovado':
        console.log('Reprovado(a)');
        break;
    default:
        console.log(erro);
}
