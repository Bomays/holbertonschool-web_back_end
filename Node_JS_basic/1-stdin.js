// script making a prog displaying a message.

console.log("Welcome to Holberton School, what is your name?");

console.on("readable", function() {
  const name = console.read();

  if (name !== null) {
    console.log(`Your name is: ${name}`);
  }
});

process.stdin.on("end", function() {
  console.log("This important software is now closing");
});
