# bower-package-bootstrap
A bootstrap for creating bower packages. Created so you can easily deploy bower packages from you awesome scripts.
Uses grunt to build and test your package (heh heh). Jasmine is the unit testing framework in use.

## Getting Started
1. Put your source code into src/
2. Write your test scripts and put them in spec using the *.spec.js filename syntax.
3. Update the bower.json file with the name and version of your package.
3. Run "grunt test" to test your package.
3. Run "grunt" or "grunt build" to test and build your package.
4. Push your package to your git repo
5. Register your package "bower register example git://github.com/user/example.git" (see http://bower.io/docs/creating-packages/)

