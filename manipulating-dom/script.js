// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redParagraph = document.createElement('p');
redParagraph.style.color = 'red';
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

const blueHeader = document.createElement('h3');
blueHeader.style.color = 'blue';
blueHeader.textContent = "I'm a blue h3!";
container.appendChild(blueHeader);

const pinkDiv = document.createElement('div');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.borderColor = 'black';
pinkDiv.style.borderStyle = 'solid';
container.appendChild(pinkDiv);

const inADiv = document.createElement('h1');
inADiv.textContent = "I'm in a div";
pinkDiv.appendChild(inADiv);

const meToo = document.createElement('p');
meToo.textContent = "ME TOO!";
pinkDiv.appendChild(meToo);
