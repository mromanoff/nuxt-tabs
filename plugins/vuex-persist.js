// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      /* your options */
      key: 'vh',
      storage: sessionStorage,
      reducer: state => ({ ui: state.ui }) // only save navigation module
    }).plugin(store)
  })
}
