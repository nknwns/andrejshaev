<template>
	<main>
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
	components: {TheContacts, TheWorks, TheSkills, TheHero}
}
</script>
