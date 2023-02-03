<template>
	<div
		class="works__item item"
		:class="{'works__item--right': right}"
	>
		<div
			class="item__content"
			:class="{'item__content--right': right}"
		>
			<p class="item__type">{{ work.type }}</p>
			<h3 class="item__title">
				<a :href="work.link" target="_blank">{{ work.title }}</a>
			</h3>
			<p class="item__description">{{ work.description }}</p>
			<ul
				v-if="work.languages"
				class="item__languages"
			>
				<li
					v-for="language in work.languages"
					:key="language.id"
					class="item__language"
				>
					{{ language.title }}
				</li>
			</ul>
			<ul
				v-if="work.links"
				class="item__links"
			>
				<li
					v-for="link in work.links"
					:key="link.id"
				>
					<a class="item__link link" target="_blank" :href="link.source">{{ link.title }}</a>
				</li>
			</ul>
		</div>
		<div class="item__preview">
			<a href="https://chess-dark.web.app/" target="_blank">
				<img class="item__image" :src="'/img/' + work.image" alt="chess">
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "WorksItem",
	props: {
		work: {
			title: String
		},
		right: {
			type: Boolean,
			default: false
		}
	}
}
</script>
