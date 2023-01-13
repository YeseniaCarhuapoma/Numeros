function seriesPares(){
    var serie="Resultado: ";
    var i=2;
    while(i<=100){
        serie+=`${i} - `;
        document.getElementById("Resultado").innerHTML=serie;
        i=i+2;
    }
}
function seriesImpar(){
    var serie="Resultado: ";
    var i=1;
    while(i<=12){
        serie+=`${i} - `;
        document.getElementById("Resultado").innerHTML=serie;
        i=i+2;
    }
}
function numeros(){
    var serie="Resultado: ";
    var i=1;
    while (i<=12) {
        serie+=`${i} - `,
        document.getElementById("Resultado").innerHTML=serie;
        i=i+1;
        
    }
}
const paises = ['peru', 'uruguay','chile'];
let i = 0;
while (paises.length > i) {
    console.log(paises[i]);
    i = i+1;
}