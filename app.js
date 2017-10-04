const express = require('express');
const cupcakes = require('./data/cupcakes');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'cupcake reviews!',
		cupcakes: cupcakes
	});
});

app.listen(port, () => {
	console.log('server listening on port', port);
});
