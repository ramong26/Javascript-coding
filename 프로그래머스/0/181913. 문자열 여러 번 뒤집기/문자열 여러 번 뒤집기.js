function solution(my_string, queries) {
    let arr = my_string.split(''); 

    for (let i = 0; i < queries.length; i++) {
        let [start, end] = queries[i];


        let reversed = arr.slice(start, end + 1).reverse();

       
        for (let j = start; j <= end; j++) {
            arr[j] = reversed[j - start];
        }
    }

    return arr.join('');
}
