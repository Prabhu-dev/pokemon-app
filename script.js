const userInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const statsTable = document.getElementById("stats-table");

const searchPokeDex = async () => {
  try {
      const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${userInput.value.toLowerCase()}`);
      const data = await res.json(); 

      const {name, id, height, weight, stats, sprites, types} = data;
      
      pokemonName.innerHTML = name.toUpperCase();
      pokemonName.style.display="block";
      pokemonId.innerHTML = `#${id}`;
      pokemonId.style.display="block";
      pokemonWeight.innerHTML = `<b>Weight:</b> ${weight}`;
      pokemonWeight.style.display="block";
      pokemonHeight.innerHTML = `<b>Height:</b> ${height}`;
      pokemonHeight.style.display="block";
      pokemonImage.innerHTML = `<img id="sprite" src="${sprites.front_default}"/>`;
      pokemonTypes.innerHTML = types.map(type => `<b><span>${type.type.name.toUpperCase()}</span></b>`
  ).join(" ");
      pokemonTypes.style.display="block";
      hp.innerHTML = stats[0].base_stat;
      attack.innerHTML = stats[1].base_stat;
      defense.innerHTML = stats[2].base_stat;
      specialAttack.innerHTML = stats[3].base_stat;
      specialDefense.innerHTML = stats[4].base_stat;
      speed.innerHTML = stats[5].base_stat;
      statsTable.style.display="block";

      console.log(data)
  } catch (err) {
    pokemonName.innerText=`Please enter pokemon Name or Id`;
    pokemonName.style.display="block";
    console.log(err.message);
  }
      
}

searchButton.addEventListener("click",searchPokeDex);
userInput.addEventListener("keydown",(e)=>{
   if(e.key === "Enter") {
     searchPokeDex();
   }
})