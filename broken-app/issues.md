# Broken App Issues 😩
--
* Change `var` and `let` expressions to `const` (where applicable)
	* `var app = express();` to `const app = express();`
	* `let axios = require('axios');` to `const axios = require('axios');`
* Add a server.js file so tests can be run & code more compartmentalized. Export app from app.js so the server.js has access to it.
* Add error handling via expressError.js and within app.js
* Use json data `app.use(express.json());`
* Use `async/await` to resolve promises.
* Create `try/catch` error handling.