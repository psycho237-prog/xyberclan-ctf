const express = require('express');
const cors = require('cors');
const db = require('./database');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// VULNERABLE ENDPOINT: SQL Injection via Name parameter
app.get('/api/search-clients', (req, res) => {
    const name = req.query.name || '';

    // RAW CONCATENATION - High Level Vulnerability
    const query = `SELECT name, company, plan FROM clients WHERE name LIKE '%${name}%'`;

    console.log(`Executing Query: ${query}`);

    db.all(query, [], (err, rows) => {
        if (err) {
            // In a real/CTF scenario, returning the error helps the user debug SQLi
            return res.status(500).json({ error: err.message, query: query });
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`NexVault Internal API running on http://localhost:${port}`);
});
