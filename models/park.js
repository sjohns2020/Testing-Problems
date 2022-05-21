const Park = function (name, ticketPrice, dinosaurs = []) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}
  
  module.exports = Park;

  Park.prototype.numberOfDinosaurs = function () {
      return this.dinosaurs.length
  }

  Park.prototype.addDinosaur = function (dinosaur) {
      this.dinosaurs.push(dinosaur)
  }

  Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(indexOfDinosaur, 1)
  }

//   just giving me back the dinosuar with index 0
  Park.prototype.dinosaurWithMostVisitors = function () {
    const mostPopularDino = this.dinosaurs[0]
    for (dinosaur of this.dinosaurs) {
        if (this.dinosaurs.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay) {
            mostPopularDino = this.dinosaur
        }
        }
    return mostPopularDino
    }

    // show a list of dinosaurs by sepcies
    Park.prototype.searchBySpecies = function(species) {
        const matchingSpecies = [];
        for (dinosaur of this.dinosaurs) { 
            if (dinosaur.species === species) {
                matchingSpecies.push(dinosaur);
            }
        }
        return matchingSpecies
    }
// adding total visitors
    Park.prototype.totalVisitors = function() {
        let total = 0;
        for (dinosaur of this.dinosaurs) { 
            total += dinosaur.guestsAttractedPerDay;
            }
            return total
            }

    Park.prototype.totalVisitorsPerYear = function() {
        let total = 0;
        for (dinosaur of this.dinosaurs) { 
            total += (dinosaur.guestsAttractedPerDay * 365);
            }
            return total
            }

    Park.prototype.totalAnnualRevenue = function() {
        let result = 0;
        let total = 0
        for (dinosaur of this.dinosaurs) { 
            total += (dinosaur.guestsAttractedPerDay * 365);
            result = total * this.ticketPrice
            }
            return result
            }
    

    Park.prototype.removeDinosaurWithSpecies = function(species) {
        let matchingSpecies = []; 
        let newList = []
        for (dinosaur of this.dinosaurs) { 
            if (dinosaur.species === species) {
                matchingSpecies.push(dinosaur);
                newList = this.dinosaurs.splice(0, matchingSpecies.length)
                }
            }
            return newList
        }

    Park.prototype.typesAndNumberOfDiets = function() {
        const counts = {};
        const typesOfDiet = [];
        for (dinosaur of this.dinosaurs) {
        typesOfDiet.push(dinosaur.diet);
        typesOfDiet.forEach = function (x) { 
            counts[x] = (counts[x] || 0) + 1; };
        }
        return counts
    }
        