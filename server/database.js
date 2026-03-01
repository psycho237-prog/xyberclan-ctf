const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ctf.db');

db.serialize(() => {
    // Create clients table
    db.run(`CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    company TEXT,
    plan TEXT
  )`);

    // Create flag storage table (Target for UNION SELECT)
    db.run(`CREATE TABLE IF NOT EXISTS flag_storage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    flag_name TEXT,
    flag_content TEXT
  )`);

    // Insert dummy data
    db.get("SELECT COUNT(*) as count FROM clients", (err, row) => {
        if (row && row.count === 0) {
            db.run("INSERT INTO clients (name, company, plan) VALUES ('Alice Johnson', 'TechCorp', 'Premium')");
            db.run("INSERT INTO clients (name, company, plan) VALUES ('Bob Smith', 'DataSystems', 'Enterprise')");
            db.run("INSERT INTO clients (name, company, plan) VALUES ('Charlie Davis', 'CyberInc', 'Standard')");
        }
    });

    // Insert the secret flag
    db.get("SELECT COUNT(*) as count FROM flag_storage", (err, row) => {
        if (row && row.count === 0) {
            db.run("INSERT INTO flag_storage (flag_name, flag_content) VALUES ('Clearance_Level_7', 'XYBER{sqli_un10n_m4st3r_551}')");
        }
    });
});

module.exports = db;
