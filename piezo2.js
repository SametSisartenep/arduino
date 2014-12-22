var five = require('johnny-five'),
  board = new five.Board();

var notes = [];

for (var note in five.Piezo.Notes) {
  notes.push(five.Piezo.Notes[note]);
}

board.on('ready', function () {
  var piezo = new five.Piezo(9);
  var val = 0;

  this.loop(200, function () {
    val ^= 1;
    if (val) {
      piezo.frequency(notes[Math.floor(Math.random() * notes.length)], 200);
    }
  });
});