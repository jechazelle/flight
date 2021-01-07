<template>
    <div class="traffic-graph app-panel">
        <h2>Graph</h2>

        <div class="row m-3">
            <div class="col-12">
                <div class="traffic-graph-tab">
                    <b-tabs>
                        <b-tab title="arrival-departure/terminal" active>
                            <chart-bar v-if="showGraphRateArrivalDeparture === true" :labelXAxes="'Passengers (million)'" :labelYAxes="'Terminals'" :labels="RateArrivalDeparture.labels" :data="RateArrivalDeparture.data"></chart-bar>
                        </b-tab>
                        <b-tab title="passengers/flights" @click="selectGraphRatesPassengerFlight">
                            <chart-bar v-if="showGraphRatesPassengerFlight === true" :labelXAxes="'Passengers (million)'" :labelYAxes="'Flights'" :labels="RatePassengerFlight.labels" :data="RatePassengerFlight.data"></chart-bar>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ChartBar from '../components/ChartBar.vue'

    export default {
        name      : 'TrafficGraph',
        components: {
            ChartBar
        },
        data() {
            return {
                // Fix responsive
                showGraphRateArrivalDeparture : false,
                showGraphRatesPassengerFlight: false
            };
        },
        computed  : {
            traffics: {
                get() {
                    return this.$store.getters.traffics
                }
            },

            RateArrivalDeparture() {
                let terminalLabels           = []
                let terminalDepartureArrival = []

                this.traffics.map((traffic) => {
                    // Set label
                    if (terminalLabels.indexOf(traffic.Terminal) === -1) {
                        terminalLabels.push(traffic.Terminal)
                    }

                    // Init terminal name to set Departure and Arrival
                    if (terminalDepartureArrival[traffic.Terminal] === undefined) {
                        terminalDepartureArrival[traffic.Terminal] = {
                            Departure: 0,
                            Arrival  : 0
                        }
                    }

                    // Push in terminal
                    terminalDepartureArrival[traffic.Terminal][traffic.Arrival_Departure] += traffic.Passenger_Count
                })

                // Init data template
                let data = [
                    {
                        label          : 'Arrival',
                        backgroundColor: '#f87979',
                        data           : []
                    },
                    {
                        label          : 'Departure',
                        backgroundColor: '#1876f2',
                        data           : []
                    }
                ]

                // Iterate on each terminal to get Arrival and Departure
                terminalLabels.map((terminal) => {
                    data[0].data.push(terminalDepartureArrival[terminal].Arrival)
                    data[1].data.push(terminalDepartureArrival[terminal].Departure)
                })

                return {
                    labels: terminalLabels,
                    data  : data
                }
            },

            RatePassengerFlight() {
                let flights = {
                    Domestic     : 0,
                    International: 0
                }

                // Set passenger count on Domestic or International fly type
                this.traffics.map((traffic) => {
                    flights[traffic.Domestic_International] += traffic.Passenger_Count
                })

                return {
                    labels: ['Domestic', 'International'],
                    data  : [
                        {
                            label          : 'Rate passengers/flights',
                            backgroundColor: '#1876f2',
                            borderColor    : '#1876f2',
                            data           : [flights.Domestic, flights.International]
                        }
                    ]
                }
            }
        },
        methods   : {
            selectGraphRatesPassengerFlight() {
                this.showGraphRatesPassengerFlight = true
            }
        },
        created() {
            if (this.$store.getters.traffics && this.$store.getters.traffics.length === 0) {
                this.$store.dispatch('getTraffics')
                    .then(() => {
                        this.showGraphRateArrivalDeparture = true
                    })
            } else {
                this.showGraphRateArrivalDeparture = true
            }
        }

    }
</script>

<style lang='scss'>

    .traffic-graph {

        h2 {
            font-size: 30px;
            font-weight: 700;
            color: #3a3b3e;
            text-transform: capitalize;
            padding-left: 30px;
            padding-top: 15px;
        }

        .traffic-graph-tab {
            margin-top: 20px;

            ul.nav-tabs {
                border-bottom: 0;

                li {
                    a {
                        border: 0;
                        outline: none;
                        padding-top: 7px;
                        padding-left: 8px;
                        padding-right: 8px;
                        color: #65676b;
                        background-color: #ffffff;
                        border-color: #ffffff;
                        margin-right: 15px;
                        border-radius: 0;
                        height: 40px;
                        font-weight: 500;
                        font-size: 15px;

                        &.active {
                            color: #1876f2;
                            border-bottom: 3px solid #1876f2;

                            &:hover {
                                background-color: #ffffff;
                                border-bottom: 3px solid #1876f2;
                                border-radius: 0;
                            }
                        }

                        &:hover {
                            background-color: #F2F2F2;
                            border-color: #F2F2F2;
                            border-radius: 5px;
                        }
                    }
                }
            }
        }
    }

</style>
