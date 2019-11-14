const { connect } = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = function(command) {
  if (command === '\u0003') { // if ctrl+c is pressed
    process.exit();
  };
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  stdin.resume();
  return stdin;
}

setupInput();