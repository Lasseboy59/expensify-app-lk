// Object destructuring 

// const person = {
//     name: 'Lasse',
//     age: 51,
//     location: {
//         city: 'Vantaa',
//         temp: -4
//     } 
// };

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It' s ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penquin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// Array destructuring

const address = ['08910 Tilhitie', 'Vantaa', 'Suomi', '61565'];
const [, city, state = 'New York'] = address; 
console.log(` You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [item_name, price_200, price_250, price_275] = item;

// console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${item_name} costs ${price_250}.`)


