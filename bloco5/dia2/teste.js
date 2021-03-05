let a = document.querySelector('#elementoOndeVoceEsta');
    console.log(a.parentNode);
    b = a.parentNode;
    b.style.color = 'red';

    c = a.firstElementChild;
    console.log(c);

    d = document.querySelector('#pai');
    console.log(d.firstElementChild);
    console.log(d.lastElementChild);

    e = a.previousElementSibling;
    f = a.nextSibling;

    irmaoDeA = document.createElement('p');
    irmaoDeA.innerText = 'Eu sou irmao de A';
    irmaoDeA.id = 'deleta3';
    d.appendChild(irmaoDeA);

    filhoDeA = document.createElement('div');
    filhoDeA.innerText = 'Sou filho de A';
    filhoDeA.id = 'deleta1';
    a.appendChild(filhoDeA);

    filhoDoPrimeiroFilhoDoFilho = document.createElement('p');
    filhoDoPrimeiroFilhoDoFilho.innerText = 'Sou o filho do primeiroFilhoDoFilho';
    filhoDoPrimeiroFilhoDoFilho.id = 'deleta2';
    a.firstElementChild.appendChild(filhoDoPrimeiroFilhoDoFilho);

    let deleteOne = document.querySelector('#primeiroFilho');
    let deleteTwo = document.querySelector('#terceiroFilho');
    let deleteThree = document.querySelector('#quartoEUltimoFilho');
    // let deleteFour = a.nextSibling;
    d.removeChild(deleteOne);
    d.removeChild(deleteTwo);
    d.removeChild(deleteThree)

    // let paiDopai = document.querySelector('#paiDoPai');
    // paiDopai.removeChild(deleteFour);

    let deleteFour = document.querySelector('#deleta1');
    a.removeChild(deleteFour);

    let deleteFive = document.querySelector('#deleta2');
    primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
    primeiroFilhoDoFilho.removeChild(deleteFive);

    let deleteSix = document.getElementById('segundoEUltimoFilhoDoFilho');
    a.removeChild(deleteSix);


    let deleteSeven = document.getElementById('deleta3');
    d.removeChild(deleteSeven);

    let deleteEight = a.nextSibling;
    deleteEight.remove();

    let deleteNine = document.getElementById('paiDoPai');
    // document.body.removeChild(deleteNine);
    