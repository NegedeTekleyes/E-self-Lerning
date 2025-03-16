import bcrypt from 'bcryptjs';

// Function to hash passwords before storing in the database
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Function to compare the password entered by the user during login
export const comparePassword = async (enteredPassword: string, storedPassword: string) => {
  return bcrypt.compare(enteredPassword, storedPassword);
};
