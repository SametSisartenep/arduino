var five = require('johnny-five');

var board = new five.Board();

board.on('ready', function () {
  console.log('Connected!');

  this.repl.inject({
    five: five
  });
});