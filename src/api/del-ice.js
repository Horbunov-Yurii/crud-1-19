// export const delIce = (id) => {
//   const options = {
//     method: "DELETE",
//   };
//   return fetch(`http://localhost:3000/iceCreams/${id}`, options).then((res) => res.json());
// };


export const delIce = async (id) => {
  const options = {
    method: "DELETE",
  }
  const res = await fetch(`http://localhost:3000/iceCreams/${id}`, options);
  return res.json()
}


