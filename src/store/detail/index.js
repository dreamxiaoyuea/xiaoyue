const store = {
  state: {
    bannerdata: [],
    prolist: []
  },
  getters: {

  },
  actions: {

  },
  mutations: {
    changeBannerData (state, data) {
      state.bannerdata = data
    },
    changeProList (state, data) {
      state.prolist = data
    }
  }
}

export default store
