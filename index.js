const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', async (req, res) => {
    try {
         const htmlContent = await fs.readFile('/home/arda0853/nodeProject/index.html', 'utf8');

         res.setHeader('Content-Type', 'text/html');
         
         res.send(htmlContent);
    } catch (error) {
        const htmlContent = await fs.readFile('/home/arda0853/nodeProject/404.html', 'utf8')

        res.status(500).send(htmlContent)
    }

});
app.get('/about', async (req, res) => {
    try {
         const htmlContent = await fs.readFile('/home/arda0853/nodeProject/about.html', 'utf8');

         res.setHeader('Content-Type', 'text/html');
         
         res.send(htmlContent);
    } catch (error) {
        const htmlContent = await fs.readFile('/home/arda0853/nodeProject/404.html', 'utf8')

        res.status(500).send(htmlContent)
    }

});
app.get('/contact', async (req, res) => {
    try {
         const htmlContent = await fs.readFile('/home/arda0853/nodeProject/contact-me.html', 'utf8');

         res.setHeader('Content-Type', 'text/html');
         
         res.send(htmlContent);
    } catch (error) {
        const htmlContent = await fs.readFile('/home/arda0853/nodeProject/404.html', 'utf8')

        res.status(500).send(htmlContent)
    }

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});