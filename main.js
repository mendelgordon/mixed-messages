// random number generator
const randomNumber = num => {
  return Math.floor(Math.random() * num);
};

// function to pick a random word from the array
const randomWord = arr => {
  return arr[randomNumber(arr.length)];
};

// array of random first names
const firstNames = [
  'Abigail',
  'Alexandra',
  'Alison',
  'Amanda',
  'Angela',
  'Bella',
  'Carol',
  'Caroline',
  'Carolyn',
  'Deirdre',
  'Diana',
  'Elizabeth',
  'Ella',
  'Faith',
  'Olivia',
  'Penelope',
  'Sophie',
  'Sophia',
  'Stephanie',
  'Theresa',
  'Tracey',
  'Una',
  'Vanessa',
  'Victoria',
  'Yvonne',
  'Zoe',
];

// array of random last names
const lastNames = [
  'Abbott',
  'Acevedo',
  'Acosta',
  'Adams',
  'Adkins',
  'Aguilar',
  'Aguirre',
  'Albert',
  'Alexander',
  'Alford',
  'Allen',
  'Allison',
  'Alston',
  'Alvarado',
  'Alvarez',
  'Anderson',
  'Andrews',
  'Anthony',
  'Armstrong',
  'Arnold',
  'Ashley',
  'Atkins',
  'Atkinson',
  'Austin',
  'Avery',
  'Avila',
  'Ayala',
  'Ayers',
  'Bailey',
  'Baird',
  'Baker',
  'Baldwin',
  'Ball',
  'Ballard',
  'Banks',
  'Barber',
  'Barker',
  'Barlow',
  'Barnes',
  'Barnett',
  'Barr',
  'Barrera',
  'Barrett',
  'Barron',
  'Barry',
  'Bartlett',
  'Barton',
  'Bass',
  'Bates',
  'Battle',
  'Bauer',
  'Baxter',
  'Beach',
  'Bean',
  'Beard',
  'Beasley',
  'Beck',
  'Becker',
  'Bell',
  'Bender',
  'Benjamin',
  'Bennett',
  'Benson',
  'Bentley',
  'Benton',
  'Berg',
  'Berger',
  'Bernard',
  'Berry',
  'Best',
  'Bird',
  'Bishop',
  'Black',
];

// array of email domains
const emailDomains = [
  'yahoo.com',
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'comcast.net',
  'verizon.net',
  'msn.com',
  'live.com',
  'ymail.com',
  'att.net',
  'mac.com',
  'me.com',
  'cox.net',
  'sbcglobal.net',
  'bellsouth.net',
  'charter.net',
  'cox.com',
  'sbcglobal.com',
  'bellsouth.com',
  'charter.com',
  'cox.net',
];

// function to generate random email based on first and last name
const generateEmail = (first, last) =>
  `Email: ${first}${last}@${emailDomains[randomNumber(emailDomains.length)]}`;

// function to generate a random phone number
const generatePhoneNumber = () => {
  let phoneNumber = '';
  for (let i = 0; i < 10; i++) {
    phoneNumber += randomNumber(10);
  }
  return `Phone number: ${phoneNumber}`;
};

// function to generate a random birthdate
const generateBirthDate = () => {
  const year = randomNumber(99) + 1900;
  const month = randomNumber(12) + 1;
  const day = randomNumber(28) + 1;
  return `Date of birth: ${month}/${day}/${year}`;
};

// generate information when button is clicked
const generateInfo = () => {
  const firstName = randomWord(firstNames);
  const lastName = randomWord(lastNames);
  const email = generateEmail(firstName, lastName);
  const phoneNumber = generatePhoneNumber();
  const birthDate = generateBirthDate();
  const info = `First name: ${firstName}<br>Last name: ${lastName}<br>${email}<br>${phoneNumber}<br>${birthDate}`;
  return info;
};
// display information when button is clicked
const displayInfo = () => {
  const info = generateInfo();
  document.getElementById('information').innerHTML = info;
};
// add event listener to button
document.getElementById('generate').addEventListener('click', displayInfo);
