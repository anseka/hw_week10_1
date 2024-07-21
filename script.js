let list = document.querySelector('.list');
let button = document.querySelector('button');


function createTask() {
let valueInput = document.querySelector('#task').value;
let newLi = document.createElement('li');
newLi.textContent = valueInput;
list.append(newLi);
document.querySelector('#task').value = '';
}

list.addEventListener('click', function (event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	}
});

button.addEventListener('click', createTask);