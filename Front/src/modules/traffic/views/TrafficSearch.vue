<template>
    <div class="traffic-search app-panel">

        <h2>Search</h2>

        <traffic-list></traffic-list>

        <div class="pagination-container text-center mt-3" v-if="pageCount !== 0">
            <paginate
                    :page-count="pageCount"
                    :page-range="5"
                    :margin-pages="2"
                    :click-handler="launchSearch"
                    :prev-text="'Précédent'"
                    :next-text="'Suivant'"

                    :container-class="'pagination'"
                    subContainerClassName="pages pagination"
                    active-class="active"
                    break-view-link-class="page-link"
                    break-view-class="page-item"
                    page-class="page-item"
                    prev-class="page-item"
                    next-class="page-item"
                    page-link-class="page-link"
                    prev-link-class="page-link"
                    next-link-class="page-link"
                    :force-page="pageSelected"
            >
            </paginate>
        </div>
    </div>
</template>

<script>
    import TrafficList from '../components/TrafficList.vue'

    export default {
        name      : 'TrafficSearch',
        components: {
            TrafficList
        },
        methods   : {
            launchSearch(pageSelected) {
                this.$parent.$refs.topProgress.start()

                let offset = Math.ceil(pageSelected * this.$store.getters.searchConfigParams.limit) - this.$store.getters.searchConfigParams.limit;

                this.$store.dispatch('searchSetParams', {offset: offset})
                this.$store.dispatch('searchSetConfig', {pageSelected: pageSelected})

                this.$store.dispatch('searchTraffics', {config: this.$store.getters.searchConfig}).then(() => {
                    this.$parent.$refs.topProgress.done()
                })
            }
        },
        computed  : {
            pageCount() {
                return Math.floor(this.$store.getters.searchConfigParams.total / this.$store.getters.searchConfigParams.limit)
            },

            pageSelected() {
                return this.$store.getters.searchConfigConfig.pageSelected
            }
        },
        created() {
            if (this.$store.getters.searchResultTraffics && this.$store.getters.searchResultTraffics.length === 0) {
                this.launchSearch(1)
            }
        }

    }
</script>

<style lang='scss'>

    .traffic-search {

        h2 {
            font-size: 30px;
            font-weight: 700;
            color: #3a3b3e;
            text-transform: capitalize;
            padding-left: 30px;
            padding-top: 15px;
        }

        ul.pagination {
            justify-content: center;

            li.page-item {
                a.page-link {
                    margin: 5px;
                    border-radius: 5px;
                    font-size: 13px;
                    padding: 8px 11px 8px 11px;

                    &:focus, &:hover {
                        box-shadow: none;
                    }
                }

                &.active {
                    a {
                        background-color: #21223B;
                        border-color: #21223B;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }

</style>
