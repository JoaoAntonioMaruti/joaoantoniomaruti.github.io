document.addEventListener('scroll', function() {
	const top = window.pageYOffset;
	const one = document.querySelector('.one');
	const two = document.querySelector('.two');
	const three = document.querySelector('.three');
	const four = document.querySelector('.four');
	const five = document.querySelector('.five');

	one.style.bottom = (-(top * 0.15) + 'px');
	two.style.bottom = (-(top * 0.2) + 'px');
	three.style.bottom = (-(top * 0.3) + 'px');
	four.style.bottom = (-(top * 0.4) + 'px');
	five.style.bottom = (-(top * 0.5) + 'px');
});


var button = document.getElementById('send');

button.addEventListener('click', function () {
  var name = document.getElementById('send').value
  var email = document.getElementById('email').value
  var subject = document.getElementById('subject').value
  var message = document.getElementById('message').value

  console.log(name)
  console.log(email)
  console.log(subject)
  console.log(message)


})

