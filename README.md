# holbertonschool-web_back_end: ES6 learning courses

<p align="center">
<img src="https://github.com/Bomays/holbertonschool-higher_level_programming/blob/05a7c29e538d625d9eca9b52975f54addee77a70/holbertonschool-web_front_end/images/JS.png" alt="JS"/>


## Requirements

```

    - All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 9.x.x
    - Allowed editors: vi, vim, emacs, Visual Studio Code
    - All your files should end with a new line
    - A README.md file, at the root of the folder of the project, is mandatory
    - Your code should use the js extension
    - Your code will be tested using Jest and the command npm run test
    - Your code will be verified against lint using ESLint
    - Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
    - All of your functions must be exported

```


## Setup
Install NodeJS 20.x.x

(in your home directory): 

```
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Install Jest, Babel, and ESLint

in your project directory: 

```
Install Jest using: npm install --save-dev jest
```
```
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
```
```
Install ESLint using: npm install --save-dev eslint
```

### Files

package.json
babel.config.js
.eslintrc.js

> Don’t forget to run $ npm install when you have the package.json


<p align="center">
<img src="https://github.com/Bomays/holbertonschool-higher_level_programming/blob/9441bc9f0855463ba8b62e4f2bc7e68090566757/images/python-logo-only.png" alt="Python"/>
</p>


## Requirements

```

    - A README.md file, at the root of the folder of the project
      is mandatory
    - Allowed editors: vi, vim, emacs
    - All your files will be interpreted/compiled on Ubuntu 20.04
      LTS using python3 (version 3.9)
    - All your files should end with a new line
    - All your files must be executable
    - The length of your files will be tested using wc
    - The first line of all your files should be exactly
      #!/usr/bin/env python3

    - Your code should use the pycodestyle style (version 2.5.x)
    - All your functions and coroutines must be type-annotated.
    - All your modules should have a documentation
      (python3 -c 'print(__import__("my_module").__doc__)')

    - All your functions should have a documentation
      (python3 -c 'print(__import__("my_module").my_function.__doc__)')

    - A documentation is not a simple word, it’s a real sentence
      explaining what’s the purpose of the module, class or method
      (the length of it will be verified)


```

## Setup 

```
> mypy

usage : 
    mypy your_file.py or mypy --strict your_file.py (with type annotations)

```

```
> wc

usage :
    wc filename: This displays the number of lines, words, and bytes in the file.
    Count only lines: wc -l filename
    Count only words: wc -w filename
    Count only characters: wc -m filename
    Count only bytes: wc -c filename
    Find the longest line length: wc -L filename

```

```
> pycodestyle

usage :
    pycodestyle your_file.py
    pycodestyle --show-source your_file.py : show source code for each error

```