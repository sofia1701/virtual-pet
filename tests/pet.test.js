const Pet = require('../src/pet');

describe('create a new object with a set of properties', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Boris');
  });

    test('returns an object', () => {
      expect(new Pet('Boris')).toBeInstanceOf(Object);
    });

    test('sets the name property', () => {
      expect(pet.name).toEqual('Boris');
    });

    test('initial age of 0', () => {
      expect(pet.age).toEqual(0);
    });

    test('increments the age by 1', () => {
      pet.growUp();
      expect(pet.age).toEqual(1);
    });

    test('initial hunger of 0', () => {
      expect(pet.hunger).toEqual(0);
    });

    test('increments the hunger by 5', () => {
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    });

    test('increments the fitness by 4', () => {
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });

    test('increases fitness by to a maximum of 10', () => {
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    test('decreases hunger level by 3 to a minimum of 0', () => {
      pet.hunger = 2
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });

    test('check wheter Pet needs a walk', () => {
      pet.fitness = 2
      expect(pet.checkUp()).toBe('I need a walk!');
    });

    
    test('check wheter Pet is hungry', () => {
      pet.hunger = 6
      expect(pet.checkUp()).toBe('I am hungry!');
    });

    test('check wheter Pet needs a walk and is hungry', () => {
      pet.hunger = 6
      pet.fitness = 2
      expect(pet.checkUp()).toBe('I am hungry AND I need a walk!');
    });

    test('check wheter Pet needs a walk and is hungry', () => {
      pet.hunger = 2
      pet.fitness = 5
      expect(pet.checkUp()).toBe('I feel great!');
    });


    test('checks wheter pet is alive', () => {
      expect(pet.isAlive).toBe(true);
    });
    test('checks wheter pet is alive', () => {
      pet.age = 31;
      expect(pet.isAlive).toBe(false);
    });
    test('checks wheter pet is alive', () => {
      pet.hunger = 11;
      expect(pet.isAlive).toBe(false);
    });
    test('checks wheter pet is alive', () => {
      pet.fitness = 0;
      expect(pet.isAlive).toBe(false);
    });


    test('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });



    test('adopts a child', () => {
      let parent, child;
      parent = new Pet('Boris');
      child = new Pet('Amelia');
      expect(parent.adoptChild(child)).toEqual([ { name: 'Amelia', age: 0, hunger: 0, fitness: 10 } ]);
      expect(parent.children[0].name).toEqual('Amelia');
    });

  });

 
