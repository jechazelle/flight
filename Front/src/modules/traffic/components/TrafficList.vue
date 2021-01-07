<template>
    <div class="traffic-list">
        <table class="traffic-list-table table table-hover mt-4">
            <thead>
            <tr class="d-flex">
                <th class="col-sm-3 text-center">Report Period</th>
                <th class="col-sm-3 text-center">Terminal</th>
                <th class="col-sm-2 text-center">Arrival Departure</th>
                <th class="col-sm-2 text-center">Domestic International</th>
                <th class="col-sm-2 text-center">Passenger Count</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(traffic, indexTraffic) in trafficList" :key="indexTraffic" class="d-flex">
                <td class="col-sm-3 text-center">
                    {{traffic.ReportPeriod | formatDate}}
                </td>

                <td class="col-sm-3 text-center">
                    {{traffic.Terminal}}
                </td>

                <td class="col-sm-2 text-center">
                    {{traffic.Arrival_Departure}}
                </td>

                <td class="col-sm-2 text-center">
                    {{traffic.Domestic_International}}
                </td>

                <td class="col-sm-2 text-center">
                    {{traffic.Passenger_Count}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name      : 'TrafficList',
        computed: {
            trafficList () {
                return this.$store.getters.searchResultTraffics
            }
        }
    }
</script>

<style lang='scss'>

    .traffic-list {

        table.traffic-list-table {
            margin-bottom: 0;

            thead {
                tr {
                    th {
                        font-size: 15px;
                        border-bottom: 0;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        color: #65676b;
                        border-bottom: 0;
                        font-weight: 300;
                    }
                }
            }

            tbody {
                tr {
                    td {
                        font-size: 12px;
                        padding-bottom: 7px;
                        color: #050505;

                        padding-top: 10px;
                        display: block;

                        .action {
                            padding: 5px 10px 5px 10px;
                            color: #050505;
                            background-color: #E4E6EB;
                            border-color: #E4E6EB;
                            font-weight: 600;
                            border-radius: 5px;

                            &:hover {
                                background-color: #D8DADF;
                                border-color: #D8DADF;
                            }
                        }
                    }

                    &:hover {
                        background-color: #F4F5F9
                    }
                }
            }
        }
    }



</style>
