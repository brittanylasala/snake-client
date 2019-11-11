const net = require('net');

let successfulConn = function() {
  return "Successfully connected to game server"
}

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(successfulConn());
    console.log(data);
  });
  conn.write('Name: BAL');

  return conn;
}

let snakeGame = {
  connect
}

module.exports = snakeGame;