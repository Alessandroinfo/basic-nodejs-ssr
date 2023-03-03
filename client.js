console.log('[Client log] This script will run on the client.');

const hi = document.createElement('div');
hi.innerHTML = `
<h1>Hi, i was manipulated on client side!</h1>
<h2>To see edits you only need to modify the js files</h2>
`;
const app = document.querySelector('#app');
app.appendChild(hi);
