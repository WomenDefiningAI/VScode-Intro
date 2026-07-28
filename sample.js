// A sample JavaScript file for practicing in VS Code

function greet(name) {
  return `Hello, ${name}! Welcome to Build TogetHER.`;
}

function addNumbers(a, b) {
  return a + b;
}

const attendees = ["Patty", "Sam", "Jordan", "Alex"];

function listAttendees(list) {
  list.forEach((person, index) => {
    console.log(`${index + 1}. ${person}`);
  });
}

console.log(greet("Everyone"));
console.log("2 + 3 =", addNumbers(2, 3));
listAttendees(attendees);
