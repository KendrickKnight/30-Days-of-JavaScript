// LEVEL 1 EXERCISES

const   firstName= "Ehsan" , lastName = "Langroudi",
        country="Iran", city="Kerman", isMarried = false, year=21
console.log('10'===10)
console.log(parseInt("9.8")===10)
// numbers, ture ,strings
// 0, false, undefined, NaN

// 5th exercise is just a huge console.log() list
// and so is the 6th one
let date = new Date()
let years =date.getFullYear()
let month =date.getMonth()
let day =date.getDay()
let hour =date.getHours()
let minutes =date.getMinutes()
let time =date.getTime()
console.log(date)
console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(minutes)
console.log(time)

// LEVEL 2 EXERCISES

let base = window.prompt("Enter base:")
let height = window.prompt("Enter height:")
window.alert(`the area of triangle is: ${base * height /2}`)

let length = window.prompt("Enter Length:")
let Width = window.prompt("Enter Width:")
window.alert(`the area of Rectangle is: ${length * width }`)

let pi = 3.14
let radius = window.prompt("Enter radius of circle:")
window.alert(`area of circle is: ${2*pi*radius}`)

// Honestly idek what this means

let point1 = [2,2]
let point2 = [6,10]
let slope = (p1,p2) => {
    return (p2[1]-p1[1])*(p2[0]-p1[0])
}

