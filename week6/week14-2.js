var body = document.querySelector("body");

addEventListener("mousemove", function(event) {
  var dot = document.createElement("div");
  dot.className = "trail";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});