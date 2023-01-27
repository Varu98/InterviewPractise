const textArea = document.querySelector(".textArea");
const table = document.querySelector(".astro-table");

textArea.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  const inputValue = e.target.value;
  const splitStringToArray = inputValue.split(",");
  console.log(splitStringToArray);
  let looper = 0;
  for (let i = 0; i < splitStringToArray.length; i++) {
    for (let j = 0; j <= 4; j++) {
      table.rows[i].cells[j].innerHTML = splitStringToArray[looper];
      looper++;
    }
    looper++;
  }

  // console.log(arrayToMultiples);
});
