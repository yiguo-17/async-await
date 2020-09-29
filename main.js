1.
// Here are 3 functions that return promises
// 1st function creates a random number and refactors the name
// 2nd function decides the level of the user
// 3rd function gives hit points and strength of user based on level
// Using async await....create a function called login, that takes a name and email
// Success from the function will log a string using values from all 3 functions
// Successful String Output: '<name from loginUser> is an <level> player with <strength> strength and <hitPoint> hit points.'
// Failed String Output: 'User Not Logged in'

// Except for loginUser, calling a function requires a value from the previous function
// Do not edit loginUser, level or levelPower except to test the error variable
// log the error message in your function so that it shows the message if reject has been called

const loginUser = (name) => {
  return new Promise((resolve, reject) => {
    const error = false;
    let random = Math.floor(Math.random() * 98);

    error
      ? reject('User Not logged in')
      : resolve({ name: `The ${name}-Meister`, random });
  });
};

let level = (levelNumber) => {
  return new Promise((resolve, reject) => {
    levelNumber === 0
      ? reject('User had no power and is expired')
      : levelNumber < 32
      ? resolve('amateur')
      : levelNumber < 65
      ? resolve('intermediate')
      : resolve('advanced');
  });
};

let levelPower = (level) => {
  return new Promise((resolve, reject) => {
    (level=== 'advanced')? resolve({ hitPoints: 200, strength: 10 })
      : (level ==='intermediate')
      ? resolve({ hitPoints: 100, strength: 7 })
      : resolve({ hitPoints: 70, strength: 4 });
  });
};

2.
// Write an async function getUsersEmails
// Using fetch, it should call the given url
const url1 = 'https://randomuser.me/api/?results=10';
// log out a list of User Emails
// OUTPUT
// Email List:

// craig.odonoghue@example.com
// ferdinanda.farias@example.com
// isabella.horton@example.com
// alessandro.rink@example.com
// giulia.daconceicao@example.com
// yolanda.nieto@example.com
// sander.thomsen@example.com
// damien.dupont@example.com
// isabella.carroll@example.com
// jake.owens@example.com

3.
// Write an async function getFilms
// using axios, it should call the given url
let urlFilm = 'https://ghibliapi.herokuapp.com/films';
// Function should randomly choose one of the objects from your api call
// and log the title as well as the classification and name from the last url in the species array
// study the data to figure out your solution
// Output will be random but format it like the EXAMPLE OUTPUT below
// EXAMPLE OUTPUT:
// Title: Whisper of the Heart
// Classification: Mammal
// Name: Human
async function login(name){
  try{
    const user = await loginUser(name);
    const userLevel = await level(user.random);
    const userPower = await levelPower(userLevel);
    console.log(`${user.name} is an ${userLevel} player with ${userPower.strength} strength and ${userPower.hitPoints} hit points.`)
  }
  catch(err) {console.log(err)}
}
login('albert')

const fetch = require('node-fetch');
const getUsersEmails  =  async function(url){
  try{
    const pro = await fetch(url);
    const json = await pro.json();
    const users = await json.results;
    console.log('Email List:')
    users.map(user=>console.log(user.email))
  }
  catch (err){console.log(err)}

} 
getUsersEmails(url1);

const getFilms = async function(url){
  try{
    const pro = await fetch(url);
    const json = await pro.json();
    const random = json[Math.floor(Math.random()*json.length)];
    const title = random.title
    const species = await fetch(random.species.toString());
    const jsonS = await species.json();
    const name = jsonS.name;
    const classification = jsonS.classification;
    console.log(` Title: ${title} \n Classification: ${classification} \n Name: ${name}`)
    
  }
  catch(err){console.log(err)}
}

getFilms(urlFilm)