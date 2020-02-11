const input = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];


function hourglassSum( arr ){
    
    
}
// recibe una matriz con el número de filas y columnas iguales
function xMatriz(arr){
    //acomuladores y contadores para la primera y segunda diagonal
    let count = 0;
    let lineOne = 0;
    let countOne = arr.length-1;
    let lineTow = 0;
    //obtener primera diagonal 
    for(let index of arr){
        index.map((element, index) => {
            if(count === index){
                lineOne += element;
            }
        });
        count++;
    }
    //obtener segunda diagonal
    for(let index of arr){
        index.map((element, index) => {
            if(countOne === index){
                lineTow += element
            }
        });
        countOne--;
    }
    return lineOne + lineTow;      
}

console.log(hourglassSum(input));
console.log(xMatriz(input))
