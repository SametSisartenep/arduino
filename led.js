var five = require('johnny-five'),
  board = new five.Board();

board.on('ready', function () {
  var led = new five.Led(process.argv[2] || 13);

  this.repl.inject({
    led: led
  });

  led.blink();
});