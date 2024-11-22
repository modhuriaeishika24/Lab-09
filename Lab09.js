//q 1
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (let i = 0; i <= 0; ) {
    console.log(characters);
}

//q 2
let firstName = "Harry";
let house = "Gryffindor";
console.log(`Welcome, ${firstName} of ${house}!`);
//q 3
let characterName = "Harmione";{
console.log(characterName.toUpperCase());
console.log(characterName.toLowerCase());
}
//q 4
let spell = "Expelliarmus";
console.log(spell.trim());
//q 5
let quote = "I solemnly swear that I am up to no good.";
console.log(quote.slice(11, 16));
//q 6
let firstname = "Ron";
let lastName = " Weasley";
console.log(firstname.concat(lastName));
//q 7
let sentance = "Draco is a good wizard";
console.log(sentance.replace("good", "bad"));
//q 8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw',]
houses.push('Slytherin');
houses.pop(); 
console.log(houses);
//q 9
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);
//q 10
let professors = ['Dumnledore', 'McGonagall', 'Snape', 'Hagrid'];
let newProfessors = professors.slice(1, 3);
console.log(newProfessors);
//q 11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2);
console.log(students);
//q 12
let phrase = ' Mischief Managed';
let Phrase = phrase.trim().toLowerCase().concat(' - Harry');
console.log(Phrase);
//q 13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);
//q 14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let result = message.slice(11, 19).concat(' Castle');
console.log(result);

