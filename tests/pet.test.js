const Pet = require('../src/pet');

let pet;

  beforeEach(() => {
    pet = new Pet('Boris');
  });

describe('constructor function', () => {
  
    test('returns an object', () => {
      expect(pet).toBeInstanceOf(Object);
    });

    test('sets the name property', () => {
      expect(pet.name).toEqual('Boris');
    });

    test('initial age of 0', () => {
      expect(pet.age).toEqual(0);
    });

    test('initial hunger of 0', () => {
      expect(pet.hunger).toEqual(0);
    });

}),

describe('grow Up', () => {

    test('increments the age by 1', () => {
      pet.growUp();
      expect(pet.age).toEqual(1);
    });

    test('increments the hunger by 5', () => {
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    });
}),

describe('walk', () => {  

    test('increments the fitness by 4', () => {
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });

    test('increases fitness to a maximum of 10', () => {
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
}),

describe('feed', () => {    

    test('decreases hunger level by 3', () => {
      pet.hunger = 9
      pet.feed();
      expect(pet.hunger).toEqual(6);
    });

    test('decreases hunger level by 3 to a minimum of 0', () => {
      pet.hunger = 2
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
}),

describe('check up', () => {
  
    test('returns "I need a walk!" when fitness level is below or equal to 3', () => {
      pet.fitness = 2
      expect(pet.checkUp()).toBe('I need a walk!');
    });

    test('returns "I am hungry!" when hunger level is above or equal to 5', () => {
      pet.hunger = 6
      expect(pet.checkUp()).toBe('I am hungry!');
    });

    test('returns "I am hungry AND I need a walk!" if fitness level is below or equal to 3 & hunger level is above or equal to 5', () => {
      pet.hunger = 5
      pet.fitness = 3
      expect(pet.checkUp()).toBe('I am hungry AND I need a walk!');
    });

    test('returns "I feel great!" if fitness level is above 5 & hunger level is below 3 ', () => {
      pet.hunger = 2
      pet.fitness = 5
      expect(pet.checkUp()).toBe('I feel great!');
    });

}),

describe('isAlive', () => {

    test('returns true if age is below 30, hunger is below 10 and fitness is above 0', () => {
      expect(pet.isAlive).toBe(true);
    });
    test('returns false if age is above 30', () => {
      pet.age = 31;
      expect(pet.isAlive).toBe(false);
    });
    test('returns false if hunger is above 10', () => {
      pet.hunger = 11;
      expect(pet.isAlive).toBe(false);
    });
    test('returns false if fitness is 0', () => {
      pet.fitness = 0;
      expect(pet.isAlive).toBe(false);
    });

}),

describe('throws an error', () => {

    test('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
}),

describe('adopts a child', () => {

  let child;
  child = new Pet('Amelia');

    test('returns adopted child', () => {
      expect(pet.adoptChild(child)).toEqual([ { name: 'Amelia', age: 0, hunger: 0, fitness: 10 } ]);
      expect(pet.children[0].name).toEqual('Amelia');
    });

    test('fails adoption if pet is dead', () => {
      pet.age = 30;
      expect(() => pet.adoptChild(child)).toThrow('Your pet is no longer alive :(');
    });

});


