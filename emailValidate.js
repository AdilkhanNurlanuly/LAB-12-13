function validate () {
	const form = document.getElementById('inp_email'); 
	const email = document.getElementById('email').value;
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	if (email == "" || email == null || email == NaN) {
		form.classList.remove('valid');
		form.classList.remove('invalid');
	}
	else if (email.match(pattern)) {
		form.classList.add('valid');
		form.classList.remove('invalid');
	} else {
		form.classList.add('invalid');
		form.classList.remove('valid');
	}
}