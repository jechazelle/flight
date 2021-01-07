import Vue from 'vue'
import Vuex from 'vuex'

import { traffic } from '../modules/traffic/store/trafficStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        traffic
    }
})
