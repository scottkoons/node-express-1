const app = require('./app');
const port = 3000;

app.listen(port, () => {
    console.log(`Broken-app server listening at http://localhost:${port}`);
});