// const input = [
//     [1,1,1,0,0,0],
//     [0,1,0,0,0,0],
//     [1,1,1,0,0,0],
//     [0,0,2,4,4,0],
//     [0,0,0,2,0,0],
//     [0,0,1,2,4,0]
// ];

// //Hacer suma de los reloj de arena y retornar el resultado mayor
// function hourglassSum(arr){
//     //Guardar la suma de cada reloj de arena
//     let sum = [];

    
    
// }
// // Recibe una matriz con el número de filas y columnas iguales
// function xMatriz(arr){
//     //Acomuladores y contadores para la primera y segunda diagonal
//     let count = 0;
//     let lineOne = 0;
//     let countOne = arr.length-1;
//     let lineTow = 0;
//     //Obtener primera diagonal 
//     for(let index of arr){
//         index.map((element, index) => {
//             if(count === index){
//                 lineOne += element;
//             }
//         });
//         count++;
//     }
//     //Obtener segunda diagonal
//     for(let index of arr){
//         index.map((element, index) => {
//             if(countOne === index){
//                 lineTow += element
//             }
//         });
//         countOne--;
//     }
//     return lineOne + lineTow;      
// }

// console.log(hourglassSum(input));
// console.log(xMatriz(input))
const input = [3,
[11,2,4],
[4,5,6],
[10,8,-12],
]
function diagonalDifference(arr) {
    //Almacen de las sumas en las diagonales.
    let count = 0;
    let countOne = arr[0]-1;
    let diagonal = 0;
    let diagonalOne = 0;
    //Primera diagonal
    for(let i=1; i <= arr[0]; i++){
        arr[i].map((element, index) => {
            if(count === index){
                diagonal += element;
            }
        });
        count++;
    }
    // Segunada diagonal
    for(let i=1; i <= arr[0]; i++){
        arr[i].map((element, index) => {
            if(countOne === index){
                diagonalOne += element;
            }
        });
        countOne--;
    } 
  return Math.abs(diagonal - diagonalOne) 

}
console.log(diagonalDifference(input))
