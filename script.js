console.log("WinBD9 Loaded");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    alert(button.innerText + " button clicked!");
  });
});
.buttons{
    display:flex;
    flex-direction:column;
    gap:15px;
    padding:20px;
}

.buttons button{
    padding:15px;
    font-size:18px;
    border:none;
    border-radius:12px;
    background:#00b894;
    color:white;
    font-weight:bold;
}

.buttons button:active{
    background:#019875;
}
