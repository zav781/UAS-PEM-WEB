function updateClock() {
  document.getElementById("clock").innerHTML =
    new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);