<template>
	<div class="tabs">
		<div class="tabs__titles">
			<a v-for="skill in skills"
			   :key="skill.id"
			   :class="{'active': (skill.id === currentSkill), 'tabs__title--full': skill.full}"
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
				:active="currentSkill === skill.id"
			/>
		</div>
	</div>
</template>

<script>
import SkillsItem from "@/components/Skills/SkillsItem";

export default {
	name: "SkillsTab",
	components: {SkillsItem},
	props: {
		skills: Array
	},
	data() {
		return {
			currentSkill: 0
		}
	},
	methods: {
		setCurrentSkill(id) {
			this.currentSkill = id;
		}
	}
}
</script>
