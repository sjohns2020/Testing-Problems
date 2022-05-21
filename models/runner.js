const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

const park = new Park('Alton Towers', 25, []);
const dino1 = new Dinosaur("Dusty", "carnivore", 550)
const dino2 = new Dinosaur("Redneck", "vegan", 19)
const dino3 = new Dinosaur("Poolie", "vegan", 130)

park.addDinosaur(dino1)
park.addDinosaur(dino2)
park.addDinosaur(dino3)
// park.addDinosaur{species; 'Poolie', diet; 'omnivore', guestsAttractedPerDay; 130}
// park.addDinosaur("Bagaraatan", "herbivore", 100)
// park.addDinosaur("Callovosaurus", "omnivore", 33)

// // console.log(park.dinosaurWithMostVisitors());

// // const species = "Austroposeidon"
// console.log(park.searchBySpecies("Austroposeidon"));
console.log(park.typesAndNumberOfDiets());

// const counts = {};
// const sampleArray = ['a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)