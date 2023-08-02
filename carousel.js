window.onload = function randomnum(){
  let span = document.getElementById("random");
  let random = Math.floor(Math.random() * 100);
  span.innerHTML = random.toString();
}