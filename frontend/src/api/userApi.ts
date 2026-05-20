import type { User } from "../features/users/userTypes";
import api from "./axios";

export const getUsersApi = async () => {
  const response = await api.get("/user");
  return await response.data;
};

export const getUsersByIdApi = async (id: string) => {
  const response = await api.get(`/user/${id}`);
  return await response.data;
};

export const createUserApi = async (userData: Partial<User>) => {
  const response = await api.post("/user", userData);
  return await response.data;
};

export const updateUserApi = async (id: string, userData: Partial<User>) => {
  const response = await api.put(`/user/${id}`, userData);
  return await response.data;
};

export const deleteUserApi = async (id: string) => {
  const response = await api.delete(`/user/${id}`);
  return await response.data;
};
