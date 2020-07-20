# NPM module template

Boilerplate to create an npm module development environment with example code (custom hook that track window dimensions).

> Our setup will consist of:
> 1. NPM module project
> 2. React host project (to debug new features)

NPM module will be connected to React host project using ```npm link```.
<br />
<br />
## Available script commands

<sub>1. Build module project to ***index.js***</sub>
```
npm run build
```
<sub>2. Run development script with rebuilning on any change in ***/src*** folder</sub>
```
npm run develop
```
<sub>3. Bump npm version</sub>
```
npm run bump
```
<sub>4. Bump npm version and publish package to NPM</sub>
```
npm run deploy
```
<br />
<br />

## Setup walk through

1. Clone template project
```
git clone https://github.com/Halo-Lab/module_template
```
2. Pick a module name and change folder name in package.json accordingly. Make sure you are using a unique one so you can publish your package to npm. 

<sub>package.json</sub>
```
  "name": "my-new-module",
```
<sub>project folder</sub>
```
/my-new-module
```
3. Install dependencies

```
npm i
```

4. Initial build command
```
npm run build
```
5. Our module is ready for development. Now we are ready to connect our module to React host project. Create a new React project and change App.js file with example code.

```
npx create-react-app host_react_app
```
<sub>App.js</sub>
```
import React from 'react';
import useResizing from 'my-new-module';

function App() {
  const screenSize = useResizing();

  return (
    <div className="App">
      {`${screenSize.width}px ${screenSize.height}px`}
    </div>
  );
}

export default App;
```
6. To connect our module open project folder and create symlink. 

```
cd my-new-module
npm link
```
7. Now open React host project and add your locally developed module. That will create symbolic link from globally-installed ```my-new-module``` to current ***node_modules/*** folder

```
cd host_react_app
npm link my-new-module
```

8. Start React host and Module projects. Any changes inside module's ***/src*** folder will trigger both projects to rebuild.

<sub>React host project</sub>
```
cd host_react_app
npm run start
```
<sub>Module project</sub>
```
cd my-new-module
npm run develop
```

9. Change remote's Git URL to your own repository.

```
git remote set-url origin https://github.com/USERNAME/my-new-module.git
```

10. Develop your custom module logic inside ***/src*** folder.
