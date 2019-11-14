let connection;

const handleUserInput = function(command) {
  if (command === '\u0003') { // if ctrl+c is pressed
    process.exit();
  } if (command === 'w') {
    connection.write('Move: up');
  } if (command === 'a') {
    connection.write('Move: left');
  } if (command === 's') {
    connection.write('Move: down');
  } if (command === 'd') {
    connection.write('Move: right');
  } if (command === 'm') {
    connection.write('Say: I am going to win!');
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  stdin.resume();
  return stdin;
}

let playerInput = {
  setupInput
}

module.exports = playerInput;