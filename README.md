# Sprout Therapy Assignment

![CI/CD](https://github.com/shcherbyakdev/st-assignment/workflows/CI/CD/badge.svg)

[![codecov](https://codecov.io/gh/st-assignment/react-workflow-gh-actions/branch/master/graph/badge.svg)](https://codecov.io/gh/st-assignment/react-workflow-gh-actions)

Implementation of Sprout Therapy Assignment

The task was salved with the help of React for view and JS. Also the are some styles to make ui friendly for users. I chose React and create-react-app as boilerplate because it allows to start develop very quickly and easily make a ui for a task without spending time to setup infrastructure.
ESLint and Prettier were also configured to comply code style and formatting.

As for the implementation, it seemed to me that the decision based on the inheritance of classes will be quite concise and easy to scale in cases we need to add new custom modes which could override base mode. It also does not require the formation of many nested if/else conditions.

## Quick start

- Clone the repo: `git clone https://github.com/shcherbyakdev/st-assignment.git`

- Make sure your NodeJS and npm versions are up to date for `React 16.13.1`

- Install dependencies: `npm install` or `yarn`

- Start the server: `npm run start` or `yarn start`

- Go to: `localhost:3000`

## Testing

```sh
$ npm run test
```

## Usage

Assignment implemented as browser based application.

![alt text](https://user-images.githubusercontent.com/22860759/86539984-c5101d80-bf09-11ea-897a-3fa49e52e504.png)
