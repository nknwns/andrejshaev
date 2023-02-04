<template>
	<section class="works section" id="works">
		<div class="container">
			<div class="row">
				<div class="works__wrapper">
					<h2 class="works__title title title--left">Мои работы</h2>
					<WorksItem
						v-for="(work, index) in works"
						:work="work"
						:key="work.id"
						:right="Boolean(index % 2)"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {mapState} from "vuex";
import WorksItem from "~/components/Works/WorksItem";

export default {
	name: "TheWorks",
	components: {WorksItem},
	computed: {
		...mapState({
			works: state => state.works.works
		})
	},
	mounted() {
		console.log(this.works[0])
	}
}
</script>
