// export const postIce = (iceData) => {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(iceData),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
//   return fetch("http://localhost:3000/iceCreams", options).then((res) => res.json());
// };


export const postIce = async (iceData) => {
    const options = {
    method: "POST",
    body: JSON.stringify(iceData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const res = await fetch("http://localhost:3000/iceCreams", options)
  return res.json()
}




