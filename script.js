console.log("WinBD9 Loaded");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    alert(button.innerText + " button clicked!");
  });
});
