const input = [ 6,
    -4, 3, -9, 0, 4, 1, 
];

function plusMinus(arr){
    let poitive = 0;
    let negative = 0;
    let cero = 0;
    for(let i = 1; i <= arr[0]; i++){
        if(arr[i] > 0){
            poitive++;
        }
        if(arr[i] < 0){
            negative++;
        }
        if(arr[i] === 0){
            cero++;
        }  
     
    }
    console.log(parseFloat(poitive/arr[0]).toFixed(6));
    console.log(parseFloat(negative/arr[0]).toFixed(6));
    console.log(parseFloat(cero/arr[0]).toFixed(6));
}
plusMinus(input);