window.onload = function(){
    function setBackgroundColor(color) {
        content = document.getElementById('content');
        content.style.backgroundColor = color;
        localStorage.setItem('background color', color);
    }

    function setFontSize(size) {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontSize = size;
        }
        localStorage.setItem('font size', size);
    }

    function setColor(color) {
        content = document.getElementById('content');
        content.style.color = color;
        localStorage.setItem('color', color);
    }

    btnBackgroundColor = document.getElementById('btn-background-color');
    inputTextBackgroundColor = document.getElementById('input-background-color');
    btnBackgroundColor.addEventListener('click', function(){
        color = inputTextBackgroundColor.value;
        setBackgroundColor(color);
    })

    inputTextBackgroundColor.addEventListener('keydown', function(event){
        if(event.key === 'Enter' && inputTextBackgroundColor.value.length > 0) {
            color = inputTextBackgroundColor.value;
            setBackgroundColor(color);
        }
    })

    btnsFontSize = document.querySelectorAll('#font-size button');
    for (let i = 0; i < btnsFontSize.length; i += 1) {
        btnsFontSize[i].addEventListener('click', function(){
            size = btnsFontSize[i].innerText;
            setFontSize(size);
        })
    }

    btnColor = document.getElementById('btn-color');
    inputTextColor = document.getElementById('input-color');
    btnColor.addEventListener('click', function(){
        color = inputTextColor.value;
        setColor(color);
    })

    inputTextColor.addEventListener('keydown', function(event){
        if (event.key === 'Enter' && inputTextColor.value.length > 0) {
            color = inputTextColor.value;
            setColor(color);
        }
    })

    backgroundColor = localStorage.getItem('background color');
    if (backgroundColor) {
        setBackgroundColor(backgroundColor);
    }

    fontSize = localStorage.getItem('font size');
    if(fontSize) {
        setFontSize(fontSize);
    }

    color = localStorage.getItem('color');
    if (color) {
        setColor(color);
    }










}