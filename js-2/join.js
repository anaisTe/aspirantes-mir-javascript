function join(arr) {
    let str = arr.toString();
    let result = str.replaceAll(/,/g,' ');

    return result
}

console.log(join([10,22,31]));