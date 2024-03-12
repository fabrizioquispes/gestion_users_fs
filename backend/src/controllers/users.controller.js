import { configSql, pool } from "../config/database.js";
import sql from "mssql";

export const getUsersAll = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Users");
        if (result.recordset) {
            res.send({
                data: result.recordset
            });
        } else {
            res.send({
                data: [] // Retorna un array vacío si no hay resultados
            });
        }
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).send("Error al obtener usuarios");
    }
}

export const insertUser = async (req, res) => {
    try {
        const { id_user, name, username, email, password, created_at } = req.body;
        const result = await pool.request()
            .input('id_user', sql.Int, id_user)
            .input('name', sql.NVarChar(50), name)
            .input('username', sql.NVarChar(50), username)
            .input('email', sql.NVarChar(100), email)
            .input('password', sql.NVarChar(100), password)
            .input('created_at', sql.DateTime, created_at)
            .query('INSERT INTO Users (id_user, name, username, email, password, created_at) VALUES (@id_user, @name, @username, @email, @password, @created_at)');
        
            res.send([{
                data: result
            }])

    } catch (error) {
        console.error("Error al insertar usuario:", error);
        res.status(500).send({
            message: "Error en el servidor al insertar el usuario."
        });
    }
};

export const updateUser = async (req,res) => {
    try {
        const { id_user, name, username, email, password, created_at } = req.body;
        const result = await pool.request()
            .input('id_user', sql.Int, id_user)
            .input('name', sql.NVarChar(50), name)
            .input('username', sql.NVarChar(50), username)
            .input('email', sql.NVarChar(100), email)
            .input('password', sql.NVarChar(100), password)
            .input('created_at', sql.DateTime, created_at)
            .query('UPDATE Users SET name = @name, username = @username, email = @email, password = @password, created_at = @created_at WHERE id_user = @id_user');

        res.send({
            message: "Usuario Actualizado Correctamente",
            data: result.recordset
        });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).send({
            message: "Error en el servidor al actualizar el usuario."
        });
    }
}


export const deleteUser = async (req, res) => {
    try {
        console.log(req.params['id'])
        const result = await pool.request()
            .input('id_user', sql.Int, req.params['id'])
            .query('DELETE FROM Users WHERE id_user = @id_user');

        res.send({
            message: "Usuario eliminado correctamente",
            data: result
        });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).send({
            message: "Error en el servidor al eliminar el usuario."
        });
    }
};

