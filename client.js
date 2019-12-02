const { IP, PORT } = require('./constants');
const net = require('net');

let successfulConn = function() {
  return "Successfully connected to game server"
}

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(successfulConn());
    console.log(data);
  });
  conn.write('Name: BAL');
  //setInterval(function(){ conn.write('Move: up'); }, 50);

  return conn;
}

let snakeGame = {
  connect
}

module.exports = snakeGame;