var mesc = 0;
var sec = 0;
var mint = 0;
var hour = 0;

var getmesc = document.getElementById("mesc");
var getsec = document.getElementById("sec");
var getmint = document.getElementById("mint");
var gethour = document.getElementById("hour");

var set;

function start() {
  set = setInterval(function () {
    mesc++;
    getmesc.innerHTML = mesc.toString().padStart(2, '0');
    if (mesc >= 100) {
      sec++;
      getsec.innerHTML = sec.toString().padStart(2, '0');
      mesc = 0;
    }
    if (sec >= 60) {
      mint++;
      getmint.innerHTML = mint.toString().padStart(2, '0');
      sec = 0;
    }
    if (mint >= 60) {
      hour++;
      gethour.innerHTML = hour.toString().padStart(2, '0');
      mint = 0;
    }
  }, 10);

  // disable the start button
  document.querySelector('.btn > button:nth-child(2)').disabled = true;
}

function stop() {
  clearInterval(set);
   // enable the start button
   document.querySelector('.btn > button:nth-child(2)').disabled = false;
}

function reset() {
  clearInterval(set);
  document.querySelector('.btn > button:nth-child(2)').disabled = false;
  mesc = 0;
  sec = 0;
  mint = 0;
  hour = 0;
  getmesc.innerHTML = "00";
  getsec.innerHTML = "00";
  getmint.innerHTML = "00";
  gethour.innerHTML = "00";
}