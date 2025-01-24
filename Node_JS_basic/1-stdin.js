// script making a prog displaying a message.

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("readable", function () {
  const name = process.stdin.read();

  if (name !== null) {
    process.stdout.write(`Your name is: ${name.toString().trim()}\n`);
    //trim to ensure removing newline
  }
});

process.stdin.on("end", function () {
  process.stdout.write("This important software is now closing\n");
});
