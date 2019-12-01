# GitHub Parser with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local

You need `node` installed locally (I didn't check compatibility with old versions).

Run `yarn start` on the root folder of this repo and it will be available in your browser in [http://localhost:3000](http://localhost:3000).

## Remote

It's live in [https://hopeful-swanson-304a5a.netlify.com](https://hopeful-swanson-304a5a.netlify.com).

## Test

Run `yarn test` on the root folder.

## Known issues

- There's something wrong with the state, hitting reload will "reset" it, probably is related with the combination of Router and Context.
- GitHub requests limit is not handled gracefully, I've tried to minimize it only doing requests after the login, but it will show just a generic error if the limit is hit or it's a 404.
- Testing is not complete, I've used [Enzyme](https://airbnb.io/enzyme/), but looks like Hook support is still something open to discussion.
- It could be some boilerplate code/files from `create-react-app` remaining.

