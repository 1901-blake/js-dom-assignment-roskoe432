const HW = (function () {
	function HW() { }

	// 1
	HW.getUSA = function () {
		let spans = document.getElementsByTagName('span');
		for (let i = 0; i < spans.length; i++) {
			if (spans[i].innerHTML === 'USA') {
				console.log(spans[i].innerHTML)
			}
		}
	};

	// 2
	HW.getPeopleInSales = function () {
		let td = document.querySelectorAll('[class="empName"]');
		for (let i = 0; i < td.length; i++)
			console.log(td[i].innerHTML);
	};

	// 3
	HW.getAnchorChildren = function () {
		let spans = document.querySelectorAll('a > span');
		for (let i = 0; i < spans.length; i++) {
			console.log(spans[i].innerHTML);
		}
	};

	// 4
	HW.getHobbies = function () {
		let hobbies = document.querySelector('[name="hobbies"]');
		let opts = hobbies.getElementsByTagName('option');
		for (let i = 0; i < opts.length; i++) {
			let selected = opts[i].getAttribute('selected') === 'selected';
			if (selected) {
				let val = opts[i].getAttribute('value');
				console.log(`Content: ${opts[i].innerHTML}, Value: ${val}`);
			}
		}
	};

	// 5
	HW.getCustomAttribute = function () {
		let cust = document.querySelectorAll('[data-customAttr]');
		for (let i = 0; i < cust.length; i++) {
			let value = cust[i].getAttribute('data-customAttr');
			console.log(`Value = ${value}, ${cust[i]}`);
		}
	}

	// 10
	HW.walkTheDom = function(node, func) {
		func(node);
		if (node.childElementCount > 0) {
			for (let i = 0; i < node.children.length; i++) {
				WalkTheDom(node.children[i], func);
			}
		}
	};

	return HW;
})();



// 6
(function () {
	const rgx = new RegExp('^[0-9]*$');
	const num1 = document.getElementById('num1');
	const num2 = document.getElementById('num2');
	const sum = document.getElementById('sum');

	num1.value = '0';
	num2.value = '0';
	sum.innerHTML = '0';

	function add(ev) {
		if(rgx.test(num1.value) && rgx.test(num2.value)) {
			sum.innerHTML = +num1.value + +num2.value;
			return;
		}
		sum.innerHTML = 'Cannot Add';
	}

	num1.addEventListener('input', add);
	num2.addEventListener('input', add);
})();



// 7
(function() {
	const select = document.getElementsByTagName('select');
	for (let i = 0; i < select.length; i++) {
		if (select[i].getAttribute('name', 'skills')) {
			let id = select[i].value;
			select[i].addEventListener('change', e => {
				let ans = prompt(`Are you sure ${select[i].value} is one of your skills? (yes or no)`);
				console.log(ans);
				if (ans === null || ans.toLowerCase() === 'no') {
					select[i].value = id;
				}
			});
		}
	}
})();



// 8
(function() {
	const favColors = document.querySelectorAll('form#firstForm input[name="favoriteColor"]');
	let last = null, current = null;
	for (let i = 0; i < favColors.length; i++) {
		favColors[i].addEventListener('change', (e) => {
			current = favColors[i];
			if (last === null) {
				last = current;
			} else {
				if (current != last) {
					let a = current.getAttribute('value');
					let b = last.getAttribute('value');
					alert(`So you like ${a} more than ${b} now.`);
					last = current;
				}
			}
			document.body.style.backgroundColor = current.getAttribute('value');
		});
	}
})();



// 9
(function() {
	const td = document.querySelectorAll('[class="empName"]');
	for (let i = 0; i < td.length; i++) {
		let style = getComputedStyle(td[i]);
		let last = style.opacity;
		td[i].addEventListener('mouseover', (e) => {
			let isVis = style.opacity === last;
			td[i].style.opacity = (isVis ? '0' : last);
		});
	}
})();



// 10
(function() {
	window.addEventListener('load', (e) => {
		function PrintTime() {
			let h5 = document.getElementById('currentTime');
			function UpdateTime() {
				h5.innerHTML = new Date().toLocaleTimeString();
				let id = setTimeout(UpdateTime, 1000);
			}
			return UpdateTime();
		}
		PrintTime();
	});
})();



// 11
(function() {
	function RandRange(min, max) {
		return Math.round((min + (max - min) * Math.random())).toString();
	}
	function RandColor() {
		let r = RandRange(0, 255);
		let g = RandRange(0, 255);
		let b = RandRange(0, 255);
		return `rgb(${r}, ${g}, ${b})`;
	}

	let p = document.getElementById('helloWorld');
	let id = 0;
	p.addEventListener('click', (e) => {
		console.log('Clicked');
		clearTimeout(id);
		id = setTimeout(() => {
			p.style.color = RandColor();
		}, 3000);
	});
})();