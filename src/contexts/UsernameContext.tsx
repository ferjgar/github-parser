import React, { useState } from 'react';

// adding ? because, as this is done, otherwise mocking everything in other calls would be time consuming
export interface GitHubUser {
  avatar_url?: string;
  name?: string;
  login?: string;
  html_url?: string;
}

interface GitHubOrganization {
  avatar_url: string;
  login: string;
  url: string;
}

export interface GitHubRepo {
  full_name?: string;
  html_url?: string;
  description?: string;
}

export interface GitHubUserData {
  user: GitHubUser;
  orgs: GitHubOrganization[];
}

export interface GitHubRepoData {
  repos: GitHubRepo[];
}

export interface UsernameContextProps {
  // probably this should be "username?", but something's failing...
  username: string;
  userData: GitHubUserData;
  userRepos: GitHubRepoData;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setUserData: React.Dispatch<React.SetStateAction<GitHubUserData>>;
  setUserRepos: React.Dispatch<React.SetStateAction<GitHubRepoData>>;
}

export const UsernameContext = React.createContext({
  username: '',
  userData: {} as GitHubUserData,
  userRepos: {} as GitHubRepoData,
  setUsername: (username: string) => {},
  setUserData: (userData: GitHubUserData) => {},
  setUserRepos: (userRepos: GitHubRepoData) => {},
});

export const UsernameContextProvider = (props: React.HTMLProps<HTMLDivElement>) => {
  const [username, setUsername ] = useState();
  const [userData, setUserData ] = useState();
  const [userRepos, setUserRepos ] = useState();

  return (
    <UsernameContext.Provider value={{userData, username, userRepos, setUserData, setUserRepos, setUsername}}>
      {props.children}
    </UsernameContext.Provider>
  );
};