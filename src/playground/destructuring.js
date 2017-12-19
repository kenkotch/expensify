// object destructuring

// const person = {
//   name: 'Ken',
//   age: 37,
//   location: {
//     city: 'Boulder',
//     temp: 44
//   }
// }
// const { name: firstName = 'Anonymous', age } = person
// const { city, temp: temperature } = person.location
// console.log(`${firstName} is ${age}.`)
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`)
// }

// const book = {
//   titel: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
// const { name: publisherName = 'Self Published' } = book.publisher
// console.log(publisherName)


// array destructuring

const address = ['123 My Street', 'Boulder', 'CO', '80303']
const [, city, state = 'NY'] = address // can skip indecies like street or zip and set defaults

console.log(`You are in ${city}, ${state}.`)

const item = ['coffee (iced)', '$3.00', '$3.50', '$3.75']
const [coffee, , med] = item

console.log(`A ${ coffee } costs ${ med }.`)
