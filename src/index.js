const express = require('express');
const PORT = 4000;

const app = express();

app.get('/archivos/index', (req, res) => {
	res.sendFile(__dirname + '/utils/index.html');
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/utils/404.html')
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
