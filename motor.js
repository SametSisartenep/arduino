var five = require('johnny-five'),
  board = new five.Board();

board.on('ready', function () {
  var motor = new five.Motor({
    pin: 9
  });

  this.repl.inject({
    motor: motor
  });
});