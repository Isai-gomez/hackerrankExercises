const a = [1,2,3];
const b = [3,2,1];

function compareTriples(a,b){
    //Almacenar puntos
    let Alice = 0;
    let Bob = 0;
    for(let i=0; i< a.length; i++){
        if(a[i] > b[i]){
           Alice +=1;
        }
        if(a[i] < b[i]){
            Bob +=1;
        }
    }
    return [Alice, Bob];
}

console.log(compareTriples(a,b));