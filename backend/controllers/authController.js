import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const response = await registerUser(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const response = await loginUser(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};
