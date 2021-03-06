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

function addFridayBtn(string) {
  let btnParent = document.getElementsByClassName('buttons-container')[0];
  const btn = document.createElement('button');
  btn.id = 'btn-friday';
  btn.innerText = string;
  btnParent.appendChild(btn);
}

addFridayBtn('Sexta-feira');

function changeFridayDays() {
  const dezFridaysDays = [4, 11, 18, 25];
  const friday = document.getElementsByClassName('friday');
  for (i=0; i < friday.length; i+=1) {
    if (friday[i].innerText !== 'Sextou') {
      friday[i].innerText = 'Sextou'
    } else {
      friday[i].innerText = dezFridaysDays[i];
    }
  }
}
const fridayBtn = document.getElementById('btn-friday');
fridayBtn.addEventListener('click', changeFridayDays)



function mouseOverDays() {
  const monthDays = document.getElementById('days');

  monthDays.addEventListener('mouseover', function(evt) {
    evt.target.style.fontSize = '30px';
    evt.target.style.fontWeight = '800';
  })
};

function mouseOutDays() {
  const monthDays = document.getElementById('days');

  monthDays.addEventListener('mouseout', function(evt) {
    evt.target.style.fontSize = '20px';
    evt.target.style.fontWeight = '200';
  })
};

mouseOutDays();
mouseOverDays();

function addSpanTasks(string) {
  let tasksContainer = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  span.innerText = string;

  tasksContainer.appendChild(span);
}
addSpanTasks('cozinhar');

function addColorMyTasks(color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = color;

  tasksContainer.appendChild(div);

  let br = document.createElement('br');
  tasksContainer.appendChild(br);
}

addColorMyTasks('green');
addSpanTasks('Estudar');
addColorMyTasks('red');
addSpanTasks('Trabalhar');
addColorMyTasks('blue');

function addTaskSelected() {
  let selectedTask = document.getElementsByClassName('task selected');
  let tasks = document.querySelectorAll('.task');

  for(let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', function(){
      if(selectedTask.length === 0) {
        tasks[i].className = 'task selected';
      } else {
        tasks[i].className = 'task';
      }
    })
  }
}
addTaskSelected();


function addColorOfTaskSelected() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.getElementsByClassName('day');

  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener('click', function(){
      if(selectedTask.length === 0) {
        days[i].style.color = 'rgb(119,119,119)';
      } else {
        days[i].style.color = selectedTask[0].style.backgroundColor;
      }
    })
  }
}
addColorOfTaskSelected();

// function addTasks() {
//   let tasks = document.getElementsByClassName('my-tasks')[0];
//   let addBtn = document.getElementById('btn-add');
//   let inputText = document.getElementById('task-input');

//   addBtn.addEventListener('click', function(){
//     let span = document.createElement('span');
//     span.innerText = inputText.value;

//     tasks.appendChild(span);

//     let br = document.createElement('br');
//     tasks.appendChild(br)

//     inputText.value = '';
//   })
// }




