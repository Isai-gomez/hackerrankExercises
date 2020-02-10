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

function xMatriz( arr ){
    let count = 0;
    let lineOne = 0;
    arr.map( element => {        
        element.map((element,index) => {
          if(count === index){
              lineOne += element;
          }
    });
    count++;
    })
    return lineOne;      
}

const Xmatriz = xMatriz(input);
console.log(Xmatriz);
console.log(hourglassSum(input));
