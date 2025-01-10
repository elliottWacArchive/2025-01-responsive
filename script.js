document.addEventListener('DOMContentLoaded', function () {
	const book = document.getElementById('book');
	const dest = document.getElementById('dest');
	const bookLink = document.getElementById('bookLink');
	const destLink = document.getElementById('destLink');
	const link = bookLink.getElementsByClassName('link');

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
			destLink.style.height = "0px";
			bookLink.style.height = 3 * link[0].offsetHeight + "px";
		} else {
			bookLink.style.height = "0px";
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
			bookLink.style.height = "0px";
			destLink.style.height = 3 * link[0].offsetHeight + "px";
		} else {
			destLink.style.height = "0px";
			destLink.classList.add('hidden');
		}
	});

	let index = 0;
	let img = ['assets/6.jpg','assets/7.jpg','assets/8.jpg','assets/9.jpg','assets/10.jpg','assets/11.jpg'];
	const btnright = document.getElementById("right");
	const btnleft = document.getElementById("left");
	const imgcarousel = document.getElementById('imgCarousel');
	const switchbtn = document.querySelectorAll('.switch');

	function changeBackground(index) {
		imgcarousel.style.backgroundImage = `url(${img[index]})`;
		for (let i = 0; i < 6; i++) {
			document.getElementById(`s${i}`).style.backgroundPosition = 'top';
		}
		document.getElementById(`s${index}`).style.backgroundPosition = 'bottom';
	}

	switchbtn.forEach(function (btn) {
		btn.addEventListener('click', function () {
			audio.play();
			index = parseInt(btn.id.replace('s', ''));
			changeBackground(index);
		});
	});

	btnright.addEventListener('click', function () {
		audio.play();
		if (index == 5) {
			index = 0;
		} else {
			index++;
		}
		changeBackground(index);
	});

	btnleft.addEventListener('click', function () {
		audio.play();
		if (index == 0) {
			index = 5;
		} else {
			index--;
		}
		changeBackground(index);
	});
});