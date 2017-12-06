// object destructuring

// const person = {
//   name: 'Ken',
//   age: 37,
//   location: {
//     city: 'Boulder',
//     temp: 44
//   }
// }
//
// const { name: firstName = 'No Name', age } = person
// const { city, temp: temperature } = person.location
//
// console.log(`${ firstName } is ${ age }.`)
//
// if (city &&  temperature) {
//   console.log(`It's ${ temperature } in ${ city }.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const { name: publisherName = 'Self-Published' } = book.publisher
//
// console.log(publisherName)


// array destructuring

// const address = ['123 South Street', 'Boulder', 'Colorado', '80301']
// const [, city, state = 'New Jersey'] = address
// console.log(`You are in ${city}, ${state}.`)


const item = ['coffee (iced)', '$2', '$3', '$4']
const [itemName, , mediumPrice] = item

console.log(`A medium ${ itemName } costs ${ mediumPrice }.`)
