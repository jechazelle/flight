import trafficService from '../services/trafficService'

export const traffic = {
    state    : {
        traffics: [],
        search         : {
            resultTraffics: [],
            config: {
                params : {
                    offset: 0,
                    limit : 10,
                    total : 0
                },
                config : {
                    pageSelected: 0
                }
            }
        }
    },
    mutations: {
        SEARCH_TRAFFICS(state, payload) {
            state.search.resultTraffics = payload
        },

        SEARCH_SET_PARAMS(state, payload) {
            state.search.config.params = Object.assign({}, state.search.config.params, payload)
        },

        SEARCH_SET_CONFIG(state, payload) {
            state.search.config.config = Object.assign({}, state.search.config.config, payload)
        },

        GET_TRAFFICS(state, payload) {
            state.traffics = payload
        }
    },
    actions  : {
        searchTraffics({commit}, config) {
            return new Promise((resolve) => {
                trafficService.searchTraffics(config)
                               .then(response => {
                                   commit('SEARCH_TRAFFICS', response.data)

                                   commit('SEARCH_SET_PARAMS', response.config)

                                   resolve()
                               })
                               .catch(error => {
                                   console.log(error)
                               })
            });
        },

        searchSetParams({commit}, config) {
            commit('SEARCH_SET_PARAMS', config)
        },

        searchSetConfig({commit}, config) {
            commit('SEARCH_SET_CONFIG', config)
        },

        getTraffics({commit}) {
            return new Promise((resolve) => {
                trafficService.getTraffics()
                              .then(response => {
                                  commit('GET_TRAFFICS', response)

                                  resolve()
                              })
                              .catch(error => {
                                  console.log(error)
                              })
            })
        }
    },
    getters: {
        searchConfig: state => state.search.config,

        searchConfigParams : state => state.search.config.params,
        searchConfigConfig : state => state.search.config.config,

        searchResultTraffics: state => state.search.resultTraffics,

        traffics: state => state.traffics,
    },
}