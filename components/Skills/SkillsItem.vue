<template>
	<div
		class="tabs__description description"
		:class="{'active': active}"
	>
		<h3 class="description__title">
			<img class="description__logo" :src="'/img/' + skill.icon" alt="html">
			{{ skill.title }}
		</h3>
		<p v-if="skill.experience" class="description__experience">Опыт использования: {{ skill.experience }}</p>
		<div class="description__content">
			<ul class="description__list">
				<li
					v-for="technology in skill.technologies"
					class="description__item"
				>
					{{ technology.title }}.
					<span class="description__count" v-if="technology.experience">Опыт использования: {{ technology.experience }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "SkillsItem",
	props: {
		skill: {
			title: String,
			icon: String,
			experience: String,
			technologies: Array
		},
		active: {
			type: Boolean,
			default: false
		}
	}
}
</script>
