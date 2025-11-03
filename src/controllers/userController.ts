import { Request, Response } from "express";
//user data
let users = [
  { id: 1, name: "Rupam Bharti", email: "rupam@example.com" },
  { id: 2, name: "Anju Kumari", email: "anju@example.com" },
];
// get all users
export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};
// get user by ID
export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};
// create new user
export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};
// update user
export const updateUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = name || user.name;
  user.email = email || user.email;
  res.json(user);
};
// delete user
export const deleteUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.json({ message: "User deleted" });
};
