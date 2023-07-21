// Write your code here
const bulb1 = document.querySelector('#lightbulb1');
const bulb2 = document.querySelector('#lightbulb2');
const bulb3 = document.querySelector('#lightbulb3');
const subtitle = document.querySelector('.subtitle');
let count = 0;

bulb1.addEventListener('click', () => {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times.`
    if(bulb1.classList !== 'active'){
        bulb1.classList.toggle('active');
    }else{
        bulb1.classList.toggle('item');
    }
});

bulb2.addEventListener('click', () => {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times.`
    if(bulb2.classList !== 'active'){
        bulb2.classList.toggle('active');
    }else{
        bulb2.classList.toggle('item');
    }
});

bulb3.addEventListener('click', () => {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times.`
    if(bulb3.classList !== 'active'){
        bulb3.classList.toggle('active');
    }else{
        bulb3.classList.toggle('item');
    }
});