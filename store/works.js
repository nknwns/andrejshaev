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

			let works = await this.$axios.$get('/works.json');

			commit('setWorks', works);
		} catch (e) {
			console.log(e);
		}
	}
}
