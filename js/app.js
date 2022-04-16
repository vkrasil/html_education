// // let name='Vova'
// // const lastName = 'Krasylnykov' //string
// // const firstName='Vova'
// // let age=32 //number
// // const isProgrammer = true //boolean
// //
// //
// // name='Vladimir'
// // console.log(name+' '+lastName+' Aged:'+age)
// // console.log(age)
// // //const promptResult=prompt('Enter last name')
// // //console.log(promptResult)
// // let currentYear = 2022
// // const birthYear = 1990
// // const calculatedAge=currentYear - birthYear
// // console.log(calculatedAge)
// //
// // const a=10
// // const b=5
// // let c=32
// // //c=c+a
// // c+=a
// // // console.log(a+b)
// // // console.log(a-b)
// // // console.log(a*b)
// // // console.log(a/b)
// // console.log(++currentYear)
// // console.log(currentYear)
// // console.log(c)
// // console.log(typeof isProgrammer)
// // console.log(typeof name)
// // console.log(typeof age)
// // let x
// // console.log(typeof null)
// // const fullAge = 32
// // // > < >= <=
// // const isFullAge = (currentYear-birthYear) >= fullAge
// // console.log(isFullAge)
// // const courseStatus='fail'
// // if (courseStatus==='ready')
// // {
// //     console.log('Course is ready and can be taken')
// // } else
// // if (courseStatus==='pending')
// // {
// //     console.log('Course is under development')
// // } else {
// //     console.log('Unknown status')
// // }
// // const num1=42
// // const num2='42'
// // console.log(num1===num2 )
// //
// // const isReady=false
// //
// // if (isReady) {
// //     console.log('truE')
// // }
// //
// // isReady ? console.log('Ready') : console.log('Not yet Ready')
// //
// // function calculateAge(year)
// // {
// //     return 2022-year
// // }
// //
// //
// //
// // console.log(calculateAge(32))
//
// // const cars = ['Mazda', 'BMW', 'Ford','VW']
// // cars[0]='Porsche'
// // cars[3]='VW'
// // console.log(cars)
// // console.log(cars.length)
//
// // for (let i=0;i<cars.length; i++) {
// //     console.log(cars[i])
// // // }
// // for (let car of cars){
// //     console.log(car)
// // }
// //
// // const person ={
// //     firstName: 'Volodymyr',
// //     lastName: 'Krasylnykov',
// //     year: 1990,
// //     languages: ['Ukr', 'Rus', 'Eng', 'De'],
// //     greet: function () {
// //         console.log('greet')
// //     },
// //     hasWife: false
// // }
// // console.log(person.firstName)
// // person.greet()
//
// const num=42
// const float=42.42
// const pow=10e3
//
//
// console.log('MAX_SAFE_INTEGER:'+Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53:'+(Math.pow(2,53)-1) )
// console.log('MIN_SAFE_INTEGER:'+Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE:',Number.MAX_VALUE)
// console.log('MIN_VALUE:',Number.MIN_VALUE)
// console.log('Posititve infinity: ',Number.POSITIVE_INFINITY)
// console.log('1/0: ',1/0)
// console.log('Not a Number: ', Number.NaN)
// console.log('type of NaN: ',typeof NaN)
//
// const stringInt='40'
// const stringFloat='40.42'
// console.log(Number.parseInt(stringInt)+2)
// console.log(Number(stringInt)+2)
// console.log(+stringInt+2)
// console.log(Number.parseFloat(stringFloat)+2)
// console.log(+stringFloat+2)
// console.log(0.4+0.2)
// console.log(+(0.4+0.2).toFixed(1))
//
// console.log(9007199254740991999999990n-9007199254740991999999991n)
//
// //
// const sum=(a,b)=>a+b
// const testSum=sum(12,18)
//
// console.log(testSum);
function OnMouseOver() {

}

const heading=document.getElementById('hello')
// const heading2=document.getElementsByTagName('h2')[0]
// const heading2=document.getElementsByClassName('h2-class')[0]
const heading2=document.querySelector('h3')
console.log(heading2);

heading.textContent='Changed from JavaScript'
heading.style.color= 'red'
heading.style.textAlign='center'
heading.style.backgroundColor='gray'
heading.onmouseover=() => heading.style.color= 'blue'
heading.onmouseleave= () => heading.style.color= 'red'



