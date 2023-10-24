<div class="flex justify-center items-center w-full pt-10">
	<form
		action="https://api.staticforms.xyz/submit"
		method="post"
		class="flex flex-col md:96 md:items-center md:"
	>
		<input type="text" name="name" placeholder="Your Name" />
		<div class="h-2" />
		<input type="text" name="email" placeholder="Your Email" />
		<div class="h-2" />
		<textarea name="message" />
		<div class="h-2" />
		<input type="text" name="honeypot" style="display:none" />
		<input type="hidden" name="accessKey" value="4ce00c4e-cffa-43e1-81a0-15118caeb705" />
		<input type="hidden" name="subject" value="Contact us from - example.com" />
		<input type="hidden" name="replyTo" value="@" />
		<input type="hidden" name="redirectTo" value="localhost:5173/contact/succes" />
		<input type="submit" value="Submit" />
	</form>
</div>
