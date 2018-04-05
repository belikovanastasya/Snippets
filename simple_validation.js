const emailValidate = function () {
	const reg = /^\w+@\w+\.[a-z]{2,}$/;
	let text;
	$('#email').blur(function () {
		text = $(this).val();
		if (!reg.test(text)) {
			$(this).addClass('invalid');
			$('.error_text').addClass('active');
			return;
		}
		$(this).removeClass('invalid');
		$('.error_text').removeClass('active');
	})
}