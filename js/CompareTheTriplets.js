const a = [1,2,3,3,2];
const b = [3,2,1,3.5];

//Contar diferencia de puntos en dos participante de una competencia
function compareTriples(a,b){
    //Almacenar puntos
    let Alice = 0;
    let Bob = 0;
    a.map((element, index) => {
        if(element > b[index]){
            Alice +=1;
        }
        if(element < b[index]){
            Bob +=1;
        }
    })
   return [Alice, Bob];
}

console.log(compareTriples(a,b));