setInterval(tickClock, 1000);

const getSecondsAngle = (seconds)=>{
    return Math.floor(seconds*360/60 - 90)
}

const getMinutesAngle = (minutes)=>{
    return Math.floor(minutes*360/60 - 90)
}
const getHoursAngle = (hours)=>{
    return Math.floor(hours*360/12 - 90)
}

function tickClock() { 
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  document.querySelector('#hour').style.transform =`rotate(${getHoursAngle(hours)}deg)`;
  document.querySelector('#min').style.transform =`rotate(${getMinutesAngle(minutes)}deg)`;
  document.querySelector('#sec').style.transform =`rotate(${getSecondsAngle(seconds)}deg)`;
}