let e=()=>fetch("http://localhost:3000/iceCreams").then(e=>e.json()),t=document.querySelector(".list"),n=document.querySelector(".modal-btn"),l=document.querySelector(".backdrop"),a=document.querySelector(".form"),c=null;function o(e){t.innerHTML=e.map(({id:e,name:t,type:n,calories:l,price:a,description:c,image:o})=>`<li class="item" id="${e}">
        <img src="${o}" alt="${c}" class="image">
        <h2 class="title">${t}</h2>
        <p class="desc">${c}</p>
        <p class="price">${a}</p>
        <p class="cal">${l}</p>
        <p class="type">${n}</p>
        <button type="button" class="edit" data-action="edit">Edit</button>
        <button type="button" class="delete" data-action="delete">Delete</button>
    </li>`).join("")}function s(){l.style.opacity="1",l.style.pointerEvents="auto"}function i(){e().then(e=>{a.reset(),l.style.opacity="0",l.style.pointerEvents="none",o(e)})}e().then(e=>o(e)),n.addEventListener("click",s),a.addEventListener("submit",e=>{var t;e.preventDefault();let n=e.currentTarget.elements,l={image:n.image.value,name:n.name.value,description:n.description.value,price:n.price.value,calories:n.calories.value,type:n.type.value};null===c?fetch("http://localhost:3000/iceCreams",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(i):(t=c,fetch(`http://localhost:3000/iceCreams/${t}`,{method:"PUT",body:JSON.stringify(l),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())).then(i)}),t.addEventListener("click",t=>{let n=t.target.dataset.action;if(!n)return;let l=t.target.closest("li"),i=l.id;"delete"===n&&fetch(`http://localhost:3000/iceCreams/${i}`,{method:"DELETE"}).then(e=>e.json()).then(()=>e()).then(e=>o(e)),"edit"===n&&(s(),c=i,a.elements.image.value=l.querySelector("img").src,a.elements.name.value=l.querySelector(".title").textContent,a.elements.description.value=l.querySelector(".desc").textContent,a.elements.price.value=l.querySelector(".price").textContent,a.elements.calories.value=l.querySelector(".cal").textContent,a.elements.type.value=l.querySelector(".type").textContent)});
//# sourceMappingURL=crud-1-19.652affec.js.map
