<template>
	<section class="contact" id="contact">
		<div class="container">
			<div class="row">
				<div class="contact__wrapper">
					<h2 class="contact__title">Связь со мной</h2>
					<div class="contact__description description">
						<h3 class="description__title">Свяжитесь со мной любым способом.</h3>
						<p class="description__text">Напишите сообщение на электронную почту <a class="link" href="mailto:andrejshaev@gmail.com">andrejshaev@gmail.com</a> или воспользуйтесь<br> социальными сетями и мессенджерами.</p>
						<ul v-if="contacts.length" class="description__socials">
							<li
								v-for="contact in contacts"
								:ket="contact.id"
								class="description__social"
							>
								<a class="link" target="_blank" :href="contact.link">{{ contact.title }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {mapState} from "vuex";

export default {
	name: "TheContacts",
	computed: {
		...mapState({
			contacts: state => state.contacts.contacts
		})
	}
}
</script>
