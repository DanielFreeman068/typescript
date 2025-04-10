//Enums declared
enum Role {
    Admin = "Admin",
    Moderator = "Moderator",
    Member = "Member",
    Guest = "Guest"
}

enum Status {
    Active = "Active",
    Inactive = "Inactive",
    Suspend = "Suspend",
    Pending = "Pending"
}

//Kinda likee a schema
//Interface setup for User
interface User {
    id: number;
    username: string;
    email: string;
    role: Role;
    status: Status;
}

//Function to check role and status of user to return true or false
function canAccessAdminPanel(user: User): boolean {
    return ((user.role === Role.Admin || user.role === Role.Moderator) && user.status === Status.Active);
}

//Checks the user status for inactive and returns a new object with all inactive users as suspended
function suspendInactiveUsers(users: User[]): User[] {
    return users.map(user => {
        if (user.status === Status.Inactive) {
            return { ...user, status: Status.Suspend };
        }
        return user;
    });
}

//Declaration of users by referencing the User interfacee
const users: User[] = [
    { id: 1, username: "alice", email: "alice@example.com", role: Role.Admin, status: Status.Active },
    { id: 2, username: "bob", email: "bob@example.com", role: Role.Moderator, status: Status.Inactive },
    { id: 3, username: "carol", email: "carol@example.com", role: Role.Member, status: Status.Pending },
    { id: 4, username: "dave", email: "dave@example.com", role: Role.Guest, status: Status.Active }
];

// Check admin access for each user
users.forEach(user => {
    console.log(`Can ${user.username} access admin panel?`, canAccessAdminPanel(user));
});

// Apply suspension to inactive users and log the result
const updatedUsers = suspendInactiveUsers(users);
console.log("Updated users after suspension:");
console.log(updatedUsers);

// DOK Extension Questions
// QUESTION: Why are enums more effective here than strings or numbers?
// ANSWER: Enums provide a clear, centralized set of allowed values. This improves type safety, avoids typos (e.g., "Admin" vs "admin"), and makes code easier to maintain and autocomplete-friendly in editors. Using raw strings or numbers is prone to bugs and less descriptive.

// QUESTION: How does using readonly or immutability principles protect your data?
// ANSWER: Using readonly or returning new objects (like in suspendInactiveUsers) prevents accidental modifications to the original data. This ensures predictable behavior, especially in larger apps or when working with shared state, and aligns with functional programming best practices.

// QUESTION: How would you scale this system to allow dynamic roles loaded from a database?
// ANSWER: You’d replace the static enum Role with a dynamic system — e.g., fetch role definitions from a database, store them in a configuration object or class, and validate role strings at runtime using type guards or schemas (like with zod or Joi). You could also map roles to permissions dynamically.