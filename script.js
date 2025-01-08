document.addEventListener('DOMContentLoaded', function () {
	const book = document.getElementById('book');
	const dest = document.getElementById('dest');
	const bookLink = document.getElementById('bookLink');
	const destLink = document.getElementById('destLink');

	let degBook = 0;
	let degDest = 0;
	let audio = new Audio('pop.mp3')

	book.addEventListener('click', function () {
		degDest = 0
		degBook += 180;
		book.getElementsByTagName('img')[0].style.transform="rotateZ(" + degBook + "deg)";
		dest.getElementsByTagName('img')[0].style.transform="rotateZ(" + degDest + "deg)";
		audio.play();
		if (bookLink.classList.contains('hidden')) {
			bookLink.classList.remove('hidden');
			destLink.classList.add('hidden');
		} else {
			bookLink.classList.add('hidden');
		}
	});

	dest.addEventListener('click', function () {
		degBook = 0;
		degDest += 180;
		dest.getElementsByTagName('img')[0].style.transform="rotateZ(" + degDest + "deg)";
		book.getElementsByTagName('img')[0].style.transform="rotateZ(" + degBook + "deg)";
		audio.play();
		if (destLink.classList.contains('hidden')) {
			destLink.classList.remove('hidden');
			bookLink.classList.add('hidden');
		} else {
			destLink.classList.add('hidden');
		}
	});

	document.addEventListener('click', function () {
		audio.play();
	});
});