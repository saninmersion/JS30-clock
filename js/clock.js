//get clock hands html
const secondsHand = document.querySelector('.hand-second');
const minutesHand = document.querySelector('.hand-minute');
const hoursHand = document.querySelector('.hand-hour');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // update seconds hand
    const secondsDeg = (seconds / 60) * 360;
    const minutesDeg = (minutes / 60) * 360;
    const hoursDeg = (hours / 12) * 360;

    secondsHand.style.transform = `rotate(${secondsDeg}deg)`; 
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`; 
    hoursHand.style.transform = `rotate(${hours}deg)`; 
    
}
setInterval(setDate, 1000);