
	<script src="https://smtpjs.com/v3/smtp.js">
	</script>

	<script type="text/javascript">
		function sendEmail() {
			Email.send({
				Host: "smtp.gmail.com",
				Username: "sender@email_address.com",
				Password: "Enter your password",
				To: 'receiver@email_address.com',
				From: "sender@email_address.com",
				Subject: "Sending Email using javascript",
				Body: "Well that was easy!!",
			})
				.then(function (message) {
					alert("mail sent successfully")
				});
		}
	</script>


	<form method="post">
		<input type="button" value="Send Email"
			onclick="sendEmail()" />
	</form>

