// export const updateIce = (id, iceData) => {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(iceData),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
//   return fetch(`http://localhost:3000/iceCreams/${id}`, options).then((res) => res.json());
// };


export const updateIce = async (id, iceData) => {
    const options = {
    method: "PUT",
    body: JSON.stringify(iceData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const res = await fetch(`http://localhost:3000/iceCreams/${id}`, options)
  return res.json()
}
