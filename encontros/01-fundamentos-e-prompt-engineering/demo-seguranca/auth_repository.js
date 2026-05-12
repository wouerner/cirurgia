/**
 * Sistema de Autenticação (Vulnerável)
 * 
 * Este código simula uma consulta ao banco de dados para login de usuários.
 */

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

function login(username, password) {
  // VULNERABILIDADE: SQL Injection clássica por concatenação de strings
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  
  console.log("Executando query:", query);

  db.get(query, (err, row) => {
    if (row) {
      console.log("Acesso concedido para:", row.username);
    } else {
      console.log("Acesso negado.");
    }
  });
}

module.exports = { login };
