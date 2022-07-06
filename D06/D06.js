// Today is about Loops

// Level 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


for (let i =0;i<11;i++) {
    console.log(i)
}
let k = 0
while (k < 11) {
    console.log(k)
    k++
}
let j = 0
do {
    console.log(j)
    j++
}while(j<11)


for (let i =10;i>0;i--) {
    console.log(i)
}
let w = 10
while (w >0) {
    console.log(w)
    w--
}
let e = 0
do {
    console.log(e)
    e--
}while(e>0)

let hashs = ''
for (let i =0;i<6;i++) {
    hashs = hashs + '#'
    console.log(hashs)
}

for (let i =0;i<11;i++) {
    console.log(`${i} * ${i} = ${i*i}`)
}

console.log(`i i^2 i^3`)
for (let i =0;i<11;i++) {
    console.log(`${i} ${i*i} ${i*i*i}`)
}

for (let i =0;i<101;i++) {
    if (i%2 == 0){
        console.log(i)
    }
}
for (let i =0;i<101;i++) {
    if (i%2 == 1){
        console.log(i)
    }
}

let primeList=[]

for (let i =0;i<101;i++) {
    if (i%2 == 0){
        continue
    }else if (){console.log(i)}
}