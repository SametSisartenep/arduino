var five = require('johnny-five'),
  board = new five.Board(),
  keypress = require('keypress');

keypress(process.stdin);

var state = 0,
  lightning = false;

board.on('ready', function () {
  var led = new five.Led(13);

  this.loop(200, function () {
    if (state) {
      if (!lightning) {
        led.on();
        lightning = true;
      }
    } else {
      if (lightning) {
        led.off();
        lightning = false;
      }
    }
  });
});

process.stdin.on('keypress', function ( ch, key ) {
  if (key && key.name === 'o') {
    state ^= 1;
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
