import axios from "axios";
import {GitHubUserData, GitHubRepoData} from '../contexts/UsernameContext';
// Documentation is at https://developer.github.com/v3/
const BASE_URL = "https://api.github.com";

// TODO: probably send a "limit" param
export const getRepos = async (username: string): Promise<GitHubRepoData> => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios
    .get(url)
    .then(response => ({
      repos: response.data
    }))
    .catch((error) => {
      console.log('PROBABLY 404', error);
      return {repos: []};
    });
}

export const getUserData = async (username: string): Promise<GitHubUserData> => {
  return axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/orgs`)
    ])
    .then(([user, orgs]) => ({
      user: user.data,
      orgs: orgs.data
    }));
}

