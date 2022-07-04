// Level 1

let emptyArray = []
let arr5 = [2,21,2,25,24,22]
console.log(arr5.length)
console.log(arr5[0])
console.log(arr5.length-1)
let mixedDataTypes = [true,12,'hello',{holy: 'holy G'}, ['another list','lol']]
let itCompanies = ['Facebook','Google', 'Apple', 'Microsoft','IBM','Oracle','Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.ceil(itCompanies.length/2)])
console.log(itCompanies.length-1)
for (let i = 0;i<itCompanies.length;i++){
    console.log(itCompanies[i])
}
for (let i = 0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase())
}
let sentence = ''
for (let i = 0;i<itCompanies.length;i++){
    sentence = sentence + itCompanies[i] +  ', ' 
}
console.log(sentence)
let index = itCompanies.indexOf('xCompany')
if (index === -1){console.log('nope, not there :/')}else (console.log('yup, its there'))
let ncompanies = []
for (let i = 0;i<itCompanies.length;i++){
    oCount = 0
    for (let e = 0;e<itCompanies[i].length;e++){
        if (itCompanies[i][e].toLowerCase() === 'o') {oCount++}
    }
    if (oCount<2) {ncompanies.push(itCompanies[i])}
}
console.log(ncompanies)
console.log(itCompanies)
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(3))
console.log(itCompanies.slice(-3))
console.log(itCompanies.pop())
console.log(itCompanies.splice(3,3))
console.log(itCompanies.shift())
console.log(itCompanies = [])

// Level 2




