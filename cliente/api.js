const API = "http://192.168.1.47:4000/clases";

export const getClases = async () => {
  const res = await fetch(API, {
    method: "GET",
  });
  return await res.json();
};

export const getClase = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const saveClase = async (newClase) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-type": "application/json" },
    body: JSON.stringify(newClase),
  });
  return await res.json();
};

export const deleteClase = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};
