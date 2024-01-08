const container = document.getElementsByClassName("backround")[0];
const button = document.getElementsByTagName("button")[0];
const addBox = () => {
  const color = document.createElement("backround");

  container.appendChild(color);
};
button.addEventListener("click", addBox);
