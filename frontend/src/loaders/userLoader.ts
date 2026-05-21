import { getUsersApi } from "../api/userApi";

export const userLoader = async () => {
  try {
    const data = await getUsersApi();
    return data.users;
  } catch (error) {
    console.log("Failed to fetch user:", error);
    return [];
  }
};