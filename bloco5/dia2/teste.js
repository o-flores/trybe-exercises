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
    d.appendChild(irmaoDeA);

    filhoDeA = document.createElement('div');
    filhoDeA.innerText = 'Sou filho de A';
    a.appendChild(filhoDeA);

    filhoDoPrimeiroFilhoDoFilho = document.createElement('p');
    filhoDoPrimeiroFilhoDoFilho.innerText = 'Sou o filho do primeiroFilhoDoFilho';
    a.firstElementChild.appendChild(filhoDoPrimeiroFilhoDoFilho);
