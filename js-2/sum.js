function sum(arr) {
    let sumItem = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sumItem += arr[i]
    }
    return sumItem
}
console.log(sum([10, 8, 12, 5]))