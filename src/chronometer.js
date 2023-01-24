class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
   this.intervalId = setInterval(() =>{
      this.currentTime ++;
      if (typeof printTimeCallback == 'function'){
        return printTimeCallback();
      }
    }, 1000);// ... your code goes here
  }

  getMinutes() {
   if (this.currentTime === 0) return 0;
    else {return Math.floor(this.currentTime/60);}// ... your code goes here
  }

  getSeconds() {
    if(this.currentTime === 0) return 0;
    else {return this.currentTime%60}// ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let result = JSON.stringify(value);
     if(result.length < 2){
      return '0' + result;// ... your code goes here
  }else {return result}}

  stop() {
   clearInterval(this.intervalId); // ... your code goes here
  }

  reset() {
    this.currentTime = 0;// ... your code goes here
  }

  split() {

  let minutos = this.computeTwoDigitNumber(this.getMinutes());
  let segundos = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutos}:${segundos}`;// ... your code goes here
  }
}
