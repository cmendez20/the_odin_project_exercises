const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = "Hey I'm red!";

const blueHeader = document.createElement('h3');
blueHeader.style.color = 'blue';
blueHeader.textContent = "I'm a blue h3!";

const div2 = document.createElement('div');
div2.style.cssText =
  'border-style: solid; border-color: black; background-color: pink;';

const anotherHeader = document.createElement('h1');
anotherHeader.textContent = "I'm in a div";
const anotherPara = document.createElement('p');
anotherPara.textContent = 'ME TOO!';

div2.appendChild(anotherHeader);
div2.appendChild(anotherPara);

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueHeader);
container.appendChild(div2);
