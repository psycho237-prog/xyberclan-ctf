const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve the React frontend (built via `npm run build` in root)
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Serve static files from /public (robots.txt, api/status.json, etc.)
app.use(express.static(path.join(__dirname, '..', 'public')));

// VULNERABLE ENDPOINT: SQL Injection via Name parameter
app.get('/api/search-clients', (req, res) => {
    const name = req.query.name || '';

    // RAW CONCATENATION - High Level Vulnerability
    const query = `SELECT name, company, plan FROM clients WHERE name LIKE '%${name}%'`;

    console.log(`Executing Query: ${query}`);

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message, query: query });
        }
        res.json(rows);
    });
});

// Catch-all: serve React app for client-side routing (e.g. /s3cret-panel)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// AUTO-PING: Prevent Render free-tier from sleeping (pings every 14 minutes)
setInterval(() => {
    const url = process.env.RENDER_EXTERNAL_URL || `http://localhost:${port}`;
    fetch(`${url}/api/search-clients?name=ping`)
        .then(() => console.log(`[Auto-Ping] Pinged ${url} at ${new Date().toISOString()}`))
        .catch((err) => console.log(`[Auto-Ping] Failed: ${err.message}`));
}, 14 * 60 * 1000); // 14 minutes

app.listen(port, '0.0.0.0', () => {
    console.log(`NexVault Internal API running on port ${port}`);
});
