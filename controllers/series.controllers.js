import { pool } from "../db.js";

export const getSeries = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM admseries.serie"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSerie = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM admseries.serie WHERE idSerie= ?",
      [req.params.idSerie]
    );

    if (result.length === 0) {
      res.status(404).json({ message: "Serie no encontrada 🤔" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSerie = async (req, res) => {
  try {
    const {
      idSerie,
      titulo,
      fechaEstreno,
      descripcion,
      estrellas,
      genero,
      precio,
      atp,
      estado,
    } = req.body;
    const resultado = await pool.query(
      "INSERT INTO admseries.serie(idSerie,titulo,fechaEstreno,estrellas,genero,precio,atp,estado,descripcion) VALUES (?, ?,?,?,?,?,?,?,?)",
      [idSerie, titulo, fechaEstreno, estrellas, genero, precio, atp, estado,descripcion]
    );
    console.log(resultado);
    res.json({
      idSerie,
      titulo,
      descripcion,
      fechaEstreno,
      estrellas,
      genero,
      precio,
      atp,
      estado,
    });
  } catch (error) {
    console.log(req);
    
    console.log(error);
    return res.status(500).json({ message: error.message});
  }
};

export const updateSerie = async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE admseries.serie SET ? WHERE idSerie = ?",
      [req.body, req.params.idSerie]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSerie = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM admseries.serie WHERE idSerie= ?",
      [req.params.idSerie]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Serie no encontrada 🤔" });
    }
    return res.sendStatus(204);
  } catch (error) {
    
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
 
  try {
    const [result] = await pool.query(
      "SELECT * FROM admseries.users "
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};