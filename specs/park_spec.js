const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Alton Towers', 25, []);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Alton Towers');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;;
    assert.deepStrictEqual(actual, []);
  });
    
  describe('With Dinosuars', function() {

    beforeEach(function () {
      dino1 = new Dinosaur("Austroposeidon", "carnivore", 550)
      dino2 = new Dinosaur("Bagaraatan", "vegan", 19)
      dino3 = new Dinosaur("Callovosaurus", "vegan", 130)
    })

    it('should be able to add a dinosaur to its collection', function () {
      park.addDinosaur(dino1)
      park.addDinosaur(dino2)
      const actual = park.numberOfDinosaurs();
      assert.strictEqual(actual, 2)
    });


    it('should be able to remove a dinosaur from its collection', function () {
      park.addDinosaur(dino1)
      park.addDinosaur(dino2)
      park.addDinosaur(dino3)
      park.removeDinosaur(dino3)
      const actual = park.numberOfDinosaurs();
      assert.strictEqual(actual, 2)
    });

    //   just giving me back the dinosuar with index 0
    it('should be able to find the dinosaur that attracts the most visitors', function () {
      park.addDinosaur(dino1)
      park.addDinosaur(dino2)
      park.addDinosaur(dino3)
      const actual = park.dinosaurWithMostVisitors()
      assert.strictEqual(actual, dino1)
    });


    it('should be able to find all dinosaurs of a particular species', function() {
      park.addDinosaur(dino1)
      park.addDinosaur(dino2)
      park.addDinosaur(dino3)
      const actual = park.searchBySpecies("Bagaraatan")
      const expected = [dino2]
      assert.deepStrictEqual(actual, expected)
    })

    it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = park.totalVisitors()
    assert.deepStrictEqual(actual, 699)

    })

    it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = park.totalVisitorsPerYear()
    assert.deepStrictEqual(actual, 255135)
    })

    it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = park.totalAnnualRevenue()
    assert.deepStrictEqual(actual, 6378375)
    })

    it('should be able to remove all dinosaurs of a particular species', function() {
      park.addDinosaur(dino1)
      park.addDinosaur(dino2)
      park.addDinosaur(dino3)
      park.removeDinosaurWithSpecies("Bagaraatan")
      const actual = park.numberOfDinosaurs()
      assert.deepStrictEqual(actual, 2)
      })

      it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function() {
        park.addDinosaur(dino1)
        park.addDinosaur(dino2)
        park.addDinosaur(dino3)
        const actual = park.typesAndNumberOfDiets()
        const expected = {"carnivore": 1, "vegan": 2}
        assert.strictEqual(actual, expected)
        })
      })
  });
