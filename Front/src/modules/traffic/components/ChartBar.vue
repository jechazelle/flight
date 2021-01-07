<script>
    import { Bar } from 'vue-chartjs'

    export default {
        name    : 'ChartBar',
        extends : Bar,
        props   : [
            'labelXAxes',
            'labelYAxes',
            'labels',
            'data'
        ],
        mounted() {
            this.renderLineChart()
        },
        computed: {
            chartData: function () {
                return this.data;
            }
        },
        methods : {
            renderLineChart() {
                this.renderChart({
                    labels  : this.labels,
                    datasets: this.data
                }, {
                    responsive         : true,
                    maintainAspectRatio: false,
                    scales             : {
                        yAxes: [{
                            ticks    : {
                                beginAtZero: true,
                                callback: function(value) {
                                    if(value > 1000000) {
                                        return parseInt(value.toString().substring(0, value.toString().length - 6));
                                    }

                                    return value.toLocaleString()
                                }
                            },
                            gridLines: {
                                display: false
                            },
                            scaleLabel: {
                                display: true,
                                labelString: this.labelXAxes,
                                padding: 10
                            }
                        }],
                        xAxes: [{
                            ticks    : {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: this.labelYAxes,
                                padding: 10
                            }
                        }]
                    }
                })
            }
        },

        watch: {
            data: function () {
                if (this._chart !== undefined) {
                    this._chart.destroy();
                    //this.renderChart(this.data, this.options);
                    this.renderLineChart();
                }
            }
        }
    }
</script>