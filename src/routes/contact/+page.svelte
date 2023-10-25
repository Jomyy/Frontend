<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Zu Spät für die Welle contact form and information" />
</svelte:head>
<div class="flex w-full pt-10 text-white flex-col md:flex-row">
	<div class="flex flex-col justify-center items-center w-full p-10">
		<h1 class="text-3xl">Contact</h1>
		<br />
		<p>Jonathan Enking</p>
		<br />
		<p>General Inquiries</p>
		<a href="info@die-welle.site">info@die-welle.site</a>
		<a href="demos@die-welle.site">demos@die-welle.site</a>
	</div>
	<form
		action="https://api.staticforms.xyz/submit"
		method="post"
		class="flex flex-col md:96 w-full p-10"
	>
		<input type="text" name="name" placeholder="Your Name" required class="text-black" />
		<div class="h-2" />
		<input type="text" name="email" placeholder="Your Email" required class="text-black" />

		<div class="h-2" />
		<input name="subject" placeholder="Subject" required class="text-black" />
		<div class="h-2" />

		<textarea name="message" placeholder="Your Message" required class="text-black h-full" />
		<div class="h-2" />
		<input type="text" name="honeypot" style="display:none" />
		<input type="hidden" name="accessKey" value="4ce00c4e-cffa-43e1-81a0-15118caeb705" />

		<input type="hidden" name="replyTo" value="@" />
		<input type="hidden" name="redirectTo" value="https://zsfdw.vercel.app/contact/success" />
		<input type="submit" value="Submit" />
	</form>
</div>
<div class="flex justify-center items-center flex-col text-white bg-black m-10 p-10">
	<h1 class="text-2xl font-bold">Demo Policy</h1>
	<p class="p-10">
		We are only accepting demos in digital form, please send us a link to your mp3, spotify,
		soundcloud, website etc not the files as an attachment
	</p>
	<a href="demos@die-welle.site">demos@die-welle.site</a>
</div>
