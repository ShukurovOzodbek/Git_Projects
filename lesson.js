// 1 - Какой у вас браузер
let browser = prompt("What is your browser?", "");
if (browser == "Edge") {
  console.log("You've got the Edge!");
} else if (
    browser == "Chrome" ||
    browser == "Firefox" ||
    browser == "Safari" ||
    browser == "Opera"
) {
    console.log(`Okay we support these browsers ${browser} too`);
} else {
    console.log("We hope that this page looks ok!");
} 


// 2 - Чемпионат европы футбол
// let team = [
//     'Barcelona',
//     'Real Madrid',
//     'Valencia',
//     'Atletiko Madrid',
//     'Atlitik',
//     'Liverpool',
//     'Totenham',
//     'PSG',
//     'Marsel',
//     'Milan',
//     'Juventus',
//     "Ajax",
//     'Roma',
//     'Turin'
// ]

// let teamRandom = Math.floor(Math.random() * team.length)
// let random = (team[teamRandom]);
// let quest_1 = confirm(`Are your team is ${random}`)
// if (quest_1 === true) {
//     alert('You can come and maybe you won')
// }else{
//     alert('No you arent one of this team no')
// }




// 3 - Угадай число

// // Then first step
// let name = prompt('What`s your name') 
// let letsPlay = prompt(`Hi ${name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()} lets play a game if you want to play write "y" or "yes", if you don't want write "n" or "No"` )

// // if else
// if (letsPlay == 'y' || letsPlay == "yes") {
//     alert("This game's name is guess the number")
//     alert('And you should guess number from 0 to 20')
//     alert('I am thinking a number...')
// // main
//     let mathem = Math.floor(Math.random() * 20)
//     while(letsPlay != mathem){
//         let number = prompt('Write your gussed number')
//         if (number == mathem){
//             console.log('Correct bro you are the best of the best');
//                 break;
//         }else if (number < mathem) {
//             console.log('My number is bigger');
//         }else if (number > mathem) {
//             console.log('My number is smaller');
//         }
//     }

// }else{
//     alert("Don't worry you the best too")
// }


