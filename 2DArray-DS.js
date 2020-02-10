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
    for(let element of arr) {
        element.map((element, index) => {
            debugger
            if(count === index){
                console.log(element);
            }
        })
        count++;
        
    }      
}

console.log(hourglassSum(input));
