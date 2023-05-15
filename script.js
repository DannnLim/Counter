let countEl = document.getElementById("counts");
console.log(countEl);

let count = 0;

let saveEl = document.getElementById("save-el");
console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
  count = 0;
  countEl.textContent = 0;
}
