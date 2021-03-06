function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysNumbers = document.getElementById('days');

    for (let i=0; i < dezDaysList.length; i+=1) {
        const number = dezDaysList[i];
        const dayNumber = document.createElement('li');
        dayNumber.innerText = number;
        dayNumber.className = 'day';

        daysNumbers.appendChild(dayNumber);

        if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
            dayNumber.className += ' holiday';
        }
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
            dayNumber.className += ' friday';
        }
    };
  };

  createDaysOfTheMonth();

  function holidays(string) {
    const botaoPai = document.getElementsByClassName('buttons-container')[0];
    const botao = document.createElement('button');
    botaoPai.appendChild(botao);

    botao.innerText = string;
    botao.id = 'btn-holiday';
  }

  holidays('Feriados');

  function changeColorsHolidayDays() {
    let listClass = document.getElementsByClassName('holiday');
    for (i=0; i < listClass.length; i += 1) {
      if(listClass[i].style.backgroundColor === 'green') {
        listClass[i].style.backgroundColor = 'rgb(238,238,238)';
        console.log('trocando para a cor original');
      } else {
        listClass[i].style.backgroundColor = 'green';
        console.log('trocando para verde');
      }
    }
  }
  const botaoFeriados = document.getElementById('btn-holiday');
  botaoFeriados.addEventListener('click', changeColorsHolidayDays);
