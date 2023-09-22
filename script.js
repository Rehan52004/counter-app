const incrementButton = document.querySelector('.increment-button');
const decrementButton = document.querySelector('.decrement-button');
const showResult = document.querySelector('h2');

let count = 0;

incrementButton.addEventListener('click', () => {
	count++;
	showResult.innerText = count;
});

decrementButton.addEventListener('click', () => {
	count--;
	showResult.innerText = count;
});
