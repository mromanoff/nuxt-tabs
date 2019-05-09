import { SET_CURRENT_TAB } from '~/store/mutationTypes'

export const state = () => ({
  currentTab: 'tab1'
})

export const getters = {
  getCurrentTab: state => {
    return state.currentTab
  }
}

export const mutations = {
  [SET_CURRENT_TAB](state, data) {
    state.currentTab = data
  }
}

export const actions = {
  setCurrentTab({ commit }, payload) {
    commit(SET_CURRENT_TAB, payload)
  }
}
