var five = require('johnny-five'),
  board = new five.Board();

board.on('ready', function () {
  var piezo = new five.Piezo(9);
  var val = 0;

  this.loop(200, function () {
    val ^= 1;
    if (val) {
      // play note a4 for 1/5 second
      piezo.frequency(five.Piezo.Notes.a4, 200);
    }
  });
});