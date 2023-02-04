<template>
	<div
		class="works__item item"
		:class="{'works__item--right': right}"
	>
		<div
			class="item__content col-12 col-lg-6 col-xl-5"
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
		<a href="https://chess-dark.web.app/" target="_blank" class="item__preview col-12 col-lg-6 col-xl-7">
			<img class="item__image" :src="'/img/' + work.image" alt="chess">
		</a>
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
