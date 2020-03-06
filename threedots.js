const friends1 = ['Hasib', 'Mamun', 'Oubaida'];
const friends2 = ['Ashraful', 'Rokibul', 'Aminul'];
const friends3 = ['Munna', 'Kuddus', 'Motaleb'];

const allFriends = friends1.concat(friends2).concat('Salto').concat(friends3).concat('Lalto', 'Bolto');
const allFriends2 = [...friends1, ...friends2, ...friends3];
//console.log(allFriends2);
//console.log(allFriends);

const num = 100;
const num1 = 150;
const num2 = 200;
const allNum = [100, 150, 222];

const maximum = Math.max(...allNum);
console.log(maximum);