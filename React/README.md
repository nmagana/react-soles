## Environment Setup for React

### Yarn
Yarn is a new package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely, and more reliably.

Download yarn with the following command:
```
npm install -g yarn
```

### Babel
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 

Download Babel with the following command.
```
yarn global add babel-cli@6.24.1
```
Make sure you run the following two commands in the app directory. 
```
yarn init
```
Press enter for all the prompts given. You should get a package.json sitting in the app directory now. Now download the dependencies by inputting hte following command:
```
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
```
