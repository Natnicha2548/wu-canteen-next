import { hashSync, compareSync } from 'bcryptjs';

// --- Existing User (Sombat / Mallika / Original Password) ---
const oldHash = hashSync('mypassword', 10);
console.log('--- OLD USER ---');
console.log('Old Hash:', oldHash);
console.log('Correct password matches:', compareSync('mypassword', oldHash));

console.log('-----------------------------------');

// --- New User (Add your new password here) ---
const newPassword = 'Natnicha2569'; // <-- Change this to your desired password
const newHash = hashSync(newPassword, 10);

console.log('--- NEW USER ---');
console.log('New Password:', newPassword);
console.log('New Hash (Copy this to Supabase):', newHash);
console.log('Password matches check:', compareSync(newPassword, newHash));