
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let Input = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${Input}`;
    fetch(url).then((respuesta) => {
        if (respuesta.status != "200") {
            //console.log(respuesta);
            Cambio_Imagen("./No_Encontrado.jpg")
        }
        else {
            return respuesta.json();
        }
        
    }).then((data => {
        console.log(data);
        let Poke_Img = data.sprites.front_default;
        let Poke_Name = data.name;
        let Poke_Número = data.id;
        let Poke_Peso = data.weight;
        let Poke_Altura = data.height;
        let Poke_Vida = data.stats;
        //console.log(Poke_Img);
        Cambio_Imagen(Poke_Img)
        console.log(Poke_Name)
        console.log(Poke_Número)
        console.log(Poke_Peso)
        console.log(Poke_Altura)
        console.log(Poke_Número)
        console.log(Poke_Vida)
        //Cambio_Nombre(Poke_Name);
    }))
}



const Cambio_Imagen = (url) => {
    const Poke_Img = document.getElementById("Poke_Img");
    Poke_Img.src = url;
}

const Cambio_Nombre = (url) => {
    const Poke_Name = document.getElementById("Poke_Name");
    Poke_Name = "Poke_Name";
}






//Alt + 39 = Comilla invertida 
