//  CRASH COURSE 3

/*
let age: number = 30

let firstName : string = 'Goku'
let isFictional : boolean

age = 31

firstName = 'Vegeta'
isFictional = true

let planet = 'Earth'
let moons = 1
let isLarge = false

planet = 'Saturn'
moons = 145
isLarge = true 

// null & undefined 

let something: null
let anotherThing: undefined 

something = null 

anotherThing = undefined

*/

// ---------------
// CRASH COURSES 4
//----------------

/*
console.log('hello, world !!! ')
*/

// ---------------
// CRASH COURSES 5
//----------------

/*

// -------
// Arrays
//--------

let names: string [] = ['Mario', 'Luigi', 'Peach']
let ages: number [] = [25,30,24]

names.push('browser')
ages.push(35)

// -----------------------------------
// Type inference with object literals 
//------------------------------------

let fruits = ['apples', 'pears','bananas','mangos']

fruits.push('peaches')

const f = fruits[3]

let things = [1, true , 'hello']

const t = things [0]

// ---------------
// Object Literals 
//----------------

let user: {firstName: string, age: number, id: number} = {
    firstName: 'mario',
    age: 30,
    id: 1
}

user.firstName = 'peach'
user.id = 2
 
// -----------------------------------
// Type inference with object literals 
//------------------------------------

let person = {
    name: 'luigi',
    score: 35
}

person.name = 'bowser'
person.score = 40

*/

// ----------------
// CRASH COURSES 6
//-----------------
/*

// ---------
// Functions
//----------

function addTwoNumbers (a:number ,b:number):number {
    return a+b
}

const subtractTwoNumbers = (a:number,b:number): number => {
    return a - b

}

addTwoNumbers (3,9)
subtractTwoNumbers(10,7)

function addAllNumbers (items:number[]): void {
    const total = items.reduce((a,c)=>a+c,0)
    console.log(total)
}
addAllNumbers ([5,7,9,11,3,2,1]) 



// ---------------------
// return type inference
//----------------------

function formatGreeting(name: string, greeting: string) {
    return `$(greeting), ${name}`
}

const result = formatGreeting ('mario','hello')

*/
    
// ----------------
// CRASH COURSES 7
//-----------------
/*
// ----------------
// Any Type
//-----------------

//  Le type any permet à une variable de prendre n'importe quel caractéristique 

let age: any
let title

age = 30
age = false

title = 25
title  = {
    hello: 'world'
}

// ----------------
// Any Type in Arrays
//-----------------

let things: any [] = ['hello', true, 30, null]
things.push({id: 123})

// ----------------
// Function & Any
//-----------------

function addTogether(value: any):any {
    return value + value
}

const resultOne = addTogether('hello')
const resultTwo = addTogether(6)



// useful when migrating from js to ts
// because using any won't cause errors initially 

*/

// ----------------
// CRASH COURSES 8 
//-----------------

/*
// ------
// Tuples 
//-------

let person : [string, number, boolean] = ['goku', 30, true]

//Dans cette exemple les tuples ne sont pas utilisée , les types de variable sont corréctement respecter

// ----------------
// Tuples examples
//----------------- 

let hsla: [number, string, string , number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [94.7, 20.1]

function useCoords(): [number, number] {
    //get coords

    const lat = 100
    const long = 50

    return [lat, long]
}

const [lat, long] = useCoords()

// ----------------
// Named tuples
//-----------------

let user: [name: string, age: number]

user = ['peach', 25]
console.log(user[0])

*/

// ----------------
// CRASH COURSES 9
//-----------------

// ----------------
// Interfaces
//-----------------

/*
interface Author {
    name : string,
    avatar : string
}

const authorOne: Author = {name: 'mario', avatar: '/img/mario.png'}

interface Post {
    title : string,
    body : string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'my first post',
    body: 'something interesting', 
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne

}


// --------------------------
// as function argument types 
//---------------------------

function createPost(post: Post): void {
    console.log(`Created post ${post.title} by ${post.author}`)

}

createPost(newPost)



// -----------
// With arrays
//------------

let posts : Post[] = []
posts.push(newPost)

*/

// ----------------
// CRASH COURSES 10
//-----------------

// ------------
// Type aliases 
//-------------


// Example 1 - tuple
/*

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)


// Example 2 - object literal

type User = {
    name: string
    score: number
}

const userOne: User = {name: 'mario',score: 75}

function formatUser(user: User): void {
    console.log (`${user.name} has a score of ${user.score}`)

}

formatUser(userOne)
formatUser({name: 'yoshi', score: 100})

*/


// ----------------
// CRASH COURSES 11
//-----------------

/*

// ----------------
// Union types
//-----------------

let someId: number | string

someId = 1
someId = '2'

let email: string | null = null

email = 'mario@netninja.dev'
email = null

type Id = number | string
let anotherId: Id

anotherId = 'gokussj1'
anotherId = 5


// -------------------
// Union types pitfall
//--------------------

function swapIdType(id: Id): Id {
  // can only use props and methods common to
  // both number and string types
  // parseInt(id) --> not allowed

    return id 
}

swapIdType ('5')

*/

// ----------------
// CRASH COURSES 12
//-----------------

// ----------------
// type guards 
//-----------------

type Id = number | string

function swapdIdtype (id: Id) {
    if(typeof id === 'string') {
        return parseInt(id)
    }
    else {
        return id.toString()
    }
}
 
const idOne = swapdIdtype(1)
const idTwo = swapdIdtype('2')

console.log(idOne,idTwo)


// ----------------
// tagged interfaces
//-----------------

interface User {
    type : 'user'
    username : string
    email: string
    id: Id
}
interface Person {
    type : 'person'
    firstname : string
    age: string
    id: Id
}

function logDetails(value: User | Person): void {
    if (value.type === 'user') {
        console.log(value.email, value.username)
}
if (value.type === 'person') {

}
}