const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/hello', (req, res)=> {
	res.send('\nHello, world!\n')
})

var server = app.listen(port, "127.0.0.1", () => {
	var host = server.address().address
  	var port = server.address().port
 
  	console.log("应用实例，访问地址为 http://%s:%s", host, port)

	// console.log(`listening on port ${ server.address().port } address ${ server.address().address }`)
})  