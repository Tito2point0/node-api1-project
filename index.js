const server = require('./api/server');

const port = 9000;
server.listen(port, () => {
    console.log('server test')
})
// START YOUR SERVER HERE
console.log("hey you")