let e=()=>fetch("http://localhost:3000/iceCreams").then(e=>e.json()),t=document.querySelector(".list"),n=document.querySelector(".modal-btn"),i=document.querySelector(".backdrop"),o=document.querySelector(".form");function a(e){t.innerHTML=e.map(({id:e,name:t,type:n,calories:i,price:o,description:a,image:c})=>`<li class="item" id="${e}">
        <img src="${c}" alt="${a}" class="image">
        <h2>${t}</h2>
        <p>${a}</p>
        <p>${o}</p>
        <p>${i}</p>
        <p>${n}</p>
        <button type="button" class="edit">Edit</button>
        <button type="button" class="delete">Delete</button>
    </li>`).join("")}e().then(e=>a(e)),n.addEventListener("click",function(){i.style.opacity="1",i.style.pointerEvents="auto"}),o.addEventListener("submit",t=>{t.preventDefault();let n=t.currentTarget.elements;fetch("http://localhost:3000/iceCreams",{method:"POST",body:JSON.stringify({image:n.image.value,name:n.name.value,description:n.description.value,price:n.price.value,calories:n.calories.value,type:n.type.value}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(()=>{e().then(e=>{o.reset(),i.style.opacity="0",i.style.pointerEvents="none",a(e)})})});
//# sourceMappingURL=crud-1-19.92e48dc0.js.map
