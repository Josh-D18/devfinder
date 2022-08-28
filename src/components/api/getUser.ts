import { useState, useEffect } from "react";
import axios from "axios";

export const getUserApi = (user?: string) => {
  const [githubUser, getGithibUser] = useState({});

  const useGetUser = async () => {
    const ghUser = user ? user : "Josh-D18";
    const response = await axios.get(`https://api.github.com/users/${ghUser}`);
    getGithibUser(response);
  };

  useEffect(() => {
    useGetUser();
  }, []);

  return githubUser;
};
