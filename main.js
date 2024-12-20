const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (button.classList.contains("bg-yellow-600")) {
    button.classList.remove("bg-yellow-600");
    button.classList.add("bg-green-600");
  } else {
    button.classList.remove("bg-green-600");
    button.classList.add("bg-yellow-600");
  }
});
