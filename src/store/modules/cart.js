// initial state
const state = () => ({
  count:0
})

// getters
const getters = {
    count: state => state.count
}

// actions
const actions = {
  increase ({ commit }, increased) {
    commit('increase', increased)
  },
  increment({commit}){
    commit('increment')
  }
}

// mutations
const mutations = {
    increment (state) {
        state.count++
    },
    increase(state, { number }){
        state.count = state.count + number
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}