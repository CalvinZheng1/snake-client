const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
    conn.write('Name: Cal')
  // setInterval(() => {
  //   conn.write('Move: up')
  // }, 500);
  return conn;
}


module.exports = { connect };