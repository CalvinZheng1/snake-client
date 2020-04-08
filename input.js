let connection;

const handleUserInput = function(data) {
  if (data === '\x03') {
    process.exit()
  }
switch (data) {                                       
  case "w":
    connection.write('Move: up');
    break;
  case "a":
    connection.write('Move: left');
    break;  
  case "s":
    connection.write('Move: right');
    break;
  case "d":
    connection.write('Move: down');
    break;
  case "1":
    connection.write('Say: Eat My Dust');
    break;
  case "2":
    connection.write('Say: You Snooze You Lose');
    break;
  default:
    break;
}
}


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

setupInput()



module.exports = { setupInput }


// if (data === 'w') {
//   connection.write('Move: up')
// }
// if (data === 's') {
//   connection.write('Move: down')
// }
// if (data === 'a') {
//   connection.write('Move: left')
// }
// if (data === 'd') {
//   connection.write('Move: right')
// }