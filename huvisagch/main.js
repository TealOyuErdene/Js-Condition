// 1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
// a=85 b=75 c=96 d=69
// 80-аас их тоонуудын нийлбэрийг: 181
// 2. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
// a=3 b=7 c=2 d=4
// 5-аас бага тоонуудын үржвэр: 24

// 1
const a = 85
const b = 75
const c = 96
const d = 69
let niilber = 0

if( a > 80){
    niilber = niilber + a
}
if(b > 80){
    niilber = niilber + b
}
if(c > 80){
    niilber = niilber + c
}
if(d > 80){
    niilber = niilber + d
}
console.log(niilber)

// 2
const x = 3
const y = 7
const z = 2
const n = 4
let urjver = 1

if(x < 5){
    urjver = urjver * x //3
}
if(y < 5){
    urjver = urjver * y
}
if(z < 5){
    urjver = urjver * z
}
if(n < 5){
    urjver = urjver * n
}
console.log(urjver)
