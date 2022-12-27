const API = "http://10.0.2.2:4000/clases";

export const getClases = async () => {
  const res = await fetch(API);
  const data = await res.json();
  console.log(data);
};
