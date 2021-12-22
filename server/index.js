const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const port = process.env.PORT || 3002;


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    port: "3306",
    database: "questionsDatabase"
})

app.get('/questions', (req, res) => {
    db.query('SELECT * FROM questions', (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(port, () => {
    console.log(`Server listen at port: ${port}`);
})