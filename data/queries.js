const cupcakes = require('./cupcakes');

function getOneCupcake(id) {
	for(let i = 0; i < cupcakes.length; i = i + 1) {
		const current = cupcakes[i];

		if(current.id === id) {
			return current;
		}
	}
}

function addVote(id, vote) {
	const cupcake = getOneCupcake(id);
	let sum = 0;

	cupcake.ratings.push(vote);
	for(let i = 0; i < cupcake.ratings.length; i = i + 1) {
		sum = sum + cupcake.ratings[i];
	}
	cupcake.averageRating = sum / cupcake.ratings.length;
}

module.exports = {
	getOneCupcake: getOneCupcake,
	addVote: addVote
};
