function solution(polynomial) {
 
    let sumX = 0;
    let sumNumber = 0
    const newPolynomial = polynomial.split(" ");

    for(let i =0; i<newPolynomial.length; i++){
        if(newPolynomial[i] === '+') continue;
        
        if (newPolynomial[i].includes("x")) {
            if (newPolynomial[i] === "x") {
                sumX = sumX +1;
            } else {
                sumX = sumX + Number(newPolynomial[i].replace('x',''))
            }
        }else {
            sumNumber =sumNumber + Number(newPolynomial[i])
        }
    }
    

    sumX = sumX === 0 ? '' : (sumX === 1 ? 'x' : sumX + 'x');
    sumNumber = sumNumber === 0 ? '' : (sumX ? ' + ' + sumNumber : String(sumNumber));
    console.log(sumX, sumNumber)
    let result = sumX + sumNumber
    
    return String(result);
}