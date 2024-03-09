let guests: string[] = ["Abdullah" , "Abdul Rehman" , "Usman" , "Aqsa Appi" , "Rida"];
console.log("Great news! I found a bigger dinner table!");

// Ading more guests
guests.unshift("Amina Api");
guests.splice(guests.length / 2,0, "Uzair Bhai");
guests.push("Umair Bhai");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

console.log("Unfortunetly, I ca only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
console.log(`Sorry, ${removedGuest}, Ican't invite you to dinner.`);
}

guests.forEach(guest => {console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list