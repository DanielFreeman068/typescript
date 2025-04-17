// interface for character stats
interface CharacterStats {
    strength: number;
    agility: number;
    intelligence: number;
}

// abstract class gameCharacter
abstract class GameCharacter implements CharacterStats {
    public name: string;
    protected level: number;
    private _health: number;
    readonly id: number;

    strength!: number;
    agility!: number;
    intelligence!: number;

    static maxLevel: number = 100;

    constructor(name: string, level: number, health: number, id: number) {
        this.name = name;
        this.level = level;
        this._health = health;
        this.id = id;
    }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        if (value < 0) {
            this._health = 0;
        } else if (value > 100) {
            this._health = 100;
        } else {
            this._health = value;
        }
    }

    abstract attack(): string;

    levelUp(): void {
    if (this.level < GameCharacter.maxLevel) {
        this.level++;
        console.log(`${this.name} leveled up to level ${this.level}!`);
    } else {
        console.log(`${this.name} is already at max level.`);
    }
    }

    abstract getStats(): CharacterStats;
}

// warrior subclass
class Warrior extends GameCharacter {
    constructor(name: string, level: number, health: number, id: number) {
    super(name, level, health, id);
    this.strength = 80;
    this.agility = 40;
    this.intelligence = 20;
    }

    attack(): string {
    return `${this.name} swings a sword with strength ${this.strength}!`;
    }

    getStats(): CharacterStats {
    return {
        strength: this.strength,
        agility: this.agility,
        intelligence: this.intelligence,
    };
    }
}

// mage subclass
class Mage extends GameCharacter {
    constructor(name: string, level: number, health: number, id: number) {
    super(name, level, health, id);
    this.strength = 20;
    this.agility = 30;
    this.intelligence = 90;
    }

    attack(): string {
    return `${this.name} casts a fireball with intelligence ${this.intelligence}!`;
    }

    getStats(): CharacterStats {
    return {
        strength: this.strength,
        agility: this.agility,
        intelligence: this.intelligence,
    };
    }
}

// warrior
const warrior = new Warrior("Alana", 1, 75, 1001);
console.log(warrior.attack());
console.log("Stats:", warrior.getStats());
console.log("Current Health:", warrior.health);
warrior.health = 110;
console.log("Updated Health:", warrior.health);
warrior.levelUp();
console.log("Max Level:", GameCharacter.maxLevel);

// error on accessing private or protected propertiess
// console.log(warrior._health);
// console.log(warrior.level);

// mage
const mage = new Mage("Sabrina", 3, 60, 2002);
console.log(mage.attack());
console.log("Stats:", mage.getStats());
console.log("Mage Health:", mage.health);
