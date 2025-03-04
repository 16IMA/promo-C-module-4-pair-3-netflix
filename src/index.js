const express = require('express');
const cors = require('cors');
const mysql = require ('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});


server.get('/api/movies', async (req, res) => {

    const result = await listMovies();
    res.json({
        success: true,
        movies: result,
    });
});

server.get('/', (req, res) => {
    res.send('¡El servidor está funcionando correctamente!');
});

async function getConnection() {
    const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '@my11sql&',
    database: 'netflix',
  });

  await connection.connect();

  return connection;
}

async function listMovies() {
    // Crear una conexión con la bbdd
  
    const connection = await getConnection();
  
    // Lanza una query
  
    const [result] = await connection.query(`SELECT * FROM netflix.movies;`);
    
    connection.end();
  
    return result;
  }
  
  