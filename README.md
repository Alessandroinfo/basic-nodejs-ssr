# Server Side Rendering (SSR) with only Node.js

**Server-side rendering (SSR)** is the process of **rendering HTML on the server before sending it to the client's web
browser**. 

Before sending to the client it can be elaborated to includes some data.
It is also possible to run JS code on server side that generate extra HTML.
It can be done also with PHP, Java, Ruby, Python.

This approach can help improve page load times and SEO by sending a fully-formed HTML page to the client instead of
relying on JavaScript to render the page after it has loaded.

## Prerequisites

**Node.js** installed on your machine.

## Explanations

- `index.html` - HTML file with a div element where the server will render the content.
- `server.js` - Node.js file that will serve the HTML file and any other assets.
- `client.js` - JavaScript file that will run on the client-side.
In server.js, use the Node.js http module to create a server and listen for requests.

In the server's request listener, use a switch statement to handle requests for different files:

- For requests to `'/'`, read the index.html file and replace the placeholder div with the server-rendered content.
- For requests to `'client.js'`, read the client.js file and send it as a response.
- For requests to `'favicon.ico'`, read the favicon.ico file and send it as a response.
- For all other requests, return a 404 error.

In `client.js`, create a div element with some content and append it to the div element in `index.html`.
This will be wlaborated by browser on client side.

Start the server by running node `server.js` in the terminal.

Open a web browser and navigate to http://localhost:3000.

### Rendering flow

           Client                     Server
             │                           │
             │ GET request for /         │
             │──────────────────────────>│
             │                           │
             │                           │
             │  GET index.html           │
             │  ─────────────────────────┤
             │                           │
             │                           │
             │  Replace placeholder      │
             │  with server-side content │
             │  ────────────────────────>│
             │                           │
             │                           │
             │  Send rendered HTML       │
             │<──────────────────────────┤
             │                           │
             │                           │
             │ GET request for client.js │
             │──────────────────────────>│
             │                           │
             │                           │
             │  Serve client.js          │
             │<──────────────────────────┤
             │                           │
             │                           │
             │ Client modifies DOM       │
             │────────────────────       │

---

- [Further informations about rendering](https://web.dev/rendering-on-the-web/)
