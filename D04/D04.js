// Level 1 Exercises 

const age = window.prompt("Enter your age")

if (age < 18) {window.alert(`wait for another ${18 -age} to get drivin`)} 
else{window.alert('your old enough to drive')
}


const myAge = window.prompt("Enter my age")
const yourAge = window.prompt("Enter your age")

if (myAge>yourAge) {window.alert("now go get me alemonade >:D")}
else {window.alert(`you have suffered {yourAge-myAge} years more than me >:D`)}


const a = 3
const b = 5 

a>b ? console.log("a is greater then b") :
console.log("b is greater then a")

const num = window.prompt("Enter a number")

num%2===0 ? window.alert(`${num} is an even number`)
:window.alert(`${num} is NOT an even number, its odd >:)`)

// Level 2 Exercises 

function gradinSys(score) {
    if (score <50) {return "F"}
    else if (score <60) {return "D"}
    else if (score <70) {return "C"}
    else if (score <80) {return "B"}
    else if (score >80) {return "A"}
}
function findSeason(month){
    switch(month){
        case "September":
        case "October ":
        case "November":
            return "Autumn"
            break;
        case "June":
        case "July  ":
        case "August":
            return "Summer"
            break;
        case "March":
        case "April  ":
        case "May":
            return "Spring"
            break;
        case "December":
        case "January  ":
        case "February":
            return "Winter"
            break;  
    }
}

const today = window.prompt("what day is it?")

if (today.toLowerCase() === "saturday") {
    window.alert('Welcome to WEEKEND BABYYYY!')
} else {
    window.alert('Everyday is WEEKEND BAYBYYYY!!!')
}


// Level 3 Exercises 

const toMonth = window.prompt("what month?").toLowerCase()

function howManyDays(theMonth){
    switch(theMonth){
        // 31 days
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October ":
        case "December":
            window.alert(`${theMonth} has 31 days`)
            break;
        // 30 days
        case "September":
        case "November":
        case "June":
        case "April  ":
            window.alert(`${theMonth} has 30 days`)
            break;

        // 29 days
        case "February":
            window.alert(`${theMonth} has 29 days`)
            break;
    }
}

