

/*----- constants -----*/
const baseURL = "https://pokeapi.co/api/v2/pokemon";


/*----- app's state (variables) -----*/
let pokemon, pokemonDetail;


/*----- cached element references -----*/
const $ulEl = $(".collection");


/*----- event listeners -----*/
// $ulEl is the elements within the UL tags 
$ulEl.on("click", handleClick);


/*----- functions -----*/
// clicking on the list we have in HTML 
function handleClick(event) {
    console.log(event)
}

// make the data available as soon as the app loads
getPokemon();

// Function given the purpose of getting the pokemon data
function getPokemon(){
    // .then is a method called once the promise has been resolved - once that it finished .then will call the function
    $.ajax(baseURL)
    .then(function(data) {
        console.log("data is", data)
        // assigning pokemon to results
        pokemon = data.results;
    }, function(error) {
        console.log("error is", error)
    });
}

