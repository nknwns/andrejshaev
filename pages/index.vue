<template>
	<main>
		<h1 class="hidden">Андрей Шаев - обо мне и моем портфолио</h1>
		<TheHero/>
		<TheSkills/>
		<TheWorks/>
		<TheContacts/>
	</main>
</template>

<script>
import TheHero from "~/components/TheHero";
import TheSkills from "~/components/TheSkills";
import TheWorks from "~/components/TheWorks";
import TheContacts from "~/components/TheContacts";

export default {
	name: 'IndexPage',
	components: {TheContacts, TheWorks, TheSkills, TheHero},
	data() {
		return {
			skills: []
		}
	},
	async asyncData({store}) {
		await Promise.all([store.dispatch('skills/loadSkills'), store.dispatch('works/loadWorks')]);
	}
}
</script>
