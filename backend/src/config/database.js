import sql from "mssql";

export const configSql = {
    server: "192.168.1.91",
    port: 64088,
    user: "sa",
    password: "ALEKZANDER2002",
    database: "LEARN_SQL",
    options: {
        trustServerCertificate: true
    },
};

export const pool = new sql.ConnectionPool(configSql);

pool.connect().then(() => {
    console.log("Conexión establecida correctamente");
}).catch(err => {
    console.error("Error al conectar a la base de datos:", err);
});

