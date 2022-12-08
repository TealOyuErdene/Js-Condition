//1 true or false
let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

// //2
let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //true


//3 
let yourAge = prompt('Enter your age')
const myAge = 18

if(+yourAge > +myAge){
    console.log('older than me')
}
else if(+yourAge < +myAge){
    console.log('younger than me')
}else if(+yourAge == +myAge){
    console.log('same age as me')
}
else(
    alert('Value is incorrect')
)


//4 weekend or weekday
const day = prompt('Enter your week')

if(+day === 1){
    console.log('it\'s a Monday')
}
else if(+day === 2){
    console.log('it\'s a Tuesday')
}
 else if(+day === 3){
     console.log('it\'s a Wednesday')
}
else if(+day === 4){
     console.log('it\'s a Thursday')
}
else if(+day === 5){
     console.log('it\'s a Friday')
}
else if(+day === 6){
     console.log('it\'s a Saturday')
}
else if(+day === 7){
     console.log('it\'s a Sunday')
}
else{
     console.log('Value is incorrect')
}


//5
// Хэрэглэгчээс цаг оруулах, цаг тутамд үнэлгээ өгөх скрипт бичээрэй.
// Тухайн хүний цалинг тооцно уу
let hours = 40
let ratePerHour = 28
let salary 
salary = hours * ratePerHour
console.log(salary +'$')

let hoursWorked = prompt('Enter your working hours')
let calculateSalary = hoursWorked * ratePerHour  
console.log(calculateSalary +'$')
