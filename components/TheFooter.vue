<template>
	<footer class="footer">
		<div class="footer__information">
			<p class="footer__author">Created Andrej Shaev, 8.12.2021.</p>
			<p class="footer__univers">Student <a href="https://new.mospolytech.ru/" class="link">Moscow Polytechnic University</a>, group 211-322.</p>
		</div>
		<div class="footer__contact">
			<form action="#" method="post">
				<label for="name" class="hidden">Name</label>
				<input class="footer__input" type="text" id="name" name="name" placeholder="Your name">
				<label for="phone" class="hidden"></label>
				<input class="footer__input" type="tel" id="phone" name="phone" placeholder="Your phone">
				<br>
				<br>
				<label class="footer__label footer__label--checkbox"><input class="footer__input--checkbox" type="checkbox" value="now"> Contact us right now</label>
				<input class="footer__input footer__input--submit" type="submit" name="submit" value="Submit">
			</form>
		</div>
	</footer>
</template>

<script>
export default {
name: "TheFooter"
}
</script>
