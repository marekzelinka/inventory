import { Inventory } from "./inventory.js";

const form = document.querySelector("#add-item-form");
const newItemName = document.querySelector("#new-item-name");
const newItemQty = document.querySelector("#new-item-qty");
const tbody = document.querySelector("#tbody");
const total = document.querySelector("#total");

const inventory = new Inventory();

const render = () => {
  let html = "";
  inventory.getItems().forEach((item) => {
    html += `<tr><td>${item.name}</td><td>${item.qty}</td></tr>`;
  });
  tbody.innerHTML = html;
  total.textContent = inventory.getCount();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const exists = inventory.exists(newItemName.value);
  if (exists) {
    alert(`"${newItemName.value} is already in the inventory"`);
    return;
  }

  inventory.addItem({ name: newItemName.value, qty: newItemQty.value });
  // empty text field
  newItemName.value = "";
  newItemQty.value = 0;
  // re-render
  render();
});

render();
