let history ={
    name:'Sadek hossen',
    age:19,
    nickName:'Emon'
}

console.log(history.name,history.age, history.nickName)//Sadek hossen 19 Emon,,, we can by this wey return spacipic propertes value
console.log(Object.keys(history)) // [name, age, nickname] ,,, just return key name not value
console.log(Object.values(history))//[sadek Hossen, 19, Emon],,, just return value not name
console.log(Object.entries(history))// [ 'name', 'Sadek hossen' ], [ 'age', 19 ], [ 'nickName', 'Emon' ]  all returning as a array
console.log(history.hasOwnProperty('name')) //true , (hasOwnProperty) chaknig property name have or do not have
console.log(Object.getOwnPropertyNames(history)) // [name, age, nickname] return property name

Object.seal(history)// do not allow for new property add. নতুন property add করা যাবে না, কিন্তু আগের property value change করা যাবে।
console.log(history)

Object.freeze(history)
history.name = 'monna'
console.log(history.name)// Sadek Hossen trogh changed but not be changed becouse Object কে immutable (পরিবর্তন অযোগ্য) বানাতে।

let number1 = { a:10};
let number2 = {b:12};
let marged = Object.assign({},number1,number2); console.log(marged)// {a:10.b:12} ,,, two diffrent object doing marge
