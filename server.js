// console.log(process.argv[2])
// console.log(process.argv[3])
// console.log(process.argv[4])
const net = require('net');
const PORT = 8080;
const {helium, style, hydrogen, error, index} = require('./home.js')

const server = net.createServer(client => {
  client.setEncoding('utf8');
  client.on('data', (data) => {
    console.log('CL data.toString()', data.toString());
    let req = data.toString().split('\n')
    let reqLine = req[0].split(' '); // ['GET', '/']
    let uri = reqLine[1];

    const date = new Date();
    const status = 'HTTP/1.1 200 OK';
    const serverName = 'coolServer';

    if(uri === '/helium'){
      const message = `${status}\nServer: ${serverName}\nDate: ${date} \nContent-Type: text/html\n\n${helium} `;

      client.write(message);
      client.end();
    }
    else if (uri === '/css/styles.css') {
      const message = `${status}\nServer: ${serverName}\nDate: ${date} \nContent-Type: text/css\n\n${style} `;

      client.write(message);
      client.end();
    }
    else if (uri === '/hydrogen') {
      const message = `${status}\nServer: ${serverName}\nDate: ${date} \nContent-Type: text/html\n\n${hydrogen} `;

      client.write(message);
      client.end();
    }
    else if (uri === '/') {
      const message = `${status}\nServer: ${serverName}\nDate: ${date} \nContent-Type: text/html\n\n${index} `;

      client.write(message);
      client.end();
    }
    else {
      const message = `${status}\nServer: ${serverName}\nDate: ${date} \nContent-Type: text/html\n\n${error} `;

      client.write(message);
      client.end();
    }
  });
});

server.listen(PORT, () => {
  console.log('CL Welcome to the Matrix on port', PORT);
});



// const net = require('net');

// console.log('\n\nCL process.argv')
// console.log(process.argv)
// let header = '\n\nHTTP/1.1 200 OK\n\nServer: SPARTASERVE'
// // let slashIndex = process.argv[2].indexOf("/");
// // let host = process.argv[2].slice(0, slashIndex);
// // let path = process.argv[2].slice(slashIndex);

// let clients = [];

// const server = net.createServer(client => {

//   client.write(header)
//   // client.write('\n\nHTTP/1.1 200 OK\n\nServer: SpartaServe');
//   // client.write("GET " + path + " HTTP/1.1\nhost: " + host);

//   console.log('\nCLIENT CONNECTED\n')

//   client.write('\n\nWelcome to SpartaServe')

//   client.on('data', data => {
//     console.log(data.toString());
//     let msg = data.toString()
//   });

//   clients.push(client);
// })


// server.listen(8080, () => {
//   console.log('\nServer listening on port 8080');
// });

