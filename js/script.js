

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
        // assigning pokemon to "results" from the array of info that is in the API
        pokemon = data.results;
        // programmatically generates or renders the HTML - this is made right after the assignment above, whereas before the code below to call render() we had to call it in the console to make the infromation appear
        render();
    }, function(error) {
        console.log("error is", error)
    });
}

// create dynamic html via jquery -dedicated function
function generateHTML() {
    // using .map to transform each array item/pokemon
    return pokemon.map(function(p) {
        // this below code should display out the pokemon name and hold the URL of each individual pokemon from the array within the API
        return `<li class="collection-item red-text">
            <div style="text-transform: capitalize;">${p.name}
                <span data-url="${p.url}" class="secondary-content blue-text">
                Detail
                </span>
            </div></li>`
    })
}

// transfer HTML to the DOM
function render() {
    // create a variable that is the result of what generateHTML gets and make into a string via .join
    const html = generateHTML().join("");
    $ulEl.html(html);
}
