function solution(n, slicer, num_list) {

    let slicerTemp = [];
    
    switch (n) {
        case 1:
            slicerTemp[0] = 0
            slicerTemp[1] = slicer[1]
            break;
        case 2:
            slicerTemp[0] = slicer[0]
            slicerTemp[1] = num_list.length-1
            break;
        case 3:
            slicerTemp[0] = slicer[0] 
            slicerTemp[1] = slicer[1]
            break;
        case 4: // 추가적인 기능 필요
            slicerTemp[0] = slicer[0]
            slicerTemp[1] = slicer[1]
    } 
    console.log(num_list.length-1)
    console.log(slicerTemp)
    let tempArr = []
    for(let i =slicerTemp[0]; i<= slicerTemp[1]; i++){
        tempArr.push(num_list[i])
    }
    
    
    let answer = []
    if (n === 4){
        
        for(let i =0; i<tempArr.length; i=i+2){
            answer.push(tempArr[i])
        }
        
        return answer
    } else {
        return tempArr
    }
  
}