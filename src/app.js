import { getIce } from "./api/get-ice";
import { postIce } from "./api/post-ice";
import { delIce } from "./api/del-ice";
import { updateIce } from "./api/upd-ice";

const listRef = document.querySelector(".list");
const modalBtn = document.querySelector(".modal-btn");
const backdrop = document.querySelector(".backdrop");
const form = document.querySelector(".form");
let currentId = null

function createItemsMarcups(array) {
  const item = array
    .map(({ id, name, type, calories, price, description, image }) => {
      return `<li class="item" id="${id}">
        <img src="${image}" alt="${description}" class="image">
        <h2 class="title">${name}</h2>
        <p class="desc">${description}</p>
        <p class="price">${price}</p>
        <p class="cal">${calories}</p>
        <p class="type">${type}</p>
        <button type="button" class="edit" data-action="edit">Edit</button>
        <button type="button" class="delete" data-action="delete">Delete</button>
    </li>`;
    })
    .join("");
  listRef.innerHTML = item;
}

// getIce().then((res) => createItemsMarcups(res));
async function init () {
const res = await getIce()
createItemsMarcups(res)

}
init()

modalBtn.addEventListener("click", openModal);

function openModal() {
  backdrop.style.opacity = "1";
  backdrop.style.pointerEvents = "auto";
}

function closeModal() {
  backdrop.style.opacity = "0";
  backdrop.style.pointerEvents = "none";
}

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const elements = event.currentTarget.elements;
//   const iceData = {
//     image: elements.image.value,
//     name: elements.name.value,
//     description: elements.description.value,
//     price: elements.price.value,
//     calories: elements.calories.value,
//     type: elements.type.value,
//   };
//   if(currentId === null){
//   postIce(iceData).then(afterSubmit);
//   return
//   }
//   updateIce(currentId, iceData).then(afterSubmit)
// });

form.addEventListener("submit", async (event) => {
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
  if(currentId === null){
  // postIce(iceData).then(afterSubmit);
  await postIce(iceData)
  afterSubmit()
  return
  }
  // updateIce(currentId, iceData).then(afterSubmit)
  await updateIce(currentId, iceData)
  afterSubmit()
});







// function afterSubmit (){
//     getIce().then((res) => {
//       form.reset();
//       closeModal();
//       createItemsMarcups(res);
//     });
// }

async function afterSubmit (){
    const res = await getIce() 
      form.reset();
      closeModal();
      createItemsMarcups(res);
    };






// listRef.addEventListener("click", (event) => {
//   const action = event.target.dataset.action;
  
//   if (!action) {
//     return;
//   }
//   const li = event.target.closest("li");

//   const id = li.id;
//   if(action === "delete"){
//     delIce(id).then(()=>getIce()).then((res)=>createItemsMarcups(res))
//     // delIce(id).then(getIce).then(res=>createItemsMarcups(res))
//   }
//   if(action === "edit"){
//     openModal()
//     currentId = id
//     form.elements.image.value = li.querySelector("img").src
//     form.elements.name.value = li.querySelector(".title").textContent
//     form.elements.description.value = li.querySelector(".desc").textContent
//     form.elements.price.value = li.querySelector(".price").textContent
//     form.elements.calories.value = li.querySelector(".cal").textContent
//     form.elements.type.value = li.querySelector(".type").textContent
//   }
// });



listRef.addEventListener("click", async (event) => {
  const action = event.target.dataset.action;
  
  if (!action) {
    return;
  }
  const li = event.target.closest("li");

  const id = li.id;
  if(action === "delete"){
    // delIce(id).then(()=>getIce()).then((res)=>createItemsMarcups(res))
    delIce(id)
    const res = await getIce()
    createItemsMarcups(res)
  }
  if(action === "edit"){
    openModal()
    currentId = id
    form.elements.image.value = li.querySelector("img").src
    form.elements.name.value = li.querySelector(".title").textContent
    form.elements.description.value = li.querySelector(".desc").textContent
    form.elements.price.value = li.querySelector(".price").textContent
    form.elements.calories.value = li.querySelector(".cal").textContent
    form.elements.type.value = li.querySelector(".type").textContent
  }
});