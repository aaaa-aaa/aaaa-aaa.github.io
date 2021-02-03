// Execute when all the contents on the page have been loaded
document.addEventListener("DOMContentLoaded",
	function (event) {

		// Show info of Bulbasaur
		function showInfo (event) {
			document
				.querySelector("h3")
				.textContent = "#001, Seed Pokémon"
		}

		// Calling the function
		document.querySelector("p")
			.addEventListener("click", showInfo);
	}
);
