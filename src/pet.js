const MINIMUM_AGE = 0;
const MAXIMUM_AGE = 30;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;
const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;

class Pet {
    constructor(name) {
        this.name = name;
        this.age = MINIMUM_AGE;
        this.hunger = MINIMUM_HUNGER;
        this.fitness = MAXIMUM_FITNESS;
    }

    get isAlive() {
        return this.age < MAXIMUM_AGE && 
               this.hunger < MAXIMUM_HUNGER && 
               this.fitness > MINIMUM_FITNESS;
    }

    lifeCheck() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
      }

    growUp() {
        this.lifeCheck();

        this.age += 1
        this.hunger += 5;
        this.fitness -= 3; 
    }

    walk() {
        this.lifeCheck();

        if((this.fitness + 4) <= MAXIMUM_FITNESS){
            this.fitness += 4;
        }else{
            this.fitness = MAXIMUM_FITNESS;     
        }  
    }

    feed() {
        this.lifeCheck();

        if((this.hunger - 3 >= MINIMUM_HUNGER)) {
            this.hunger -= 3;
        }else{
            this.hunger = MINIMUM_HUNGER;
        }   
    }

    checkUp() {
        this.lifeCheck();

        if(this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk!';
        }else if(this.fitness <= 3) {
            return 'I need a walk!';
        }else if(this.hunger >= 5) {
            return 'I am hungry!';
        }
        return 'I feel great!';   
    }

    adoptChild(child) {
        this.lifeCheck();

        return this.children = [child];
    }
};

module.exports = Pet;