class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {
   this.intervalId = setInterval(()=> {
  this.currentTime += 1
    if (printTimeCallback){
      printTimeCallback();
    }
  },1000)
};

  getMinutes() {
  return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    let seconds = 0;
    if (this.currentTime < 60){
      return this.currentTime;
    }else {
      seconds = (this.currentTime / 60) - Math.floor(this.currentTime / 60);
      return Math.floor(seconds.toFixed());
    }
    }
  
  computeTwoDigitNumber(value) {
    if (value < 10 ){
      return "0" + value;
    }else if (value >= 10){
      return value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${computeTwoDigitNumber(getMinutes(value))} : 
    ${computeTwoDigitNumber(getSeconds(value))}`;
  }
}
