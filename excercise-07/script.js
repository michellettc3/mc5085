let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let adverb = ['simply', 'swiftly', 'deliciously', 'oddly', 'happily', 'pensively','bravely'];
let noun = ['a butterfly', 'a bear', 'a chocolate bar', 'the clown', 'my crush', 'the leftovers in the fridge', 'swimming in the ocean', 'the clouds', 'my dreams', 'your dreams', 'that happy day'];
let verb = ['write', 'sing', 'dance', 'dream', 'cry', 'draw', 'paint', 'blog']

const RandomMonth = Math.floor(Math.random() * month.length);
const RandomAdverb = Math.floor(Math.random() * adverb.length);
const RandomNoun = Math.floor(Math.random() * noun.length);
const RandomVerb = Math.floor(Math.random() * verb.length);

document.write(`In the month of ${RandomMonth, month[RandomMonth]}, I dreamt ${RandomNoun, noun[RandomNoun]} about ${RandomAdverb, adverb[RandomAdverb]} and decided to ${RandomVerb, verb[RandomVerb]} about it.`)
