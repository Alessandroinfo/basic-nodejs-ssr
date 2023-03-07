const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            const filePath = path.join(__dirname, 'index.html');
            fs.readFile(filePath, 'utf8', (err, html) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    const content = `
                    <div class="card server">
                    <h1>Hello, World!</h1>
                    <h2>The whole page was rendered on server side!</h2>
                    <h2>You need to re-run server to see the edits</h2>
                    </div>`;
                    const renderedHtml = html.replace('<!-- This is where the server will render the content -->', content);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(renderedHtml);
                }
            });
            break;
        case '/client.js':
            const jsFilePath = path.join(__dirname, 'client.js');
            fs.readFile(jsFilePath, 'utf8', (err, js) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/javascript');
                    res.end(js);
                }
            });
            break;
        case '/favicon.ico':
            const imgFilePath = path.join(__dirname, 'favicon.ico');
            fs.readFile(imgFilePath, (err, img) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'image/x-icon');
                    res.end(img);
                }
            });
            break;
        default:
            res.statusCode = 404;
            res.end('Not found');
            break;
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`[Server log] Server running at http://localhost:${port}`);
});
