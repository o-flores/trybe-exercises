document.getElementById('header-container').style.backgroundColor = 'green';

let emergency = document.getElementsByClassName('emergency-tasks');
for (let i = 0; i < emergency.length; i+=1) {
    emergency[i].style.backgroundColor = 'pink';
}

let h3 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < h3.length; i+=1) {
    h3[i].style.backgroundColor = 'purple';
}

let noEmergency = document.querySelectorAll('.no-emergency-tasks');
for (let i = 0; i < noEmergency.length; i+=1) {
    noEmergency[i].style.backgroundColor = 'yellow';
}

let noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyH3.length; i+=1) {
    noEmergencyH3[i].style.backgroundColor = 'black';
}

document.querySelector('#footer-container').style.backgroundColor = 'darkgreen';

