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


    
  });

 
