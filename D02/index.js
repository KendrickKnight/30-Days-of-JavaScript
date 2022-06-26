// LEVEL 1 EXERCISES

const challenge = "30 Days Of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(2))
console.log(challenge.substring(0,2))
console.log(challenge.includes("Script"))
console.log(challenge.split(' '))
const faang = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(faang.split(','))
console.log(challenge.replace('Script','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
const sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
const challenge2 = ' 30 Days Of JavaScript '
console.log(challenge2.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('t'))
console.log(challenge.match(/a/))
const conc = "30 days of"
console.log(conc.concat(' of JavaScript'))
console.log(challenge.repeat(2))

// LEVEL 2 EXERCISES



console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
console.log(typeof('10') === typeof(10))
console.log(parseFloat('9.8') === 10)
console.log(Math.round(parseFloat('9.8')) === 10)
const on = ['jargon','python']
console.log(on[0].includes('on') === on[1].includes('on'))
const has ="I hope this course is not full of jargon"
console.log(has.includes('jargon'))
console.log(Math.floor(Math.random()*100))
console.log(Math.floor(Math.random()*50+50))
console.log(Math.floor(Math.random()*256))
console.log(`
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
`)
console.log(sentence.substr(0,sentence.indexOf('because')) + sentence.substr(sentence.lastIndexOf('because')+7))


// LEVEL 3 EXERCISES

const sent2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sent2.toLowerCase().match(/love/g).length)
console.log(sentence.toLowerCase().match(/because/g).length)
