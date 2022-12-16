import { getConnection } from "../database/database";

export const getRaiz = (req, res) => {
  res.json("Hello world! Dale putooooo");
};

export const getClases = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * from clases");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClase = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * from clases where id = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClaseCount = async (req, res) => {
  res.send("Hello World");
};

const saveClase = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (title === undefined || description === undefined) {
      res
        .status(400)
        .json({ message: "¡Error! Por favor completa todos los campos..." });
    }

    const clase = { title, description };
    const connection = await getConnection();
    await connection.query("INSERT INTO clases SET ?", clase);

    res.json({ message: "¡Clase agregada con exito!" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteClase = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE from clases where id = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateClase = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (id === undefined || title === undefined || description === undefined) {
      res
        .status(400)
        .json({ message: "¡Error! Por favor completa todos los campos..." });
    }

    const clase = { title, description };
    const connection = await getConnection();
    const result = await connection.query("UPDATE clases SET ? WHERE id = ?", [
      clase,
      id,
    ]);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getClases,
  getClase,
  saveClase,
  deleteClase,
  updateClase,
};
