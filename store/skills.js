export const state = () => ({
	skills: [],
	currentSkill: 0
})

export const mutations = {
	setSkills(state, skills) {
		state.skills = skills;
	},
	setCurrentSkill(state, skillID) {
		state.currentSkill = skillID;
	}
}

export const actions = {
	async loadSkills({commit}) {
		try {
			commit('setSkills', []);

			let skills = await this.$axios.$get('/skills.json');

			commit('setSkills', skills);
		} catch (e) {
			console.log(e);
		}
	}
}
