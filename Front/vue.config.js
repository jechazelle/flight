
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/scss/custom.scss";`
            }
        }
    }
};