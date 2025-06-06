function getPOkemon(){
    const nombreP=document.getElementById("pokenombre").value.toLowerCase();


if(nombreP==="")
{
    alert("por favor ingrese un Pokemon");
    return;
}

fetch(`https://pokeapi.co/api/v2/pokemon/${nombreP}`)
.then(response=> {
    if(!response.ok){
        throw new Error("Pokemon no fue encontrado");
    }
      
    return response.json();
})
.then(data => {
    const pokeinfo= `
    <h2>${data.name.toUpperCase()}</h2>
    <img src="${data.sprites.front_default}"alt = "${data.name}">
    <p><strong>Tipo:</strong> ${data.types.map(type=>type.type.name).join(", ")}</p>
    <p><strong>Peso:</strong> ${data.weight}kg</p>
    <p><strong>Altura:</strong> ${data.height}m</p>
` 
    document.getElementById("poke-info").innerHTML=pokeinfo;

})
.catch(error => {
      alert(error.message);
      document.getElementById("poke-info").innerHTML = "";
});

    
}
