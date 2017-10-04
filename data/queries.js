const cupcakes = require('./cupcakes');

function getOneCupcake(id) {
	for(let i = 0; i < cupcakes.length; i = i + 1) {
		const current = cupcakes[i];

		if(current.id === id) {
			return current;
		}
	}
}

module.exports = {
	getOneCupcake: getOneCupcake
};
