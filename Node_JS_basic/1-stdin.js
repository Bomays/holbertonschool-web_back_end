// script making a prog displaying a message.

console.log("Welcome to Holberton School, what is your name?");

process.stdin.on("readable", function () {
  const name = process.stdin.read();

  if (name !== null) {
    console.log(`Your name is: ${name.toString().trim()}`);
    //trim to ensure removing newline
  }
});

process.stdin.on("end", function () {
  console.log("This important software is now closing");
});
