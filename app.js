const express = require('express');
const cupcakes = require('./data/cupcakes');
const queries = require('./data/queries');

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

app.get('/cupcakes/:id', (req, res) => {
	const id = Number(req.params.id);
	const cupcake = queries.getOneCupcake(id);

	res.render('oneCupcake', {
		title: 'Cupcake rating for ' + cupcake.name,
		cupcake: cupcake
	});
});

app.listen(port, () => {
	console.log('server listening on port', port);
});
