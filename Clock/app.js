
function pad(number) {
    return number < 10 ? '0' + number : number.toString();
  }
  
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12) {
      hours -= 12; 
    } else if (hours === 0) {
      hours = 12; 
    }
  
    document.getElementById('hours').textContent = pad(hours);
    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);
    document.getElementById('ampm').textContent = ampm;
  }
  

  updateClock(); 
  setInterval(updateClock, 1000); 
  