export const state = () => ({
	contacts: []
})

export const mutations = {
	setContacts(state, contacts) {
		state.contacts = contacts;
	}
}

export const actions = {
	async loadContacts({commit}) {
		try {
			commit('setContacts', []);

			let contacts = await this.$axios.$get('/api/contacts.json');

			commit('setContacts', contacts);
		} catch (e) {
			console.log(e);
		}
	}
}
