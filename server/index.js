const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'srv582.hstgr.io',
    user: 'u903851063_rubenalvarez',
    password: 'Sevilla_2023',
    database: 'u903851063_booking',
});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const telephone = req.body.telephone;

    db.query('INSERT INTO booking (name, telephone) VALUES (?, ?)',
        [name, telephone],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
})



app.listen(3002, () => {
    console.log('Server is running on port 3002');
});