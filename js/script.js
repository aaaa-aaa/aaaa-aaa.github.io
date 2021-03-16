// Execute when all the contents on the page have been loaded
document.addEventListener("DOMContentLoaded",
	function (event) {

		// Show info of Bulbasaur
		function showBulbasaur (event) {
			document
				.querySelector("h3.grass")
				.textContent = "#001, Seed Pokémon"
		}
		// Show info of Charmander
		function showCharmander (event) {
			document
				.querySelector("h3.fire")
				.textContent = "#002, Lizard Pokémon"
		}

		// Show info of Squirtle
		function showSquirtle (event) {
			document
				.querySelector("h3.water")
				.textContent = "#003, Tiny Turtle Pokémon"
		}

		// Calling the function
		document.querySelector("div.grass")
			.addEventListener("click", showBulbasaur);
		document.querySelector("div.fire")
			.addEventListener("click", showCharmander);
		document.querySelector("div.water")
			.addEventListener("click", showSquirtle);
	}
);
