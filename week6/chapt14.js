var field = document.querySelector("input");

addEventListener("keydown", function(event) {
  if (event.keyCode == 87 || event.keyCode == 88 || event.keyCode == 81) {
    event.preventDefault();
  }
});