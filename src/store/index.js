import { createStore } from 'vuex'

export default createStore({
  state: {
    editMode: false,
    globalTrans: false,
    scrolled: false
  },
  mutations: {
    scrolled(state) {
      state.scrolled = true;
    },
    unscrolled(state) {
      state.scrolled = false;
    },
    toggleEditMode(state) {
      state.editMode = !state.editMode;
    },
    togglePane(state) {
      //console.clear();
      state.globalTrans = true;
      console.log('transitioning?', state.globalTrans);
      setTimeout(() => {
        state.globalTrans = false;
        //console.log('transitioning?: ' + state.globalTrans);
      }, 600);
    },
    cancelTransition(state) {
      //Dconsole.clear();
      //console.log('preventing transition.');
      setTimeout(() => {
        state.globalTrans = false;
        //console.log('global trans: ', state.globalTrans);
      },5);
    },
  },
  actions: {
  },
  modules: {
  }
})
