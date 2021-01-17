const http = require('http');
const emoji = require('node-emoji');

let coffee = emoji.get('coffee');
console.log(coffee);

let emojiArray = [];

function emojiFunction() {  
  
    for(let i = 0; i <= 9; i++){
    console.log(emojiArray.push(emoji.random().emoji));
        }
    return emojiArray
}

console.log(emojiFunction());



const server = http.createServer((req, res) => {
    res.write(`
    <html>

    <head>
      <meta charset="UTF-8">
    </head>

    <body>
    <h1>  ${emojiArray.join(' ')}  </h1>
    </body>
    </html>
    `);

    res.end();

  });

  server.listen(3000);