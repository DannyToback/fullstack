/*

  In this assignmenmt you are given a list of student names. The challenge
  is to pair students by how similar their names are in edit distance.
  The pairing algorithm  pseudocode is:

  sort the students by last name (A to Z)
  while there is > 1 unpaired student
    X = the first unpaired student
    if X's first name begins with a vowel
      compute the Hamming distance to all other unpaired students

    if X's first name begins with a consonant
      compute the Levenshtein distance to all other unpaired students

    pair X with the most similar name, Y (ie shortest edit distance). If there
    is a tie in edit distance, sort the results by last name (A...Z) and
    take the first.

    remove X and Y from the list of unpaired students.


  to help you, you are provided with the scripts:
    levenshtein.js and hamming.js

  **THERE IS CURRENTLY A NAMING CONFLICT, solve this by wrapping each
    provided distance funciton the JavaScirpt namespace-like construct of your choice.

    YOU CANNOT SIMPLY RENAME the distance functions!
    YOU CANNOT MODIFY THE distance functions IN ANY WAY other than
    to implement your namespace construct!

    I suggest putting each in it's own unique object so in your main
    code you can write:
     hamming.distance(a,b)
      or
     levenshtein.distance(a,b)
 */

var names = ["Jordan Voves", "Keller Chambers", "Stefano Cobelli",
"Jenna Slusar", "Jason Corriveau", "Cole Whitley", "Dylan Zucker",
"Danny Toback", "Eric Marshall", "Allan La", "Natalie Altman",
"Evan Harrington", "Jack Napor", "Jingya Wu", "Christian Ouellette",
"Junjie Jiang", "Morgan Muller", "Sarah Xu", "Aleksandar Antonov",
"Parker Watson", "Haipu Sun", "Ryan Pencak", "Dan Kershner",
"John Venditti", "Jacob Mendelowitz", "Dunni Adenuga", "Jeff Lee",
"Uttam Kumaran", "Jack Hall-Tipping"];


var pairs = [];
//
// //Classes
// class Hamming {
//   constructor(a, b){
//     this.a = a;
//     this.b = b;
//   }
//   getDistance(){
//     return distance(this.a,this.b);
//   };
// };

// class Levenshtein{
//   constructor(a, b){
//     this.a = a;
//     this.b = b;
//   }
//   getDistance(){
//     return distance(this.a,this.b);
//   };
// };

/* STEP 1: SORT NAMES by LAST NAME! */
function compare(a,b){
  var splitArrA = a.split(" ");
  var splitArrB = b.split(" ");
  var lastA = splitArrA[splitArrA.length-1];
  var lastB = splitArrB[splitArrB.length-1];
  if (lastA > lastB){
    return 1;
  }else if (lastA < lastB){
    return -1;
  }else{
    return 0;
  }
}
names = names.sort(compare);
console.log(names);

//Psuedocode in action
var lev = new Levenshtein();
var ham = new Hamming();

while (names.length > 1){
  var x = names[0];
  var friendsOfX = [];
  //Find smallest values
  if (x[0].match(/[AEIOUaeiou]/)){
    for (j = 0; j < names.length; j ++){
      friendsOfX.push(ham.distance(x,names[j]))

    }
    //Computer Hamming to all other unpaired students
  }else{
    for (k = 0; k < names.length; k ++){
      friendsOfX.push(lev.distance(x,names[k]));
    }
    //Computer Levenshtein to all othe unpaired students
  }


  //Find Pair
  var bestFit = friendsOfX[1];
  var bestFitIndex = 1;
  for (i = 1; i <friendsOfX.length; i ++){
    if (friendsOfX[i] < bestFit){
      bestFitIndex = i;
      bestFit = friendsOfX[i];
    }
  }

  //Remove pair from list
  // console.log("Removing:")
  var winningPair = [x, names[bestFitIndex], bestFit];
  // console.log(winningPair);
  names.splice(bestFitIndex,1);
  names.splice(0,1);

  //Push to pairs array
  pairs.push(winningPair);
}

for (i = 0; i < pairs.length; i ++) { console.log(pairs[i]);}


/* WHILE > 1 students are UNPAIRED
     take 1st student, compute distance to all others,
      pair with lowest score.
      */
