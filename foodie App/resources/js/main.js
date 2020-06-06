function increment(event, id) {
  event.preventDefault();
  let doc = document.getElementById(id);
  doc.value = Number(doc.value) + 1;
  let cost = document.getElementById(id + "Cost");
  cost.innerText = Number(cost.getAttribute("data")) * doc.value;
}

function decrement(event, id) {
  event.preventDefault();
  let doc = document.getElementById(id);
  doc.value = Number(doc.value) - 1;
  let cost = document.getElementById(id + "Cost");
  cost.innerText = Number(cost.getAttribute("data")) * doc.value;
}
