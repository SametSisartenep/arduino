var five = require('johnny-five'),
  board = new five.Board();

board.on('ready', function () {
  var led = new five.Led(13);

  led.strobe(500);
});