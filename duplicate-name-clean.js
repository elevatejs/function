// Duplicate names clean 
function dupName(names) {
    let singleName = [];
    for (let name of names) {
        if (singleName.includes(name) === false) {
            singleName.push(name);
        }
    }
    return singleName;
}
const names = ['abul', 'kabul', 'dabul', 'babul', 'abul', 'babul', 'kabul'];
const result = dupName(names);
console.log(result);
