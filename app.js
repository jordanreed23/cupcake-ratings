const express = require('express');
const cupcakes = require('./data/cupcakes');
const queries = require('./data/queries');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

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

app.post('/cupcakes/rating/:id', (req, res) => {
	const id = Number(req.params.id);
	const vote = Number(req.body.vote);

	queries.addVote(id, vote);
	res.redirect('/');
});

app.listen(port, () => {
	console.log('server listening on port', port);
});
