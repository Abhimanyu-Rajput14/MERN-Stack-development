// Start bcrypt usage
const bcrypt = require('bcrypt');

// Password hashing
const saltRounds = 10;
const plainPassword = 'user_password';
bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);

  // Password comparison (inside the hash callback)
  bcrypt.compare(plainPassword, hash, (err, result) => {
    if (err) throw err;
    console.log("Password matches:", result);  // result will be true if passwords match
  });
});
// End bcrypt usage
