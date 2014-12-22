var five = require('johnny-five'),
  keypress = require('keypress');

var board = new five.Board(),
  notes = five.Piezo.Notes,
  note = notes.a4,
  pressed = false;

board.on('ready', function () {
  var piezo = new five.Piezo(9);

  this.loop(200, function () {
    if (pressed) {
      piezo.frequency(note, 200);
    }
  });
});

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
  pressed = true;

  if (key && key.shift) {
    pressed = false;
  }

  if (key && key.name == 'j') {
    note = notes.a1;
  }
  if (key && key.name == 'k') {
    note = notes.a2;
  }
  if (key && key.name == 'l') {
    note = notes.a3;
  }
  if (key && key.name == 'f') {
    note = notes.c4;
  }
  if (key && key.name == 'd') {
    note = notes.c3;
  }
  if (key && key.name == 's') {
    note = notes.c2;
  }
  if (key && key.name == 'a') {
    note = notes.c1;
  }
  if (key && key.name == 'r') {
    note = notes.g1;
  }
  if (key && key.name == 'e') {
    note = notes.g2;
  }
  if (key && key.name == 'w') {
    note = notes.g3;
  }
  if (key && key.name == 'q') {
    note = notes.g4;
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
