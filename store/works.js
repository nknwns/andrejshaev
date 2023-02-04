import Work from "@/interfaces/Work";

export const state = () => ({
	works: []
})

export const getters = {

}

export const mutations = {
	setWorks(state, works) {
		state.works = works;
	}
}

export const actions = {
	async loadWorks({commit}) {
		try {
			commit('setWorks', []);

			let works = await this.$axios.$get('/api/works.json');
			works = works.map(element => new Work(element));

			commit('setWorks', works);
		} catch (e) {
			console.log(e);
		}
	}
}
