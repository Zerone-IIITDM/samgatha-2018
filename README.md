# Samgatha 2018
## How to run?
* Clone this repository using `git clone https://github.com/Zerone-IIITDM/samgatha-2018.git`
* Run `npm install` in `client` and `main` directories to install all dependencies
* Run `npm run dev` to start the server in development mode

## Code structure 
### Directories
* `/node_modules` - dependencies installed by `npm`
* `/client` - client side React code
* `/routes` - routes to be handled by express server
* `/services` - general configuration settings and middlewares to be used by express server

### Top level files
* `index.js` - entry point for application
* `README.md` - readme 

### `client/src` directory
* `components` - react components used in app

## TODO
* Add `MySQL` integration.(Note: this involves removing Firebase completely and using MySQL instead of that)
* Add user authentication using `passport-js`.(Feel free to suggest some other packages for authentication)
* Add React Mobile components.(Have a look at this: https://foundation.zurb.com/)

## License
MIT License

Copyright (c) 2018 Zerone-IIITDM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
