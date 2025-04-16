// character stats interface
interface CharacterStats {
    strength: number;
    agility: number;
    intelligence: number;
}

// abstract base class
abstract class GameCharacter {
    constructor(level: number, name: string, health: number, id: number) {
        this.level = level;
        this.name = name;
        this._health = health;
        this.id = id;
    }

    public readonly id: number;
    public name: string;
    protected level: number;
    private _health: number;
    static maxLevel: number = 100;
}




























// // concrete class implementing interface
// class Warrior extends GameCharacter implements CharacterStats {
//     constructor(
//         level: number,
//         name: string,
//         health: number,
//         id: number,
//         public strength: number,
//         public agility: number,
//         public intelligence: number
//     ) {
//         super(level, name, health, id);
//     }

//     // You can also add methods like attack(), levelUp(), etc.
// }
