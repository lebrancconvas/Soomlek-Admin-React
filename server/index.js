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

app.post('/create', (req, res) => {
    const question = req.body.question;
    const option1 = req.body.option1;
    const option2 = req.body.option2;
    const option3 = req.body.option3;
    const option4 = req.body.option4;
    const answer = req.body.answer;

    db.query('INSERT INTO questions (question, option1, option2, option3, option4, answer) VALUES(?, ?, ?, ?, ?, ?)', [question, option1, option2, option3, option4, answer], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send('Value is inserted successfully.');
        }
    })
})

app.put('/updatequestion', (req, res) => {
    const id = req.body.id;
    const question = req.body.question;

    db.query('UPDATE questions SET question = ? WHERE id = ?', [question, id], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    })
})

app.put('/updateoption1', (req, res) => {
    const id = req.body.id;
    const option1 = req.body.option1;

    db.query('UPDATE questions SET option1 = ? WHERE id = ?', [option1, id], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    })
})
app.put('/updateoption2', (req, res) => {
    const id = req.body.id;
    const option2 = req.body.option2;

    db.query('UPDATE questions SET option2 = ? WHERE id = ?', [option2, id], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    })
})
app.put('/updateoption3', (req, res) => {
    const id = req.body.id;
    const option3 = req.body.option3;

    db.query('UPDATE questions SET option3 = ? WHERE id = ?', [option3, id], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    })
})
app.put('/updateoption4', (req, res) => {
    const id = req.body.id;
    const option4 = req.body.option4;

    db.query('UPDATE questions SET option4 = ? WHERE id = ?', [option4, id], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    })
})
app.put('/updateanswer', (req, res) => {
    const id = req.body.id;
    const answer = req.body.answer;

    db.query('UPDATE questions SET answer = ? WHERE id = ?', [answer, id], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send(result);
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM questions WHERE id = ?', [id], (err, result) => {
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