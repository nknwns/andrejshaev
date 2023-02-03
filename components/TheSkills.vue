<template>
	<section class="skills" id="skills">
		<div class="container">
			<div class="skills__wrapper">
				<h2 class="skills__title">Мои умения</h2>
				<div class="skills__tabs tabs">
					<div class="tabs__titles">
						<a v-for="skill in skills"
						   :key="skill.id"
						   :class="{'active': (skill.id === currentSkill)}"
						   @click.prevent="setCurrentSkill(skill.id)"
						   href="#"
						   class="tabs__title"
						>
							{{ skill.title }}
						</a>
					</div>
					<div class="tabs__content">
						<SkillsItem
							v-for="skill in skills"
							:key="skill.id"
							:skill="skill"
							:active="currentSkill == skill.id"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SkillsItem from "~/components/Skills/SkillsItem";
import {mapMutations, mapState} from "vuex";

export default {
	name: "TheSkills",
	components: {SkillsItem},
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
