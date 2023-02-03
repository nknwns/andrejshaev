<template>
	<section class="works" id="works">
		<div class="container">
			<div class="row">
				<div class="works__wrapper">
					<h2 class="works__title">My Works</h2>
					<WorksItem
						v-for="(work, index) in works"
						:work="work"
						:right="index % 2"
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
	}
}
</script>
