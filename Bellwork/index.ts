// 📚 PART 1: Vocabulary & Recall
// Instructions: Define the following TypeScript terms in your own words and give an example of each.
// What is an enum in TypeScript?
// ➤ Example: Create an enum called Weather with values for Sunny, Rainy, and Cloudy.

    //ANSWER: An enum is a special "class" that represents a group of constants (unchangeable variables).

    enum Directions {
        SOUTH = 'SOUTH',
        NORTH = 'NORTH',
        WEST = 'WEST',
        EAST = 'EAST',
    }

// What is an interface in TypeScript?
// ➤ Example: Create an interface called Car with properties make, model, and year.

    //WHAT IS AN ALIAS: Type Aliases allow defining types with a custom name 

    //ANSWER: In TypeScript, an interface is a way to define a contract for the structure of an object. It specifies the names, types, and optionality of properties and methods that an object must have. Interfaces are used to ensure type safety and provide a way to enforce a specific shape for objects. They do not include implementation details, only declarations.

    interface Car {
        make: string;
        model: string;
        year: number;
    }

// What is a function in TypeScript?
// ➤ Example: Create a function called greet that takes a name (string) and returns a greeting message.

    //ANSWER: In TypeScript, a function is a block of code designed to perform a specific task. It can take parameters, perform operations, and optionally return a value. TypeScript allows you to specify types for the parameters and the return value, which helps catch errors early and improves code readability.

    function greet(name: string): string {
        return `Hello, ${name}!`;
    }

// 🛠️ PART 2: Code Application 
// Instructions: Complete the following coding tasks. Each one asks you to apply your knowledge of TypeScript features in a short, functional script.

// Enums:
// Create an enum called UserRole with the following values: Admin, Editor, and Viewer.
// Then, create a variable currentRole of type UserRole and assign it the value Editor.
// ➤ Print out the value of currentRole.

enum UserRole {
    Admin = 'ADMIN',
    Editor = 'EDITOR',
    Viewer = 'VIEWER',
}

const currentRole: UserRole = UserRole.Admin;

console.log(currentRole);

// Interfaces:
// Define an interface called Student that includes:

// name (string)

// gradeLevel (number)

// isEnrolled (boolean)

// Then, create a student object using that interface and log it to the console.

interface Student {
    name: string;
    gradeLevel: number;
    isEnrolled: boolean;
}

const student: Student = {
    name: "Emily Johnson",
    gradeLevel: 10,
    isEnrolled: true
};

console.log(student);

// Functions:
// Write a function named calculateTotal that:

// Accepts two parameters: price (number) and taxRate (number)

// Returns the total cost after tax.

// ➤ Example input: calculateTotal(100, 0.08) should return 108.

function calculateTotal(price: number, taxRate: number): number {
    return price + (price * taxRate);
}

const total = calculateTotal(100, 0.08);
console.log(total);