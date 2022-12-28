const API = 'http://192.168.1.47:4000/clases';

export const getClases = async () => {
  const res = await fetch(API, {
    method: "GET",
  });
  return await res.json();
};