var guests = ["Abdullah", "Abdul Rehman", "Usman", "Aqsa Appi", "Rida"];
console.log("Great news! I found a bigger dinner table!");
// Ading more guests
guests.unshift("Amina Api");
guests.splice(guests.length / 2, 0, "Uzair Bhai");
guests.push("Umair Bhai");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
console.log("Unfortunetly, I ca only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", Ican't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
