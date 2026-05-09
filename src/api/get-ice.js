// export const getIce = () => {
//   return fetch("http://localhost:3000/iceCreams").then((res) => res.json());
// };

export const getIce = async () => {
  const res = await fetch("http://localhost:3000/iceCreams")
  return res.json()
}


