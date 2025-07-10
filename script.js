const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  
  // Apply to body background
  document.body.style.backgroundColor = randomColor;
});
