let states = {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Distrito Federal',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernmbuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins'
};

function getStates() {
for (let key in states) {
    const select = document.getElementById('state');
    const option = document.createElement('option');
    option.value = key;
    option.innerText = states[key];
    select.appendChild(option);    
    }
}

function validateDate(data) {
  if (data.length === 10) {
    const day = data.substr(0,2);
    const month = data.substr(3,2);
    const year = data.substr(6,4);
    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
      return true;
    }
  }
  return false;
}

function checkDate() {
  const date = document.getElementById('startdate');
  date.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const data = date.value;
      const userDate = validateDate(data);
      if (userDate === false) {
        alert('data inválida!');
        date.value = '';
      }
    }
  })
}

function clearAll() {
  const btn = document.getElementById('btn-clear');
  const input = document.querySelectorAll('input');
  const text = document.getElementById('resume');
  for (let index = 0; index < input.length; index += 1) {
    input[index].value = '';
  }
  text.value = '';
}

const btn = document.getElementById('btn-clear');
btn.addEventListener('click', clearAll);

window.onload = () => {
  getStates();
  checkDate();
}