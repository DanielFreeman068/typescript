// contact.ts

// 1. contact interface
interface Contact {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    isFavorite: boolean;
}

// 2. contact llist
let contacts: Contact[] = [];

// generate unique ID
let nextId = 1;

// 3. add new contact
function addContact(name: string, email: string, phoneNumber: string, isFavorite: boolean): Contact {
    const newContact: Contact = {
    id: nextId++,
    name,
    email,
    phoneNumber,
    isFavorite
    };
    contacts.push(newContact);
    return newContact;
}

// 4. delete contact
function deleteContact(id: number): void {
    const initialLength = contacts.length;
    contacts = contacts.filter(contact => contact.id !== id);

    if (contacts.length < initialLength) {
    console.log(`🗑️ Deleted contact with ID ${id}.`);
    } else {
    console.log(`❌ No contact found with ID ${id}.`);
    }
}

// 5. display contacts
function displayContacts(): void {
    console.log("\n Contact List:");
    if (contacts.length === 0) {
    console.log("No contacts found.");
    return;
    }

    contacts.forEach(contact => {
    const star = contact.isFavorite ? "⭐" : "";
    console.log(
        `ID: ${contact.id} | Name: ${contact.name} ${star}\n   Email: ${contact.email} | Phone Number: ${contact.phoneNumber}`
    );
    });
    console.log("");
}

// search contacts
function searchContacts(query: string): void {
    const lowerQuery = query.toLowerCase();
    const results = contacts.filter(
    contact =>
        contact.name.toLowerCase().includes(lowerQuery) || contact.email.toLowerCase().includes(lowerQuery)
    );

    console.log(`\n Search results for "${query}":`);
    if (results.length === 0) {
    console.log("No matching contacts found.");
    } else {
    results.forEach(contact => {
        const star = contact.isFavorite ? "⭐" : "";
        console.log(
        `ID: ${contact.id} | Name: ${contact.name} ${star}\n   Email: ${contact.email} | Phone Number: ${contact.phoneNumber}`
        );
    });
    }
    console.log("");
}

addContact("Alice Johnson", "alice@example.com", "123-456-7890", true);
addContact("Bob Smith", "bob@example.com", "987-654-3210", false);
addContact("Carol White", "carol@example.com", "555-123-4567", true);

displayContacts();

deleteContact(3);

displayContacts();

searchContacts("alice");
searchContacts("bob");
searchContacts("example.com");
