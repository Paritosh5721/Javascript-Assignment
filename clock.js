function showTime() {
    const hrs = new Date().getHours();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();
      const inter= hrs < 12 ? "AM": "PM";
      const time  =`${hrs}:${minutes}:${seconds} ${inter}`
      document.getElementById('currentTime').innerHTML = time;
  }
  showTime();
  setInterval(function () {
      showTime();
  }, 1000);