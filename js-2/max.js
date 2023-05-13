function max(arr) {
    let result = 0;

    if (arr.length == [] ) {
        return undefined
    }

    for (let i = 0; i < arr.length; i++) {
        if (result < arr[i]) {
            result = arr[i];
        } 
    }

    return result;
}
console.log(max([]))
