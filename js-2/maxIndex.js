function maxIndex(arr) {
    let indice = 0;

    if (arr.length == [] ) {
        return -1
    }

    for (let i = 0; i < arr.length; i++) {
        if (indice < arr[i]) {
            indice = arr[i];
        } 
    }
    indice = arr.indexOf(indice)
 
    return indice;
}
console.log(maxIndex([1, 2, 10, 5])) 