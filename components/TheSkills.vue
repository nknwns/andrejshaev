<template>
	<section class="skills section" id="skills">
		<div class="container">
			<div class="row">
				<div class="skills__wrapper">
					<h2 class="skills__title title">Мои умения</h2>
					<div class="skills__tabs">
						<SkillsTab :skills="skills.hard" />
						<SkillsTab :skills="skills.soft" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SkillsItem from "~/components/Skills/SkillsItem";
import {mapMutations, mapState} from "vuex";
import SkillsTab from "@/components/Skills/SkillsTab";

export default {
	name: "TheSkills",
	components: {SkillsTab, SkillsItem},
	data() {
		return {}
	},
	computed: {
		...mapState({
			skills: state => state.skills.skills,
			currentSkill: state => state.skills.currentSkill
		})
	},
	methods: {
		...mapMutations({
			setCurrentSkill: 'skills/setCurrentSkill'
		})
	}
}
</script>
