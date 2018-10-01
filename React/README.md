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

### Get Web Page Running
Run the following command:
```
yarn install
```
You should now have a node_modules directory, which holds all the dependencies for the project.

Now, run the following command to see if the web page gets served up. The following command will only work if you have live-server installed, so make sure you have that installed.
```
live-server public/index.html 
```
If everything is working, you should have `Welcome to Tech @ SOLES!`. Contact Nico Magana if this isn't the case!


