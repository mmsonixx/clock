
const clock = document.querySelector('[data-clock]');
const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');


function updateClock() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

  const minuteDegree = minutes * 6;
    const hourDegree = hours * 30 + minutes * 0.5;
    
hour.style.transform = `translate(-50%, -100%) rotate(${hourDegree}deg)`;

minute.style.transform = `translate(-50%, -100%) rotate(${minuteDegree}deg)`;
}
updateClock();

setInterval(updateClock, 1000);