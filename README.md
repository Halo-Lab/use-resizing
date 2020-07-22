# NPM module template

Boilerplate to create an npm module development environment with example code (custom hook that track window dimensions).

> Our setup will consist of two separate projects:
> 1. NPM Module Project
> 2. React Host Project (to debug new features)

![projects structure](https://i.ibb.co/k2JsMyj/projects.png)

NPM module will be connected to the React Host Project using `npm link`. Project separation will enable us to keep our module logic encapsulated and more maintainable.
<br />
<br />
## Available script commands

* Build module project to `index.js`.
    ```
    npm run build
    ```
* Run development will compile a file every time that any changes  in `/src` folder will occur. 
    ```
    npm run develop
    ```
* Deploy your project to NPM. The script will trigger `npm publish`.
    ```
    npm run deploy
    ```
<br />
<br />

## 🚀 Quick start

1. Clone template project.
    ```
    git clone https://github.com/Halo-Lab/module_template
    ```
2. Pick a module name and change folder name in package.json accordingly. Make sure you are using a unique one so you can publish your package to npm. Provide additional information about your module by changing *description*, *author*, *license* and *keywords*. Describe basic functionality of your module in README.md file.

    *<sub>project folder</sub>*
    ```
    /my-new-module
    ```

    *<sub>package.json</sub>*
    ```
      "name": "my-new-module",
      "description": "NPM module template description",
      "author": "John Smith",
      "license": "ISC",
      "keywords": ["react", "hooks", "screen size"]
    ```
    
3. Install dependencies

    ```
    npm i
    ```

4. An initial build command will compile all files from `/src` folder to a single `index.js` file. 
    ```
    npm run build
    ```
5. Our module is ready for development. Now we are ready to connect our module to React Host Project. Create a new React Project in the different folder and change App.js file with example code. **Main concept is to keep two projects in separate folders. So after the development process Module Project will include
 module logic exclusively.**

    > Be sure that you're **not** creating new project inside Module folder.

    *<sub>Navigate to your main Project Folder and create a new React Project.</sub>*
    ```
    cd ..
    npx create-react-app host_react_app
    ```
    *<sub>App.js</sub>*
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
6. To connect our module open Module Project folder and create a symlink. Npm link will add our package to the global `/lib/node_modules/my-new-module` folder and create a link from it. You can find more information about npm link functionality from the [official documentation](https://docs.npmjs.com/cli/link).

    ```
    cd my-new-module
    npm link
    ```
  7. Now open React Host Project and add your locally developed module. That will create a  symbolic link from globally-installed ```my-new-module``` to current `node_modules/` folder

      ```
      cd host_react_app
      npm link my-new-module
      ```

8. Start React host and Module projects. Any changes inside module's `/src` folder will trigger both projects to rebuild.

      *<sub>React host project</sub>*
      ```
      cd host_react_app
      npm run start
      ```
      *<sub>Module project</sub>*
      ```
      cd my-new-module
      npm run develop
      ```

9. Change remote's Git URL to your own repository.

      ```
      git remote set-url origin https://github.com/USERNAME/my-new-module.git
      ```

10. Develop your custom module logic inside `/src` folder.
