import axios from "axios";

export const useGetUser = async (user?: string) => {
  const ghUser = user ? user : "Josh-D18";
  const response = await axios.get(`https://api.github.com/users/${ghUser}`);
  return response;
};
