import express from "express";
import sql from "mssql";
import config from "./config";

const SuccessString = "Success";
const FailString = "Fail";

const app = express();

const testConnection = async (connectionString) => {
    try {
        const pool = await sql.connect(connectionString);
        pool.close();
        return SuccessString
    } catch (err) {
        return FailString
    }
};

config.databases.forEach(database => {
    app.use(database.endpointName, async (req, res) => {
        let status = await testConnection(database.connectionString);
        if (status === SuccessString) {
            res.send(status)
        } else {
            res.status(500).send(status)
        }
    })
});

const port = config.listenPort || 3000;
app.listen(port, () => console.log(`app listening on ${port}`));
