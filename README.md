# uqlapp-config

uqlapp-config provides basic configuration for UQ Library applications. It is meant to be installed via Bower and not
used on it's own.

### Getting Started
Bower install into your project:
```sh
bower install https://github.com/uqlibrary/uqlapp-config.git
```
For this to work you must have your GIT password saved on a keychain. 

### Variable override
uqlapp-config has 3 variables that can be overwritten by the main project:
- uqlApiUrl: The URL of the UQ Library API
- uqlAppUrl: The URL of the main UQL App (root)
- uqlAppMock: Whether to use mock data or not

### Developing
- Run the following in the root directory
```sh
npm install
```
- Change any file in the "src" directory
- Run the following command to minify the JS *before* committing to Master
- Tag a release if needed
```sh
gulp minify
```
