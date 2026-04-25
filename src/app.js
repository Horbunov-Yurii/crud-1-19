import { getIce } from "./api/get-ice";
import { postIce } from "./api/post-ice";

const listRef = document.querySelector(".list");
const modalBtn = document.querySelector(".modal-btn");
const backdrop = document.querySelector(".backdrop");
const form = document.querySelector(".form");

function createItemsMarcups(array) {
  const item = array
    .map(({ id, name, type, calories, price, description, image }) => {
      return `<li class="item" id="${id}">
        <img src="${image}" alt="${description}" class="image">
        <h2>${name}</h2>
        <p>${description}</p>
        <p>${price}</p>
        <p>${calories}</p>
        <p>${type}</p>
        <button type="button" class="edit">Edit</button>
        <button type="button" class="delete">Delete</button>
    </li>`;
    })
    .join("");
  listRef.innerHTML = item;
}

getIce().then((res) => createItemsMarcups(res));

modalBtn.addEventListener("click", openModal);

function openModal() {
  backdrop.style.opacity = "1";
  backdrop.style.pointerEvents = "auto";
}

function closeModal() {
  backdrop.style.opacity = "0";
  backdrop.style.pointerEvents = "none";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const iceData = {
    image: elements.image.value,
    name: elements.name.value,
    description: elements.description.value,
    price: elements.price.value,
    calories: elements.calories.value,
    type: elements.type.value,
  };
  postIce(iceData).then(() => {
    getIce().then(res => {
        form.reset()
        closeModal()
        createItemsMarcups(res)
    })
  })
});
