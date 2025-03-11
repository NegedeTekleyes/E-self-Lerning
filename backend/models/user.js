import { poolPromise, sql } from "../config/db.js";

export const findUserByEmail = async (email) => {
  const pool = await poolPromise;
  const result = await pool
  .request()
  .input("email", sql.NVarChar, email)
  .query("SELECT * FROM dbo.[User] WHERE email = @email");

  return result.recordset[0];
};

export const createUser = async (email, phone, hashedPassword, role) => {
  const pool = await poolPromise;
  await pool
    .request()
    .input("email", sql.NVarChar, email)
    .input("phone", sql.NVarChar, phone)
    .input("password", sql.NVarChar, hashedPassword)
    .input("role", sql.NVarChar, role)
    .query(
      "INSERT INTO [User] (id, email, phone, password, role, createdAt) VALUES (NEWID(), @email, @phone, @password, @role, GETDATE())"
    );
};
