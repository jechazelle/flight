import TrafficSearch from '../views/TrafficSearch.vue'
import TrafficGraph from '../views/TrafficGraph.vue'

export default [
    {
        path     : '/search',
        name     : 'TrafficSearch',
        component: TrafficSearch
    },
    {
        path     : '/graph',
        name     : 'TrafficGraph',
        component: TrafficGraph
    }
]