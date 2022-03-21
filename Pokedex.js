const fetchPokemon = () => {
    const Poke_Name = document.getElementById("Poke_Name");
    const Poke_Altura = document.getElementById("Altura");
    const Poke_Peso = document.getElementById("Peso");
    const Poke_Número = document.getElementById("Número");

    let Input = Poke_Name.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${Input}`;

    fetch(url).then((respuesta) => {
        if (respuesta.status != "200") {
            Cambio_Imagen("./No_Encontrado.jpg")
        }
        else {
            return respuesta.json();
        }
        
    }).then((data => {
        console.log(data);
        let Poke_Img = data.sprites.front_default;
        Cambio_Imagen(Poke_Img);
        Poke_Types(data.types);
        Poke_HP(data.stats)
        Poke_Ataque(data.stats)
        Poke_Defensa(data.stats)
        Poke_Velocidad(data.stats)
        Poke_Altura.innerHTML = "Height: " + parseInt(data.height)/10 + " m";
        Poke_Peso.innerHTML = "Weight: " + parseInt(data.weight)/10 + " kg";
        Poke_Número.innerHTML = "#" + data.id;
        Cambio_Nombre()
    }))
}



const Cambio_Imagen = (url) => {
    const Poke_Img = document.getElementById("Poke_Img");
    Poke_Img.src = url;
}

function Cambio_Nombre(){ 
    var Poke_Name = document.getElementById("Poke_Name").value;
    document.getElementById("Nombre").innerHTML = Poke_Name.toLowerCase();
}

const Poke_Types = (data) =>{
    const Types = document.getElementById("Tipo");

    if((Object.keys(data).length) == 1){
        Types.innerHTML = "Type: " + data[0]['type']['name'];
    }else{
        Types.innerHTML = `Type: ${data[0]['type']['name']}/${data[1]['type']['name']}`
    }
}

const Poke_HP = (data) =>{
    const HPoints = document.getElementById("HP");
    HPoints.innerHTML = "HP: " + data[0]['base_stat'];
}

const Poke_Ataque = (data) =>{
    const Attack = document.getElementById("Ataque");
    Attack.innerHTML = "Attack: " + data[1]['base_stat'];
}

const Poke_Defensa = (data) =>{
    const Defense = document.getElementById("Defensa");
    Defense.innerHTML = "Defense: " + data[2]['base_stat'];
}

const Poke_Velocidad = (data) =>{
    const Speed = document.getElementById("Velocidad");
    Speed.innerHTML = "Speed: " + data[5]['base_stat'];
}

//fetchPokemon_2();

//Alt + 39 = Comilla invertida 
