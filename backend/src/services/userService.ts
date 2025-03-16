import { auth } from '../../auth';
import { PrismaClient } from '@prisma/client';// Prisma client instance
import { hashPassword, comparePassword } from '../../utils/hashUtil'; // Utility functions for password hashing

export class UserService {
  static async registerUser(data: { email: string; password: string; full_name: string; phone_number: string; user_type: string }) {
    const { email, password, full_name, phone_number, user_type } = data;

    // Hash the password before saving it to the database
    const hashedPassword = await hashPassword(password);

    // Save the user to the database via Prisma
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        full_name,
        phone_number,
        user_type: user_type.toUpperCase(), // Convert to enum value
      },
    });

    // Return the created user
    return newUser;
  }

  static async loginUser(email: string, password: string) {
    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error('User not found');

    // Compare passwords
    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) throw new Error('Invalid credentials');

    return user;
  }

  static async getUserProfile(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        courses: true, // Include related courses
        enrollments: true, // Include enrollments
        payments: true, // Include payments
        certifications: true, // Include certifications
      },
    });

    if (!user) throw new Error('User not found');

    return user;
  }
}
